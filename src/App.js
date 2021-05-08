import logo from './logo.svg';
import './App.css';
import { SignIn, SignOut } from './hooks/auth';
import { ChatRoom } from './hooks/chatroom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase_config';



function App() {

const [user] = useAuthState(auth);

  return (
    <div className="App">
     <header>
        <h1>ChatSpace</h1>
        <SignOut/>
      </header>

      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}

export default App;
