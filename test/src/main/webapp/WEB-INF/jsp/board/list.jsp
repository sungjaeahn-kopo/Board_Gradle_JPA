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

	ul {
		list-style : none;
		float : left;
		display : inline;
		margin-left : 550px;
	}	
	
	ul li {
		float : left;
	}
	
	ul li a {
		float : left;
		padding : 4px;
		margin-right : 3px;
		width : 15px;
		color : #000;
		font : bold 13px tahoma;
		border : 1px solid #eee;
		text-align : center;
		text-decoration: none;	
	}

	ul li a:hover, ul li a:focus {
		color : #fff;
		border : 1px solid #f40;
		background-color : #f40;
	}
	
	.tbl_data:hover {
		background-color : #AFC4E7 !important;
		color : #FFFFFF
	}
	
	.tbl_data>td {
		border-bottom : 1px solid #e5e5e5;
		margin : 5px;
		padding-left: 15px;
		padding-top: 5px;
	}
	
	.tbl_label>th {
		border-bottom : 1px solid #e5e5e5;
		padding-bottom: 10px;
	}
	
</style>
<body>
<div class="container" style="margin-top : 100px; margin-left : 100px;">
    <h3>Board List</h3>
    <br><br>
    <table>
    	<tr class="tbl_label">
    		<th>일련번호</th>
    		<th>제목</th>
    		<th>작성자</th>
    		<th>내용</th>
    		<th>작성일자</th>
    		<th>수정일자</th>
    		<th>조회수</th>
    	</tr>
	    <c:forEach var="item" items="${page.content}">
	    	<tr class="tbl_data">
		    	<td>
					<a href="/board/detail?seq=${item.seq}">
				    	${item.seq}
					</a>
		    	</td>
	    		<td style="width : 180px;">${item.title}</td>
		    	<td style="width : 180px;">${item.writer}</td>
		    	<td style="width : 280px;">${item.content}</td>
		    	<td style="width : 180px;">${item.createDate}</td>
		    	<c:choose>
		    		<c:when test="${item.createDate ne item.updateDate}">
		    			<td style="width : 180px;">${item.updateDate}</td>
		    		</c:when>
		    		<c:otherwise>
				    	<td></td>
		    		</c:otherwise>
		    	</c:choose>
		    	<td>${item.cnt}</td>
	    	</tr>
	    </c:forEach>
    </table>
    <br>
    <div style="float : right; width : 500px;">
    	<button style="button" onclick="location.href='/board/post'">글쓰기</button>
    </div>
</div>
<!-- 페이징 영역 시작 -->
<div class="text-xs-center">
	<ul class="pagination justify-content-center">
	 <!-- 이전 -->
<%-- 		<c:choose> --%>
<%-- 			<c:when test="${board.first}"></c:when> --%>
<%-- 			<c:otherwise> --%>
<!-- 				<li class="page-item"> -->
<%-- 					<a class="page-link" href="/board/list/?field=${param.field}&word=${param.word}&page=0">처음</a> --%>
<!-- 				</li> -->
<!-- 				<li class="page-item"> -->
<%-- 					<a class="page-link" href="/board/list/?field=${param.field}&word=${param.word}&page=${ulist.number-1}">&larr;</a> --%>
<!-- 				</li> -->
<%-- 			</c:otherwise> --%>
<%-- 		</c:choose> --%>
		 <!-- 페이지 그룹 -->
	 	<c:forEach begin="${start+1}" end="${end}" var="i">
	 		<c:choose>
	 			<c:when test="${page.pageable.pageNumber+1 == i}">
	 				<li class="page-item disabled">
	 					<a class="page-link" href="/?page=${i}">${i}</a>
 					</li>
				</c:when>
				<c:otherwise>
					<li class="page-item">
						<a class="page-link" href="/?page=${i}">${i}</a>
					</li>
				</c:otherwise>
			</c:choose>
		</c:forEach>
		 <!-- 다음 -->
<%-- 	 	<c:choose> --%>
<%-- 	 		<c:when test="${ulist.last}"></c:when> --%>
<%--  			<c:otherwise> --%>
<!--  				<li class="page-item "> -->
<%--  					<a class="page-link" href="/admin/userlist/?field=${param.field}&word=${param.word}&page=${ulist.number+1}">&rarr;</a> --%>
<!-- 				</li> -->
<!-- 				<li class="page-item "> -->
<%-- 					<a class="page-link" href="/admin/userlist/?field=${param.field}&word=${param.word}&page=${ulist.totalPages-1}">마지막</a> --%>
<!-- 				</li> -->
<%-- 			</c:otherwise> --%>
<%-- 		</c:choose> --%>
	</ul>
</div>
<!-- 페이징 영역 끝 -->
</body>
</html>