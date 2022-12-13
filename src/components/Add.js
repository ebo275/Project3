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
         <form onSubmit={handleSubmit}>
         <div className="form-floating">
         <lable htmlFor="image">Cover Art:</lable>
            <input type="text" name="image" onChange={handleChange}/>
            </div>
            <br/>
            <br/>
            <lable htmlFor="title">Title:</lable>
            <input type="text" name="name" onChange={handleChange}/>
            <br/>
            <br/>
            <lable htmlFor="genre">Genre:</lable>
            <input type="text" name="genre" onChange={handleChange}/>
            <br/>
            <br/>
            <lable htmlFor="studio">Studio:</lable>
            <input type="text" name="studio" onChange={handleChange}/>
            <br/>
            <br/>
            <lable htmlFor="seasons">Number of Seasons:</lable>
            <input type= "number" name="seasons" onChange={handleChange}/>
            <lable htmlFor="episodes">Number of Episodes:</lable>
            <input type="number" name="episodes" onChange={handleChange}/>
            <br/>
            <br/>
            <lable htmlFor="releaseDate">Release Date:</lable>
            <input type="text" name="release" onChange={handleChange}/>
            <br/>
            <br/>
            <input className="w-25 btn btn-lg btn-primary" type="submit"/>
        </form>
        </>
    )


}

export default Add