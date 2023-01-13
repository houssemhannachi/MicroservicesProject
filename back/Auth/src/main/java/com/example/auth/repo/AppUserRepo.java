package com.example.auth.repo;

import com.example.auth.entities.*;
import org.springframework.data.jpa.repository.*;

public interface AppUserRepo extends JpaRepository<AppUser,Long> {
    AppUser findAppUserByEmail(String email);
}
