

import { Card, CardBody, Heading, HStack, Image,  } from '@chakra-ui/react'
import type { Game } from '../hooks/useGames'
import PlatFormIconList from './PlatFormIconList'
import CriticScore from './CriticScore'



interface props{
    game : Game
}

const GameCard = ({game}: props) => {
  return (
    <Card.Root>
        <Image src={game.background_image} />
        <CardBody>
           
            <HStack justifyContent={`space-between`} marginBottom={3}>
            <PlatFormIconList platforms={game.parent_platforms.map(p => p.platform)} />
              <CriticScore score={game.metacritic} />
              </HStack>
               <Heading size="2xl">{game.name}</Heading>
        </CardBody>
    </Card.Root>
  )
}

export default GameCard;
