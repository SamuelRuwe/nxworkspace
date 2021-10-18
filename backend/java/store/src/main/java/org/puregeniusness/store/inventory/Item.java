package org.puregeniusness.store.inventory;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.UUID;

@Getter
@AllArgsConstructor
class Item {
    private final UUID id = UUID.randomUUID();
    private String name;
    private Long cost;
}
