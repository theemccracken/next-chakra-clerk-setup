import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/theme'
import { ClerkProvider } from '@clerk/nextjs'

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ClerkProvider>
  )
}