import {Flex,Button,useColorMode} from '@chakra-ui/react'
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div>
        <Flex m={3} justifyContent="flex-end"><Button size="xs" onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button></Flex>
        </div>
    )
}

export default Header
