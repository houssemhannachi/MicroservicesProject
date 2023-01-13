package com.example.membre.proxy;

import com.example.membre.bean.*;
import org.springframework.cloud.openfeign.*;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "PUBLICATION-SERVICE")

public interface PublicationProxyService {
    @GetMapping("/publications/{id}")
    public PublicationBean findPublicationById(@PathVariable(name = "id") Long id);

}
