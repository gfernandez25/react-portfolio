import './resume.scss';
import resume from "../../assets/files/Guillermo_Fernandez,_MSMIS_-_Full_Stack_Developer.pdf";

function ViewResume() {
    return (
        <section className="section">
            <h1 class='title'>View Resume</h1>


            <ul> Front End Proficiencies
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <ul> Back End Proficiencies
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQl</li>
            </ul>

            <a className={"link"} href={resume} download>Download My Resume</a>

        </section>


    );
}

export default ViewResume;