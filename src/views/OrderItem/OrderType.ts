// 分别对应 绿色 灰色 橙色 红色
export type OrderState = "success" | "info" | "warning" | "danger" | undefined
export type StateTextConten = "已签收" | "未发货" | "已发货" | "已退单" | "异常"
export type StateCode = '0' | '1' | '2' | '3' | '4'
/**
 * 红色表示异常
 * 橙色表示未发货 #F69500 字体颜色 #e6a23c
 * 绿色表示已签收 #e1f3d8 字体颜色 
 * 灰色表示退单 
 */
 export interface OrderData{
    userName:string, //用户名称
    date:string,//下单日期
    ProductName:string,//产品名称
    address : string //商品发往的地址
    orderNumber:string //订单编号
    // OnStateColor:OrderState, //标签的颜色
    // StateText:StateTextConten , //标签的文本
    quantity:string //商品的数量
    price : string //价格
    OrderState:StateCode //订单状态
    expressBill:string //快递单号
}

