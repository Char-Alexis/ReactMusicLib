import React, {useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './SongForm.css'
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

            <div class="page">
  <div class="container">
    <div class="left">
      <div class="login">Add songs to your playlist </div>
      <div class="eula">Post songs</div>
      
    </div>
    <div class="contact-us">
      <form class="form">
        <label for="title">Title</label>
        <input type="text" name="title" onInput={handleChange} value={songData.title}/>
        <label for="album">Album</label>
        <input type="text" name="album" onInput={handleChange} value={songData.album} />
         <label for="artist">Artist</label>
        <input type="text" name="artist" onInput={handleChange} value={songData.artist}/>
        <label for="genre">Genre</label>
        <input type="text" name="genre" onInput={handleChange} value={songData.genre}/>
         <label for="genre">Release Date</label>
        <input type="text" name="release_date" onInput={handleChange} value={songData.release_date}/>
        <button type="submit" onClick= {handleSubmit} id="submit" value="Submit">Add</button> 
      </form>
    </div>
  </div>
</div>

 </div>
      );

}
 
export default SongForm;