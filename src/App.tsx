import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";


function app() {
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
          <NavBar />
        </GridItem>

        <GridItem
          area={`aside`}
          paddingX={`3`}
        >
          <GenreList />
        </GridItem>

        <GridItem area={`main`} >
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}
export default app;
