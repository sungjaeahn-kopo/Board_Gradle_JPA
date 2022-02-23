package kr.co.kyowon.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import kr.co.kyowon.vo.Board;
import kr.co.kyowon.vo.User;

public interface UserRepository extends JpaRepository<User, Long> {

//	@Modifying
//	@Query("UPDATE User set cnt=cnt+1 where seq=:seq")
//	public void updateView(@Param("seq") Long seq);

	// 회원목록 + 검색
	Page<User> findAll(Pageable pageable);
//	Page<Board> findByWriternameContaining(String writer, Pageable pageable);
//	Page<Board> findByContentContaining(String content, Pageable pageable);
	
}
