<template>
    <div>
        <main class="common-section">
            <Banner />
            <Breadcrumbs firstRoute="投稿資訊" secoundRoute="發表規範" />
            <Title title="發表規範"></Title>

            <div class="content">
                <!-- <h1 class="sub-title">
                    Presentation Guidelines -->
                <!-- </h1> -->
                <div class="poster">
                    <h1 class="submission-title">[電子海報提交 ]</h1>

                    <p class="list-text">針對被接受的摘要，作者必須透過TOPBS 2026官方網站提交電子海報。電子海報將展示於TOPBS 2026活動會場。 </p>
                    <ul class="disc-list">
                        <li class="note-text">電子海報提交截止日：2026年8月21日（星期五）23:59
                        </li>
                        <li><b>提交方式：</b> 請 <nuxt-link class="link" to="/login">登入</nuxt-link> to
                            TOPBS 2026官方網站上傳電子海報。 </li>
                    </ul>
                    <p class="list-text"><b>電子海報製作規範： </b> </p>
                    <ul class="disc-list">
                        <li>所有電子海報必須以英文撰寫。 </li>
                        <li>主題與第一作者需與所接受之摘要內容一致。 </li>
                        <li>請下載並使用官方提供的電子海報模板編輯海報，並上傳PPT檔。 </li>
                    </ul>

                    <p class="list-text"><b>電子海報格式要求： </b> </p>
                    <ul class="disc-list">
                        <li>直式版面，寬度1920像素以下。 </li>
                        <li>僅限單頁。 </li>
                        <li>檔案大小建議5MB以下。 </li>
                        <li>檔案命名方式：摘要編號 + 第一作者姓名，
                            <ul>
                                <li>例如：001-Da-Ming Lee </li>
                            </ul>
                        </li>
                    </ul>

                </div>

                <div class="video">
                    <h1 class="submission-title">[影片提交 ]</h1>
                    <p class="list-text">針對被接受的摘要，作者必須透過TOPBS 2026官方網站提交影片檔。影片檔將展示於TOPBS 2026活動會場
                    </p>
                    <ul class="disc-list">
                        <li class="note-text"><b>影片檔提交截止日：</b> 2026年9月21日（星期一）23:59 </li>
                        <li><b>提交方式：</b> 請 <nuxt-link class="link" to="/login">登入</nuxt-link> TOPBS 2026官方網站上傳影片檔。 </li>
                    </ul>
                    <p class="list-text"><b>影片檔格式要求： </b> </p>
                    <ul class="disc-list">
                        <li>主題與第一作者需與所接受之摘要內容一致。 </li>
                        <li>語言：英文旁白 </li>
                        <li>時長：不超過7分鐘 </li>
                        <li>檔案大小：不超過500MB </li>
                        <li>直式版面：寬度1920像素以下。 </li>
                        <li>僅限單頁。 </li>
                        <li>檔案大小建議5MB以下。 </li>
                        <li>檔案命名方式：摘要編號 + 第一作者姓名
                            <ul>
                                <li>例如：001-Da-Ming Lee </li>
                            </ul>
                        </li>
                        <li>
                            備註：摘要編號，請於個人會員頁面 → 稿件 → 已接受稿件內查詢。
                        </li>
                    </ul>
                </div>

                <div class="oral">
                    <h1 class="submission-title">[獲獎人口頭報告]</h1>
                    <p class="list-text">針對獲獎的海報及影片，作者必須於TOPBS 2026進行口頭報告。 </p>
                    <ul>
                        <li class="note-text"><b>日期：</b> 2026年11月14日（星期六） </li>
                        <li><b>時間：</b>*具體發表時間將於入選名單公告時另行通知。*
                        </li>
                        <li><b>地點：</b>台北國際會議中心1樓
                            <ul>
                                <li>地址：110台北市信義區信義路五段1號1樓</li>
                            </ul>
                        </li>
                        <li><b>報告語言：</b>英文</li>
                        <li><b>報告時間：</b>8分鐘</li>
                        <li><b>發表順序資訊： </b>將另行通知發表者。</li>
                    </ul>
                </div>
            </div>

        </main>
    </div>
</template>
<script lang="ts" setup>
import Title from '@/components/layout/Title.vue';
import Banner from '@/components/layout/Banner.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
</script>
<style lang="scss" scoped>
.common-section {
    margin: $common-section-margin;
    font-family: $common-section-font-family;

    .content {
        width: 60%;
        margin-inline: auto;
        font-size: 1.5rem;
        line-height: 2.5rem;





        .reminder {
            margin: 1rem 0;
            font-size: 1rem;
            line-height: normal;
        }

        .submission-title {
            margin-top: 4rem;
            text-align: center;
        }


        h2 {
            font-size: 2rem;
        }



        .disc-list {
            list-style-type: disc;
        }

        .no-type-list {
            list-style: none;
        }

        .decimal-list {
            list-style-type: decimal;
        }

        .square-list {
            list-style: square;
        }


        .list-text {
            padding: 1rem 0 0 1rem;
            font-size: 1.3rem;
            line-height: normal;
        }

        .main-list {
            list-style-type: decimal-leading-zero;
        }



        .note-text {
            color: #DE6A75;
        }

        .sub-title {
            margin-top: 4rem;
            font-size: 1.5rem;
            font-weight: bold;
            color: $accent-hover-bg;
        }

        .submission-title {
            font-weight: bold;
            color: $accent-hover-bg;
        }

        .review-process-table {
            width: 100%;
            border-collapse: collapse;
            // margin: 2rem 0;

            td {
                padding: 1rem;
                border: 1px solid black;
                text-align: center;
                font-size: 1.2rem;
                line-height: normal;
            }
        }

        .link {
            color: #2667B9;
            text-decoration: underline;
        }



        @media screen and (max-width: 486px) {
            width: 90%;
        }
    }

}
</style>