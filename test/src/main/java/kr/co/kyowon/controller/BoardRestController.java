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
import kr.co.kyowon.vo.Board;

@RestController
@RequestMapping("/api")
public class BoardRestController {

	@Autowired
	public BoardRepository boardRepository;
	
	@GetMapping("/board")
	public List<Board> getAllBoard() {
		return boardRepository.findAll();
	}
	
	@PostMapping("/save")
	public ResponseEntity<Board> saveBoard(@RequestBody Board board) {
		System.out.println("board 받아오는지? : " + board.getContent());
		boardRepository.save(board);
		return ResponseEntity.ok().body(board);
	}
}