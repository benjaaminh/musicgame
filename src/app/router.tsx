import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CardGeneration from "../pages/CardGeneration";
import ScanCard from "../pages/ScanCard";

export const router = createBrowserRouter([
    { path: "/", element: <Home/>}, 
    { path: "/generate", element: <CardGeneration/>},
    { path: "/scan", element: <ScanCard/>}
]);