package com.example.publication.controller;

import com.example.publication.dao.PublicationRepository;
import com.example.publication.entities.Publication;
import com.example.publication.service.IPublicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PublicationRestController {
    @Autowired
    IPublicationService publicationService;
    @Autowired
    PublicationRepository publicationRepository;
    @RequestMapping(value = "/publications", method = RequestMethod.GET)
    public List<Publication> findPublications() {
        return publicationRepository.findAll();
    }
    @GetMapping(value = "/publication/{id}")
    public Publication findOnePublicationById(@PathVariable Long id) {
        return publicationService.findById(id);
    }
    @PostMapping(value = "/addPublication")
    public Publication addPublication(@RequestBody Publication publication) {
        return publicationService.add(publication);
    }
    @DeleteMapping(value = "/deletePublication/{id}")
    public String deletePublication(@PathVariable("id") Long ident) {
        publicationService.delete(ident);
        return "ok";
    }


}
