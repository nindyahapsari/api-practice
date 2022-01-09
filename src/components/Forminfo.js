import React, { useState } from 'react'


// create a form,take the value, store it in the state and console log the input data


function Forminfo() {
    const [userEmail, setUserEmail] = useState("")
    const [userName, setUserName] = useState("")


    const handleUserEmail = (e) => {
        console.log("User Email: ", userEmail)
        setUserEmail(e.target.value)
    }

    const handleUserName = (e) => {
        console.log("User Name: ", userName)
        setUserName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("----------------------")
        console.log("User Name: ", userName)
        console.log("User Email: ", userEmail)
        console.log("----------------------")
        setUserEmail("")
        setUserName("")
    }

    return (
        <div className=" container my-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor='inputEmail' className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        value={userEmail}
                        onChange={handleUserEmail}
                        />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor='inputName' className="form-label">User Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="userName" 
                    value={userName}
                    onChange={handleUserName}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div>
                <p>{userName}</p>
                <p>{userEmail}</p>
            </div>
        </div>
    )
}

export default Forminfo
