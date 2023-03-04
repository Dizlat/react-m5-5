import { types } from "../types"


const initialState = {
    name: '',
    username: '',
    email: '',
    website: '',
    massage: '',

}

export default function usersReducer( state = initialState, action ) {
    switch (action.type) {
        case types.NAME_INPUT:
            return { ...state, name: action.payload }

        case types.USERNAME_INPUT:
            return {...state, username: action.payload }

        case types.EMAIL_INPUT:
            return {...state, email: action.payload }

        case types.WEBSITE_INPUT:
            return {...state, website: action.payload }

        case types.MASSAGE:
            return { ...state, massage: "Успех", name: '', username: "", email: '', website: ''}

        case types.MASSAGE_CLOSE:
            return { ...state, massage: "" }

        default: return state
    }
}