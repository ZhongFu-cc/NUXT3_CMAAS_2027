<template>
    <section class="about-us-section">
        <Banner />
        <div class="main-section">
            <Breadcrumbs :first-route="t('aboutUs')" :secound-route="t('welcomeMessage')"></Breadcrumbs>
            <Title :title="t('welcomeMessage')"></Title>
            <div class="welcome-box">
                <div class="image-box">
                    <img src="@/assets/img/president.jpg" alt="理事長">
                    <div class="people-infomation-box">
                        <p class="name">黃明正</p>
                        <p class="title">中華針灸醫學會 理事長</p>
                    </div>
                </div>
                <div class="welcome-content">
                    <!-- <p class="title">理事長的話</p> -->
                    <p> <span class="first-word"></span> 親愛的會員同道及各界朋友：
                        &nbsp;
                    </p>
                    <p> <span class="first-word"></span>
                        欣逢中華針灸醫學會成立三十週年，謹代表學會向歷任團隊及全體會員，致上最誠摯的謝意。感謝大家三十年來的支持與奉獻，讓學會從草創走向穩健。
                        &nbsp;
                    </p>
                    <p> <span class="first-word"></span>
                        多年來，學會積極推動學術研討與教育訓練，創辦《中華針灸醫學會雜誌》傳承知識，並致力於國際學術交流。今年，我們更攜手全日本鍼灸學會（JSAM）與大韓針灸醫學會（KAMMS）共同成立「東亞針灸醫學國際論壇」，期盼建立長期穩定的交流平台，深化臨床、教育與研究合作。
                    </p>
                    <p> <span class="first-word"></span>
                        三十年是感恩的里程碑，更是嶄新的開始。未來，本會將持續凝聚會員力量、深化學術研究、培育優秀人才並拓展國際合作，讓臺灣針灸醫學持續發光發熱，為人類健康貢獻力量。
                    </p>
                    <p>
                        敬祝大家身體健康、萬事順心。
                    </p>
                    <p class="association-name">中華針灸醫學會 黃明正 理事長 敬上</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
import Title from '@/components/layout/Title.vue';

const { t } = useI18n();

useSeoMeta({
    title: 'President\'s Message - CMAAS2027',
    description: 'Read the messages from the presidents of the Chinese Acupuncture Medical Association, welcoming attendees to the CMAAS conference.',
    keywords: 'President\'s Message,CMAAS,CMAAS 2027,2027 CMAAS,'
})

</script>
<style lang="scss" scoped>
.about-us-section {
    .main-section {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        color: $main-color;
        padding: 0 1.5rem;
    }


    .welcome-box {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 3rem;
        margin: 3.5rem 0;

        @media screen and (max-width: 1024px) {
            flex-direction: column;
            align-items: center;
        }

        .image-box {
            flex: 0 0 380px;
            display: flex;
            flex-direction: column;
            align-items: center;

            @media screen and (max-width: 1024px) {
                width: 100%;
                flex: unset;
            }

            img {
                width: 100%;
                max-width: 380px;
                height: auto;
                object-fit: cover;
                border-radius: 10px;
                display: block;
            }

            .people-infomation-box {
                width: 100%;
                max-width: 380px;
                margin-top: 1rem;
                background-color: $main-color;
                padding: 1rem 1.5rem;
                border-radius: 10px;

                .name {
                    font-size: 1.4rem;
                    color: white;
                    font-weight: 600;
                    margin-bottom: .5rem;
                }

                .title {
                    font-size: 1rem;
                    color: white;
                    line-height: 1.6;
                }
            }
        }

        .welcome-content {
            flex: 1;
            min-width: 0;
            color: $main-text-color;
            font-size: 1.05rem;
            line-height: 2;
            padding: 0;

            .title {
                font-size: 2rem;
                color: $main-color;
                font-weight: 700;
                margin-bottom: 1rem;
            }

            p {
                margin: 0;
                text-align: justify;
            }

            .first-word {
                display: inline-block;
                width: 2em;
            }

            .association-name {
                margin-top: 1.5rem;
                text-align: right;
                font-size: 1.2rem;
                color: $main-color;
                font-weight: bold;
            }
        }
    }

    // .image-box {
    //     display: flex;
    //     justify-content: center;
    //     gap: 2rem;

    //     @media screen and (max-width: 426px) {
    //         flex-direction: column;
    //     }

    //     .logo-box {
    //         width: calc(100%/3 - 2rem);
    //         display: flex;
    //         flex-direction: column;

    //         @media screen and (max-width: 426px) {
    //             width: 100%;
    //         }

    //         .logo-name {
    //             color: $main-color;
    //             font-size: 1rem;
    //             text-align: center;
    //         }

    //         img {
    //             width: 100%;
    //             height: auto;
    //         }
    //     }

    //     .logo-box2 {
    //         display: flex;
    //         flex-direction: column;
    //         width: calc(100%/3 - 2rem);

    //         @media screen and (max-width: 426px) {
    //             width: 100%;
    //         }

    //         .logo-name {
    //             color: $main-color;
    //             font-size: 1.2rem;
    //             text-align: center;
    //         }

    //         img {
    //             width: 100%;
    //             height: auto;
    //         }
    //     }

    // }

}
</style>