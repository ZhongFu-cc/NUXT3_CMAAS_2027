<template>
    <div class="common-section">
        <Title :title="`Gallery ${year}`"></Title>

        <div class="gallary-box">
            <NuxtImg v-for="image in images" :key="image.id" :src="image.src" :alt="image.alt" densities="x1 x2"
                width="200" class="gallery-image" loading="lazy" />
        </div>
    </div>
</template>
<script setup lang="ts">
import Title from '@/components/layout/Title.vue';


const route = useRoute();
const year = route.params.year as string;

const imageLength = computed(() => {
    return year === '2025' ? 41 : 36
})

const imageUrl = ref(`/img/${year}-WEBP`);


const images = computed(() => {
    return Array.from({ length: imageLength.value }, (_, i) => ({
        id: i + 1,
        src: `${imageUrl.value}/${year}-${i + 1}.webp`,
        alt: `圖片${i + 1}`
    }))
})


</script>
<style lang="scss" scoped>
.common-section {
    padding: 2rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .gallary-box {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;

        img {
            width: 200px;
            height: auto;
            border-radius: 8px;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.05);
            }
        }
    }
}
</style>