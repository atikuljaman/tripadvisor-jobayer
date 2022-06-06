import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import HotelDetails from "./pages/HotelDetails/HotelDetails";
import HotelSearch from "./pages/HotelSearch/HotelSearch";
import AddUser from "./pages/UserDashboard/AddUser";
import EditProfile from "./pages/UserDashboard/EditProfile";
import UserDashboard from "./pages/UserDashboard/UserDashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel-search" element={<HotelSearch />} />
          <Route path="/hotel-details" element={<HotelDetails />} />
          <Route path="/user-dashboard" element={<UserDashboard />}>
        <Route path="add-user" element={<AddUser />} />
        <Route path="edit-profile" element={<EditProfile />} />
        
      </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
