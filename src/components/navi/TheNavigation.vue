<template>
  <header>
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="../../assets/logo.png" width="60px" />
      </div>
      <div class="navbar-menu">
        <ul>
          <li>
            <router-link to="/login">로그인</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.navbar-logo {
  padding-top: 10px;
  padding-left: 10px;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

ul {
  padding-left: 0;
  padding-right: 20px;
}
</style>
