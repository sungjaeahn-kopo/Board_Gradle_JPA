package kr.co.kyowon.vo;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Table(name = "Board")
@Entity
@Builder
public class Board {

    @Id
    @GeneratedValue
    // primary key
    private Long seq;
    
    @Column(length = 20, nullable = false)
    private String title;

    @Column(length = 20, nullable = true)
    private String writer;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    // 211103 09:37 datatype : date => LocalDateTime
    // Entity가 생성되어 저장시 시간 자동저장
    @CreatedDate
    @Column(updatable = false, nullable=true, columnDefinition = "TIMESTAMP default CURRENT_TIMESTAMP")
    private LocalDateTime createDate;
 
    // 211103 09:37 datatype : date => LocalDateTime
    // 조회한 entity 값 변경시 시간 자동저장
    @LastModifiedDate
    @Column(nullable=true, columnDefinition = "TIMESTAMP default CURRENT_TIMESTAMP")
    private LocalDateTime updateDate;

    @Column(nullable=true, columnDefinition = "default 0")
    private Long cnt;
    
    

    @Builder
    public Board(Long seq, String title, String writer, String content, LocalDateTime createDate, LocalDateTime updateDate, Long cnt) {
    	this.seq = seq;
    	this.title = title;
    	this.writer = writer;
    	this.content = content;
    	this.createDate = createDate;
    	this.updateDate = updateDate;
    	this.cnt = cnt;
    }
    
}