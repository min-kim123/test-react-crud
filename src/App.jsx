import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import { Link } from "react-router-dom";
import EditPage from "./pages/EditPage";
import boxlogo from "./assets/boxlogo.png";

export const VITE_API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  return (
    <div>
      <div>
        <nav className="px-2 py-3 bg-gray-800 antialiased">
          <div className="flex flex-wrap ">
            <Link
              to="/"
              className="px-2 self-center font-bold text-white text-2xl flex gap-2 ml-1"
            >
              <img src={boxlogo} className="w-6 " />
              <h1 >Inventory</h1>
            </Link>

            <Link
              to="/create/"
              className="px-2 self-center mr-5 absolute right-0 text-white text-xl flex gap-2 ml-1 border border-1 rounded-lg" 
            >
              New Product
            </Link>
          </div>
        </nav>
      </div>

      <div className="px-2">
        <Routes>
          {/* the different paths that can be taken  */}
          <Route index element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/edit/:id" element={<EditPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
