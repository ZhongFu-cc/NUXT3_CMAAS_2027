<template>
    <main class="common-section" v-loading="loading">
        <Banner></Banner>
        <Breadcrumbs firstRoute="Abstract" secoundRoute="Abstract Submission"></Breadcrumbs>
        <Title title="Abstract Submission"></Title>

        <el-form class="form" ref="formRef" :model="data" :rules="formRules" labelPosition="top">

            <div class="main-form">
                <div class="left-seciton">
                    <el-form-item :label="$t('abstractType')" prop="absType">
                        <el-select v-model="data.absType" placeholder="Type">
                            <el-option v-for="item in abstractTypes" :key="item.value" :label="item.label"
                                :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="$t('abstractTitle')" prop="absTitle">
                        <el-input v-model="data.absTitle" :placeholder="$t('abstractTitle')"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('firstAuthor')" prop="firstAuthor">
                        <el-input v-model="data.firstAuthor" :placeholder="$t('firstAuthor')"></el-input>
                    </el-form-item>

                    <el-form-item v-if="data.absType === 'Young Investigator'" :label="$t('firstAuthorBirthday')"
                        prop="firstAuthorBirthday">
                        <el-date-picker v-model="data.firstAuthorBirthday" :placeholder="$t('firstAuthorBirthday')"
                            value-format="YYYY-MM-DD"></el-date-picker>
                    </el-form-item>

                    <el-form-item :label="$t('speaker')" prop="speaker">
                        <el-input v-model="data.speaker" disabled :placeholder="$t('speaker')"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('speakerAffiliation')" prop="speakerAffiliation">
                        <el-input v-model="data.speakerAffiliation" :placeholder="$t('speakerAffiliation')"></el-input>
                    </el-form-item>
                </div>
                <div class="right-section">
                    <el-form-item :label="$t('correspondingAuthor')" prop="correspondingAuthor">
                        <el-input v-model="data.correspondingAuthor"
                            :placeholder="$t('correspondingAuthor')"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('correspondingAuthorMail')" prop="correspondingAuthorEmail">
                        <el-input v-model="data.correspondingAuthorEmail"
                            :placeholder="$t('correspondingAuthorMail')"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('correspondingAuthorPhone')" prop="correspondingAuthorPhone">
                        <el-input v-model="data.correspondingAuthorPhone"
                            :placeholder="$t('correspondingAuthorPhone')"></el-input>
                    </el-form-item>
                    <el-form-item class="allAuthors" :label="$t('allAuthors1')" prop="allAuthor">
                        <el-input type="textarea" v-model="data.allAuthor" :placeholder="$t('allAuthors')"></el-input>
                    </el-form-item>
                    <el-form-item class="allAuthors" :label="$t('allAuthorsAffiliation1')" prop="allAuthorAffiliation">
                        <el-input type="textarea" v-model="data.allAuthorAffiliation"
                            :placeholder="$t('allAuthorsAffiliation')"></el-input>
                    </el-form-item>
                </div>
            </div>

            <div class="file-upload">
                <el-form-item label="Pdf File" prop="fileList">
                    <el-upload ref="uploadRef" class="upload-demo" :limit="1" :on-change="handlePdfUpload"
                        :auto-upload="false" :on-remove="handleRemove" :on-exceed="handleExceed">
                        <el-button size="small" type="primary">{{ $t('upload') }}</el-button>
                        <div slot="tip" class="el-upload__tip">{{ $t('uploadLimit') }}</div>
                    </el-upload>
                </el-form-item>
            </div>

            <el-form-item label="" prop="submit">
                <el-button class="submit-btn" type="primary" @click="submit(formRef)">{{ $t('submit') }}</el-button>
            </el-form-item>
        </el-form>
    </main>
</template>

<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';
import Title from '@/components/layout/Title.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
import type { FormInstance, FormRules, UploadProps, UploadUserFile } from 'element-plus';
import type { UploadOptions } from '@/utils/upload';

const { t } = useI18n();
const { isLogin, checkLoginState, memberInfo } = useAuth();

useSeoMeta({
    title: 'Abstract Submission - TOPBS 2026 International Conference on Oncoplastic Breast Surgery',
    description: 'Welcome to the abstract submission page for the 9th IOPBS (International Oncoplastic Breast Surgery Society) & TOPBS (Taiwan Oncoplastic Breast Surgery Society) Conference 2026. Submit your abstracts for poster, video, or young investigator presentations and be part of this prestigious event in Taipei.',
    keywords: 'Abstract Submission, TOPBS 2026 '
})

interface AbstractInterface {
    memberId?: number;
    absType: string;
    absTitle: string;
    firstAuthor: string;
    firstAuthorBirthday: string;
    speaker: string;
    speakerAffiliation: string;
    correspondingAuthor: string;
    correspondingAuthorEmail: string;
    correspondingAuthorPhone: string;
    allAuthor: string;
    allAuthorAffiliation: string;
    fileList: UploadUserFile[];
}

const router = useRouter();

const abstractTypes = ref([
    { label: t('posterPresentation'), value: 'Poster Presentation' },
    { label: t('videoPresentation'), value: 'Video Presentation' },
    { label: t('youngInvestigator'), value: 'Young Investigator' },
])

const formRef = ref<FormInstance>();
const data = reactive<AbstractInterface>({
    absType: 'Poster Presentation',
    absTitle: '',
    firstAuthor: '',
    firstAuthorBirthday: '',
    speaker: '',
    speakerAffiliation: '',
    correspondingAuthor: '',
    correspondingAuthorEmail: '',
    correspondingAuthorPhone: '',
    allAuthor: '',
    allAuthorAffiliation: '',
    fileList: [],
})

const uploadOptions = ref<UploadOptions>({
    fileType: ['pdf'],
    fileMaxSize: 1024 * 1024 * 20, // 20MB
    fileLimit: 1
})

const handleRemove = handleFileRemove(data.fileList);
const handleExceed: UploadProps['onExceed'] = handleFileExceed(uploadOptions.value, data.fileList);
const handlePdfUpload: UploadProps['onChange'] = handleFileUpload(uploadOptions.value, data.fileList);

const checkAge = (rule: any, value: any, callback: any) => {
    if (value) {
        const now = new Date();
        const birthday = new Date(value);
        const age = now.getFullYear() - birthday.getFullYear();
        if (age > 45) {
            callback(new Error('Age must be less than 45'));
        } else {
            callback();
        }
    } else {
        callback(new Error('Please input your birthday'));
    }
}

const transformDate = (date: string) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const formRules = ref<FormRules>({
    absType: [{ required: true, message: 'Please select type', trigger: 'blur' }],
    absTitle: [{ required: true, message: 'Please input title', trigger: 'blur' }],
    firstAuthor: [{ required: true, message: 'Please input first author', trigger: 'blur' }],
    firstAuthorBirthday: [{ required: true, validator: checkAge, trigger: 'blur' }],
    speaker: [{ required: true, message: 'Please input speaker', trigger: 'blur' }],
    speakerAffiliation: [{ required: true, message: 'Please input speaker affiliation', trigger: 'blur' }],
    correspondingAuthor: [{ required: false, message: 'Please input corresponding author', trigger: 'blur' }],
    correspondingAuthorEmail: [{ required: false, message: 'Please input corresponding author email', trigger: 'blur' }],
    correspondingAuthorPhone: [{ required: false, message: 'Please input corresponding author phone', trigger: 'blur' }],
    allAuthor: [{ required: false, message: 'Please input all authors', trigger: 'blur' }],
    allAuthorAffiliation: [{ required: false, message: 'Please input all authors affiliation', trigger: 'blur' }],
    fileList: [{ required: true, message: 'Please upload file', trigger: 'change' }],
})

const loading = ref(false);
const submitData = new FormData();

const submit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    data.memberId = memberInfo.value.memberId;
    formEl.validate(async (valid) => {
        if (valid) {
            loading.value = true;
            // data.firstAuthorBirthday = transformDate(data.firstAuthorBirthday);
            const { fileList, ...restData } = data;
            submitData.append('data', JSON.stringify(restData));
            data.fileList.forEach((file: any) => {
                submitData.append('files', file.raw);
            })
            let res = await CSRrequest.post('/paper', {
                body: submitData
            });
            if (res.code === 200) {
                ElMessage.success('提交成功!');
                loading.value = false;
                router.push('/member-center');
            } else if (res.code === 400) {
                ElMessage.error(`提交失敗!${res.msg}`);
            } else if (res.code === 500) {
                ElMessage.error(`提交失敗!${res.msg}`);
            } else {
                ElMessage.error('未知錯誤!');
            }
            loading.value = false;
        } else {
            console.log('error submit!!');
            return false;
        }
    })
}

const setting = reactive<any>({});

const findSetting = async () => {
    try {
        let res = await CSRrequest.get('/setting');
        console.log(res);
        Object.assign(setting, res.data);
        checkAvailable(setting);
    } catch (error) {
        console.error('Error fetching setting:', error);
    }
}

const checkAvailable = (paper: any) => {
    // 獲取今日時間
    const currentDate = new Date();
    // 將截止時間字串轉換為 Date 物件
    const endDate = new Date(setting.abstractSubmissionEndTime);

    // if (currentDate >= endDate) {
    //     router.push("/member-center");
    //     ElMessage.error('Abstract submission is closed');
    // }
}

onMounted(() => {
    checkLoginState();
    findSetting();
    if (memberInfo.value) {
        data.speaker = memberInfo.value.firstName + ' ' + memberInfo.value.lastName;
        data.speakerAffiliation = memberInfo.value.affiliation;
    }

    if (!isLogin.value) {
        router.push("/login");
        ElMessage.error('Please log in first');
    }
})
</script>

<style lang="scss" scoped>
.form {
    width: 80%;
    margin: 1rem auto;
    font-weight: 600;

    .member-title {
        display: flex;
        align-items: center;

        :deep(.el-form-item__label) {
            margin: 0 1rem 0 0;
            text-align: center;
        }
    }

    .main-form {
        display: flex;
        gap: 5rem;
        text-wrap: nowrap;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            gap: 2rem;
        }

        .left-seciton {
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .right-section {
            flex: 1;
            display: flex;
            flex-direction: column;

            .category {
                :deep(.el-radio-group) {
                    flex-direction: column;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                }

                :deep(.el-form-item__error) {
                    position: absolute;
                    top: 0.5rem;
                    left: 10rem;

                    @media screen and (max-width: 768px) {
                        left: 13rem;
                    }
                }

                :deep(.el-select) {
                    width: 150px;
                }
            }
        }
    }

    .file-upload {
        :deep(.el-form-item__content) {
            .el-upload {
                display: flex;
                flex-direction: column;
                text-align: start;
                align-items: flex-start;

                .el-button {
                    &:hover {
                        transform: scale(1.05);
                        transition: all 0.3s ease-in-out;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .submit-btn {
        margin-inline: auto;

        &:hover {
            transform: scale(1.05);
            transition: all 0.3s ease-in-out;
            cursor: pointer;
        }
    }
}
</style>