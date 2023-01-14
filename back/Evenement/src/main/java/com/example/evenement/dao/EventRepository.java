package com.example.evenement.dao;

import com.example.evenement.entities.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

}
