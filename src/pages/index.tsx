import { Box, Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import Title from '../components/atoms/Title'
import Layout from '../components/Layout'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout>

      <Title> Home Page </Title>

      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>

      <Box margin={3}>
        Get started with Chakra UI
      </Box>

    </Layout>
  )
}
