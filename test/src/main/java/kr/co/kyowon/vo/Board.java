package kr.co.kyowon.vo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;

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
    private Long seq;
    
    @Column(length = 20, nullable = false)
    private String title;

    @Column(length = 20, nullable = true)
    private String writer;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @CreatedDate
    @Column(updatable = false, nullable=true, columnDefinition = "TIMESTAMP default CURRENT_TIMESTAMP")
    private Date createDate;

    @Column(insertable=false, nullable=false, columnDefinition = "bigint(20) default 0")                         
    private Long cnt;

    @Builder
    public Board(Long seq, String title, String writer, String content, Date createDate, Long cnt) {
    	this.seq = seq;
    	this.title = title;
    	this.writer = writer;
    	this.content = content;
    	this.createDate = createDate;
    	this.cnt = cnt;
    }
    
}