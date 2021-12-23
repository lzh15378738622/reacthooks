/**
 *
 * reduce合并
 *
 */
import { combineReducers } from 'redux'

/*// 账户模块
import { account } from './account'
// 查看物流
import { express } from './express'
// 批量售后


import { batchAfterSale } from './batchAfterSale'
// 拼团详情
import { groupDetail } from './groupDetail'
 */
// app版本更新信息
import { appVersion } from './appVersion'

// // crm 答题活动
// import { experience } from './experience'
//
// // app转介绍
// import { inviteGift } from './inviteGift'
//
// // 周周分享
// import { weeklySign } from './weeklySign'

export default combineReducers({
  // account,
  // express,
  // batchAfterSale,
  // groupDetail,
  appVersion
  // experience,
  // inviteGift,
  // weeklySign,
})
