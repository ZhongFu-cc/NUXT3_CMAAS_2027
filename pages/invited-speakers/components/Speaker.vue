<template>
    <div class="speaker-container">
        <article class="speaker-row">
            <div class="photo-ring">
                <img v-if="props.speaker.photoUrl" class="photo-image" :src="envMinio + props.speaker.photoUrl"
                    :alt="props.speaker.name" />
            </div>
            <div class="speaker-detail">
                <!-- 英文：職稱+姓名、單位 -->
                <!-- 姓名（最後兩個字，如 Jaung-Geng Lin）不斷行，過長時只在職稱與姓名之間換行 -->
                <h2 class="name">
                    <span v-if="nameParts.title" class="title">{{ nameParts.title }}</span>
                    {{ ' ' }}<span class="person">{{ nameParts.person }}</span>
                </h2>
                <p v-if="props.speaker.jobTitle" class="unit">{{ props.speaker.jobTitle }}</p>
                <span class="accent-line"></span>
                <!-- 中文：姓名+職稱、單位 -->
                <p class="name-zh">{{ props.speaker.country }}</p>
                <p v-if="props.speaker.affiliation" class="unit">{{ props.speaker.affiliation }}</p>
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

// name 格式為「英文職稱 名 姓」，最後兩個字視為姓名，其餘為職稱
const nameParts = computed(() => {
    const words: string[] = (props.speaker.name ?? '').trim().split(/\s+/).filter(Boolean)
    return {
        title: words.slice(0, -2).join(' '),
        person: words.slice(-2).join(' '),
    }
})

const envMinio = useRuntimeConfig().public.minio
</script>
<style lang="scss" scoped>
$accent: #2f6f9f;

// 版面依「欄寬」而非螢幕寬度調整：一列放兩位時欄位較窄，會自動使用較緊湊的排法
.speaker-container {
    container: speaker / inline-size;
}

.speaker-row {
    display: flex;
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
        // 資訊只有四行，與照片垂直置中
        align-self: center;

        .name {
            font-size: 2.4rem;
            font-weight: bold;
            line-height: 1.25;

            .person {
                white-space: nowrap;
            }
        }

        // 英文單位可能很長，允許任意處斷行避免撐破欄寬
        .unit {
            margin-top: 0.4rem;
            font-size: 1.3rem;
            line-height: 1.6;
            color: #5a4038;
            overflow-wrap: anywhere;
        }

        .accent-line {
            display: block;
            width: 3.5rem;
            height: 4px;
            margin: 1.25rem 0;
            border-radius: 2px;
            background-color: $main-color;
        }

        .name-zh {
            font-size: 1.6rem;
            font-weight: bold;
            line-height: 1.4;
            letter-spacing: 0.05em;
            color: $accent;
            overflow-wrap: anywhere;
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

            .unit {
                font-size: 1.1rem;
            }

            .accent-line {
                margin: 1rem 0;
            }

            .name-zh {
                font-size: 1.35rem;
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
        }
    }
}
</style>
