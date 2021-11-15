<h3>String vs StringBuilder vs StringBuffer</h3>
1. String vs StringBuilder/StringBuffer
  - String은 불변의 속성을 갖기 때문에 변하지 않는 문자열을 자주 읽어들이는 경우 좋은 성능을 기대할 수 있음<br>
  하지만 문자열 추가, 수정, 삭제 등 연산이 빈번하게 발생하는 알고리즘에 사용할 경우 Heap 메모리에 많은 가비지가 생겨 성능저하 발생<br>
  - StringBuilder/StringBuffer는 가변성을 가지므로 .append(), .delete() 등 API를 이용해 동일 객체내에서 문자열 변경가능<br><br>
  
2. StringBuffer
  - 동기화 키워드를 지원해 멀티쓰레드 환경에서 안전함 (String도 마찬가지)

3. StringBuilder
   - 동기화를 지원하지 않으므로 멀티쓰레드 환경에서 적합하지 않지만 단일쓰레드에서의 성능은 StringBuffer보다 뛰어남
  
