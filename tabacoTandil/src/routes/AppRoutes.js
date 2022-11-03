import {Routes, Route } from 'react-router-dom';
import { Login } from '../components/Client/Login/Login';


import Home from '../components/Home/Home';
import ItemListContainer from '../components/Products/ItemListContainer/ItemListContainer';


function AppRouter() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/products' element={<ItemListContainer />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
        </Routes>
        <Routes>
          <Route exact path='/login' element={<Login />}/>
        </Routes>
    </div>
  );
}

export default AppRouter;