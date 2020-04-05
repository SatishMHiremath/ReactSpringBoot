package com.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.model.ApiResponse;
import com.test.model.UserDto;
import com.test.service.impl.UserServiceImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserServiceImpl userServiceImpl;

    @PostMapping
    public ApiResponse saveUser(@RequestBody UserDto user){
        return new ApiResponse(HttpStatus.OK.value(), "User saved successfully.",userServiceImpl.save(user));
    }

    @GetMapping
    public ApiResponse listUser(){
        return new ApiResponse(HttpStatus.OK.value(), "User list fetched successfully.",userServiceImpl.findAll());
    }

    @GetMapping("/{id}")
    public ApiResponse getOne(@PathVariable int id){
        return new ApiResponse(HttpStatus.OK.value(), "User fetched successfully.",userServiceImpl.findById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse update(@RequestBody UserDto userDto) {
        return new ApiResponse(HttpStatus.OK.value(), "User updated successfully.",userServiceImpl.update(userDto));
    }

    @DeleteMapping("/{id}")
    public ApiResponse delete(@PathVariable int id) {
        userServiceImpl.delete(id);
        return new ApiResponse(HttpStatus.OK.value(), "User deleted successfully.", null);
    }

}