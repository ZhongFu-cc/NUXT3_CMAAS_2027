<template>
    <div class="news-section">
        <Banner></Banner>

        <div class="main-box">
            <div class="title-box">
                <div class="title-image-box">
                    <img class="home-banner-bak" src="../assets/img/EmojiObjectsOutlined.svg">
                </div>
                <h1 class="title">News</h1>
            </div>

            <div class="header-box">
                <h5>Title</h5>
                <h5>Date</h5>
            </div>
            <ul class="news-list">
                <li class="news-item" v-for="(item, index) in newsList.records" :key="index"
                    @click="headToNews(item.articleId)" :class="{ 'last-one': item.isRecent }">
                    <div class="news-title">
                        <nuxt-link to="">{{ item.title }}</nuxt-link>
                    </div>
                    <div class="news-date">{{ item.announcementDate }}</div>
                </li>
            </ul>

            <div class="pagination-box">
                <el-pagination :class="clickBtn" layout="prev, pager, next" :total="Number(newsList.total)"
                    @current-change="changePage" @prev-click="handlePageClick('prev')"
                    @next-click="handlePageClick('next')" />
            </div>
        </div>


    </div>
</template>
<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';

useSeoMeta({
    title: 'News - 9th IOPBS & TOPBS 2025 International Conference on Oncoplastic Breast Surgery',
    description: 'Stay updated with the latest news and announcements for the 9th IOPBS & TOPBS 2025 International Conference on Oncoplastic Breast Surgery. This page provides the latest articles and updates related to the conference.',
    keywords: 'News, Latest News, 9th IOPBS, IOPBS 2025, TOPBS 2025, 2025 IOPBS, 2025 TOPBS '
})

const router = useRouter()

let newsList = reactive<any>([])
let currentPage = ref(1)

const changePage = (page: number) => {
    console.log("頁碼變更", page)
    currentPage.value = page
    getNewsList()
}

const clickBtn = ref('')
const handlePageClick = (option: string) => {
    clickBtn.value = option
}


const getNewsList = async () => {
    let res = await CSRrequest.get('/article/news/pagination', {
        params: {
            page: currentPage.value,
            size: 10
        }
    })
    res.data.records.forEach((item: any) => {
        // item.announcementDate = item.announcementDate.split(' ')[0]
        if (item.announcementDate && (new Date(item.announcementDate).getTime() >= Date.now() - 7 * 24 * 60 * 60 * 1000)) {
            item.isRecent = true;
        }
    });

    Object.assign(newsList, res.data)
}

const headToNews = (id: number) => {
    router.push('/news-item/' + id)
}

onMounted(() => {
    getNewsList()
})
</script>
<style lang="scss" scoped>
.news-section {
    font-family: $common-section-font-family;

    .main-box {
        width: 90%;
        margin: 0 auto;

        .title-box {
            display: flex;
            border-bottom: #0f6ba0 1px solid;
            margin-top: 1rem;
            padding: 0.5rem 1rem;

            .title-image-box {
                img {
                    width: 3.5rem;
                }
            }

            .title {
                font-size: 3rem;
                font-weight: bold;
                color: #0f6ba0;
            }
        }

        .header-box {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 2rem;
            font-size: 1.5rem;
            font-weight: bold;
            border-bottom: #0f6ba0 1px solid;
            color: #351208;
        }

        .news-list {
            list-style: none;
            padding: 0;
            margin: 0.5rem 0;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .last-one {
                position: relative;

                &::after {
                    position: absolute;
                    content: 'News';
                    display: block;
                    width: auto;
                    // height: 100%;
                    padding: 0.2rem;
                    left: -0.5rem;
                    top: -1.3rem;
                    z-index: 9;
                    background-color: rgb(240, 100, 100);
                    color: white;
                }
            }

            .news-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 2rem;
                background-color: $main-color;
                border-radius: 5px;

                &:nth-child(even) {
                    background-color:  $main-color;
                }

                &:hover {
                    transform: scale(1.02);
                    transition: all 0.3s ease-in-out;
                }

                .news-title {
                    font-size: 1.3rem;
                    font-weight: bold;
                    color: #fff;

                    a {
                        text-decoration: none;
                        color: inherit;
                    }
                }

                .news-date {
                    font-size: 1rem;
                    color: #fff;
                }

            }

            @media screen and (max-width: 768px) {
                .news-item {
                    // flex-direction: column;
                    // align-items: flex-start;
                    padding: 1rem 1rem;
                    gap: 0.5rem;

                    .news-title {
                        font-size: 1rem;
                        font-weight: bold;
                        color: #fff;
                    }

                    .news-date {
                        font-size: 1rem;
                        color: #fff;
                    }
                }

            }
        }

        .pagination-box {
            display: flex;
            justify-content: center;
            margin: 1rem 0;

            .el-pagination {
                font-size: 1.5rem;
                color: #0f6ba0;
                font-weight: bold;

                :deep(.el-pager) {
                    .number {
                        color: #767777;
                    }

                    .is-active {
                        color: #0f6ba0;
                    }
                }

                :deep(.btn-prev) {
                    background-color: #C8C9C9;
                    border-radius: 50%;

                    i {
                        color: white;
                        font-size: 1rem;

                    }
                }

                :deep(.btn-next) {
                    background-color: #B62D66;
                    background-color: #C8C9C9;
                    border-radius: 50%;

                    i {
                        color: white;
                        font-size: 1rem;

                    }
                }
            }

            .prev {
                :deep(.btn-prev) {
                    background-color: #B62D66;

                }
            }

            .next {
                :deep(.btn-next) {
                    background-color: #B62D66;
                }
            }
        }

    }
}
</style>