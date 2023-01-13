package com.example.publication;

import com.example.publication.dao.*;
import com.example.publication.entities.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.cloud.client.discovery.*;

import java.util.*;

@SpringBootApplication
@EnableDiscoveryClient
public class PublicationApplication implements CommandLineRunner {
    @Autowired
    PublicationRepository publicationRepository;

    public static void main(String[] args) {
        SpringApplication.run(PublicationApplication.class, args);
    }

    public void run(String... args) throws Exception {
        Publication pubs1 = new Publication("article", "an approach for testing soa systems", new Date(), "lien", "pdf");
        Publication pubs2 = new Publication("chapitre de livre", "towards cloud computing : issues and challenges", new Date(), "lien", "pdf");
        Publication pubs3 = new Publication("article", "introducing blochainsystems", new Date(), " lien", " pdf");
        publicationRepository.save(pubs1);
        publicationRepository.save(pubs2);
        publicationRepository.save(pubs3);
    }
}
