import { useCallback, useEffect, type FC } from "react"
import type { KeyPressedProps } from "./KeyPressed.props"
import { ARROW_CODES } from "../../constants"
import { setEnteredValue } from "../store/slices"
import { useAppDispatch } from "../../app/hooks"
import useKeyPressedElement from "./hooks"

const KeyPressed: FC<KeyPressedProps> = props => {
  const { isTimerActive } = props
  const dispatch = useAppDispatch()

  const keyPressedElement = useKeyPressedElement()

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (ARROW_CODES.includes(e.code) && isTimerActive) {
        dispatch(setEnteredValue(e.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    if (isTimerActive) {
      window.addEventListener("keydown", handleKeydown)
    }

    return () => {
      window.removeEventListener("keydown", handleKeydown)
    }
  }, [handleKeydown, isTimerActive])

  return (
    <>
      <h5>Pressed key</h5>
      <img src={keyPressedElement} alt={keyPressedElement} />
    </>
  )
}

export default KeyPressed
