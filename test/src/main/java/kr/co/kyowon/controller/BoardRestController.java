package kr.co.kyowon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	public void saveBoard(@RequestBody Board board) {
		boardRepository.save(board);
	}
}
