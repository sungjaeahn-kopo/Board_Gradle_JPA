<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>board</title>
</head>
<body>

<div class="container">
    hello
    <table border="1">
    	<tr>
    		<th>일련번호</th>
    		<th>제목</th>
    		<th>작성자</th>
    		<th>내용</th>
    		<th>작성일자</th>
    		<th>숫자</th>
    	</tr>
	    <c:forEach var="item" items="${board}">
	    	<tr>
		    	<td>
					<a href="/board/detail?seq=${item.seq}">
				    	${item.seq}
					</a>
		    	</td>
	    		<td>${item.title}</td>
		    	<td>${item.writer}</td>
		    	<td>${item.content}</td>
		    	<td>${item.createDate}</td>
		    	<td>${item.cnt}</td>
	    	</tr>
	    </c:forEach>
    </table>
    
</div>

</body>
</html>