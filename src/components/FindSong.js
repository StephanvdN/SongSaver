import React from "react"
import SongList from "./SongList";
import UserInput from "./InputData";
import FilterSongs from "./SongFilter";





function FindSongs 
({songs, addInput, onSongClick, filterList}){
    

    return(
        <div className="searchSong">
            <UserInput onSubmit={addInput}/>

            <h2>Playlist</h2>
                 <FilterSongs
                onSubmit={filterList}
            />

            <SongList 
                songs={songs}
                onSongClick={onSongClick}
            />
        </div>
    )
}

export default FindSongs