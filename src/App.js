
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import FriendsChat from './Pages/FriendsChat';
import Library from './Pages/Library';

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<FriendsChat />} />
          <Route path="/library" element={<Library />} />
         
         
        </Routes>
      </BrowserRouter>
    </>
  );
}
//  <Route path="*" element={<NotFound />} />
export default App;
