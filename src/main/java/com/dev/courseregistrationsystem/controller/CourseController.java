package com.dev.courseregistrationsystem.controller;

import com.dev.courseregistrationsystem.model.Course;
import com.dev.courseregistrationsystem.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/")
    public String home(){
        return "Course Registration System running !!!";
    }

    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        return courseService.saveCourse(course);
    }

    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable Long id) {
        return courseService.getCourseById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));
    }

    @PutMapping("/{id}")
    public Course updateCourse(@PathVariable long id, @RequestBody Course course){
        return courseService.updateCourse(id,course);
    }

    @DeleteMapping("/{id}")
    public String deleteCourse(@PathVariable long id){
        courseService.deleteCourse(id);
        return "Course deleted Successfully";
    }



}
