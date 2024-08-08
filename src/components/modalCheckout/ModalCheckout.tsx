import { useState, useEffect, type MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Box, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { paths } from "../../_lib/constants";

import styles from "./modalCheckout.module.scss";

export default function ModalCheckout({
  open = false,
  onClose,
}: {
  open?: boolean;
  onClose?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(open);
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
    navigate(paths.packages);
  };
  const handleBackdropClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target !== event.currentTarget) return; // Ignore clicks on modal content
    handleClose();
  };

  return (
    <Modal
      disableEnforceFocus
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="checkout-modal-title"
      aria-describedby="checkout-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={handleBackdropClick}
    >
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          textAlign: "center",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 2,
          borderRadius: 1,
          minWidth: "260px",
          ":focus-visible": {
            outline: "1px solid black",
          },
        }}
      >
        <div className={styles.titleWithClose}>
          <span title="Close" onClick={handleClose}>
            <Close />
          </span>
          <h2 id="checkout-modal-title">Package Booked!</h2>
        </div>
        <div className={styles.imgContainer}>
          <img
            height="180px"
            width="180px"
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHNzcjR4enVodTJqa3pnNWV2djNqamtjaGlpOTN3anRhZThta2VmbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/zL8DbfAYR9rK7z4ahY/giphy.gif"
            alt="Giphy sticker"
          />
          <a href="https://giphy.com/stickers/transparent-zL8DbfAYR9rK7z4ahY">
            via GIPHY
          </a>
        </div>
        <p id="checkout-modal-description">You'll hear from us soon.</p>

        <Button variant="contained" onClick={handleClose}>
          See more packages
        </Button>
      </Box>
    </Modal>
  );
}
