package kr.co.kyowon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import kr.co.kyowon.vo.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

	@Query("SELECT C FROM Comment C WHERE C.seq=:seq")
	List<Comment> findAllComment(@Param("seq") Long seq);

	
}
