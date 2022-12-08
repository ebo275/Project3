import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Anime from './components/Anime.js'
import Add from './components/Add.js'

const App = ()=> {

  const [anime, setAnimes] = useState([])
  
  //READING 1
  const getAnimes = () => {
    axios.get('http://localhost:3000/animes').then((response) => setAnimes(response.data), (err) => console.log(err)).catch((error)=> console.log(error))
  }

  //ADDING
  const handleCreate = (data) => {
    axios.post('http://localhost:3000/animes', data).then((response) => {
      console.log(response)
      setShows([...animes, response.data])
    })
  }

  //EDITING



  //DELETE
const handleDelete = (deletedAnime) => {
  axios.delete('http://localhost:3000/shows/' + deletedAnime._id).then((response) => {
    let newAnimes = animes.filter((anime) => {
      return anime._id !== deletedAnime._id
    })
    setShows(newAnimes)
  })
}

  //READING 2
  useEffect(() => {
    getAnimes()
  }, [])

  return (
    <>
    <h1>Anime Wonderland</h1>
    <Add handleCreate={handleCreate}/>
    {animes.map((anime) => {
        return (
          <>
            <Anime anime={anime}/>
            <button onClick={() => {handleDelete(anime)}} value={anime._id}>Delete</button>
          </>
        )})}
    </>
  );
}

export default App;
