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
  const {isLoading, isError, data } = useFetchAPI('https://randomuser.me/api/?results=10')
 
  if(isLoading) return `<h2>Loading.....</h2>`

  console.log("Data app: ", data)

 
  return (
    <div className="App">
      <h1>Api Practice</h1>
      
        { data ?
         data.results.map((data, idx) => (
          <p key={idx}>
            {` ${data.name.title}, ${data.name.first}, ${data.name.last}`}
          </p>
         )) :
         "data not here"
        }
     
     </div>
  );
}

export default App;
