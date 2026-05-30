import { useEffect, useState } from "react";
import { getAllCourses,deleteCourse } from "../services/courseService";

function CourseList() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getAllCourses();
            setCourses(data);
        };

        fetchCourses();
    }, []);

    const handleDelete = async (id) => {

    try {

        await deleteCourse(id);

        setCourses(
            courses.filter(course => course.id !== id)
        );

    } catch(error) {
        console.error(error);
    }
};
    return (
        <div className="card shadow-lg p-4">

            <h2 className="text-center mb-4">
                Available Courses
            </h2>

            <div className="table-responsive">

                <table className="table table-striped table-hover align-middle text-center">

                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Course Name</th>
                            <th>Trainer</th>
                            <th>Duration</th>
                            <th>Fees</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {courses.map(course => (
                            <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.courseName}</td>
                                <td>{course.trainerName}</td>
                                <td>{course.duration} Days</td>
                                <td>₹{course.fees}</td>
                                <td>
                                    <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(course.id)}
                                    >
                                        Delete      
                                    </button>
                                </td>
                            </tr>
                        ))} 
                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default CourseList;  