import { TMDB_APIURL, TMDB_APIKEY } from '../../lib/tmdb'

export default async (req, res) => {
    const response = await fetch(`${TMDB_APIURL}/trending/movie/day?language=pt-BR&api_key=${TMDB_APIKEY}`)
    const result = await response.json()

    res.status(200).json({
        list: result.results
    })
}