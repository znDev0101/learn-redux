import './App.css';
import ListContact from './components/ListContact/ListContact';
import AddContact from './components/AddContact/AddContact';
function App() {
  return (
    <div style={{ padding: '30px' }}>
      <h1>Aplikasi Contact App</h1>
      <hr />
      <AddContact />
      <hr />
      <ListContact />
    </div>
  );
}

export default App;
