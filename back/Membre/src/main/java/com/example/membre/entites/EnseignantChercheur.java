package com.example.membre.entites;

import com.fasterxml.jackson.annotation.*;
import jdk.jfr.*;

import javax.persistence.*;
import java.io.*;
import java.util.*;

@Entity
@DiscriminatorValue("ens")
public class EnseignantChercheur extends Membre implements Serializable {

    private String grade;
    private String etablissement;

    @JsonIgnore
    @OneToMany(mappedBy="encadrant")
    private List<Etudiant> etudiant;

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getEtablissement() {
        return etablissement;
    }

    public void setEtablissement(String etablissement) {
        this.etablissement = etablissement;
    }


    public EnseignantChercheur(String cin, String nom, String prenom, Date dateNaissance, byte[] photo, String cv, String email, String password, String grade, String etablissement) {
        super(cin, nom, prenom, dateNaissance, photo, cv, email, password);
        this.grade = grade;
        this.etablissement = etablissement;
    }

    public EnseignantChercheur() {
    }
}
