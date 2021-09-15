import React, {useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

const initialSongFormData={
    title: '',
    album:'',
    artist:'',
    genre:'',
    release_date:'',

}

const SongForm = (props) => {

    const [songData, setSongData]= useState(initialSongFormData);
    console.log (songData)
 
    const handleChange= (event)=> {
        const newData= {
            ...songData, 
            [event.target.name]: event.target.value
        }
        setSongData(newData);
    };

    
    const handleSubmit= (event)=> {
          axios.post("http://127.0.0.1:8000/music/", songData)
            .then(res => {
                console.log(res)
                props.onSubmit(res.data)
            })
            .catch(err => console.log(err));     
    };



    return (
        <div className="SongForm">
            <h2>Song Form</h2>
            
            <form className="row" >
                <label>Song Title</label>
                <input type= "text" name="title" onInput={handleChange} value={songData.title}/>
                <label>Album</label>
                <input type= "text" name="album" onInput={handleChange} value={songData.album} />
                <label>Artist</label>
                <input type= "text" name="artist" onInput={handleChange} value={songData.artist} />
                <label>Genre</label>
                <input type= "text" name="genre" onInput={handleChange} value={songData.genre} />
                <label>Release Date</label>
                <input type= "text" name="release_date" onInput={handleChange} value={songData.release_date} />

                <button type="button" onClick= {handleSubmit} class="btn btn-outline-dark btn-rounded"> Add Song</button>
            </form>
        </div>
      );

}
 
export default SongForm;