import Category from "./Components/Home/Category";
import SellForm from "./Components/Home/SellForm";
import SinglePost from "./Components/Home/SinglePost";
import NotFound from "./Components/NotFound";
import ViewPost from "./Components/PostContext";
import { ProductProvider } from "./Components/ProductContext";
import { AuthProvider } from "./Hooks/useAuth";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <ViewPost>
      <Router>
        <AuthProvider>
          <ProductProvider>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/post' element={<Category/>}/>
              <Route path='/sell' element={<SellForm/>}/> 
              <Route path='/singlepost' element={<SinglePost/>}/> 
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </ProductProvider>
        </AuthProvider>
      </Router>
    </ViewPost>

  );
}

export default App;
