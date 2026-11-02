<template>
    <div class="common-section">
        <Banner />
        <div class="main-section">
            <Breadcrumbs :first-route="$t('conferenceInformation')" :secound-route="$t('workshopInformation')">
            </Breadcrumbs>
            <Title :title="$t('workshopCourseIntro')"></Title>

            <div class="intro">
                <p class="date">{{ $t('workshopDate') }}：{{ WORKSHOP_DATE }}（{{ $t('saturday') }}）</p>
                <!-- 報名規則置於課程介紹上方 -->
                <p class="rule">
                    <span class="rule-label">{{ $t('workshopNote') }}</span>
                    {{ $t('workshopRegistrationRule') }}
                </p>
            </div>

            <section v-for="period in periods" :key="period.key" class="period">
                <h2 class="period-title">{{ period.label }}</h2>
                <div class="course-list">
                    <article v-for="course in period.courses" :key="course.id" class="course-card">
                        <header class="course-header">
                            <span class="track">{{ period.label }}{{ course.track }}{{ $t('workshopSession') }}</span>
                            <span class="time">{{ course.time }}</span>
                        </header>

                        <dl class="course-body">
                            <div class="row">
                                <dt>{{ $t('workshopTopic') }}</dt>
                                <dd class="topic">
                                    <template v-if="course.topic.length">
                                        <p v-for="line in course.topic" :key="line">{{ line }}</p>
                                    </template>
                                    <p v-else class="tbd">{{ $t('workshopTbd') }}</p>
                                </dd>
                            </div>
                            <div class="row">
                                <dt>{{ $t('workshopLecturer') }}</dt>
                                <dd>
                                    <nuxt-link to="/workshop/speakers" class="lecturer">
                                        <img class="lecturer-photo" :src="speakerOf(course).photo"
                                            :alt="speakerOf(course).nameZh"
                                            :style="{ objectPosition: speakerOf(course).photoPosition }" />
                                        <span>
                                            <span class="lecturer-name">{{ speakerOf(course).nameZh }}</span>
                                            <span class="lecturer-unit">{{ speakerOf(course).unitZh }}</span>
                                        </span>
                                    </nuxt-link>
                                </dd>
                            </div>
                            <div class="row">
                                <dt>{{ $t('workshopHighlights') }}</dt>
                                <dd class="highlights">
                                    <template v-if="course.highlights.length">
                                        <div v-for="(item, index) in course.highlights" :key="index"
                                            class="highlight">
                                            <p v-if="item.title" class="highlight-title">{{ item.title }}</p>
                                            <p>{{ item.text }}</p>
                                        </div>
                                    </template>
                                    <p v-else class="tbd">{{ $t('workshopTbd') }}</p>
                                </dd>
                            </div>
                        </dl>
                    </article>
                </div>
            </section>

            <div class="more">
                <nuxt-link to="/workshop/speakers" class="more-link">{{ $t('workshopSpeakerMore') }}</nuxt-link>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Title from '@/components/layout/Title.vue';
import Banner from '@/components/layout/Banner.vue';
import Breadcrumbs from '~/components/layout/Breadcrumbs.vue';
import { WORKSHOP_COURSES, WORKSHOP_DATE, WORKSHOP_SPEAKERS, type WorkshopCourse } from '@/utils/workshop';

const { t } = useI18n();

useSeoMeta({
    title: 'Workshop 資訊 - 中華針灸醫學會 2027 年會',
    description: '中華針灸醫學會 2027 年會 1/23（六）Workshop 課程介紹：時間、講題、講師與課程重點。',
    keywords: 'Workshop,工作坊,頰針療法,雷射針灸,古典針灸,中華針灸醫學會,CMAAS 2027'
})

// 上午、下午各一區，區內依 A、B 場排列
const periods = computed(() => [
    { key: 'morning', label: t('workshopMorning') },
    { key: 'afternoon', label: t('workshopAfternoon') },
].map(period => ({
    ...period,
    courses: WORKSHOP_COURSES.filter(course => course.period === period.key),
})))

const speakerOf = (course: WorkshopCourse) =>
    WORKSHOP_SPEAKERS.find(speaker => speaker.id === course.speakerId)!
</script>
<style lang="scss" scoped>
$accent: #2f6f9f;
$border: #d6e6f2;

.common-section {
    font-family: $common-section-font-family;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $main-color;

    .main-section {
        width: 80%;
        max-width: 1280px;
        margin: 0 auto 3rem;

        @media screen and (max-width: 870px) {
            width: 92%;
        }
    }

    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-bottom: 3rem;
        text-align: center;

        .date {
            font-size: 1.5rem;
            font-weight: bold;

            @media screen and (max-width: 768px) {
                font-size: 1.2rem;
            }
        }

        .rule {
            padding: 1rem 1.5rem;
            border-left: 4px solid $main-color;
            border-radius: 0.3rem;
            background-color: #eef5fb;
            color: $main-text-color;
            font-size: 1.2rem;
            font-weight: bold;
            line-height: 1.6;
            text-align: left;

            @media screen and (max-width: 768px) {
                font-size: 1rem;
            }

            .rule-label {
                margin-right: 0.5rem;
                color: $main-color;
            }
        }
    }

    .period {
        margin-bottom: 1rem;

        .period-title {
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid $main-color;
            font-size: 2rem;
            font-weight: bold;

            @media screen and (max-width: 768px) {
                font-size: 1.5rem;
            }
        }
    }

    // A、B 兩場並排，較窄時改為上下排列
    // 卡片用 subgrid 共用列軌：並排時同一列（標題、講題、講師、課程重點）取兩場中較高者，格子對齊
    .course-list {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        column-gap: 2rem;

        @media screen and (min-width: 1100px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    .course-card {
        display: grid;
        grid-row: span 4;
        grid-template-rows: subgrid;
        row-gap: 0;
        margin-bottom: 2rem;
        border: 1px solid $border;
        border-radius: 0.6rem;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0 2px 10px rgba(47, 111, 159, 0.08);

        .course-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            padding: 1rem 1.5rem;
            background-color: $main-color;
            color: #fff;
            font-size: 1.3rem;
            font-weight: bold;
        }

        // 各列直接成為卡片 subgrid 的項目
        .course-body {
            display: contents;

            .row {
                display: grid;
                grid-template-columns: 6rem minmax(0, 1fr);
                align-content: start;
                gap: 1rem;
                margin: 0 1.5rem;
                padding: 1rem 0;
                border-bottom: 1px dashed $border;

                &:first-child {
                    margin-top: 0.5rem;
                }

                &:last-child {
                    padding-bottom: 1.5rem;
                    border-bottom: none;
                }

                @media screen and (max-width: 600px) {
                    grid-template-columns: minmax(0, 1fr);
                    gap: 0.5rem;
                }
            }

            dt {
                color: $accent;
                font-size: 1.1rem;
                font-weight: bold;
            }

            dd {
                color: $main-text-color;
                font-size: 1.1rem;
                line-height: 1.7;
            }

            .topic {
                color: $main-color;
                font-size: 1.25rem;
                font-weight: bold;
            }

            .tbd {
                color: #999;
                font-style: italic;
                font-weight: normal;
            }

            .lecturer {
                display: inline-flex;
                align-items: center;
                gap: 1rem;
                color: inherit;

                &:hover .lecturer-name {
                    text-decoration: underline;
                }
            }

            .lecturer-photo {
                flex: 0 0 4rem;
                width: 4rem;
                aspect-ratio: 1;
                border-radius: 50%;
                object-fit: cover;
                background-color: #e8f1f8;
            }

            .lecturer-name {
                display: block;
                color: $main-color;
                font-weight: bold;
            }

            .lecturer-unit {
                display: block;
                font-size: 1rem;
            }

            .highlights {
                display: flex;
                flex-direction: column;
                gap: 0.8rem;

                .highlight-title {
                    color: $main-color;
                    font-weight: bold;
                }
            }
        }
    }

    .more {
        display: flex;
        justify-content: center;

        .more-link {
            padding: 0.6rem 2rem;
            border: 1px solid $main-color;
            border-radius: 2rem;
            color: $main-color;
            font-size: 1.2rem;
            transition: background-color 0.2s, color 0.2s;

            &:hover {
                background-color: $main-color;
                color: #fff;
            }
        }
    }
}
</style>
