import { authConstants } from "../actions/constants";

const initState = {
     name: 'Sayam'
};
const errorHandle = (state = initState, action) => {

     console.log(action);

     switch(action.type){
          default:
               break;
          case authConstants.LOGIN_REQUEST:
               state = {
                    ...state,
                    ...action.payload
               }
               break;
     }

     return state;
}

export default errorHandle;