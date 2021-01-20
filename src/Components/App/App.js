import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import './App.css';
import { SearchResults } from '../SearchResults/SearchResults.js';
import { Playlist } from '../Playlist/Playlist';

export class App extends React.Component {
  constructor(props){
    super(props);
    //initiliase the state of the tracks to hard coded values
    this.state = {
      searchResults: [
      {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
      {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
      {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
    ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1', id: 4},
        {name: 'playlistName2', artist: 'playlistArtist2', album: 'playlistAlbum2', id: 5} 
      ],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  
  search(term){
     console.log(term);
  }

  savePlaylist(uri){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
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

