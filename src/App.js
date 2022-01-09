import useFetchAPI from "./Hooks/useFetchData";
import React, { useState, useEffect } from 'react'

import './App.css';
import Forminfo from "./components/Forminfo";

/*     
Todo:
-fetch the data from the API : // https://randomuser.me/api/?results=5
-Console log the data to check the information that we receive
-need to parse the data
-display the data
*/



function App() {

  const {isLoading, isError, data: userDatas } = useFetchAPI('https://randomuser.me/api/?')
  const [page, setPage] = useState(0) 
  const [testString, setTestString] = useState("test String from State")
 
  useEffect(() => {
    
  }, [])

  const fetchingDataPage = () => {
   setPage(page + 1)
   window.location.reload()
  }
  

  const userName = ({results}) => {
    let firstName 
    let lastName
   for(const userInfo of results){
        console.log(userInfo.name.first)
        console.log(userInfo.name.last)
        return `${userInfo.name.first} ${userInfo.name.last}`
      }
  }


  if(isLoading){
    return(
      <h2>Loading...</h2>
    )
  }
  return (

      <div className="App">
        <h1>Api Practice</h1>
       {userDatas && userDatas.results.map((userInfos, index) => (
        <div key={index}>
           <h2>{userDatas && userName(userDatas)}</h2>
           <img src={userDatas && userInfos.picture.medium} alt="user pictures" />
         </div>
       ))   
      } 

          
        <button onClick={fetchingDataPage}>Fetch Data</button>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre>  */}

        <Forminfo />

      </div>
    );

  
}

export default App;
