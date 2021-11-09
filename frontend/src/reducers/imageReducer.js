import { UPLOAD_IMAGE, SET_LOADING, UPLOAD_ERROR, CLEAR_IMAGE} from '../actions/types';


const initialState = {
  image: null,
  loading: false,
  error: null
};

const imageReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_IMAGE: return {
      ...state,
      image: action.payload,
      loading:false
    }
    case CLEAR_IMAGE: 
    return {
      ...state,
      image: null
    }
    case UPLOAD_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
    
  }
};

export default imageReducer;