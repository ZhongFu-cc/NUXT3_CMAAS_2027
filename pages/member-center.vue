<template>
    <main class="common-section">
        <Banner />
        <Breadcrumbs :first-route="'會員'" :secound-route="$t('memberCenter')" />
        <div class="title-section">
            <h1 class="title">{{ $t('memberCenter') }}</h1>
        </div>

        <section class="profile-reminder-section">
            <div class="profile-reminder-card" :class="{ 'is-complete': isComplete }">
                <div class="reminder-header">
                    <div>
                        <p class="reminder-eyebrow">{{ t('profile') }}</p>
                        <h2 v-if="!isComplete" class="reminder-title">{{ t('profileIncomplete') }}</h2>
                        <h2 v-else class="reminder-title">{{ t('memberInfo') }}</h2>
                    </div>
                </div>

                <!-- <p v-if="!isComplete" class="reminder-description">
                    {{ t('profileReminder') }}
                </p> -->
                <p v-if="isComplete" class="reminder-description is-complete">
                    {{ t('isQualified') }}
                </p>

                <div class="missing-field-list">
                    <span v-if="inCompletedStatus.includes(memberInfo.status)" class="missing-field-chip">
                        {{ getStatusLabel(memberInfo.status) }}
                    </span>
                </div>
            </div>
        </section>

        <div class="select-section">
            <div class="select-item-box">
                <!-- <nuxt-link class="select-box" to="/abstract">
                    <img src="@/assets/img/abstract-icon.png" alt="">
                    <div class="label-box">
                        <span>{{ $t('abstract') }}</span>
                    </div>
                </nuxt-link> -->
                <nuxt-link class="select-box" :to="'/payment'">
                    <img src="@/assets/img/payment-icon.png" alt="">
                    <div class="label-box">
                        <span>{{ $t('payment') }}</span>
                    </div>
                </nuxt-link>
                <nuxt-link class="select-box" :to="'/profile'">
                    <img src="@/assets/img/user-edit.svg" alt="">
                    <div class="label-box">
                        <p>{{ $t('profile') }}</p>
                    </div>
                </nuxt-link>
                <nuxt-link class="select-box" :to="'/video-guide'">
                    <img src="@/assets/img/video.svg" alt="">
                    <div class="label-box">
                        <p>{{ $t('video') }}</p>
                    </div>
                </nuxt-link>
                <!-- <a class="select-box" href="https://zhongfupr-my.sharepoint.com/:f:/g/personal/joey_zhongfu-pr_com_tw/IgBSmPU-r-17RaIshoRK_oq8AfXK8KlnZNT8uIM7dLCdyU8">
                    <img src="@/assets/img/video.svg" alt="">
                    <div class="label-box">
                        <p>{{ $t('video') }}</p>
                    </div>
                </a> -->
            </div>
            <div class="download-section">
                <el-button class="certificate-download">
                    與會證書下載
                </el-button>
                <el-button class="certificate-download">
                    收據證明下載
                </el-button>
            </div>
        </div>
    </main>
</template>
<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';

// const { t, setLocale } = useLang();
const { t } = useI18n();

const router = useRouter();

const memberInfo = reactive<Record<string, any>>({});

const inCompletedStatus = [0, 1, 3];
const isComplete = computed(() => {
    return !inCompletedStatus.includes(memberInfo.status);
});

const getStatusLabel = (status: number) => {
    switch (status) {
        case 0:
            return t('notPaid');
        case 1:
            return t('pendingReview');
        case 3:
            return t('paidFail');
    }
}

const getMemberInfo = async () => {
    let res = await CSRrequest.get('/member/owner')
    if (res.code !== 200) {
        router.push('/login');
        localStorage.removeItem('Authorization-member');
        return;
    }
    Object.assign(memberInfo, res.data);
}


onMounted(() => {
    getMemberInfo();
});


</script>
<style lang="scss" scoped>
.common-section {
    font-family: $common-section-font-family;

    .profile-reminder-section {
        padding: 0 1rem;
    }

    .profile-reminder-card {
        width: min(100%, 1120px);
        margin: 2rem auto 0;
        padding: clamp(1.25rem, 3vw, 2rem);
        border: 1px solid rgba(160, 88, 106, 0.2);
        border-radius: 24px;
        background: linear-gradient(135deg, rgba(255, 245, 247, 0.98), rgba(255, 255, 255, 0.95));
        box-shadow: 0 18px 40px rgba(110, 57, 70, 0.08);
        box-sizing: border-box;

        &.is-complete {
            border: 1px solid rgba(71, 126, 92, 0.24);
            background: linear-gradient(135deg, rgba(231, 247, 236, 0.98), rgba(245, 255, 248, 0.96));
            box-shadow: 0 18px 40px rgba(53, 101, 76, 0.12);

            .reminder-eyebrow {
                color: #477e5c;
            }

            .reminder-title {
                color: #234330;
            }

            .reminder-action {
                background-color: #477e5c;

                &:hover {
                    background-color: #35654c;
                }
            }
        }

        .reminder-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;

            @media screen and (max-width: 768px) {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        .reminder-eyebrow {
            margin: 0 0 0.35rem;
            font-size: 0.9rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #a0586a;
        }

        .reminder-title {
            margin: 0;
            font-size: clamp(1.35rem, 2vw, 1.8rem);
            color: #3c2b31;
        }

        .reminder-action {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            min-height: 3rem;
            padding: 0.75rem 1.25rem;
            border-radius: 999px;
            background-color: #a0586a;
            color: #fff;
            font-weight: 600;
            text-decoration: none;
            white-space: nowrap;
            transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

            &:hover {
                background-color: #874757;
                transform: translateY(-1px);
            }
        }

        .reminder-description {
            margin: 0;
            color: #5a4a50;
            line-height: 1.7;

            &.is-complete {
                color: #35654c;
                font-weight: 500;
            }
        }

        .missing-field-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-top: 1.25rem;
        }

        .missing-field-chip {
            display: inline-flex;
            align-items: center;
            min-height: 2.5rem;
            padding: 0.5rem 0.9rem;
            border-radius: 999px;
            background-color: #fff;
            border: 1px solid rgba(160, 88, 106, 0.28);
            color: #7a4452;
            font-weight: 600;
            box-sizing: border-box;
        }
    }

    .title-section {
        margin-top: 1rem;
        padding: 0 1rem;
        text-align: center;
        position: relative;

        .title {
            font-size: clamp(2rem, 4vw, 2.7rem);
            font-weight: 600;
        }

    }

    .select-section {
        background: url('assets/img/login_background.png') repeat center center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: clamp(1.5rem, 4vw, 3rem);
        // gap: clamp(1.5rem, 4vw, 4rem);
        // max-width: 1800px;
        margin: 3rem auto;
        box-sizing: border-box;

        @media screen and (min-width: 1441px) and (max-width: 1530px) {
            gap: 1.25rem;
        }

        @media screen and (max-width: 1440px) {
            flex-direction: column;
        }

        @media screen and (max-width: 1024px) {
            gap: 1rem;
            padding: 1rem;
            flex-direction: column;

        }

        .select-item-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            // align-items: stretch;
            // gap: clamp(1rem, 3vw, 5rem);
            padding: 1rem 0;
            // flex: 1 1 32rem;
            width: auto;

            @media screen and (min-width: 1531px) {
                justify-content: space-evenly;
            }

            @media screen and (min-width: 1441px) and (max-width: 1530px) {
                justify-content: center;
                gap: clamp(0.75rem, 1.6vw, 1.5rem);
            }

            @media screen and (max-width: 1440px) {
                width: 100%;
                flex: 0 0 auto;
            }

            @media screen and (max-width: 920px) {
                gap: 1rem;
            }

            @media screen and (max-width: 640px) {
                flex-direction: column;
                align-items: center;
                width: 100%;
            }


        }

        .select-box {
            width: min(100%, 20rem);
            flex: 0 0 auto;
            min-width: 0;
            aspect-ratio: 1/1;
            border: 2px solid #ccc;
            background-color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 15px;
            font-weight: 600;
            padding: clamp(1rem, 3vw, 1.5rem);
            box-sizing: border-box;
            text-align: center;
            transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;

            @media screen and (max-width: 1024px) {
                font-size: 1rem;
                width: 16rem;
            }

            @media screen and (max-width: 768px) {
                font-size: 1rem;
                width: 14rem;
            }

            @media screen and (max-width: 640px) {
                width: min(100%, 22rem);
                aspect-ratio: auto;
                min-height: 12rem;
            }

            &:hover {
                border: #D8A6AF 2px solid;
                transform: scale(1.05);
            }

            @media screen and (max-width: 640px) {
                &:hover {
                    transform: none;
                }
            }

            img {
                margin-bottom: 5%;
                width: min(60%, 9rem);
                max-width: 100%;
                height: auto;
                object-fit: contain;
            }

            .label-box {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: column;
                width: 100%;
                gap: 0.25rem;

                span,
                p {
                    margin: 0;
                    overflow-wrap: anywhere;
                    word-break: break-word;
                    line-height: 1.4;
                }
            }


        }

        .download-section {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            margin-top: 2rem;

            @media screen and (max-width: 640px) {
                width: 100%;
                padding: 0 1rem;
            }
        }

        .certificate-download {
            display: block;
            margin: 0 auto;
            margin-top: 2rem;
            padding: 0.75rem 1.5rem;
            width: min(100%, 20rem);
            height: 3rem;
            font-size: 1rem;
            font-weight: 600;
            color: #fff;
            background-color: #0f6ba0;
            border-radius: 999px;
            text-align: center;
            cursor: pointer;

            &:hover {
                background-color: #874757;
            }
        }
    }
}
</style>