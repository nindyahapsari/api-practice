import React, { useState, useEffect } from 'react'


function useFetchAPI(urlApi) {

    // const url = 'https://randomuser.me/api/?results=2'
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const fetchData = async () => {
        //fetching data promise
        try{
            setIsLoading(false)
            await fetch(urlApi).then(res => res.json()).then(data => setData(data))
        }catch(error){
            console.log(error)
            setIsError(true)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {isError, isLoading, data}
}

export default useFetchAPI



