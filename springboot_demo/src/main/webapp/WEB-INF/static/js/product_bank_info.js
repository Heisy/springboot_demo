var prdBankInfos = {
	FUND_HTF_001: {
		bankInfo: [{
			bankCode: "102",
			bankClass: "gongshang_bank",
			option: "需要U盾，无需网银，需验证预留手机",
			isOnline: true,
			isFast: false,
			limit: {
				desc: "直连开户单笔限额100万,无日限额，无月限额；快捷开户单笔限额5万，日限额5万，月限额15万。",
				onlinePay: {
					single: {amount: 1000000, desc: "100万"}
				},
				fastPay: {
					single: {amount: 50000, desc: "5万"},
					day: {amount: 50000, desc: "5万"},
					month: {amount: 150000, desc: "15万"}
				}
			}
		}, {
			bankCode: "103",
			bankClass: "nongye_bank",
			option: "需要U盾、或者动态口令卡，无需网银，需验证预留手机",
			isOnline: true,
			isFast: true,
			limit: {
				desc: "直连开户单笔限额500万,无日限额，无月限额；快捷开户无单笔限额，无日限额，无月限额。",
				onlinePay: {
					single: {amount: 5000000, desc: "500万"}
				}
			}
		}, {
			bankCode: "105",
			bankClass: "jianshe_bank",
			option: "无需U盾，无需网银，需验证预留手机",
			isOnline: true,
			isFast: false,
			limit: {
				desc: "直连开户单笔限额500万,日限额500万，无月限额；快捷开户单笔限额20万，日限额50万，无月限额。",
				onlinePay: {
					single: {amount: 5000000, desc: "500万"},
					day: {amount: 5000000, desc: "500万"}
				},
				fastPay: {
					single: {amount: 200000, desc: "20万"},
					day: {amount: 500000, desc: "50万"}
				}
			}
		}, {
			bankCode: "302",
			bankClass: "zhongxin_bank",
			option: "无需U盾，无需网银，需验证预留手机，验证取款密码",
			isOnline: true,
			isFast: false,
			limit: {
				desc: "直连开户单笔限额500万,日限额500万，无月限额；快捷开户无单笔限额，无日限额，无月限额。",
				onlinePay: {
					single: {amount: 5000000, desc: "500万"},
					day: {amount: 5000000, desc: "500万"}
				}
			}
		}, {
			bankCode: "303",
			bankClass: "guangda_bank",
			option: "无需U盾，无需网银，需验证预留手机，验证取款密码",
			isOnline: true,
			isFast: false,
			limit: {
				desc: "直连开户单笔限额500万,日限额500万，无月限额；快捷开户无单笔限额，无日限额，无月限额。",
				onlinePay: {
					single: {amount: 5000000, desc: "500万"},
					day: {amount: 5000000, desc: "500万"}
				}
			}
		}, {
			bankCode: "305",
			bankClass: "minsheng_bank",
			option: "无需U盾，需开通基金直销资金代付业务",
			isOnline: true,
			isFast: false,
			limit: {
				desc: "直连开户单笔限额50万,日限额200万，无月限额；快捷开户无单笔限额，无日限额，无月限额。",
				onlinePay: {
					single: {amount: 500000, desc: "50万"},
					day: {amount: 2000000, desc: "200万"}
				}
			}
		}, {
			bankCode: "306",
			bankClass: "guangfa_bank",
			option: "无需U盾，无需网银，需验证预留手机",
			isOnline: true,
			isFast: false,
			limit: {
				desc: "直连开户单笔限额500万,日限额500万，无月限额；快捷开户无单笔限额，无日限额，无月限额。",
				onlinePay: {
					single: {amount: 5000000, desc: "500万"},
					day: {amount: 5000000, desc: "500万"}
				}
			}
		}, {
			bankCode: "308",
			bankClass: "zhaoshang_bank",
			option: "无需U盾，无需网银，需验证预留手机",
			isOnline: true,
			isFast: true,
			limit: {
				desc: "直连开户单笔限额100万,日限额100万，无月限额；快捷开户单笔限额99.99万，日限额99.99万，无月限额。",
				onlinePay: {
					single: {amount: 1000000, desc: "100万"},
					day: {amount: 1000000, desc: "100万"}
				},
				fastPay: {
					single: {amount: 999900, desc: "99.99万"},
					day: {amount: 999900, desc: "99.99万"}
				}
			}
		}, {
			bankCode: "310",
			bankClass: "pufa_bank",
			option: "无需U盾，无需网银，需验证预留手机",
			isOnline: true,
			isFast: true,
			limit: {
				desc: "直连开户单笔限额500万,日限额500万，无月限额；快捷开户单笔限额100万，日限额100万，无月限额。",
				onlinePay: {
					single: {amount: 5000000, desc: "500万"},
					day: {amount: 5000000, desc: "500万"}
				},
				fastPay: {
					single: {amount: 1000000, desc: "100万"},
					day: {amount: 1000000, desc: "100万"}
				}
			}
		}]
	},
	FUND_WJ_001: {
		bankInfo: [{
			bankCode: "102",
			bankClass: "gongshang_bank",
			option: "无需网银，需验证预留手机",
			isFast: true,
			limit: {
				desc: "快捷开户单笔限额5万，日限额5万，月限额15万。",
				fastPay: {
					single: {amount: 50000, desc: "5万"},
					day: {amount: 50000, desc: "5万"},
					month: {amount: 150000, desc: "15万"}
				}
			}
		}, {
			bankCode: "103",
			bankClass: "nongye_bank",
			option: "无需网银、验证预留手机",
			isFast: true,
			limit: {
				desc: "快捷开户单笔限额50万，日限额200万，月限额500万。",
				fastPay: {
					single: {amount: 500000, desc: "50万"},
					day: {amount: 2000000, desc: "200万"},
					month: {amount: 5000000, desc: "500万"}
				}
			}
		}, {
			bankCode: "303",
			bankClass: "guangda_bank",
			option: "无需网银、验证预留手机",
			isFast: true,
			limit: {
				desc: "快捷开户单笔限额50万，日限额50万，月限额500万。",
				fastPay: {
					single: {amount: 500000, desc: "50万"},
					day: {amount: 500000, desc: "50万"},
					month: {amount: 5000000, desc: "500万"}
				}
			}
		}, {
			bankCode: "304",
			bankClass: "huaxia_bank",
			option: "无需网银、验证预留手机",
			isFast: true,
			limit: {
				desc: "快捷开户单笔限额50万，日限额200万，月限额500万。",
				fastPay: {
					single: {amount: 500000, desc: "50万"},
					day: {amount: 2000000, desc: "200万"},
					month: {amount: 5000000, desc: "500万"}
				}
			}
		}, {
			bankCode: "305",
			bankClass: "minsheng_bank",
			option: "无需网银、验证预留手机",
			isFast: true,
			limit: {
				desc: "快捷开户单笔限额50万，日限额200万，月限额500万。",
				fastPay: {
					single: {amount: 500000, desc: "50万"},
					day: {amount: 2000000, desc: "200万"},
					month: {amount: 5000000, desc: "500万"}
				}
			}
		}, {
			bankCode: "307",
			bankClass: "pingan_bank",
			option: "无需网银、验证预留手机",
			isFast: true,
			limit: {
				desc: "快捷开户单笔限额50万，日限额200万，月限额500万。",
				fastPay: {
					single: {amount: 500000, desc: "50万"},
					day: {amount: 2000000, desc: "200万"},
					month: {amount: 5000000, desc: "500万"}
				}
			}
		}, {
			bankCode: "308",
			bankClass: "zhaoshang_bank",
			option: "无需网银、验证预留手机",
			isFast: true,
			limit: {
				desc: "快捷开户单笔限额50万，日限额200万，月限额500万。",
				fastPay: {
					single: {amount: 500000, desc: "50万"},
					day: {amount: 2000000, desc: "200万"},
					month: {amount: 5000000, desc: "500万"}
				}
			}
		}, {
			bankCode: "313290000017",
			bankClass: "shanghai_bank",
			option: "无需网银、验证预留手机",
			isFast: true,
			limit: {
				desc: "快捷开户单笔限额50万，日限额200万，月限额500万。",
				fastPay: {
					single: {amount: 500000, desc: "50万"},
					day: {amount: 2000000, desc: "200万"},
					month: {amount: 5000000, desc: "500万"}
				}
			}
		}]
	}
}