import React, { useState } from "react";

function SimpleForm() {
    const [state, setState] = useState({
        values: {
            name: '',
            email: '',
            password: ''
        },
        errorValidations: {
            name: undefined,
            email: undefined,
            password: undefined
        }
    });
    function updateName(nameValue) {
        setState(prev => {
            const returnVal = { ...prev }
            returnVal.values.name = nameValue
            return returnVal
        })
    }
    function updateEmail(emailValue) {
        setState(prev => {
            const returnVal = { ...prev }
            returnVal.values.email = emailValue
            return returnVal
        })
    }
    function updatePassword(pswdValue) {
        setState(prev => {
            const returnVal = { ...prev }
            returnVal.values.password = pswdValue
            return returnVal
        })
    }
    function checkName(name) {
        const nameRegex = /^[a-zA-Z\s\-]+$/;
        return nameRegex.test(name)
    }
    function checkEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }
    function checkPassword(pswd) {
        const pswdRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@&_])[a-zA-Z\d@&_]{8,}$/;
        return pswdRegex.test(pswd)
    }
    function checkValidations() {
        const newErrorValidations = {
            name: state.values.name.length === 0
                ? 'name is mandatory'
                : !checkName(state.values.name)
                    ? 'enter valid name'
                    : undefined,
            email: state.values.email.length === 0
                ? 'email is mandatory'
                : !checkEmail(state.values.email)
                    ? 'enter valid email'
                    : undefined,
            password: state.values.password.length === 0
                ? 'password is mandatory'
                : !checkPassword(state.values.password)
                    ? 'password should be 8 characters long, should contain one upper case, should contain numbers and should contain either of & or @ as special characters'
                    : undefined
        };

        setState(prev => ({
            ...prev,
            errorValidations: newErrorValidations
        }));
    }
    return (
        <>
            <h1>Simple Form</h1>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" onChange={(e) => updateName(e.target.value)} value={state.values.name} />
            <span>{state.errorValidations.name}</span>
            <br />
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" onChange={(e) => updateEmail(e.target.value)} value={state.values.email} />
            <span>{state.errorValidations.email}</span>
            <br />
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" onChange={(e) => updatePassword(e.target.value)} value={state.values.password} />
            <span>{state.errorValidations.password}</span>
            <br />
            <button onClick={checkValidations}>Submit</button>
        </>
    )
}

export default SimpleForm;