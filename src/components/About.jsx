import { faculty } from "../data/faculty";

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                {/* Biography */}
                <div className="about-bio">
                    <h2>About</h2>
                    <p>
                        {faculty.bio || "Details will be updated from data/faculty.js"}
                    </p>
                </div>

                {/* Experience */}
                <div className="about-experience">
                    <h3>Experience</h3>
                    <ul>
                        {faculty.experience === 0 ? (
                            <li>Details will be updated from data/faculty.js</li>
                        ) : (
                            faculty.experience.map((item, index) => (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        {item}
                                    </div>
                                </div>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;