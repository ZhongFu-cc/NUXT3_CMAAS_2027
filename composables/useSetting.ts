export const useSetting = () => {
    const setting = ref<any>({
        eventStartDate: Date(),
        eventEndDate: Date(),
        abstractSubmissionEndTime: Date(),
        abstractSubmissionStartTime: Date(),
        earlyBirdDiscountPhaseOneDeadline: Date(),
        earlyBirdDiscountPhaseThreeDeadline: Date(),
        earlyBirdDiscountPhaseTwoDeadline: Date(),
        lastOrderTime: Date(),
        lastRegistrationTime: Date(),
        lastGroupRegistrationTime: Date(),
        slideUploadEndTime: Date(),
        slideUploadStartTime: Date(),
    })

    const fetchSetting = async () => {
        try {
            const res = await CSRrequest.get('/setting')
            setting.value = res.data
        } catch (error) {
            console.error('Failed to fetch setting:', error)
        }

    }

    /**
     * 驗證當前時間是否在設定的時間之前，主要用於控制某些功能的開放與否，例如摘要提交、幻燈片上傳等。
     * @param settingKey 
     * @returns 
     */
    const validateDateTime = async (settingKey: string) => {
        await fetchSetting()
        const settingValue = setting.value?.[settingKey]
        if (!settingValue) {
            ElMessage.error('Try again later')
            return false
        }
        const currentTime = new Date()
        const settingTime = new Date(settingValue)
        return currentTime < settingTime
    }

    return { setting, fetchSetting, validateDateTime }
}