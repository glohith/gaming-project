

import { Card, CardBody, Heading, HStack, Image,  } from '@chakra-ui/react'
import type { Game } from '../hooks/useGames'
import PlatFormIconList from './PlatFormIconList'
import CriticScore from './CriticScore'



interface props{
    game : Game
}

const GameCard = ({game}: props) => {
  return (
    <Card.Root width={`300px`} borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} />
        <CardBody>
            <Heading size="2xl">{game.name}</Heading>
            <HStack justifyContent={`space-between`}>
            <PlatFormIconList platforms={game.parent_platforms.map(p => p.platform)} />
              <CriticScore score={game.metacritic} />
              </HStack>
        </CardBody>
    </Card.Root>
  )
}

export default GameCard;
