import React from 'react'
import { useState, useEffect } from 'react'
import { API_KEY } from './keys'

const CONTEXT_KEY = "8496bbf80bbf94c8e"
const useGoogleSearch = (term) => {
const [data, setData] = useState(null);

useEffect(() =>{       //created a custom hook
const fetchData = async() => {
    fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
    )
    .then(response => response.json())
    .then(result => {
        setData(result)
    })
}

fetchData();
},[term]) //whenever term changes is when we want this custom Hook to be called

    return {data}
}

export default useGoogleSearch
