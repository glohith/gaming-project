import { HStack, Image } from "@chakra-ui/react"
import logo1 from "../assets/logo1.webp"
import SearchInput from "./SearchInput"

interface props{
    onSearch:(searchText:string)=>void;
}


const NavBar = ({onSearch}:props) => {
  return (

    <HStack>
        <Image src={logo1} boxSize={`100px`} />
        <SearchInput onSearch={onSearch} />
        
    </HStack>
    
      
    
  )
}

export default NavBar
