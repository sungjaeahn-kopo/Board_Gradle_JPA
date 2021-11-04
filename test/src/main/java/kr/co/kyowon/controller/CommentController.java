package kr.co.kyowon.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.kyowon.dao.CommentDao;
import kr.co.kyowon.service.CommentService;

@Controller
public class CommentController {

	private CommentService commentService;
	
	@RequestMapping("/comment/comment")
	public String commentList(@RequestParam Long seq ,Model model) {
		System.out.println("지나가나요?");
		List<CommentDao> commentDaoList = commentService.commentListService(seq);
		model.addAttribute("comment",commentDaoList);
		
		return "comment/comment";
	}
	
}
