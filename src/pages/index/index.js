import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'

import { add, minus, asyncAdd } from '../../actions/counter'

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    }
  })
)
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Button onClick={this.props.add}>add</Button>
        <Button onClick={this.props.dec}>minus</Button>
        <Button onClick={this.props.asyncAdd}>async</Button>
        <Text>{this.props.counter.num}</Text>
      </View>
    )
  }
}
