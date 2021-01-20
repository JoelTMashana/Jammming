import React from 'react';
import './Playlist.css';
import { TrackList } from '../TrackList/TrackList';

export class Playlist extends React.Component {
    constructor(props){
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }


    handleNameChange(e){
        this.props.onNameChange(e.target.value)
    }

    render(){
        return (
        <div className="Playlist">
            <input onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
            <TrackList tracks={this.props.playlistTracks}
                       onRemove={this.props.onRemove}
                       isRemoval={true}/>
            <button class="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
        </div> 
        );
    }
}

// renders the playlist div
// sets the default value of the playslist name
//renders the tracklist commented out for now because it doesn't have any props
// loads a button