import http from './interface'

//请求url
http.config.baseUrl = "http://api.pte.heiwangke.net:80"

//设置请求前拦截器
http.interceptor.request = (config) => {
	config.header = {
		"Content-Type":"application/json;charset=UTF-8",
		"Accept":"application/json",
		"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
	}
	config.timeout = 1000
}


//设置请求结束后拦截器
http.interceptor.response = (response) => {
	console.log('个性化response....')
	//判断返回状态 执行相应操作
	return response;
}


/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */


// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const test = (data) => {
	return http.request({
		baseUrl: 'https://unidemo.dcloud.net.cn/',
		url: 'ajax/echo/text?name=uni-app',
		dataType: 'text',
		data,
	})
}

export const goods = (data) => {
	return http.request({
		url: '/goods/index',
		dataType: 'json',
		data,
	})
}

// 轮播图
export const banner = (data) => {
	return http.request({
		url: '/banner/36kr',
		method: 'GET',
		data,
		// handle:true
	})
}

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	test,
	goods,
	banner
}
