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

      <div class="container">
  <div class="row">
    <div class="col">
      <div class="">
      <form class="form">
        <label for="title"></label>
        <input type="text" name="title" placeholder='Title' onInput={handleChange} value={songData.title}/>
        <label for="album"></label>
        <input type="text" name="album" placeholder='Album' onInput={handleChange} value={songData.album} />
         <label for="artist"></label>
        <input type="text" name="artist" placeholder='Artist' onInput={handleChange} value={songData.artist}/>
        <label for="genre"></label>
        <input type="text" name="genre" placeholder='Genre' onInput={handleChange} value={songData.genre}/>
         <label for="genre"></label>
        <input type="text" name="release_date" placeholder='Release Date' onInput={handleChange} value={songData.release_date}/>
        <button type="submit" onClick= {handleSubmit} value="Submit">Add</button> 
      </form>
    </div>
    </div>
    <div class="col">
   
    </div>
        <div className="container">

            <div class="row">

      
    </div>
    
  </div>
  
</div>

 </div>
 
      );

}
 
export default SongForm;