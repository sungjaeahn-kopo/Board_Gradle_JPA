<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시글 수정 페이지</title>
</head>
<body>

<div class="container">
    <form action="/board/edit?seq=${board.seq}" method="post">
        <input type="hidden" name="_method" value="put"/>
        <input type="hidden" name="id" value="${board.seq}"/>
        <div class="form-group row">
            <label for="inputTitle" class="col-sm-2 col-form-label"><strong>제목</strong></label>
            <div class="col-sm-10">
                <input type="text" name="title" class="form-control" id="inputTitle" value="${board.title}">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputAuthor" class="col-sm-2 col-form-label"><strong>작성자</strong></label>
            <div class="col-sm-10">
                <input style="font-weight: 700;" type="text" name="author" class="form-control" id="inputAuthor" value="${board.writer}">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputContent" class="col-sm-2 col-form-label"><strong>내용</strong></label>
            <div class="col-sm-10">
                <textarea type="text" name="content" class="form-control" id="inputContent">${board.content}</textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-auto mr-auto"></div>
            <div class="col-auto">
                <input class="btn btn-primary" type="submit" role="button" value="수정">
            </div>
        </div>
    </form>
</div>

</body>
</html>