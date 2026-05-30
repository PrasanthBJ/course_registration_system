package com.dev.courseregistrationsystem.service;

import com.dev.courseregistrationsystem.model.Course;
import com.dev.courseregistrationsystem.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    CourseRepository courseRepository;

    public Course saveCourse(Course course){
        return courseRepository.save(course);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseById(long id) {
        return courseRepository.findById(id);
    }

    public Course updateCourse(long id, Course course) {
        course.setId(id);
        return courseRepository.save(course);
    }

    public void deleteCourse(long id) {
        courseRepository.deleteById(id);
    }
}
