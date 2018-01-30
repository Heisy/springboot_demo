package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.example.demo.bean.Channel;
public interface  ChannelMapper {

	@Select("SELECT * FROM t_channel")
	public List<Channel> getChannelList();

}
