import React from 'react'
import { ChakraProvider, CSSReset, theme} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'

export default function App() {
    return (
        <div>
            <ChakraProvider theme={theme}>
                <CSSReset />
                <Navbar />
                <FirstSection />
                <SecondSection />
            </ChakraProvider>
        </div>
    )
}