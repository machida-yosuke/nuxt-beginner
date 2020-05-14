<template>
  <section class="container">
    <h2>index Page</h2>
    <ul>
      <li><nuxt-link to='/login'>ログインページへ</nuxt-link></li>
      <li><nuxt-link to='/authed-route'>認証が必要なページ</nuxt-link></li>
    </ul>
    <div>
      <h3>nuxt js のタグ</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h4>
            <span>{{ item.title }}</span>
            <small>
              <span>by</span>
              <nuxt-link :to="`/users/${item.user.id}`">{{
                item.user.id
              }}</nuxt-link>
            </small>
          </h4>
          <div>{{ item.body.slice(0, 130) }}</div>
          <p>
            <a :href="item.url">{{ item.url }}</a>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["items"])
  },
  async asyncData({ store }) {
    if (store.getters["items"].length) {
      return;
    }
    await store.dispatch("fetchItems");
  }
};
</script>
<style>
.container {
  min-height: 100vh;
  padding: 16px;
}
h3 {
  margin: 16px 0;
  padding: 8px 0;
  border-bottom: solid 1px #e5e5e5;
}
li + li {
  margin: 16px 0;
}
p {
  margin: 8px 0;
}
</style>
