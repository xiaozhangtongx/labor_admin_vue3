import { type VxeColumnPropTypes } from 'vxe-table/types/column'
import { toRaw } from 'vue'

const solts: VxeColumnPropTypes.Slots = {

  default: ({ row }) => {
    const roles: [] = toRaw(row.roles)

    const type = 'warning'
    // eslint-disable-next-line max-statements-per-line
    if (roles.length === 0) { return [<span class={`el-tag el-tag--${type} el-tag--plain`}>劳工</span>] }
    else {
      const types = roles.map((role: any) => {
        const type = role.roleCode === 'admin' ? '' : 'warning'
        return <span class={`el-tag el-tag--${type} el-tag--plain`}>{role.roleName}</span>
      })

      return types
    }
  },
}

export default solts
