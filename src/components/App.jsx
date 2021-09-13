// import React, {useState} from "react"
// import axios from "axios";
import { Component } from "react";
import DisplayData from "./DisplayData";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs:[],
        }
    }

    render() {
        return(
            <div>
                <DisplayData songDisplay={this.state.songs}/>

            </div>
        )
    }
    
}



 
export default App;


// const App = () => {
//     const [songs, setSongs] = useState()

//     async function getAllSongs(){
//         let response = await axios.get('http://127.0.0.1:8000/music/')
//         setSongs(response)
//     }

//     return(
//         <SongForm />
//     )
// }

// export default App
