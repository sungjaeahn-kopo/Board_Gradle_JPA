<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>First Project</title>
<style>
</style>
</head>
<body>
	<div class="container" style="margin:100px; align:center; position : absolute; top : 15%; left : 30%;">
	<h3>Posting Board</h3><br>
	<div style="border-style : solid; border-color : RGBA(246,187,67,1); border-width: 1px; padding : 20px; width : 300px; background-color : RGBA(246, 187, 67,0.2);">
		<form action="/board/post" method="post">
	        <div class="form-group row">
	            <label for="inputTitle" class="col-sm-2 col-form-label"><strong>제목</strong></label>
	            <div class="col-sm-10">
	                <input type="text" name="title" class="form-control" id="inputTitle">
	            </div>
	        </div>
	        <br>
	        <div class="form-group row">
	            <label for="inputAuthor" class="col-sm-2 col-form-label"><strong>작성자</strong></label>
	            <div class="col-sm-10">
	                <input type="text" name="writer" class="form-control" id="inputAuthor">
	            </div>
	        </div>
	        <br>
	        <div class="form-group row">
	            <label for="inputContent" class="col-sm-2 col-form-label"><strong>내용</strong></label>
	            <div class="col-sm-10">
	                <textarea type="text" name="content" class="form-control" id="inputContent"></textarea>
	            </div>
	        </div>
	        <br>
	        <input type="hidden" name = "cnt" value="0">
	        <div class="row">
	            <div class="col-auto mr-auto"></div>
	            <div class="col-auto">
	                <button class="btn btn-primary" style="button">글쓰기</button>
	            </div>
	        </div>
	      </form>
	</div>
<!-- 	      <br><br> -->
<!-- 	      <a href="/board/post">글 작성</a> -->
	</div>
</body>
</html>