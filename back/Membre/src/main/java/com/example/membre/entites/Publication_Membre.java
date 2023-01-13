package com.example.membre.entites;

import javax.persistence.*;

@Entity
public class Publication_Membre {
    @EmbeddedId
    private Membre_Pub_Ids id;
    @ManyToOne
    @MapsId("auteur_id")
    private Membre auteur;

    public Publication_Membre() {
    }

    public Publication_Membre(Membre_Pub_Ids id, Membre auteur) {
        this.id = id;
        this.auteur = auteur;
    }

    public Membre_Pub_Ids getId() {
        return id;
    }

    public void setId(Membre_Pub_Ids id) {
        this.id = id;
    }

    public Membre getAuteur() {
        return auteur;
    }

    public void setAuteur(Membre auteur) {
        this.auteur = auteur;
    }
}