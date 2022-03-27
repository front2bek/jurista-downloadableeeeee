import React, { Fragment, Component, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePageOne from "../Pages/HomePageOne";
import HomePageTwo from "../Pages/HomePageTwo";
import HomePageThree from "../Pages/HomePageThree";
import AboutPage from "../Pages/AboutPage";
import PracticePage from "../Pages/PracticePage";
import PracticeSinglePage from "../Pages/PracticeSinglePage";
import PortfolioPage from "../Pages/PortfolioPage";
import SinglePortfolioPage from "../Pages/SinglePortfolioPage";
import TeamPage from "../Pages/TeamPage";
import SingleTeamPage from "../Pages/SingleTeamPage";
import Bircevic from "../Pages/SingleTeamPage/bircevic.js";
import Zagorac from "../Pages/SingleTeamPage/zagorac.js";
import Gagic from "../Pages/SingleTeamPage/gagic.js";
import Musli from "../Pages/SingleTeamPage/musli.js";
import Cakarevic from "../Pages/SingleTeamPage/cakarevic.js";
import Vrabac from "../Pages/SingleTeamPage/vrabac.js";
import LawtypeFamily from "../Pages/PracticeSinglePage/lawtype-family.js";
import ContactPage from "../Pages/ContactPage";
import BlogLeftPage from "../Pages/BlogLeftPage";
import BlogRightPage from "../Pages/BlogRightPage";
import BlogFullWidth from "../Pages/BlogFullWidth";
import "./App.css";
import ScrollToTop from "./scrollToTop";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Suspense fallback={null}>
          <BrowserRouter>
            <ToastContainer autoClose={2500} position="top-center" />
            <ScrollToTop />
            <Routes>
              <Route exact path="/" element={<HomePageOne />} />
              <Route exact path="/home-two" element={<HomePageTwo />} />
              <Route exact path="/home-three" element={<HomePageThree />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/practice" element={<PracticePage />} />
              <Route
                exact
                path="/practice-details"
                element={<PracticeSinglePage />}
              />
              <Route exact path="/case-stadies" element={<PortfolioPage />} />
              <Route
                exact
                path="/case-stadies-details"
                element={<SinglePortfolioPage />}
              />
              <Route exact path="/attorneys" element={<TeamPage />} />
              <Route
                exact
                path="/attorney/:attorneyName"
                element={<SingleTeamPage />}
              />
              {/* <Route exact path="/lawtype" element={<TeamPage />} /> */}
              <Route
                exact
                path="/lawtype/:lawtypeid"
                element={<PracticeSinglePage />}
              />
              <Route exact path="/contact" element={<ContactPage />} />
              <Route exact path="/blog-left" element={<BlogLeftPage />} />
              <Route exact path="/blog-right" element={<BlogRightPage />} />
              <Route exact path="/blog-fullwidth" element={<BlogFullWidth />} />
              {/* <Route exact path="/bircevic" element={<Bircevic/>} />
                        <Route exact path="/zagorac" element={<Zagorac/>} />
                        <Route exact path="/gagic" element={<Gagic/>} />
                        <Route exact path="/musli" element={<Musli/>} />
                        <Route exact path="/cakarevic" element={<Cakarevic/>} />
                        <Route exact path="/vrabac" element={<Vrabac/>} />
        <Route exact path="/lawfamily" element={<LawtypeFamily/>} />*/}
            </Routes>
          </BrowserRouter>
        </Suspense>
      </Fragment>
    );
  }
}

export default App;
