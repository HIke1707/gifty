<template>
  <div>
    <div v-if="!nickname">
      <h2>請輸入你的暱稱登入</h2>
      <input v-model="tempNickname" placeholder="暱稱" />
      <button @click="login">登入</button>
    </div>
    <div v-else>
      <p>歡迎，{{ nickname }}！</p>
      <GiftInput :nickname="nickname" />
      <DrawGifts :nickname="nickname" />
    </div>
  </div>
</template>

<script>
import GiftInput from './components/GiftInput.vue';
import DrawGifts from './components/DrawGifts.vue';

export default {
  data() {
    return {
      nickname: localStorage.getItem('nickname') || '',
      tempNickname: '',
    };
  },
  methods: {
    login() {
      if (this.tempNickname.trim()) {
        this.nickname = this.tempNickname.trim();
        localStorage.setItem('nickname', this.nickname);
        this.tempNickname = '';
      }
    },
  },
  components: {
    GiftInput,
    DrawGifts,
  }
};
</script>
