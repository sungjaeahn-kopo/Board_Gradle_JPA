package kr.co.kyowon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@ComponentScan(basePackages= {"kr.co.kyowon"})
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