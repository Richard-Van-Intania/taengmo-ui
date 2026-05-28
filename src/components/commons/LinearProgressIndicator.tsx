import { LinearProgress } from "@mui/material";

export default function LinearProgressIndicator() {
  return (
    <div className="fixed top-0 -right-1 -left-1 z-10">
      <LinearProgress
        sx={{
          height: 4,
          backgroundColor: "#d4e4f6",
          "& .MuiLinearProgress-bar": { backgroundColor: "#2b638b" },
        }}
      />
    </div>
  );
}
