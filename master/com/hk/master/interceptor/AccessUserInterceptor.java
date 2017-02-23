package com.hk.master.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.hk.common.interceptor.BaseInterceptor;

public class AccessUserInterceptor extends BaseInterceptor implements HandlerInterceptor{
	
	@Value("${mainProjectUrl}")
	String mainProjectUrl;
	

	@Override
	public void afterCompletion(HttpServletRequest arg0,
			HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		
	}

	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1,
			Object arg2, ModelAndView arg3) throws Exception {
		
		
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response,Object arg2) throws Exception {
		/*if(accessUserService.getAccesModule(InterceptorDirectoryEnum.MASTER_ACCESSUSER.getVal(),getUsername())){
			return true;
		}else{
			response.sendRedirect(mainProjectUrl+"/danied.html");
			return false;
		}*/
		return true;
		
	}

}
