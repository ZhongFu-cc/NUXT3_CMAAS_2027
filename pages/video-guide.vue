<template>
    <div class="upload-page">

        <!-- Hero -->
        <section class="hero">
            <h1>30週年紀念祝福影片募集</h1>
            <p>淬煉三十，首航東亞，針行世界</p>
        </section>

        <!-- 活動說明 -->
        <el-card class="section">
            <template #header>
                活動說明
            </template>

            <p>
                為歡慶中華針灸醫學會成立30週年，誠摯邀請您錄製一段祝福影片，與我們共同留下珍貴的回憶，一起見證這個重要的里程碑。
                您的每一句祝福，都是學會30年最珍貴的紀錄，更將讓世界看見臺灣針灸醫學，邁向國際、針行世界。
                ※投稿影片經主辦單位彙整後，將於活動會場現場輪播，與所有會員及貴賓共同分享您的祝福。
            </p>
        </el-card>

        <!-- 上傳步驟 -->
        <el-card class="section">
            <template #header>
                上傳步驟
            </template>

            <el-steps :active="5" align-center>
                <el-step title="登入會員專區" />
                <el-step title="點選影片上傳" />
                <el-step title="閱讀活動說明" />
                <el-step title="點選上傳影片" />
                <el-step title="選擇影片並送出" />
            </el-steps>
        </el-card>

        <el-card class="section">
            <template #header>
                內容建議
            </template>
            <p>
                分享您想對中華針灸醫學會說的話，例如：
                「祝福中華針灸醫學會30週年生日快樂，持續推動針灸醫學發展，走向世界。」
                若您不知道該如何開場，也歡迎直接說出本次30週年主題口號：
                「淬煉三十，首航東亞，針行世界。」
            </p>
        </el-card>

        <!-- 規格 -->
        <el-card class="section">
            <template #header>
                投稿影片規格
            </template>

            <div class="spec-grid">
                <div class="spec-item">
                    <span>影片長度</span>
                    <strong>20秒內</strong>
                </div>

                <div class="spec-item">
                    <span>格式</span>
                    <strong>MP4</strong>
                </div>

                <div class="spec-item">
                    <span>解析度</span>
                    <strong>1920 × 1080</strong>
                </div>

                <div class="spec-item">
                    <span>比例</span>
                    <strong>16 : 9</strong>
                </div>

                <div class="spec-item">
                    <span>命名</span>
                    <strong>中文姓名＋所屬單位（醫院）
                        例如：王大明_臺大醫院.mp4 </strong>
                </div>
            </div>
        </el-card>

        <!-- 錄製提醒 -->
        <el-card class="section">
            <template #header>
                錄製小提醒
            </template>

            <ul>
                <li>請使用橫式拍攝</li>
                <li>光線充足、避免逆光</li>
                <li>鏡頭保持穩定</li>
                <li>人物置中</li>
                <li>確認聲音及畫面清晰</li>
                <li>建議配戴有線或藍牙耳機（含麥克風）錄製，可提升收音品質。 </li>
            </ul>
        </el-card>

        <!-- CTA -->
        <section class="action-section">
            <h3>準備好了嗎？</h3>
            <p>請點擊下方按鈕前往影片上傳頁面。</p>

            <el-button type="primary" size="large" @click="goToUpload">
                前往上傳影片
            </el-button>
        </section>

    </div>
</template>

<script setup lang="ts">
const goToUpload = () => {
    window.open(
        'https://zhongfupr-my.sharepoint.com/:f:/g/personal/joey_zhongfu-pr_com_tw/IgBSmPU-r-17RaIshoRK_oq8AfXK8KlnZNT8uIM7dLCdyU8',
        '_blank'
    )
}
</script>

<style scoped lang="scss">
.upload-page {
    max-width: 1000px;
    margin: 6rem auto 0;
    padding: 2rem;
}

.hero {
    text-align: center;
    margin-bottom: 2rem;

    h1 {
        font-size: 2rem;
        color: #8b5e34;
    }

    p {
        color: #666;
        margin-top: 1rem;
    }
}

.section {
    margin-bottom: 1.5rem;
}

.spec-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.spec-item {
    padding: 1rem;
    background: #faf7f2;
    border-radius: 8px;

    span {
        display: block;
        color: #888;
    }

    strong {
        font-size: 1.125rem;
    }
}

.action-section {
    text-align: center;
    padding: 3rem 1rem;

    h3 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1.5rem;
        color: #666;
    }
}
</style>