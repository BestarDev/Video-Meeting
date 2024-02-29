import { useEffect } from 'react';
import { connectWithWebSocket } from './utils/wssConnection/wssConnection';
import {
  Routes,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Dashboard from './screens/Dashboard';
import LoginScreen from './screens/LoginScreen';

function App() {
  useEffect(() => {
    connectWithWebSocket();
  }, [])
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
