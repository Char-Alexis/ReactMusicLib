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
  
  
    render() {
        return(
            <div>
                <DisplayData displayedSongs={this.songs}/>
                <SongForm />
                <SearchBar searchSong={this.songs} />
            </div>
        )
    }
}


export default App;


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