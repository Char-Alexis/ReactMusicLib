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


 
 




