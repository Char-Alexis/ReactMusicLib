import React, {useState} from "react"
import axios from "axios";
import { Component } from "react";
import DisplayData from "./DisplayData";
import SongForm from "./SongForm";
import SearchBar from "./SearchBar";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs:[],
            
        }
    }
// displayData
    componentDidMount() {
        this.getAllSongs();
    }

    getAllSongs() {
        axios.get('http://127.0.0.1:8000/music/')
        .then(response => response.data)
        .then((data)=>{
            this.setState({songs:data});
        });
    }
// posts new song
    handleSongSubmit = (newSongData) => {
        this.setState ({
            songs: [...this.state.songs, newSongData]
            
        })
    }
//remove song

// filter

handleChange
    
    render() {
        return(
            <div>
                <DisplayData songs={this.state.songs}/>
                <SongForm onSubmit={this.handleSongSubmit}/>
                <SearchBar searchSong={this.handleChange} />
            </div>
        )
    }
}


export default App;

// removeSong () {
//     axios.delete('http://127.0.0.1:8000/music/2',{this.setState.songs})
//     .then((data) => {
//         console.log(data);
//         })
//     .catch((err) =>{
//         console.log(err);
//     });
//     this.setState({
//         // songs: this.state.songs.filter(song => {song.id} !== song.id)
//     });
// }

// const SongForm = () => {
//     const [songs, setSongs] = useState()
// componentDidMount(){
//     axios
//     .get('http://127.0.0.1:8000/music/')
//     .then(response => this.setState({
//         songs:response.data
      
//     }));
    
//     async function getAllSongs(){
//         let response = await axios.get('http://127.0.0.1:8000/music/')
//         setSongs(response)
//     }