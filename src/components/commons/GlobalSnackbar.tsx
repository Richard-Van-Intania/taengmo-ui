"use client";

import { Snackbar } from "@mui/material";
import { useSnackbarStore } from "../../stores/commonsStore";

export function GlobalSnackbar() {
  const { open, message, close } = useSnackbarStore();
  return <Snackbar open={open} autoHideDuration={3000} onClose={() => close()} anchorOrigin={{ vertical: "top", horizontal: "right" }} message={message} />;
}
