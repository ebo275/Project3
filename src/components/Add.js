import { useState } from "react";

const Add = (props) => {

    const [anime, setAnime] = useState({image: "", title:"", genre: "", studio: "", seasons: 0, episodes: 0, releaseDate: ""})

    const handleChange = (event) => {
        setAnime({...anime, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        props.handleCreate(anime)

      

    }
    
    return (
        <>
        <details>
            <summary>
                <button className="w-15 btn btn-lg btn-primary">Add New Anime</button>  
                </summary>
         <form onSubmit={handleSubmit}>
            <div className="w-25 form-floating mb-3">
             <input placeholder="Image URL" class="form-control" id="floatingInput" type="text" name="image" onChange={handleChange}  />
            <label htmlFor="image">Cover Art:</label>
            </div>
            <br/>
            

            <div className="w-25 form-floating mb-3">
            <input placeholder="Title" class="form-control" id="floatingTitle" type="text" name="name" onChange={handleChange}/>
            <label htmlFor="title">Title:</label>
            
            </div>
            <br/>
            
            <div className="w-25 form-floating mb-3">
            <input placeholder="Genre" class="form-control" id="floatingGenre" type="text" name="genre" onChange={handleChange}/>
            <label htmlFor="genre">Genre:</label>
            
            </div>
            <br/>

            <div className="w-25 form-floating mb-3">
            <input placeholder="Studio" class="form-control" id="floatingStudio" type="text" name="studio" onChange={handleChange}/>
            <label htmlFor="studio">Studio:</label>
            </div>
            <br/>
            
            <div className="w-25 form-floating mb-3">
            <input placeholder="Seasons" class="form-control" id="floatingSeasons"  type= "number" name="seasons" onChange={handleChange}/>
            <label htmlFor="seasons">Number of Seasons:
            </label>
            
            </div>

            <br/>

            <div className="w-25 form-floating mb-3">
            <input placeholder="Episodes" class="form-control" id="floatingEpisodes"type="number" name="episodes" onChange={handleChange}/>
            <label htmlFor="episodes">Number of Episodes:</label>
            
            </div>
            
            <br/>
            <div className="w-25 form-floating mb-3">
            <input placeholder="Release Date" class="form-control" id="floatingDate" type="text" name="release" onChange={handleChange}/>
            <label htmlFor="releaseDate">Release Date:</label>
            
            </div>
            
            <br/>
            <input className="w-25 btn btn-lg btn-primary" type="submit"/>

        </form>
        </details>
        </>
    )


}

export default Add