import { Box, Button } from "@mui/material"
import { useAppSelector } from "../../app/hooks"

const btnStyle = {
  borderRadius: "20px",
  marginRight: 2,
}
const Score = () => {
  const { totalSuccesses, totalUnsuccesses } = useAppSelector(
    state => state.playground,
  )

  return (
    <Box paddingTop={2}>
      <Button variant="outlined" color="success" sx={{ ...btnStyle }}>
        Successes: {totalSuccesses}
      </Button>
      <Button variant="outlined" color="error" sx={{ ...btnStyle }}>
        Unsuccesses: {totalUnsuccesses}
      </Button>
    </Box>
  )
}

export default Score
