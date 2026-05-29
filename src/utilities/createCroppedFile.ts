import type { Area } from "react-easy-crop";
import { uuidv4 } from "./utils";

function createImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = url;
    image.onload = () => resolve(image);
    image.onerror = reject;
  });
}

async function createCroppedBlob(imageSrc: string, crop: Area): Promise<Blob> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context not available");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0);
  const imageData = ctx.getImageData(crop.x, crop.y, crop.width, crop.height);
  const cropCanvas = document.createElement("canvas");
  const cropCtx = cropCanvas.getContext("2d");
  if (!cropCtx) throw new Error("Canvas context not available");
  cropCanvas.width = crop.width;
  cropCanvas.height = crop.height;
  cropCtx.fillStyle = "#ffffff";
  cropCtx.fillRect(0, 0, crop.width, crop.height);
  cropCtx.putImageData(imageData, 0, 0);
  return new Promise((resolve, reject) => {
    cropCanvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("Canvas empty"));
        return;
      }
      resolve(blob);
    }, "image/jpeg");
  });
}

export async function createCroppedFile(imagePreview: string, croppedAreaPixels: Area, prefix: string): Promise<File> {
  const blob = await createCroppedBlob(imagePreview, croppedAreaPixels);
  const file = new File([blob], `${prefix}-${uuidv4()}.jpeg`, { type: "image/jpeg" });
  return file;
}
