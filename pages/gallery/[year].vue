<template>
    <div class="common-section">
        <Banner></Banner>
        <Title :title="`Gallery ${year}`"></Title>


        <div class="gallary-box">
            <el-image v-for="(image, index) in images" :key="image.id" :src="getOptimizedUrl(image.src, 1020)"
                :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :preview-src-list="largeImageUrls" show-progress
                :initial-index="index" fit="cover" class="gallery-image" loading="lazy" :preview-teleported="true" />
        </div>


    </div>
</template>

<script setup lang="ts">
import Title from '@/components/layout/Title.vue';
import Banner from '~/components/layout/Banner.vue';

useSeoMeta({
    title: 'Gallery - TOPBS Taiwan Oncoplastic Breast Surgery Society',
    description: 'Browse the gallery of images from the TOPBS Taiwan Oncoplastic Breast Surgery Society. Explore memories from the conference.',
    keywords: 'Gallery,TOPBS,TOPBS 2026,2026 TOPBS'
})

const route = useRoute();
const year = route.params.year as string;
const imageLength = 34;
const imageUrl = ref(`/img/${year}-WEBP`);

// 1. 引入 Nuxt Image 的優化工具方法
const img = useImage();

// 封裝一個工具函式，用來動態產生不同大小的 WebP 網址
const getOptimizedUrl = (src: string, width: number) => {
    return img(src, { width, format: 'webp', quality: 80 });
};

const images = computed(() => {
    return Array.from({ length: imageLength }, (_, i) => ({
        id: i + 1,
        src: `${imageUrl.value}/${year}-${i + 1}.webp`,
        alt: `圖片${i + 1}`
    }))
})

// 2. 核心效能優化：預先計算出所有圖片「放大後」的高清大圖網址列表（例如限制寬度 1200px）
// 這樣傳給 el-image 之後，點擊時它才去載入這張 1200px 的優化圖，而不是動輒數 MB 的原圖
const largeImageUrls = computed(() => {
    return images.value.map(imgItem => getOptimizedUrl(imgItem.src, 1200));
})
</script>
<style lang="scss" scoped>
.common-section {
    // padding: 2rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .gallary-box {
        width: 80%;
        display: grid;
        gap: 1rem;
        justify-content: center;
        margin: 1rem 0 3rem 0;

        grid-template-columns: repeat(1, 1fr);

        @media (min-width: 480px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 780px) {
            grid-template-columns: repeat(4, 1fr);
        }

        @media (min-width: 1080px) {
            grid-template-columns: repeat(6, 1fr);
        }

        .el-image {
            border-radius: 8px;
            transition: transform 0.3s ease;

            &:hover {
                border-radius: 8px;
                transform: scale(1.05);
            }
        }
    }

    .preview-dialog {
        width: 80%;
        max-width: 800px;
        padding: 0 !important;
    }


}
</style>