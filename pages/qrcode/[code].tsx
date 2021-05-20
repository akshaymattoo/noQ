import { useRouter } from 'next/router'
import Head from 'next/head'
import QRCode from "react-qr-code"
import Header from '../../components/Header';
import styles from '../../styles/Home.module.css'

export default function Car({ data }) {

    const router = useRouter()
    const { code } = router.query
    console.log(code)
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
    console.log(params)
    const req = await fetch(`http://localhost:3000/api/qrcode/${params.code}`);
    const data = await req.json();
    console.log(data);
    return {
        props: { data: data },
    }
}