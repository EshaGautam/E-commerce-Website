
import './App.css';
import Home from './component/Home/Home';
import ProductProvider from './component/Store/ProductProvider';
import { RouterProvider, createBrowserRouter } from "react-router-dom"; //createRoutesFromElements,Route };
import About from './component/About/About';

// Alternative Approach to create route

// const elementRoute = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/about' element={<About/>}/>
//   </Route>
// )

// const router = createBrowserRouter(elementRoute)

const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/about',element:<About/>}
])

function App() {
  return (
    <ProductProvider>
      <RouterProvider router={router}/>
   
    </ProductProvider>
  );
}

export default App;
