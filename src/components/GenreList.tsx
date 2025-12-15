

import {  HStack, Image,  Link,  List, ListItem, Spinner,  } from '@chakra-ui/react'
import useGenres, { type Genre } from '../hooks/useGenre'
interface props{
  onSelectGenre:(genre:Genre)=>(void)
}


const GenreList = ({onSelectGenre}:props) => {
    const {data,isLoading,error} = useGenres()
    if(error) return null
    if(isLoading) return <Spinner />
  return (
    <List.Root>
        {data?.map(genre =><ListItem key={genre.id} paddingY={`5px`}>
            <HStack>
                <Image boxSize={`32px`} borderRadius={8} src={genre.image_background} />
                <Link fontSize={`lg`} onClick={() =>onSelectGenre(genre)}>{genre.name}</Link>
            </HStack>
        </ListItem>)}
        </List.Root>
    
  )
}

export default GenreList
