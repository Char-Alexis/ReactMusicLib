import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';

function SearchBar() {
    const [searchTerm, setSearchTerm]= useState('')
    return(
        <div>
            {/* <input type="text" placeholder="Search..." onChange={(event) => {setSearchTerm(event.target.value);}}></input>
            {song.filter((song) =>{
                if (searchTerm == "") {
                    return song
                }else if (song.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                }
             }) .map((song)=>{
                return (
                    <div key={song.id}>
                        <p>{song.title}</p>
                        <p>{song.artist}</p>
                        <p>{song.album}</p>
                        <p>{song.genre}</p>
                        <p>{song.release_date}</p>

                    </div>
                );
            })} */}
        </div>

    )
}

export default SearchBar

// import React, { Component } from 'react';


// class SearchBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             searchCriteria:'',
//             results: [],
//             song: props.songs,
//             submitted: false
//         }
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.song
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.searchSong()
//     }
    
//     async searchSong(){
    
//         const results = this.props.songs.filter (songs =>{
//             return(songs.title.toLowerCase().includes(this.state.searchCriteria.toLowerCase()))||
//             (songs.genre.toLowerCase().includes(this.state.searchCriteria.toLowerCase())) ||
//             (songs.artist.toLowerCase().includes(this.searchCriteria.toLowerCase())||
//             (songs.album.toLowerCase().includes (this.searchCriteria.toLowerCase())))
    
//         })
//     }

//     render() { 
//         return ( 
//             <div>
//             <form onSubmit={this.handleSubmit}>
//                 <input name='searchCriteria' onChange={this.handleChange}
//                 value={this.state.searchCriteria} type="search"/>
//                 <button type="submit">Search</button>
                
//             </form>
//             {this.state.submitted ?  (
//                 <div>
//                     <h1>Search Results</h1>
//                     <table>
//                         <thead>
//                             <th>Title</th>
//                             <th>Artist</th>
//                             <th>Album</th>
//                             <th>Genre</th>

//                             <th>Release Date</th>
//                         </thead>
//                         {this.state.results.map((song)=>{
//                             return(
//                                 <tr>
//                                     <td>{song.title}</td>
//                                     <td>{song.artist}</td>
//                                     <td>{song.album}</td>
//                                     <td>{song.genre}</td>
//                                     <td>{song.release_date}</td>
//                                 </tr>

//                             )
//                         })}
//                     </table>
//                 </div>
//             ): 
//             </div>
//         })
         
//     }
// }
 
// export default SearchBar;

 
 




