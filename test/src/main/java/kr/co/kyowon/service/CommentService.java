package kr.co.kyowon.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import kr.co.kyowon.dao.CommentDao;
import kr.co.kyowon.repository.CommentRepository;
import kr.co.kyowon.vo.Comment;

@Service
public class CommentService {

	private CommentRepository commentRepository;
	
	public CommentService(CommentRepository commentRepository) {
		this.commentRepository = commentRepository;
	}
	
	@Transactional
	public List<CommentDao> commentListService(Long seq) {
		System.out.println("===(commentListService)seq===" + seq);
		List<Comment> commentList = commentRepository.findAllComment(seq);
		List<CommentDao> commentDaoList = new ArrayList<>();
		
		for(Comment comment : commentList) {
			CommentDao commentDao = CommentDao.builder()
					.seq(comment.getSeq())
					.cSeq(comment.getCSeq())
					.writer(comment.getWriter())
					.content(comment.getContent())
					.createDate(comment.getCreateDate())
					.updateDate(comment.getUpdateDate())
					.build();
			commentDaoList.add(commentDao);
		}
		
		return commentDaoList;
	}
	
	
}
