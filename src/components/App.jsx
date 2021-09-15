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
            search:'',
            
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
        axios.delete ("http://127.0.0.1:8000/music/1" + id)
        .then(response =>{
           console.log(response.data);
        })
        .catch((err) =>{
            console.log(err);
        })

    }

    //Searchbar
    handleChange= (event) => {
        this.setState({
            ...this.state,
            search: event.target.value
        })
    }

    getSearchResults = () => {
        this.setState({
            ...this.state,
            songs: this.songs.filter()
        })
    }


    render() {
        return(
            <div>
                <DisplayData songs={this.state.songs} />
                <SongForm onSubmit={this.handleSongSubmit}/>
                <SearchBar searchSong={this.getSearchResults} />
            </div>
        )
    }
}


export default App;

