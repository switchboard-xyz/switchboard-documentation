import React from "React";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button, Tooltip, Typography } from "@mui/material";

interface PublicKeyButtonProps {
  publicKey: string;
  sx?: any;
}

const PublicKeyButton = (props: PublicKeyButtonProps) => {
  let sx: any = { textTransform: "none", color: "#635bff" };
  if (props.sx) {
    sx = {
      ...sx,
      ...props.sx,
    };
  }

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = props.publicKey;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <Tooltip title="copy to clipboard" aria-label="copy to clipboard" arrow>
      <Button
        variant="text"
        size="small"
        startIcon={
          <ContentCopyIcon sx={{ fill: "#635bff" }} fontSize="small" />
        }
        onClick={copyToClipboard}
      >
        <Typography sx={sx} color="textSecondary" gutterBottom>
          {props.publicKey}
        </Typography>
      </Button>
    </Tooltip>
  );
};

export default PublicKeyButton;
