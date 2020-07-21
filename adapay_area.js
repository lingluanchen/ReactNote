/*

import RPicker from 'react-native-picker';


initAddressData() {
    let realAreaIfo = adapay_address
    let areaInfo = realAreaIfo.map(item => {
        let dic = {}
        let key = item.title
        let value = item.cities.map(item => item.title)
        dic[key] = value
        return dic
    })
    this.state.realAreaIfo = realAreaIfo
    this.state.areaInfo = areaInfo
}


showArea = () => {
    let { realAreaIfo, areaInfo } = this.state;
    RPicker.init({
        pickerData: areaInfo,
        pickerConfirmBtnText: '确定',
        pickerCancelBtnText: '取消',
        pickerTitleText: '选择地址',
        pickerBg: [255, 255, 255, 1],
        onPickerConfirm: data => {
            console.log(JSON.stringify(data));
            let provinceID, cityID, province, city;
            province = data[0]
            city = data[1]
            let province_info = realAreaIfo.filter(item => item.title === province)[0] || {}
            let city_info = province_info.cities.filter(item => item.title === city)[0] || {}
            provinceID = province_info.value
            cityID = city_info.value
            console.log(province, city, provinceID, cityID);
        },
        onPickerCancel: data => { RPicker.hid }
    });
    RPicker.show();
}

*/



export const adapay_address = [
    {
        "value": "0011",
        "title": "北京市",
        "cities": [
            {
                "value": "1100",
                "title": "北京市"
            }
        ]
    },
    {
        "value": "0012",
        "title": "天津市",
        "cities": [
            {
                "value": "1200",
                "title": "天津市"
            }
        ]
    },
    {
        "value": "0013",
        "title": "河北省",
        "cities": [
            {
                "value": "1301",
                "title": "石家庄"
            },
            {
                "value": "1302",
                "title": "保定"
            },
            {
                "value": "1303",
                "title": "沧州"
            },
            {
                "value": "1304",
                "title": "承德"
            },
            {
                "value": "1305",
                "title": "邯郸"
            },
            {
                "value": "1306",
                "title": "衡水"
            },
            {
                "value": "1307",
                "title": "廊坊"
            },
            {
                "value": "1308",
                "title": "秦皇岛"
            },
            {
                "value": "1309",
                "title": "唐山"
            },
            {
                "value": "1310",
                "title": "邢台"
            },
            {
                "value": "1311",
                "title": "张家口"
            }
        ]
    },
    {
        "value": "0014",
        "title": "山西省",
        "cities": [
            {
                "value": "1401",
                "title": "太原"
            },
            {
                "value": "1402",
                "title": "长治"
            },
            {
                "value": "1403",
                "title": "大同"
            },
            {
                "value": "1404",
                "title": "晋城"
            },
            {
                "value": "1405",
                "title": "离石"
            },
            {
                "value": "1406",
                "title": "临汾"
            },
            {
                "value": "1407",
                "title": "朔州"
            },
            {
                "value": "1408",
                "title": "忻州"
            },
            {
                "value": "1409",
                "title": "阳泉"
            },
            {
                "value": "1410",
                "title": "榆次"
            },
            {
                "value": "1411",
                "title": "运城"
            },
            {
                "value": "1412",
                "title": "晋中"
            },
            {
                "value": "1413",
                "title": "吕梁"
            }
        ]
    },
    {
        "value": "0015",
        "title": "内蒙古自治区",
        "cities": [
            {
                "value": "1501",
                "title": "呼和浩特"
            },
            {
                "value": "1502",
                "title": "包头"
            },
            {
                "value": "1503",
                "title": "阿拉善"
            },
            {
                "value": "1504",
                "title": "巴彦淖尔"
            },
            {
                "value": "1505",
                "title": "赤峰"
            },
            {
                "value": "1506",
                "title": "呼伦贝尔"
            },
            {
                "value": "1507",
                "title": "乌海"
            },
            {
                "value": "1508",
                "title": "乌兰察布"
            },
            {
                "value": "1509",
                "title": "锡林郭勒"
            },
            {
                "value": "1510",
                "title": "兴安"
            },
            {
                "value": "1511",
                "title": "鄂尔多斯"
            },
            {
                "value": "1512",
                "title": "通辽"
            },
            {
                "value": "1513",
                "title": "满洲里"
            }
        ]
    },
    {
        "value": "0021",
        "title": "辽宁省",
        "cities": [
            {
                "value": "2101",
                "title": "沈阳"
            },
            {
                "value": "2102",
                "title": "大连"
            },
            {
                "value": "2103",
                "title": "鞍山"
            },
            {
                "value": "2104",
                "title": "本溪"
            },
            {
                "value": "2105",
                "title": "朝阳"
            },
            {
                "value": "2106",
                "title": "丹东"
            },
            {
                "value": "2107",
                "title": "抚顺"
            },
            {
                "value": "2108",
                "title": "阜新"
            },
            {
                "value": "2109",
                "title": "葫芦岛"
            },
            {
                "value": "2110",
                "title": "锦州"
            },
            {
                "value": "2111",
                "title": "辽阳"
            },
            {
                "value": "2112",
                "title": "盘锦"
            },
            {
                "value": "2113",
                "title": "铁岭"
            },
            {
                "value": "2114",
                "title": "营口"
            }
        ]
    },
    {
        "value": "0022",
        "title": "吉林省",
        "cities": [
            {
                "value": "2201",
                "title": "长春"
            },
            {
                "value": "2202",
                "title": "白城"
            },
            {
                "value": "2203",
                "title": "白山"
            },
            {
                "value": "2204",
                "title": "吉林"
            },
            {
                "value": "2205",
                "title": "辽源"
            },
            {
                "value": "2206",
                "title": "四平"
            },
            {
                "value": "2207",
                "title": "松原"
            },
            {
                "value": "2208",
                "title": "通化"
            },
            {
                "value": "2209",
                "title": "延边"
            }
        ]
    },
    {
        "value": "0023",
        "title": "黑龙江省",
        "cities": [
            {
                "value": "2301",
                "title": "哈尔滨"
            },
            {
                "value": "2302",
                "title": "大庆"
            },
            {
                "value": "2303",
                "title": "大兴安岭"
            },
            {
                "value": "2304",
                "title": "鹤岗"
            },
            {
                "value": "2305",
                "title": "黑河"
            },
            {
                "value": "2306",
                "title": "鸡西"
            },
            {
                "value": "2307",
                "title": "佳木斯"
            },
            {
                "value": "2308",
                "title": "牡丹江"
            },
            {
                "value": "2309",
                "title": "七台河"
            },
            {
                "value": "2310",
                "title": "齐齐哈尔"
            },
            {
                "value": "2311",
                "title": "双鸭山"
            },
            {
                "value": "2312",
                "title": "绥化"
            },
            {
                "value": "2313",
                "title": "伊春"
            }
        ]
    },
    {
        "value": "0031",
        "title": "上海市",
        "cities": [
            {
                "value": "3100",
                "title": "上海市"
            }
        ]
    },
    {
        "value": "0032",
        "title": "江苏省",
        "cities": [
            {
                "value": "3201",
                "title": "南京"
            },
            {
                "value": "3202",
                "title": "常州"
            },
            {
                "value": "3203",
                "title": "淮安"
            },
            {
                "value": "3204",
                "title": "连云港"
            },
            {
                "value": "3205",
                "title": "南通"
            },
            {
                "value": "3206",
                "title": "苏州"
            },
            {
                "value": "3207",
                "title": "宿迁"
            },
            {
                "value": "3208",
                "title": "泰州"
            },
            {
                "value": "3209",
                "title": "无锡"
            },
            {
                "value": "3210",
                "title": "徐州"
            },
            {
                "value": "3211",
                "title": "盐城"
            },
            {
                "value": "3212",
                "title": "扬州"
            },
            {
                "value": "3213",
                "title": "镇江"
            },
            {
                "value": "3214",
                "title": "胥浦"
            },
            {
                "value": "3215",
                "title": "昆山"
            }
        ]
    },
    {
        "value": "0033",
        "title": "浙江省",
        "cities": [
            {
                "value": "3301",
                "title": "杭州"
            },
            {
                "value": "3302",
                "title": "宁波"
            },
            {
                "value": "3303",
                "title": "湖州"
            },
            {
                "value": "3304",
                "title": "嘉兴"
            },
            {
                "value": "3305",
                "title": "金华"
            },
            {
                "value": "3306",
                "title": "绍兴"
            },
            {
                "value": "3307",
                "title": "台州"
            },
            {
                "value": "3308",
                "title": "温州"
            },
            {
                "value": "3309",
                "title": "舟山"
            },
            {
                "value": "3310",
                "title": "衢州"
            },
            {
                "value": "3311",
                "title": "丽水"
            }
        ]
    },
    {
        "value": "0034",
        "title": "安徽省",
        "cities": [
            {
                "value": "3401",
                "title": "合肥"
            },
            {
                "value": "3402",
                "title": "安庆"
            },
            {
                "value": "3403",
                "title": "蚌埠"
            },
            {
                "value": "3404",
                "title": "巢湖"
            },
            {
                "value": "3405",
                "title": "池州"
            },
            {
                "value": "3406",
                "title": "滁州"
            },
            {
                "value": "3407",
                "title": "阜阳"
            },
            {
                "value": "3408",
                "title": "淮北"
            },
            {
                "value": "3409",
                "title": "淮南"
            },
            {
                "value": "3410",
                "title": "黄山"
            },
            {
                "value": "3411",
                "title": "六安"
            },
            {
                "value": "3412",
                "title": "马鞍山"
            },
            {
                "value": "3414",
                "title": "铜陵"
            },
            {
                "value": "3415",
                "title": "芜湖"
            },
            {
                "value": "3416",
                "title": "宣城"
            },
            {
                "value": "3417",
                "title": "亳州"
            },
            {
                "value": "3418",
                "title": "宿州"
            }
        ]
    },
    {
        "value": "0035",
        "title": "福建省",
        "cities": [
            {
                "value": "3501",
                "title": "福州"
            },
            {
                "value": "3502",
                "title": "厦门"
            },
            {
                "value": "3503",
                "title": "龙岩"
            },
            {
                "value": "3504",
                "title": "南平"
            },
            {
                "value": "3505",
                "title": "宁德"
            },
            {
                "value": "3506",
                "title": "莆田"
            },
            {
                "value": "3507",
                "title": "泉州"
            },
            {
                "value": "3508",
                "title": "三明"
            },
            {
                "value": "3509",
                "title": "漳州"
            }
        ]
    },
    {
        "value": "0036",
        "title": "江西省",
        "cities": [
            {
                "value": "3601",
                "title": "南昌"
            },
            {
                "value": "3602",
                "title": "抚州"
            },
            {
                "value": "3603",
                "title": "赣州"
            },
            {
                "value": "3604",
                "title": "吉安"
            },
            {
                "value": "3605",
                "title": "景德镇"
            },
            {
                "value": "3606",
                "title": "九江"
            },
            {
                "value": "3607",
                "title": "萍乡"
            },
            {
                "value": "3608",
                "title": "上饶"
            },
            {
                "value": "3609",
                "title": "新余"
            },
            {
                "value": "3610",
                "title": "宜春"
            },
            {
                "value": "3611",
                "title": "鹰潭"
            }
        ]
    },
    {
        "value": "0037",
        "title": "山东省",
        "cities": [
            {
                "value": "3701",
                "title": "济南"
            },
            {
                "value": "3702",
                "title": "青岛"
            },
            {
                "value": "3703",
                "title": "滨州"
            },
            {
                "value": "3704",
                "title": "德州"
            },
            {
                "value": "3705",
                "title": "东营"
            },
            {
                "value": "3706",
                "title": "菏泽"
            },
            {
                "value": "3707",
                "title": "济宁"
            },
            {
                "value": "3708",
                "title": "莱芜"
            },
            {
                "value": "3709",
                "title": "聊城"
            },
            {
                "value": "3710",
                "title": "临沂"
            },
            {
                "value": "3711",
                "title": "日照"
            },
            {
                "value": "3712",
                "title": "泰安"
            },
            {
                "value": "3713",
                "title": "威海"
            },
            {
                "value": "3714",
                "title": "潍坊"
            },
            {
                "value": "3715",
                "title": "烟台"
            },
            {
                "value": "3716",
                "title": "枣庄"
            },
            {
                "value": "3717",
                "title": "淄博"
            }
        ]
    },
    {
        "value": "0041",
        "title": "河南省",
        "cities": [
            {
                "value": "4101",
                "title": "郑州"
            },
            {
                "value": "4102",
                "title": "安阳"
            },
            {
                "value": "4103",
                "title": "焦作"
            },
            {
                "value": "4104",
                "title": "鹤壁"
            },
            {
                "value": "4105",
                "title": "开封"
            },
            {
                "value": "4106",
                "title": "洛阳"
            },
            {
                "value": "4107",
                "title": "南阳"
            },
            {
                "value": "4108",
                "title": "平顶山"
            },
            {
                "value": "4109",
                "title": "三门峡"
            },
            {
                "value": "4110",
                "title": "商丘"
            },
            {
                "value": "4111",
                "title": "新乡"
            },
            {
                "value": "4112",
                "title": "信阳"
            },
            {
                "value": "4113",
                "title": "许昌"
            },
            {
                "value": "4114",
                "title": "周口"
            },
            {
                "value": "4115",
                "title": "驻马店"
            },
            {
                "value": "4116",
                "title": "漯河"
            },
            {
                "value": "4117",
                "title": "濮阳"
            },
            {
                "value": "4118",
                "title": "济源"
            }
        ]
    },
    {
        "value": "0042",
        "title": "湖北省",
        "cities": [
            {
                "value": "4201",
                "title": "武汉"
            },
            {
                "value": "4202",
                "title": "鄂州"
            },
            {
                "value": "4203",
                "title": "恩施"
            },
            {
                "value": "4204",
                "title": "黄冈"
            },
            {
                "value": "4205",
                "title": "黄石"
            },
            {
                "value": "4206",
                "title": "荆门"
            },
            {
                "value": "4207",
                "title": "荆州"
            },
            {
                "value": "4208",
                "title": "十堰"
            },
            {
                "value": "4209",
                "title": "随州"
            },
            {
                "value": "4210",
                "title": "咸宁"
            },
            {
                "value": "4211",
                "title": "襄樊"
            },
            {
                "value": "4212",
                "title": "孝感"
            },
            {
                "value": "4213",
                "title": "神农架"
            },
            {
                "value": "4214",
                "title": "天门"
            },
            {
                "value": "4215",
                "title": "宜昌"
            },
            {
                "value": "4216",
                "title": "三峡"
            },
            {
                "value": "4217",
                "title": "潜江"
            },
            {
                "value": "4218",
                "title": "仙桃"
            }
        ]
    },
    {
        "value": "0043",
        "title": "湖南省",
        "cities": [
            {
                "value": "4301",
                "title": "长沙"
            },
            {
                "value": "4302",
                "title": "常德"
            },
            {
                "value": "4303",
                "title": "郴州"
            },
            {
                "value": "4304",
                "title": "衡阳"
            },
            {
                "value": "4305",
                "title": "怀化"
            },
            {
                "value": "4306",
                "title": "娄底"
            },
            {
                "value": "4307",
                "title": "邵阳"
            },
            {
                "value": "4308",
                "title": "湘潭"
            },
            {
                "value": "4309",
                "title": "湘西"
            },
            {
                "value": "4310",
                "title": "益阳"
            },
            {
                "value": "4311",
                "title": "永州"
            },
            {
                "value": "4312",
                "title": "岳阳"
            },
            {
                "value": "4313",
                "title": "张家界"
            },
            {
                "value": "4314",
                "title": "株洲"
            },
            {
                "value": "4331",
                "title": "吉首"
            }
        ]
    },
    {
        "value": "0044",
        "title": "广东省",
        "cities": [
            {
                "value": "4401",
                "title": "广州"
            },
            {
                "value": "4402",
                "title": "深圳"
            },
            {
                "value": "4403",
                "title": "潮州"
            },
            {
                "value": "4404",
                "title": "东莞"
            },
            {
                "value": "4405",
                "title": "佛山"
            },
            {
                "value": "4406",
                "title": "惠州"
            },
            {
                "value": "4407",
                "title": "江门"
            },
            {
                "value": "4408",
                "title": "揭阳"
            },
            {
                "value": "4409",
                "title": "茂名"
            },
            {
                "value": "4410",
                "title": "梅州"
            },
            {
                "value": "4411",
                "title": "清远"
            },
            {
                "value": "4412",
                "title": "汕头"
            },
            {
                "value": "4413",
                "title": "汕尾"
            },
            {
                "value": "4414",
                "title": "韶关"
            },
            {
                "value": "4415",
                "title": "阳江"
            },
            {
                "value": "4416",
                "title": "云浮"
            },
            {
                "value": "4417",
                "title": "湛江"
            },
            {
                "value": "4418",
                "title": "肇庆"
            },
            {
                "value": "4419",
                "title": "中山"
            },
            {
                "value": "4420",
                "title": "河源"
            },
            {
                "value": "4421",
                "title": "珠海"
            }
        ]
    },
    {
        "value": "0045",
        "title": "广西壮族自治区",
        "cities": [
            {
                "value": "4501",
                "title": "南宁"
            },
            {
                "value": "4502",
                "title": "百色"
            },
            {
                "value": "4503",
                "title": "北海"
            },
            {
                "value": "4504",
                "title": "桂林"
            },
            {
                "value": "4505",
                "title": "河池"
            },
            {
                "value": "4506",
                "title": "柳州"
            },
            {
                "value": "4507",
                "title": "梧州"
            },
            {
                "value": "4508",
                "title": "玉林"
            },
            {
                "value": "4509",
                "title": "崇左"
            },
            {
                "value": "4510",
                "title": "防城港"
            },
            {
                "value": "4511",
                "title": "贵港"
            },
            {
                "value": "4512",
                "title": "贺州"
            },
            {
                "value": "4513",
                "title": "来宾"
            },
            {
                "value": "4514",
                "title": "钦州"
            }
        ]
    },
    {
        "value": "0046",
        "title": "海南省",
        "cities": [
            {
                "value": "4601",
                "title": "海口"
            },
            {
                "value": "4602",
                "title": "三亚"
            },
            {
                "value": "4603",
                "title": "白沙"
            },
            {
                "value": "4604",
                "title": "保亭"
            },
            {
                "value": "4605",
                "title": "昌江"
            },
            {
                "value": "4606",
                "title": "澄迈"
            },
            {
                "value": "4607",
                "title": "儋州"
            },
            {
                "value": "4608",
                "title": "定安"
            },
            {
                "value": "4609",
                "title": "东方"
            },
            {
                "value": "4610",
                "title": "乐东"
            },
            {
                "value": "4611",
                "title": "临高"
            },
            {
                "value": "4612",
                "title": "陵水"
            },
            {
                "value": "4613",
                "title": "琼海"
            },
            {
                "value": "4614",
                "title": "琼中"
            },
            {
                "value": "4615",
                "title": "屯昌"
            },
            {
                "value": "4616",
                "title": "万宁"
            },
            {
                "value": "4617",
                "title": "文昌"
            },
            {
                "value": "4618",
                "title": "五指山"
            },
            {
                "value": "4619",
                "title": "洋浦"
            }
        ]
    },
    {
        "value": "0050",
        "title": "重庆市",
        "cities": [
            {
                "value": "5000",
                "title": "重庆市"
            }
        ]
    },
    {
        "value": "0051",
        "title": "四川省",
        "cities": [
            {
                "value": "5101",
                "title": "成都"
            },
            {
                "value": "5102",
                "title": "巴中"
            },
            {
                "value": "5103",
                "title": "达州"
            },
            {
                "value": "5104",
                "title": "德阳"
            },
            {
                "value": "5105",
                "title": "广安"
            },
            {
                "value": "5106",
                "title": "广元"
            },
            {
                "value": "5107",
                "title": "乐山"
            },
            {
                "value": "5108",
                "title": "凉山"
            },
            {
                "value": "5109",
                "title": "眉山"
            },
            {
                "value": "5110",
                "title": "绵阳"
            },
            {
                "value": "5111",
                "title": "南充"
            },
            {
                "value": "5112",
                "title": "内江"
            },
            {
                "value": "5113",
                "title": "攀枝花"
            },
            {
                "value": "5114",
                "title": "遂宁"
            },
            {
                "value": "5115",
                "title": "雅安"
            },
            {
                "value": "5116",
                "title": "宜宾"
            },
            {
                "value": "5117",
                "title": "自贡"
            },
            {
                "value": "5118",
                "title": "泸州"
            },
            {
                "value": "5119",
                "title": "阿坝"
            },
            {
                "value": "5120",
                "title": "甘孜"
            },
            {
                "value": "5121",
                "title": "资阳"
            }
        ]
    },
    {
        "value": "0052",
        "title": "贵州省",
        "cities": [
            {
                "value": "5201",
                "title": "贵阳"
            },
            {
                "value": "5202",
                "title": "安顺"
            },
            {
                "value": "5203",
                "title": "毕节"
            },
            {
                "value": "5204",
                "title": "六盘水"
            },
            {
                "value": "5205",
                "title": "铜仁"
            },
            {
                "value": "5206",
                "title": "遵义"
            },
            {
                "value": "5207",
                "title": "黔东南"
            },
            {
                "value": "5208",
                "title": "黔南"
            },
            {
                "value": "5209",
                "title": "黔西南"
            }
        ]
    },
    {
        "value": "0053",
        "title": "云南省",
        "cities": [
            {
                "value": "5301",
                "title": "昆明"
            },
            {
                "value": "5302",
                "title": "西双版纳"
            },
            {
                "value": "5303",
                "title": "保山"
            },
            {
                "value": "5304",
                "title": "楚雄"
            },
            {
                "value": "5305",
                "title": "大理"
            },
            {
                "value": "5306",
                "title": "德宏"
            },
            {
                "value": "5307",
                "title": "红河"
            },
            {
                "value": "5308",
                "title": "丽江"
            },
            {
                "value": "5309",
                "title": "临沧"
            },
            {
                "value": "5310",
                "title": "怒江"
            },
            {
                "value": "5311",
                "title": "曲靖"
            },
            {
                "value": "5312",
                "title": "思茅"
            },
            {
                "value": "5313",
                "title": "文山"
            },
            {
                "value": "5314",
                "title": "玉溪"
            },
            {
                "value": "5315",
                "title": "昭通"
            },
            {
                "value": "5316",
                "title": "中甸"
            },
            {
                "value": "5317",
                "title": "迪庆州"
            }
        ]
    },
    {
        "value": "0054",
        "title": "西藏自治区",
        "cities": [
            {
                "value": "5401",
                "title": "拉萨"
            },
            {
                "value": "5402",
                "title": "阿里"
            },
            {
                "value": "5403",
                "title": "昌都"
            },
            {
                "value": "5404",
                "title": "林芝"
            },
            {
                "value": "5405",
                "title": "那曲"
            },
            {
                "value": "5406",
                "title": "日喀则"
            },
            {
                "value": "5407",
                "title": "山南"
            },
            {
                "value": "5424",
                "title": "樟木口岸"
            }
        ]
    },
    {
        "value": "0061",
        "title": "陕西省",
        "cities": [
            {
                "value": "6101",
                "title": "西安"
            },
            {
                "value": "6102",
                "title": "安康"
            },
            {
                "value": "6103",
                "title": "宝鸡"
            },
            {
                "value": "6104",
                "title": "汉中"
            },
            {
                "value": "6105",
                "title": "商洛"
            },
            {
                "value": "6106",
                "title": "铜川"
            },
            {
                "value": "6107",
                "title": "渭南"
            },
            {
                "value": "6108",
                "title": "咸阳"
            },
            {
                "value": "6109",
                "title": "延安"
            },
            {
                "value": "6110",
                "title": "榆林"
            }
        ]
    },
    {
        "value": "0062",
        "title": "甘肃省",
        "cities": [
            {
                "value": "6201",
                "title": "兰州"
            },
            {
                "value": "6202",
                "title": "白银"
            },
            {
                "value": "6203",
                "title": "定西"
            },
            {
                "value": "6204",
                "title": "东风"
            },
            {
                "value": "6205",
                "title": "合作"
            },
            {
                "value": "6206",
                "title": "嘉峪关"
            },
            {
                "value": "6207",
                "title": "金昌"
            },
            {
                "value": "6208",
                "title": "酒泉"
            },
            {
                "value": "6209",
                "title": "矿区"
            },
            {
                "value": "6210",
                "title": "临夏"
            },
            {
                "value": "6211",
                "title": "陇南"
            },
            {
                "value": "6212",
                "title": "平凉"
            },
            {
                "value": "6213",
                "title": "庆阳"
            },
            {
                "value": "6214",
                "title": "天水"
            },
            {
                "value": "6215",
                "title": "武威"
            },
            {
                "value": "6216",
                "title": "张掖"
            },
            {
                "value": "6217",
                "title": "甘南州"
            }
        ]
    },
    {
        "value": "0063",
        "title": "青海省",
        "cities": [
            {
                "value": "6301",
                "title": "西宁"
            },
            {
                "value": "6302",
                "title": "海东"
            },
            {
                "value": "6322",
                "title": "海北"
            },
            {
                "value": "6323",
                "title": "黄南"
            },
            {
                "value": "6325",
                "title": "海南"
            },
            {
                "value": "6326",
                "title": "果洛"
            },
            {
                "value": "6327",
                "title": "玉树"
            },
            {
                "value": "6328",
                "title": "海西"
            }
        ]
    },
    {
        "value": "0064",
        "title": "宁夏回族自治区",
        "cities": [
            {
                "value": "6401",
                "title": "银川"
            },
            {
                "value": "6402",
                "title": "中卫"
            },
            {
                "value": "6403",
                "title": "固原"
            },
            {
                "value": "6404",
                "title": "石嘴山"
            },
            {
                "value": "6405",
                "title": "吴忠"
            }
        ]
    },
    {
        "value": "0065",
        "title": "新疆维吾尔自治区",
        "cities": [
            {
                "value": "6501",
                "title": "乌鲁木齐"
            },
            {
                "value": "6502",
                "title": "阿克苏"
            },
            {
                "value": "6503",
                "title": "阿勒泰"
            },
            {
                "value": "6504",
                "title": "巴州"
            },
            {
                "value": "6505",
                "title": "博州"
            },
            {
                "value": "6506",
                "title": "昌吉"
            },
            {
                "value": "6507",
                "title": "哈密"
            },
            {
                "value": "6508",
                "title": "和田"
            },
            {
                "value": "6509",
                "title": "喀什"
            },
            {
                "value": "6510",
                "title": "克拉玛依"
            },
            {
                "value": "6511",
                "title": "马兰"
            },
            {
                "value": "6512",
                "title": "石河子"
            },
            {
                "value": "6513",
                "title": "塔城"
            },
            {
                "value": "6514",
                "title": "吐鲁番"
            },
            {
                "value": "6515",
                "title": "伊犁"
            },
            {
                "value": "6516",
                "title": "克州"
            },
            {
                "value": "6517",
                "title": "阿拉尔"
            },
            {
                "value": "6518",
                "title": "五家渠"
            }
        ]
    },
    {
        "value": "2003",
        "title": "台湾省",
        "cities": [{
            "value": "9903",
            "title": "台湾省"
        }]
    },
    {
        "value": "2001",
        "title": "香港特别行政区",
        "cities": [{
            "value": "9901",
            "title": "香港特别行政区"
        }]
    },
    {
        "value": "2002",
        "title": "澳门特别行政区",
        "cities": [{
            "value": "9902",
            "title": "澳门特别行政区"
        }]
    }
];