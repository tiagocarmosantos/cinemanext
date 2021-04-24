import { TMDB_APIURL, TMDB_APIKEY } from '../../../lib/tmdb'

export default async (req, res) => {
    let id = req.query.id

    const response = await fetch(`${TMDB_APIURL}/movie/${id}?language=pt-BR&api_key=${TMDB_APIKEY}`)
    const result = await response.json()

    res.status(200).json({
        info: result
    })
}