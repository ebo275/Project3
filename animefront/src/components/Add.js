import { useState } from "react";

const Add = () => {

    const [show, setShow] = useState({image: "", title:"", seasons: 0, episodes: 0, releaseDate: ""})

    const handleChange = (event) => {
        setShow({...show, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        PaymentResponse.handleCreate(person)
    }
    
    return (
        <>
         <form onSubmit={handleSubmit}>
         <lable htmlFor="image">Cover Art:</lable>
            <input type="text" name="image" onChange={handleChange}/>
            <br/>
            <br/>
            <lable htmlFor="title">Title:</lable>
            <input type="text" name="name" onChange={handleChange}/>
            <br/>
            <br/>
            <lable htmlFor="seasons">Number of Seasons:</lable>
            <input type= "number" name="seasons" onChange={handleChange}/>
            <lable htmlFor="episodes">Number of Episodes:</lable>
            <input type="number" name="episodes" onChange={handleChange}/>
            <br/>
            <br/>
            <lable htmlFor="releaseDate">Release Date:</lable>
            <input type="text" name="releaseDate" onChange={handleChange}/>
            <br/>
            <br/>
            <input type="submit"/>
        </form>
        </>
    )


}

export default Add