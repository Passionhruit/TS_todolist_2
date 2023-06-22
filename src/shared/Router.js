import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Info from "../pages/Info";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="infos/:id" element={<Info />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
