export const useAuth = () => {
    const isLogin = useState('isLogin', () => false)
    const memberInfo = useState('memberInfo', () => null) as Ref<any>

    const checkLoginState = async () => {
        const token = localStorage.getItem('Authorization-member')

        if (token) {
            try {
                const res = await CSRrequest.get('/member/getMemberInfo')

                if (res.code === 200) {
                    isLogin.value = true
                    memberInfo.value = res.data
                } else {
                    localStorage.removeItem('Authorization-member')
                    isLogin.value = false
                    memberInfo.value = null
                    useRouter().push('/login')
                }
            } catch {
                // 401 等錯誤已由 CSRrequest 攔截器清除憑證並導頁，這裡只需同步本地狀態
                isLogin.value = false
                memberInfo.value = null
            }
        } else {
            isLogin.value = false
        }

    }

    const logout = () => {
        localStorage.removeItem('Authorization-member')
        isLogin.value = false
        useRouter().push('/')
    }

    return { isLogin, checkLoginState, logout, memberInfo }
}