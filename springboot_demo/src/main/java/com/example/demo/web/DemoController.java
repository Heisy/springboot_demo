package com.example.demo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.bean.Channel;
import com.example.demo.service.ChannelService;

@Controller
public class DemoController {
	
	@Autowired
	private ChannelService channelService;
	
	@RequestMapping("/index")
	public String index(String param,Model model){
		List<Channel> channelList=channelService.getChannelList();
		model.addAttribute("channelList", channelList);
		return "index";
	}

}
