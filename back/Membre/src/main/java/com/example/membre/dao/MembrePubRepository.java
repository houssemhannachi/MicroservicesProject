package com.example.membre.dao;

import com.example.membre.entites.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.*;
import org.springframework.stereotype.*;

import java.util.*;

@Repository
public interface MembrePubRepository extends JpaRepository<Publication_Membre, Membre_Pub_Ids> {
    List<Publication_Membre> findPublication_MembreByAuteur_Id(Long autId);
/*
    @Query("SELECT m from Publication_Membre m where m.id=:x")
    List<Publication_Membre> findPublication_MembreByAuteur_Id(@Param ("x") Long autId);*/
}
