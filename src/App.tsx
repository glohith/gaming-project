import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import Sortselector from "./components/Sortselector";
export interface GameQuery{
  genre:Genre|null;
  platform:Platform|null;
  sortOrder:string;
  searchText:string;
}


function app() {

  const[gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" " main"`,
          lg: `"nav nav" "aside main"`,
        }}
      templateColumns={{
        base:`1fr`,
        lg:`200px 1fr`
      }}

        
      >
        <GridItem area={`nav`}>
          <NavBar onSearch={(searchText)=> setGameQuery({...gameQuery, searchText})}/>
        </GridItem>

        <GridItem
          area={`aside`}
          paddingX={`3`}
        >
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})} />
        </GridItem>

        <GridItem area={`main`} >
          <Flex  paddingLeft={2} marginBottom={5}>
            <Box marginRight={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})} />
            </Box>
            <Sortselector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
            </Flex>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}
export default app;
