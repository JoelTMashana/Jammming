import React from 'react';
import './SearchResults.css';
import {TrackList} from '../TrackList/TrackList';

export class SearchResults extends React.Component {
    render() {
        return (
           
            <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={this.props.searchResults}
                        onAdd={this.props.onAdd}
                        isRemoval={false}/>
          </div>   
        );
    }
}

// Search results renders the Results and header and renders the TrackList component 
// and sends it the value of the search results in its props