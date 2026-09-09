import {Welcome} from './components/Welcome'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

import './App.css'

function App(){
  return(
    <div>
    <Navbar />
    <Welcome/>
    <Dashboard/>
    </div>
  )
}
export default App;