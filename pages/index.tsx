import Head from 'next/head'
import {Flex,Heading,Input,Button,useColorMode,useColorModeValue} from '@chakra-ui/react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const formBg = useColorModeValue("gray.100","gray.700")
  const router = useRouter();
  return (
    <div className={styles.container}>
    <Head>
      <title>noQ</title>
    </Head>
   <Header/>
    {/*<Flex alignItems="center" justifyContent="center" height="100vh">
      <Flex direction="column" background={formBg} p={12} rounded={6}>
        <Heading mb={6}>Log info</Heading>
        <Input placeholder="abbc@gmail.com" variant="filled" mb={3} type="email"/>
        <Input placeholder="password" variant="filled" mb={6} type="password"/>
        <Button colorScheme="teal">Login</Button>
      </Flex>
  </Flex>*/}
    <Flex direction="column" textAlign="center" alignItems="center" justifyContent="center" height="100vh">
      <Flex direction="column" background={formBg} p={12} rounded={6}>
        <Heading as="h1" size="4xl" isTruncated>
          Welcome to noQ
        </Heading>
        <Heading as="h4" size="md" mt="4">
          No need to stand in queues to get stuff and maintain social distance
        </Heading>
        
      </Flex>
      <Button onClick={ () => {router.push('/qrcode')}} colorScheme="teal" size="lg" mt="6">
          Generate qrCode
        </Button>
    </Flex>
    </div>
   )
}
