package com.example.outil.entities;

import javax.persistence.*;
import java.util.*;

@Entity
public class Outil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date dateOutil;

    private String sourceOutil;

    public Outil() {
    }

    public Outil(Date dateOutil, String sourceOutil) {
        this.dateOutil = dateOutil;
        this.sourceOutil = sourceOutil;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateOutil() {
        return dateOutil;
    }

    public void setDateOutil(Date dateOutil) {
        this.dateOutil = dateOutil;
    }

    public String getSourceOutil() {
        return sourceOutil;
    }

    public void setSourceOutil(String sourceOutil) {
        this.sourceOutil = sourceOutil;
    }
}
