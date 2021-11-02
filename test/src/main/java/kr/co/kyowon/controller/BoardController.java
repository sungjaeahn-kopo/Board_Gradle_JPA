package kr.co.kyowon.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import kr.co.kyowon.dao.BoardDao;
import kr.co.kyowon.service.BoardService;

@Controller
public class BoardController {

	@Autowired
	private BoardService boardService;
	
	public BoardController(BoardService boardService) {
		this.boardService = boardService;
	}

	@GetMapping("/board/list")
	public String list(Model model) {
		List<BoardDao> boardDaoList = boardService.getBoardList();
		model.addAttribute("board", boardDaoList);
		return "board/list";
	}
	
	@PostMapping("/board/post")
	public String selectAll(BoardDao boardDao) {
		boardService.savePost(boardDao);
		return "board/post";
	}
}
