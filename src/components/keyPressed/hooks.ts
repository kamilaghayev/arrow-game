import { useAppSelector } from "../../app/hooks"
import Hourglass from "../../assets/hourglass.svg"
import { ARROWS } from "../../constants"
const useKeyPressedElement = () => {
  const { steps, currentStep } = useAppSelector(state => state.playground)

  if (steps.length) {
    const { enteredValue } = steps[currentStep - 1]

    if (enteredValue) {
      return ARROWS[enteredValue as keyof typeof ARROWS]
    }
    console.log(Hourglass, ARROWS[enteredValue as keyof typeof ARROWS])
  }

  return Hourglass
}

export default useKeyPressedElement
