
import './App.css';
import PollDisplay from './PollDisplay';
import ThankyouMessage from './ThankyouMessage';
import UserParticipation from './UserParticipation';
import Timer from './Timer';
import AnotherUserParticipation from './AnotherUserParticipation';

function App() {
  return (
    <div>
      <Timer/>
      <h1>Polling App</h1>
      <PollDisplay/>
      <UserParticipation/>
      <AnotherUserParticipation/>
      <button onClick={ThankyouMessage()}>Submit</button>
      
      
     
    </div>
  );
}
// defaulting

export default App;



