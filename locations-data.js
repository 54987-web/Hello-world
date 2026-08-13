/**
 * MigrantCare Kaohsiung — 友善資源地點資料（擴充版）
 * type: 'medical'（含大醫院、診所、衛生所）
 *       'legal'（法扶）
 *       'newcomer'（新住民服務中心）
 *       'clinic'（一般診所/家醫科）
 *       'pharmacy'（友善藥局）
 * isLandmark: true → 可觸發 ST7 地標遊戲
 */
const LOCATIONS = [

  /* ══════════════════════════════════
     🏥 大型醫療機構（5 間）
  ══════════════════════════════════ */
  {
    id: 'm1', type: 'medical', isLandmark: true,
    lat: 22.6500, lng: 120.3018,
    names: {
      zh: '高雄市立聯合醫院',
      en: 'Kaohsiung Municipal United Hospital',
      id: 'RS Kotamadya Kaohsiung',
      vi: 'Bệnh viện TP Kaohsiung',
      th: 'โรงพยาบาลเทศบาลเกาสง'
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
      vi: 'BV Chang Gung Kaohsiung',
      th: 'โรงพยาบาลช่างกุงเกาสง'
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
    hours: '24小時急診'
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
      vi: 'BV Tổng hợp Yuan',
      th: 'โรงพยาบาลหยวน'
    },
    address: '高雄市苓雅區自強三路215號',
    phone: '07-335-1121',
    languages: ['zh', 'en', 'id', 'vi'],
    hours: '週一至週六 08:00-17:30'
  },

  /* ══════════════════════════════════
     🏨 地區醫院（中型，4 間）
  ══════════════════════════════════ */
  {
    id: 'm6', type: 'medical', isLandmark: true,
    lat: 22.6152, lng: 120.3010,
    names: {
      zh: '高雄市立小港醫院',
      en: 'Kaohsiung Municipal Siaogang Hospital',
      id: 'RS Kotamadya Siaogang',
      vi: 'BV Thành phố Siaogang',
      th: 'โรงพยาบาลเทศบาลเสี้ยวกัง'
    },
    address: '高雄市小港區山明路482號',
    phone: '07-803-6783',
    languages: ['zh', 'en', 'id', 'vi'],
    hours: '週一至週五 08:00-17:00'
  },
  {
    id: 'm7', type: 'medical', isLandmark: true,
    lat: 22.6331, lng: 120.2698,
    names: {
      zh: '高雄市立大同醫院',
      en: 'Kaohsiung Municipal Ta-Tung Hospital',
      id: 'RS Kotamadya Ta-Tung',
      vi: 'BV Thành phố Ta-Tung',
      th: 'โรงพยาบาลเทศบาลต้าถง'
    },
    address: '高雄市鼓山區中華一路68號',
    phone: '07-291-1101',
    languages: ['zh', 'en', 'vi'],
    hours: '週一至週五 08:00-17:00'
  },
  {
    id: 'm8', type: 'medical', isLandmark: true,
    lat: 22.6467, lng: 120.3231,
    names: {
      zh: '高雄醫學大學附設中和紀念醫院',
      en: 'Kaohsiung Medical University Chung-Ho Memorial Hospital',
      id: 'RS Chung-Ho KMU',
      vi: 'BV Tưởng niệm Chung-Ho KMU',
      th: 'โรงพยาบาลจงเหอ KMU'
    },
    address: '高雄市三民區十全一路100號',
    phone: '07-312-1101',
    languages: ['zh', 'en', 'id', 'vi', 'th'],
    hours: '24小時急診'
  },
  {
    id: 'm9', type: 'medical', isLandmark: true,
    lat: 22.6378, lng: 120.3015,
    names: {
      zh: '高雄市立民生醫院',
      en: 'Kaohsiung Municipal Min-Sheng Hospital',
      id: 'RS Kotamadya Min-Sheng',
      vi: 'BV Thành phố Min-Sheng',
      th: 'โรงพยาบาลเทศบาลหมินเซิง'
    },
    address: '高雄市三民區民族一路161號',
    phone: '07-311-5138',
    languages: ['zh', 'en'],
    hours: '週一至週五 08:00-17:00'
  },

  /* ══════════════════════════════════
     🩺 一般診所 / 家醫科（8 間）
     分布在移工聚集區附近
  ══════════════════════════════════ */
  {
    id: 'c1', type: 'clinic', isLandmark: true,
    lat: 22.6258, lng: 120.3048,
    names: {
      zh: '新興區衛生所',
      en: 'Xinxing District Health Center',
      id: 'Puskesmas Distrik Xinxing',
      vi: 'Trạm Y tế Quận Xinxing',
      th: 'สถานีอนามัยเขตซินซิง'
    },
    address: '高雄市新興區民生一路136號',
    phone: '07-281-1161',
    languages: ['zh'],
    hours: '週一至週五 08:00-17:00'
  },
  {
    id: 'c2', type: 'clinic', isLandmark: true,
    lat: 22.6185, lng: 120.3120,
    names: {
      zh: '苓雅區衛生所',
      en: 'Lingya District Health Center',
      id: 'Puskesmas Distrik Lingya',
      vi: 'Trạm Y tế Quận Lingya',
      th: 'สถานีอนามัยเขตหลิงหยา'
    },
    address: '高雄市苓雅區苓雅一路1號',
    phone: '07-749-6688',
    languages: ['zh', 'vi'],
    hours: '週一至週五 08:00-17:00'
  },
  {
    id: 'c3', type: 'clinic', isLandmark: true,
    lat: 22.6422, lng: 120.3088,
    names: {
      zh: '三民區衛生所',
      en: 'Sanmin District Health Center',
      id: 'Puskesmas Distrik Sanmin',
      vi: 'Trạm Y tế Quận Sanmin',
      th: 'สถานีอนามัยเขตซานหมิน'
    },
    address: '高雄市三民區昌裕街1號',
    phone: '07-384-1208',
    languages: ['zh', 'id'],
    hours: '週一至週五 08:00-17:00'
  },
  {
    id: 'c4', type: 'clinic', isLandmark: true,
    lat: 22.6272, lng: 120.3598,
    names: {
      zh: '鳳山區衛生所',
      en: 'Fengshan District Health Center',
      id: 'Puskesmas Distrik Fengshan',
      vi: 'Trạm Y tế Quận Fengshan',
      th: 'สถานีอนามัยเขตเฟิงซาน'
    },
    address: '高雄市鳳山區光遠路370號',
    phone: '07-746-1991',
    languages: ['zh', 'vi', 'id'],
    hours: '週一至週五 08:00-17:00'
  },
  {
    id: 'c5', type: 'clinic', isLandmark: true,
    lat: 22.6108, lng: 120.2998,
    names: {
      zh: '前鎮區衛生所',
      en: 'Qianzhen District Health Center',
      id: 'Puskesmas Distrik Qianzhen',
      vi: 'Trạm Y tế Quận Qianzhen',
      th: 'สถานีอนามัยเขตเฉียนเจิ้น'
    },
    address: '高雄市前鎮區民權路99號',
    phone: '07-811-3141',
    languages: ['zh', 'vi', 'th'],
    hours: '週一至週五 08:00-17:00'
  },
  {
    id: 'c6', type: 'clinic', isLandmark: true,
    lat: 22.6060, lng: 120.3068,
    names: {
      zh: '小港區衛生所',
      en: 'Siaogang District Health Center',
      id: 'Puskesmas Distrik Siaogang',
      vi: 'Trạm Y tế Quận Siaogang',
      th: 'สถานีอนามัยเขตเสี้ยวกัง'
    },
    address: '高雄市小港區山明路483號',
    phone: '07-801-4008',
    languages: ['zh', 'id', 'vi'],
    hours: '週一至週五 08:00-17:00'
  },
  {
    id: 'c7', type: 'clinic', isLandmark: true,
    lat: 22.6555, lng: 120.3005,
    names: {
      zh: '左營區衛生所',
      en: 'Zuoying District Health Center',
      id: 'Puskesmas Distrik Zuoying',
      vi: 'Trạm Y tế Quận Zuoying',
      th: 'สถานีอนามัยเขตจั่วอิง'
    },
    address: '高雄市左營區崇德路100號',
    phone: '07-348-2839',
    languages: ['zh'],
    hours: '週一至週五 08:00-17:00'
  },
  {
    id: 'c8', type: 'clinic', isLandmark: true,
    lat: 22.6314, lng: 120.2720,
    names: {
      zh: '鼓山區衛生所',
      en: 'Gushan District Health Center',
      id: 'Puskesmas Distrik Gushan',
      vi: 'Trạm Y tế Quận Gushan',
      th: 'สถานีอนามัยเขตกูซาน'
    },
    address: '高雄市鼓山區龍德里育德路1號',
    phone: '07-521-0150',
    languages: ['zh'],
    hours: '週一至週五 08:00-17:00'
  },

  /* ══════════════════════════════════
     💊 友善藥局（4 間）
  ══════════════════════════════════ */
  {
    id: 'p1', type: 'pharmacy', isLandmark: false,
    lat: 22.6262, lng: 120.3055,
    names: {
      zh: '大樹藥局（新興）',
      en: 'Dashu Pharmacy Xinxing',
      id: 'Apotek Dashu Xinxing',
      vi: 'Nhà thuốc Dashu Xinxing',
      th: 'ร้านยาต้าซู่ ซินซิง'
    },
    address: '高雄市新興區民生一路48號',
    phone: '07-281-3388',
    languages: ['zh', 'en'],
    hours: '週一至週六 09:00-21:00'
  },
  {
    id: 'p2', type: 'pharmacy', isLandmark: false,
    lat: 22.6195, lng: 120.3095,
    names: {
      zh: '杏一醫療用品（苓雅）',
      en: 'Xing Yi Medical Supply Lingya',
      id: 'Apotek Xing Yi Lingya',
      vi: 'Nhà thuốc Xing Yi Lingya',
      th: 'ร้านยาซิงอี หลิงหยา'
    },
    address: '高雄市苓雅區中正二路101號',
    phone: '07-335-2222',
    languages: ['zh'],
    hours: '每日 09:00-22:00'
  },
  {
    id: 'p3', type: 'pharmacy', isLandmark: false,
    lat: 22.6435, lng: 120.3062,
    names: {
      zh: '健保藥局（三民）',
      en: 'NHI Pharmacy Sanmin',
      id: 'Apotek NHI Sanmin',
      vi: 'Nhà thuốc NHI Sanmin',
      th: 'ร้านยาประกันสุขภาพซานหมิน'
    },
    address: '高雄市三民區建國三路25號',
    phone: '07-285-1196',
    languages: ['zh', 'id'],
    hours: '週一至週六 08:30-21:00'
  },
  {
    id: 'p4', type: 'pharmacy', isLandmark: false,
    lat: 22.6125, lng: 120.3050,
    names: {
      zh: '全聯藥局（前鎮）',
      en: 'PX Pharmacy Qianzhen',
      id: 'Apotek PX Qianzhen',
      vi: 'Nhà thuốc PX Qianzhen',
      th: 'ร้านยาพีเอ็กซ์ เฉียนเจิ้น'
    },
    address: '高雄市前鎮區中山三路45號',
    phone: '07-335-7788',
    languages: ['zh'],
    hours: '每日 08:00-22:00'
  },

  /* ══════════════════════════════════
     ⚖️ 法律扶助基金會（3 處）
  ══════════════════════════════════ */
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
      zh: '法律扶助基金會鳳山辦事處',
      en: 'Legal Aid Foundation Fengshan Office',
      id: 'LAF Kantor Fengshan',
      vi: 'LAF Văn phòng Fengshan',
      th: 'LAF สำนักงานเฟิงซาน'
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

  /* ══════════════════════════════════
     🏠 新住民家庭服務中心（5 處）
  ══════════════════════════════════ */
  {
    id: 'n1', type: 'newcomer', isLandmark: true,
    lat: 22.6191, lng: 120.3100,
    names: {
      zh: '苓雅區新住民服務中心',
      en: 'Lingya Newcomer Service Center',
      id: 'Pusat Layanan Pendatang Baru Lingya',
      vi: 'Trung tâm Cư dân Mới Quận Lingya',
      th: 'ศูนย์ผู้อพยพใหม่เขตหลิงหยา'
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
      zh: '三民區新住民服務中心',
      en: 'Sanmin Newcomer Service Center',
      id: 'Pusat Layanan Pendatang Baru Sanmin',
      vi: 'Trung tâm Cư dân Mới Quận Sanmin',
      th: 'ศูนย์ผู้อพยพใหม่เขตซานหมิน'
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
      zh: '鳳山區新住民服務中心',
      en: 'Fengshan Newcomer Service Center',
      id: 'Pusat Layanan Pendatang Baru Fengshan',
      vi: 'Trung tâm Cư dân Mới Quận Fengshan',
      th: 'ศูนย์ผู้อพยพใหม่เขตเฟิงซาน'
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
      zh: '左營區新住民服務中心',
      en: 'Zuoying Newcomer Service Center',
      id: 'Pusat Layanan Pendatang Baru Zuoying',
      vi: 'Trung tâm Cư dân Mới Quận Zuoying',
      th: 'ศูนย์ผู้อพยพใหม่เขตจั่วอิง'
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
      zh: '前鎮區新住民服務中心',
      en: 'Qianzhen Newcomer Service Center',
      id: 'Pusat Layanan Pendatang Baru Qianzhen',
      vi: 'Trung tâm Cư dân Mới Quận Qianzhen',
      th: 'ศูนย์ผู้อพยพใหม่เขตเฉียนเจิ้น'
    },
    address: '高雄市前鎮區興中一路200號',
    phone: '07-811-3141',
    languages: ['zh', 'en', 'id', 'vi', 'th'],
    hours: '週一至週五 08:30-17:30'
  },

];
