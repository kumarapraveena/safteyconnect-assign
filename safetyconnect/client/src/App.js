import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Signup from './Components/Signup';
import Task from './Components/Task';
import DetailsTasks from './Components/Details-Tasks';
function App() {
  return (
    <div className="App">
{/* <Signup/> */}
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/task" element={<Task/>}></Route>
        <Route path="/details" element={<DetailsTasks/>}></Route>
      </Routes>
      </BrowserRouter>
          </div>
  );
}

export default App;
