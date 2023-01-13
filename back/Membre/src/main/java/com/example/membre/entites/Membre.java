package com.example.membre.entites;
import com.example.membre.bean.*;

import javax.persistence.*;
import java.io.*;
import java.util.*;


@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type_mbr", discriminatorType = DiscriminatorType.STRING, length = 3)
public abstract class Membre implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cin;
    private String nom;
    private String prenom;

    @Temporal(TemporalType.DATE)
    private Date dateNaissance;
    @Lob
    private byte[] photo;

    private String cv;

    private String email;

    private String password;
    @Transient
    Collection<PublicationBean> pubs;

    @Column(name="type_mbr", insertable = false, updatable = false)
    private String typeMbr;

    public String getTypeMbr() {
        return typeMbr;
    }

    public void setTypeMbr(String typeMbr) {
        this.typeMbr = typeMbr;
    }

    public Collection<PublicationBean> getPubs() {
        return pubs;
    }

    public void setPubs(Collection<PublicationBean> pubs) {
        this.pubs = pubs;
    }

    public Membre(String cin, String nom, String prenom, Date dateNaissance, byte[] photo, String cv, String email, String password) {
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.photo = photo;
        this.cv = cv;
        this.email = email;
        this.password = password;
    }

    public Membre() {
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public Date getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(Date dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getCv() {
        return cv;
    }

    public void setCv(String cv) {
        this.cv = cv;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
