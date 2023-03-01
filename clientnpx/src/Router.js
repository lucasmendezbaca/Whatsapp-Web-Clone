import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Main from "./Pages/Main/Main";
import Navigation from "./Components/Navigation/Navigation";

function Router() {
  return (
    <>
      <BrowserRouter>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;