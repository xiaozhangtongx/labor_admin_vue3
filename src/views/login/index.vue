<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Key, Loading, Lock, Picture, User } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useUserStore } from '@/store/modules/user'
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'

import { type ILoginRequestData } from '@/api/login/types/login'

const router = useRouter()
const loginFormRef = ref<FormInstance | null>(null)

/** 登录按钮 Loading */
const loading = ref(false)
/** 验证码图片 URL */
const codeUrl = ref('')

/** 登录表单数据 */
const loginForm: ILoginRequestData = reactive({
  phoneNum: '15873976550',
  password: '123456',
  code: '1234',
})
/** 创建验证码 */
const createCode = () => {
  // 先清空验证码的输入
  loginForm.code = ''
  // 获取验证码
  codeUrl.value = 'https://dummyimage.com/100x40/dcdfe6/000000.png&text=1234'
}
/** 登录表单校验规则 */
const loginFormRules: FormRules = {
  phoneNum: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
  ],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
}
/** 登录逻辑 */
const handleLogin = () => {
  loginFormRef.value?.validate((valid: boolean) => {
    if (valid) {
      loading.value = true
      useUserStore()
        .login({
          phoneNum: loginForm.phoneNum,
          password: loginForm.password,
          code: loginForm.code,
        })
        .then(() => {
          router.push({ path: '/' })
        })
        .catch(() => {
          createCode()
          loginForm.password = ''
        })
        .finally(() => {
          loading.value = false
        })
    }
    else {
      return false
    }
  })
}

/** 初始化验证码 */
createCode()
</script>

<template>
  <div class="login-container">
    <ThemeSwitch class="theme-switch" />
    <div class="login-card">
      <div class="title">
        <img src="@/assets/layout/logo-text-2.png">
      </div>
      <div class="content">
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginFormRules"
          @keyup.enter="handleLogin"
        >
          <el-form-item prop="phoneNum">
            <el-input
              v-model.trim="loginForm.phoneNum"
              placeholder="手机号"
              type="text"
              tabindex="1"
              :prefix-icon="User"
              size="large"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model.trim="loginForm.password"
              placeholder="密码"
              type="password"
              tabindex="2"
              :prefix-icon="Lock"
              size="large"
              show-password
            />
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              v-model.trim="loginForm.code"
              placeholder="验证码"
              type="text"
              tabindex="3"
              :prefix-icon="Key"
              maxlength="7"
              size="large"
            >
              <template #append>
                <el-image :src="codeUrl" draggable="false" @click="createCode">
                  <template #placeholder>
                    <el-icon><Picture /></el-icon>
                  </template>
                  <template #error>
                    <el-icon><Loading /></el-icon>
                  </template>
                </el-image>
              </template>
            </el-input>
          </el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            size="large"
            @click.prevent="handleLogin"
          >
            登 录
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  .theme-switch {
    position: fixed;
    top: 5%;
    right: 5%;
    cursor: pointer;
  }
  .login-card {
    width: 480px;
    border-radius: 20px;
    box-shadow: 0 0 10px #dcdfe6;
    background-color: #fff;
    overflow: hidden;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      img {
        height: 100%;
      }
    }
    .content {
      padding: 20px 50px 50px 50px;
      :deep(.el-input-group__append) {
        padding: 0;
        overflow: hidden;
        .el-image {
          width: 100px;
          height: 40px;
          border-left: 0px;
          user-select: none;
          cursor: pointer;
          text-align: center;
        }
      }
      .el-button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
}
</style>