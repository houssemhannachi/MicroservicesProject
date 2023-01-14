package com.example.membre.dao;

import com.example.membre.entites.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import java.util.*;

@Repository
public interface MembreRepository extends JpaRepository<Membre, Long> {
    Membre findByCin(String cin);

    List<Membre> findMembreByTypeMbr(String type);
    List<Membre> findByNomStartingWith(String caractere);

    Membre findByEmail(String email);
}
