

import Home from './component/Home/Home';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //createRoutesFromElements,Route };
import About from './component/About/About';
import Store from './component/StoreRoute/Store';
import Contact from './component/Contact/Contact';
import ProductDetail from './component/Products/ProductDetail';
import Login from './component/Login/Login';
import { useContext } from 'react';
import ProductContext from './component/Store/ProductContext';
import { Redirect } from 'react-router-dom';


// Alternative Approach to create route

// const elementRoute = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/about' element={<About/>}/>
//     <Route path='/store' element={<Store/>}/>
//     <Route path='/contact' element={<Contact/>}/>
//     <Route path='/Product/:productId' element={<ProductDetail/>}></Route>
//     <Route path='/auth' element={<Login/>}></Route>
//   </Route>
// )

// const router = createBrowserRouter(elementRoute)

// const router = createBrowserRouter([
//   {path:'/',element:<Home/>},
//   {path:'/store',element:<Store/>},
//   {path:'/about',element:<About/>},
//   {path:'/contact',element:<Contact/>},
// ])

function App() {
  const ProductCtx = useContext(ProductContext);
  const { isUserLoggedIn } = ProductCtx;
 
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/store">
          {isUserLoggedIn ? <Store /> : <Redirect to="/auth" />}
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/product/:productId">
          <ProductDetail />
        </Route>
        <Route path="/auth">
          {!isUserLoggedIn ? <Login /> : <Redirect to="/auth" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
