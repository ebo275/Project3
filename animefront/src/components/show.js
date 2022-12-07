const Show = (props) => {
    return (
        <>
        <img src={props.show.image}></img>
        <h2>Title: {props.show.title}</h2>
        <h4>Number of Seasons: {props.show.seasons}</h4>
        <h4>Number of Episodes: {props.show.episodes}</h4>
        <h5>Release Date: {props.show.releaseDate}</h5>
        </>
    )
}

export default Show