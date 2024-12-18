import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import useCategorias from "../hooks/useCategorias";
import "../index.css";
import Noticia from "../interfaces/noticia"; 
import LojaPage from "./LojaPage";

const HomePage = () => {
  return <LojaPage />;
};

export default HomePage;

