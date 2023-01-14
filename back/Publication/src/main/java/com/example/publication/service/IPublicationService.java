package com.example.publication.service;

import com.example.publication.entities.*;

import java.util.*;

public interface IPublicationService {
    public List<Publication> findAll();
    public Publication findById(Long id);
    public Publication add(Publication publication);
    public void delete(Long id);
}
