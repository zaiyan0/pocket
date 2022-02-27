import { Component } from 'react'
import { View, Text ,Form,Label,Radio,Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton,AtNavBar } from 'taro-ui'
import './index.scss'
export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      value: ''
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

  render () {
    return (
      <View >
        <AtNavBar
          onClickLeftIcon={this.handleClick}
          color='#000'
          title='注册'
          leftIconType=''
          leftText='返回'
          // rightFirstIconType='bullet-list'
          // rightSecondIconType='user'
        />
       <AtForm
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
        >
        <AtInput 
          name='value' 
          title='账号' 
          type='text' 
          placeholder='请输入账号' 
          value={this.state.value} 
          onChange={this.handleChange.bind(this, 'value')} 
        />
        <AtInput 
          name='value' 
          title='密码' 
          type='text' 
          placeholder='请输入密码' 
          value={this.state.value} 
          onChange={this.handleChange.bind(this, 'value')} 
        />
        <AtInput 
          name='value' 
          title='确认密码' 
          type='text'
          placeholder='请再次输入密码' 
          value={this.state.value} 
          onChange={this.handleChange.bind(this, 'value')} 
        />
        <AtInput 
          name='value' 
          title='手机号' 
          type='number'
          maxLength='11'
          minLexgth='11'
          placeholder='请输入手机号码' 
          value={this.state.value} 
          onChange={this.handleChange.bind(this, 'value')} 
        />
        <AtButton formType='submit'>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
      </AtForm>
      </View>
    )
  }
}
