import Post from "./Components/Home/Post";
import SellForm from "./Components/Home/SellForm";
import NotFound from "./Components/NotFound";
import { AuthProvider } from "./Hooks/useAuth";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router> {/* Wrap your Routes in Router */}
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/attributes' element={<SellForm/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
