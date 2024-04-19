import { useAppSelector } from "../../app/hooks"

const Score = () => {
  const { totalSuccesses, totalUnsuccesses } = useAppSelector(
    state => state.playground,
  )

  return (
    <>
      <h5>Score</h5>
      <span>Successes: {totalSuccesses}</span>
      <hr />
      <span>Unsuccesses: {totalUnsuccesses}</span>
    </>
  )
}

export default Score
