import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/login/login";
import PropertyDetails from "./components/propertyDetails/PropertyDetails";
import Register from "./components/register/register";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter basename= {window.location.pathname || ''}>
      <Routes>
        <Route exact path="/"  element={Index}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/details" element={<PropertyDetails/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
