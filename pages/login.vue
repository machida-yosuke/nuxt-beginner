<template>
  <div>
    <h2>ログインページ</h2>
    <p>
      <button type='button' @click="login">ログイン</button><br>
      <nuxt-link to='/'>topへ</nuxt-link>
    </p>
    
  </div>
</template>

<script>
import Cookies from "universal-cookie";
export default {
  methods:{
    login(){
      const cookie = new Cookies();
      cookie.set('credential', 'true',{maxAge:90})
      this.$router.push('/')
    }
  }
}
</script>