package com.example.demo.bean;

import java.util.Date;


public class Channel {
	private int id;
	private String code;
	private String name;
	private Date ctm;

	public Channel() {
	}

	public Channel(String code, String name) {
		this.code = code;
		this.name = name;
		this.ctm = new Date();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getCtm() {
		return ctm;
	}

	public void setCtm(Date ctm) {
		this.ctm = ctm;
	}
	
}
