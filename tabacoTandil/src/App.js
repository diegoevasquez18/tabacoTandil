import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRoutes'
import Nav from './components/Nav/Nav';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
          <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
