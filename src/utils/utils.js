/**
 * 格式化分页
 * @param {*} data 传入表格数据
 * @param {*} callback 回调方法
 */
export const pagination = (data, callback) => {
    return {
        onChange: current => {
            callback(current)
        },
        current: data.result.page,
        pageSize: data.result.page_size,
        total: data.result.total_count,
        showTotal: ()=>{
            return `共${data.result.total_count}条`
        },
        showQuickJumper: true
    }
}
