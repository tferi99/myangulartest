package org.ftoth.general.util.spring;

import org.springframework.context.ApplicationContext;

public class SpringApplicationContextHolder
{
	private static ApplicationContext ctx;

	/**
	 * Injected from the class "SpringApplicationContextProvider" which is automatically loaded during Spring-Initialization.
	 */
	public static void setApplicationContext(ApplicationContext applicationContext)
	{
		ctx = applicationContext;
	}

	/**
	 * Get access to the Spring ApplicationContext from everywhere in your Application.
	 * 
	 * @return
	 */
	public static ApplicationContext getApplicationContext()
	{
		return ctx;
	}
}
