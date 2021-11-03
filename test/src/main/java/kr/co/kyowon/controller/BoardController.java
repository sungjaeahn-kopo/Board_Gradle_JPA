package kr.co.kyowon.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.kyowon.dao.BoardDao;
import kr.co.kyowon.repository.BoardRepository;
import kr.co.kyowon.service.BoardService;
import kr.co.kyowon.vo.Board;

@Controller
public class BoardController {

	@Autowired
	private BoardService boardService;
	
	public BoardController(BoardService boardService) {
		this.boardService = boardService;
	}

	@GetMapping("/board/list")
	public String list(Model model, @PageableDefault(size=10, sort="seq") Pageable pageable) {
		List<BoardDao> boardDaoList = boardService.getBoardList();
//		Page<Board> boardDaoList = boardService.list(pageable);
		model.addAttribute("board", boardDaoList);
		return "board/list";
	}
	
	@PostMapping("/board/post")
	public String selectAll(BoardDao boardDao) {
		boardService.savePost(boardDao);
		return "board/post";
	}
	
	@GetMapping("/board/edit")
	public String edit(@RequestParam Long seq, Model model) {
		BoardDao boardDao = boardService.getBoardDetail(seq);
		model.addAttribute("board", boardDao);
		return "board/edit";
	}
	
	@PostMapping("/board/edit")
	public String update(BoardDao boardDao) {
		boardService.savePost(boardDao);
		return "board/list";
	}
	
	@PostMapping("/board/delete")
	public String delete(@RequestParam Long seq) {
		boardService.boardDelete(seq);
		return "board/list";
	}
	
//	@GetMapping("/board/list")
//	public Page<Board> index(Pageable pageable) {
//		Page<Board> page = boardService.list(pageable);
//		return page;
//	}
}
