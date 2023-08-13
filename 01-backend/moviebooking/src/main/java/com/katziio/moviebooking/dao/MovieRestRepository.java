package com.katziio.moviebooking.dao;

import com.katziio.moviebooking.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
@CrossOrigin("http://localhost:4200")
//public interface MovieRestRepository extends JpaRepository<Movie,Long> {
//
//
//}

public interface MovieRestRepository extends PagingAndSortingRepository<Movie, Long> {
}
