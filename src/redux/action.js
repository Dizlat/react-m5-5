import { types } from "./types";

export function changeNameInputAction ( value ) {
    return {
        type: types.NAME_INPUT,
        payload: value
    }
}

export function changeUserNameInputAction ( value ) {
    return {
        type: types.USERNAME_INPUT,
        payload: value
    }
} 

export function changeEmailInputAction ( value ) {
    return {
        type: types.EMAIL_INPUT,
        payload: value
    }
} 

export function changeWibsiteInputAction ( value ) {
    return {
        type: types.WEBSITE_INPUT,
        payload: value
    }
} 

function massage () {

    return {
        type: types.MASSAGE,

    }
}

function massageClose () {
    return {
        type: types.MASSAGE_CLOSE
    }
}

function postData (url, data) {
    const request = fetch(url, {
        method: "POST",
        headers: {"Content-type": "UserForm"},
        body: data,
    })
    return request
}

export function postUserAction (form) {
    const json= JSON.stringify(form)

    return async function(dispatch) {
        await postData(`https://jsonplaceholder.typicode.com/users`, json)
                .then(res =>res.json())
                .then(data => console.log(data))
                .then(data => dispatch(massage(data)))
                .then(data => setTimeout(() => {
                    dispatch(massageClose())
                }, 5000))
    }
}