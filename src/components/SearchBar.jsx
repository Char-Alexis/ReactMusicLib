// import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';


const SearchBar = (props) => {  
    
    
    return (
        <div class="input-group">
            <h3>Search songs</h3>
    
            <input type="text" placeholder='Search ...' onChange={props.handleChange} />
                
            {/* {
            props.songs.filter(song => <li {props.song} </li>
            } */}

            <button type="button" class="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark">search</button>
                    
        </div>
    )
    
    
}
export default SearchBar;


 
 




