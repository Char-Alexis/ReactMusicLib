import React, {useState} from 'react';
import axios from "axios";


const SongForm = () => {
    const [songs, setSongs] = useState()
    const [title, setTitle] = useState()
    const [album, setAlbum] = useState()
    const [artist, setArtist] = useState()
    const [genre, setGenre] = useState()
    const [releaseDate, setReleaseDate] = useState()
    
    async function getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/')
        setSongs(response)
    }   

    function handleChange (event) {
        setSongs(event.target.value);
    };

    
    function handleSubmit (event) {
        event.preventDefault();
        
        const data = {
            title: title,
            album: album,
            artist: artist,
            genre: genre,
            releaseDate: releaseDate
          };
          console.log(data)
          axios
            .post("http://127.0.0.1:8000/music/", data)
            // .then(res => {
            //     console.log(res)
            // })
            // .catch(err => console.log(err));     
    };



    return (
        <div className="container">
            <form onSubmit= {(event) => handleSubmit(event)}>
                <label>Song Title</label>
                <input type= "text" name="songtitle" onChange={handleChange} value={title}/>
                <label>Album</label>
                <input type= "text" name="album" onChange={handleChange} value={album} />
                <label>Artist</label>
                <input type= "text" name="artist" onChange={handleChange} value={artist} />
                <label>Genre</label>
                <input type= "text" name="genre" onChange={handleChange} value={genre} />
                <label>Release Date</label>
                <input type= "text" name="releasedate" onChange={handleChange} value={releaseDate} />
                <button type="submit"> Add Song</button>
            </form>
        </div>
      );

}
 
export default SongForm;