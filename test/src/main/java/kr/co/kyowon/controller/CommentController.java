package kr.co.kyowon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.kyowon.dao.CommentDao;
import kr.co.kyowon.service.CommentService;

@Controller
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	@GetMapping("/comment/comment")
	public String commentList(@RequestParam String seq ,Model model) {
		List<CommentDao> commentDaoList = commentService.commentListService(Long.valueOf(seq));
		model.addAttribute("comment",commentDaoList);
		model.addAttribute("seq", seq);
		return "comment/comment";
	}
	
	@PostMapping("/saveComment")
	public String saveComment(CommentDao commentDao, Model model) {
		System.out.println("controller가 잡는지?");
		// 받아온 파라미터 Dao 객체에 저장
		// 댓글 등록
		commentService.saveComment(commentDao);
		System.out.println("댓등록, service 지나는지?");
		// 등록한 댓글 포함해 list에 저장
		List<CommentDao> list = commentService.commentListService(commentDao.getSeq());
		System.out.println("list등록, service 지나는지?");
		model.addAttribute("comment", list);
		return "/comment/comment";
	}
	
}
