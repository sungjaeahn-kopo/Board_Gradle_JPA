package kr.co.kyowon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.kyowon.dao.CommentDao;
import kr.co.kyowon.service.CommentService;

@Controller
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	@GetMapping("/comment/comment")
	public String commentList(@RequestParam String seq ,Model model) {
		System.out.println("지나가나요?");
		System.out.println("===Long.valueOf(seq)===" + Long.valueOf(seq));
		List<CommentDao> commentDaoList = commentService.commentListService(Long.valueOf(seq));
		model.addAttribute("comment",commentDaoList);
		
		return "comment/comment";
	}
	
}
