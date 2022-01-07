import React, { useState, useEffect } from 'react'


function FetchAPI(url) {

    const url = 'https://randomuser.me/api/?results=2'
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const fetchData = (url) => {
        //fetching data promise
        try{
            setIsLoading(false)
            fetch(url).then(res => res.json()).then(data => setData(data))
        }catch(error){
            console.log(error)
            setIsError(true)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [])

    return {isError, isLoading, data}
}

export default FetchAPI



