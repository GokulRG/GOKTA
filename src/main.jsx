import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import MainLogin from "./components/MainLogin/MainLogin.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route index element={<App/>}/>
              <Route path={"login"} element={<MainLogin/>}/>
              <Route path={"dashboard"} element={<LandingPage/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
