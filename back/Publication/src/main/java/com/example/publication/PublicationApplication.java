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

    }
}
