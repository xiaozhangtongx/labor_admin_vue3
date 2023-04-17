import { type VxeColumnPropTypes } from 'vxe-table/types/column'
import { ElAvatar } from 'element-plus'

const solts: VxeColumnPropTypes.Slots = {
  default: ({ row, column }) => {
    const cellValue = row[column.field]
    return [
      <ElAvatar
      src={cellValue}
      />,
    ]
  },
}

export default solts
