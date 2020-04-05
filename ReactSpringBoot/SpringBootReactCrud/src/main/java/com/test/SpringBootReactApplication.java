package com.test;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "com.test" })
public class SpringBootReactApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(SpringBootReactApplication.class, args);
	}
}