import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Contato({ developerInfo }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <strong>Fale Comigo!</strong>
          <br/>
          <small>{developerInfo.Name}</small>
          <br />
          <small> <a href={developerInfo.LinkedIn}>LinkedIn </a></small>
          <small> <a href={developerInfo.GitHub}>GitHub </a></small>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(`http://localhost:3000/api/developer`)
  const result = await response.json()

  return {
    props: {
      developerInfo: result
    }
  }
}