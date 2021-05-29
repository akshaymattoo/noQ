import {useState} from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import {Flex,Heading,Input,Button,InputGroup,useColorModeValue,
  InputLeftElement,InputRightElement,Stack,
  NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper} from '@chakra-ui/react';
import { PhoneIcon} from '@chakra-ui/icons';
import Header from '../../components/Header';
import styles from '../../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  const formBg = useColorModeValue("gray.100","gray.700")
  const [num,setNum] = useState("")
  const [name,setName] = useState("")
  const [waitingTime,setWaitingTime] = useState(0)
  const qrCode = async () => {
      //SetCode()
      // here I will make a DB call to save info in mongo
      let server = "http://localhost:3000"
      if(process.env.NODE_ENV !== 'production'){
          server = "https://n0q.herokuapp.com"
      }
      server = "https://n0q.herokuapp.com"
      console.log( {name:name,number:num,waitingTime:waitingTime})
      const {data} = await axios({
        method: 'post',
        url: `${server}/api/qrcodes`,
        data: {name:name,number:num,waitingTime:waitingTime}
      });
      console.log(JSON.stringify(data,null,2));
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
                color="gray.300"
                fontSize="1.2em"
                />
                <Input placeholder="Enter name" value={name} onChange={(e) => { setName(e.target.value)}}/>
            </InputGroup>

            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                children={<PhoneIcon color="gray.300" />}
                />
                <Input type="tel" placeholder="Phone number" value={num} onChange={(e) => { setNum(e.target.value)}}/>
            </InputGroup>

            
            <InputGroup>
              <NumberInput defaultValue={10} min={10} max={20} onChange={(e) => { setWaitingTime(parseInt(e))}}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </InputGroup>
            </Stack>
        <Button colorScheme="teal" onClick={qrCode}>Get QR Code</Button>
        
      </Flex>
    </Flex>
    </div>
   )
}
