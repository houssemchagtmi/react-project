import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileComponent from './Card';
import PhotoProfile from '../PhotoProfil.jpg'
import Timer from './Timer'
function App() {

const styleObject={
  display:'flex',
  flexDirection:'column',
  color:'blue',
  background:"red",
  textAlign: 'center',
  fontFamily: 'cursive',
  fontSize:'24px',
  border: '0px solid black',
  margin:' 1rem 41rem',
  padding:' 2rem 1rem',
  minHeight: '3em',
  width:'30%',
  heigth:'30%',
  resize:'both',
  backgroundImage:"linear-gradient(to right, turquoise, greenyellow",
}

  return (
    
  <div className="App" style={styleObject}>
    
    <ProfileComponent fullName="houssem"  bio="Bio: I'm fullstak js developer " profession="Profession: FullStack js " > 
      <img src={PhotoProfile} alt="houss"/>
    </ProfileComponent>       <Timer/>

  </div>
  );
}

export default App;
