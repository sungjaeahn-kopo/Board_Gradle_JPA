<h3>< E > List< E ></h3>
  
  1. 메소드 정의<br>
@Override<br>
  public < E > List< E > selectList(String statement) {<br>
    return this.sqlSessionProxy.selectList(statement);<br>
  }
