import React, { useEffect } from 'react'
import "../../App.css"
import { useDispatch, useSelector } from 'react-redux'
import { changeEmailInputAction, changeNameInputAction, changeUserNameInputAction, changeWibsiteInputAction, postUserAction } from '../../redux/action'



export default function MainPage() {

    const dispatch = useDispatch()
    const { name, username, email, website, users, massage } = useSelector( state => state.usersReducer ) 

    const changeNameInput = (e) => {
        dispatch(changeNameInputAction(e.target.value))
    }

    const changeUserNameInput = (e) => {
        dispatch(changeUserNameInputAction(e.target.value))
    }

    const changeEmailInput = (e) => {
        dispatch(changeEmailInputAction(e.target.value))
    }

    const changeWebsiteInput = (e) => {
        dispatch(changeWibsiteInputAction(e.target.value))
    }
    
    
    const postUser = () => {
        const form = {name, username, email, website}
        dispatch(postUserAction(form))
    }
    return (
        <>
        <div className='app-header'>
            <input type="text" placeholder='name' onChange={changeNameInput} value={name}/>
            <input type="text" placeholder='usermane' onChange={changeUserNameInput} value={username}/>
            <input type="email" placeholder='email' onChange={changeEmailInput} value={email}/>
            <input type="text" placeholder='website' onChange={changeWebsiteInput} value={website}/>
        </div>
        <button onClick={postUser}>Post</button>
        <div>
            {massage}
        </div>
        </>
    )
}
