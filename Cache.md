<h3>EHCache</h3>
 - 자주 사용되는 resource 존재시 리소스를 얻은 후 캐시 저장소에 만료시간과 함께 저장되고
사용자가 조회를 요청할떄마다 만료시간 이전까지 캐시 저장소에 있는 리소스 사용

 - 조회 성능 향상 => 일반적으로 동일한 리소스에 대해 빈번한 Select로 발생되는 DBMS 과부하를 줄이기 위함
 <br>
 
 <h3>Spring Cache</h3>
 Spring에서 캐시 추상화(Cache Abstraction)를 통한 캐싱 기능을 지원하고 있음
 
  Cache Abstraction
  : 사용자는 캐시구현에 신경쓰지 않고 public Interface로 쉽게 캐싱기능을 사용가능
  => 비지니스 로직에서 EhCache, redis 등 캐싱 InfraStructure에 의존하지 않고 추상하된 인터페이스로 캐싱가능
  
  <h3>
