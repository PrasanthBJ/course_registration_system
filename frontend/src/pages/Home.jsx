import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold">
                        Course Registration System
                    </h1>

                    <p className="lead text-muted">
                        Manage courses efficiently with React, Spring Boot and MySQL.
                    </p>
                </div>

                <div className="row g-4">

                    <div className="col-md-4">
                        <div className="card shadow h-100">
                            <div className="card-body text-center">
                                <h3>📚</h3>
                                <h5>Total Courses</h5>
                                <p className="text-muted">
                                    View all available courses.
                                </p>

                                <Link
                                    to="/courses"
                                    className="btn btn-primary"
                                >
                                    View Courses
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow h-100">
                            <div className="card-body text-center">
                                <h3>➕</h3>
                                <h5>Add New Course</h5>
                                <p className="text-muted">
                                    Create and register a new course.
                                </p>

                                <Link
                                    to="/add-course"
                                    className="btn btn-success"
                                >
                                    Add Course
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow h-100">
                            <div className="card-body text-center">
                                <h3>⚙️</h3>
                                <h5>Manage Courses</h5>
                                <p className="text-muted">
                                    Update and delete existing courses.
                                </p>

                                <Link
                                    to="/courses"
                                    className="btn btn-warning"
                                >
                                    Manage
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="card mt-5 shadow">
                    <div className="card-body text-center">

                        <h4>Tech Stack Used</h4>

                        <div className="mt-3">

                            <span className="badge bg-success me-2">
                                React
                            </span>

                            <span className="badge bg-primary me-2">
                                Spring Boot
                            </span>

                            <span className="badge bg-warning text-dark me-2">
                                MySQL
                            </span>

                            <span className="badge bg-dark">
                                Bootstrap
                            </span>

                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;