import { resolve } from "path"

/**
 * 一个方法：生成
 * @param{string} message 
 * 
*/

interface IPriceData {
    /** 标识 */
    cbf: string
    /** id */
    id: string
    /** 市场价格 */
    m: string
    /** 后台价 */
    op: string
    /** 前台价 */
    p: string
}

type IPriceDataArray = IPriceData[]

function getPrice(){
    return new Promise<IPriceDataArray>((resolve)=>{
        
    })
}
