package com.springrest.springrest.services;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDao courseDao;

	@Override
	public List<Courses> getCourses() {
		return courseDao.findAll();
	}

	@Override
	public Courses getCourse(long courseId) {
		Optional<Courses> courses = courseDao.findById(courseId);
		if (courses.isEmpty()){
			throw new IllegalArgumentException("Course not found with id : "+courseId);
		}
		return courses.get();
	}

	@Override
	public Courses addCourse(Courses course) {
		courseDao.save(course);
		return course;
	}

	@Override
	public Courses updateCourse(Courses course) {
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		Optional<Courses> entity = courseDao.findById(parseLong);
		if (entity.isEmpty()){throw new IllegalArgumentException("Course not found");}
		courseDao.delete(entity.get());
	}

}
