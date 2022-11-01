import {Routes, Route } from 'react-router-dom';


import Home from '../components/Home/Home';


function AppRouter() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
    </div>
  );
}

export default AppRouter;