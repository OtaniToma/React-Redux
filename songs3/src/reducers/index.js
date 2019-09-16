import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { iata: 'HND', name: 'Tokyo Haneda' },
    { iata: 'KIX', name: 'Osaka Kansai' },
    { iata: 'YVR', name: 'Vancouver' },
    { iata: 'SEA', name: 'Seattle Tacoma' },
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'AIRPORT_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  airports: songsReducer,
  selectedSong: selectedSongReducer
});