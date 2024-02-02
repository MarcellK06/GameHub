
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import FriendsChat from './Pages/FriendsChat';

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<FriendsChat />} />
         
         
        </Routes>
      </BrowserRouter>
    </>
  );
}
//  <Route path="*" element={<NotFound />} />
export default App;
