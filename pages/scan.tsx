import { useState } from 'react'
import QrReader from 'react-qr-reader'

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
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '60%' , height:'40%'}}
        />
        <p>{result}</p>
        </div>
    )
}

export default Scan
