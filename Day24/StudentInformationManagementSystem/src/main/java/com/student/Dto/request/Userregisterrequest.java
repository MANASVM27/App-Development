package com.student.Dto.request;

import com.student.Model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Userregisterrequest {
    // private String id;

    private String name;
    private String email;
    private String password;
    // private Boolean isEnabled;
    private Role role;
    
}