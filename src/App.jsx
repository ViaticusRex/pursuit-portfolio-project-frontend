import {Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Services from './pages/Services'
import ShowService from './pages/ShowService'
import AddService from './pages/AddService'
import EditService from './pages/EditService'



import './styles/App.css'

//Holy Grail Layout
const App = () => {
    return (
      <div className="app_container">
        <header>
          <NavBar />
        </header>
        
        <aside className='sidebar_left'>
          // left sidebar content TBD
        </aside>
  
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ShowService />} />
            <Route path="/services/add" element={<AddService />} />
            <Route path="/services/:id/edit" element={<EditService />} />
          </Routes>
        </main>
  
        <aside className='sidebar_right'>
            // right sidebar content TBD
        </aside>
  
        <footer className='footer'>
            // footer
        </footer>
      </div>
    )
}

export default App