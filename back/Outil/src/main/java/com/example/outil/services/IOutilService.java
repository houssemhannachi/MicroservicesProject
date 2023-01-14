package com.example.outil.services;

import com.example.outil.entities.*;

import java.util.*;

public interface IOutilService {
    public List<Outil> findAll();

    public Outil addOutil(Outil e);
}
