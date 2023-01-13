package com.example.outil;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.*;

@EnableDiscoveryClient
@SpringBootApplication
public class OutilApplication {

    public static void main(String[] args) {
        SpringApplication.run(OutilApplication.class, args);
    }

}
