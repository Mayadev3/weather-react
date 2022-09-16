import "./App.css";
import { Dna } from "react-loader-spinner";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </header>
    </div>
  );
}
export default App;
