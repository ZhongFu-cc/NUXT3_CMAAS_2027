<template>
    <div class="common-section">
        <Banner />
        <div class="main-section">
            <Breadcrumbs :first-route="$t('conferenceInformation')" secound-route=""></Breadcrumbs>
            <div class="meeting-info">
                <Title :title="$t('conferenceInformation')"></Title>
                <div class="meeting-info-box">
                    <div class="info-item">
                        <p class="info-title">{{ $t('conferenceDate') }}:
                        </p>
                        <p class="info-content">
                            <span>2027-01-23（{{ $t('saturday') }}），{{ $t('a.m') }}08:00 - {{ $t('p.m') }}17:50</span>
                            <br>
                            <span>2027-01-24（{{ $t('sunday') }}），{{ $t('a.m') }}08:00 - {{ $t('p.m') }}17:10</span>
                        </p>
                    </div>
                    <div class="info-item">
                        <p class="info-title">{{ $t('conferenceLocation') }}:</p>
                        <p class="info-content">{{ $t('location') }}</p>
                    </div>
                </div>
            </div>

            <div class="agenda-info">
                <Title class="title" title="Agenda"></Title>
                <div class="agenda-info-box">
                    <img v-for="agenda in agendas" :key="agenda.publishFileId" :src="envMinio + agenda.path"
                        :alt="agenda.alt" class="gallery-image" />
                </div>
            </div>
            <el-divider />
            <div class="location">
                <h1 class="title">{{ $t('conferenceLocation') }}: <span class="location-info">{{ $t('location')
                        }}</span>
                </h1>
                <div class="location-info-box">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8658638292773!2d121.5187584!3d25.0386258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a975c13ae63d%3A0x99f529730969be7f!2z6LKh5ZyY5rOV5Lq65by15qau55m85Z-66YeR5pyD!5e0!3m2!1szh-TW!2stw!4v1783060399044!5m2!1szh-TW!2stw"
                        width="600" height="450" style="border:0;" :allowfullscreen="true" loading="lazy"
                        referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>
        </div>
        <!-- <h1 class="temp">議程確認中</h1> -->

    </div>
</template>
<script setup lang="ts">
import Title from '@/components/layout/Title.vue';
import Banner from '@/components/layout/Banner.vue';
import Breadcrumbs from '~/components/layout/Breadcrumbs.vue';

useSeoMeta({
    title: '會議資訊 - 中華針灸醫學會 2027 年會',
    description: '探索中華針灸醫學會 2027 年會的會議資訊。本頁面目前正在建設中，敬請期待活動詳情、議程等更新。',
    keywords: '會議資訊,中華針灸醫學會,中華針灸醫學會 2027,2027 中華針灸醫學會,CMAAS 2027,會議資訊 CMAAS 2027'
})

const envMinio = useRuntimeConfig().public.minio


const agendas = ref<any[]>([])
const fetchAgendaFile = async () => {
    try {
        const res: any = await CSRrequest.get(`/publish-file/agenda`)
        agendas.value = res.data
    } catch (error) {
        console.error('Error fetching agenda file:', error);
    }
}

onMounted(() => {
    fetchAgendaFile()
})

</script>
<style lang="scss" scoped>
.common-section {
    // margin: $common-section-margin;
    // width: $common-section-width;
    font-family: $common-section-font-family;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    color: $main-color;

    .temp {
        font-size: 2.5rem;
    }

    .main-section {
        width: 60%;
        margin-inline: auto;

        @media screen and (max-width: 1024px) {
            width: 80%;
        }
    }

    .meeting-info {
        border-width: 1px 0 1px 0;
        border-style: solid;
        border-color: #D3D3D3;
        width: 100%;
        margin: 0 auto;
        padding: 1.5rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .meeting-info-box {

            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            font-size: 1.5rem;
            line-height: 2rem;
            gap: 2rem;

            @media screen and (max-width: 768px) {
                font-size: 1.2rem;
            }

            .info-item {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .info-title {
                font-weight: bold;
                font-size: 2rem;

                @media screen and (max-width: 768px) {
                    font-size: 1.2rem;
                }
            }

            .info-content {
                color: $main-text-color;
                font-weight: normal;
                font-size: 1.5rem;
                gap: 1rem;

                @media screen and (max-width: 768px) {
                    font-size: 1.2rem;
                }
            }
        }
    }

    .agenda-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0 auto;


        img {
            width: 100%;
        }

        .agenda-download {
            background-color: #D27DA6;
            display: block;
            margin: 2rem auto 0 auto;
            padding: 0.5rem 0;
            color: white;
            border: 1px solid black;
            border-radius: 0.3rem;
            text-align: center;
            width: 70%;
            font-size: 1.5rem;

            @media screen and (max-width: 768px) {
                font-size: 1.2rem;
            }

            &:hover {
                box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
            }
        }
    }

    .registration {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 2.5rem 0;
        border-width: 1px 0 1px 0;
        border-style: solid;
        border-color: #D3D3D3;

        .download {
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .location {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 2.5rem 0;
        border-width: 0px 0 1px 0;
        border-style: solid;
        border-color: #D3D3D3;
        width: 100%;
        margin: 0 auto;

        .title {
            font-weight: bold;
            font-size: 1.5rem;
            margin-right: 1rem;

            @media screen and (max-width: 768px) {
                font-size: 1.2rem;
            }
        }

        .location-info {
            font-size: 1.5rem;
            font-weight: normal;

            @media screen and (max-width: 768px) {
                font-size: 1.2rem;

            }

        }

        .location-info-box {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            iframe {
                width: 100%;
                height: 30rem;
                border-radius: 0.5rem;
            }
        }
    }

}
</style>