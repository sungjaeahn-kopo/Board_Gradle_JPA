<h2>Event 전파 중단 4가지 방법</h2>

<h3>Event.preventDefault()</h3>
1) a 태그 클릭시 href 링크로 이동하지 않게 할 경우 <br>
2) form 태그 내부 submit 역할을 하는 버튼 클릭시 새로 실행하지 않게 하고 싶을 경우 (submit은 작동됨) <br><br>

<h3>Event.stopPropagation()</h3>
 - 현재 이벤트가 상위로 전파되지 않도록 중단

<h3>Event.stopImmediatePropagation()</h3>
 - 현재 이벤트가 상위뿐 아니라 현재 레벨에 걸린 다른 이벤트도 동작하지 않도록 중단

<h3>return false</h3>
 - JQuery 사용시 위의 두개 모두를 수행한 것과 같고
 - JQuery 사용하지 않을시 event.preventDefault()와 동일
