package com.katziio.moviebooking.dao;

import com.katziio.moviebooking.entity.Movie;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
//public interface MovieRestRepository extends JpaRepository<Movie,Long> {
//
//
//}

public interface MovieRestRepository extends PagingAndSortingRepository<Movie, Long> {
}
