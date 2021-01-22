import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import './App.css';
import { SearchResults } from '../SearchResults/SearchResults.js';
import { Playlist } from '../Playlist/Playlist';


import Spotify from '../../util/Spotify';

export class App extends React.Component {
  constructor(props){
    super(props);
    //initiliase the state of the tracks to hard coded values
    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  
  search(term){
    Spotify.search(term).then(searchResults => {
       this.setState({ searchResults: searchResults})
     });

  }

  savePlaylist(uri){
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() =>{
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }
  
  
  updatePlaylistName(name){
    this.setState({playlistName: name})
  }

  
  removeTrack(track){
    let tracks = this.state.playlistTracks;
    //check if current track matches the id of another track in the arr
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    //update the state to matach the change
    this.setState({playlistTracks: tracks});
    }
  
  
  
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
   //push new track to playlist and update state  
   tracks.push(track);
   this.setState({playlistTracks: tracks})
  }
 

  render() {
   return (
   <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar onSearch={this.search}/> 
      <div className="App-playlist">
      <SearchResults  searchResults={this.state.searchResults} 
                      onAdd={this.addTrack}/>

       <Playlist playlistTracks={this.state.playlistTracks}
                  playlistName={this.state.playlistName}
                  onRemove={this.removeTrack}
                  onNameChange={this.updatePlaylistName}
                  onSave={this.savePlaylist}/>
      </div>
    </div>
  </div>
  );
}

}

