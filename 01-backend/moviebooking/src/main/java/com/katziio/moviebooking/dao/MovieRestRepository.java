package com.katziio.moviebooking.dao;

import com.katziio.moviebooking.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface MovieRestRepository extends JpaRepository<Movie,Long> {

}
