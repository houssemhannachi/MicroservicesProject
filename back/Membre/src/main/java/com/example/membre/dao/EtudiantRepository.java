package com.example.membre.dao;

import com.example.membre.entites.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import java.util.*;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
    List<Etudiant> findByDiplome(String diplome);

    List<Etudiant> findByDiplomeOrderByDateInscriptionDesc(String diplome);
}
