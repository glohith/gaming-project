import { Card, CardBody,  Skeleton, SkeletonText } from '@chakra-ui/react';


const GameCardSkeleton = () => {
  return (
    <Card.Root>
        <Skeleton />
        <CardBody>
            <SkeletonText />
        </CardBody>
        

    </Card.Root>
  )
}

export default GameCardSkeleton
