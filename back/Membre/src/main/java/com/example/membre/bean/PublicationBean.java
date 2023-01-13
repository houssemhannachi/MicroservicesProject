package com.example.membre.bean;


import java.util.*;

public class PublicationBean {
    private Long id;
    private String titre;
    private String type;
    private Date dateApparition;
    private String lien;
    private String sourcePdf;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Date getDateApparition() {
        return dateApparition;
    }

    public void setDateApparition(Date dateApparition) {
        this.dateApparition = dateApparition;
    }

    public String getLien() {
        return lien;
    }

    public void setLien(String lien) {
        this.lien = lien;
    }

    public String getSourcePdf() {
        return sourcePdf;
    }

    public void setSourcePdf(String sourcePdf) {
        this.sourcePdf = sourcePdf;
    }
}
