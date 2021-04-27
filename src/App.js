import './App.css';
import Profile from './components/Profile';
import LandingPage from './components/LandingPage';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div style={{color: 'white;'}}>Loading...</div>;

  if (isAuthenticated) {
    return (
      <Profile/>
    );
  } else {
    return (
      <LandingPage/>
    )
  }


}

export default App;
