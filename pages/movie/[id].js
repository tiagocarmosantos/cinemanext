import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function MovieItem({movieInfo}) {
  console.log(movieInfo)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {movieInfo.title}
        </h1>
        <ul>
          {movieInfo.genres.map(item => (
              <li key={item.id}>
                {item.name}
              </li>
            ))
          }
        </ul>
        <p>Nota: {movieInfo.vote_average}{` `}Duração: {movieInfo.runtime} min</p>
        Onde Assistir?<a href={movieInfo.homepage}>NETFLIX</a>
        <p>{movieInfo.overview}</p>
        <img src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`} width="400px" />
        <hr/>
          <Link href="/">Home</Link>
          <Link href="/busca">Pesquisar</Link>
          <Link href="/contato">Contato</Link>
        <hr/>
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

export async function getServerSideProps(context) {
  const response = await fetch(`http://localhost:3000/api/movie/${context.params.id}`)
  const result = await response.json()

  console.log(result)

  return {
    props: {
      movieInfo: result.info
    }
  }
}