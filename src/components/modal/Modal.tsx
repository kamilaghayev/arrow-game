import type { FC } from "react"
import type { IModalProps } from "./Modal.props"
import ResetGame from "../resetGame/ResetGame"

const Modal: FC<IModalProps> = ({ isOpen, setOpen, isWinnedGame }) => {
  return (
    <>
      <h1>{isWinnedGame ? "you win" : "you lose"}</h1>
      <ResetGame setOpen={setOpen} />
    </>
  )
}

export default Modal
