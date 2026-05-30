import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseById, updateCourse } from "../services/courseService";

function EditCoursePage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [course, setCourse] = useState({
        courseName: "",
        trainerName: "",
        duration: "",
        fees: ""
    });

    useEffect(() => {

        const fetchCourse = async () => {

            const data = await getCourseById(id);

            setCourse(data);
        };

        fetchCourse();

    }, [id]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setCourse({
            ...course,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await updateCourse(id, course);

        alert("Course Updated Successfully!");

        navigate("/courses");
    };

    return (
        <div className="container mt-5">

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">
                    Edit Course
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="courseName"
                        className="form-control mb-3"
                        value={course.courseName}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="trainerName"
                        className="form-control mb-3"
                        value={course.trainerName}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="duration"
                        className="form-control mb-3"
                        value={course.duration}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="fees"
                        className="form-control mb-3"
                        value={course.fees}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="btn btn-warning w-100"
                    >
                        Update Course
                    </button>

                </form>

            </div>

        </div>
    );
}

export default EditCoursePage;