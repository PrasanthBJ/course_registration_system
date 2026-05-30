import CourseList from "../components/CourseList";

function Home() {
    return (
        <div className="container mt-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">
                    Course Registration System
                </h1>
            </div>

            <CourseList />
        </div>
    );
}

export default Home;