<h3>Spring bean 및 servlet 객체 얻는 방법</h3>
Spring에서 service/DAO 객체의 bean을 얻기 위해서 @Autowired/@Resource(name="beanName")을 사용<br><br>

Servlet 객체(HttpServletRequest, HttpServletResponse, HttpSession 등)를 얻기 위해서 Controller 메소드의 인자로 정의<br><br>

유틸리티성 객체에서 데이터베이스 접근하거나 Controller/Service가 아닌 리스너 등에서 Service/DAO 객체를 사용해야하는 경우, <strong>Bean/Servlet</strong>객체에 직접접근 <br>
 : ContextLoader로부터 현재의 WebApplicationContext를 얻고 getBean() 메소드로 bean을 얻음

    WebApplicationContext context = ContextLoader.getCurrentWebApplicationContext();

Servlet 객체들은 RequestContextHolder로부터 현재의 ServletReqeustAttributes 객체를 얻고 필요한 객체를 얻을 수 있음

    ServletRequestAttributes attr = (ServletRequestAttributes)RequestContextHolder.currentRequestAttributes();

ㅁㅁ

