import axios from "axios";
import { Component } from "react";
import SongList from "./SongList";
import SearchBar from "./SearchBar";
import SongForm from "./SongForm";
import './App.css'
<link rel="preconnect" href="https://fonts.googleapis.com"></link>

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs:[],
            searchCriteria:'',
            
        }
    }

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

    
    handleSongSubmit = (newSongData) => {
        this.setState ({
            songs: [...this.state.songs, newSongData]
            
        })
    }
    

    deleteSongData = (id, event) => {
        axios.delete ("http://127.0.0.1:8000/music/" + id+"/")
        .then(response =>{
            console.log(response.data);
            this.getAllSongs();
        })
        .catch((err) =>{
            console.log(err);
        })
        
    }
    
    //Searchbar
    // handleSearch= (event) => {
    //     this.setState({
    //         ...this.state,
    //         searchCriteria: event.target.value
    //     })
    // }
    
    // getSearchResults = () => {
        //     this.setState({
            //         ...this.state,
            //         songs: this.songs.filter()
            //     })
            // }
            
            
    render() {
     
        return(
            <div >
                <h1>Music Library</h1>
                <SearchBar  />
                <SongList songs={this.state.songs} deleteSongData={this.deleteSongData} />
                <SongForm onSubmit={this.handleSongSubmit}/>
            </div>


        )
    }
}


export default App;

