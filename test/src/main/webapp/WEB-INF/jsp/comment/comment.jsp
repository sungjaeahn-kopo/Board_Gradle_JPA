<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시글 상세 페이지</title>
</head>
<body>
<!-- 댓글 -->
<div class="container" style="margin : 50px;">
	<label for="content">Comments</label>
	<form name="commentInsertForm">
		<div class="input-group">
			<input type="hidden" name="seq" value="${board.seq}"/>
			<input type="text" class="form-control" id="content" name="content" placeholder="내용을 입력하세요."/>
			<span class="input-group-btn">
				<button class="btn btn-default" type="button" name="commentInsertBtn">등록</button>
			</span>
		</div>
	</form>
</div>
<%-- <c:import url="/comment/comment"> --%>
<%-- 	<c:param name="seq" value="${board.seq}"/> --%>
<%-- </c:import> --%>
<style>

	th{
		width : 160px;
	}
	
	td {
		text-align : center;
	}
	
</style>
<div class="container">
	<div class="commentList" style="margin : 50px;">
		
		<table border="1">
    	<tr>
    		<th>댓글일련번호</th>
    		<th>게시글일련번호</th>
    		<th>작성자</th>
    		<th>작성일자</th>
    		<th>수정일자</th>
    	</tr>
		<c:forEach var="item" items="${comment}">
	    	<tr>
		    	<td>${item.seq}</td>
	    		<td>${item.CSeq}</td>
		    	<td>${item.writer}</td>
		    	<td>${item.createDate}</td>
		    	<c:choose>
		    		<c:when test="${item.createDate ne item.updateDate}">
		    			<td>${item.updateDate}</td>
		    		</c:when>
		    		<c:otherwise>
				    	<td></td>
		    		</c:otherwise>
		    	</c:choose>
	    	</tr>
	    </c:forEach>
	</table>
	</div>
</div>
</body>
<script>

	// 초기 페이지 로딩시 댓글 불러오기
	$(function() {
		commentList();
	});

	// 댓글 목록 불러오기
	function commentList(){
		$.ajax({
			type : 'GET',
			url : '/comment/comment',
			datatype : "json",
			data : $("#commentList").serialize(),
			success : function(data){
				var html="";
				var cCnt = data.length;
				
				if(data.length > 0){
	                
	                for(i=0; i<data.length; i++){
	                    html += "<div>";
	                    html += "<div><table class='table'><h6><strong>"+data[i].writer+"</strong></h6>";
	                    html += data[i].comment + "<tr><td></td></tr>";
	                    html += "</table></div>";
	                    html += "</div>";
	                }
	                
	            } else {
	                
	                html += "<div>";
	                html += "<div><table class='table'><h6><strong>등록된 댓글이 없습니다.</strong></h6>";
	                html += "</table></div>";
	                html += "</div>";
	                
	            }
	            
// 	            $("#cCnt").html(cCnt);
	            $("#commentList").html(html);
	            
	        },
	        error:function(request,status,error){
	            
	       }
			
		});
		
	}
</script>
</html>