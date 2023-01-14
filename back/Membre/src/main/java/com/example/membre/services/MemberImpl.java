package com.example.membre.services;

import com.example.membre.bean.*;
import com.example.membre.dao.*;
import com.example.membre.entites.*;
import com.example.membre.proxy.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public class MemberImpl implements IMemberService {

    @Autowired
    MembreRepository memberRepository;

    @Autowired
    PublicationProxyService proxy;

    @Autowired
    EtudiantRepository etudiantRepository;

    @Autowired
    MembrePubRepository membrePubRepository;

    @Autowired
    EnseignantChercheurRepository enseignantChercheurRepository;

    public Membre addMember(Membre m) {
        memberRepository.save(m);
        return m;
    }

    public void deleteMember(Long id) {
        memberRepository.deleteById(id);
    }

    public Membre updateMember(Membre m) {
        return memberRepository.saveAndFlush(m);

    }

    public Membre findMember(Long id) {
        return (Membre) memberRepository.findById(id).get();

    }

    public List<Membre> findAll() {
        return memberRepository.findAll();
    }

    public Membre findByCin(String cin) {
        return memberRepository.findByCin(cin);
    }

    public Membre findByEmail(String email) {
        return (Membre) memberRepository.findByEmail(email);
    }

    public List<Membre> findByNom(String nom) {
        return memberRepository.findByNomStartingWith(nom);
    }

    @Override
    public List<Etudiant> findByDiplome(String diplome) {
        return etudiantRepository.findByDiplome(diplome);
    }

    @Override
    public List<EnseignantChercheur> findByGrade(String grade) {
        return enseignantChercheurRepository.findByGrade(grade);
    }

    @Override
    public List<EnseignantChercheur> findByEtablissement(String etablissement) {
        return enseignantChercheurRepository.findByEtablissement(etablissement);
    }

    public void affect_etudiantToEnseignant(Long idEtudiant, Long idEnseignant) {
        Etudiant e = etudiantRepository.findById(idEtudiant).get();
        EnseignantChercheur ens = enseignantChercheurRepository.findById(idEnseignant).get();
        e.setEncadrant(ens);
        etudiantRepository.saveAndFlush(e);


    }

    @Override
    public void affecterauteurTopublication(Long idauteur, Long idpub) {
        Membre mbr = memberRepository.findById(idauteur).get();
        Publication_Membre mbs = new Publication_Membre();
        mbs.setAuteur(mbr);
        mbs.setId(new Membre_Pub_Ids(idpub, idauteur));
        membrePubRepository.save(mbs);

    }

    @Override
    public List<PublicationBean> findPublicationparauteur(Long idauteur) {
        List<PublicationBean> pubs = new ArrayList<PublicationBean>();
        List<Publication_Membre> idpubs = membrePubRepository.findPublication_MembreByAuteur_Id(idauteur);
        idpubs.forEach(s -> {
                    System.out.println(s);
                    pubs.add(proxy.findPublicationById(s.getId().getPublication_id()))
                    ;
                }
        );

        return pubs;
    }
}
