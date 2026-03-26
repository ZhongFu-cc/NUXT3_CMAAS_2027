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