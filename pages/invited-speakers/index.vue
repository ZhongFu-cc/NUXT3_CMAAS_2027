<template>
  <div>
    <main class="common-section">
      <Banner></Banner>
      <Breadcrumbs firstRoute="" :secoundRoute="t('invitedSpeaker')"></Breadcrumbs>
      <Title :title="t('invitedSpeaker')"></Title>
      <div class="content">
        <SpeakerV3 class="speaker-item" v-for="item in speakers" :key="item.invitedSpeakerId" :speaker="item"></SpeakerV3>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'
import Banner from '@/components/layout/Banner.vue';
import SpeakerV3 from './components/SpeakerV3.vue';
import Title from '@/components/layout/Title.vue';

const speakers = reactive<any>([]);

const { t } = useI18n();

const getSpeakers = async () => {
  let res = await CSRrequest.get('/invited-speaker/pagination', {
    params: {
      page: 1,
      size: 100,
    },
  })
  if (res.code === 200) {
    // country 欄位存放中文名，統一依英文名(name)的姓氏排序
    const sorted = [...res.data.records].sort((a: any, b: any) => {
      const aLast = a.name.trim().split(/\s+/).pop()!;
      const bLast = b.name.trim().split(/\s+/).pop()!;
      const lastCompare = aLast.localeCompare(bLast, 'en', { sensitivity: 'base' });
      if (lastCompare !== 0) return lastCompare;
      return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });
    speakers.splice(0, speakers.length, ...sorted);
  }
};

onMounted(() => {
  getSpeakers();
});
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
