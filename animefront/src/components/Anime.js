const Anime = (props) => {
    return (
        <>
        <img src={props.anime.image}></img>
        <h2>Name: {props.anime.name}</h2>
        <h4>Genre: {props.anime.genre}</h4>
        <h4>Number of Seasons: {props.anime.seasons}</h4>
        <h4>Number of Episodes: {props.anime.episodes}</h4>
        <h4>Studio: {props.anime.studio}</h4>
        <h5>Release Date: {props.anime.release}</h5>
        </>
    )
}

export default Anime