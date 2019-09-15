import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: '北国の春', duration: '4:05' },
    { title: '雪國', duration: '2:30' },
    { title: '津軽海峡冬景色', duration: '3:15' },
    { title: '函館の女', duration: '1:45' },
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});