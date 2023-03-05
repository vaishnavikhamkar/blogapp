import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import Posts from './Components/Posts/Posts';
import RightCard from './Components/Right Component/RightCard';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <div>
      <img className='blog-img' src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img>
     </div>
     <h1 className='Heading'>BLOGAPP</h1>
     <div className='Container'>
       <Posts/>
       <RightCard/>
     </div>
     <Posts/>
    </div>
  );
}

export default App;
