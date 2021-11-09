import { UPLOAD_IMAGE, SET_LOADING, UPLOAD_ERROR, CLEAR_IMAGE } from './types';

export const uploadImage = (image) => async dispatch => {
    try {
      dispatch({
        type: SET_LOADING
      });
      const res = await fetch('/image', {
        method: 'POST',
        body: image
      });
      const data = await res.json();
      dispatch({
        type: UPLOAD_IMAGE,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: UPLOAD_ERROR,
        payload: error.response.data
      })
    };
};

export const clearImage = () => async dispatch => {
  dispatch({
    type: CLEAR_IMAGE
  });
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};