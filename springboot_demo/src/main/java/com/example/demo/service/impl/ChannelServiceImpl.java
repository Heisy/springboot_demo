package com.example.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.bean.Channel;
import com.example.demo.mapper.ChannelMapper;
import com.example.demo.service.ChannelService;

@Component
public class ChannelServiceImpl implements ChannelService{
	@Autowired
	private ChannelMapper channelMapper;
	@Override
	public List<Channel> getChannelList() {
		return channelMapper.getChannelList();
	}
}
