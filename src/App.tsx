import { Grid, GridItem } from "@chakra-ui/react";

function app() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" " main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={`nav`} bg={`coral`}>
          nav
        </GridItem>

        <GridItem
          area={`aside`}
          bg={`gold`}
          display={{ base: "none", lg: "block" }}
        >
          Aside
        </GridItem>

        <GridItem area={`main`} bg={`dodgerblue`}>
          main
        </GridItem>
      </Grid>
    </>
  );
}
export default app;
