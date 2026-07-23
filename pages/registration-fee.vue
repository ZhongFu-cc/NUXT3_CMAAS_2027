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
                            <th>報名費</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="category-col category-item">主會議</td>
                            <td>NT$ 1,500</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td class="category-col category-item">Workshop(場)</td>
                            <td>NT$ 5,000</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <p class="tips">※ Workshop 一個時段限報名一場</p>
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