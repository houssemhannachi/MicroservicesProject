package com.example.auth.services;

import com.example.auth.entities.*;
import com.example.auth.repo.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.security.crypto.password.*;
import org.springframework.stereotype.*;

import javax.transaction.*;
import java.util.*;

@Service
@Transactional
public class AccountServiceImpl implements AccountService{
    @Autowired
    private AppUserRepo appUserRepo;
    @Autowired
    private AppRoleRepo appRoleRepo;


    private PasswordEncoder passwordEncoder;

    public AccountServiceImpl(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public AppUser addNewUser(AppUser appUser) {
        String pw = appUser.getPassword();
        appUser.setPassword(passwordEncoder.encode(pw));
        appUser.setRole(appRoleRepo.findAppRoleByRoleName("Member"));
        return appUserRepo.save(appUser);
    }

    @Override
    public AppRole addNewRole(AppRole appRole) {
        return appRoleRepo.save(appRole);
    }

    @Override
    public void addRoleToUser(String email, String roleName) {
        AppUser appUser=appUserRepo.findAppUserByEmail(email);
        AppRole appRole=appRoleRepo.findAppRoleByRoleName(roleName);
        appUser.setRole(appRole);

    }

    @Override
    public AppUser loadUserByEmail(String email) {
        return appUserRepo.findAppUserByEmail(email);
    }

    @Override
    public List<AppUser> listUsers() {
        return appUserRepo.findAll();
    }
}
