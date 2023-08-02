import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from 'react-icons/lib';

interface Props {
    platforms: Platform[];
}
const PlatformIconList = ({ platforms}: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // name: PlayStation
    // slug: playstation
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  }
  return (
    <>
      <HStack marginY={3}>
        {/* {platforms.map(platform => <Text>{platform.name}</Text>)} */}
        {platforms.map(platform=><Icon as={iconMap[platform.slug]} color={"gray.400"} />)}
      </HStack>
    </>
  )
}

export default PlatformIconList