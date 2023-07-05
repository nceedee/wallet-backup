import { Alert } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";

interface AlertProps {
  onClose: () => void;
  children: ReactNode;
}

export const AlertSuccess: React.FC<AlertProps> = ({ onClose, children }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!showAlert) {
    return null;
  }

  return (
    <div>
      <Alert severity="success">{children}</Alert>
    </div>
  );
};
