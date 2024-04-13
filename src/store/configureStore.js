import { createStore } from "redux";
import rootReducer from '../reducers';
import rotateReducer from "../reducers/rotateReducer";

function configureStore(state = { rotating: false }) {
    return createStore(rotateReducer,state);
  }
  
  export default configureStore;