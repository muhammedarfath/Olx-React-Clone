import Post from "./Components/Home/Post";
import SellForm from "./Components/Home/SellForm";
import NotFound from "./Components/NotFound";
import { ProductProvider } from "./Components/ProductContext";
import { AuthProvider } from "./Hooks/useAuth";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/post' element={<Post/>}/>
            <Route path='/sell' element={<SellForm/>}/> 
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
