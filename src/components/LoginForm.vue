<template>
  <div class="form-container">
    <form action>
      <div class="usr-grp">
        <label for="username" class="sr-only">Username</label>
        <div class="icon" id="usr-icon"></div>
        <input
          @focus="changeUserIconBorder()"
          @blur="changeIconBorder()"
          type="text"
          name="username"
          placeholder="username"
          ref="usr"
        />
      </div>
      <div class="pwd-grp">
        <label for="password" class="sr-only">Password</label>
        <div class="icon" id="pwd-icon"></div>
        <input
          @focus="changePwdIconBorder()"
          @blur="changeIconBorder()"
          type="text"
          name="password"
          placeholder="password"
          ref="pwd"
        />
      </div>
      <div class="login-options">
        <div>
          <input type="checkbox" name="stayLoggedIn" />
          <label for="stayLoggedIn" class="label-font-size">Stay Signed In</label>
        </div>

        <button class="forgot-pwd">Forgot Password?</button>
      </div>
      <div class="btn-group">
        <div class="top">
          <button class="create-btn">Create Account</button>
          <button class="login-btn">Login</button>
        </div>
        <button class="fb-login">Login via Facebook</button>
        <!-- <div id="fb-root">
          <div
            class="fb-login-button"
            data-size="large"
            data-button-type="login_with"
            data-layout="default"
            data-auto-logout-link="false"
            data-use-continue-as="false"
            data-width
          ></div>
        </div>-->
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  methods: {
    changeUserIconBorder() {
      document.getElementById('usr-icon').style.borderColor = '#00a59a';
    },
    changePwdIconBorder() {
      document.getElementById('pwd-icon').style.borderColor = '#00a59a';
    },
    changeIconBorder() {
      document.getElementById('usr-icon').style.borderColor = '#6d6d6d';
      document.getElementById('pwd-icon').style.borderColor = '#6d6d6d';
    },
  },
};
</script>

<style scoped>
.form-container > form {
  height: 300px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0 2px 11px 0 rgba(124, 124, 124, 0.5);
  padding: 30px 40px;
}

.usr-grp,
.pwd-grp {
  display: flex;
  align-items: center;
}
/* 
.usr-grp:focus-within,
.pwd-grp:focus-within {
} */

.icon {
  height: 40px;
  width: 40px;
  border-radius: 3px 0 0 3px;
  border: solid 1px #6d6d6d;
}

input[type='text'] {
  height: 2.5em;
  width: 231px;
  margin: 10px 0 10px -1px;
  padding: 0px 10px;
  font-size: 1em;
  border-radius: 0 3px 3px 0;
  border: solid 1px #6d6d6d;
}

input[type='text']:focus {
  outline: none;
  border: solid 1px #00a59a;
}

.login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-options > div {
  display: flex;
  align-items: center;
}

input[type='checkbox'] {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: solid 1px #d9d9d9;
  background-color: #f3f3f3;
  margin: 8px;
}

.label-font-size {
  font-size: 14px;
  color: #6d6d6d;
}

.forgot-pwd {
  background: transparent;
  border: none;
  color: #00a59a;
  font-size: 14px;
}

.create-btn {
  width: 130px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #00a59a;
  background: white;
  margin: 5px 5px 5px 0;
  color: #00a59a;
}

.login-btn {
  width: 130px;
  height: 40px;
  color: white;
  border-radius: 4px;
  border: solid 1px #00a59a;
  background-color: #00a59a;
  margin: 5px 0 5px 5px;
}

.fb-login {
  margin: 5px 0;
  width: 270px;
  height: 40px;
  color: white;
  border-radius: 4px;
  background-color: #39579a;
  border: none;
}
</style>