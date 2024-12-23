<template>
<div>
    <h2>輸入你的禮物</h2>
    <input v-model="gift" placeholder="輸入禮物名稱" />
    <button @click="addGift">新增</button>
    <ul>
    <li v-for="(item, index) in gifts" :key="index">{{ item.name }}</li>
    </ul>
</div>
</template>

<script>
import { database } from '../firebase';
import { ref, push, onValue } from 'firebase/database';

export default {
name:'GiftInput',
props: ['nickname'],
data() {
    return {
    gift: '',
    gifts: [],
    };
},
methods: {
    addGift() {
    if (this.gift.trim()) {
        const giftsRef = ref(database, 'gifts');
        push(giftsRef, {
        name: this.gift.trim(),
        owner: this.nickname, // 記錄擁有者
        drawn: false,
        drawnBy: null,
        });
        this.gift = '';
    }
    },
},
mounted() {
    const giftsRef = ref(database, 'gifts');
    onValue(giftsRef, (snapshot) => {
    const data = snapshot.val();
    this.gifts = data
        ? Object.entries(data).map(([key, value]) => ({
            ...value,
            key,
        }))
        : [];
    });
},
};
</script>
  