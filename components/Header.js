import { useRouter } from 'next/router'
import {Flex,Button,useColorMode} from '@chakra-ui/react'
import { Icon} from '@chakra-ui/icons';
import {FcHome} from 'react-icons/fc';
import { IoIosQrScanner } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { BsSun,BsMoon } from "react-icons/bs";
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();
    let icon = (colorMode === "light")?<Icon as={BsMoon} />:<Icon as={BsSun} />
    return (
        <div>
        <Flex m={3} justifyContent="center">
            <Button leftIcon={<Icon as={FcHome} />} mr="3" size="md" onClick={()=>{router.push('/')}}>Home</Button>
            <Button leftIcon={<Icon as={IoIosQrScanner} />} mr="3" size="md" onClick={()=>{router.push('/scan')}}>Scan</Button>
            <Button leftIcon={<Icon as={FaUsers} />} mr="3" size="md" onClick={()=>{router.push('/list')}}>List</Button>
            <Button leftIcon={icon} size="md" onClick={toggleColorMode}>
                {colorMode === "light" ? "Dark" : "Light"}
            </Button>
            </Flex>
        </div>
    )
}

export default Header
