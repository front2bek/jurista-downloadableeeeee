import React, { Fragment, Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import HomePageOne from '../Pages/HomePageOne'
import HomePageTwo from '../Pages/HomePageTwo'
import HomePageThree from '../Pages/HomePageThree'
import AboutPage from '../Pages/AboutPage'
import PracticePage from '../Pages/PracticePage'
import PracticeSinglePage from '../Pages/PracticeSinglePage'
import PortfolioPage from '../Pages/PortfolioPage'
import SinglePortfolioPage from '../Pages/SinglePortfolioPage'
import TeamPage from '../Pages/TeamPage'
import SingleTeamPage from '../Pages/SingleTeamPage'
import ContactPage from '../Pages/ContactPage'
import BlogLeftPage from '../Pages/BlogLeftPage'
import BlogRightPage from '../Pages/BlogRightPage'
import BlogFullWidth from '../Pages/BlogFullWidth'
import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <ToastContainer autoClose={2500} position="top-center" />
                    <Routes>
                        <Route exact path="/" element={<HomePageOne/>} />
                        <Route exact path="/home-two" element={<HomePageTwo/>} />
                        <Route exact path="/home-three" element={<HomePageThree/>} />
                        <Route exact path="/about" element={<AboutPage/>} />
                        <Route exact path="/practice" element={<PracticePage/>} />
                        <Route exact path="/practice-details" element={<PracticeSinglePage/>} />
                        <Route exact path="/case-stadies" element={<PortfolioPage/>} />
                        <Route exact path="/case-stadies-details" element={<SinglePortfolioPage/>} />
                        <Route exact path="/attorneys" element={<TeamPage/>} />
                        <Route exact path="/attorneys-single" element={<SingleTeamPage/>} />
                        <Route exact path="/contact" element={<ContactPage/>} />
                        <Route exact path="/blog-left" element={<BlogLeftPage/>} />
                        <Route exact path="/blog-right" element={<BlogRightPage/>} />
                        <Route exact path="/blog-fullwidth" element={<BlogFullWidth/>} />
                    </Routes>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
