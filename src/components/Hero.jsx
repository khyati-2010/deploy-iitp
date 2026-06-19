import { faculty } from "../data/facultyData"
import facultypic from "../data/profile-pic.jpg"

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-left">
                    <img src={facultypic} alt="Dr. Koushik Roy" />
                </div>
                <div className="hero-right">
                    <h1>
                        {faculty.name}
                    </h1>
                    <h3>
                        {faculty.designation}
                    </h3>
                    <h5>
                        {faculty.department}
                    </h5>
                    <h5 className="institute">
                        {faculty.institute}
                    </h5>
                </div>
            </div>
        </section>
    )
}

export default Hero;