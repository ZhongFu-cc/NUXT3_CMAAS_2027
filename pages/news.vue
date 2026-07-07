<template>
    <main class="common-section">
        <Banner />
        <Breadcrumbs :first-route="'Home'" :secound-route="$t('news')" />

        <section class="hero-section">
            <Title :title="$t('latestNews')" />
        </section>

        <section class="news-container">
            <div v-for="item in newsList" :key="item.articleId" class="news-card" @click="goDetail(item.articleId)">
                <div class="news-meta">

                    <span class="date">
                        {{ item.announcementDate }}
                    </span>
                </div>

                <h3 class="news-title">
                    {{ item.title }}
                </h3>

                <p class="news-summary">
                    {{ item.description }}
                </p>

                <div class="news-footer">
                    <span>Read More</span>
                </div>
            </div>

            <div v-if="newsList.length === 0" class="empty-state">
                No news available.
            </div>
        </section>

        <section class="pagination-section">
            <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"
                v-model:current-page="currentPage" @current-change="getNews" />
        </section>
    </main>
</template>

<script setup lang="ts">
import Banner from '@/components/layout/Banner.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
import Title from '@/components/layout/Title.vue';

interface NewsItem {
    articleId: string,
    categoryId: string,
    asyncId: string,
    title: string,
    description: string,
    groupType: string,
    type: string,
    coverThumbnailUrl: string,
    announcementDate: string,
    content: string,
    views: number,
    createBy: string,
    createDate: string,
    updateBy: string,
    updateDate: string,
}

const router = useRouter();

const currentPage = ref(1);
const pageSize = 10;
const total = ref(0);

const newsList = ref<NewsItem[]>([]);

const getNews = async () => {
    try {
        let res = await CSRrequest.get(`/article/news/pagination`, {
            params: {
                page: currentPage.value,
                size: pageSize,
            }
        })
        newsList.value = res.data.records;
        total.value = res.data.total;
    } catch (error) {
        console.error('Error fetching news:', error);
    }
};

const goDetail = (id: string) => {
    router.push(`/news-item/${id}`);
};

onMounted(() => {
    getNews();
});
</script>

<style lang="scss" scoped>
.common-section {
    padding-bottom: 4rem;
}

.hero-section {
    width: min(100%, 1180px);
    margin: 2rem auto 0;
    padding: 0 1rem;
    text-align: center;
}

.hero-description {
    max-width: 720px;
    margin: 1rem auto 0;
    color: #7a6870;
    line-height: 1.8;
}

.news-container {
    width: min(100%, 1180px);
    margin: 2rem auto;
    padding: 0 1rem;

    display: grid;
    gap: 1.25rem;
}

.news-card {
    border-radius: 24px;
    padding: 1.5rem;
    cursor: pointer;

    background: linear-gradient(180deg,
            rgba(255, 255, 255, 0.98),
            rgba(251, 245, 246, 0.9));

    border: 1px solid rgba(160, 88, 106, 0.12);

    box-shadow: 0 10px 30px rgba(95, 61, 71, 0.08);

    transition: all .25s ease;
}

.news-card:hover {
    transform: translateY(-4px);

    box-shadow: 0 18px 40px rgba(95, 61, 71, 0.15);
}

.news-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1rem;
}

.tag {
    padding: 0.35rem 0.75rem;

    border-radius: 999px;

    font-size: 12px;
    font-weight: 700;

    color: white;
    background: #a0586a;
}

.date {
    color: #8c7b82;
    font-size: 14px;
}

.news-title {
    margin: 0;

    color: #2f2528;
    font-size: 1.35rem;
    font-weight: 700;
}

.news-summary {
    margin-top: 1rem;

    color: #66585d;
    line-height: 1.8;
}

.news-footer {
    margin-top: 1rem;

    display: flex;
    justify-content: flex-end;

    color: #a0586a;
    font-weight: 600;
}

.empty-state {
    padding: 4rem 0;
    text-align: center;
    color: #888;
}

.pagination-section {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}
</style>
`