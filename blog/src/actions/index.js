import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response})
  };


// This aciton creator is no more necessary.
// export const selectPost = () => {
//   return {
//     type: 'SELECT_POST'
//   }
// };