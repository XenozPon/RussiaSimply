import './App.css';
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import HelpBar from "./Components/UX/HelpBar";
import Management from "./Components/management";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
        <Management />
        <br/><br/>
      <HelpBar />
        <br/><br/><br/>
        <Form />
    </div>
  );
}

export default App;
