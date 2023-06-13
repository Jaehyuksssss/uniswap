import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/globalStyles';
import Home from './pages/Home/Home';
import Swap from './pages/Swap/Swap';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Swap />} path="/swap" />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
