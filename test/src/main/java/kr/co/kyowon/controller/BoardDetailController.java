package kr.co.kyowon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.kyowon.dao.BoardDao;
import kr.co.kyowon.service.BoardService;

@Controller
public class BoardDetailController {

	@Autowired
	private BoardService boardService;

	public BoardDetailController(BoardService boardDetailService) {
		this.boardService = boardDetailService;
	}
	
	@GetMapping("/board/detail")
	public String detail(Model model, @RequestParam Long seq) {
		BoardDao boardDaoList = boardService.getBoardDetail(seq);
		model.addAttribute("board", boardDaoList);
		return "board/detail";
	}
	
}
