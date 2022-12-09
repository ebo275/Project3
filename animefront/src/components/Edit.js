import {useState} from 'react'

const Edit = (props) => {

    const [anime, setAnime] = useState({...props.anime})

    const handleChange = (event) => {
        setAnime({...anime, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(anime)
    }

    return(
        <>
        <details>
            <summary>Edit Anime</summary>
        <form onSubmit={handleSubmit}>
        <lable htmlFor="image">Image:</lable>
            <input type="text" name="image" onChange={handleChange} value={anime.image}/>
            <br/>
            <br/>
            <lable htmlFor="name">Name:</lable>
            <input type="text" name="name" onChange={handleChange} value={anime.name}/>
            <br/>
            <br/>
            <lable htmlFor="genre">Genere:</lable>
            <input type="text" name="genre" onChange={handleChange} value={anime.genre}/>
            <br/>
            <br/>
            <lable htmlFor="seasons">Seasons:</lable>
            <input type="number" name="seasons" onChange={handleChange} value={anime.seasons}/>
            <br/>
            <br/>
            <lable htmlFor="episodes">Episodes:</lable>
            <input type="number" name="episodes" onChange={handleChange} value={anime.episodes}/>
            <br/>
            <br/>
            <lable htmlFor="studio">Studio:</lable>
            <input type="text" name="studio" onChange={handleChange} value={anime.studio}/>
            <br/>
            <br/>
            <lable htmlFor="releasedate">Release Date:</lable>
            <input type= "number" name="release" onChange={handleChange} value={anime.release}/>
            <input type="submit"/>
        </form>
        </details>
        
        
        </>

    )

}

export default Edit