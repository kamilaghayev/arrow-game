import type { FC } from "react"
import type { RandomKeysProps } from "./RandomKeys.props"
import { useAppSelector } from "../../app/hooks"
import WelcomeText from "./welcomeText"
import RandomArrows from "./randomArrows"

const RandomKeys: FC<RandomKeysProps> = ({ isTimerActive }) => {
  const steps = useAppSelector(state => state.playground.steps)

  return (
    <div>
      {steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows steps={steps} />
      )}
    </div>
  )
}

export default RandomKeys
