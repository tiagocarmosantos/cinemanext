import { TMDB_APIURL, TMDB_APIKEY } from '../../lib/tmdb'

export default async (req, res) => {
    let movie = req.query.movie

    const response = await fetch(`${TMDB_APIURL}/search/movie?query=${movie}&language=pt-BR&page=1&api_key=${TMDB_APIKEY}`)
    const result = await response.json()

    res.status(200).json({
        list: result.results
    })
}