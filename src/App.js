
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import FriendsChat from './Pages/FriendsChat';
import Library from './Pages/Library';
import Cart from './Pages/Cart';
import ViewItem from './Pages/ViewItem';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<FriendsChat />} />
          <Route path="/library" element={<Library />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/game/:linkId" element={<ViewItem />} />
          <Route path="/profile" element={<Profile />} />    
        </Routes>
      </BrowserRouter>
    </>
  );
}
//  <Route path="*" element={<NotFound />} />
export default App;
