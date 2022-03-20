package kr.co.kyowon.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceUnit;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.kyowon.repository.UserRepository;
import kr.co.kyowon.vo.User;

@RestController
@RequestMapping("/api")
public class UserRestController {

	@PersistenceUnit
	EntityManagerFactory emf;

	@Autowired
	public UserRepository userRepository;
	
	@GetMapping("/user/userList")
	public List<User> getAllUser() {
		return userRepository.findAll();
	}
	
	@PostMapping("/user/signIn")
	public ResponseEntity<User> saveUser(@RequestBody User user) {
		System.out.println("user 받아오는지? : " + user.getCustomerId());
		userRepository.save(user);
		return ResponseEntity.ok().body(user);
	}
	
	@GetMapping("/user/signupNumber")
	public long getSignupNumber() {
//		EntityManager em = emf.createEntityManager();
//		
//		TypedQuery<Long> signupNumber = em.createQuery("select count(*) from User u where u.signDate = sysdate", Long.class); 
//		signupNumber.
		LocalDateTime now = LocalDateTime.now();
		LocalDateTime timeStart = LocalDateTime.of(now.getYear(), now.getMonth(), now.getDayOfMonth(), 0, 0, 0);
		LocalDateTime timeEnd = LocalDateTime.of(now.getYear(), now.getMonth(), now.getDayOfMonth(), 23, 59, 59);
		System.out.println(timeStart);
		System.out.println(timeEnd);
		return userRepository.countBySignDateBetween(timeStart, timeEnd); 
	}
}
