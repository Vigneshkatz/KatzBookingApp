package com.katziio.moviebooking.entity;

import javax.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "director")
    private String directedBy;

    @Column(name = "origin")
    private String origin;

    @Column(name = "categoryid")
    private Long categoryid;
}
