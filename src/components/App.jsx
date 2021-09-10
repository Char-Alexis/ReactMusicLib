import React, {useState} from "react"
import axios from "axios";
import { Component } from "react";
import SearchBar from "./SearchBar";
import SongForm from "./SongForm";
import DisplayData from "./DisplayData";
import MusicTable from "./MusicTable"

const App = () => {
    const [songs, setSongs] = useState()

    async function getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/')
        setSongs(response)
    }

    return(
        <SongForm />
    )
}

export default App
