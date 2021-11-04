package kr.co.kyowon.vo;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
@Table(name = "Comment")
@Entity
@Builder
public class Comment {

	@Id
    @GeneratedValue
    // primary key
    private Long cSeq;
    
	// 답글 달 게시판 seq
    @Column(length = 20, nullable = false)
    private Long seq;

    @Column(length = 20, nullable = true)
    private String writer;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    // Entity가 생성되어 저장시 시간 자동저장
    @CreatedDate
    @Column(updatable = false, nullable=true, columnDefinition = "TIMESTAMP default CURRENT_TIMESTAMP")
    private LocalDateTime createDate;
 
    // 조회한 entity 값 변경시 시간 자동저장
    @LastModifiedDate
    @Column(nullable=true, columnDefinition = "TIMESTAMP default CURRENT_TIMESTAMP")
    private LocalDateTime updateDate;
    

    @Builder
    public Comment(Long cSeq, Long seq, String writer, String content, LocalDateTime createDate, LocalDateTime updateDate) {
    	this.cSeq = cSeq;
    	this.seq = seq;
    	this.writer = writer;
    	this.content = content;
    	this.createDate = createDate;
    	this.updateDate = updateDate;
    }
	
	
}
