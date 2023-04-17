import { type VxeColumnPropTypes } from 'vxe-table/types/column'

const solts: VxeColumnPropTypes.Slots = {
  default: ({ row, column }) => {
    const cellValue = row[column.field]
    // 0-未登录,1-已登录，2-已冻结，3-请假
    const statusList = [{ id: 0, type: 'info', value: '不在线' }, { id: 1, type: 'success', value: '在线' }, { id: 3, type: 'primary', value: '已冻结' }]

    const type = statusList[cellValue].type
    const value = statusList[cellValue].value

    return [<span class={`el-tag el-tag--${type} el-tag--plain`}>{value}</span>]
  },
}

export default solts
