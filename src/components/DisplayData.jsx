import axios from 'axios';
// import React from 'react';
import React, { Component } from 'react';

class DisplayData extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs:[]
         };
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

    render() { 
        return ( 
            <div>
                <h2>Song List</h2>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                
                    {
                        this.state.songs.length === 0 ?
                        <tr align="center"></tr> :
                    
                        this.state.songs.map((song)=> (
                        <tr key={song.id}>
                            

                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            {/* <td>
                                <button onClick={this.props.removeSong}>Delete</button>
                            </td> 
                             */}
                        </tr>
                        ))
                    }
                </tbody>

            </table>
            </div>
         );
    }
}
 
export default DisplayData;


//     componentDidMount(){
//         this.getAllSongs();
           
//        }
   
//        async getAllSongs(){
//            let response = await axios.get('http://127.0.0.1:8000/music/');
   
//            this.setState({
//                songs:response.data
//            })
//        }

//     return(
//         <div>
//             <h2>List of Songs</h2>
//             <table class="table table-bordered">
//                 <tbody>
//                 { 
//                 props.songs.map
//                 (song => <div key={song.title}>{song.title} {song.artist} {song.album} {song.genre} {song.release_date}</div>)
//                 }

//                 </tbody>
//             </table>
//         </div>
//     )   
// }



      
                // <tr>
                        
                //     <td>{props.songs.title}</td>
                //     <td>{props.songs.artist}</td>
                //     <td>{props.songs.album}</td>
                //     <td>{props.songs.genre}</td>
                //     <td>{props.songs.release_date}</td>
                // </tr>