package com.example.membre;

import com.example.membre.bean.*;
import com.example.membre.dao.*;
import com.example.membre.entites.*;
import com.example.membre.proxy.*;
import com.example.membre.services.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.*;
import org.springframework.cloud.openfeign.*;

import javax.swing.text.*;
import java.text.*;
import java.util.*;

@EnableDiscoveryClient
@EnableFeignClients
@SpringBootApplication
public class MembreApplication{
    /*@Autowired
    MembreRepository membreRepository;*/
    /*@Autowired
    IMemberService memberService;
    @Autowired
    PublicationProxyService publicationProxyService;*/

    public static void main(String[] args) {
        SpringApplication.run(MembreApplication.class, args);
    }

    /*@Override
    public void run(String... args) throws Exception {

    // Delete a Member

    SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-mm-dd");
    Date dateNaissance= dateFormatter.parse("2000-01-01");
    Date dateInscription= dateFormatter.parse("2020-09-15");
    Membre e1 = new Etudiant("123221","Hannachi","Houssem",dateNaissance,null,"cv","houssem.hannachi@enis.tn","XXX",dateInscription,"Génie informatique");
    Membre e2 = new Etudiant("9999","Mjedri","Amine",dateNaissance,null,"cv","houssem.hannachi@enis.tn","XXX",dateInscription,"Génie informatique");
    Membre ens1 = new EnseignantChercheur("123221","Enseignant","Chercheur",dateNaissance,null,"cv2","enseignant@enis.tn","XXX","PROF","ENIS");
    memberService.addMember(e1);
    memberService.addMember(ens1);
    memberService.affect_etudiantToEnseignant(1L,2L);
    PublicationBean publicationBean = publicationProxyService.findPublicationById(2L);
    System.out.println(publicationBean.getTitre());
    memberService.affecterAuteurToPublication(1L,1L);
    }*/
}
