import { useRouter } from 'next/router'
import {Flex,Button,useColorMode} from '@chakra-ui/react'
import { Icon} from '@chakra-ui/icons';
import {FcHome} from 'react-icons/fc';
import { BsSun,BsMoon } from "react-icons/bs";
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();
    let icon = (colorMode === "light")?<Icon as={BsMoon} />:<Icon as={BsSun} />
    return (
        <div>
        <Flex m={3} justifyContent="flex-end">
            <Button leftIcon={<Icon as={FcHome} />} mr="3" size="xs" onClick={()=>{router.push('/')}}>Home</Button>
            <Button leftIcon={icon} size="xs" onClick={toggleColorMode}>
                {colorMode === "light" ? "Dark" : "Light"}
            </Button>
            </Flex>
        </div>
    )
}

export default Header
