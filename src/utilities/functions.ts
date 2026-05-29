import { uuidv4 } from "./utils";

export async function urlToPdfFile(url: string, prefix: string) {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob], `${prefix}-${uuidv4()}.pdf`, { type: "application/pdf" });
  return file;
}

export async function urlToFile(url: string, prefix: string) {
  const response = await fetch(url);
  const blob = await response.blob();
  const mimeType = blob.type || "application/octet-stream";
  const extension = mimeType.split("/")[1] || "bin";
  const file = new File([blob], `${prefix}-${uuidv4()}.${extension}`, { type: mimeType });
  return file;
}

export function openMap(latitude: number, longitude: number) {
  window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, "_blank");
}

export function isOdd(num: number) {
  return num % 2 !== 0;
}
