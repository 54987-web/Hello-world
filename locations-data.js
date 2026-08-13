/**
 * MigrantCare Kaohsiung — 友善資源地點資料
 * 供 Sub-Task 6（資源地圖）與 Sub-Task 7（地標遊戲）使用
 *
 * type: 'medical' | 'legal' | 'newcomer'
 * isLandmark: true  → 可觸發 ST7 地標遊戲
 */
const LOCATIONS = [

  /* ── 醫療機構（5 間）── */
  {
    id: 'm1', type: 'medical', isLandmark: true,
    lat: 22.6500, lng: 120.3018,
    names: {
      zh: '高雄市立聯合醫院',
      en: 'Kaohsiung Municipal United Hospital',
      id: 'Rumah Sakit Kotamadya Kaohsiung',
      vi: 'Bệnh viện Thành phố Kaohsiung',
      th: 'โรงพยาบาลเทศบาลเมืองเกาสง'
    },
    address: '高雄市三民區凱旋二路68號',
    phone: '07-251-1131',
    languages: ['zh', 'en', 'id', 'vi'],
    hours: '週一至週五 08:00-17:00'
  },
  {
    id: 'm2', type: 'medical', isLandmark: true,
    lat: 22.6988, lng: 120.3725,
    names: {
      zh: '高雄長庚紀念醫院',
      en: 'Kaohsiung Chang Gung Memorial Hospital',
      id: 'RS Chang Gung Kaohsiung',
      vi: 'BV Tưởng niệm Chang Gung Kaohsiung',
      th: 'โรงพยาบาลช่างกุงเมโมเรียล เกาสง'
    },
    address: '高雄市鳥松區大埤路123號',
    phone: '07-731-7123',
    languages: ['zh', 'en', 'id', 'vi', 'th'],
    hours: '週一至週五 08:00-17:00'
  },
  {
    id: 'm3', type: 'medical', isLandmark: true,
    lat: 22.6799, lng: 120.4216,
    names: {
      zh: '義大醫院',
      en: 'E-DA Hospital',
      id: 'RS E-DA',
      vi: 'Bệnh viện E-DA',
      th: 'โรงพยาบาลอีดา'
    },
    address: '高雄市大樹區學城路一段1號',
    phone: '07-615-0011',
    languages: ['zh', 'en', 'id', 'vi', 'th'],
    hours: '週一至週五 08:00-17:00'
  },
  {
    id: 'm4', type: 'medical', isLandmark: true,
    lat: 22.6882, lng: 120.2927,
    names: {
      zh: '高雄榮民總醫院',
      en: 'Kaohsiung Veterans General Hospital',
      id: 'RS Veteran Umum Kaohsiung',
      vi: 'BV Cựu chiến binh Kaohsiung',
      th: 'โรงพยาบาลทหารผ่านศึกเกาสง'
    },
    address: '高雄市左營區大中一路386號',
    phone: '07-342-2121',
    languages: ['zh', 'en'],
    hours: '週一至週五 08:00-17:00'
  },
  {
    id: 'm5', type: 'medical', isLandmark: true,
    lat: 22.6209, lng: 120.3082,
    names: {
      zh: '阮綜合醫院',
      en: 'Yuan General Hospital',
      id: 'RS Umum Yuan',
      vi: 'Bệnh viện Tổng hợp Yuan',
      th: 'โรงพยาบาลหยวนเจเนอรัล'
    },
    address: '高雄市苓雅區自強三路215號',
    phone: '07-335-1121',
    languages: ['zh', 'en', 'id', 'vi'],
    hours: '週一至週六 08:00-17:30'
  },

  /* ── 法律扶助基金會（3 處）── */
  {
    id: 'l1', type: 'legal', isLandmark: true,
    lat: 22.6296, lng: 120.3002,
    names: {
      zh: '法律扶助基金會高雄分會',
      en: 'Legal Aid Foundation Kaohsiung Branch',
      id: 'Yayasan Bantuan Hukum Kaohsiung',
      vi: 'Hội Hỗ trợ Pháp lý Kaohsiung',
      th: 'มูลนิธิช่วยเหลือทางกฎหมายเกาสง'
    },
    address: '高雄市新興區民生二路57號9樓',
    phone: '07-281-7181',
    languages: ['zh', 'en', 'id', 'vi', 'th'],
    hours: '週一至週五 09:00-17:00'
  },
  {
    id: 'l2', type: 'legal', isLandmark: true,
    lat: 22.6257, lng: 120.3574,
    names: {
      zh: '法律扶助基金會屏東分會（鳳山辦事處）',
      en: 'Legal Aid Foundation Pingtung Branch (Fengshan Office)',
      id: 'LAF Cabang Pingtung (Kantor Fengshan)',
      vi: 'LAF Chi nhánh Pingtung (VP Fengshan)',
      th: 'LAF สาขาผิงตง (สำนักงานเฟิงซาน)'
    },
    address: '高雄市鳳山區曹公路28號2樓',
    phone: '07-746-8023',
    languages: ['zh', 'en', 'vi', 'id'],
    hours: '週一至週五 09:00-17:00'
  },
  {
    id: 'l3', type: 'legal', isLandmark: true,
    lat: 22.7960, lng: 120.2954,
    names: {
      zh: '法律扶助基金會岡山辦事處',
      en: 'Legal Aid Foundation Gangshan Office',
      id: 'LAF Kantor Gangshan',
      vi: 'LAF Văn phòng Gangshan',
      th: 'LAF สำนักงานกังซาน'
    },
    address: '高雄市岡山區維仁路165號',
    phone: '07-622-1283',
    languages: ['zh', 'en'],
    hours: '週一至週五 09:00-17:00'
  },

  /* ── 新住民家庭服務中心（5 處）── */
  {
    id: 'n1', type: 'newcomer', isLandmark: true,
    lat: 22.6191, lng: 120.3100,
    names: {
      zh: '苓雅區新住民家庭服務中心',
      en: 'Lingya District Newcomer Family Service Center',
      id: 'Pusat Layanan Keluarga Pendatang Baru Lingya',
      vi: 'Trung tâm Dịch vụ Gia đình Cư dân Mới Quận Lingya',
      th: 'ศูนย์บริการครอบครัวผู้อพยพใหม่เขตหลิงหยา'
    },
    address: '高雄市苓雅區苓雅一路1號',
    phone: '07-722-5136',
    languages: ['zh', 'en', 'id', 'vi', 'th'],
    hours: '週一至週五 08:30-17:30'
  },
  {
    id: 'n2', type: 'newcomer', isLandmark: true,
    lat: 22.6400, lng: 120.3050,
    names: {
      zh: '三民區新住民家庭服務中心',
      en: 'Sanmin District Newcomer Family Service Center',
      id: 'Pusat Layanan Keluarga Pendatang Baru Sanmin',
      vi: 'Trung tâm Dịch vụ Gia đình Cư dân Mới Quận Sanmin',
      th: 'ศูนย์บริการครอบครัวผู้อพยพใหม่เขตซานหมิน'
    },
    address: '高雄市三民區九如二路200號',
    phone: '07-311-0729',
    languages: ['zh', 'en', 'id', 'vi', 'th'],
    hours: '週一至週五 08:30-17:30'
  },
  {
    id: 'n3', type: 'newcomer', isLandmark: true,
    lat: 22.6270, lng: 120.3570,
    names: {
      zh: '鳳山區新住民家庭服務中心',
      en: 'Fengshan District Newcomer Family Service Center',
      id: 'Pusat Layanan Keluarga Pendatang Baru Fengshan',
      vi: 'Trung tâm Dịch vụ Gia đình Cư dân Mới Quận Fengshan',
      th: 'ศูนย์บริการครอบครัวผู้อพยพใหม่เขตเฟิงซาน'
    },
    address: '高雄市鳳山區光遠路370號',
    phone: '07-741-9011',
    languages: ['zh', 'en', 'id', 'vi'],
    hours: '週一至週五 08:30-17:30'
  },
  {
    id: 'n4', type: 'newcomer', isLandmark: true,
    lat: 22.6900, lng: 120.2850,
    names: {
      zh: '左營區新住民家庭服務中心',
      en: 'Zuoying District Newcomer Family Service Center',
      id: 'Pusat Layanan Keluarga Pendatang Baru Zuoying',
      vi: 'Trung tâm Dịch vụ Gia đình Cư dân Mới Quận Zuoying',
      th: 'ศูนย์บริการครอบครัวผู้อพยพใหม่เขตจั่วอิง'
    },
    address: '高雄市左營區重愛路100號',
    phone: '07-581-6323',
    languages: ['zh', 'en', 'id', 'vi', 'th'],
    hours: '週一至週五 08:30-17:30'
  },
  {
    id: 'n5', type: 'newcomer', isLandmark: true,
    lat: 22.5958, lng: 120.3190,
    names: {
      zh: '前鎮區新住民家庭服務中心',
      en: 'Qianzhen District Newcomer Family Service Center',
      id: 'Pusat Layanan Keluarga Pendatang Baru Qianzhen',
      vi: 'Trung tâm Dịch vụ Gia đình Cư dân Mới Quận Qianzhen',
      th: 'ศูนย์บริการครอบครัวผู้อพยพใหม่เขตเฉียนเจิ้น'
    },
    address: '高雄市前鎮區興中一路200號',
    phone: '07-811-3141',
    languages: ['zh', 'en', 'id', 'vi', 'th'],
    hours: '週一至週五 08:30-17:30'
  },

];
