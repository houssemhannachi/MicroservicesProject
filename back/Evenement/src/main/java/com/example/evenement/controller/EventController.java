package com.example.evenement.controller;

import com.example.evenement.dao.*;
import com.example.evenement.entities.*;
import com.example.evenement.services.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class EventController {
    @Autowired
    IEventService eventService;

    @PostMapping(value = "/addEvent")
    public Event addEvent(@RequestBody Event event) {
        return eventService.addEvent(event);
    }

    @GetMapping(value = "/events")
    public List<Event> getAllEvents() {
        return eventService.findAll();
    }

}
