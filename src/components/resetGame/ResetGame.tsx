import type { FC } from "react"
import type { TypeSetState } from "../../types"

import { useAppDispatch } from "../../app/hooks"
import { resetStore } from "../store/slices"
import { Button } from "@mui/material"
import ReplayIcon from "@mui/icons-material/Replay"
interface IResetGameProps {
  setOpen?: TypeSetState<boolean>
}
const ResetGame: FC<IResetGameProps> = ({ setOpen }) => {
  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(resetStore())

    if (setOpen) {
      setOpen(false)
    }
  }
  return (
    <Button
      variant="contained"
      onClick={handleClose}
      sx={{ borderRadius: "20px" }}
    >
      <ReplayIcon />
      reset
    </Button>
  )
}

export default ResetGame
