<template>
    <main class="common-section">
        <Banner />
        <Breadcrumbs first-route="Member" secound-route="login" />
        <Title title="Member Login" />
        <div class="main-section">
            <el-form class="login-form" ref="formRef" :model="loginInfo" :rules="formRule"
                :label-position="formatLabelPosition">
                <!-- <el-form-item class="login-input" prop="email">
                    <el-input v-model="loginInfo.email" placeholder="Email">
                        <template #prefix>
                            <img src="../assets/img/email.svg" alt="">
                        </template>
</el-input>
</el-form-item> -->

                <el-form-item class="login-input" prop="idCard">
                    <el-input v-model="loginInfo.idCard" placeholder="Passport Number / 身分證字號">
                        <template #prefix>
                            <img src="../assets/img/passport.svg" alt="">
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item class="login-input" prop="password">
                    <el-input v-model="loginInfo.password" type="password" placeholder="Password" :show-password="true">
                        <template #prefix>
                            <img src="../assets/img/lock.svg" alt="">
                        </template>
                    </el-input>
                </el-form-item>
                <div class="captcha-section">
                    <el-form-item class="captcha" label="Verification Code" prop="verificationCode">
                        <el-input v-model="loginInfo.verificationCode" placeholder="Captcha"></el-input>
                    </el-form-item>
                    <div class="captcha-img-section">
                        <img :src="captcha.image" alt="">
                        <el-button class="refresh-btn" @click="getCaptcha"><el-icon>
                                <ElIconRefreshRight />
                            </el-icon></el-button>
                    </div>
                </div>
                <el-form-item class="sign-btn-section">
                    <el-button class="sign-btn" @click="login(formRef)">Sign in</el-button>
                </el-form-item>
                <div class="btn-section">
                    <nuxt-link :to="'retrieve-password'">Retrieve password</nuxt-link>
                    <span>&nbsp /</span>
                    <nuxt-link :to="'seminar-registration'">Sign up</nuxt-link>
                </div>
            </el-form>
        </div>
    </main>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import Banner from '@/components/layout/Banner.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
import Title from '@/components/layout/Title.vue';

useSeoMeta({
    title: 'Member Login - 9th IOPBS & TOPBS 2025 International Conference on Oncoplastic Breast Surgery',
    description: 'Member login page for the 9th IOPBS & TOPBS 2025 International Conference on Oncoplastic Breast Surgery. Sign in to access your account, retrieve your password, or register for the conference.',
    keywords: 'Login, Sign In, 9th IOPBS, IOPBS 2025, TOPBS 2025, 2025 IOPBS, 2025 TOPBS '
})


const router = useRouter();

const captcha = reactive<any>({

});
const getCaptcha = async () => {
    let res = await CSRrequest.get('/member/captcha');
    Object.assign(captcha, res.data);
    loginInfo.verificationKey = captcha.key;
};

const loginInfo = reactive<any>({
    // email: '',
    idCard: '',
    password: '',
    verificationKey: '',
    verificationCode: ''
});

const formRef = ref<FormInstance>();

const formRule = reactive<FormRules>({
    idCard: [
        { required: true, message: 'Please input ID card', trigger: 'blur' },
    ],
    password: [
        { required: true, message: 'Please input password', trigger: 'blur' },
    ],
    verificationCode: [
        { required: true, message: 'Please input verification code', trigger: 'blur' }
    ]
});


const formatLabelPosition = ref<'top' | 'left' | 'right'>('top'); // 預設為 'top'
const setFormLabelPosotion = () => {
    if (window.innerWidth < 1024) {
        formatLabelPosition.value = 'top'; // 當視窗寬度小於 1024px 時，設置為 'top'
    } else {
        formatLabelPosition.value = 'left'; // 否則設置為 'left'
    }
}


const login = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate(async (valid) => {
        if (valid) {
            let res = await CSRrequest.post('/member/login-idCard', {
                body: loginInfo
            })
            if (res.code === 500) {
                ElMessage.error(res.msg);
                getCaptcha();
            }
            if (res.data.isLogin) {
                router.push('/member-center')
                localStorage.setItem(res.data.tokenName, 'Bearer ' + res.data.tokenValue);
                formEl.resetFields();
                useAuth().checkLoginState();
            }
        } else {
            ElMessage.error('Please input correct information');
        }
    });

}

const memberInfo = reactive<any>({});

const getMemberInfo = async () => {
    let res = await CSRrequest.get('/member/getMemberInfo');
    if (res.code === 10002 || res.code === 401) {
        localStorage.removeItem('Authorization-member');
        router.push('/login');
    } else {
        router.push('/member-center');
    }
}

const listenKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        login(formRef.value);
    }
}

onMounted(() => {
    getMemberInfo();
    getCaptcha();
    setFormLabelPosotion();
    window.addEventListener('keydown', listenKeydown);
    window.addEventListener('resize', setFormLabelPosotion);
});

onUnmounted(() => {
    window.removeEventListener('keydown', listenKeydown);
    window.removeEventListener('resize', setFormLabelPosotion);
});


</script>
<style lang="scss" scoped>
.common-section {
    font-family: $common-section-font-family;

    .main-section {
        background: url('assets/img/topbs_background-image.jpg') no-repeat center center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 0;

        .login-form {
            padding: 1rem 3rem;
            display: flex;
            flex-direction: column;
            border-radius: 20px;
            background-color: white;
            box-shadow: 8px 10px 10px 0 rgba(0, 0, 0, 0.4);

            gap: 1px;

            :deep(.el-form-item) {
                margin-bottom: 1rem;
                border: none;
            }

            .login-input {
                border: none;

                :deep(.el-input__wrapper) {
                    border: 1px solid #E8979E;
                    border-radius: 18px;
                    padding: 0.5rem;

                    &:focus {
                        border: 1px solid #E8979E !important;
                        box-shadow: none !important;
                    }
                }

                :deep(.el-input__prefix) {
                    width: 2rem;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .captcha-section {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 1rem 0;


                @media screen and (max-width: 1024px) {
                    flex-direction: column;

                }

                .captcha {
                    margin: 0;
                    width: 20rem;

                    :deep(.el-input__wrapper) {
                        border: 1px solid #E8979E;
                        border-radius: 10px;
                    }
                }

                .captcha-img-section {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .refresh-btn {
                        border: none;
                        background-color: white;
                        font-size: 1.5rem;
                        color: #D86C7C;

                        &:hover {
                            background-color: white;
                            color: #D86C7C;
                            cursor: pointer;
                            scale: 1.05;
                            transition: all 0.3s ease-in-out;
                        }
                    }

                    img {
                        width: 50%;
                        height: 100%;
                        padding: 0 0.5rem;
                    }
                }
            }

            .sign-btn-section {
                margin-top: 1rem;

                :deep(.el-form-item__content) {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                }

                .sign-btn {
                    background-color: #D86C7C;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    width: 40%;

                    &:hover {
                        cursor: pointer;
                        scale: 1.05;
                        transition: all 0.3s ease-in-out;
                    }
                }
            }

            .btn-section {
                display: flex;
                justify-content: center;
                margin-top: 1rem;

                a {
                    filter: brightness(1);
                    transition: filter 0.3s ease-in-out;

                    &:hover {
                        cursor: pointer;
                        filter: brightness(1.8);
                    }
                }
            }

        }
    }
}
</style>