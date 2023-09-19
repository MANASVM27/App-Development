import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { States } from './States';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

function App() {
  return (
    <div className='router'>
      <BrowserRouter>
        <States>
          <Routes>
            
            <Route
              path="/"
              element={<Login />}
            />

            <Route
              path="/signup"
              element={<Signup />}
            />

          </Routes>
        </States>
      </BrowserRouter>
    </div>
  );
}

export default App;
