import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component { 
    
  search(){
    this.props.onSearch();
  }
     
  render(){
        return (
         <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button class="SearchButton">SEARCH</button>
          </div> 
        );
    }
}

// Search bar, renders a search bar and a search button and is exported
