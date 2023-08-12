import "./App.css";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header /> <br />
      <Notes /> <br />
      <Footer />
    </div>
  );
}

export default App;