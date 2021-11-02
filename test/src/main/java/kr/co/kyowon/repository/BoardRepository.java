package kr.co.kyowon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.kyowon.vo.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
