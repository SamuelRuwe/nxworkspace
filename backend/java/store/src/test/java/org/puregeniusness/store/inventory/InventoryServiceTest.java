//package org.puregeniusness.store.inventory;
//
//import org.assertj.core.util.Arrays;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mock;
//
//import java.util.Collections;
//
//import static org.hamcrest.MatcherAssert.assertThat;
//import static org.junit.jupiter.api.Assertions.*;
//
//class InventoryServiceTest {
//    @Mock
//    private InventoryRepository inventoryService;
//
//    @BeforeEach
//    void setUp() {
//
//    }
//
//    @Test
//    void getInventoryListWithNoItems() {
//        assertEquals(Collections.emptyList(), inventoryService.getInventoryList());
//    }
//
//    @Test
//    void getInventoryListWithItem() {
//        assertEquals(Arrays.asList(new Item("abc", 10L)), inventoryService.getInventoryList());
//    }
//
//}
