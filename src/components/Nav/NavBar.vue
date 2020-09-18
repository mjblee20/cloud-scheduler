<template>
  <div class="navbar">
    <div class="brand">
      <h3>mScheduler</h3>
    </div>
    <div class="links">
      <li>
        <a href="/login">Login</a>
      </li>
      <li>
        <a href="/signup">Sign Up</a>
      </li>
      <li>Language</li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar {
  grid-row: 1;
  grid-column: 1 / span 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: #f3f3f3;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px 0 rgba(202, 202, 202, 0.5);
}

.brand {
  margin-left: 80px;
  color: #00a59a;
}

.links {
  display: flex;
  list-style-type: none;
  margin-right: 35px;
}

.links li {
  margin: 0 20px;
}
</style>