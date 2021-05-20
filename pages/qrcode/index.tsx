import {useState} from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import {Flex,Heading,Input,Button,InputGroup,useColorModeValue,InputLeftElement,InputRightElement,Stack} from '@chakra-ui/react';
import { PhoneIcon} from '@chakra-ui/icons';
import Header from '../../components/Header';
import styles from '../../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  const formBg = useColorModeValue("gray.100","gray.700")
  const [num,SetNum] = useState("")
  const [name,SetName] = useState("")
  const qrCode = async () => {
      //SetCode()
      // here I will make a DB call to save info in mongo
      const {data} = await axios({
        method: 'post',
        url: '/api/qrcode',
        data: {name:name,number:num}
      });
      console.log(data);
      router.push('/');
  }
  return (
    <div className={styles.container}>
    <Header />
    <Flex alignItems="center" justifyContent="center" height="100vh">
      <Flex direction="column" background={formBg} p={12} rounded={6}>
        <Heading mb={6}>Enter Information</Heading>
        <Stack spacing={4} mb={6}>
            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                children={<PhoneIcon color="gray.300" />}
                />
                <Input type="tel" placeholder="Phone number" value={num} onChange={(e) => { SetNum(e.target.value)}}/>
            </InputGroup>

            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                />
                <Input placeholder="Enter name" value={name} onChange={(e) => { SetName(e.target.value)}}/>
            </InputGroup>
            </Stack>
        <Button colorScheme="teal" onClick={qrCode}>Get QR Code</Button>
        
      </Flex>
    </Flex>
    </div>
   )
}
