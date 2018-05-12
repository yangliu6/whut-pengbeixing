import Mock from 'mockjs'
import user from './data/user'

Mock.mock(/\/ajax_analysis/, 'get', user.getAccounts)

export default Mock