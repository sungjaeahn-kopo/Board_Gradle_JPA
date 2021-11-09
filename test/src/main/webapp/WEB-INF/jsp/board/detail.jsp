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
<div class="container" style="margin : 50px; width : 300px; ">
	<h3>Board Detail</h3><br>
    <div class="card" style="border-style: solid; background-color : RGBA(246,187,67,0.2); border-width : 0.5px; border-color : RGBA(246,187,67,1); border-width : 5px; width: 300px; text-align : center;">
        <div class="card-body" style="margin: 30px;">
            <h5 class="card-title">${board.writer}</h5>
            <p class="card-text"><small class="text-muted">${board.createDate}</small></p>
            <p class="card-text">${board.content}</p>
            <p class="card-text">조회수 : <span style="color : blue; font-weight: 800;">${board.cnt}</span></p>
        </div>
    </div>
    <br>
    <div class="row mt-3" style="margin-left : 25px;">
        <div class="col-auto" style="float: left;">
            <button class="btn btn-info" onclick="location.href='/board/edit?seq=${board.seq}'" style="button">수정하기&nbsp;</button>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div class="col-auto mr-auto" style="float: left;">
            <button class="btn btn-info" onclick="location.href='/'" style="button">목록으로&nbsp;</button>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div class="col-auto" style="float: left;">
            <form id="delete-form" action="/board/delete?seq=${board.seq}" method="post">
                <input type="hidden" name="_method" value="delete"/>
                <button id="delete-btn" type="submit" class="btn btn-danger">삭제하기</button>
            </form>
        </div>
    </div>
</div>

<div class="container">
	<div class="commentList">
		<jsp:include page="/comment/comment"></jsp:include>
	</div>
</div>

</body>
</html>