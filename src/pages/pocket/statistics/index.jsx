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
          note=''
          extra=''
          title='??????????????????????????????'
        >
          <View className='at-row'>
            <View className='page-section at-col at-col-6'>
              <View>
                <Picker mode='date' onChange={this.onDateChange}>
                  <View className='picker'>
                    {this.state.dateSel}
                  </View>
                </Picker>
              </View>
            </View>
            <View className='at-col at-col-6'>
              <Text>?????????3000.00???</Text>
            </View>
          </View>
        </AtCard>
      
        <AtTabs
          current={this.state.currentTab}
          scroll
          tabList={[
            { title: '???????????????' },
            { title: '?????????????????????' },
            { title: '+ ??????' },
            // { title: '?????????4' },
            // { title: '?????????5' },
            // { title: '?????????6' }
          ]}
          onClick={this.handleClickTab.bind(this)}>
          <AtTabsPane current={this.state.currentTab} index={0}>
            <Booklist/>
          </AtTabsPane>
          <AtTabsPane current={this.state.currentTab} index={1}>
            <Booklist/>
          </AtTabsPane>
          <AtTabsPane current={this.state.currentTab} index={2}>
            <View style='font-size:18px;text-align:center;height:100px;'>????????????</View>
          </AtTabsPane>
        </AtTabs>
        {this.state.currentTab<1?<AtFab className='feb'>
          <Text className='at-fab__icon at-icon at-icon-add' onClick={this.openModal.bind(this)}></Text>
      </AtFab>:<div></div>}
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
                    <AtForm
                // onSubmit={this.onSubmit.bind(this)}
                // onReset={this.onReset.bind(this)}
              >
                <AtInput 
                  name='value' 
                  title='??????' 
                  type='date' 
                  placeholder='????????????' 
                  value={this.state.consume.date} 
                  // onChange={this.handleChange.bind(this, 'value')} 
                />
                {/* <AtInput 
                  name='value' 
                  title='??????' 
                  type='text' 
                  placeholder='????????????' 
                  value={this.state.value} 
                  // onChange={this.handleChange.bind(this, 'value')} 
                /> */}
                <AtSwitch title='??????/??????' checked={this.state.consume.type} onChange={this.handleChangeSwitch.bind(this)} />
                <AtInput 
                  name='value' 
                  title='??????' 
                  type='number' 
                  placeholder=''
                  value={this.state.consume.free} 
                  // onChange={this.handleChange.bind(this, 'value')} 
                />
                <AtModalAction className='modalaction'><AtButton  type='secondary' onClick={this.handleClose.bind(this)}>??????</AtButton>
                <AtButton  type='primary' onClick={this.handleConfirm.bind(this)}>??????</AtButton></AtModalAction>
              </AtForm>
            </AtModalContent>
        </AtModal>
      </ScrollView>
    )
  }
}
