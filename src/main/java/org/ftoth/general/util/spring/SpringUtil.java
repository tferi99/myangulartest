package org.ftoth.general.util.spring;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.aop.framework.Advised;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class SpringUtil
{
	/**
	 * To dump beans reside a specific application context.
	 * 
	 * @param springAppContext
	 * @return
	 */
	public static String dumpSpringBeans(ApplicationContext springAppContext)
	{
		StringBuilder b = new StringBuilder();
		String[] beansArr = springAppContext.getBeanDefinitionNames();
		List<String> beans = Arrays.asList(beansArr);
		Collections.sort(beans);
		b.append("======================== Spring Beans =======================\n");
		for (String bean : beans) {
			Object o = springAppContext.getBean(bean);
			b.append(" - [" + bean + "] - (" + o.getClass().getName() + ")\n");
		}
		b.append("=============================================================\n");
		return b.toString();
	}

	public static List<Object> getBeansByPattern(ApplicationContext springAppContext, String regExpattern)
	{
		List<Object> beans = new ArrayList<Object>();
		
		String[] beansArr = springAppContext.getBeanDefinitionNames();
		for (String bean : beansArr) {
			Object o = springAppContext.getBean(bean);
			String name = o.getClass().getName();
			if (name.matches(regExpattern)) {
				beans.add(o);
			}
		}		
		return beans;
	}
	
	/**
	 * To retrieve a bean.
	 * 
	 * @param sctx
	 * @param name
	 * @return
	 */
	public static Object getBean(ServletContext sctx, String name)
	{
		ApplicationContext ctx = getApplicationContext(sctx);
		return ctx.getBean(name);
	}

    public static Object getBean(ApplicationContext ctx, String name)
    {
        return ctx.getBean(name);
    }

    /**
	 * To get root application context
	 * 
	 * @param sctx
	 * @return
	 */
	public static ApplicationContext getApplicationContext(ServletContext sctx)
	{
		return WebApplicationContextUtils.getRequiredWebApplicationContext(sctx);
	}

	/**
	 * To get application context from context holder.
	 * 
	 * @return
	 */
	public static ApplicationContext getApplicationContext()
	{
		return SpringApplicationContextHolder.getApplicationContext();
	}

	@SuppressWarnings("unchecked")
	public static <T> T getTargetObjectFromProxy(Object proxy, Class<T> targetClass) throws Exception
	{
		Advised advised = (Advised)proxy;
		Object ret = advised.getTargetSource().getTarget();
		return (T)ret;
	}
}
