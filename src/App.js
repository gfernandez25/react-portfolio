import './App.scss';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";


import ViewAboutMe from "./views/about-me/about-me";
import ViewContactMe from "./views/contact-me/contact-me";
import ViewResume from "./views/resume/resume";
import ViewPortfolio from "./views/portfolio/portfolio";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>

                <Switch>
                    <Route exact path="/">
                        <Redirect to={"/about-me"}/>
                    </Route>
                    <Route path="/about-me" component={ViewAboutMe}/>
                    <Route path="/portfolio" component={ViewPortfolio}/>
                    <Route path="/contact-me" component={ViewContactMe}/>
                    <Route path="/resume" component={ViewResume}/>
                </Switch>

                <Footer/>


            </div>
        </Router>
    );
}

export default App;
