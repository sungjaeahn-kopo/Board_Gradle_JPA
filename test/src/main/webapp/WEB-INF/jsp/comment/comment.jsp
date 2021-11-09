<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시글 상세 페이지</title>
</head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<body>
<!-- 댓글 -->
<div class="container" style="margin : 50px;">
	<label for="content">Comments</label>
	<form id="commentForm" name="commentForm">
		<div class="input-group">
			<input type="hidden" name="seq" value="${seq}"/><br>
			<input type="TEXT" name="writer" placeholder="작성자를 입력하세요"/><br><br>
			<textarea style="width: 800px; height: 150px;" rows="3" cols="30" id="content" name="content" placeholder="댓글을 입력하세요"></textarea><br>
			<span class="input-group-btn">
			<br>
				<button type="button" id="com_btn" name="com_btn">등록</button>
<!-- 				<a href="/saveComment" type="button" onClick="fn_comment()" class="btn pull-right btn-success">등록</a> -->
			</span>
		</div>
	</form>
</div>
<style>

	th{
		width : 160px;
	}
	
	td {
		text-align : center;
	}
	
</style>





<div class="container02">
		<div id="commentList" class="commentList" style="margin : 50px;">
			
			<table border="1">
	    	<tr>
	    		<th>게시글일련번호</th>
	    		<th>댓글일련번호</th>
	    		<th>작성자</th>
	    		<th>내용</th>
	    		<th>작성일자</th>
<!-- 	    		<th>수정일자</th> -->
	    	</tr>
			<c:forEach var="item" items="${comment}">
		    	<tr id="com">
			    	<td>${item.seq}</td>
		    		<td>${item.CSeq}</td>
			    	<td>${item.writer}</td>
			    	<td>${item.content}</td>
			    	<td>${item.createDate}</td>
<%-- 			    	<c:choose> --%>
<%-- 			    		<c:when test="${item.createDate ne item.updateDate}"> --%>
<%-- 			    			<td>${item.updateDate}</td> --%>
<%-- 			    		</c:when> --%>
<%-- 			    		<c:otherwise> --%>
<!-- 					    	<td></td> -->
<%-- 			    		</c:otherwise> --%>
<%-- 			    	</c:choose> --%>
		    	</tr>
		    </c:forEach>
		</table>
		</div>
</div>
</body>
<script>

	$("#com_btn").click(function(){
		$.ajax({
			type:"POST",
			url:"/saveComment",
			data:$("#commentForm").serialize(),
			success:function(data) {
				location.reload();
				if(data=="success") {
// 					commentList();
// 					$("#container02").load("comment/comment" "#container02");
					$("#com").load('comment.jsp');
					$("#comment").val("");
				}
			}
		});
	})
	
// 	// 초기 페이지 로딩시 댓글 불러오기
// 	$(function() {
// 		commentList();
// 	});

	// 댓글 목록 불러오기
// 	function commentList(result){
// 		$.ajax({
// 			type : 'GET',
// 			url : '/comment/comment',
// 			datatype : "json",
// 			data : $("#com").serialize(),
// 			success : function(data){
// 				var html="";
// 				var cCnt = data.length;
// 				let obj = JSON.parse(result);
// 				console.log(obj);
				
// 				if(data.length > 0){
	                
// 	                for(i=0; i<data.length; i++){
// 	                    html += "<tr id='com'>";
// 	                }
	                
// 	            } else {
	                
// 	                html += "<div>";
// 	                html += "<div><table class='table'><h6><strong>등록된 댓글이 없습니다.</strong></h6>";
// 	                html += "</table></div>";
// 	                html += "</div>";
	                
// 	            }
	            
// // 	            $("#cCnt").html(cCnt);
// 	            $("#commentList").html(html);
	            
// 	        },
// 	        error:function(request,status,error){
	            
// 	       }
			
// 		});
		
// 	}
</script>
</html>