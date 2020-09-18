<template>
  <!-- Login Failed Page? -->
  <div class="login-fail-container">
    <div class="content-container">
      <h1 class="brand">mScheduler</h1>
      <h1 class="title">您的連結已失效</h1>
      <span class="content">請進登入頁，點選「忘記密碼」</span>
      <span class="content">系統將重新寄送密碼驗證信至您的信箱</span>
      <button>
        <a href="/login">登入</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginFail',
};
</script>

<style scoped>
.login-fail-container {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
.content-container {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  align-items: center;
}
.content {
  text-align: center;
}
.brand {
  color: #00a59a;
}
.title {
  margin: 30px;
}
button {
  margin-top: 45px;
  width: 200px;
  height: 50px;
  border-radius: 4px;
  background-color: #00a59a;
  border: none;
}
button a {
  text-decoration: none;
  color: white;
}
</style>