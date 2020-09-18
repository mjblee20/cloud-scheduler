<template>
  <div class="home-container">
    <NavBar />
    <div class="main">
      <div class="promotion">
        <h1 class="promo-header">預約看診，</h1>
        <h1 class="promo-header">從未如此簡單</h1>

        <!-- Scheduling Appointments Has Never Been Easier -->
        <p class="promo-content">全國首創診所掛號 All in One 整合平台，簡化醫療流程，完善行動醫療整合服務。</p>
        <!-- World's first All-in-On Integration Platform designed for Clinic Registration. Simplified -->
        <button class="start-btn">Get Started</button>
      </div>
    </div>

    <div class="info">
      <img src alt />
      <div class="description">
        <div class="description-title">
          <h1>mScheduler</h1>
          <h1>線上掛號平台</h1>
        </div>
        <!-- mScheduler - Online Registration Platform -->
        <span>無論你在哪裡，只要透過 mShceduler 平台，就能快速預約你最喜愛的診所，以及適合的時間，減少您不必要的等待。</span>
        <!-- No matter where you are, mScheduler platform enables swift registration for an appointment during a time most convenient for you at your favorite clinic, reducing unnecessary wait time. -->
      </div>
    </div>

    <div class="footer">© Copyright 2018 Advmeds Inc. All rights reserved.</div>
  </div>
</template>

<script>
import NavBar from '../components/Nav/NavBar';

export default {
  name: 'Home',
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.home-container {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 70px 600px 500px 60px;
}

.main {
  grid-row: 2;
  grid-column: 2;
  height: 600px;
  background: grey;
  color: white;
}

.promotion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15% 50% 15% 10%;
}

.promo-header {
  font-size: 3em;
}

.promo-content {
  margin: 20px 0 30px 0;
  font-size: 18px;
}

.start-btn {
  background: #00a59a;
  width: 180px;
  height: 40px;
  border: none;
  border-radius: 20px;
  color: white;
}

.info {
  grid-row: 3;
  grid-column: 2;
  display: grid;
  grid-template-columns: 370px 1fr;
  height: 410px;
  background: lightgrey;
  margin: 40px 0;
}

.info img {
  float: left;
  height: 410px;
  width: 370px;
  background: grey;
  opacity: 0.5;
}

.description {
  position: relative;
  padding: 12% 20%;
  font-size: 18px;
}

.description-title {
  font-size: 1em;
  margin-bottom: 40px;
}

.footer {
  grid-row: 4;
  grid-column: 1 / span 3;
  height: 60px;
  background: #4a4a4a;
  display: grid;
  place-items: center;
  color: white;
}
</style>