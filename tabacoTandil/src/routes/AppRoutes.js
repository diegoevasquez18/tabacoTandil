import {Routes, Route } from 'react-router-dom';
import { Login } from '../components/Client/Login/Login';
import Profile  from '../components/Client/Profile/Profile.js';
import Register from '../components/Client/Register/Register';


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
          <Route exact path='/register' element={<Register />}/>
          <Route exact path='/profile' element={<Profile />}/>
        </Routes>
    </div>
  );
}

export default AppRouter;