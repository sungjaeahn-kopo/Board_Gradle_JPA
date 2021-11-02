package kr.co.kyowon.mapper;

import java.util.List;

import kr.co.kyowon.vo.Board;

public interface BoardMapper {
	
	// 게시판 조회
	public List<Board> selectAll() throws Exception;
	
}
