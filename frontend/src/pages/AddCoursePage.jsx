import Navbar from "../components/Navbar";
import CourseForm from "../components/CourseForm";

function AddCoursePage() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <CourseForm />
            </div>
        </>
    );
}

export default AddCoursePage;