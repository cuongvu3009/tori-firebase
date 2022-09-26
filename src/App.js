import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import styled from 'styled-components';
import Chat from './components/Chat';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Container>
          <Sidebar />
          <Main>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Main>
          <Chat />
        </Container>
      </Router>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  padding: 20px;
`;
