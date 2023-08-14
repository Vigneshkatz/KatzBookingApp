package com.katziio.moviebooking.dao;

import com.katziio.moviebooking.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface CategoryRestRepository extends JpaRepository<Category, Long> {

}
