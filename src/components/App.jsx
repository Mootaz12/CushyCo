import { Auth0Provider } from "@auth0/auth0-react";
import config from "../../authO-config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Cart, Home, Login, Products } from "../pages/index.js";
import { Navbar, Footer } from "./index.js";
const App = () => {
  return (
    <BrowserRouter>
      <Auth0Provider
        domain={config.domain}
        clientId={config.clientId}
        redirectUri={config.redirectUri}
      >
        <Navbar />
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/Products" component={<Products />} />
          <Route path="/About" component={<About />} />
          <Route path="/Login" component={<Login />} />
          <Route path="/Cart" component={<Cart />} />
        </Routes>
        <Footer />
      </Auth0Provider>
    </BrowserRouter>
  );
};

export default App;
