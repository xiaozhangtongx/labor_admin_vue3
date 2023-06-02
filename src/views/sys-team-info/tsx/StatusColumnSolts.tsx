import { type VxeColumnPropTypes } from 'vxe-table/types/column'

const solts: VxeColumnPropTypes.Slots = {
  default: ({ row, column }) => {
    const cellValue = row[column.field]
    // 0-禁言,1-正常
    const statusList = [{ id: 0, type: 'info', value: '禁言' }, { id: 1, type: 'success', value: '正常' }]

    const type = statusList[cellValue].type
    const value = statusList[cellValue].value

    return [<span class={`el-tag el-tag--${type} el-tag--plain`}>{value}</span>]
  },
}

export default solts
