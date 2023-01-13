package com.example.membre.services;

import com.example.membre.bean.*;
import com.example.membre.entites.*;

import java.util.*;

public interface IMemberService {
    public Membre addMember(Membre m);

    public void deleteMember(Long id);

    public Membre updateMember(Membre p);

    public Membre findMember(Long id);

    public List<Membre> findAll();

    public Membre findByCin(String cin);

    public Membre findByEmail(String email);

    public List<Membre> findByNom(String nom);

    public List<Etudiant> findByDiplome(String diplome);

    public List<EnseignantChercheur> findByGrade(String grade);

    public List<EnseignantChercheur> findByEtablissement(String etablissement);

    void affect_etudiantToEnseignant(Long idEtudiant, Long idEnseignant);

    public void affecterauteurTopublication(Long idauteur, Long idpub);

    public List<PublicationBean>findPublicationparauteur(Long idauteur);
}
