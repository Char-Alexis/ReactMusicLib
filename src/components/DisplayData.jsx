import axios from 'axios';
import React, { Component } from 'react';

class DisplayData extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs:[],
        }
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/music/')
        .then(response =>{
            this.setState({
                songs:response.data
            })
            console.log(response.data)
        })
    }

    render() {
        return(
            <div className="display">
        
                <h1>List of Songs</h1>
                <table>
                    <thead>
                        <td>Title</td>
                        <td>Artist</td>
                        <td>Album</td>
                        <td>Genre</td>
                        <td>Release Date</td>
                    </thead>



                </table>
               
                {
                    this.state.songs.map(song => 
                    <div key={song.title}>{song.title} {song.artist} {song.album} {song.genre} {song.release_date}</div>)
                }
            </div>
        )
    }
    
}

export default DisplayData;

