<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시글 리스트 페이지</title>
</head>
<style>
	td {
		height : 30px;
	}

</style>
<body>
<div class="container" style="margin : 100px;">
    <h3>Board List</h3>
    <br><br>
    <table border="1">
    	<tr>
    		<th>일련번호</th>
    		<th>제목</th>
    		<th>작성자</th>
    		<th>내용</th>
    		<th>작성일자</th>
    		<th>수정일자</th>
    		<th>조회수</th>
    	</tr>
	    <c:forEach var="item" items="${board}">
	    	<tr>
		    	<td style="text-align : center;">
					<a href="/board/detail?seq=${item.seq}">
				    	${item.seq}
					</a>
		    	</td>
	    		<td>${item.title}</td>
		    	<td>${item.writer}</td>
		    	<td>${item.content}</td>
		    	<td>${item.createDate}</td>
		    	<c:choose>
		    		<c:when test="${item.createDate ne item.updateDate}">
		    			<td>${item.updateDate}</td>
		    		</c:when>
		    		<c:otherwise>
				    	<td></td>
		    		</c:otherwise>
		    	</c:choose>
		    	<td>${item.cnt}</td>
<%-- 		    	<c:if test="${item.createDate ne item.updateDate}"> --%>
<%-- 			    	<td>${item.updateDate}</td> --%>
<%-- 		    	</c:if> --%>
<%-- 		    	<c:if test="${item.createDate eq item.updateDate}"> --%>
<!-- 			    	<td></td> -->
<%-- 		    	</c:if> --%>
<%-- 	    		<td>${item.cnt}</td> --%>
	    	</tr>
	    </c:forEach>
    </table>
    <br>
    <div style="float : right; width : 450px;">
    	<button style="button" onclick="location.href='/board/post'">글쓰기</button>
    </div>
</div>

</body>
</html>