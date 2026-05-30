import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddCoursePage from "./pages/AddCoursePage";
import CourseListPage from "./pages/CourseListPage";
import EditCoursePage from "./pages/EditCoursePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/courses"
                    element={<CourseListPage />}
                />

                <Route
                    path="/add-course"
                    element={<AddCoursePage />}
                />

                <Route
                    path="/edit-course/:id"
                    element={<EditCoursePage />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;