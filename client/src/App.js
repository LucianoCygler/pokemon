import { Routes, Route } from "react-router-dom";

import Landing from "./views/landing/landing";
import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Create from "./views/create/create";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default App;
