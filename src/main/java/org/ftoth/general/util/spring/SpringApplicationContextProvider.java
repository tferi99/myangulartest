package org.ftoth.general.util.spring;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class SpringApplicationContextProvider implements ApplicationContextAware
{  
	  
	public void setApplicationContext(ApplicationContext ctx) throws BeansException {  
		// Wiring the ApplicationContext into a static method  
		SpringApplicationContextHolder.setApplicationContext(ctx);  
	}  
}

