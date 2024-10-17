import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import { About } from './Components/About';
import { Header } from './Components/Header';
import { Work } from './Components/Work';
import {Contact} from "./Components/Contact"
import { Footer } from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/work' Component={Work}></Route>
        <Route path='/contact' Component={Contact}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
