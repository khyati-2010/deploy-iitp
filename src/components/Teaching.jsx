import { faculty } from "../data/facultyData";

function Teaching(){
    return(
        <section className="teaching">
            <div className="undergrad">
                <div className="teaching-title">
                    <h4>Undergrauduate Courses</h4>
                </div>
                {faculty.courses.undergraduate.map((course, index)=>(
                    <div className="course-content">
                        <p>{course}</p>
                    </div>
                ))}
            </div>
            <div className="postgrad">
                <div className="teaching-title">
                    <h4>Postgrauduate Courses</h4>
                </div>
                {faculty.courses.postgraduate.map((course, index)=>(
                    <div className="course-content">
                        <p>{course}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Teaching;