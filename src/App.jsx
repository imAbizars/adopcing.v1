import { Button } from "./components/ui/button";
import Navbar from "./components/layouts/navbar/Navbar";
import Home from "./pages/Home";
import Login from "./components/login/Login";
import useEyeMovement from "./lib/hooks/useMovementEyes";
import { BrowserRouter,Routes,Route} from "react-router";
export default function App(){
  const { eyeRefs, handleMouseMove } = useEyeMovement();
  return(
    <div onMouseMove={handleMouseMove} className="h-[100rem]">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home eyeRefs={eyeRefs} />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}