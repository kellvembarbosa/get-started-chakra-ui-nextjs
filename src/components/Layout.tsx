import { Flex } from '@chakra-ui/react'
import React from 'react'

function Layout({ children }) {
    return (
        <Flex minHeight="100vh" flexDirection="column" justifyContent="center" alignItems="center">
            {children}
        </Flex>
    )
}

export default Layout
