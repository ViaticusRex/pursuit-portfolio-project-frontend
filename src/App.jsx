import {Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ShowService from './pages/ShowService'
import AddService from './pages/AddService'
import EditService from './pages/EditService'



import './styles/App.css'

//Holy Grail Layout using symantic HTML
const App = () => {
    return (
      <div className="app_container">
        <header>
          <NavBar />
        </header>
        
        <aside className='sidebar_left'>
         
        </aside>
  
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ShowService />} />
            <Route path="/services/add" element={<AddService />} />
            <Route path="/services/:id/edit" element={<EditService />} />
          </Routes>
        </main>
  
        <aside className='sidebar_right'>
            right sidebar content TBD
        </aside>
  
        <footer className='footer'>
            Footer
        </footer>
      </div>
    )
}

export default App