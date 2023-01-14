package com.example.publication.entities;

import com.example.publication.bean.MemberBean;
import lombok.*;
import reactor.util.annotation.*;
import reactor.util.annotation.NonNull;

import javax.persistence.*;
import java.io.*;
import java.util.*;

@Entity
public class Publication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NonNull
    private String titre;
    @NonNull
    private String type;
    @Temporal(TemporalType.DATE)
    @NonNull
    private Date dateApparition;
    @NonNull
    private String lien;
    @NonNull
    private String sourcePdf;

    private int fileDB;

    public int getFileDB() {
        return fileDB;
    }

    public void setFileDB(int fileDB) {
        this.fileDB = fileDB;
    }

    public Publication(@NonNull String titre, @NonNull String type, @NonNull Date dateApparition, @NonNull String lien, @NonNull String sourcePdf) {
        this.titre = titre;
        this.type = type;
        this.dateApparition = dateApparition;
        this.lien = lien;
        this.sourcePdf = sourcePdf;
    }

    public Publication() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @NonNull
    public String getTitre() {
        return titre;
    }

    public void setTitre(@NonNull String titre) {
        this.titre = titre;
    }

    @NonNull
    public String getType() {
        return type;
    }

    public void setType(@NonNull String type) {
        this.type = type;
    }

    @NonNull
    public Date getDateApparition() {
        return dateApparition;
    }

    public void setDateApparition(@NonNull Date dateApparition) {
        this.dateApparition = dateApparition;
    }

    @NonNull
    public String getLien() {
        return lien;
    }

    public void setLien(@NonNull String lien) {
        this.lien = lien;
    }

    @NonNull
    public String getSourcePdf() {
        return sourcePdf;
    }

    public void setSourcePdf(@NonNull String sourcePdf) {
        this.sourcePdf = sourcePdf;
    }
}