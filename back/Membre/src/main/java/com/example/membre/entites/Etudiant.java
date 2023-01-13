package com.example.membre.entites;

import javax.persistence.*;
import java.io.*;
import java.util.*;

@Entity
@DiscriminatorValue("etd")
public class Etudiant extends Membre implements Serializable {

    @Temporal(TemporalType.DATE)
    private Date dateInscription;
    private String diplome;
    @ManyToOne
    private EnseignantChercheur encadrant;

    public Etudiant() {
        super();
    }

    public Date getDateInscription() {
        return dateInscription;
    }

    public void setDateInscription(Date dateInscription) {
        this.dateInscription = dateInscription;
    }

    public String getDiplome() {
        return diplome;
    }

    public void setDiplome(String diplome) {
        this.diplome = diplome;
    }

    public Etudiant(String cin, String nom, String prenom, Date dateNaissance, byte[] photo, String cv, String email, String password, Date dateInscription, String diplome) {
        super(cin, nom, prenom, dateNaissance, photo, cv, email, password);
        this.dateInscription = dateInscription;
        this.diplome = diplome;
    }

    public EnseignantChercheur getEncadrant() {
        return encadrant;
    }

    public void setEncadrant(EnseignantChercheur encadrant) {
        this.encadrant = encadrant;
    }
}
