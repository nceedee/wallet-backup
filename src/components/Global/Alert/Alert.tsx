import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";

interface AlertProps {
  onClose: () => void;
}

export const AlertError: React.FC<AlertProps> = ({ onClose }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!showAlert) {
    return null;
  }

  return (
    <div>
      <Alert severity="error">Your input can not be left empty</Alert>
    </div>
  );
};
