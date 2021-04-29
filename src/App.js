import './App.css';
import LandingPage from './components/loggedOut/LandingPage';
import LoggedIn from './components/loggedIn/LoggedIn';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  // performing get request
  if (isLoading) return <div style={{ 
    color: 'white',
    fontFamily: 'cursive',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>Loading...</div>;

  // logged in
  if (isAuthenticated) {
    return <LoggedIn/>
  // not logged in
  } else {
    return <LandingPage/>
  }


}

export default App;
