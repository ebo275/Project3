const Anime = (props) => {
    return (
        <>
        <div className="card-body">
        <img src={props.anime.image} className="card-img-top"></img>
        <h2 className="card-title">Title: {props.anime.name}</h2>
        <h4>Genre: {props.anime.genre}</h4>
        <h4>Number of Seasons: {props.anime.seasons}</h4>
        <h4>Number of Episodes: {props.anime.episodes}</h4>
        <h4>Studio: {props.anime.studio}</h4>
        <h5>Release Date: {props.anime.release}</h5>
        </div>
        </>
    )
}

export default Anime