package kr.co.kyowon.vo;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
@Table(name = "User")
@Entity
@Builder
public class User {

    @Id
    @GeneratedValue
    // primary key
    private Long customerNo;
    
    @Column(length = 20, nullable = false)
    private String customerId;

    @Column(length = 20, nullable = false)
    private String customerName;

    @Column(length = 20, nullable = false)
    private String password;

    // 211103 09:37 datatype : date => LocalDateTime
    // Entity가 생성되어 저장시 시간 자동저장
//    @CreatedDate
//    @Column(updatable = false, nullable=true, columnDefinition = "TIMESTAMP default CURRENT_TIMESTAMP")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    @CreationTimestamp
    private LocalDateTime signDate;
 
    // 211103 09:37 datatype : date => LocalDateTime
    // 조회한 entity 값 변경시 시간 자동저장
//    @LastModifiedDate
//    @Column(nullable=true, columnDefinition = "TIMESTAMP default CURRENT_TIMESTAMP")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    @UpdateTimestamp
    private LocalDateTime updateDate;

//    @Column(nullable=true)
//    @ColumnDefault("0")
//    private Long cnt;
    
    @Builder
    public User(Long customerNo, String customerId, String customerName, String password, LocalDateTime signDate, LocalDateTime updateDate) {
    	this.customerNo = customerNo;
    	this.customerId = customerId;
    	this.customerName = customerName;
    	this.password = password;
    	this.signDate = signDate;
    	this.updateDate = updateDate;
    }
    
}