import { FaWindows,FaPlaystation,FaXbox,FaLinux,FaApple,FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import type { Platform } from '../hooks/useGames'
import { HStack, Icon,  } from '@chakra-ui/react'

import type { IconType } from 'react-icons'
interface props {
    platforms : Platform[]
}
const PlatFormIconList = ({platforms}: props) => {
    const IconMap:{[key:string]:IconType} = {
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        linux:FaLinux,
        mac:FaApple,
        android:FaAndroid,
        ios:MdPhoneIphone,
        nintendo:SiNintendo,
        web:BsGlobe
    }
  return (
    <>
    <HStack marginY={1}>
    {platforms.map((platform) => {
      const IconComponent = IconMap[platform.slug]
      return IconComponent ? <Icon key={platform.id} as={IconComponent} /> : null
    })}
    </HStack>
    
    
    </>
  )
}

export default PlatFormIconList
