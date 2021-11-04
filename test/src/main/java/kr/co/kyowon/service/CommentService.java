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
			System.out.println("출력이요1 : " + comment.getSeq());
			System.out.println("출력이요2 : " + comment.getCSeq());
			System.out.println("출력이요3 : " + comment.getWriter());
			System.out.println("출력이요4 : " + comment.getContent());
			commentDaoList.add(commentDao);
		}
		
		return commentDaoList;
	}
	
	
}
