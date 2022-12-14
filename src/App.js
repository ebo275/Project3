import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Anime from './components/Anime.js'
import Add from './components/Add.js'
import Edit from './components/Edit.js'

const App = ()=> {


  const [animes, setAnimes] = useState([])
  
  //READING 1
  const getAnimes = () => {
    axios.get('https://tobi-ella-project3.herokuapp.com/anime').then((response) => setAnimes(response.data), (err) => console.log(err)).catch((error)=> console.log(error))

  }

  //ADDING
  const handleCreate = (data) => {

    axios.post('https://tobi-ella-project3.herokuapp.com/anime', data).then((response) => {
      console.log(response)
      setAnimes([...animes, response.data])

    })
  }

  //EDITING
const handleEdit = (data) => {
  axios.put('https://tobi-ella-project3.herokuapp.com/anime/' + data._id, data).then((response) => {
    console.log(response)
    let newAnimes = animes.map((anime) => {
      return anime._id !== data._id ? anime : data
    })
    setAnimes(newAnimes)
  })
}


  //DELETE
const handleDelete = (deletedAnime) => {
  axios.delete('https://tobi-ella-project3.herokuapp.com/anime/' + deletedAnime._id).then((response) => {
    let newAnimes = animes.filter((anime) => {
      return anime._id !== deletedAnime._id
    })
    setAnimes(newAnimes)
  })
}

  //READING 2
  useEffect(() => {
    getAnimes()
  }, [])

  return (
    <>
    <div className='title'>
    <h1>Anime Wonderland</h1>
    
    <Add handleCreate={handleCreate}/>
    </div>
    <main className="d-flex flex-wrap flex-row mx-5 justify-content-around">
    {animes.map((anime) => {
        return (
          <>
          <div className="card my-3 mx-2 d-flex flex-column justify-content-center align-items-center" id='productCard'>
            <Anime anime={anime}/>
            <Edit anime={anime} handleEdit={handleEdit}/>
            <button className="w-30 btn btn-md btn-primary" onClick={() => {handleDelete(anime)}} value={anime._id}>Delete</button>
            
            </div>

          </>
        )})}
        </main>

    </>
  );
}

export default App;
