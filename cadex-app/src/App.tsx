import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact';
import { GlobalStyle } from './styles/global';
import { 
  AppContainer,
  AppHeader,
  AppNav,
  AppLogo,
  AppMain,
  AppFooter,
  AppContactLink
} from './components/styled';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <AppHeader>
          <AppNav>
            <AppLogo as={Link} to="/">Some Company</AppLogo>
            <AppContactLink as={Link} to="/contact">Contact us</AppContactLink>
          </AppNav>
        </AppHeader>

        <AppMain>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AppMain>

        <AppFooter>
          <p>Some Company 2024</p>
        </AppFooter>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;