<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시글 상세 페이지</title>
</head>
<body>
<div class="container">
    <div class="card" style="border-style: solid; border-width : 1px; border-color : gray; border-width : 5px;">
        <div class="card-body">
            <h5 class="card-title">${board.writer}</h5>
            <p class="card-text"><small class="text-muted">${board.createDate}</small></p>
            <p class="card-text">${board.content}</p>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-auto mr-auto"></div>
        <div class="col-auto">
            <a class="btn btn-info" href="/board/edit?seq=${board.seq}" role="button">수정</a>
        </div>
        <div class="col-auto">
            <form id="delete-form" action="/board/delete?seq=${board.seq}" method="post">
                <input type="hidden" name="_method" value="delete"/>
                <button id="delete-btn" type="submit" class="btn btn-danger">삭제</button>
            </form>
        </div>
    </div>
</div>
</body>
</html>