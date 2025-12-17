import { Box, Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from "react-icons/bs";
interface props{
    onSearch:(searchText:string)=>void;
}




const SearchInput = ({onSearch}:props) => {
    
const ref = useRef<HTMLInputElement>(null);
  return (
    <Box as="form" width="100%" onSubmit={(event)=>{event.preventDefault();
        if(ref.current) onSearch(ref.current.value)
    }}>
    <InputGroup startElement={<BsSearch />}>
    
    <Input ref={ref} borderRadius={20} placeholder='Search games...' variant="subtle" />
    </InputGroup>
    </Box>
    
  )
}

export default SearchInput
