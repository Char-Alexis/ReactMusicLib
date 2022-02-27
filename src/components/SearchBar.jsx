import React, { useState } from "react";


import 'bootstrap/dist/css/bootstrap.css';

function SearchBar() {
    const [searchTerm, setSearchTerm]= useState(['']);

   function search(song){
        return song.filter(song => song.title.toLowerCase().indexOf(song) > -1);
    }
 
    return(
        
        <div>
            <input type="text" placeholder="Search..."  onChange={(event) => {setSearchTerm(event.target.value);}}></input>
            {Object.values(search).filter((row) =>{
                if (searchTerm == "") {
                    return searchTerm
                }else if (searchTerm.title.toLowerCase().includes(searchTerm.toLowerCase())) {
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
            })}

            {/* <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/> */}
        </div>

    )
}

export default SearchBar


   

 
 




