package org.puregeniusness.store.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/store")
public class StoreController {

    @GetMapping("/test")
    public Mono<String> testStore() {
        return Mono.just("Test");
    }
}
