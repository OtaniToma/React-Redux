import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select an airport</div>
  }
  return (
    <div>
      <p>IATA: {song.iata}</p>
      <p>Name: {song.name}</p>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);