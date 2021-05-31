import { useState } from 'react'
import dynamic from 'next/dynamic'
import Header from '../components/Header';
import styles from '../styles/Home.module.css'
const QrReader =  dynamic(() => import('react-qr-reader'),{ ssr: false })  

const Scan = () => {
   
     const [result,setResult] = useState('No result');
     
     const  handleScan = data => {
       console.log(`data --- >${data}`)
        if (data) {
          setResult(data)
        }
      }
     const handleError = err => {
        console.error(err)
      }
      
    return (
       
      <div >
        <div >
         <Header/>
         </div>
          <QrReader 
          delay={300}
          onScan={handleScan}
          onError={handleError}/>
          <p>{result}</p>
        </div>
    )
}

export default Scan
