package org.puregeniusness.store.inventory;

import org.springframework.stereotype.Repository;

@Repository
interface InventoryRepository<T, S> extends org.springframework.data.repository.Repository<T, S> {
    T findOne(S id);
    T save(T entity);
}
