import './App.css';
import '@picocss/pico'
import airBnbLogo from './airbnb.png'
function App() {
  return (
    <div className="App">
      <header>
        <nav style={{justifyContent:'space-between' , display:'flex' , alignItems: 'center',
  flexWrap: 'wrap'}}>
          <img src={airBnbLogo} alt='Air Bnb Logo' style={{width:'6vw' , padding:'20px'}}  />
          <h1 >Air Bnb</h1>
        </nav>
      </header>
    </div>
  );
}

export default App;
