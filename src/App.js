import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/others/header/Header';
import Home from './components/pages/homePage/Home';
import Cart from './components/pages/cartPage/Cart';
import Error from './components/pages/errorPage/Error';
import SingleProduct from './components/pages/singleProduct/SingleProduct';
import LeftSideBar from './components/others/leftSideBar/LeftSideBar';
import RightSideBar from './components/others/rightSideBar/RightSideBar';
import Footer from './components/pages/footerPage/Footer';
// import Category from './components/pages/categoryPage/Category';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <LeftSideBar />
        <RightSideBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          {/* <Route path='/category/:category' element={<Category />} /> */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
