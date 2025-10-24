import { useState } from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/home'
import About from './pages/about';
import Service from './pages/service';
import ServiceDetail from './pages/service-detail';
import Projects from './pages/projects';
import ProjectDetail from './pages/project-detail';
import BlogPage from './pages/blog';
import BlogDetail from './pages/blog-detail';
import TeamPage from './pages/team';
import AiConsulting from './pages/ai-consulting';
import Contact from './pages/contact';

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/services/:slug' element={<ServiceDetail/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/projects/:slug' element={<ProjectDetail/>} />
      <Route path='/blog' element={<BlogPage/>} />
      <Route path='/blog/:slug' element={<BlogDetail/>} />
      <Route path='/team' element={<TeamPage/>} />
      <Route path='/ai-consulting' element={<AiConsulting/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes> 
     <Footer/>
    </>
  )
}

export default App
