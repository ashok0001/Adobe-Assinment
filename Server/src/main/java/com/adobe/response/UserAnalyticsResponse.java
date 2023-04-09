package com.adobe.response;

public class UserAnalyticsResponse {
	
	private Integer total_users;
	private boolean status;
	
	public UserAnalyticsResponse() {
		// TODO Auto-generated constructor stub
	}

	
	
	public UserAnalyticsResponse(Integer total_users, boolean status) {
		super();
		this.total_users = total_users;
		this.status = status;
	}



	public Integer getTotal_users() {
		return total_users;
	}



	public void setTotal_users(Integer total_users) {
		this.total_users = total_users;
	}



	public boolean isStatus() {
		return status;
	}



	public void setStatus(boolean status) {
		this.status = status;
	}



	@Override
	public String toString() {
		return "UserAnalyticsResponse [total_users=" + total_users + ", status=" + status + "]";
	}
	

}
