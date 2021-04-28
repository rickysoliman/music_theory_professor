import './App.css';
import LandingPage from './components/LandingPage';
import LoggedIn from './components/LoggedIn';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div style={{color: 'white;'}}>Loading...</div>;

  if (isAuthenticated) {
    return (
      <LoggedIn/>
    );
  } else {
    return (
      <LandingPage/>
    )
  }


}

export default App;
