import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header';
import {useState} from 'react';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import  Wallet from './pages/Wallet';
import Interactions from './pages/Interactions';
import Mint from "./pages/MintToken.js";
import MintNFT from "./pages/MintNFT.js";


function App() {
	const [defaultAccount, setDefaultAccount] = useState(null);
  return (
    <Router>
      <Header accounts={defaultAccount} setAccounts={setDefaultAccount} />
  <Routes>
        <Route path="/" element={<Home accounts={defaultAccount} setAccounts={setDefaultAccount} />} />
        <Route path="/mainpage" element={<MainPage accounts={defaultAccount} setAccounts={setDefaultAccount} />} />
        <Route path="/wallet" element={<Wallet accounts={defaultAccount} setAccounts={setDefaultAccount} />} />
        <Route path="/interactions" element={<Interactions accounts={defaultAccount} setAccounts={setDefaultAccount} />} />
        <Route path="/minttoken" element={<Mint accounts={defaultAccount} setAccounts={setDefaultAccount} />} />
        <Route path="/mintnft" element={<MintNFT accounts={defaultAccount} setAccounts={setDefaultAccount} />} />
        </Routes>
        <Footer/>
        </Router>
  );

}

export default App;