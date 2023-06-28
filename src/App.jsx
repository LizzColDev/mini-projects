import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {

  return (
    <Container
    style={{
      maxWidth: '100%',
      padding: '0'
    }} 
        >
      <NavBar/>
      <Home/>
    </Container>

  )
}

export default App
