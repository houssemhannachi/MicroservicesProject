package com.example.membre.dao;

import com.example.membre.entites.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import java.util.*;

@Repository
public interface EnseignantChercheurRepository extends JpaRepository<EnseignantChercheur, Long> {
    List<EnseignantChercheur> findByGrade(String grade);

    List<EnseignantChercheur> findByEtablissement(String etablissement);

}
