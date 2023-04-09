package com.adobe.response;

public class PostAnalyticsResponse {

	private Integer total_posts;
	private boolean status;
	
	public PostAnalyticsResponse() {
		// TODO Auto-generated constructor stub
	}

	public PostAnalyticsResponse(Integer total_posts, boolean status) {
		super();
		this.total_posts = total_posts;
		this.status = status;
	}
	
}
