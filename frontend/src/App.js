import './App.css';
import { Route, Routes, Navigate} from "react-router-dom";
import Product from './Pages/product';
import {ProductProvider} from './Context/product';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster
          toastOptions={{
            success: {
              duration: 5000,
              position: "top-center",
              style: { background: "#0E4E48", color: "white" },
            },
            error: {
              duration: 5000,
              position: "top-center",
              style: { background: "red", color: "white" },
            },
          }}
          containerStyle={{ top: 50 }}
        />
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/product" />} /> 
          <Route path="/product" element={<Product />} />
        </Routes>
      </ProductProvider>
    </div>
  );
}

export default App;
