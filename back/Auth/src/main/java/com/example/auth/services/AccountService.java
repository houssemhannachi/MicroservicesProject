package com.example.auth.services;

import com.example.auth.entities.*;

import java.util.*;

public interface AccountService {
    AppUser addNewUser(AppUser appUser);

    AppRole addNewRole(AppRole appRole);

    void addRoleToUser(String email, String roleName);

    AppUser loadUserByEmail(String email);

    List<AppUser> listUsers();


}
