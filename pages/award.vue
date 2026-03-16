<template>
    <div>
        <main class="common-section">
            <Banner></Banner>
            <Breadcrumbs firstRoute="投稿資訊" secoundRoute="投稿獎項" />
            <Title title="投稿獎項"></Title>

            <div class="content">
                <p>TOPBS 2026 組織委員會將從投稿的摘要中，選出優秀作品並領發獎項。 「年輕研究者獎」1名、「最佳海報獎」1名、「最佳影片獎」1名，獎項結果將於10月8日 (四) 通知，獲獎人將於於11月14日
                    (六) 上台進行口頭報告並頒獲獎項。 </p>


                <ul class="main-list">

                    <li>
                        <b>01.年輕研究者獎 (Young Investigator Award)
                        </b>
                        <ul class="second-list">
                            <li>【得獎名額】：1名 </li>
                            <li>【獎勵內容】：新台幣10,000元及獎狀 </li>
                            <li>【申請資格】：
                                <ul style="list-style-type: circle;">
                                    <li>必須是45歲（含）以下的研究人員。</li>
                                    <li>完成線上報名並投稿摘要，摘要被接受後，必須提交電子海報。</li>
                                </ul>

                            </li>
                        </ul>
                    </li>

                    <li>
                        <b>02.最佳海報獎 (Best Poster Award)</b>
                        <ul class="second-list">
                            <li>【得獎名額】：1名 </li>
                            <li>【獎勵內容】：新台幣10,000元及獎狀 </li>
                            <li>【申請資格】：
                                <ul style="list-style-type: circle;">
                                    <li>完成線上報名並投稿摘要，摘要被接受後，必須提交電子海報。 </li>
                                </ul>

                            </li>
                        </ul>
                    </li>

                    <li>
                        <b>03.最佳影片獎 (Best Video Award)</b>
                        <ul class="second-list">
                            <li>【得獎名額】：1名 </li>
                            <li>【獎勵內容】：新台幣10,000元及獎狀 </li>
                            <li>【申請資格】：
                                <ul style="list-style-type: circle;">
                                    <li>完成線上報名並投稿摘要，摘要被接受後，必須提交影片檔。
                                    </li>
                                </ul>

                            </li>
                        </ul>
                    </li>
                </ul>


                <ul class="none-style-list">
                    <li><b>請注意： </b>
                        <ul class="disc-list">
                            <li>獎金均為稅前金額 </li>
                            <li>若投稿數量不足或其他相關因素，主辦單位保留獎項從缺之權利 </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </main>

    </div>
</template>
<script setup lang="ts">
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'
import Banner from '@/components/layout/Banner.vue';
import Title from '@/components/layout/Title.vue';

useSeoMeta({
    title: 'Award - 9th IOPBS & TOPBS 2025 International Conference on Oncoplastic Breast Surgery',
    description: 'Discover the award opportunities at the 9th IOPBS & TOPBS 2025 International Conference on Oncoplastic Breast Surgery. The organizing committee will present awards for Young Investigator, Best Poster, and Best Video. Winners will be announced on October 24 and recognized during the conference.',
    keywords: 'Abstract Award, Award, 9th IOPBS, IOPBS 2025, TOPBS 2025, 2025 IOPBS, 2025 TOPBS '
})

</script>
<style lang="scss" scoped>
.common-section {
    font-family: $common-section-font-family;

    .content {
        margin: 1rem auto;
        width: 60%;
        font-size: 1.5rem;
        line-height: 2.5rem;

        .main-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 5rem;
            padding: 0;
        }

        .second-list {
            list-style: disc;
            font-size: 1.3rem;

        }

        .third-list {
            list-style: square;
            font-size: 1.2rem;
        }

        .list-text {
            font-size: 1.3rem;
            margin: 1rem 0;
        }

        .none-style-list {
            list-style: none;
            margin: 1rem 0;
            font-size: 1.3rem;
            padding: 0;

        }

        .disc-list {
            list-style: disc;
            margin-left: 2rem;
            font-size: 1.3rem;
        }



        @media screen and (max-width: 476px) {
            width: 80%;
        }
    }
}
</style>