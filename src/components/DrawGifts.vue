<template>
    <div>
      <h2>隨機抽取禮物</h2>
      <!-- 如果使用者已抽過禮物，顯示抽到的項目 -->
      <div v-if="hasDrawn">
        <p>你已經抽過禮物！</p>
        <p>你抽到的禮物是：{{ selectedGift.name }}</p>
      </div>
      <!-- 如果尚未抽過禮物，顯示抽獎按鈕 -->
      <div v-else>
        <p v-if="availableGifts.length === 0">目前沒有可抽的禮物。</p>
        <button @click="drawGift" :disabled="availableGifts.length === 0">抽取</button>
      </div>
    </div>
  </template>
  
  <script>
  import { database } from '../firebase';
  import { ref, onValue, update } from 'firebase/database';
  
  export default {
    props: ['nickname'],
    data() {
      return {
        gifts: [],
        availableGifts: [],
        selectedGift: null,
        hasDrawn: false, // 紀錄使用者是否已抽過禮物
      };
    },
    methods: {
      drawGift() {
        if (this.availableGifts.length > 0) {
          const randomIndex = Math.floor(Math.random() * this.availableGifts.length);
          const gift = this.availableGifts[randomIndex];
  
          this.selectedGift = gift;
  
          // 更新資料庫，標記禮物為已抽取
          const giftRef = ref(database, `gifts/${gift.key}`);
          update(giftRef, {
            drawn: true,
            drawnBy: this.nickname, // 記錄抽取者
          });
  
          // 本地更新
          this.hasDrawn = true;
          this.availableGifts.splice(randomIndex, 1);
        } else {
          alert('沒有可抽的禮物了！');
        }
      },
    },
    mounted() {
      const giftsRef = ref(database, 'gifts');
      onValue(giftsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          this.gifts = Object.entries(data).map(([key, value]) => ({
            ...value,
            key,
          }));
          // 過濾出尚未被抽取，且不是自己的禮物
          this.availableGifts = this.gifts.filter(
            (gift) => !gift.drawn && gift.owner !== this.nickname
          );
  
          // 檢查是否已經抽取過禮物
          const drawnGift = this.gifts.find((gift) => gift.drawnBy === this.nickname);
          if (drawnGift) {
            this.selectedGift = drawnGift;
            this.hasDrawn = true;
          } else {
            this.hasDrawn = false;
          }
        } else {
          this.gifts = [];
          this.availableGifts = [];
        }
      });
    },
  };
  </script>
  