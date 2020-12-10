import React from 'react'
import '../styles/Navbar.scss'
import { Box, IconButton, useColorMode, Flex, Spacer, Text, Center } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Navbar() {
    return (
        <div>
            <Flex py={5} width='90%' m='auto' height='10vh'>
                <Box flex='1'>
                    <Text className='brandname'>Lihat COVID-19</Text>
                </Box>
                <ThemeSelector />
            </Flex>
        </div>
    )
}


const ThemeSelector = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box>
            <IconButton
                icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                onClick={toggleColorMode}
                variant='outline'
                isRound
            />
        </Box>
    )
}
