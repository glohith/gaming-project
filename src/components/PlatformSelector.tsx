import { Button, Menu } from '@chakra-ui/react'
import { button } from 'framer-motion/client'
import { BsChevronDown } from "react-icons/bs"

import usePlatforms from '../hooks/usePlatform'


const PlatformSelector = () => {
    const {data} = usePlatforms();
  return (
    <Menu.Root>
        <Menu.Trigger asChild>

        <Button as={button} variant="outline">

            Platforms
            <BsChevronDown />
            </Button>

        </Menu.Trigger>
        <Menu.Positioner>
    <Menu.Content>
      {data?.map((platform) => (
        <Menu.Item 
          key={platform.id} 
          // 2. Value must be unique for each item
          value={platform.name} 
        >
          {platform.name}
        </Menu.Item>
      ))}
    </Menu.Content>
  </Menu.Positioner>
    

    </Menu.Root>
  )
}

export default PlatformSelector
