import { Component } from 'react'
import { View, Text ,Form,Label,Radio,Input} from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton ,AtActivityIndicator,AtNavBar} from 'taro-ui'
import './index.scss'
export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      loginName: '',
      loginPwd:'',
      isOpened:false,
      text:'登录'
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleChangeName (value) {
    this.setState({
      loginName:value
    })
  }
  handleChangePwd (value) {
    this.setState({
      loginPwd:value
    })
  }
  onSubmit (event) {
    console.log(this.state.loginName)
    console.log(this.state.loginPwd)
    this.setState({
      isOpened:true,
      text:''
    })
    setTimeout(() => {
      Taro.navigateTo({
        url: '/pages/pocket/statistics',
        })
    }, 550)
  }
  regeister () {
    console.log('regeister')
    setTimeout(() => {
      Taro.navigateTo({
        url: '/pages/base/regeister',
        })
    }, 550)
  }

  render () {
    return (
      <View className='index'>
        <AtNavBar
          // onClickRgIconSt={this.handleClick}
          // onClickRgIconNd={this.handleClick}
          // onClickLeftIcon={this.handleClick}
          color='#000'
          title='我的记账本'
          leftText=''
          rightFirstIconType=''
          rightSecondIconType=''
        />
        <AtForm
        onSubmit={this.onSubmit.bind(this)}
      >
        <AtInput 
          name='value' 
          title='账号' 
          type='text' 
          placeholder='请输入账号' 
          value={this.state.loginName} 
          onChange={this.handleChangeName.bind(this)} 
        />
        <AtInput 
          name='value' 
          title='密码' 
          type='password' 
          placeholder='请输入密码' 
          value={this.state.loginPwd} 
          onChange={this.handleChangePwd.bind(this)} 
        />

        <AtButton formType='submit'>{this.state.text}<AtActivityIndicator mode='center' isOpened={this.state.isOpened}></AtActivityIndicator></AtButton>
        <AtButton onClick={this.regeister}>注册</AtButton>
      </AtForm>
      </View>
    )
  }
}
