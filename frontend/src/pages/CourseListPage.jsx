import Navbar from "../components/Navbar";
import CourseList from "../components/CourseList";

function CourseListPage() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <CourseList />
            </div>
        </>
    );
}

export default CourseListPage;