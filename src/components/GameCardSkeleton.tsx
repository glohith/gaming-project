import { Card, CardBody,  Skeleton, SkeletonText } from '@chakra-ui/react';


const GameCardSkeleton = () => {
  return (
    <Card.Root>
        <Skeleton borderEndRadius={10} width={`300px`} height={`200px`} borderRadius={10} overflow='hidden' />
        <CardBody>
            <SkeletonText />
        </CardBody>
        

    </Card.Root>
  )
}

export default GameCardSkeleton
