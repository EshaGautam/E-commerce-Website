
import './App.css';
import Home from './component/Home/Home';
import ProductProvider from './component/Store/ProductProvider';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //createRoutesFromElements,Route };
import About from './component/About/About';
import Store from './component/StoreRoute/Store';
import Contact from './component/Contact/Contact';
import ProductDetail from './component/Products/ProductDetail';
import Login from './component/Login/Login';


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

  return (
    <ProductProvider>
      <Router>
        <Switch>
       <Route path="/" exact component={Home} />
           <Route path="/about" component={About} />
          <Route path="/store" component={Store} />
          <Route path="/contact" component={Contact} />
          <Route path="/product/:productId" component={ProductDetail} />
     <Route path="/auth" component={Login} />
        </Switch>
      </Router>
    </ProductProvider>
  );
}

export default App;
