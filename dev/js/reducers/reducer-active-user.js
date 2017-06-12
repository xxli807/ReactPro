/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

import * as t from '../../js/actions/ActionTypes';

// "state = null" is set so that we don't throw an error when app first boots up
// export default function (state = null, action) {
//     switch (action.type) {
//         case 'USER_SELECTED':
//             return action.payload;
//             break;
//     }
//     return state;
// }
export default function (state = null, action) {
    switch (action.type) {
        case t.SELECT_USER:
            return Object.assign({}, state, action.payload);
    }
    return state;
}

 

