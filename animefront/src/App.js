import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Show from './components/show.js'
import Add from './components/Add.js'

const App = ()=> {

  const [shows, setShows] = useState([])
  
  const getShows = () => {
    axios.get('http://localhost:300/shows').then((response) => setShows(response.data), (err) => console.log(err)).catch((error)=> console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:300/shows', data).then((response) => {
      console.log(response)
      setShows([...shows, response.data])
    })
  }

  useEffect(() => {
    getShows()
  }, [])

  return (
    <>
    <h1>Anime Wonderland</h1>
    <Add handleCreate={handleCreate}/>
    {shows.map((show) => {
        return (
          <>
            <Show show={show}/>
          </>
        )})}
    </>
  );
}

export default App;
