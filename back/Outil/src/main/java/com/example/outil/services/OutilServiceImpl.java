package com.example.outil.services;

import com.example.outil.dao.*;
import com.example.outil.entities.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public class OutilServiceImpl implements IOutilService {
    @Autowired
    OutilRepository outilRepository;

    @Override
    public List<Outil> findAll() {
        return outilRepository.findAll();

    }

    public Outil addOutil(Outil outil) {
        outilRepository.save(outil);
        return outil;
    }
}
