<template>
  <div>
    <main class="common-section">
      <Banner></Banner>
      <Breadcrumbs :firstRoute="t('invitedSpeaker')" :secoundRoute="t('workshopSpeaker')"></Breadcrumbs>
      <Title :title="t('workshopSpeaker')"></Title>
      <div class="content">
        <SpeakerCard class="speaker-item" v-for="item in WORKSHOP_SPEAKERS" :key="item.id" :speaker="item">
        </SpeakerCard>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'
import Banner from '@/components/layout/Banner.vue';
import Title from '@/components/layout/Title.vue';
import SpeakerCard from '@/components/workshop/SpeakerCard.vue';
import { WORKSHOP_SPEAKERS } from '@/utils/workshop';

const { t } = useI18n();

useSeoMeta({
  title: 'Workshop 講師 - 中華針灸醫學會 2027 年會',
  description: '中華針灸醫學會 2027 年會 1/23（六）Workshop 講師介紹。',
  keywords: 'Workshop,講師,中華針灸醫學會,CMAAS 2027'
})
</script>
<style lang="scss" scoped>
.common-section {
  margin: $common-section-margin;
  font-family: $common-section-font-family;

  .content {
    width: 80%;
    margin: 1rem auto 3rem;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    column-gap: 4rem;

    // 螢幕夠寬時一列放兩位，較窄時自動縮成一位
    @media screen and (min-width: 1100px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      column-gap: 3rem;
    }

    @media screen and (max-width: 870px) {
      width: 92%;
    }

    .speaker-item {
      padding: 3rem 0;
      border-bottom: 1px solid #d6e6f2;

      // 最後一列不畫分隔線（單欄時為最後一位，雙欄時為最後一列的兩位）
      &:last-child {
        border-bottom: none;
      }

      @media screen and (min-width: 1100px) {
        &:nth-last-child(2):nth-child(odd) {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
