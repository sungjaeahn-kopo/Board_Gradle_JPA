<h3>Include refid</h3>
: 반복되는 쿼리를 미리 작성해 놓고 재활용 할 수 있게 함

    <mapper>
      <sql id="a">
        SELECT * FROM TABLE
      </sql>
      <sql id="b">
        SELECT * FROM TABLE WHERE ${param1}
      </sql>
      <select id="getListA" resultType="hashmap">
        <include refid="a" />
        WHERE filed = #{value}
      </select>
      <select id="getListB" resultType="hashmap">
        <include refid="b">
          <property name="param1" value="value">
        </include>
        WHERE filed = #{value}
      </select>
    </mapper>

<h3>Escape</h3>
 : LIKE 연산으로 '%'나 '_'가 들어간 문자를 검색하기 위해서 ESCAPE를 사용해야 함
 
        SELECT LOC FROM DEPT WHERE LOC LIKE '%#_%' ESCAPE '#';
