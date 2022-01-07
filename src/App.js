import useFetchAPI from "./Hooks/useFetchData";
import './App.css';

/*     
Todo:
-fetch the data from the API : // https://randomuser.me/api/?results=20
-Console log the data to check the information that we receive
-need to parse the data
-display the data
*/

function App() {
  const {isLoading, isError, data } = useFetchAPI('https://randomuser.me/api/?results=2')
 


 
  return (
    <div className="App">
      <h1>Api Practice</h1>
      {data && <p>{data.results[0].name.first}</p>}
      {data && <p>{data.results[0].name.last}</p>}
     </div>
  );
}

export default App;
