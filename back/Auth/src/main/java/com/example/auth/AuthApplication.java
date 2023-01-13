package com.example.auth;

import com.example.auth.entities.*;
import com.example.auth.services.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.*;
import org.springframework.security.crypto.bcrypt.*;
import org.springframework.security.crypto.password.*;

@SpringBootApplication
public class AuthApplication implements CommandLineRunner {

    @Autowired
    AccountService accountService;

    public static void main(String[] args) {
        SpringApplication.run(AuthApplication.class, args);
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public void run(String... args) throws Exception {
        accountService.addNewRole(new AppRole("Member"));
        accountService.addNewRole(new AppRole("Admin"));

        accountService.addNewUser(new AppUser("houssem","123",null,1L));
        accountService.addNewUser(new AppUser("aymen","123",null,2L));

        accountService.addRoleToUser("houssem","Member");
        accountService.addRoleToUser("Aymen","Admin");
    }
}
