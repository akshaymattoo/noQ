import { useState } from 'react'
import dynamic from 'next/dynamic'
const QrReader =  dynamic(() => import('react-qr-reader'),{ ssr: false })  

const Scan = () => {
     const [result,setResult] = useState('No result');
     const  handleScan = data => {
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
         
          {...handleError}
          {...handleScan}
          
        />
        <p>{result}</p>
        </div>
    )
}

export default Scan
