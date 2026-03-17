<template>
    <div class="countdown-timer">
        <div class="note">距離活動</div>
        <div class="timeer">
            <span>{{ timeLeft.days }}天</span>
            <span>{{ timeLeft.hours }}時</span>
            <span>{{ timeLeft.minutes }}分</span>
            <span>{{ timeLeft.seconds }}秒</span>
        </div>
    </div>
</template>
<script setup lang="ts">

const props = defineProps<{
    targetDate: Date
}>()

const timeLeft = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
});

const timer = ref<ReturnType<typeof setInterval> | null>(null);

const calculateTimeLeft = () => {
    const now = new Date();
    const difference = props.targetDate.getTime() - now.getTime();

    if (difference > 0) {
        timeLeft.value.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        timeLeft.value.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        timeLeft.value.minutes = Math.floor((difference / (1000 * 60)) % 60);
        timeLeft.value.seconds = Math.floor((difference / 1000) % 60);
    } else {
        timeLeft.value.days = 0;
        timeLeft.value.hours = 0;
        timeLeft.value.minutes = 0;
        timeLeft.value.seconds = 0;
    }
};


onMounted(() => {
    calculateTimeLeft();
    timer.value = setInterval(calculateTimeLeft, 1000);
});

onUnmounted(() => {
    if (timer.value) {
        clearInterval(timer.value);
    }
});

</script>
<style lang="scss" scoped>
.countdown-timer {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: self-start;
    padding: 1rem 0;
    // border-radius: 0.5rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.278);

    .note {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        padding: 0.5rem 1rem;
    }

    .timeer {
        font-size: 3.5rem;
        display: flex;
        width: 60%;
        margin-inline: auto;
        gap: 1rem;
        justify-content: space-between;
        text-align: center;
    }
}
</style>