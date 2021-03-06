import { Component, useState } from 'react'
import { View, Text ,Form,Label,Radio,Input,ScrollView,Picker,Button} from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton ,AtActivityIndicator,AtNavBar,AtTabBar,AtTabs,AtTabsPane,AtDrawer,
  AtCard ,AtIcon,AtFab,AtModal,AtModalHeader,AtModalContent,AtModalAction,AtSwitch} from 'taro-ui'
import './index.scss'
import Booklist from '../booklist'
import moment from "moment";
export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      current:0,
      currentTab:0,
      dateSel: moment().format('YYYY-MM-DD'),
      isshow: false,
      isOpen: false,
      switch: true,
      consume: {
        date: moment().format('YYYY-MM-DD'),
        type: true,
        free: 0
      }
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {
    this.setState({
      current: value,
      
    })
  }

  handleClickTab (value) {
    console.log(this.state.currentTab)
    this.setState({
      currentTab: value,
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

  handleAtDrawer () {
    console.log(this.state.isshow)
    this.setState({
      isshow: !this.state.isshow
    })
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  onScrollToUpper() {}

  // or ??????????????????
  // onScrollToUpper = () => {}

  onScroll(e){
    console.log(e.detail)
  }

  openModal(){
    this.setState({
      isOpen: true
    })
  }

  handleClose(){
    this.setState({
      isOpen: false
    })
  }
  handleConfirm(){
    this.setState({
      isOpen: false
    })
  }

  handleChangeSwitch = value => {
    let consume=this.state.consume;
    consume.type=value
    this.setState({consume:consume})
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
          title='??????'
          rightFirstIconType='bullet-list'
          onClickRgIconSt={this.handleAtDrawer.bind(this)}
        />
      <AtCard
        note='???Tips'
        extra='????????????'
        title='???????????????'
      >
        ?????????????????? ????????????????????????
      </AtCard>
      <AtDrawer
        show={this.state.isshow}
        mask
        right
        width='120px'
        onItemClick={this.selectDrawer.bind(this)}
        onClose={this.handleAtDrawer.bind(this)}
        items={['??????', '??????','??????']}
      >
      </AtDrawer>
      <AtModal
          isOpened={this.state.isOpen}
          // onClose={ this.handleClose.bind(this)}
          onCancel={this.handleClose.bind(this)}
          // closeOnClickOverlay={true}
        >
            <AtModalHeader>??????</AtModalHeader>
            <AtModalContent>
                    <AtForm>
              </AtForm>
            </AtModalContent>
        </AtModal>
      </ScrollView>
    )
  }
}
