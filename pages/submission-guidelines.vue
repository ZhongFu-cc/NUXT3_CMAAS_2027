<template>
    <div>
        <main class="common-section">
            <Banner></Banner>
            <Breadcrumbs firstRoute="投稿資訊" secoundRoute="投稿規範"></Breadcrumbs>
            <Title title="投稿規範"></Title>

            <div class="content">
                <!-- <h1 class="sub-title">Submission Guidelines</h1> -->
                <h1 class="">重要日程</h1>

                <div class="important-date-info">
                    <ul class="disc-list">
                        <li class="note-text">摘要提交截止日：2026年8月21日（星期五） </li>
                        <li>摘要接受通知：2026年9月7日（星期一） </li>
                        <li>電子海報及影片檔上傳截止日：2026年9月21日（星期一） </li>
                    </ul>
                </div>

                <div class="review-process">
                    <!-- <h1>Review Process</h1> -->
                    <br>
                    <table class="review-process-table">
                        <tr>
                            <td rowspan="2">初審 </td>
                            <td>4/17 - 8/21 </td>
                            <td>官網註冊會員後即可線上投稿 </td>
                        </tr>

                        <tr>
                            <td>8/22 - 9/6 </td>
                            <td>評審委員針對投稿之摘要進行審核 </td>
                        </tr>

                        <tr>
                            <td rowspan="4">
                                決審 </td>
                            <td>9/7 </td>
                            <td>摘要入選通知 </td>
                        </tr>

                        <tr>
                            <td>9/7 - 9/21</td>
                            <td>電子海報及影片檔上傳官網 </td>
                        </tr>

                        <tr>
                            <td>9/22 - 10/6 </td>
                            <td>評審委員針對入選之電子海報及影片進行審核並選出得獎論文 </td>
                        </tr>
                        <tr>
                            <td>10/8 </td>
                            <td>得獎名單公佈 </td>
                        </tr>
                        <tr>
                            <td>口頭報告及頒獎 </td>
                            <td>11/14 </td>
                            <td>得獎人於活動當天進行口頭報告並進行頒獎</td>
                        </tr>
                        <tr>
                            <td>入選論文展示 </td>
                            <td>11/14 - 11/15 </td>
                            <td>入選之電子海報及影片將於活動會場公開展示 </td>
                        </tr>
                    </table>
                </div>


                <div class="abstract-submission-box">
                    <h1 class="submission-title">[摘要提交]</h1>

                    <div class="submission-guidelines-box">
                        <h2>01. 摘要提交流程 </h2>
                        <ul class="secondstep-list">
                            <li><b>步驟1：</b>註冊並 <nuxt-link class="link" to="/login"> 登入</nuxt-link>.
                            </li>

                            <li><b>步驟2：</b> 提交摘要前請先完成線上報名。
                            </li>
                            <li><b>步驟3：</b> 點擊網站上的“投稿資訊” → “摘要提交”，填寫必要資訊並上傳您的摘要。 </li>
                            <li><b>步驟4：</b> 確認電子郵件中的提交成功通知信。 </li>
                        </ul>
                    </div>

                    <div class="submission-guidelines-box">
                        <h2>02. 摘要格式 </h2>
                        <p class="list-text">僅接受線上提交PDF檔（官方網站），不接受電子郵件、郵寄或傳真。 </p>

                        <ul class="disc-list">
                            <li>標題：Tahoma字體，14pt大小；僅首字、專有名詞及縮寫字大寫；不使用縮寫。
                            </li>
                            <li>正文：目的、方法、結果、結論；Tahoma字體，11pt大小；行距18pt；邊距1.5公分；不可附圖表、文獻或關鍵字。 </li>
                            <li>作者上限30位；機構請先列出醫院，再列大學。 </li>
                            <li>若作者同時隸屬於醫院及大學，請輸入其服務醫院名稱。 </li>
                        </ul>
                    </div>

                    <div class="submission-guidelines-box">
                        <h2>03. 提交須知 </h2>
                        <ul class="disc-list">
                            <li>發表者必須為第一作者，每篇摘要限一位發表者。 </li>
                            <li>線上提交表單每個欄位皆須完整填寫。 </li>
                            <li>摘要標題須反映研究主題，勿包含結果或結論。 </li>
                            <li>商業名稱可於摘要正文中使用，但須標註®符號。 </li>
                            <li>摘要標題及正文內如使用縮寫，需加以定義。 </li>
                            <li>作者須選擇希望申請的獎項類別，但最終由TOPBS 2026委員會決定。 </li>
                        </ul>
                    </div>

                    <div class="submission-guidelines-box">
                        <h2>04. 利益衝突揭露 </h2>
                        <ul class="disc-list">
                            <li>所有作者在提交摘要時，須揭露任何可能的利益衝突。
                            </li>
                            <li>發表作者負責收集及提交所有共同作者的相關資訊。

                            </li>
                        </ul>
                    </div>

                    <div class="submission-guidelines-box">
                        <h2>05. 要接受通知將以電子郵件寄發，並於網站上個人會員頁面公告 </h2>
                        <ul class="disc-list">
                            <li>摘要接受通知將以電子郵件寄發。 </li>
                            <li>所有摘要將依標準審查程序由組委會進行審核。 </li>
                            <li>組委會對摘要接受與否擁有最終決定權。
                            </li>
                        </ul>
                    </div>


                    <div class="submission-guidelines-box">
                        <h2>06. 摘要修改或撤回 </h2>
                        <ul class="disc-list">
                            <li>若未完成報名手續，提交的摘要將被撤回。 </li>
                            <li>可於截止日前在線上系統自行修改已提交的摘要。 </li>
                            <li>若要修改已接受的摘要，請於接獲摘要接受通知後36小時內，以電子郵件聯繫TOPBS 2026秘書處。 </li>
                        </ul>
                    </div>

                    <div class="submission-guidelines-box">
                        <h2>07. 其他提交規定 </h2>
                        <ul class="disc-list">
                            <li>送交至TOPBS 2026的摘要須保證未曾於任何同行審查的出版物發表，亦未曾於任何會議上發表。 </li>
                            <li>S不接受舊作重投稿；若為續作摘要，須有新數據。 </li>
                            <li>A違規或逾期提交之摘要將被拒絕並退件。
                            </li>
                            <li>提交摘要即表示第一作者及共同作者同意授權、保證研究參與、數據正確性及承擔通訊責任。 </li>

                        </ul>
                    </div>
                </div>

                <p class="reminder note-text">TOPBS 2026保留修改活動規則及節目內容的權利。如有爭議，TOPBS 2026保有最終決定權。 </p>




                <!-- <el-button>
                    Online Submission
                </el-button> -->


            </div>
        </main>

    </div>
</template>
<script setup lang="ts">
import Banner from '@/components/layout/Banner.vue';
import Title from '@/components/layout/Title.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

useSeoMeta({
    title: 'Submission Guidelines - 9th IOPBS & TOPBS 2025 International Conference on Oncoplastic Breast Surgery',
    description: 'Explore the submission guidelines for the 9th IOPBS & TOPBS 2025 International Conference on Oncoplastic Breast Surgery. This page provides detailed information on abstract submission, important dates, review process, and more.',
    keywords: 'Submission Guideline , 9th IOPBS, IOPBS 2025, TOPBS 2025, 2025 IOPBS, 2025 TOPBS '
})

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

        .title {
            padding: 2rem 4rem 2rem 0;
            font-size: 2.5rem;
        }

        .important-date-info {
            border: $accent-color 1px solid;
            padding: 2rem;

            ul {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                font-size: 1.5rem;
            }
        }

        .reminder {
            margin: 1rem 0;
            font-size: 1rem;
            line-height: normal;
        }

        .submission-title {
            margin-top: 4rem;
            text-align: center;
        }

        .step-box-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem 2rem 2rem;
            border-radius: 1rem;
            gap: 2rem;
            width: 100%;

            .step-box {
                display: flex;
                border: 1px solid #DE6A75;
                border-radius: 10px;
                padding: 1rem;
                min-width: 30%;
                justify-content: center;

                .step {
                    display: flex;
                    align-items: center;
                    gap: 1rem;

                    h3 {
                        background-color: #DE6A75;
                        padding: 0.3rem 0.5rem;
                        border-radius: 5px;
                        font-weight: normal;
                        color: white;
                    }

                    p {
                        position: relative;

                    }
                }
            }
        }

        h2 {
            font-size: 2rem;
        }

        .step-list {
            list-style-type: decimal;

            .step-list-item {
                white-space: pre-wrap;
            }
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

        .shadow-divider {
            // width: 85%;
            height: 2px;
            margin: 1rem auto;
            background-image: repeating-linear-gradient(to right,
                    #CDCBCB,
                    #CDCBCB 30px,
                    transparent 5px,
                    transparent 50px);
        }


        .submission-guidelines-box {
            margin-top: 4rem;
        }

        .list-text {
            padding: 1rem 0 0 1rem;
            font-size: 1.3rem;
            line-height: normal;
        }

        .main-list {
            list-style-type: decimal-leading-zero;
        }



        .third-list {
            padding-left: 4rem;
            font-size: 1.2rem;
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