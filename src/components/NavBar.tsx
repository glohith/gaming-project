import { HStack, Image, Text } from "@chakra-ui/react"
import logo1 from "../assets/logo1.webp"


const NavBar = () => {
  return (

    <HStack>
        <Image src={logo1} boxSize={`100px`} />
        <Text>NavBar</Text>
    </HStack>
    
      
    
  )
}

export default NavBar
