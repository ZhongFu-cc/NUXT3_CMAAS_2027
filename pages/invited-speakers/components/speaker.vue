<template>
    <div class="speaker-info" role="button" tabindex="0" @click="dialogVisible = true"
        @keydown.enter.prevent="dialogVisible = true" @keydown.space.prevent="dialogVisible = true">
        <div class="profile-image-box">
            <img v-if="props.speaker.photoUrl" class="profile-image" :src="envMinio + props.speaker.photoUrl"
                alt="Speaker Image" />
            <el-icon v-else class="avatar-uploader-icon">
                <!-- <Avatar /> -->
            </el-icon>
        </div>
        <div class="profile-info">
            <h2 class="speaker-name">{{ props.speaker.name }}</h2>
            <p class="speaker-country">{{ props.speaker.country }}</p>
        </div>

        <el-dialog v-model="dialogVisible" width="min(92vw, 32rem)" append-to-body class="speaker-dialog">
            <div class="dialog-content">
                <div class="dialog-image-box">
                    <img v-if="props.speaker.photoUrl" class="dialog-image" :src="envMinio + props.speaker.photoUrl"
                        alt="Speaker Image" />
                </div>
                <h2 class="dialog-name">{{ props.speaker.name }}</h2>
                <p class="dialog-country">{{ props.speaker.country }}</p>
                <p v-if="props.speaker.jobTitle" class="dialog-job-title">{{ props.speaker.jobTitle }}</p>
                <div v-if="props.speaker.affiliation" class="dialog-topic">
                    <span class="dialog-topic-label">{{ t('speakerTopic') }}</span>
                    <p>{{ props.speaker.affiliation }}</p>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    speaker: {
        type: Object,
        required: true
    }
})


watch(() => props, (newVal) => {
    console.log(newVal);
})
const envMinio = useRuntimeConfig().public.minio
const { t } = useI18n()
const dialogVisible = ref(false)
</script>
<style lang="scss" scoped>
.speaker-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;
    gap: 1rem;
    cursor: pointer;

    .profile-image-box {
        width: 13rem;
        height: 13rem;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;

        &:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease-in-out;
            cursor: pointer;
        }
    }

    .profile-image {
        width: 100%;
        height: auto;
    }

    .profile-info {
        // margin-left: 2rem;

        text-align: center;
        width: 13rem;

        .speaker-name {
            font-size: 1.5rem;
            font-weight: bold;
            font-style: italic;
            text-wrap: nowrap;
            color: #371307;
        }

        .speaker-country {
            font-style: italic;
            font-size: 1rem;
            color: #371307;
        }

    }
}

.dialog-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 0 1rem 1.5rem;
    text-align: center;
    color: #371307;

    .dialog-image-box {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        overflow: hidden;
        background-color: #f0f0f0;

        .dialog-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .dialog-name {
        font-size: 1.5rem;
        font-weight: bold;
        font-style: italic;
    }

    .dialog-country {
        font-size: 1.1rem;
        font-style: italic;
    }

    .dialog-job-title {
        font-size: 1rem;
    }

    .dialog-topic {
        width: 100%;
        margin-top: 0.5rem;
        padding-top: 1rem;
        border-top: 1px solid #e5e5e5;

        .dialog-topic-label {
            display: block;
            margin-bottom: 0.25rem;
            font-size: 0.875rem;
            font-weight: bold;
            opacity: 0.7;
        }

        p {
            line-height: 1.6;
        }
    }
}
</style>
