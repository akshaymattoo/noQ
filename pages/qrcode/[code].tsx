import { useRouter } from 'next/router'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const QRCode =  dynamic(() => import("react-qr-code"))  
import Header from '../../components/Header';
import styles from '../../styles/Home.module.css'


export default function Code({ data }) {

    const router = useRouter()
    const { code } = router.query
     
    return (
        <div className={styles.container}>
        <Header/>
            <Head>
                <title>{data.name} {data.number}</title>
            </Head>

            <main className={styles.main}>
            <QRCode value={`${data.name}${data.number}`} />
            </main>
        </div>
    )
}


export async function getServerSideProps({ params }) {
    console.log("--getServerSideProps--")
    /*let server = "http://localhost:3000"
    if(process.env.NODE_ENV !== 'production'){
        server = "https://n0q.herokuapp.com"
    }
    server = "https://n0q.herokuapp.com"*/
    const req = await fetch(`https://n0q.herokuapp.com/api/qrcodes/${params.code}`);
    const data = await req.json();
    
    return {
        props: { data: data },
    }
}