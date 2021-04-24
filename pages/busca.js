import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'

export default function Busca({ trendingMovies }) {
  const [searchText, setSearchText] = useState(``)
  const [movieList, setMovieList] = useState([])

  const handleSearch = async () => {
    if (!!searchText & event.key === 'Enter') {
      const response = await fetch(`http://localhost:3000/api/search?movie=${searchText}`)
      const result = await response.json()
      setMovieList(result.list)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Busca Filmes
        </h1>
        <hr/>
          <Link href="/">Home</Link>
          <Link href="/contato">Contato</Link>
        <hr/>
        <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)} onKeyUp={handleSearch} />
        Termo de busca: {searchText}
        <button onClick={handleSearch}>Buscar</button>
        <ul>
          {movieList.map(item => (
              <li key={item.id}>
                <a href={`/movie/${item.id}`}>
                  <>
                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150px" />
                    <br />
                    {item.title}
                  </>
                </a>
              </li>
            ))
          }
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