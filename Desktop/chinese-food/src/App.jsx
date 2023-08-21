import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import './App.css';
import {useState} from "react";

function App() {

  const [page, setPage] = useState("MainHome");

  return (
    <div className="app-whole-div">
      <Header setPage={setPage}/>
      <Main page={page} setPage={setPage}/>
      <Footer setPage={setPage}/>
    </div>
  );
}

export default App;
