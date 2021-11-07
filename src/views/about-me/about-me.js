import './about-me.scss';
import profilePicture from "../../assets/images/picture-myself.jpg";

function ViewAboutMe() {
    return (
        <section id="section-about-me" className="section section-about-me">
            <h2 className="title">About Me</h2>
            <img className="section-about-me-photo" src={profilePicture} alt="Guillermo"/>

            <p>
                My name is Guillermo Fernandez and I’m currently switching careers from the Health Care
                industry to the
                Technology Field.
            </p>

            <p>
                In order to achieve this, I have enrolled in UM programming bootcamp. While working a full-time
                job and
                completing the material has been challenging, I really enjoy learning new things. I can’t wait
                to increase
                my skillset to finally make the switch.
            </p>
        </section>
    );
}

export default ViewAboutMe;