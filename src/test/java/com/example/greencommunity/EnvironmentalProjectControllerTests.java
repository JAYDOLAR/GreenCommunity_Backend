package com.example.greencommunity;

import com.example.greencommunity.dto.EnvironmentalProjectRequest;
import com.example.greencommunity.model.User;
import com.example.greencommunity.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class EnvironmentalProjectControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    public void setUp() {
        User testUser = new User();
        testUser.setUsername("testuser");
        testUser.setEmail("testuser@example.com");
        testUser.setPasswordHash("password"); // Ensure to encode in real tests
        testUser.setFirstName("Test");
        testUser.setLastName("User");
        testUser.setLocation("Test City");
        testUser = userRepository.save(testUser);
    }

    @Test
    @WithMockUser(username = "testuser")
    public void testCreateProject() throws Exception {
        EnvironmentalProjectRequest request = new EnvironmentalProjectRequest();
        request.setName("Clean River Project");
        request.setDescription("Project to clean the river");
        request.setLocation("River City");
        request.setStartDate(LocalDate.now());
        request.setEndDate(LocalDate.now().plusDays(30));
        request.setCategory("Clean-up");

        mockMvc.perform(post("/api/projects")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("Clean River Project"));
    }
}
