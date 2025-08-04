import { Button } from "./components/ui/button";
import Navbar from "./components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";
import Home from "./pages/Home";
import Addopt from "./pages/Addopt";
import Login from "./components/login/Login";
import useEyeMovement from "./lib/hooks/useMovementEyes";
import { BrowserRouter,Routes,Route} from "react-router";
export default function App(){
  const { eyeRefs, handleMouseMove } = useEyeMovement();
  return(
    <div onMouseMove={handleMouseMove} className="">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home eyeRefs={eyeRefs} />} />
          <Route path="/Addopt" element={<Addopt/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  )
}