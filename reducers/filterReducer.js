
import { GET_FILTERS} from "../contants/actionTypes";

const filterReducer = (state, action) => {
  switch (action.type) {
    case GET_FILTERS: {
      return { filters: {...action.payload} };
    }
    default: {
      return state;
    }
  }
};

export default filterReducer;