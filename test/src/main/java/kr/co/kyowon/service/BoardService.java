package kr.co.kyowon.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import kr.co.kyowon.dao.BoardDao;
import kr.co.kyowon.repository.BoardRepository;
import kr.co.kyowon.vo.Board;

@Service
public class BoardService {

	private BoardRepository boardRepository;

	public BoardService(BoardRepository boardRepository) {
		this.boardRepository = boardRepository;
	}
	
	@Transactional
	public Long savePost(BoardDao boardDao) {
		return boardRepository.save(boardDao.toEntity()).getSeq();
	}
	
	// 게시물 목록 조회
	@Transactional
	public List<BoardDao> getBoardList() {
		List<Board> boardList = boardRepository.findAll();
		List<BoardDao> boardDaoList = new ArrayList<>();
		
		for(Board board : boardList) {
			BoardDao boardDao = BoardDao.builder()
					.seq(board.getSeq())
					.title(board.getTitle())
					.writer(board.getWriter())
					.content(board.getContent())
					.createDate(board.getCreateDate())
					.cnt(board.getCnt())
					.build();
			boardDaoList.add(boardDao);
		}
		
		return boardDaoList;
	}
	
	// 게시물 상세내역 조회
	@Transactional
	public BoardDao getBoardDetail(Long seq) {
		Board board = boardRepository.findById(seq).get();
		
		BoardDao boardDao = BoardDao.builder()
				.seq(board.getSeq())
				.title(board.getTitle())
				.writer(board.getWriter())
				.content(board.getContent())
				.createDate(board.getCreateDate())
				.cnt(board.getCnt())
				.build();
		
		return boardDao;
		
	}
	
}
