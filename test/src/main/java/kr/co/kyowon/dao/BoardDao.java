package kr.co.kyowon.dao;

import java.time.LocalDateTime;
import java.util.Date;

import kr.co.kyowon.vo.Board;
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
	private LocalDateTime createDate;
	private LocalDateTime updateDate;
	private Long cnt;
	
	public Board toEntity() {
		Board build = Board.builder()
				.seq(seq)
				.title(title)
				.writer(writer)
				.content(content)
				.createDate(createDate)
				.updateDate(updateDate)
				.cnt(cnt)
				.build();
		return build;
	}
	
    @Builder
    public BoardDao(Long seq, String title, String writer, String content, LocalDateTime createDate, LocalDateTime updateDate, Long cnt) {
    	this.seq = seq;
    	this.title = title;
    	this.writer = writer;
    	this.content = content;
    	this.createDate = createDate;
    	this.updateDate = updateDate;
    	this.cnt = cnt;
    }
	
}
