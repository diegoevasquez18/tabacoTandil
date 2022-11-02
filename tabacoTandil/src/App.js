import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRoutes'
import Nav from './components/Nav/Nav';

import { AuthProvider } from './context/AuthContext';

import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Nav/>
            <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
