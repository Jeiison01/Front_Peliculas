import { API_IMAGE_HOST } from "../constants/api"

const MovieCard = ({title, image, year, rating}) => {
  return (
    <div className="p-4">
        <div className="">
            <img className="w-full" src={`${image}`}/>
            <h3>{title}</h3>
            <p>{rating}</p>
            <p>{year}</p>
        </div>
    </div>
  )
}

export default MovieCard