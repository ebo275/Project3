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
            <summary>
                <button className="w-15 btn btn-lg btn-primary">Edit</button></summary>
        <form onSubmit={handleSubmit}>

        <div className="w-100 form-floating mb-3">
            <input className="form-control" id="floatingInput" type="text" name="image" onChange={handleChange} value={anime.image}/>
            <label className="form-label" htmlFor="image">Image:</label>
         </div>

            
            <br/>

            <div className="w-100 form-floating mb-3">
            <input className="form-control" id="floatingTitle" type="text" name="name" onChange={handleChange} value={anime.name}/>
            <label className="form-label" htmlFor="name">Name:</label>
            </div>

            
            <br/>

            <div className="w-100 form-floating mb-3">
            <input className="form-control" id="floatingGenre" type="text" name="genre" onChange={handleChange} value={anime.genre}/>
            <label className="form-label" htmlFor="genre">Genere:</label>
            </div>
            
            <br/>

            <div className="w-100 form-floating mb-3">
            <input className="form-control" id="floatingSeasons" type="number" name="seasons" onChange={handleChange} value={anime.seasons}/>
            <label  className="form-label" htmlFor="seasons">Seasons:</label>
            </div>
            
            <br/>
            <div className="w-100 form-floating mb-3"> 
            <input class="form-control" id="floatingEpisodes" type="number" name="episodes" onChange={handleChange} value={anime.episodes}/>
            <label className="form-label" htmlFor="episodes">Episodes:</label>
            </div>
            
            <br/>
            
            <div className="w-100 form-floating mb-3"> 

            <input class="form-control" id="floatingStudio" type="text" name="studio" onChange={handleChange} value={anime.studio}/>
            <label className="form-label" htmlFor="studio">Studio:</label>
            </div>
            
            <br/>

            <div className="w-100 form-floating mb-3">
            <input class="form-control" id="floatingDate" type= "text" name="release" onChange={handleChange} value={anime.release}/>
            <label className="form-label" htmlFor="releasedate">Release Date:</label>
            </div>
            <input className="w-55 center btn btn-md btn-primary" type="submit" value="Save Changes"/>
        </form>
        </details>
        </div>
        
        </>

    )

}

export default Edit