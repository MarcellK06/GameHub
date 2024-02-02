
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
         
         
        </Routes>
      </BrowserRouter>
    </>
  );
}
//  <Route path="*" element={<NotFound />} />
export default App;
