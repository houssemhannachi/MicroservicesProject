package com.example.outil.controller;

import com.example.outil.entities.*;
import com.example.outil.services.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class OutilController {
    @Autowired
    IOutilService outilService;

    @PostMapping(value = "/addTool")
    public Outil addOutil(@RequestBody Outil outil) {
        return outilService.addOutil(outil);
    }

    @GetMapping(value = "/tools")
    public List<Outil> getAllOutils() {
        return outilService.findAll();
    }

}
