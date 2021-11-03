package kr.co.kyowon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.filter.HiddenHttpMethodFilter;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@ComponentScan(basePackages= {"kr.co.kyowon"})
// 중복되는 시간 컬럼에 대한 값을 자동으로 매핑 & update
// 자바 1.8이상부터 Date, Calandar 클래스 대신 LocalDate, LocalDateTime 클래스 사용
@EnableJpaAuditing
@Configuration
@EnableAutoConfiguration
public class BootApplication implements WebMvcConfigurer {

    public static void main(String[] args) {
        SpringApplication.run(BootApplication.class, args);
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("home");
    }
    
    @Bean
    public InternalResourceViewResolver setupViewResolver() {
    	
    	InternalResourceViewResolver resolver = new InternalResourceViewResolver();
    	
    	resolver.setPrefix("/WEB-INF/jsp/");
    	resolver.setSuffix(".jsp");
    	return resolver;
    }
    
}