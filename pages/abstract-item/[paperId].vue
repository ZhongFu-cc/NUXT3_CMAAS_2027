<template>
    <main class="common-section">
        <Banner></Banner>
        <Breadcrumbs firstRoute="Abstracts" secoundRoute="Abstract Submission"></Breadcrumbs>
        <Title title="Abstract Submission"></Title>

        <el-form class="form" ref="formRef" :model="data" :rules="formRules" labelPosition="top">

            <div class="main-form">
                <div class="left-seciton">
                    <el-form-item label="Type" prop="absType">
                        <el-select disabled v-model="data.absType" placeholder="Type"></el-select>
                    </el-form-item>
                    <el-form-item label="Abstract Title" prop="absTitle">
                        <el-input v-model="data.absTitle" placeholder="Titile"></el-input>
                    </el-form-item>
                    <el-form-item label="First Author" prop="firstAuthor">
                        <el-input v-model="data.firstAuthor" placeholder="First Author"></el-input>
                    </el-form-item>

                    <el-form-item v-if="data.absType === 'Young Investigator'" label="First Author Birthday"
                        prop="firstAuthorBirthday">
                        <el-date-picker v-model="data.firstAuthorBirthday" placeholder="First Author Affiliation"
                            value-format="YYYY-MM-DD"></el-date-picker>
                    </el-form-item>

                    <el-form-item label="Speaker" prop="speaker">
                        <el-input v-model="data.speaker" placeholder="Speaker"></el-input>
                    </el-form-item>
                    <el-form-item label="Speaker Affiliation" prop="speakerAffiliation">
                        <el-input v-model="data.speakerAffiliation" placeholder="Speaker Affiliation"></el-input>
                    </el-form-item>
                </div>
                <div class="right-section">
                    <el-form-item label="Corresponding Author" prop="correspondingAuthor">
                        <el-input v-model="data.correspondingAuthor" placeholder="Corresponding Author"></el-input>
                    </el-form-item>
                    <el-form-item label="Corresponding Author Mail" prop="correspondingAuthorEmail">
                        <el-input v-model="data.correspondingAuthorEmail"
                            placeholder="Corresponding Author Email"></el-input>
                    </el-form-item>
                    <el-form-item label="Corresponding Author Phone" prop="correspondingAuthorPhone">
                        <el-input v-model="data.correspondingAuthorPhone"
                            placeholder="Corresponding Author Phone"></el-input>
                    </el-form-item>
                    <el-form-item class="allAuthors" label="All Authors(Use semicolon to separate authors)"
                        prop="allAuthor">
                        <el-input type="textarea" v-model="data.allAuthor" placeholder="All Authors"></el-input>
                    </el-form-item>
                    <el-form-item class="allAuthors"
                        label="All Authors Affiliation(Use semicolon to separate authors affilication)"
                        prop="allAuthorAffiliation">
                        <el-input type="textarea" v-model="data.allAuthorAffiliation"
                            placeholder="All Authors Affiliation"></el-input>
                    </el-form-item>
                </div>
            </div>


            <div class="file-upload">
                <el-form-item label="Pdf File" prop="fileList">
                    <el-upload ref="uploadRef" class="upload-demo" :limit="1" :on-change="handlePdfUpload"
                        :auto-upload="false" :on-remove="handleRemove" :on-exceed="handleExceed">
                        <el-button size="small" type="primary">Upload</el-button>
                        <div slot="tip" class="el-upload__tip">
                            <span>Only upload pdf file with size less than 20mb</span>
                            <span class="warning">Updating the paper requires re-uploading.</span>
                        </div>
                    </el-upload>
                </el-form-item>
                <!-- <el-form-item label="File2" prop="file2">
                    <el-upload ref="uploadRef1" class="upload-demo" :limit="1" :on-change="handleDocxUpload"
                        :auto-upload="false" action="">
                        <el-button size="small" type="primary">Upload</el-button>
                        <div slot="tip" class="el-upload__tip">only upload word file with size less than 20mb</div>
                    </el-upload>
                </el-form-item> -->
            </div>

            <el-form-item label="" prop="submit">
                <el-button class="submit-btn" type="primary" @click="submit(formRef)">Submit</el-button>
            </el-form-item>
        </el-form>
    </main>
</template>

<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';
import Title from '@/components/layout/Title.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';

import type { FormInstance, FormRules, UploadProps, UploadUserFile, UploadFile, UploadFiles, UploadInstance } from 'element-plus';


const router = useRouter();

const paperId = useRoute().params.paperId as string;
console.log(paperId);


/**-------------- Member info --------------- */
const memberInfo = reactive<any>({});

const getMemberInfo = async () => {
    let res = await CSRrequest.get('/member/getMemberInfo');
    console.log(res);
    if (res.code === 10002 || res.code === 401) {
        localStorage.removeItem("Authorization-member");
        router.push("/login");
    } else if (res.code === 200) {
        Object.assign(memberInfo, res.data);
        data.memberId = memberInfo.memberId;

        let orderRes = await CSRrequest.get(`/orders/owner`);


        console.log(orderRes);
    }
}

/**------------------------------------------ */
const checkFileSize = (size: number) => {
    return size < 1024 * 1024 * 20;
}

const handleRemove = (file: UploadUserFile, fileList: UploadUserFile[]) => {
    console.log(data.fileList);
    data.fileList = [];

    if (formRef.value) {
        formRef.value.validateField('fileList');
    }
}

const handleExceed: UploadProps['onExceed'] = (files: UploadUserFile[], fileList: UploadUserFile[]) => {
    console.log(files);
    ElMessage.error(`You can only upload 1 file, please upload again`);
    if (files.length > 0 ) {
        fileList.splice(0, fileList.length);
    
        data.fileList = [];
        console.log(data.fileList);
        console.log(fileList);
    }
}   

const handlePdfUpload: UploadProps['onChange'] = (file: UploadUserFile, uploadFiles) => {
    console.log(file);
    if (file.size == 0) {
        ElMessage.error('File is empty');
        return false;
    }


    if (file.status === 'ready' && file.size) {
        if (!checkFileSize(file.size)) {
            ElMessage.error('File size must be less than 20mb');
            uploadFiles.pop();
            return;
        }
        if (file.name.split('.').pop() !== 'pdf') {
            ElMessage.error('File must be pdf');
            uploadFiles.pop();
            return;
        }
        data.fileList.push(file);
        console.log(data.fileList);
        if (formRef.value) {
            formRef.value.validateField('fileList');
        }
    }

}
const handleDocxUpload: UploadProps['onChange'] = (file: UploadUserFile, uploadFiles) => {
    if (file.size == 0) {
        ElMessage.error('File is empty');
        return false;
    }


    if (file.status === 'ready' && file.size) {
        if (!checkFileSize(file.size)) {
            ElMessage.error('File size must be less than 20mb');
            uploadFiles.pop();
            return;
        }
        if (file.name.split('.').pop() !== 'docx') {
            ElMessage.error('File must be docx');
            uploadFiles.pop();
            return;
        }
        data.fileList.push(file);
    }

}

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


const formRef = ref<FormInstance>();
const data = reactive<any>({
    absType: 'poster',
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

const getPaperById = async () => {
    let res = await CSRrequest.get(`/paper/owner/${paperId}`);
    console.log(res)
    const {status, publicationNumber, publicationGroup, reportLocation, reportTime, paperFileUpload, availablePaperReviewers, assignedPaperReviewers, tagList ,...resdata} = res.data;
    console.log(resdata);   

    if (res.code === 200) {
        Object.assign(data, resdata);
    } else {
        router.push('/member-center');
    }
}


const formRules = ref<FormRules>({
    absType: [{ required: true, message: 'Please select type', trigger: 'blur' }],
    absTitle: [{ required: true, message: 'Please input title', trigger: 'blur' }],
    firstAuthor: [{ required: true, message: 'Please input first author', trigger: 'blur' }],
    firstAuthorBirthday: [{ required: true, validator: checkAge, trigger: 'blur' }],
    speaker: [{ required: true, message: 'Please input speaker', trigger: 'blur' }],
    speakerAffiliation: [{ required: true, message: 'Please input speaker affiliation', trigger: 'blur' }],
    correspondingAuthor: [{ required: true, message: 'Please input corresponding author', trigger: 'blur' }],
    correspondingAuthorEmail: [{ required: true, message: 'Please input corresponding author email', trigger: 'blur' }],
    correspondingAuthorPhone: [{ required: true, message: 'Please input corresponding author phone', trigger: 'blur' }],
    allAuthor: [{ required: true, message: 'Please input all authors', trigger: 'blur' }],
    allAuthorAffiliation: [{ required: true, message: 'Please input all authors affiliation', trigger: 'blur' }],
    fileList: [{ required: true, message: 'Please upload file', trigger: 'change' }],
})




const submitData = new FormData();
const submit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    console.log(data);
    formEl.validate(async (valid) => {
        if (valid) {
            const { fileList, ...restData } = data;
            submitData.append('data', JSON.stringify(restData));
            data.fileList.forEach((file: any) => {
                console.log(file, "from data");
                submitData.append('file', file.raw);
            })
            console.log(submitData.get('file'));
            let res = await CSRrequest.put('/paper/owner', {
                body: submitData
            });
            console.log(res);
            if (res.code === 200) {
                ElMessage.success('Submit success!');
                router.push('/abstract');
            } else {
                ElMessage.error('Submit failed!');
            }

        } else {
            console.log('error submit!!');
            ElMessage.error('Please check the form');
            return false;
        }
    })
}



onMounted(() => {
    getMemberInfo();
    getPaperById();
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

                .el-upload__tip {
                    display: flex;
                    flex-direction: column;
                    .warning {
                        color: red;
                        font-size: 0.8rem;
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