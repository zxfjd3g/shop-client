<template>
  <div class="registerArea">
    <h3>
      注册新用户
      <span class="go">
        我有账号，去
        <router-link to="/login">登陆</router-link>
      </span>
    </h3>
    <div class="info">
      <form class="sui-form form-horizontal">
        <div class="control-group">
          <label class="control-label">手机号：</label>
          <div class="controls">
            <input
              type="text"
              placeholder="请输入你的手机号"
              class="input-xfat input-xlarge"
              v-model="mobile"
            />
          </div>
        </div>
        <div class="control-group">
          <label for="inputPassword" class="control-label">验证码：</label>
          <div class="controls">
            <input
              type="text"
              placeholder="验证码"
              class="input-xfat input-xlarge"
              v-model="code"
            />
            <img ref="code" @click="updateCode" src="/api/user/passport/code" alt="code">
          </div>
        </div>
        <div class="control-group">
          <label for="inputPassword" class="control-label">登录密码：</label>
          <div class="controls">
            <input
              type="password"
              placeholder="设置登录密码"
              class="input-xfat input-xlarge"
              v-model="password"
            />
          </div>
        </div>
        <div class="control-group">
          <label for="inputPassword" class="control-label">确认密码：</label>
          <div class="controls">
            <input
              type="password"
              placeholder="再次确认密码"
              class="input-xfat input-xlarge"
              v-model="password2"
            />
          </div>
        </div>
        <div class="control-group">
          <label for="inputPassword" class="control-label"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label
          >
          <div class="controls">
            <input name="m1" type="checkbox" v-model="agree"/>
            <span>同意协议并注册《尚品汇用户协议》</span>
          </div>
        </div>
        <div class="control-group">
          <label class="control-label"></label>
          <div class="controls btn-reg" @click="register">
            <span class="sui-btn btn-block btn-xlarge btn-danger">完成注册</span>
          </div>
        </div>
      </form>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      mobile: '',
      password: '',
      password2: '',
      code: '',
      agree: true
    };
  },
  methods: {
    register() {
      const { mobile, password, password2, code, agree, callback } = this
      // 表单验证

      this.$store.dispatch('register', { mobile, password, code, callback })
    },
    callback(errorMsg) {
      if (!errorMsg) {
        this.$router.replace('/login')
      } else {
        alert(errorMsg)
      }
    },

    updateCode () {
      this.$refs.code.src = `/api/user/passport/code?time=${Date.now()}`
    }
  }
}
</script>

<style lang="stylus" scoped>
.logoArea {
  height: 78px;
}
a {
  color: #666;
}
.btn-danger:active,
.btn-danger.active,
.btn-danger:hover,
.btn-danger:focus {
  background-color: #e1251b;
  border: 1px solid #e1251b;
}
.logo {
  background: url(./img/icons.png) no-repeat;
  width: 182px;
  height: 78px;
  position: absolute;
  background-position: -367px 4px;
}
.registerArea {
  margin: 15px 0;
  border: 1px solid #dfdfdf;
  font-family: "微软雅黑";
}
.registerArea h3 {
  background: #ececec;
  margin: 0;
  padding: 6px 15px;
  color: #333;
  border-bottom: 1px solid #dfdfdf;
}
h3 .go {
  font-size: 14px;
  float: right;
}
h3 .go a{
    color:#e1251b;
}
.btn-reg {
  width: 270px;
}
.info {
  width: 600px;
  margin: 40px auto;
}
.control-label {
  font-size: 14px;
}
.sui-form input[type="text"].input-xfat.input-xlarge,
.sui-form input[type="password"].input-xfat.input-xlarge {
  width: 250px;
  border-radius: 0;
  border: 1px solid #999;
  height: 24px;
}
.sui-form .control-group label {
  *display: inline;
  *zoom: 1;
  *float: left;
}
#submit {
  padding: 5px 80px;
  font-family: "微软雅黑";
  background-color: #e1251b;
}
.reg {
  width: 221px;
}
.zhuce {
  *width: 221px;
  float: right;
}
.btn-reg .btn-danger {
  background-color: #e1251b;
  border: 1px solid #e1251b;
  padding: 6px;
  border-radius: 0;
  font-size: 16px;
  font-family: "微软雅黑";
  word-spacing: 4px;
}
.copyright {
  text-align: center;
  line-height: 24px;
}
.copyright ul li {
  list-style-type: none;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  border-right: 1px solid #e4e4e4;
  padding: 0 20px;
  margin: 15px 0;
}
.copyright ul li:last-child {
  border-right: 0;
}
</style>
