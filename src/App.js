import React, {useState, useEffect} from "react"
import './App.css';
import Axios from "axios"

import Header from "./components/ui/Header"
import CharacterGrid from "./components/characters/CharacterGrid"

import Search from "./components/ui/Search"

const App = () => {
  const [items, setItems] = useState([])
  const [isloading, setIsloading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
     const fetchItems = async () => {
       const result = await Axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)

       setItems(result.data)
       setIsloading(false)
     }

     fetchItems()
  }, [query])
  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid items={items} isloading={isloading}/>
    </div>
  );
}

export default App;
