import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Main from "./Pages/Main/Main";
import Navigation from "./Components/Navigation/Navigation";

function Router({ setCurrentUser, currentUser }) {
  return (
    <>
      <BrowserRouter>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home setCurrentUser={setCurrentUser} />} />
          <Route path="/chats" element={<Main currentUser={currentUser} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;