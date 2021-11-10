package kr.co.kyowon.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.kyowon.dao.BoardDao;
import kr.co.kyowon.service.BoardService;
import kr.co.kyowon.vo.Board;

@Controller
public class BoardController {

	@Autowired
	private BoardService boardService;
	
	@Autowired
	public BoardController(BoardService boardService) {
		this.boardService = boardService;
	}

	// 게시글 전체목록 조회 (작성자, 글내용 검색)
	@GetMapping("/")
	public String list(Model model,
			@PageableDefault(size=10, sort="seq", direction = Sort.Direction.DESC)
			Pageable pageable) {
		// board 객체의 정보를 page 단위별로 나누기위해 pageList 정의
		Page<Board> pageList = boardService.list(pageable);
		// 
//		List<BoardDao> boardList = boardService.getBoardList();
		int pageNum = pageList.getPageable().getPageNumber();
		int totalPages = pageList.getTotalPages();
		int pageBlock = 5;
		// 현재 페이지가 정중앙에 올 수 있도록 시작페이지 설정
		int startBlockPage = ((pageNum)/pageBlock)*pageBlock;
		System.out.println("시작 숫자 : " + startBlockPage);
		// 6, 7, 8, 9, 10
		int endBlockPage = startBlockPage+pageBlock;
		endBlockPage = totalPages<endBlockPage?totalPages:endBlockPage;
		
//		model.addAttribute("board", boardList);
		model.addAttribute("page", pageList);
		model.addAttribute("start", startBlockPage);
		model.addAttribute("end", endBlockPage);
		return "board/list";
	}

	// 게시글 작성
	@PostMapping("/board/post")
	public String selectAll(BoardDao boardDao) {
		boardService.savePost(boardDao);
		return "redirect:/";
	}
	
	// 게시글 작성전 url로 접근시 mapping
	@GetMapping("/board/post")
	public String updatePage() {
		return "home";
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
	
}
