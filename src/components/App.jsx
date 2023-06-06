import { Auth0Provider } from "@auth0/auth0-react";
import config from "../../authO-config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Cart, Home, Login, Products } from "../pages/index.js";
import { Navbar, Footer } from "./index.js";
import { DataProvider } from "../context/DataContext";
const App = () => {
  return (
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      redirectUri={config.redirectUri}
    >
      <BrowserRouter>
        <DataProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
          <Footer />
        </DataProvider>
      </BrowserRouter>
    </Auth0Provider>
  );
};

export default App;
