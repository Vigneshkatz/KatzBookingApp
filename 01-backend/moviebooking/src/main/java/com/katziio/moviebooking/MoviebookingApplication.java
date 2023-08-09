package com.katziio.moviebooking;
import com.katziio.moviebooking.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class MoviebookingApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviebookingApplication.class, args);
	}
	@Autowired
	private MovieService movieService;

	@EventListener(ApplicationReadyEvent.class)
	public void printMoviesOnStartup() {
		movieService.printMovies();
	}

}
