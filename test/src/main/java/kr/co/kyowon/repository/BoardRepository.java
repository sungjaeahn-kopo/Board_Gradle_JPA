package kr.co.kyowon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import kr.co.kyowon.vo.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

	@Modifying
	@Query("UPDATE Board set cnt=cnt+1 where seq=:seq")
	public void updateView(@Param("seq") Long seq);
}
