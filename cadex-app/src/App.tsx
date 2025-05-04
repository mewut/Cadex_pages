import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
