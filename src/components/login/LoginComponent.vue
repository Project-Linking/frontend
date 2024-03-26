<template>
  <div class="container">
    <section>
      <div>
        <h2>로그인</h2>
        <form @submit.prevent="signupSubmit">
          <div>
            <label for="loginId">아이디:</label>
            <input type="text" id="loginId" v-model="loginId" required />
          </div>
          <div>
            <label for="password">비밀번호:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>
    </section>
    <section class="social-login">
      <h2 class="title">소셜로그인</h2>
      <a
        class="image-button"
        href="http://localhost:8080/oauth2/authorization/kakao"
      >
        <img src="../../assets/kakao_login.png" />
      </a>
      <a
        class="image-button"
        href="http://localhost:8080/oauth2/authorization/naver"
      >
        <img src="../../assets/naver_login.png" />
      </a>
    </section>
    <div class="divider-container">
      <hr class="section-divider" />
    </div>
    <section>
      <router-link class="image-button" to="/sign-up">회원가입</router-link>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  text-align: center;
}
.divider-container {
  width: 100%;
  max-width: 300px; /* 구분선의 최대 너비 설정 */
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh; /* 화면의 높이를 100%로 설정하여 화면 전체를 차지하도록 합니다. */
}
a {
  display: block;
}
.image-button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: 10px;
}

.section-divider {
  width: 100%;
  margin: 20px 0; /* 구분선 위아래 여백 설정 */
  border: none;
  border-top: 1px solid #ccc; /* 구분선 색상 설정 */
}

.image-button img {
  width: 55vw;
  height: auto;
}

.sign-up {
  background: linear-gradient(to right, #6b3e91, #4aa9c8);
  border: none;
  cursor: pointer;
  padding: 10px 20px; /* 버튼 내부 여백 조정 */
  border-radius: 5px; /* 버튼 모서리를 둥글게 만듭니다. */
  width: 55vw;
  height: auto;
  color: white;
}
</style>
