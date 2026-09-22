<template>
    <div class="speaker-container">
        <article class="speaker-row">
            <div class="photo-ring">
                <img v-if="props.speaker.photoUrl" class="photo-image" :src="envMinio + props.speaker.photoUrl"
                    :alt="props.speaker.name" />
            </div>
            <div class="speaker-detail">
                <h2 class="name">{{ props.speaker.name }}</h2>
                <p class="country">{{ props.speaker.country }}</p>
                <span class="accent-line"></span>
                <p v-if="props.speaker.jobTitle" class="job-title">{{ props.speaker.jobTitle }}</p>
                <div v-if="props.speaker.affiliation" class="topic">
                    <span class="topic-tag">{{ t('speakerTopic') }}</span>
                    <p class="topic-text">{{ props.speaker.affiliation }}</p>
                </div>
            </div>
        </article>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    speaker: {
        type: Object,
        required: true
    }
})

const envMinio = useRuntimeConfig().public.minio
const { t } = useI18n()
</script>
<style lang="scss" scoped>
$accent: #2f6f9f;

// 版面依「欄寬」而非螢幕寬度調整：一列放兩位時欄位較窄，會自動使用較緊湊的排法
.speaker-container {
    container: speaker / inline-size;
}

.speaker-row {
    display: flex;
    // 照片固定對齊列頂端，避免講題過長把照片推離原本位置
    align-items: flex-start;
    gap: 4rem;
    color: #371307;

    .photo-ring {
        flex: 0 0 15rem;
        width: 15rem;
        aspect-ratio: 1;
        border-radius: 50%;
        overflow: hidden;
        background-color: #e8f1f8;
        // 圓框外再加一圈留白的細環
        box-shadow: 0 0 0 6px #fff, 0 0 0 9px $main-color;

        .photo-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .speaker-detail {
        flex: 1;
        min-width: 0;

        .name {
            font-size: 2.4rem;
            font-weight: bold;
            line-height: 1.2;
            overflow-wrap: anywhere;
        }

        .country {
            margin-top: 0.5rem;
            font-size: 1.6rem;
            letter-spacing: 0.15em;
            color: $accent;
        }

        .accent-line {
            display: block;
            width: 3.5rem;
            height: 4px;
            margin: 1.25rem 0;
            border-radius: 2px;
            background-color: $main-color;
        }

        .job-title {
            font-size: 1.3rem;
            line-height: 1.7;
        }

        .topic {
            margin-top: 1.5rem;
            padding-left: 1.25rem;
            border-left: 4px solid $main-color;

            .topic-tag {
                display: inline-block;
                margin-bottom: 0.5rem;
                padding: 0.1rem 0.75rem;
                border-radius: 999px;
                background-color: $accent;
                color: #fff;
                font-size: 0.95rem;
                font-weight: bold;
                letter-spacing: 0.1em;
            }

            .topic-text {
                font-size: 1.35rem;
                font-weight: 500;
                line-height: 1.7;
            }
        }
    }
}

// 緊湊：照片仍在左，尺寸與字級縮小（一列兩位時使用）
@container speaker (max-width: 640px) {
    .speaker-row {
        gap: 2rem;

        .photo-ring {
            flex-basis: 10rem;
            width: 10rem;
        }

        .speaker-detail {
            .name {
                font-size: 1.8rem;
            }

            .country {
                font-size: 1.3rem;
            }

            .accent-line {
                margin: 1rem 0;
            }

            .job-title {
                font-size: 1.1rem;
            }

            .topic {
                margin-top: 1.25rem;

                .topic-text {
                    font-size: 1.15rem;
                }
            }
        }
    }
}

// 窄欄（手機）：照片在上、文字在下並置中
@container speaker (max-width: 400px) {
    .speaker-row {
        flex-direction: column;
        align-items: center;
        gap: 2.5rem;
        text-align: center;

        .photo-ring {
            flex-basis: auto;
            width: min(70%, 14rem);
        }

        .speaker-detail {
            width: 100%;

            .accent-line {
                margin: 1rem auto;
            }

            .topic {
                padding-left: 0;
                border-left: none;
            }
        }
    }
}
</style>
