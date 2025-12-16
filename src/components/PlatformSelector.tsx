import { Button, Menu } from '@chakra-ui/react'

import { BsChevronDown } from "react-icons/bs"

import usePlatforms from '../hooks/usePlatform'
import type { Platform } from '../hooks/useGames'

interface props {
    onSelectPlatform:(Platform:Platform)=>void;
    selectedPlatform:Platform|null
}
const PlatformSelector = ({onSelectPlatform,selectedPlatform}:props) => {
    const {data} = usePlatforms();
  return (
    <Menu.Root>
        <Menu.Trigger asChild>

        <Button variant="outline">

            {selectedPlatform?.name || 'Platforms'}
            <BsChevronDown />
            </Button>

        </Menu.Trigger>
        <Menu.Positioner>
    <Menu.Content>
      {data?.map((platform) => (
        <Menu.Item 
        onClick={()=> onSelectPlatform(platform)}
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
