import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./dashboard/Home";
import CampSchedule from "./bloodCamp/CampSchedule";
import RequestBloodForm from "./patient/RequestForm";
import BloodAvail from "./patient/BloodAvail";
import BloodBankDir from "./bloodBank/BloodBankDir";
import AboutUs from "./dashboard/AboutUs";
import DonorDashboard from "./donor/DonorDashboard";
import DonorHome from "./donor/DonorHome";
import Slider from "./layout/Slider";
import { sliderItems } from "./bloodCamp/option";
import RegisterCamp from "./bloodCamp/RegisterCamp";
import { Auth0Provider } from "@auth0/auth0-react";
import UserLogin from "./donor/DonorLogin";

import {
    BrowserRouter as Router,
    RouterProvider,
    Route,
    Routes,
    Link,
} from "react-router-dom";


function App() {
    return (
        <Auth0Provider
            domain="dev-su2ro5wbkodq3ijt.us.auth0.com"
            clientId="K7fyBMA0EFY2Gaio7ZbxVCoMkwFvZrWo"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}>
            <div>
                {/* <Profile/> */}
                <Router>
                    <Navbar></Navbar>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/campSchedule" element={<CampSchedule />} />
                        <Route path="/requestBloodForm" element={<RequestBloodForm />} />
                        <Route path="/bloodAvailSearch" element={<BloodAvail />} />
                        <Route path="/bloodBankDir" element={<BloodBankDir />} />
                        <Route path="/AboutUs" element={<AboutUs />} />
                        <Route path="/DonorDash" element={<DonorDashboard />} />
                        <Route path="/DonorHome" element={<DonorHome />} />
                        <Route path="/RegisterCamp" element={<RegisterCamp />} />
                        <Route path="/DonorLogin" element={<UserLogin />} />
                    </Routes>

                    <Footer></Footer>
                </Router>
            </div>
        </Auth0Provider>
    )
}

export default App;

//2 20  20
//2 50  49
//3 15  72

