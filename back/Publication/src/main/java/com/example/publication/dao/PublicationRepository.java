package com.example.publication.dao;

import com.example.publication.entities.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

@Repository
public interface PublicationRepository extends JpaRepository<Publication, Long> {
}
