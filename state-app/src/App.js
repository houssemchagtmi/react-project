import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buton from './component/Buton';
function App() {
  const styleObject={
    display:'flex',
    flexDirection:'column',
    textAlign: 'center',
    fontFamily: 'cursive',
    fontSize:'24px',
    
  }
  return (
   
  <div className="App" style={styleObject}>
 
    <Buton />

  </div>
  );
}

export default App;
