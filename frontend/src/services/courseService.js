import courseApi from "../api/courseApi";

export const getAllCourses = async () => {
    const response = await courseApi.get("");
    return response.data;
};

export const createCourse = async (course) => {
    const response = await courseApi.post("", course);
    return response.data;
};

export const deleteCourse = async (id) => {
    await courseApi.delete(`/${id}`);
};

export const updateCourse = async (id, course) => {
    const response = await courseApi.put(`/${id}`, course);
    return response.data;
};