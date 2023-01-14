package com.example.evenement;

import com.example.evenement.dao.*;
import com.example.evenement.entities.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.*;

import java.text.*;
import java.util.*;

@EnableDiscoveryClient
@SpringBootApplication
public class EvenementApplication implements CommandLineRunner {

    @Autowired
    EventRepository eventRepository;

    public EvenementApplication() throws ParseException {
    }

    public static void main(String[] args) {
        SpringApplication.run(EvenementApplication.class, args);
    }
    SimpleDateFormat DateFor = new SimpleDateFormat("dd/MM/yyyy");
    Date date = DateFor.parse("08/07/2019");

    @Override
    public void run(String... args) throws Exception {
        Event event1= new Event(date,"Event Hannachi","Metouia");
        eventRepository.save(event1);

    }
}
