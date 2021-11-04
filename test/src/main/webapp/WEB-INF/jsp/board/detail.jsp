<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시글 상세 페이지</title>
</head>
<body>
<div class="container" style="margin : 50px; width : 300px;">
    <div class="card" style="border-style: solid; border-width : 1px; border-color : gray; border-width : 5px; width: 300px; text-align : center;">
        <div class="card-body" style="margin: 30px;">
            <h5 class="card-title">${board.writer}</h5>
            <p class="card-text"><small class="text-muted">${board.createDate}</small></p>
            <p class="card-text">${board.content}</p>
            <p class="card-text">조회수 : <span style="color : blue; font-weight: 800;">${board.cnt}</span></p>
        </div>
    </div>
    <br>
    <div class="row mt-3">
        <div class="col-auto mr-auto"></div>
        <div class="col-auto" style="float: left;">
            <a class="btn btn-info" href="/board/edit?seq=${board.seq}" role="button">수정</a>
        </div>
        <div class="col-auto" style="float: right;">
            <form id="delete-form" action="/board/delete?seq=${board.seq}" method="post">
                <input type="hidden" name="_method" value="delete"/>
                <button id="delete-btn" type="submit" class="btn btn-danger">삭제</button>
            </form>
        </div>
    </div>
</div>
<div class="container">
	<label for="content">comment</label>
	<form name="commentInsertForm">
		<div class="input-group">
			<input type="hidden" name="seq" value=""/>
			<input type="text" class="form-control" id="content" name="content" placeholder="내용을 입력하세요."/>
			<span class="input-group-btn">
				<button class="btn btn-default" type="button" name="commentInsertBtn">등록</button>
			</span>
		</div>
	</form>
</div>
<div class="container">
	<div class="commentList"></div>
</div>
<jsp:include page="/WEB-INF/jsp/comment/comment.jsp"/>
</body>
</html>