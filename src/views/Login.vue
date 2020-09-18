<template>
  <div class="login-container">
    <div>
      <div class="login-header">
        <h1 class="main-head">mScheduler</h1>
        <h1 class="sub-head">Login</h1>
      </div>
      <div class="login">
        <LoginForm />
        <ForgotPasswordModal />
        <div class="dropdown">dropdown</div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/Login/LoginForm';
import ForgotPasswordModal from '../components/Login/ForgotPasswordModal';

export default {
  name: 'Login',
  components: {
    LoginForm,
    ForgotPasswordModal,
  },
};
</script>

<style scoped>
.login-container {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.login-header {
  text-align: center;
  margin-bottom: 25px;
}

.main-head {
  color: #00a59a;
}

.sub-head {
  font-size: 1em;
  color: #6d6d6d;
}

.login {
  margin-bottom: 80px;
}
</style>