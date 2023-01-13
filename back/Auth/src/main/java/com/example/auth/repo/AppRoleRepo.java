package com.example.auth.repo;

import com.example.auth.entities.*;
import org.springframework.data.jpa.repository.*;

public interface AppRoleRepo extends JpaRepository<AppRole,Long> {
    AppRole findAppRoleByRoleName(String roleName);
}
