import axios from 'axios';
import * as Config from '../constants/Config';

export default function callApi(endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};


// export function sendRequest(requestFields) {
//     const {
//         verb,
//         path,
//         params
//     } = requestFields;

//     const fetchOptions = {
//         method: verb,
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         credentials: 'include',
//     }

//     if (verb !== 'GET') {
//         fetchOptions['body'] = params
//     }

//     return dispatch => {
//         dispatch(requestStartAction());

//         return fetch(`/shopify/api${path}`, fetchOptions)
//             .then(response => response.json())
//             .then(json => dispatch(requestCompleteAction(json)))
//             .catch(error => {
//                 dispatch(requestErrorAction(error));
//             });
//     };
// }