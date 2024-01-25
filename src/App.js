import {Routes, Route} from 'react-router-dom'
import { Home } from './containers/home';
import { About } from './containers/about';
import { Skills } from './containers/skills';
import { Resume } from './containers/resume';
import { Contact } from './containers/contact';
import { Navbar } from './components/navBar';



function App() {

  return (
    <div className="app">
      {/* {navbar} */}
      <Navbar/>
    
      {/*main page*/}
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
