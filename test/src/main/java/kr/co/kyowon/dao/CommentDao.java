package kr.co.kyowon.dao;

import java.time.LocalDateTime;
import java.util.Date;
import kr.co.kyowon.vo.Comment;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class CommentDao {

	private Long seq;
	private Long cSeq;
	private String writer;
	private String content;
	private LocalDateTime createDate;
	private LocalDateTime updateDate;
	
	public Comment toEntity() {
		Comment build = Comment.builder()
				.seq(seq)
				.cSeq(cSeq)
				.writer(writer)
				.content(content)
				.createDate(createDate)
				.updateDate(updateDate)
				.build();
		return build;
	}
	
    @Builder
    public CommentDao(Long seq, Long cSeq, String writer, String content, LocalDateTime createDate, LocalDateTime updateDate) {
    	this.seq = seq;
    	this.cSeq = cSeq;
    	this.writer = writer;
    	this.content = content;
    	this.createDate = createDate;
    	this.updateDate = updateDate;
    }
	
}
