import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Show from './components/show.js'
import Add from './components/Add.js'

const App = ()=> {

  const [shows, setShows] = useState([])
  
  //READING 1
  const getShows = () => {
    axios.get('http://localhost:3000/shows').then((response) => setShows(response.data), (err) => console.log(err)).catch((error)=> console.log(error))
  }

  //ADDING
  const handleCreate = (data) => {
    axios.post('http://localhost:3000/shows', data).then((response) => {
      console.log(response)
      setShows([...shows, response.data])
    })
  }

  //EDITING



  //DELETE
const handleDelete = (deletedShow) => {
  axios.delete('http://localhost:3000/shows/' + deletedShow._id).then((response) => {
    let newShows = shows.filter((show) => {
      return show._id !== deletedShow._id
    })
    setShows(newShows)
  })
}

  //READING 2
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
            <button onClick={() => {handleDelete(show)}} value={show._id}>Delete</button>
          </>
        )})}
    </>
  );
}

export default App;
