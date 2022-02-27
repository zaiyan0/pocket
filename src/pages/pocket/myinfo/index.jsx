import { Component, useState } from 'react'
import { View, Text ,Form,Label,Radio,Input,ScrollView,Picker,Button} from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton ,AtActivityIndicator,AtNavBar,AtTabBar,AtTabs,AtTabsPane,AtDrawer,
  AtCard ,AtIcon,AtFab,AtModal,AtModalHeader,AtModalContent,AtModalAction,AtSwitch,AtAvatar,AtDivider} from 'taro-ui'
import './index.scss'
import Booklist from '../booklist'
import moment from "moment";
export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      isshow: false,
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleAtDrawer () {
    console.log(this.state.isshow)
    this.setState({
      isshow: !this.state.isshow
    })
  }

  selectDrawer = (value) =>{
    console.log(value)
    switch (value){
      case 0:
        setTimeout(() => {
          Taro.navigateTo({
            url: '/pages/pocket/statistics',
            })
        }, 550)
        break;
        break;
      case 1:
        setTimeout(() => {
          Taro.navigateTo({
            url: '/pages/pocket/message',
            })
        }, 550)
        break;
      case 2:
        setTimeout(() => {
          Taro.navigateTo({
            url: '/pages/pocket/myinfo',
            })
        }, 550)
        break;
        break;
    }
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    console.log(e.detail)
  }

  render () {
    const scrollStyle = {
      height: '600px'
    }
    const scrollTop = 0
    const Threshold = 20
    return (
      <ScrollView className='scrollview'
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        style={scrollStyle}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        onScrollToUpper={this.onScrollToUpper.bind(this)}
        onScroll={this.onScroll} >
        <AtNavBar
          // onClickRgIconSt={this.handleClick}
          // onClickRgIconNd={this.handleClick}
          // onClickLeftIcon={this.handleClick}
          color='#000'
          title='我的'
          rightFirstIconType='bullet-list'
          onClickRgIconSt={this.handleAtDrawer.bind(this)}
        />
        <AtDrawer
          show={this.state.isshow}
          mask
          right
          width='120px'
          onItemClick={this.selectDrawer.bind(this)}
          onClose={this.handleAtDrawer.bind(this)}
          items={['首页', '消息','我的']}
        ></AtDrawer>
        <View className='at-row head'>
          <View className='headcontent at-row'>
            <View className='at-col at-col-4'>
              <AtAvatar circle text='熊小灿' size='large' className='avatar'></AtAvatar>

            </View>
            <View className='.at-article at-col at-col-8 info'>
              <View className='at-article__h1'>
                熊小灿
              </View>
              <View className='at-article__p'>
                手机号：xxxx-xxx-xx
              </View>
            </View>
          </View>
        </View>
        <AtDivider content='没有更多了' fontColor='#2d8cf0' lineColor='#2d8cf0' />
      </ScrollView>
    )
  }
}
