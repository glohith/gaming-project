import { Button, HStack } from "@chakra-ui/react"
import { RiArrowRightLine, RiMailLine } from "react-icons/ri"

function App() {
  

  return (

    <HStack wrap="wrap" gap="6">
      <Button size="xs">Button (xs)</Button>
      <Button size="sm">Button (sm)</Button>
      <Button size="md">Button (md)</Button>
      <Button size="lg">Button (lg)</Button>
      

    </HStack>
  )
}

export default App
