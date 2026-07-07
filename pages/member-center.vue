<template>
    <main class="common-section">
        <Banner />
        <Breadcrumbs :first-route="'Member'" :secound-route="$t('memberCenter')" />
        <div class="title-section">
            <h1 class="title">{{ $t('memberCenter') }}</h1>
        </div>

        <section v-if="!loading" class="profile-reminder-section">
            <div class="profile-reminder-card" :class="{ 'is-complete': isComplete }">
                <div class="reminder-header">
                    <div>
                        <p class="reminder-eyebrow">
                            {{ t('profile') }}
                        </p>

                        <h2 class="reminder-title">
                            {{ reminderInfo.title }}
                        </h2>
                    </div>
                </div>

                <p class="reminder-description" :class="{ 'is-complete': isComplete }">
                    {{ reminderInfo.description }}
                </p>

                <div class="missing-field-list">
                    <span v-if="isIncomplete" class="missing-field-chip">
                        {{ statusLabel }}
                    </span>
                </div>
            </div>
        </section>


        <div class="select-item-box">
            <nuxt-link v-for="item in menuList" :key="item.path" :to="item.path" class="select-box">
                <div class="label-box">
                    <img :src="item.icon" alt="" class="select-box__icon" />
                    <span>{{ item.label }}</span>
                </div>
            </nuxt-link>
        </div>

    </main>
</template>
<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
import paymentIcon from '@/assets/img/payment-icon.png';
import profileIcon from '@/assets/img/user-edit.svg';

const { t } = useI18n();
const router = useRouter();

interface MemberInfo {
    status: number;
    [key: string]: any;
}

enum MemberStatus {
    NotPaid = 0,
    PendingReview = 1,
    Approved = 2,
    PaidFail = 3
}

const memberInfo = reactive<MemberInfo>({
    status: MemberStatus.NotPaid
});

const loading = ref(true);

const incompleteStatuses = [
    MemberStatus.NotPaid,
    MemberStatus.PendingReview,
    MemberStatus.PaidFail
];

const isIncomplete = computed(() =>
    incompleteStatuses.includes(memberInfo.status)
);

const isComplete = computed(() => !isIncomplete.value);

const statusLabelMap = computed<Record<number, string>>(() => ({
    [MemberStatus.NotPaid]: t('notPaid'),
    [MemberStatus.PendingReview]: t('pendingReview'),
    [MemberStatus.PaidFail]: t('paidFail')
}));

const statusLabel = computed(
    () => statusLabelMap.value[memberInfo.status] || ''
);

const reminderInfo = computed(() => ({
    title: isComplete.value
        ? t('memberInfo')
        : t('profileIncomplete'),

    description: isComplete.value
        ? t('isQualified')
        : t('profileReminder')
}));

const menuList = computed(() => [
    {
        path: '/payment',
        icon: paymentIcon,
        label: t('payment')
    },
    {
        path: '/profile',
        icon: profileIcon,
        label: t('profile')
    }
]);

const logoutAndRedirect = () => {
    localStorage.removeItem('Authorization-member');
    router.push('/login');
};

const getMemberInfo = async () => {
    try {
        const res = await CSRrequest.get('/member/owner');

        if (res.code !== 200) {
            return logoutAndRedirect();
        }

        Object.assign(memberInfo, res.data);

    } catch (error) {
        console.error('Get Member Info Error:', error);
        logoutAndRedirect();

    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    getMemberInfo();
});
</script>

<style lang="scss" scoped>
// ========================================
// Variables
// ========================================

$primary-color: $main-color;
$primary-hover: $main-color;

$success-color: #477e5c;
$success-hover: #35654c;

$text-color: #3c2b31;
$text-secondary: #5a4a50;
$chip-color: #7a4452;

$shadow-primary: 0 18px 40px rgba(110, 57, 70, 0.08);
$shadow-success: 0 18px 40px rgba(53, 101, 76, 0.12);

$desktop: 1440px;
$tablet: 1024px;
$mobile: 640px;


// ========================================
// Mixins
// ========================================

@mixin hover-card {
    transition: all .3s ease;

    &:hover {
        transform: translateY(-4px);
    }
}


// ========================================
// Main
// ========================================

.common-section {
    font-family: $common-section-font-family;
}


// ========================================
// Title
// ========================================

.title-section {
    margin-top: 1rem;
    padding: 0 1rem;
    text-align: center;

    .title {
        font-size: clamp(2rem, 4vw, 2.7rem);
        font-weight: 600;
    }
}


// ========================================
// Reminder
// ========================================

.profile-reminder-section {
    padding: 0 1rem;
}

.profile-reminder-card {
    width: min(100%, 1120px);
    margin: 2rem auto 0;
    padding: clamp(1.25rem, 3vw, 2rem);

    border-radius: 24px;
    border: 1px solid rgba(160, 88, 106, 0.2);

    background: linear-gradient(135deg,
            rgba(255, 245, 247, 0.98),
            rgba(255, 255, 255, 0.95));

    box-shadow: $shadow-primary;
    box-sizing: border-box;
}

.profile-reminder-card.is-complete {
    border-color: rgba(71, 126, 92, 0.24);

    background: linear-gradient(135deg,
            rgba(231, 247, 236, 0.98),
            rgba(245, 255, 248, 0.96));

    box-shadow: $shadow-success;
}

.reminder-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    margin-bottom: 1rem;

    @media (max-width: $tablet) {
        flex-direction: column;
        align-items: flex-start;
    }
}

.reminder-eyebrow {
    margin: 0 0 .35rem;

    font-size: .9rem;
    font-weight: 700;
    letter-spacing: .08em;

    text-transform: uppercase;
    color: $primary-color;
}

.is-complete .reminder-eyebrow {
    color: $success-color;
}

.reminder-title {
    margin: 0;

    font-size: clamp(1.35rem, 2vw, 1.8rem);
    color: $text-color;
}

.is-complete .reminder-title {
    color: #234330;
}

.reminder-description {
    margin: 0;
    line-height: 1.7;
    color: $text-secondary;
}

.reminder-description.is-complete {
    color: $success-hover;
    font-weight: 500;
}

.missing-field-list {
    display: flex;
    flex-wrap: wrap;
    gap: .75rem;

    margin-top: 1.25rem;
}

.missing-field-chip {
    display: inline-flex;
    align-items: center;

    min-height: 2.5rem;
    padding: .5rem .9rem;

    border-radius: 999px;

    border: 1px solid rgba(160, 88, 106, .28);
    background-color: #fff;

    color: $chip-color;
    font-weight: 600;
}


// ========================================
// Menu Section
// ========================================

.select-section {
    background: url('assets/img/login_background.png') repeat center center;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    gap: clamp(1.5rem, 4vw, 4rem);

    padding: clamp(1.5rem, 4vw, 3rem);

    max-width: 1800px;
    margin: 3rem auto;

    box-sizing: border-box;

    @media (max-width: $desktop) {
        flex-direction: column;
    }

    @media (max-width: $tablet) {
        padding: 1rem;
        gap: 1rem;
    }
}

.select-item-box {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    background: url('assets/img/login_background.png') no-repeat center center;

    gap: clamp(1rem, 3vw, 5rem);

    flex: 1 1 32rem;
    margin: 1rem 0;
    padding: 1rem 0;

    @media (max-width: $desktop) {
        width: 100%;
        flex: none;
    }

    @media (max-width: $mobile) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
}

.select-box {
    @include hover-card;

    width: clamp(14rem, 20vw, 20rem);

    aspect-ratio: 1 / 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: clamp(1rem, 3vw, 1.5rem);

    border: 2px solid #ccc;
    border-radius: 15px;

    background-color: #fff;

    text-align: center;
    font-weight: 600;

    box-sizing: border-box;

    &:hover {
        border-color: $primary-hover;
    }

    @media (max-width: $mobile) {
        width: min(100%, 22rem);
        min-height: 12rem;
        aspect-ratio: auto;

        &:hover {
            transform: none;
        }
    }
}

.select-box__icon {
    width: min(60%, 9rem);
    max-width: 100%;
    height: auto;

    object-fit: contain;

    margin-bottom: 5%;
}

.label-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    gap: .25rem;

    span,
    p {
        margin: 0;
        line-height: 1.4;

        overflow-wrap: anywhere;
        word-break: break-word;

        color: $main-color;
    }
}


// ========================================
// Skeleton Loading
// ========================================

.skeleton {
    width: min(100%, 1120px);
    height: 180px;

    margin: 2rem auto 0;

    border-radius: 24px;

    background: linear-gradient(90deg,
            #f2f2f2 25%,
            #fafafa 50%,
            #f2f2f2 75%);

    background-size: 400% 100%;

    animation: skeleton-loading 1.4s infinite;
}

@keyframes skeleton-loading {
    0% {
        background-position: 100% 0;
    }

    100% {
        background-position: -100% 0;
    }
}
</style>