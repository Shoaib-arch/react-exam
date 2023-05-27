
import './App.css';
import PollDisplay from './PollDisplay';
import ThankyouMessage from './ThankyouMessage';
import UserParticipation from './UserParticipation';

function App() {
  return (
    <div>
      <h1>Polling App</h1>
      <PollDisplay/>
      <button onClick={ UserParticipation}>new User UserParticipation</button>
      <button onClick={ThankyouMessage}>Submit<Button>
     
    </div>
  );
}
// defaulting

export default App;
