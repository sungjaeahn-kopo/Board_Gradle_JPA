package kr.co.kyowon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.kyowon.repository.BoardRepository;
import kr.co.kyowon.repository.UserRepository;
import kr.co.kyowon.vo.Board;
import kr.co.kyowon.vo.User;

@RestController
@RequestMapping("/api")
public class UserRestController {

	@Autowired
	public UserRepository userRepository;
	
	@GetMapping("/user/list")
	public List<User> getAllUser() {
		return userRepository.findAll();
	}
	
	@PostMapping("/user/save")
	public ResponseEntity<User> saveUser(@RequestBody User user) {
		System.out.println("board 받아오는지? : " + user.getCustomerId());
		userRepository.save(user);
		return ResponseEntity.ok().body(user);
	}
}
