import CreateStudent from "./Components/CreateStudent";
import DeleteStudent from "./Components/DeleteStudent";
import About from "./Practice/About";
import User from "./Practice/User";

import FetchAPI from "./Practice/FetchAPI";
import UseEffectHandsOn from "./Practice/UseEffectHandsOn";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import StateLifting from "./Practice/StateLifting";

export default function App() {
  return (
    // <BrowserRouter>
    //   <nav>
    //     <Link to="/">About</Link>
    //     <Link to="/Users/10">Users</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<About></About>} />
    //     <Route path="/Users/:id" element={<User />} />
    //   </Routes>
    // </BrowserRouter>

    <StateLifting></StateLifting>
  );
}
