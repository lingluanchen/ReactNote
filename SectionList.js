
/*
* 优惠券列表页面
* @slodon
* */
import React, { Component } from 'react';
import {
  View, ScrollView, Image, Text, StyleSheet, Dimensions, SectionList, Alert
} from 'react-native';
import LogUtil from '../../../util/LogUtil';

let cityList = [
  { city: '深圳', id: '12' }, { city: '保定', id: '12' }, { city: '康定', id: '12' },
  { city: '德国省', id: '12' }, { city: '英国省', id: '12' }, { city: '南川', id: '12' },
  { city: '西班牙', id: '12' }, { city: '美国省', id: '12' }, { city: '丰裕', id: '12' },
  { city: '深圳', id: '12' }, { city: '台湾', id: '12' }, { city: '剑南', id: '12' },
  { city: '深圳', id: '12' }, { city: '日本市', id: '12' }, { city: '东欧', id: '12' }];

let az_list = { '#': [], A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], I: [], J: [], K: [], L: [], M: [], N: [], O: [], P: [], Q: [], R: [], S: [], T: [], U: [], V: [], W: [], X: [], Y: [], Z: [] }

export default class HotelMyNearby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      az_city_list: [],
      FlatListIsRefreshing: false,
    }
  }

  componentWillMount() {
    // //重置
    let az_list_dic = az_list
    //赋值
    for (const item of cityList) {
      let key = makePy(item.city.charAt(0))
      az_list_dic[key].push(item);
    }

    //清除空数组的key
    for (let key of Object.keys(az_list_dic)) {
      let sub_arr = az_list_dic[key]
      if (sub_arr instanceof Array) {
        if (sub_arr.length === 0) {
          delete az_list_dic[key]
        }
      } else {
        delete az_list_dic[key]
      }
    }

    this.state.az_city_list = []
    for (let _key of Object.keys(az_list_dic)) {
      this.state.az_city_list.push({ key: _key, data: az_list_dic[_key] })
    }

    this.state.az_city_list.sort((a, b) => {
      if (a.key > b.key) {
        return false
      } else {
        return true
      }
    })
    // LogUtil.log('================'+JSON.stringify(this.state.az_city_list), null, 2)
  }

  componentDidMount() {

  }


  _renderSectionHeader(info, index) {
    LogUtil.log(JSON.stringify(info), null, '\t')
    return (
      <View style={styles.section_head}>
        <Text key={info.section.key} style={styles.row_text}>{info.section.key}</Text>
      </View>
    )
  }

  _renderItem(info) {
    return (
      <View style={styles.section_row}>
        <Text key={info.item.id} style={styles.row_text}>{info.item.city}</Text>
      </View>
    )
  }

  _separatorCom() {
    return (
      <View style={{ height: pxToDp(1), marginHorizontal: pxToDp(20), backgroundColor: 'red' }}></View>
    )
  }

  _sectionHead() {
    return (
      <View style={{ height: 4, width: screenW, backgroundColor: 'orange' }}></View>
    )
  }

  _listHead(data) {
    let list = data
    return (<View style={styles.item_con}>
      <Text >深圳热搜</Text>
    </View>)
  }

  _listFoot() {
    return (
      <View style={{ height: 4, width: screenW, backgroundColor: 'orange' }}></View>
    )
  }

  render() {
    const { az_city_list } = this.state;
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <SectionList
          renderSectionHeader={this._renderSectionHeader}
          renderItem={this._renderItem}
          sections={az_city_list}
          refreshing={false}
          onRefresh={() => { alert("刷新") }}
          ItemSeparatorComponent={this._separatorCom}
          SectionSeparatorComponent={() => <View style={{ height: 20, backgroundColor: 'blue' }}></View>}
          keyExtractor={(item, index) => ("index" + index + item.id)}
          onEndReached={(info) => { }}
          onEndReachedThreshold={0}
          stickySectionHeadersEnabled={true}
          ListHeaderComponent={() => {
            return this._listHead();
          }}
          ListFooterComponent={() => {
            return <View style={{ height: pxToDp(40), backgroundColor: 'white' }}></View>
          }}
        />
      </View >
    )
  }
}

const Left_margin = pxToDp(20)
const Right_margin = pxToDp(20)

const styles = StyleSheet.create({

  section_row: {
    justifyContent: 'center',
    paddingHorizontal: pxToDp(20),
    height: pxToDp(68),
  },
  section_head: {
    justifyContent: 'center',
    paddingHorizontal: pxToDp(20),
    height: pxToDp(63),

  },
  row_text: {
    fontSize: pxToDp(30),
    color: '#333',
    fontWeight: 'bold'
  },

})



// SectionList 数据样式必须如下
[{key:"id", data:[{},{}]}]

// section 是第一层 item 是第二层
info.section.key
info.section.item