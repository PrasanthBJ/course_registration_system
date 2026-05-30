import { useState } from "react";
import { createCourse } from "../services/courseService";

function CourseForm() {

    const [course, setCourse] = useState({
        courseName: "",
        trainerName: "",
        duration: "",
        fees: ""
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setCourse({
            ...course,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        await createCourse(course);

        alert("Course Added Successfully!");

        setCourse({
            courseName: "",
            trainerName: "",
            duration: "",
            fees: ""
        });

    } catch(error) {
        console.error(error);
    }
};

    return (
        <div className="card shadow-lg p-4 mb-4">

            <h2 className="text-center mb-4">
                Add Course
            </h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <input
                        type="text"
                        name="courseName"
                        className="form-control"
                        placeholder="Course Name"
                        value={course.courseName}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        name="trainerName"
                        className="form-control"
                        placeholder="Trainer Name"
                        value={course.trainerName}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="number"
                        name="duration"
                        className="form-control"
                        placeholder="Duration"
                        value={course.duration}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="number"
                        name="fees"
                        className="form-control"
                        placeholder="Fees"
                        value={course.fees}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                >
                    Add Course
                </button>

            </form>

        </div>
    );
}

export default CourseForm;