import { Box, Container, Typography } from "@mui/material"
import Playground from "./components/playground/Playground"
ssdxvfdb bfdfb
const App = () => {
  return (
    <Container sx={{ pt: 2 }}>
      <Typography
        component="h1"
        variant="h3"
        textAlign={"center"}
        sx={{ color: "success.main", pb: 5 }}
      >
        Arrow game
      </Typography>

      <Box flexGrow={1}>
        <Playground />
      </Box>
    </Container>
  )
}

export default App
