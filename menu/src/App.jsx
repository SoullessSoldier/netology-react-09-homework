import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Menu from '@/components/Menu/Menu'
import Main from '@/components/Main/Main'



function App() {

  return (
    <Router>
      <Menu />
      <Main />
    </Router>
  );
}

export default App
