<template>
    <div class="transportation-section">
        <Banner />
        <div class="main-box">
            <p class="title"><span class="conference-location">會議地點: </span>{{ t('location') }}</p>
            <div class="map-box">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8658638292773!2d121.5187584!3d25.0386258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a975c13ae63d%3A0x99f529730969be7f!2z6LKh5ZyY5rOV5Lq65by15qau55m85Z-66YeR5pyD!5e0!3m2!1szh-TW!2stw!4v1783060399044!5m2!1szh-TW!2stw"
                    width="600" height="450" style="border:0;" :allowfullscreen="true" loading="lazy"
                    referrerpolicy="strict-origin-when-cross-origin"></iframe>
                <!-- <div class="location-info-box">
                    <p>台中市北屯區經貿路一段100號</p>
                    <p>No. 100, Sec. 1, Jingmao Rd., Beitun Dist., Taichung City 406040, Taiwan</p>
                </div> -->
            </div>

            <!-- <div class="transpotation-item-box">
                <div class="item-title">
                    <div class="image-box">
                        <img src="@/assets/img/icon/transpotation1.svg" alt="">
                    </div>
                    <h1><span>台中高鐵站></span> <span>臺中國際會展中心</span></h1>
                </div>
                <ul class="decimal-list">

                    <li>捷運
                        <div class="transportation-content">
                            <p>步驟一: 從高鐵台中站搭乘台中捷運綠線 (往北屯總站方向)</p>
                            <p>下車站點「文心櫻花站」或「文華高中站」</p>

                            <p>步驟二: 搭乘計程車約10分鐘抵達臺中國際會展中心。</p>
                        </div>
                    </li>

                    <li>計程車
                        <div class="transportation-content">
                            <p>搭乘地點: 高鐵台中站 1F 7出口</p>
                            <p>下車地點：臺中國際會展中心</p>
                            <p>車程時間: 約20分鐘</p>
                        </div>
                    </li>
                </ul>
            </div> -->
            <div class="transpotation-item-box">
                <div class="item-title">
                    <div class="image-box">
                        <img src="@/assets/img/icon/bus.svg" alt="">
                    </div>
                    <h2><span>公車</span></h2>

                </div>
                <ul class="decimal-list">

                    <li>
                        <p class="transportation-content">搭乘37、249、261、270、621、630、651、仁愛幹線公車，於「仁愛中山路口」下車​</p>
                    </li>
                    <li>
                        <p class="transportation-content">搭乘0東、20、22、38、88、204、588、607、1503公車，於「中正紀念堂」下車</p>
                    </li>
                    <li>
                        <p class="transportation-content">搭乘15、208公車，於「景福門」下車</p>
                    </li>

                    <!-- <li>計程車
                        <div class="transportation-content">
                            <p>搭乘地點: 地下停車場 3A臨停出口​</p>
                            <p>下車地點：臺中國際會展中心</p>
                            <p>車程時間: 約 30 分鐘</p>
                        </div>
                    </li> -->
                </ul>
            </div>

            <div class="transpotation-item-box">
                <div class="item-title">
                    <div class="image-box">
                        <img src="@/assets/img/icon/transpotation3.svg" alt="">
                    </div>
                    <h2><span>捷運</span></h2>

                </div>
                <ul class="decimal-list">
                    <li>
                        <div class="transportation-content">
                            <p>搭乘線路: 淡水信義線</p>
                            <p>下車站點：臺大醫院2號出口</p>
                            <p>步行時間: 約 5 分鐘</p>
                        </div>
                    </li>
                    <li>
                        <div class="transportation-content">
                            <p>搭乘線路: 淡水信義線或松山新店線​</p>
                            <p>下車站點：中正紀念堂站6號出口</p>
                            <p>步行時間: 約 10 分鐘</p>
                        </div>
                    </li>
                </ul>
            </div>


            <div class="transpotation-item-box">
                <div class="item-title">
                    <div class="image-box">
                        <img src="@/assets/img/icon/transpotation6.svg" alt="">
                    </div>
                    <h2>開車</h2>
                </div>
                <ul class="disc-list">
                    <li>
                        <p class="transportation-content">中山高速公路→建國北路→下高架橋→仁愛路→景福門前</p>
                    </li>
                    <li>
                        <p class="transportation-content">中正橋→重慶南路→總統府→凱達格蘭大道→信義路</p>
                    </li>
                    <li>
                        <p class="transportation-content">忠孝橋→忠孝西路右轉→中山南路→信義路</p>
                    </li>
                    <li>
                        <p class="transportation-content">台北橋→民權西路→中山北路二段→中山南路→信義路</p>
                    </li>
                </ul>
            </div>


        </div>


    </div>
</template>
<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';
useSeoMeta({
    title: '交通資訊 | 台中國際乳癌研討會 2026',
    description: '了解如何輕鬆前往我們的會議場地。探索各種交通選擇，包括公共交通、停車資訊等，確保您順利抵達活動現場。',
    keywords: '交通資訊, TICBCS, ticbcs, TICBCS2026, ticbcs2026, 臺中國際會展中心, 台中國際乳癌研討會 , 乳癌研討會, 乳癌, 乳癌教育, 乳癌防治, 中華民國乳癌教育暨防治學會, 中國醫藥大學附設醫院, 中國醫藥大學, 台灣乳房醫學會, 中華民國外科醫學會, 公共交通, 停車資訊',
});

const { t } = useI18n()


</script>
<style lang="scss" scoped>
.main-box {
    width: 60%;
    margin: 0 auto;
    color: $main-color;

    @media screen and (max-width: 768px) {
        width: 80%;

    }

    .title {
        font-size: 1.8rem;
        font-weight: 700;
        margin: 4rem 0 1rem 0;
        text-align: start;

        .conference-location {
            color: $main-color;
            font-size: 2rem;
        }
    }

    .map-box {
        width: 100%;

        iframe {
            width: 100%;
            height: 500px;
            border: none;
        }

        .location-info-box {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            font-size: 1.5rem;
            line-height: 2rem;
            gap: 1rem;
            margin-top: 1rem;

            p {
                margin: 0;
                text-align: start;
                font-size: 1.5rem;
                line-height: 1.5rem;
                color: $main-color;
            }
        }


    }

    .transpotation-item-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-size: 1.5rem;
        line-height: 3rem;
        margin: 1.5rem 0;

        @media screen and (max-width: 768px) {
            font-size: 1.2rem;

        }

        .item-title {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .image-box {
                width: 3rem;
                height: 3rem;
                margin-right: 1rem;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            h2 {
                font-weight: bold;
                font-size: 2.5rem;
                margin-right: 1rem;
                color: $main-color;
                position: relative;

                @media screen and (max-width: 768px) {
                    display: flex;
                    flex-direction: column;
                }

            }
        }

        .decimal-list {
            list-style-type: decimal;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding-left: 5rem;

            li {
                text-align: start;
            }
        }


        .disc-list {
            list-style-type: disc;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding-left: 5rem;

            li {
                text-align: start;

                a {
                    color: $main-text-color;
                }

                &.link {
                    &:hover {
                        transform: scale(1.05);
                        transition: all 0.3s ease;
                    }
                }

            }
        }

        .bus {
            color: $main-color;
            text-decoration: underline;
            cursor: pointer;

            &:hover {
                transform: scale(1.05);
                transition: all 0.3s ease;

            }
        }

        .transportation-content {
            color: $main-text-color ;
        }
    }

}
</style>