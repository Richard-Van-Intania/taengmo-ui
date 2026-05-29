import { useState, useId } from "react";

export function useAnchorElement() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const randomId = useId();

  const open = Boolean(anchorEl);
  const id = open ? randomId : undefined;

  function handleOpen(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return { anchorEl, open, id, handleOpen, handleClose };
}

export function useControlDialog() {
  const [openState, setOpenState] = useState<boolean>(false);

  function OpenDialog() {
    setOpenState(true);
  }

  function CloseDialog() {
    setOpenState(false);
  }

  return { openState, OpenDialog, CloseDialog };
}
