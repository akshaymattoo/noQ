import { useState } from 'react'
import dynamic from 'next/dynamic'
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
        <div>
          <QrReader 
          delay={300}
          onScan={handleScan}
          onError={handleError}/>
          <p>{result}</p>
        </div>
    )
}

export default Scan
