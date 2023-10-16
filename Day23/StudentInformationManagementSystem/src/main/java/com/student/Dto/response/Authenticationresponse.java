package com.student.Dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Authenticationresponse {
    private String token;
    // private String token;
    private String email;
    private String id;
    private String name;
     
    private String role;

    
}
