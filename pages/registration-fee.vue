<template>
    <div>
        <ClientOnly>
            <main class="common-section">
                <Banner />

                <Breadcrumbs :first-route="t('registration')" :secound-route="t('registrationFee')"></Breadcrumbs>

                <Title :title="t('registrationFee')"></Title>

                <table class="personal-registration-table">
                    <thead>
                        <tr>
                            <th>場次</th>
                            <th>永久會員</th>
                            <th>一般會員</th>
                            <th>非會員</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="category-col category-item">主會議</td>
                            <td>TWD 2,000</td>
                            <td>TWD 2,500</td>
                            <td>TWD 3,000</td>
                        </tr>
                        <tr>
                            <td class="category-col category-item">Workshop(場)</td>
                            <td colspan="3">TWD 5,000</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <div class="tips">
                        <p class="tips-title">費用說明</p>
                        <p class="tips-group">1/24 國際學術大會</p>
                        <ul>
                            <li>永久會員、一般會員：包含大會手冊、當日餐點、本會點數 10 學分。</li>
                            <li>非會員：包含大會手冊、當日餐點。</li>
                            <li>中醫師可於報名 1/24 國際學術大會時，選擇是否申請中醫師全聯會繼續教育積分 8 點，另收點數費 800 元。</li>
                            <li>一般會員須繳清 116 年度年費，才能適用會員優惠價格。</li>
                        </ul>
                        <p class="tips-group">1/23 臨床技能工作坊</p>
                        <ul>
                            <li>Workshop 費用不分會員身分。</li>
                            <li>Workshop 上午、下午各有 A、B 兩場，一個時段 (上午/下午) 限報名一場。每一場課程限額 45 人。</li>
                            <li>Workshop 課程費用包含課後 60 天線上影音複習。</li>
                            <li>同日報名上午及下午兩場 Workshop 者，提供午餐一份；僅參加單一場次者，不提供午餐。</li>
                        </ul>
                        <p class="tips-group">退費及費用保留</p>
                        <ul>
                            <li>已完成報名繳費者，若因故無法參加，請於 2027 年 1 月 8 日 (五) 前 (含當日) 以電子郵件通知本會申請退費，每場課程收取行政手續費 500 元。</li>
                            <li>2027 年 1 月 9 日起至原報名課程開始前，如因故無法參加，可來信申請保留已繳費用，扣除行政手續費 500 元後，得於 2028 年 1 月 31 日前抵用本會自辦課程報名費。逾期未使用者不再保留；未於原報名課程開始前提出申請者，亦不予保留。報名資格不得轉讓他人。</li>
                        </ul>
                    </div>
                </div>
            </main>

        </ClientOnly>
    </div>
</template>
<script setup lang="ts">
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'
import Banner from '@/components/layout/Banner.vue';
import Title from '@/components/layout/Title.vue';

const { t } = useI18n();

useSeoMeta({
    title: 'Registration Fee - CMAAS2027',
    description: 'Explore the registration fee details for the CMAAS 2027 conference. Find information on personal and group registration fees, early-bird discounts, and payment methods.',
    keywords: 'Registration Fee,CMAAS 2027,2027 CMAAS,Registration,CMAAS,'
})

</script>
<style lang="scss" scoped>
.common-section {
    font-family: $common-section-font-family;
    margin-top: 6rem;

    .content {
        margin: 1rem auto;
        text-align: center;

        h1 {
            font-size: 2rem;
        }
    }

    .shadow-divider {
        width: 85%;
        height: 2px;
        margin: 1rem auto;
        background-image: repeating-linear-gradient(to right,
                #CDCBCB,
                #CDCBCB 30px,
                transparent 5px,
                transparent 50px);
    }

    .personal-registration-table {
        width: 90%;
        margin: 3rem auto;
        font-size: 1.5rem;
        font-weight: 600;
        color: #383A51;

        @media screen and (max-width: 768px) {
            font-size: 1rem;
        }

        @media screen and (max-width: 425px) {
            font-size: 10px;
        }

        th {
            color: white;
            background-color: #0f6ba0;
            border: 1px solid #fff;
            padding: 1rem;
        }

        td {
            background-color: #3599d3;
            padding: 1rem;
            border: 1px solid #fff;
            color: #fff;
            text-align: center;
        }

        .category-col {
            width: 28%;
            text-align: start;
        }

        .personal-row-1 {
            .category-col {
                padding: 2rem 0.5rem;
                text-align: start;
                border: #0f6ba0 1px solid;
                width: 50%;
            }
        }
    }

    .tips {
        width: 88vw;
        margin: 1rem auto;
        text-align: start;
        font-size: 1rem;
        font-weight: 600;

        .tips-title {
            font-size: 1.2rem;
        }

        .tips-group {
            margin-top: 0.8rem;
            color: #0f6ba0;
        }

        ul {
            list-style: disc;
            padding-left: 1.5rem;
            font-weight: 500;
            line-height: 1.7;
        }
    }

    .btn-section {
        margin: 2rem auto 4rem auto;
        text-align: center;

        .register-btn {
            min-width: 13rem;
            background-color: #0f6ba0;
            color: white;
            padding: 1rem 2rem;
            font-weight: 600;
            letter-spacing: 0.1rem;
            border-radius: 10px;

            &:hover {
                cursor: pointer;
                background-color: #0f6ba0;
            }
        }

        .group-register-btn {
            min-width: 13rem;
            background: linear-gradient(to right, #E28A90, #A4557D);
            color: white;
            padding: 1.3rem 2rem;
            font-weight: 600;
            letter-spacing: 0.1rem;
            border-radius: 10px;

            &:hover {
                cursor: pointer;
                // scale: 1.05;
                background: linear-gradient(to left, #E28A90, #A4557D);
                transition: all 0.3s ease-in-out;
            }
        }
    }

    .group-registration-table {
        width: 90vw;
        margin: 1rem auto;
        font-size: 1.5rem;
        font-weight: 600;

        @media screen and (max-width: 768px) {
            display: none;
        }

        th {
            padding: 1rem;
            border: 1px solid #EEE2DC;

            &:first-child {
                text-align: start;
            }
        }

        td {
            background-color: #3599d3;
            padding: 1rem;
            border: 1px solid #fff;
            color: #fff;

            &:not(:first-child) {
                text-align: center;
            }
        }

        .group-row-1 {
            background: linear-gradient(to right, #E28A90, #A4557D);
            color: white;
        }
    }

    .mobile-group-registration-table {
        display: none;
        width: 90vw;
        margin: 1rem auto;
        font-size: 1.5rem;
        font-weight: 600;

        @media screen and (max-width: 768px) {
            display: block;
        }

        td {
            padding: 1rem;
            border: 1px solid #EEE2DC;

            &:first-child {
                background: linear-gradient(to right, #E28A90, #A4557D);
                color: white;
                width: 60%;
            }

            &:not(:first-child) {
                background-color: #FEECE8;
                color: #7A2D67;
                text-align: center;
            }
        }
    }
}
</style>