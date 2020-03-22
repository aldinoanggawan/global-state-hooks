import React, { useState } from 'react'

import useGlobalState from '../hooks/useGlobalState'

const HomePage = () => {
    const globalState = useGlobalState()
    const currentId = globalState.id

    const [currentState, setCurrentState] = useState({
        name: '',
        age: '',
        occupation: '',
    })

    const handleChange = e => {
        const { name, value } = e.target

        setCurrentState({
            ...currentState,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        globalState.setId(currentState)
    }

    return(
        <>
            <h2>Name: {currentId.name}</h2>
            <h2>Age: {currentId.age}</h2>
            <h2>Occupation: {currentId.occupation}</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="name" type="text" placeholder="Enter name here" />
                <input onChange={handleChange} name="age" type="text" placeholder="Enter age here" />
                <input onChange={handleChange} name="occupation" type="text" placeholder="Enter occupation here" />
                <input type="submit" value="Change global state" />
            </form>
        </>
    )
}

export default HomePage