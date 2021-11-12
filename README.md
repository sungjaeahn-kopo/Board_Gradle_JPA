# Board_Gradle_JPA

2021.11.11

<h3>Builder 패턴을 왜 사용하는가?</h3>

* 생성자의 단점

   선택적 매개변수가 많을 경우 대응이 어려움
   
   코드리뷰시 값의 의미를 파악하기 어려움
   
   동일한 타입의 매개변수가 연속으로 존재하면 버그 발생 가능성 높아짐
   
   매개변수의 순서가 바뀌면 컴파일러가 에러를 잡지 못하고 런타임 에러 발생 


* 자바빈즈 패턴의 단점

   설정해야할 매개변수가 많으면 Setter 메소드 호출을 그만큼 많이 해야함
    
      => 객체생성전까지 일관성이 무너진 상태
      
      => 런타임시 에러 발생 가능성

      => 디버깅 어려워짐
      
    
 Builder Pattern
 
    점층적 생성자 패턴의 안정성 + 자바빈즈 패턴의 가독성
    
    client가 필요한 객체를 직접 만들지 않고 필수 매개변수만으로 생성자 호출하여 빌더 객체를 얻음
    
    => 빌더 객체가 제공하는 Setter 메소드로 원하는 선택 매개변수 설정
 
 <br><br>
 
  
2021.11.12

<h3>Slf4J를 왜 사용하는가?</h3>

 - java에서 쓰이는 로깅관련 모듈
 
 - 하나의 라이브러리에 종속적이지 않아 어떤 라이브러리를 써도 동일하게 
<br>

<h3>private static final Logger logger = LoggerFactory.getLogger(Controller.class);</h3>
<br>
 - static?
 객체가 선언될 때마다 해당 객체를 매번 생성하지 않고 초기 클래스 로딩시 한번만 생성하기 위해
<br>
 - final?
 로그를 찍는 Logger는 초기 생성된 이후에 변경될 필요가 없기 때문에
<br>
> getLogger() 메소드의 파라미터 = Logger의 이름
>> 클래스 객체를 이름으로 넘겨주면(Controller.class) Logger의 이름은 "패키지 이름 + 클래스 이름"으로 구성 

