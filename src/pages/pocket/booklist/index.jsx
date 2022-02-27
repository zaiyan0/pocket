import { Component } from 'react'
import { View, Text ,Form,Label,Radio,Input, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton,AtNavBar ,AtList,AtListItem,AtModal,AtSearchBar,AtFab,AtTimeline} from 'taro-ui'
import './index.scss'
export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      isOpen: false
    }
  }

  componentWillMount () { }

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleChange (value) {
    this.setState({
      value
    })
  }
  onSubmit (event) {
    console.log(this.state.value)
    this.handleClick();
  }
  onReset (event) {
    this.setState({
      value: '',
    })
  }

  handleClick () {
    console.log('regeister')
    setTimeout(() => {
      Taro.navigateTo({
        url: '/pages/index/index',
        })
    }, 550)
  }

  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }

  render () {
    return (
      <View>
         <AtSearchBar
          actionName='搜索'
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onActionClick.bind(this)}
        />
         <div className='little'>2022-02-26</div>
        <AtList>
          <AtListItem
            title='外卖'
            note='18:36'
            extraText='30 ￥'
            //arrow='right'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
          />
          <AtListItem
            title='外卖'
            note='18.50'
            //arrow='right'
            iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
          />
        </AtList>
        <div className='little'>2022-02-27</div>
        <AtList>
          <AtListItem
            title='外卖'
            note='18:36'
            extraText='30 ￥'
            //arrow='right'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
          />
          <AtListItem
            title='外卖'
            note='18.50'
            //arrow='right'
            iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
          />
        </AtList>
      </View>
    )
  }
}
