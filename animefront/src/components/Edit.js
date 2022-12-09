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
            <lable htmlFor="name">Name:</lable>
            <input type="text" name="name" onChange={handleChange} value={person.name}/>
            <br/>
            <br/>
            <lable htmlFor="age">Age:</lable>
            <input type= "number" name="age" onChange={handleChange} value={person.age}/>
            <input type="submit"/>
        </form>
        </details>
        
        
        </>

    )

}