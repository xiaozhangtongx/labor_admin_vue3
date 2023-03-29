import { type VxeColumnPropTypes } from 'vxe-table/types/column'

const solts: VxeColumnPropTypes.Slots = {
  default: ({ row, column }) => {
    const cellValue = row[column.field]
    return [<img width={30} src={`${cellValue}`}/>]
  },
}

export default solts
