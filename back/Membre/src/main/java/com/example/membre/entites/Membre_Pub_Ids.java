package com.example.membre.entites;

import lombok.*;

import javax.persistence.*;
import java.io.*;

@Embeddable
public class Membre_Pub_Ids implements Serializable {
    private Long publication_id;
    private Long auteur_id;

    public Membre_Pub_Ids(Long publication_id, Long auteur_id) {
        this.publication_id = publication_id;
        this.auteur_id = auteur_id;
    }

    public Membre_Pub_Ids() {
    }

    public Long getPublication_id() {
        return publication_id;
    }

    public void setPublication_id(Long publication_id) {
        this.publication_id = publication_id;
    }

    public Long getAuteur_id() {
        return auteur_id;
    }

    public void setAuteur_id(Long auteur_id) {
        this.auteur_id = auteur_id;
    }
}
