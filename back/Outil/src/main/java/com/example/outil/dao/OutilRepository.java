package com.example.outil.dao;

import com.example.outil.entities.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

@Repository
public interface OutilRepository extends JpaRepository<Outil, Long> {

}
