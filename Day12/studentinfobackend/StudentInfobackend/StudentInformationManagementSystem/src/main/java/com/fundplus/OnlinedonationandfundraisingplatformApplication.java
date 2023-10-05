package com.fundplus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
		info =@Info(
				title = "Student Information Management System",
				version = "1.1.2",
				description = "Application for Student Database",
				contact = @Contact(
						name = "Manas V M",
						email = "manasvm2003@gmail.com"
						)
				)
		)
@SpringBootApplication
public class OnlinedonationandfundraisingplatformApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlinedonationandfundraisingplatformApplication.class, args);
		System.out.println("Lets create and display student DB");
	}

}
