// Workshop 資料為靜態資料（非後端），來源：20270123大會 workshop 講者介紹.docx

export interface WorkshopSpeaker {
    id: string
    // 英文：職稱、姓名、單位（職稱與姓名分開，斷行只會發生在兩者之間）
    titleEn: string
    nameEn: string
    unitEn: string
    // 中文：姓名 職銜、單位
    nameZh: string
    unitZh: string
    photo: string
    // 照片裁成圓形時的對焦位置（object-position），讓臉部落在圓框中央
    photoPosition?: string
}

export const WORKSHOP_DATE = '2027-01-23'

export const WORKSHOP_SPEAKERS: WorkshopSpeaker[] = [
    {
        id: 'tseng-kuo-lieh',
        nameZh: '曾國烈 顧問',
        unitZh: '中華針灸醫學會',
        titleEn: 'Dr.',
        nameEn: 'Tseng, Kuo-Lieh',
        unitEn: 'Adviser, Chinese Medical Association of Acupuncture',
        photo: '/img/workshop/tseng-kuo-lieh.jpg',
        photoPosition: '50% 30%',
    },
    {
        id: 'chou-yen-jung',
        nameZh: '周彥瑢 院長',
        unitZh: '瀚威中醫診所 總院長',
        titleEn: 'Director',
        nameEn: 'Chou, Yen-Jung',
        unitEn: 'HANWELL Chinese Medicine Clinic',
        photo: '/img/workshop/chou-yen-jung.jpg',
        photoPosition: '50% 30%',
    },
    {
        id: 'shiue-hong-sheng',
        nameZh: '薛宏昇 副主委',
        unitZh: '世針聯傳承委員會',
        titleEn: 'Vice Chairman',
        nameEn: 'Shiue, Hong-Sheng',
        unitEn: 'World Federation of Acupuncture and Moxibustion Heritage Committee',
        photo: '/img/workshop/shiue-hong-sheng.jpg',
        photoPosition: '50% 35%',
    },
    {
        id: 'michael-weber',
        nameZh: 'Weber 院長',
        unitZh: '歐洲雷射學院',
        titleEn: 'President',
        nameEn: 'Michael Weber',
        unitEn: 'European Laser Academy',
        photo: '/img/workshop/michael-weber.jpg',
        photoPosition: '50% 20%',
    },
]

// 課程重點：有模組標題的段落帶 title，其餘為一般段落
export interface WorkshopHighlight {
    title?: string
    text: string
}

export interface WorkshopCourse {
    id: string
    // 時段：上午 / 下午
    period: 'morning' | 'afternoon'
    // 場次：A / B
    track: 'A' | 'B'
    time: string
    // 講題可能分多行（主標 + 副標）；空陣列表示尚待講師提供
    topic: string[]
    speakerId: string
    highlights: WorkshopHighlight[]
}

// 來源：20270123 workshop 課程介紹003.docx
export const WORKSHOP_COURSES: WorkshopCourse[] = [
    {
        id: 'morning-a',
        period: 'morning',
        track: 'A',
        time: '09:00-12:00',
        topic: ['頰針療法'],
        speakerId: 'tseng-kuo-lieh',
        highlights: [
            { text: '頰針療法由王永洲教授於1991年創立，是在面頰部特定穴位施針治療全身疾病的微針技術，起源於意外發現頰車穴可同時緩解牙痛與坐骨神經痛。' },
            { text: '理論以生物全息、大三焦與身心整合為核心，面頰部視為人體縮影，透過對應穴區調節局部與整體。' },
            { text: '課程藉著醫師的帶領使用極細套管針快速拍入，幾乎不痛，單側16個標準穴區依骨性標誌定位，取穴快速，留針約20–40分鐘。' },
            { text: '主要適用於急慢性頸肩腰腿痛、部分內臟不適及失眠焦慮等，起效較快、安全性高，極適合成為醫師的另一項有效的療法。' },
        ],
    },
    {
        id: 'morning-b',
        period: 'morning',
        track: 'B',
        time: '09:00-12:00',
        topic: [
            '雷射針灸在學童近視調焦與成長發育的臨床實務工作坊：',
            '「雷射天灸」的的高階研修班及雷射針灸標準化療程設計',
        ],
        speakerId: 'chou-yen-jung',
        highlights: [
            {
                title: '模組一：光生物調節（PBM）機制與雷射針灸參數工程學',
                text: '深入剖析不同雷射波長的效應、能量密度（J/cm²）、810 nm 位於近紅外「生物光學窗口」的核心優勢，利用Nogier 脈衝共振頻率給予精準的「生物能量灌注」激活ATP的合成與神經傳導的生物效應。',
            },
            {
                title: '模組二：學童近視與睫狀肌的「調焦」光電針灸整合方案',
                text: '解析學童近視的眼周微循環障礙，設定穴位及雷射刺激參數，利用 810 nm 近紅外光之特性來調節眼外肌的張力與睫狀肌的神經反射，放鬆深層睫狀肌痙攣，激發脈絡膜血流灌注，達成非侵入性近視預防與調控及與視覺疲勞之緩解。',
            },
            {
                title: '模組三：生長發育遲緩的骨骺板激活與「雷射天灸」高階臨床實務',
                text: '結合中醫溫經通絡的概念，創新規劃利用 810 nm 深達骨膜與棘突間韌帶的優勢來創立「雷射天灸」療法；藉由 Nogier C的特殊共振頻率，誘導生長板細胞增殖與下視丘-腦下垂體-生長軸之生物調節來誘發骨生長板微血管擴張與生長激素軸調控。',
            },
            {
                title: '模組四：現代化科技中醫診所的雷射針灸標準化療程設計（SOP）與臨床風險管理',
                text: '制定門診標準作業流程及雷射針灸專用的安全防護規範，建立從初診評估到分區劑量施作的分步驟標準化路徑，解決自費門診醫病溝通的阻力與療效量化的痛點，實現兒科高依從性門診的運營曙光。',
            },
        ],
    },
    {
        id: 'afternoon-a',
        period: 'afternoon',
        track: 'A',
        time: '13:00-16:00',
        topic: ['古典針灸的傳承創新與臨床應用'],
        speakerId: 'shiue-hong-sheng',
        highlights: [
            { text: '1.針刺手法的核心操作與臨床應用' },
            { text: '2.針法、刺法與臨床應用' },
            { text: '3.針道、刺道與臨床應用' },
        ],
    },
    {
        id: 'afternoon-b',
        period: 'afternoon',
        track: 'B',
        time: '13:00-16:00',
        // 課程重點尚待講師提供
        topic: [
            '雷射針灸與光醫學在阿茲海默症失智症之應用',
            'Laser-acupuncture and Photo-Medicine in Alzheimer demencia',
        ],
        speakerId: 'michael-weber',
        highlights: [],
    },
]
