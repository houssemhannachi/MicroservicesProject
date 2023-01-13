package com.example.publication.dao;

import com.example.publication.entities.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.rest.webmvc.*;
import org.springframework.stereotype.*;

@RepositoryRestController
public interface PublicationRepository
        extends JpaRepository<Publication, Long> {
}
