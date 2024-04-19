import type { FC } from "react"
import type { IModalProps } from "./Modal.props"
import ResetGame from "../resetGame/ResetGame"
import { Box, Modal, Typography } from "@mui/material"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
}

const ModalComponent: FC<IModalProps> = ({ isOpen, setOpen, isWinnedGame }) => {
  const handleClose = () => setOpen(false)
  const gameResults = isWinnedGame
    ? "Congratulations you won game"
    : "Oops... you lose"

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          color={isWinnedGame ? "success.main" : "red"}
        >
          {gameResults}
        </Typography>
        <ResetGame setOpen={setOpen} />
      </Box>
    </Modal>
  )
}

export default ModalComponent
