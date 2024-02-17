
import './App.css';
import Products from './component/Products/Products';
import Navbar from './component/Navbar/Navbar';
import ProductProvider from './component/Store/ProductProvider';

function App() {
  return (
    <ProductProvider>
      <Navbar />
      <Products />
    </ProductProvider>
  );
}

export default App;
