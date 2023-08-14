package com.katziio.moviebooking.config;

import com.katziio.moviebooking.entity.Category;
import com.katziio.moviebooking.entity.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    private EntityManager entityManager;

    // autowire entity manager
    @Autowired
    public MyDataRestConfig(EntityManager theEntityManagar) {
        this.entityManager = theEntityManagar;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        HttpMethod[] theUnsupportedActions = { HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE, HttpMethod.PATCH };

        // disable HTTP methods for Product: PUT, POST, DELETE and PATCH for Movies
        config.getExposureConfiguration()
                .forDomainType(Movie.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // disable HTTP methods for Product: PUT, POST, DELETE and PATCH for Category
        config.getExposureConfiguration()
                .forDomainType(Category.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
        // Call internal helper method
        exposeIds(config);
    }

    private void exposeIds(RepositoryRestConfiguration config) {
        // expose id
        // get list of entity class fron entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
        // array of entity types
        List<Class> entityClass = new ArrayList<>();
        // add to array
        for (EntityType tempEntity : entities) {
            entityClass.add(tempEntity.getJavaType());
        }
        // expose the id for the arrays of entity
        Class[] domainType = entityClass.toArray(new Class[0]);
        config.exposeIdsFor(domainType);
    }
}