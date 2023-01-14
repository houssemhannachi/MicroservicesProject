package com.example.evenement.services;

import com.example.evenement.entities.*;

import java.util.*;

public interface IEventService {
    public List<Event> findAll();

    public Event addEvent(Event e);
}
