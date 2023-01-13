package com.example.publication.service;

import com.example.publication.dao.*;
import com.example.publication.entities.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public class PublicationImpl implements IPublicationService{
    @Autowired
    PublicationRepository publicationRepository;
    @Override
    public List<Publication> findAll() {
        return publicationRepository.findAll();

    }

    @Override
    public Publication findById(Long id) {
        return publicationRepository.findById(id).get();
    }
}
