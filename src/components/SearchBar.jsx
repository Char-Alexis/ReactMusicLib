// import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import DisplayData from './DisplayData';
import React from 'react';


const SearchBar = (props) => {  
    
    
    return (
        <div class="input-group">
            <h3>Search songs</h3>
    
            <input type="text" placeholder='Search ...' onClick={props.handleChange} />
                
            {/* {
            props.songs.filter(song => <li {song} </li>)
            } */}

            <button type="button" class="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark">search</button>
                    
        </div>
    )
    
    
}
export default SearchBar;


    // inputChange = (event) => {
    //     this.setState({filterSearch: event.target.value})
    // };

    // formSubmit = (event) => {
    //     event.preventDefault();
    //     this.props.formSubmit(this.state.filterSearch)
    // }
                    // <li><button class="dropdown-item" type="button">Title</button></li>
                    // <li>
                    // <button class="dropdown-item" type="button">Artist</button>
                    // </li>
                    // <li>
                    // <button class="dropdown-item" type="button">Album</button>
                    // </li>
                    // <li>
                    // <button class="dropdown-item" type="button">Genre</button>
                    // </li> 
//     }
//     render() { 
//         return (
//             <div className="ui segment search-bar">
//                 <form className="ui form">
//                     <div className="field">
//                         <label>Song Search</label>
//                         <input type="text" onChange={this.inputChange} value={this.state.search}/>
//                     </div>
//                 </form>
//             </div>
//          );
//     }
// }
 





    // const handleSubmit = (event) => {
    //     event.preventDefault();

    // }
    // <Fragment>
        //     <h1>Search</h1>
        //     <form onSubmit={handleSubmit}>
        //         <input type="text"  placeholder="Search for songs by artist"/>
        //         {/* <button>type="submit">Search Song</button> */}
        //     </form>
        // </Fragment>