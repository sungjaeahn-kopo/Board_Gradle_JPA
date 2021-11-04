package kr.co.kyowon.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.kyowon.dao.BoardDao;
import kr.co.kyowon.service.BoardService;

@Controller
public class BoardController {

	@Autowired
	private BoardService boardService;
	
	@Autowired
	
	public BoardController(BoardService boardService) {
		this.boardService = boardService;
	}

	// 게시글 전체목록 조회
	@GetMapping("/")
	public String list(Model model, @PageableDefault(size=10, sort="seq") Pageable pageable) {
		List<BoardDao> boardDaoList = boardService.getBoardList();
//		Page<Board> boardDaoList = boardService.list(pageable);
		model.addAttribute("board", boardDaoList);
		model.addAttribute("currentPage", boardDaoList);
		model.addAttribute("listSize", boardDaoList);
		model.addAttribute("pageSize", boardDaoList);
		model.addAttribute("totalPage", boardDaoList);
		return "board/list";
	}
	
	// 게시글 작성
	@PostMapping("/board/post")
	public String selectAll(BoardDao boardDao) {
		boardService.savePost(boardDao);
		return "board/post";
	}
	
	// 게시글 상세조회
	@GetMapping("/board/detail")
	public String detail(Model model, @RequestParam Long seq) {
		boardService.updateView(seq);
		BoardDao boardDaoList = boardService.getBoardDetail(seq);
		model.addAttribute("board", boardDaoList);
		return "board/detail";
	}
	
	// 게시글 수정_1 (GetMapping(페이지 요청시))
	@GetMapping("/board/edit")
	public String edit(@RequestParam Long seq, Model model) {
		// 시퀀스 번호로 조회된 상세정보를 BoardDao 객체에 저장
		BoardDao boardDao = boardService.getBoardDetail(seq);
		// jsp에 수정할 정보(BoardDao)를 보내기 위해 Model 객체 사용
		model.addAttribute("board", boardDao);
		return "board/edit";
	}
	
	// 게시글 수정_2 (PostMapping(Form tag 정보 요청시))
	@PostMapping("/board/edit")
	public String update(BoardDao boardDao) {
		// 수정 내용을 update후 list 페이지로 redirect
		// board/list로 보낼시 비어있는 리스트 출력
		boardService.savePost(boardDao);
		return "redirect:/";
	}
	
	// 게시글 삭제
	@PostMapping("/board/delete")
	// jsp단에서 파라미터를 가져온(@RequestParam) 시퀀스로 게시글 삭제
	public String delete(@RequestParam Long seq) {
		boardService.boardDelete(seq);
		return "redirect:/";
	}
	
//	@GetMapping("/board/list")
//	public Page<Board> index(Pageable pageable) {
//		Page<Board> page = boardService.list(pageable);
//		return page;
//	}
}
