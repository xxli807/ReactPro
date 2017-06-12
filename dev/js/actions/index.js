
import * as t from './ActionTypes';
import createAction from '../../js/utils/createAction';

export const selectUser = createAction(t.SELECT_USER, (user) =>
{
   let id = user.id;
   let data = FetchData();
   console.log(data.name);

   user.first = 'xxxxxx';
   
   return user;
 
});

// export const selectUser = (user) => {
//     console.log("You clicked on user: ", user.first);
//     return {
//         type: 'USER_SELECTED',
//         payload: user
//     }
// };

function FetchData() {
    let data = {};
    let options = {
        //    method: "POST",
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors',
    };

    fetch('http://localhost:61037/home/JsonTest', options).then(function (response) {
        console.log('response ', response)
        return response.json()
    }).then(function (json) {
        console.log('parsed json', json);
        console.log('parsed json and data', json.data);
        data = json.data;
            
        console.log("data: " + data);
    }).catch(function (ex) {
        console.log('parsing failed', ex)
    })

    console.log("data.name:" + data.name);
    return data;
}


