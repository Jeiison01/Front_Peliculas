import { API_IMAGE_HOST } from "../../constants/api"

export const movieApiMapper = ({
    id,
    title,
    poster_path,
    release_date,
    vote_average}) => {
    return{
        id,
        title,
        image: `${API_IMAGE_HOST}${poster_path}`,
        year: new Date(release_date).getFullYear(),
        rating: vote_average
    }
}