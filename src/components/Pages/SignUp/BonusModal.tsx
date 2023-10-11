import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Modal from "@mui/material/Modal";

const BonusModal = ({ open, onClose }: any) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="bonus-modal-title" aria-describedby="bonus-modal-description">
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          background: "white",
          padding: 20,
          borderRadius: 8,
        }}
      >
        <Alert severity="success">
          <AlertTitle>Bonus Welcome</AlertTitle>
          Congratulations, you just got a bonus of $50.
        </Alert>
      </div>
    </Modal>
  );
};

export default BonusModal;
