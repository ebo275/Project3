import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Anime from './components/Anime.js'
import Add from './components/Add.js'

const App = ()=> {

  const [animes, setAnimes] = useState([])
  
  const getAnimes = () => {
    axios.get('http://localhost:300/anime').then((response) => setShows(response.data), (err) => console.log(err)).catch((error)=> console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:300/anime', data).then((response) => {
      console.log(response)
      setAnimes([...animes, response.data])
    })
  }

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
          </>
        )})}
    </>
  );
}

export default App;
