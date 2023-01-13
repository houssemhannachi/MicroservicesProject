package com.example.auth.controller;

import com.example.auth.entities.*;
import com.example.auth.services.*;
import jdk.jfr.*;
import org.springframework.beans.factory.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.beans.factory.xml.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.*;
import java.util.*;

@RestController
public class AccountRestController {
    @Autowired
    private AccountService accountService;

    @GetMapping(path="/users")
    public List<AppUser> appUsers() {
        return accountService.listUsers();
    }

    @PostMapping(path = "/users")
    public AppUser saveUser(@RequestBody AppUser appUser) {
        return accountService.addNewUser(appUser);
    }

    @PostMapping(path = "/roles")
    public AppRole saveRole(@RequestBody AppRole appRole) {
        return accountService.addNewRole(appRole);
    }

    @PostMapping(path = "/addRoleToUser")
    public void addRoleToUser(@RequestBody RoleUserForm roleUserForm ) {
        accountService.addRoleToUser(roleUserForm.getEmail(),roleUserForm.getRoleName());

    }
    @PostMapping("/signout")
    public Map<String, Object> logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        System.out.println(session);
        session.invalidate();
        Map<String, Object> rtn = new LinkedHashMap<>();
        rtn.put("status", "ok");
        return rtn;
    }
}

