<template>
  <div>
    <h2>회원가입</h2>
    <form @submit.prevent="signupSubmit">
      <div>
        <label for="loginId">아이디:</label>
        <input type="text" id="loginId" v-model="loginId" required />
      </div>
      <div>
        <label for="password">비밀번호:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label for="nickname">닉네임:</label>
        <input type="text" id="nickname" v-model="nickname" required />
      </div>
      <button type="submit">가입하기</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginId: "",
      password: "",
      nickname: "",
    };
  },
  methods: {
    signupSubmit() {
      this.axios
        .post("http://localhost:8080/api/public/sign-up", {
          loginId: this.loginId,
          password: this.password,
          nickname: this.nickname,
        })
        .then(() => {
          this.$router.push({ path: "/login" });
        });
    },
  },
};
</script>
