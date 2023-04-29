import HomePage from '../src/Pages/HomePage'
import AddReviewPage from './Pages/AddReviewPage';
import BookDetailsPage from './Pages/BookDetailsPage';
import BookPage from './Pages/BookPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import AboutPage from './Pages/AboutPage'
import './index.css';
import ContactPage from './Pages/ContactPage';
import {BrowserRouter as Router , Routes, Route } from  'react-router-dom'
import ErrorPage from './Pages/ErrorPage';
import ProfilePage from './Pages/ProfilePage';
import ProtectedRoute from './routes/ProtectedRoute';
import CartPage from './Pages/CartPage';

function App() {
  return (
<div>
<Router>
  <Routes>
    <Route path='/' element={<HomePage/> }></Route>
    <Route path='/about' element={<ProtectedRoute Component={AboutPage}/> }></Route>
    <Route path='/contact' element={<ProtectedRoute Component={ContactPage}/> }></Route>
    <Route path='/login' element={<LoginPage/> }></Route>
    <Route path='/register' element={<RegisterPage/>}></Route>
    <Route path='/cart' element={<CartPage/> }></Route>

    <Route path='/books' element={ <ProtectedRoute Component={BookPage}/>}></Route>
    <Route path='/bookdetail/:id' element={ <BookDetailsPage/>}></Route>
    <Route path='/addreview' element={ <AddReviewPage/>}></Route>
      <Route path='*' element={ <ErrorPage/> }></Route>
      <Route path='/profile' element={ <ProfilePage/> }></Route>
 

  </Routes>
</Router>

  
 


 


  </div>
  )
}

export default App;
