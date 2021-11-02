package kr.co.kyowon.dao;

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
	private Date createDate;
	private Date updateDate;
	private Long cnt;
	
	public Board toEntity() {
		Board build = Board.builder()
				.seq(seq)
				.title(title)
				.writer(writer)
				.content(content)
				.createDate(createDate)
				.updateDate(createDate)
				.cnt(cnt)
				.build();
		return build;
	}
	
    @Builder
    public BoardDao(Long seq, String title, String writer, String content, Date createDate, Date updateDate, Long cnt) {
    	this.seq = seq;
    	this.title = title;
    	this.writer = writer;
    	this.content = content;
    	this.createDate = createDate;
    	this.updateDate = createDate;
    	this.cnt = cnt;
    }
	
}
