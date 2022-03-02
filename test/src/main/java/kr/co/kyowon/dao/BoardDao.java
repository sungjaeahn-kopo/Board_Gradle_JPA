package kr.co.kyowon.dao;

import java.time.LocalDateTime;
import java.util.Date;

import kr.co.kyowon.vo.Board;
import kr.co.kyowon.vo.User;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class BoardDao {

	private Long seq;
	private String title;
	private String writer;
	private String content;
	private User user;
	private LocalDateTime createDate;
	private LocalDateTime updateDate;
	private Long cnt;
	
	public Board toEntity() {
		Board build = Board.builder()
				.seq(seq)
				.title(title)
				.writer(writer)
				.content(content)
				.user(user)
				.createDate(createDate)
				.updateDate(updateDate)
				.cnt(cnt)
				.build();
		return build;
	}
	
    @Builder
    public BoardDao(Long seq, String title, String writer, String content, User user,LocalDateTime createDate, LocalDateTime updateDate, Long cnt) {
    	this.seq = seq;
    	this.title = title;
    	this.writer = writer;
    	this.content = content;
    	this.user = user;
    	this.createDate = createDate;
    	this.updateDate = updateDate;
    	this.cnt = cnt;
    }
	
}
