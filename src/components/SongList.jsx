import React, { Component } from 'react';
import "./SongList.css"
class DisplayData extends Component {



    render() { 
        return ( 
            <div className="container">
            <div class="row">
            <table class="heading-section">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                
                <table class="table"></table>
                <tbody className="col">

                
                    {
                        this.props.songs.length === 0 ?
                        <tr align=""></tr> :
                    
                        this.props.songs.map((song)=> (
                        <tr key={song.id}>
                            

                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            <td>
                                <button type="button"  onClick={(event) => this.props.deleteSongData(song.id, event)} >❌</button>
                            </td> 
                            
                        </tr>
                        ))
                    }
                </tbody>

            </table>
            
            </div>

         
            </div>


	
         );
    }
}
 
export default DisplayData;


