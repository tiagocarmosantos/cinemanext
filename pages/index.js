import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({ trendingMovies }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes Em Destaque!
        </h1>
        <hr/>
        <Link href="/busca">Pesquisar</Link> 
        <Link href="/contato">Contato</Link>
        <hr/>
        <ul>
          {trendingMovies.map(item => (
            <li key={item.id}>
              <a href={`/movie/${item.id}`}>
                <>
                  <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150px" />
                  <br />
                  {item.title}
                </>
              </a>
            </li>
          ))}
        </ul>
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

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/trending`)
  const result = await response.json()

  return {
    props: {
      trendingMovies: result.list
    }
  }
}