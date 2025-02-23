import logo from './logo.svg';
import './App.css';
import Home from './project/Home';
import { Route, Routes,Navigate } from 'react-router-dom';
import Passing from './project/Passing';
import SliderImage from './SliderImage';
import ContactPage from './project/ContactPage';
import Header from './project/Header';
import Alert from './project/Alert';
import HomePage from './project/HomePage';
import Skills from './project/Skills';
import About from './project/About';
import Projects from './project/Projects';
import ProjectPage from './project/ProjectPage';
import ProjectCard from './project/ProjectCard';
import MainProject from './project/MainProject';
import NotFoundPage from './project/NotFoundPage';
import Resume from './project/Resume';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<Navigate to="/"/>}/>
        <Route path='/slider' element={<SliderImage/>}/>
        <Route path='/form' element={<Passing/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/alert' element={<Alert/>}/>
        <Route path='/homePage' element={<HomePage/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<MainProject/>}/>
        <Route path='/resume' element={<Resume/>}/>

        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
