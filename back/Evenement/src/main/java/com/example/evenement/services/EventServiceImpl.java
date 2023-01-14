package com.example.evenement.services;

import com.example.evenement.dao.*;
import com.example.evenement.entities.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public class EventServiceImpl implements IEventService{
    @Autowired
    EventRepository eventRepository;
    @Override
    public List<Event> findAll() {
        return eventRepository.findAll();

    }

    public Event addEvent(Event e) {
        eventRepository.save(e);
        return e;
    }
}
