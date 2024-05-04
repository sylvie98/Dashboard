import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Layout from "./components/shared/Layout"
import Dashboard from "./components/Dashboard"
import Pages from "./components/Pages"
import Utilities from "./components/Utilities"
import Typography from "./components/Typography"
import Color from "./components/Color"
import Shadow from "./components/Shadow"
import Samepage from "./components/Samepage"
function App() {
  return (
    <Router>
       <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="/Pages" element={<Pages/>}/>
              <Route path="/Utilities" element={<Utilities/>}/>
              <Route path="/Typography" element={<Typography/>}/>
              <Route path="/Color" element={<Color/>}/>
              <Route path="/Shadow" element={<Shadow/>}/>
              <Route path="/Samepage" element={<Samepage/>}/>
            </Route>
            <Route path="Login" element={<div>this is login page</div>}/>
        </Routes>
      </Router>
  )
}
export default App