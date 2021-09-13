// import React, {useState} from "react"
import axios from "axios";
import { Component } from "react";
import DisplayData from "./DisplayData";
import SongForm from "./SongForm";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs:[]
        }
    }

  
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

    render() {
        return(
            <div>
                <DisplayData displayedSongs={this.songs}/>
                <SongForm />
            </div>
        )
    }
}

 
export default App;

    

    
