package com.adobe.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;


@Configuration
public class AppConfig {
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
		
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
		.authorizeHttpRequests()
		.requestMatchers(HttpMethod.POST,"api/users").permitAll()
		.requestMatchers(HttpMethod.POST,"api/signin").permitAll()
		.requestMatchers(HttpMethod.GET,"/").permitAll()
		.anyRequest().authenticated()
		.and()
		.addFilterBefore(new JwtValidationFilter(), BasicAuthenticationFilter.class)
		.csrf().disable().cors().disable().formLogin();
		
		return http.build();
		
	}
	
	@Bean
	public PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}

}
