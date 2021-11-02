<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>First Project</title>
</head>
<body>
	<form action="/board/post" method="post">
        <div class="form-group row">
            <label for="inputTitle" class="col-sm-2 col-form-label"><strong>제목</strong></label>
            <div class="col-sm-10">
                <input type="text" name="title" class="form-control" id="inputTitle">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputAuthor" class="col-sm-2 col-form-label"><strong>작성자</strong></label>
            <div class="col-sm-10">
                <input type="text" name="writer" class="form-control" id="inputAuthor">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputContent" class="col-sm-2 col-form-label"><strong>내용</strong></label>
            <div class="col-sm-10">
                <textarea type="text" name="content" class="form-control" id="inputContent"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-auto mr-auto"></div>
            <div class="col-auto">
                <input class="btn btn-primary" type="submit" role="button" value="글쓰기">
            </div>
        </div>
      </form>
      <br><br>
      <a href="/board/post">글 작성</a>
</body>
</html>