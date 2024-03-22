<template>
  <div class="container">
    <section class="social-login">
      <h2 class="title">소셜로그인</h2>
      <button class="image-button" @click="loginKakao()">
        <img src="../../assets/kakao_login.png" />
      </button>
      <button class="image-button">
        <img src="../../assets/naver_login.png" />
      </button>
    </section>
    <div class="divider-container">
      <hr class="section-divider" />
    </div>
    <section>
      <button class="sign-up" height="">회원가입</button>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    loginKakao() {
      this.axios
        .get("http://localhost:8080/oauth2/authorization/kakao")
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
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
button {
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
