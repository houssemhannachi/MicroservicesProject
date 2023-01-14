package com.example.membre.controller;

import com.example.membre.dao.*;
import com.example.membre.entites.*;
import com.example.membre.services.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class MemberRestController {
    @Autowired
    IMemberService memberService;

    @Autowired
    MembreRepository memberRepository;

    @RequestMapping(value = "/membres", method = RequestMethod.GET)
    public List<Membre> findMembres() {
        return memberService.findAll();
    }
    @GetMapping(value = "/membres/email/{email}")
    public Membre findOneMemberByEmail(@PathVariable String email) {

        return memberService.findByEmail(email);
    }

    @GetMapping(value = "/membres/{id}")
    public Membre findOneMemberById(@PathVariable Long id) {
        return memberService.findMember(id);
    }

    @GetMapping(value = "/membres/search/cin")
    public Membre findOneMemberByCin(@RequestParam String cin) {
        return memberService.findByCin(cin);
    }



    @GetMapping("/memberByType/{type}")
    public List<Membre> getUserByRole(@PathVariable("type") String type) {
        return memberRepository.findMembreByTypeMbr(type);
    }

    @PostMapping(value = "/membres/enseignant")
    public Membre addMembre(@RequestBody EnseignantChercheur m) {
        return memberService.addMember(m);
    }

    @PostMapping(value = "/membres/addEtudiant")
    public Membre addEtudiant(@RequestBody Etudiant etudiant) {
        return memberService.addMember(etudiant);
    }

    @PostMapping(value = "/membres/addEnseignant")
    public Membre addEnseignantChercheur(@RequestBody EnseignantChercheur enseignantChercheur) {
        return memberService.addMember(enseignantChercheur);
    }

    @DeleteMapping(value = "/deleteMember/{id}")
    public String deleteMember(@PathVariable("id") Long ident) {
        memberService.deleteMember(ident);
        return "ok";
    }


    @GetMapping("/fullmember/{id}")
    public Membre findAFullMember(@PathVariable(name = "id") Long id) {
        Membre mbr = memberService.findMember(id);
        mbr.setPubs(memberService.findPublicationParAuteur(id));
        return mbr;
    }

    @PutMapping("/members/updateEtudiant")
    public void updateEtudiant(@RequestBody Etudiant etudiant) {
        memberService.updateMember(etudiant);
    }

    @PutMapping("/members/updateEnseignant")
    public void updateEnseignant(@RequestBody EnseignantChercheur enseignantChercheur) {
        memberService.updateMember(enseignantChercheur);
    }

    @PostMapping("/members/affecter/{idEtudiant}/{idEnseignant}")
    public void affecter(@PathVariable(name = "idEtudiant") Long idEtudiant, @PathVariable(name = "idEnseignant") Long idEnseignant) {
        memberService.affect_etudiantToEnseignant(idEtudiant, idEnseignant);

    }

}
