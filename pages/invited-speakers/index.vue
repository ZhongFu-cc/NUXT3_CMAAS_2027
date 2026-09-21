<template>
  <div>
    <main class="common-section">
      <Banner></Banner>
      <!-- <h1 class="title">Invited Speakers</h1> -->
      <Breadcrumbs firstRoute="" :secoundRoute="t('invitedSpeaker')"></Breadcrumbs>
      <Title :title="t('invitedSpeaker')"></Title>
      <div class="content">
        <speaker class="speaker" v-for="item in speakers" :speaker="item"></speaker>
      </div>
    </main>
    <!-- <p style="text-align: center; color: #e5716b"><b>Speakers are currently being invited</b></p> -->

  </div>
</template>
<script setup lang="ts">
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'
import Banner from '@/components/layout/Banner.vue';
import Speaker from './components/speaker.vue';
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
    // country 欄位現在存放中文名，不再用來分組，統一依英文名(name)的姓氏排序
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
  // width: $common-section-width;
  margin: $common-section-margin;
  font-family: $common-section-font-family;

  .title {
    margin-left: 7.4%;
    font-size: 2.5rem;
    color: $main-color;
  }

  .content {
    width: 80%;
    margin: 1rem auto;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2rem;
    padding: 1.5rem;

    h1 {
      font-size: 1.5rem;
    }

    .speaker {
      width: calc(100% / 3 - 2rem);

      @media screen and (max-width: 1200px) {
        width: calc(100% / 2 - 2rem);
      }

      @media screen and (max-width: 870px) {
        width: calc(100% / 1 - 2rem);
      }

      @media screen and (max-width: 500px) {
        width: calc(100% - 2rem);
      }
    }
  }
}
</style>