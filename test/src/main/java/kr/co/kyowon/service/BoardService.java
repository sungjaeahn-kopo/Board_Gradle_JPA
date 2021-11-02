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
	
	/**
	 *  save()
	 * @param boardDao
	 * @return Long
	 * 
	 * 새로운 Entity가 들어오면 persist() 호출
	 * 				 아니면 merge() 호출
	 * merge :
	 * 	파라미터(entity)가 영속성 컨텍스트 1차 캐시에 있는지 확인
	 * => 없으면 select 쿼리로 조회
	 * => 조회되어 1차 캐시에 entity 저장되면 트랜잭션 커밋 시점에
	 * 	파라미터(entity)값과 1차 캐시(entity)값 비교해 다르면 update
	 *  								  다르지 않으면 insert
	 */
	
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
					.updateDate(board.getUpdateDate())
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
	
	// 게시물 수정
	@Transactional
	public BoardDao getBoardEdit(Long seq) {
		Board board = boardRepository.findById(seq).get();
		
		BoardDao boardDao = BoardDao.builder()
//				.seq(board.getSeq())
				.title(board.getTitle())
				.writer(board.getWriter())
				.content(board.getContent())
				.createDate(board.getCreateDate())
				.updateDate(board.getUpdateDate())
//				.cnt(board.getCnt())
				.build();
		
		return boardDao;
	}
	
	// 게시물 삭제
	@Transactional
	public void boardDelete(Long seq) {
		boardRepository.deleteById(seq);
	}
	
	
}
