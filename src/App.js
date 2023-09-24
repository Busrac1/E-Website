import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";



function App() {
  return (
    <div className="App">
       <h1 class="text-5xl font-bold underline">
    Hello world!
  </h1>
      <BrowserRouter>
      {/* tğm sayfalarda gözükmesini istediğim için buraya koyduk. */}
      
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/> 
     
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
