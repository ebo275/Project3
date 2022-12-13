import {useState} from 'react'

const Edit = (props) => {

    const [anime, setAnime] = useState({...props.anime})

    const handleChange = (event) => {
        setAnime({...anime, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(anime)
    }

    return(
        <>
        <div className="mb-3">
        <details>
            <summary>Edit Anime</summary>
        <form onSubmit={handleSubmit}>
        <div className="form-floating w-50 p-form">
        <label className="form-label" htmlFor="image">Image:</label>
            <input type="text" name="image" onChange={handleChange} value={anime.image}/>
            </div>
            <br/>
            <br/>
            <div className="form-floating w-50 p-form">
            <label className="form-label" htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={handleChange} value={anime.name}/>
            </div>
            <br/>
            <br/>
            <label className="form-label" htmlFor="genre">Genere:</label>
            <input type="text" name="genre" onChange={handleChange} value={anime.genre}/>
            <br/>
            <br/>
            <label  className="form-label" htmlFor="seasons">Seasons:</label>
            <input type="number" name="seasons" onChange={handleChange} value={anime.seasons}/>
            <br/>
            <br/>
            <label className="form-label" htmlFor="episodes">Episodes:</label>
            <input type="number" name="episodes" onChange={handleChange} value={anime.episodes}/>
            <br/>
            <br/>
            <label className="form-label" htmlFor="studio">Studio:</label>
            <input type="text" name="studio" onChange={handleChange} value={anime.studio}/>
            <br/>
            <br/>
            <label className="form-label" htmlFor="releasedate">Release Date:</label>
            <input type= "text" name="release" onChange={handleChange} value={anime.release}/>
            <input className="w-55 center btn btn-md btn-primary" type="submit" value="Save Changes"/>
        </form>
        </details>
        </div>
        
        </>

    )

}

export default Edit