package com.katziio.moviebooking.service;

import com.katziio.moviebooking.dao.MovieRestRepository;
import com.katziio.moviebooking.entity.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MovieService {
    private final MovieRestRepository movieRepository;

    @Autowired
    public MovieService(MovieRestRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public void printMovies() {
//        List<Movie> movies = movieRepository.findAll();
//        for (Movie movie : movies) {
//            System.out.println("Movie Name: " + movie.getName());
//            System.out.println("Directed By: " + movie.getDirectedBy());
//            System.out.println("Movie Name: " + movie.getOrigin());
//
//        }
    }
}
