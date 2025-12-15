

import {  HStack, Image,  Link,  List, ListItem, Spinner,  } from '@chakra-ui/react'
import useGenres, { type Genre } from '../hooks/useGenre'
interface props{
  onSelectGenre:(genre:Genre)=>(void)
  selectedGenre: Genre|null
}


const GenreList = ({selectedGenre,onSelectGenre}:props) => {
    const {data,isLoading,error} = useGenres()
    if(error) return null
    if(isLoading) return <Spinner />
  return (
    <List.Root>
        {data?.map(genre =><ListItem key={genre.id} paddingY={`5px`}>
            <HStack>
                <Image boxSize={`32px`} borderRadius={8} src={genre.image_background} />
                <Link fontWeight={genre.id===selectedGenre?.id?`bold`:`normal`} fontSize={`lg`} onClick={() =>onSelectGenre(genre)}>{genre.name}</Link>
            </HStack>
        </ListItem>)}
        </List.Root>
    
  )
}

export default GenreList
