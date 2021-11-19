import './portfolio.scss';
import runbuddy from "../../assets/images/run-buddy.jpg";
import randomPasswordScreenShot from "../../assets/images/randomPasswordScreenShot.png";
import eventWeather from "../../assets/images/event-weather.png";
import scheduler from "../../assets/images/WorkDay-Scheduler.png";
import adventure from "../../assets/images/my-adventure-app.png";
import comingSoon from "../../assets/images/coming-soon-image.jpg";
import ecommerce from "../../assets/images/moarkett-screenshot.png";

function ViewPortfolio() {


    return (
        <section id="section-work" className="section section-work">
            <h3 className="title">Work Samples</h3>

            <section className="projects">
                <a href="https://gfernandez25.github.io/run-buddy/" className="work-list-item-link">
                    <img src={runbuddy} alt="Image of Run Buddy Website"
                         className="work-list-item-link-image"/>
                    <div>
                        <h3 className="work-list-item-link-title">Run Buddy Website</h3>
                        <p className="work-list-item-link-description">Website created using only HTML and CSS</p>
                    </div>
                </a>
                <a href="https://gfernandez25.github.io/password-generator/" className="work-list-item-link">
                    <img src={randomPasswordScreenShot} alt="display coming soon"
                         className="work-list-item-link-image"/>
                    <div>
                        <h3 className="work-list-item-link-title">Javascript Password Generator</h3>
                        <p className="work-list-item-link-description">Website that takes input from user and
                            generates a random password using Javascript</p>
                    </div>
                </a>
                <a href="https://gfernandez25.github.io/Project-1/" className="work-list-item-link">
                    <img src={eventWeather} alt="display coming soon"
                         className="work-list-item-link-image"/>
                    <div>
                        <h3 className="work-list-item-link-title">Web API</h3>
                        <p className="work-list-item-link-description">This page presents a user with the option to
                            enter a City and find the events in it. The page also displays the forecast weather
                            dashboard
                            where users can see the weather for
                            the selected city</p>
                    </div>
                </a>
                <a href="https://gfernandez25.github.io/Work-Day-Scheduler/" className="work-list-item-link">
                    <img src={scheduler} alt="display coming soon"
                         className="work-list-item-link-image"/>

                    <div>
                        <h3 className="work-list-item-link-title">Third Party API: Work day Scheduler</h3>
                        <p className="work-list-item-link-description">This page shows a work scheduler where users
                            can enter events/tasks for their day based on one hour blocks.
                            Time-Blocks in the past are greyed out and can not be interacted with since the hour has
                            passed.</p>
                    </div>
                </a>
                <a href="http://myadventureteam.herokuapp.com/" className="work-list-item-link">
                    <img src={adventure} alt="display coming soon"
                         className="work-list-item-link-image"/>

                    <div>
                        <h3 className="work-list-item-link-title">Social media app - My Adventures </h3>
                        <p className="work-list-item-link-description">Social media app that specifically caters to
                            “adventure-minded” individuals.
                            Users will be able to create and customize their own profile, share stories about their
                            daily adventures and interact with other adventurers.
                            Social Media features will be added in the future
                        </p>
                    </div>
                </a>
                <a href="https://radiant-reef-51120.herokuapp.com/" className="work-list-item-link">
                    <img src={ecommerce} alt="display coming soon"
                         className="work-list-item-link-image"/>
                    <div>
                        <h3 className="work-list-item-link-title">E-commerce App</h3>
                        <p className="work-list-item-link-description">E-commerce website that allows users to
                            shop for items and checkout using stripe</p>
                    </div>
                </a>
            </section>


        </section>


    );
}

export default ViewPortfolio;