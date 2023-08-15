package com.katziio.moviebooking.dao;

import com.katziio.moviebooking.entity.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

//@CrossOrigin("http://localhost:4200")
// public interface MovieRestRepository extends JpaRepository<Movie,Long> {
//
//
// }

@CrossOrigin("http://localhost:4200")
public interface MovieRestRepository extends PagingAndSortingRepository<Movie, Long> {

    Page<Movie> findByCategoryid(@Param("id") Long id, Pageable pageable);
}
