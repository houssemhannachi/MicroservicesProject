package com.example.evenement.entities;

import javax.persistence.*;
import java.util.*;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date dateEvent;

    private String titreEvent;

    private String lieuEvent;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateEvent() {
        return dateEvent;
    }

    public void setDateEvent(Date dateEvent) {
        this.dateEvent = dateEvent;
    }

    public String getTitreEvent() {
        return titreEvent;
    }

    public void setTitreEvent(String titreEvent) {
        this.titreEvent = titreEvent;
    }

    public String getLieuEvent() {
        return lieuEvent;
    }

    public void setLieuEvent(String lieuEvent) {
        this.lieuEvent = lieuEvent;
    }

    public Event(Date dateEvent, String titreEvent, String lieuEvent) {
        this.dateEvent = dateEvent;
        this.titreEvent = titreEvent;
        this.lieuEvent = lieuEvent;
    }

    public Event() {
    }
}
