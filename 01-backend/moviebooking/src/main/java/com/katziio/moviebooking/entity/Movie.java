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

    @Column(name = "moviename")
    private String name;

    @Column(name = "directedby")
    private String directedBy;

    @Column(name = "origin")
    private String origin;

    @Column(name = "ticketprice")
    private Long price;
}
