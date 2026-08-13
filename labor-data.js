/**
 * MigrantCare Kaohsiung — 勞工權益速查資料
 * 6 類別 × 4 題 = 24 題
 * isLegal: 'yes' | 'no' | 'check'
 */
const LABOR_QA = [

  /* ══════════════ 薪資 wage ══════════════ */
  {
    id: 'wage_01',
    category: 'wage',
    q: {
      zh: '老闆不給薪資或拖欠薪水怎麼辦？',
      en: 'What if the employer refuses to pay or delays wages?',
      id: 'Apa yang harus dilakukan jika majikan tidak membayar atau menunda gaji?',
      vi: 'Làm gì khi chủ lao động không trả hoặc trì hoãn tiền lương?',
      th: 'ทำอย่างไรถ้านายจ้างไม่จ่ายหรือจ่ายเงินเดือนล่าช้า?'
    },
    isLegal: 'no',
    evidence: ['薪資單 / Pay stub', '出勤紀錄 / Attendance record', '對話截圖 / Chat screenshot'],
    a: {
      zh: '這是違法的。依《勞動基準法》第22條，工資應依約定日期全額給付。可向勞工局申訴或撥打1955申訴專線，雇主將面臨罰鍰。',
      en: 'This is illegal. Per Article 22 of the Labor Standards Act, wages must be paid in full on the agreed date. File a complaint with the Labor Bureau or call 1955.',
      id: 'Ini melanggar hukum. Laporkan ke Biro Tenaga Kerja atau hubungi hotline 1955.',
      vi: 'Đây là vi phạm pháp luật. Báo cáo với Cục Lao động hoặc gọi đường dây 1955.',
      th: 'นี่คือการกระทำที่ผิดกฎหมาย แจ้งสำนักงานแรงงานหรือโทร 1955'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' },
      { label: { zh: '聯絡法扶基金會', en: 'Contact LAF', id: 'Hubungi LAF', vi: 'Liên hệ LAF', th: 'ติดต่อ LAF' }, type: 'url', value: 'https://www.laf.org.tw' }
    ]
  },

  {
    id: 'wage_02',
    category: 'wage',
    q: {
      zh: '雇主可以隨意扣薪嗎？',
      en: 'Can the employer deduct wages arbitrarily?',
      id: 'Apakah majikan boleh memotong gaji sembarangan?',
      vi: 'Chủ lao động có được khấu trừ lương tùy tiện không?',
      th: 'นายจ้างสามารถหักเงินเดือนได้ตามอำเภอใจหรือไม่?'
    },
    isLegal: 'no',
    evidence: ['薪資條 / Pay slip', '雇傭契約 / Employment contract', '銀行轉帳紀錄 / Bank transfer record'],
    a: {
      zh: '不合法。《勞基法》第26條規定，雇主不得預扣工資作為違約金或賠償費用。除法定扣款（所得稅、勞健保）外，任何扣薪須經勞工書面同意。',
      en: 'Illegal. Article 26 of the Labor Standards Act prohibits employers from withholding wages as penalties. Any deduction requires written consent from the worker.',
      id: 'Tidak sah. Pemotongan selain pajak dan asuransi wajib harus mendapat persetujuan tertulis.',
      vi: 'Không hợp pháp. Mọi khoản khấu trừ ngoài thuế và bảo hiểm đều cần sự đồng ý bằng văn bản.',
      th: 'ไม่ถูกกฎหมาย การหักเงินนอกจากภาษีและประกันต้องได้รับความยินยอมเป็นลายลักษณ์อักษร'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' },
      { label: { zh: '高雄市勞工局', en: 'Kaohsiung Labor Bureau', id: 'Biro Tenaga Kerja', vi: 'Cục Lao động', th: 'สำนักงานแรงงาน' }, type: 'url', value: 'https://labor.kcg.gov.tw' }
    ]
  },

  {
    id: 'wage_03',
    category: 'wage',
    q: {
      zh: '最低工資是多少？雇主可以低於最低工資給薪嗎？',
      en: 'What is the minimum wage? Can employers pay below it?',
      id: 'Berapa upah minimum? Bisakah majikan membayar di bawahnya?',
      vi: 'Mức lương tối thiểu là bao nhiêu? Chủ lao động có thể trả thấp hơn không?',
      th: 'ค่าจ้างขั้นต่ำคือเท่าไร? นายจ้างจ่ายต่ำกว่านั้นได้ไหม?'
    },
    isLegal: 'no',
    evidence: ['雇傭契約 / Employment contract', '薪資條 / Pay slip'],
    a: {
      zh: '台灣月薪最低工資為 27,470 元（2024年），時薪為 183 元。雇主給付低於最低工資屬違法，可申訴。',
      en: 'Taiwan\'s minimum monthly wage is NT$27,470 (2024), and NT$183/hr. Paying below this is illegal and should be reported.',
      id: 'Upah minimum bulanan Taiwan adalah NT$27.470 (2024), atau NT$183/jam. Membayar di bawahnya melanggar hukum.',
      vi: 'Lương tối thiểu tháng của Đài Loan là 27.470 NT$ (2024), theo giờ là 183 NT$. Trả thấp hơn là vi phạm pháp luật.',
      th: 'ค่าจ้างขั้นต่ำรายเดือนของไต้หวันคือ 27,470 NTD (2024) และ 183 NTD/ชั่วโมง การจ่ายต่ำกว่านี้ผิดกฎหมาย'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' }
    ]
  },

  {
    id: 'wage_04',
    category: 'wage',
    q: {
      zh: '加班費應該怎麼計算？',
      en: 'How is overtime pay calculated?',
      id: 'Bagaimana cara menghitung upah lembur?',
      vi: 'Tiền làm thêm giờ được tính như thế nào?',
      th: 'ค่าล่วงเวลาคำนวณอย่างไร?'
    },
    isLegal: 'check',
    evidence: ['出勤打卡紀錄 / Time records', '薪資條 / Pay slip'],
    a: {
      zh: '依《勞基法》第24條：加班前2小時 = 正常薪資×1.33；第3、4小時 = ×1.67；例假日出勤需另議。若未按此計算，屬違規。',
      en: 'Per Article 24 of the Labor Standards Act: first 2 OT hours = 1.33x regular rate; hours 3-4 = 1.67x. Holiday work must be separately negotiated.',
      id: 'Lembur 2 jam pertama = 1,33x; jam ke 3-4 = 1,67x gaji normal. Jika tidak sesuai, itu melanggar aturan.',
      vi: '2 giờ tăng ca đầu tiên = 1,33 lần; giờ thứ 3-4 = 1,67 lần lương thường. Nếu không đúng, đó là vi phạm.',
      th: 'ล่วงเวลา 2 ชั่วโมงแรก = 1.33 เท่า; ชั่วโมงที่ 3-4 = 1.67 เท่า หากคำนวณไม่ถูกต้องถือว่าผิดกฎหมาย'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' },
      { label: { zh: '聯絡法扶基金會', en: 'Contact LAF', id: 'Hubungi LAF', vi: 'Liên hệ LAF', th: 'ติดต่อ LAF' }, type: 'url', value: 'https://www.laf.org.tw' }
    ]
  },

  /* ══════════════ 工時 hours ══════════════ */
  {
    id: 'hours_01',
    category: 'hours',
    q: {
      zh: '法定工時是幾小時？超時工作合法嗎？',
      en: 'What is the legal working hours limit? Is overtime legal?',
      id: 'Berapa jam kerja yang ditetapkan? Apakah lembur legal?',
      vi: 'Giờ làm việc quy định là bao nhiêu? Làm thêm giờ có hợp pháp không?',
      th: 'ชั่วโมงทำงานตามกฎหมายคือเท่าไร? การทำงานล่วงเวลาถูกกฎหมายหรือไม่?'
    },
    isLegal: 'check',
    evidence: ['出勤打卡紀錄 / Time records', '排班表 / Schedule'],
    a: {
      zh: '依《勞基法》第32條，每日正常工時 8 小時、每週 40 小時。加班每月上限 54 小時。若強迫超過此限屬違法。',
      en: 'Per Article 32 of the Labor Standards Act: 8 hours/day, 40 hours/week. Overtime cap is 54 hours/month. Forcing more is illegal.',
      id: 'Jam kerja normal 8 jam/hari, 40 jam/minggu. Batas lembur 54 jam/bulan. Memaksa melebihi itu adalah pelanggaran.',
      vi: 'Giờ làm bình thường 8 tiếng/ngày, 40 tiếng/tuần. Giới hạn tăng ca 54 tiếng/tháng. Ép vượt mức là vi phạm.',
      th: 'เวลาทำงานปกติ 8 ชั่วโมง/วัน 40 ชั่วโมง/สัปดาห์ ล่วงเวลาสูงสุด 54 ชั่วโมง/เดือน การบังคับเกินนั้นผิดกฎหมาย'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' }
    ]
  },

  {
    id: 'hours_02',
    category: 'hours',
    q: {
      zh: '雇主可以強迫我加班嗎？',
      en: 'Can the employer force me to work overtime?',
      id: 'Apakah majikan boleh memaksa saya lembur?',
      vi: 'Chủ lao động có thể ép tôi làm thêm giờ không?',
      th: 'นายจ้างบังคับให้ทำงานล่วงเวลาได้ไหม?'
    },
    isLegal: 'no',
    evidence: ['對話截圖 / Chat screenshot', '排班表 / Schedule', '出勤紀錄 / Attendance record'],
    a: {
      zh: '不合法。加班應獲勞工同意。雇主不得以扣薪、威脅等方式強制加班。若遭受威脅，請立即記錄並申訴。',
      en: 'Illegal. Overtime requires the worker\'s consent. Coercing overtime through wage deduction or threats is prohibited.',
      id: 'Tidak sah. Lembur memerlukan persetujuan pekerja. Paksaan dengan ancaman atau pemotongan gaji dilarang.',
      vi: 'Không hợp pháp. Tăng ca phải có sự đồng ý của người lao động. Ép buộc bằng đe dọa hoặc khấu trừ lương là bị cấm.',
      th: 'ไม่ถูกกฎหมาย การทำงานล่วงเวลาต้องได้รับความยินยอม การบังคับโดยขู่หักเงินเดือนเป็นสิ่งต้องห้าม'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' },
      { label: { zh: '聯絡法扶基金會', en: 'Contact LAF', id: 'Hubungi LAF', vi: 'Liên hệ LAF', th: 'ติดต่อ LAF' }, type: 'url', value: 'https://www.laf.org.tw' }
    ]
  },

  {
    id: 'hours_03',
    category: 'hours',
    q: {
      zh: '連續工作幾小時必須休息？',
      en: 'How long can I work continuously before a required break?',
      id: 'Berapa jam kerja berturut-turut sebelum harus istirahat?',
      vi: 'Làm việc liên tục bao nhiêu tiếng thì phải được nghỉ giải lao?',
      th: 'ทำงานติดต่อกันกี่ชั่วโมงแล้วต้องได้พัก?'
    },
    isLegal: 'check',
    evidence: ['出勤打卡紀錄 / Time records'],
    a: {
      zh: '依《勞基法》第35條，每工作4小時應給予30分鐘休息。不得以補薪方式代替休息。',
      en: 'Per Article 35 of the Labor Standards Act, every 4 hours of work must be followed by at least 30 minutes of rest. Rest cannot be replaced by extra pay.',
      id: 'Setiap 4 jam kerja harus ada istirahat 30 menit. Istirahat tidak bisa diganti uang.',
      vi: 'Mỗi 4 giờ làm việc phải có ít nhất 30 phút nghỉ ngơi. Không thể thay thế bằng tiền.',
      th: 'ทุก 4 ชั่วโมงทำงานต้องมีเวลาพัก 30 นาที ไม่สามารถแทนด้วยเงินได้'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' }
    ]
  },

  {
    id: 'hours_04',
    category: 'hours',
    q: {
      zh: '我有「例假日」（每週至少幾天休息）嗎？',
      en: 'Am I entitled to at least one day off per week?',
      id: 'Apakah saya berhak mendapat hari libur setiap minggu?',
      vi: 'Tôi có quyền được nghỉ ít nhất 1 ngày mỗi tuần không?',
      th: 'ฉันมีสิทธิ์หยุดพักอย่างน้อย 1 วันต่อสัปดาห์หรือไม่?'
    },
    isLegal: 'yes',
    evidence: ['排班表 / Schedule'],
    a: {
      zh: '合法權利。依《勞基法》第36條，雇主每7日至少應給1日例假。例假日出勤需加倍給薪且須勞工同意。',
      en: 'Legal right. Per Article 36 of the Labor Standards Act, employers must give at least 1 day off every 7 days. Working on this day requires double pay and worker consent.',
      id: 'Hak yang sah. Majikan harus memberikan minimal 1 hari libur setiap 7 hari. Bekerja pada hari itu butuh upah ganda.',
      vi: 'Quyền hợp pháp. Mỗi 7 ngày phải có ít nhất 1 ngày nghỉ. Làm việc ngày đó phải được trả gấp đôi lương.',
      th: 'สิทธิ์ตามกฎหมาย ทุก 7 วันต้องมีวันหยุดอย่างน้อย 1 วัน การทำงานวันนั้นต้องได้รับค่าจ้างสองเท่า'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' }
    ]
  },

  /* ══════════════ 休假 leave ══════════════ */
  {
    id: 'leave_01',
    category: 'leave',
    q: {
      zh: '我有幾天年假？雇主可以拒絕我請假嗎？',
      en: 'How many annual leave days do I have? Can the employer refuse?',
      id: 'Berapa hari cuti tahunan saya? Bisakah majikan menolak?',
      vi: 'Tôi có bao nhiêu ngày phép năm? Chủ có thể từ chối không?',
      th: 'ฉันมีวันลาพักร้อนกี่วัน? นายจ้างปฏิเสธได้ไหม?'
    },
    isLegal: 'check',
    evidence: ['雇傭契約 / Employment contract', '人事紀錄 / HR record'],
    a: {
      zh: '依工作年資：未滿1年0天（比例給予）；滿1年7天；滿2年10天；滿3年14天；滿5年15天；滿10年以上16天。雇主不得無故拒絕。',
      en: 'Based on seniority: under 1 yr = 0 (prorated); 1 yr = 7 days; 2 yrs = 10; 3 yrs = 14; 5 yrs = 15; 10+ yrs = 16. Employers cannot refuse without cause.',
      id: 'Berdasarkan masa kerja: kurang dari 1 thn = 0 (prorata); 1 thn = 7 hari; 2 thn = 10; 3 thn = 14; 5 thn = 15; 10+ thn = 16.',
      vi: 'Theo thâm niên: dưới 1 năm = 0 (theo tỷ lệ); 1 năm = 7 ngày; 2 năm = 10; 3 năm = 14; 5 năm = 15; 10+ năm = 16.',
      th: 'ตามอายุงาน: ต่ำกว่า 1 ปี = 0 (ตามสัดส่วน); 1 ปี = 7 วัน; 2 ปี = 10; 3 ปี = 14; 5 ปี = 15; 10+ ปี = 16'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' }
    ]
  },

  {
    id: 'leave_02',
    category: 'leave',
    q: {
      zh: '我生病了，可以請病假嗎？雇主會扣薪嗎？',
      en: 'Can I take sick leave? Will the employer deduct wages?',
      id: 'Bolehkah saya cuti sakit? Apakah gaji akan dipotong?',
      vi: 'Tôi có thể nghỉ ốm không? Lương có bị khấu trừ không?',
      th: 'ฉันลาป่วยได้ไหม? นายจ้างจะหักเงินเดือนไหม?'
    },
    isLegal: 'yes',
    evidence: ['醫院診斷證明 / Medical certificate', '請假紀錄 / Leave record'],
    a: {
      zh: '病假每年30天，前3天可給半薪；有醫療證明則30天全為半薪。超過30天可申請留職停薪。雇主不得拒絕合法病假。',
      en: 'Up to 30 sick days/year at half pay (with medical certificate). Employers cannot deny legitimate sick leave.',
      id: 'Sakit 30 hari per tahun dengan setengah gaji (dengan surat dokter). Majikan tidak boleh menolak cuti sakit yang sah.',
      vi: 'Tối đa 30 ngày ốm/năm với nửa lương (có chứng nhận y tế). Chủ lao động không thể từ chối nghỉ ốm hợp lệ.',
      th: 'ลาป่วยได้สูงสุด 30 วัน/ปี โดยได้รับครึ่งเงินเดือน (มีใบรับรองแพทย์) นายจ้างปฏิเสธการลาป่วยที่ถูกต้องไม่ได้'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' }
    ]
  },

  {
    id: 'leave_03',
    category: 'leave',
    q: {
      zh: '我懷孕了，有產假可以請嗎？',
      en: 'I am pregnant. Can I take maternity leave?',
      id: 'Saya hamil. Apakah saya bisa mengambil cuti melahirkan?',
      vi: 'Tôi đang mang thai. Tôi có thể nghỉ thai sản không?',
      th: 'ฉันตั้งครรภ์ สามารถลาคลอดได้ไหม?'
    },
    isLegal: 'yes',
    evidence: ['懷孕證明 / Pregnancy certificate', '雇傭契約 / Employment contract'],
    a: {
      zh: '依《性別工作平等法》：產假 8 週（全薪）。流產假視週數而定。雇主不得以懷孕為由解僱，否則可申訴。',
      en: 'Per the Gender Equality in Employment Act: 8 weeks of maternity leave at full pay. Employers cannot dismiss workers due to pregnancy.',
      id: 'Cuti melahirkan 8 minggu dengan gaji penuh. Majikan tidak boleh memecat karena kehamilan.',
      vi: 'Nghỉ thai sản 8 tuần với lương đầy đủ. Chủ lao động không thể sa thải vì lý do mang thai.',
      th: 'ลาคลอด 8 สัปดาห์โดยได้รับเงินเดือนเต็ม นายจ้างไม่สามารถไล่ออกเนื่องจากตั้งครรภ์'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' },
      { label: { zh: '聯絡法扶基金會', en: 'Contact LAF', id: 'Hubungi LAF', vi: 'Liên hệ LAF', th: 'ติดต่อ LAF' }, type: 'url', value: 'https://www.laf.org.tw' }
    ]
  },

  {
    id: 'leave_04',
    category: 'leave',
    q: {
      zh: '國定假日雇主可以要求我上班嗎？',
      en: 'Can the employer require me to work on public holidays?',
      id: 'Apakah majikan bisa mewajibkan saya bekerja di hari libur nasional?',
      vi: 'Chủ lao động có thể yêu cầu tôi đi làm vào ngày nghỉ lễ không?',
      th: 'นายจ้างสามารถบังคับให้ทำงานในวันหยุดนักขัตฤกษ์ได้ไหม?'
    },
    isLegal: 'check',
    evidence: ['排班表 / Schedule', '薪資條 / Pay slip'],
    a: {
      zh: '可以，但需支付加倍工資，且須經勞工同意。若未加班費補償即強迫出勤，屬違法。',
      en: 'Yes, but double pay is required and worker consent is needed. Forcing work without compensation is illegal.',
      id: 'Boleh, tetapi harus membayar ganda dan butuh persetujuan pekerja. Memaksa tanpa kompensasi adalah pelanggaran.',
      vi: 'Có thể, nhưng phải trả gấp đôi lương và cần sự đồng ý. Ép làm mà không bồi thường là vi phạm.',
      th: 'ได้ แต่ต้องจ่ายสองเท่าและต้องได้รับความยินยอม การบังคับโดยไม่ชดเชยเป็นการละเมิด'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' }
    ]
  },

  /* ══════════════ 人身安全 safety ══════════════ */
  {
    id: 'safety_01',
    category: 'safety',
    q: {
      zh: '雇主或仲介對我言語或肢體霸凌，怎麼辦？',
      en: 'What if the employer or broker verbally or physically abuses me?',
      id: 'Apa yang harus dilakukan jika majikan atau agen melakukan pelecehan verbal/fisik?',
      vi: 'Làm gì khi chủ lao động hoặc môi giới lạm dụng bằng lời nói hoặc hành động?',
      th: 'ทำอย่างไรถ้านายจ้างหรือนายหน้าทำร้ายร่างกายหรือพูดจาเหยียดหยาม?'
    },
    isLegal: 'no',
    evidence: ['傷勢照片 / Injury photos', '對話截圖 / Chat screenshot', '目擊者證詞 / Witness statement'],
    a: {
      zh: '任何肢體或言語暴力均違法。若情況緊急，請撥110報警；非緊急可撥1955或聯絡移民署外來人口諮詢專線1990。',
      en: 'Any physical or verbal abuse is illegal. For emergencies, call 110 (Police). Non-urgent: call 1955 or immigration hotline 1990.',
      id: 'Kekerasan fisik atau verbal adalah melanggar hukum. Darurat: 110 (Polisi). Non-darurat: 1955 atau 1990.',
      vi: 'Mọi hành vi bạo lực thể chất hoặc lời nói đều vi phạm pháp luật. Khẩn cấp: 110. Không khẩn: 1955 hoặc 1990.',
      th: 'การทำร้ายร่างกายหรือวาจาเป็นสิ่งผิดกฎหมาย ฉุกเฉิน: 110 ไม่ฉุกเฉิน: 1955 หรือ 1990'
    },
    actions: [
      { label: { zh: '撥打 110 報警', en: 'Call 110 Police', id: 'Hubungi 110', vi: 'Gọi 110 Cảnh sát', th: 'โทร 110 ตำรวจ' }, type: 'tel', value: '110' },
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' },
      { label: { zh: '移民署 1990', en: 'NIA 1990', id: 'NIA 1990', vi: 'NIA 1990', th: 'NIA 1990' }, type: 'tel', value: '1990' }
    ]
  },

  {
    id: 'safety_02',
    category: 'safety',
    q: {
      zh: '工作中受傷，雇主要負責嗎？',
      en: 'If I get injured at work, is the employer responsible?',
      id: 'Jika saya terluka di tempat kerja, apakah majikan bertanggung jawab?',
      vi: 'Nếu tôi bị thương khi làm việc, chủ lao động có chịu trách nhiệm không?',
      th: 'ถ้าได้รับบาดเจ็บขณะทำงาน นายจ้างต้องรับผิดชอบหรือไม่?'
    },
    isLegal: 'yes',
    evidence: ['醫療紀錄 / Medical record', '意外事故報告 / Accident report', '目擊者證詞 / Witness statement'],
    a: {
      zh: '是的。《勞基法》規定雇主必須提供安全工作環境，且依法投保勞工保險。職業傷害可申請職災補償，費用由雇主或勞保給付。',
      en: 'Yes. The Labor Standards Act requires employers to provide a safe workplace and mandatory labor insurance. Occupational injuries qualify for workers\' compensation.',
      id: 'Ya. Majikan wajib menyediakan lingkungan kerja yang aman dan asuransi tenaga kerja. Cedera kerja berhak mendapat kompensasi.',
      vi: 'Có. Chủ lao động có trách nhiệm tạo môi trường làm việc an toàn và tham gia bảo hiểm lao động. Thương tích nghề nghiệp được bồi thường.',
      th: 'ใช่ นายจ้างต้องให้สภาพแวดล้อมการทำงานที่ปลอดภัยและมีประกันแรงงาน การบาดเจ็บจากงานมีสิทธิ์ได้รับค่าชดเชย'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' },
      { label: { zh: '職安署', en: 'OSHA Taiwan', id: 'OSHA Taiwan', vi: 'OSHA Đài Loan', th: 'OSHA ไต้หวัน' }, type: 'url', value: 'https://www.osha.gov.tw' }
    ]
  },

  {
    id: 'safety_03',
    category: 'safety',
    q: {
      zh: '遭受性騷擾，我該怎麼辦？',
      en: 'What should I do if I experience sexual harassment?',
      id: 'Apa yang harus saya lakukan jika mengalami pelecehan seksual?',
      vi: 'Tôi phải làm gì nếu bị quấy rối tình dục?',
      th: 'ถ้าถูกคุกคามทางเพศฉันควรทำอย่างไร?'
    },
    isLegal: 'no',
    evidence: ['對話截圖 / Chat screenshot', '目擊者 / Witness', '日記紀錄 / Diary log'],
    a: {
      zh: '性騷擾屬犯罪行為。依《性別工作平等法》，可向公司投訴，或向地方主管機關申訴。緊急請撥113保護專線或110報警。',
      en: 'Sexual harassment is a crime. You can file an internal complaint or report to local authorities. For emergencies, call 113 or 110.',
      id: 'Pelecehan seksual adalah kejahatan. Laporkan secara internal atau ke pihak berwenang. Darurat: 113 atau 110.',
      vi: 'Quấy rối tình dục là tội phạm. Báo cáo nội bộ hoặc cho cơ quan chức năng. Khẩn cấp: 113 hoặc 110.',
      th: 'การคุกคามทางเพศเป็นอาชญากรรม รายงานภายในหรือแจ้งหน่วยงาน ฉุกเฉิน: 113 หรือ 110'
    },
    actions: [
      { label: { zh: '撥打 113 保護專線', en: 'Call 113', id: 'Hubungi 113', vi: 'Gọi 113', th: 'โทร 113' }, type: 'tel', value: '113' },
      { label: { zh: '撥打 110 報警', en: 'Call 110', id: 'Hubungi 110', vi: 'Gọi 110', th: 'โทร 110' }, type: 'tel', value: '110' }
    ]
  },

  {
    id: 'safety_04',
    category: 'safety',
    q: {
      zh: '雇主提供的住所環境不安全或太擁擠，可以申訴嗎？',
      en: 'Can I complain if the employer-provided housing is unsafe or overcrowded?',
      id: 'Bolehkah saya mengadukan jika tempat tinggal yang disediakan majikan tidak aman?',
      vi: 'Tôi có thể khiếu nại nếu nơi ở do chủ cung cấp không an toàn hoặc quá chật không?',
      th: 'สามารถร้องเรียนได้ไหมถ้าที่พักที่นายจ้างจัดให้ไม่ปลอดภัยหรือแออัด?'
    },
    isLegal: 'yes',
    evidence: ['現場照片 / Photos', '居住契約 / Housing contract'],
    a: {
      zh: '可以。《就業服務法》要求雇主提供符合標準之住所。可向高雄市勞工局投訴，勞工局將進行檢查。',
      en: 'Yes. The Employment Services Act requires employers to provide adequate housing. You can file a complaint with the Kaohsiung Labor Bureau for inspection.',
      id: 'Ya. Laporkan ke Biro Tenaga Kerja Kaohsiung untuk inspeksi.',
      vi: 'Có. Báo cáo với Cục Lao động Cao Hùng để kiểm tra.',
      th: 'ได้ รายงานต่อสำนักงานแรงงานเกาสงเพื่อตรวจสอบ'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' },
      { label: { zh: '高雄市勞工局', en: 'Kaohsiung Labor Bureau', id: 'Biro Tenaga Kerja', vi: 'Cục Lao động', th: 'สำนักงานแรงงาน' }, type: 'url', value: 'https://labor.kcg.gov.tw' }
    ]
  },

  /* ══════════════ 證件居留 document ══════════════ */
  {
    id: 'document_01',
    category: 'document',
    q: {
      zh: '雇主沒有申辦工作許可，我能合法工作嗎？',
      en: 'Can I work legally if my employer hasn\'t applied for a work permit?',
      id: 'Bisakah saya bekerja secara legal jika majikan tidak mengajukan izin kerja?',
      vi: 'Tôi có thể làm việc hợp pháp nếu chủ lao động chưa xin giấy phép lao động không?',
      th: 'ฉันทำงานได้ถูกกฎหมายไหมถ้านายจ้างยังไม่ขอใบอนุญาตทำงาน?'
    },
    isLegal: 'no',
    evidence: ['工作許可證 / Work permit', '雇傭契約 / Employment contract'],
    a: {
      zh: '不合法。在台灣工作需有有效工作許可。若雇主尚未申辦，應立即催促辦理；若被強迫在無許可情況下工作，可向移民署舉報。',
      en: 'No. Working in Taiwan requires a valid work permit. If the employer hasn\'t applied, urge them to do so. Report illegal situations to the NIA.',
      id: 'Tidak. Bekerja di Taiwan membutuhkan izin kerja yang valid. Laporkan ke NIA jika dipaksa bekerja tanpa izin.',
      vi: 'Không. Làm việc tại Đài Loan cần giấy phép lao động hợp lệ. Báo cáo với NIA nếu bị ép làm việc không có giấy phép.',
      th: 'ไม่ การทำงานในไต้หวันต้องมีใบอนุญาตทำงานที่ถูกต้อง รายงานต่อ NIA หากถูกบังคับทำงานโดยไม่มีใบอนุญาต'
    },
    actions: [
      { label: { zh: '移民署 1990', en: 'NIA 1990', id: 'NIA 1990', vi: 'NIA 1990', th: 'NIA 1990' }, type: 'tel', value: '1990' },
      { label: { zh: '移民署官網', en: 'NIA Website', id: 'Website NIA', vi: 'Website NIA', th: 'เว็บ NIA' }, type: 'url', value: 'https://www.immigration.gov.tw' }
    ]
  },

  {
    id: 'document_02',
    category: 'document',
    q: {
      zh: '雇主扣留我的護照或居留證，合法嗎？',
      en: 'Is it legal for the employer to confiscate my passport or ARC?',
      id: 'Apakah legal jika majikan menyita paspor atau ARC saya?',
      vi: 'Chủ lao động có được phép tịch thu hộ chiếu hoặc ARC của tôi không?',
      th: 'นายจ้างยึดพาสปอร์ตหรือบัตรพำนักของฉันถูกกฎหมายไหม?'
    },
    isLegal: 'no',
    evidence: ['報案紀錄 / Police report', '對話截圖 / Chat screenshot'],
    a: {
      zh: '完全違法！依《就業服務法》第57條，雇主不得扣留移工之護照、居留證或任何重要文件。可立即向警察或1955申訴。',
      en: 'Completely illegal! Article 57 of the Employment Services Act prohibits employers from confiscating passports or ARCs. Report immediately to police or call 1955.',
      id: 'Sepenuhnya ilegal! Laporkan segera ke polisi atau hubungi 1955.',
      vi: 'Hoàn toàn vi phạm pháp luật! Báo cáo ngay với cảnh sát hoặc gọi 1955.',
      th: 'ผิดกฎหมายโดยสิ้นเชิง! รายงานต่อตำรวจหรือโทร 1955 ทันที'
    },
    actions: [
      { label: { zh: '撥打 110 報警', en: 'Call 110 Police', id: 'Hubungi 110', vi: 'Gọi 110', th: 'โทร 110' }, type: 'tel', value: '110' },
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' }
    ]
  },

  {
    id: 'document_03',
    category: 'document',
    q: {
      zh: '工作許可即將到期，如何申請展延？',
      en: 'My work permit is expiring. How do I apply for an extension?',
      id: 'Izin kerja saya hampir habis. Bagaimana cara memperpanjang?',
      vi: 'Giấy phép lao động sắp hết hạn. Làm thế nào để gia hạn?',
      th: 'ใบอนุญาตทำงานของฉันใกล้หมดอายุ จะต่ออายุอย่างไร?'
    },
    isLegal: 'check',
    evidence: ['工作許可證 / Work permit', '雇傭契約 / Employment contract'],
    a: {
      zh: '應於到期前2個月由雇主向勞動部申辦展延。若雇主不處理，可要求雇主辦理或自行向1955諮詢。逾期在台屬違法逗留。',
      en: 'The employer must apply for extension 2 months before expiry. If they fail to do so, contact 1955 for advice. Staying beyond expiry is illegal.',
      id: 'Majikan harus mengajukan perpanjangan 2 bulan sebelum kadaluarsa. Hubungi 1955 jika majikan tidak mengurus.',
      vi: 'Chủ lao động phải xin gia hạn 2 tháng trước khi hết hạn. Liên hệ 1955 nếu chủ không xử lý.',
      th: 'นายจ้างต้องยื่นต่ออายุ 2 เดือนก่อนหมดอายุ ติดต่อ 1955 หากนายจ้างไม่ดำเนินการ'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' },
      { label: { zh: '勞動部官網', en: 'Ministry of Labor', id: 'Kementerian Tenaga Kerja', vi: 'Bộ Lao động', th: 'กระทรวงแรงงาน' }, type: 'url', value: 'https://www.mol.gov.tw' }
    ]
  },

  {
    id: 'document_04',
    category: 'document',
    q: {
      zh: '我想換雇主，可以嗎？有什麼限制？',
      en: 'Can I change employers? Are there restrictions?',
      id: 'Bisakah saya ganti majikan? Ada batasan apa?',
      vi: 'Tôi có thể đổi chủ lao động không? Có hạn chế gì không?',
      th: 'ฉันสามารถเปลี่ยนนายจ้างได้ไหม? มีข้อจำกัดอะไรบ้าง?'
    },
    isLegal: 'check',
    evidence: ['工作許可證 / Work permit', '在職紀錄 / Employment record'],
    a: {
      zh: '在特定條件下可轉換雇主：如雇主歇業、違反勞動契約、受到性騷擾等。一般移工需向主管機關申請，不得自行跳槽。',
      en: 'Employer transfer is allowed under specific conditions (e.g., employer closure, contract violation, harassment). General workers must apply through authorities.',
      id: 'Perubahan majikan diperbolehkan dalam kondisi tertentu (penutupan usaha, pelanggaran kontrak, pelecehan). Harus melalui otoritas resmi.',
      vi: 'Chuyển đổi chủ được phép trong các trường hợp nhất định (đóng cửa, vi phạm hợp đồng, quấy rối). Phải thông qua cơ quan chức năng.',
      th: 'เปลี่ยนนายจ้างได้ในเงื่อนไขบางอย่าง (ปิดกิจการ ละเมิดสัญญา คุกคาม) ต้องยื่นขอผ่านหน่วยงานราชการ'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' },
      { label: { zh: '聯絡法扶基金會', en: 'Contact LAF', id: 'Hubungi LAF', vi: 'Liên hệ LAF', th: 'ติดต่อ LAF' }, type: 'url', value: 'https://www.laf.org.tw' }
    ]
  },

  /* ══════════════ 其他 other ══════════════ */
  {
    id: 'other_01',
    category: 'other',
    q: {
      zh: '仲介亂收費或剋扣薪資，如何申訴？',
      en: 'The broker overcharges or skims my wages. How do I file a complaint?',
      id: 'Agen mengenakan biaya berlebihan atau memotong gaji saya. Bagaimana cara mengadu?',
      vi: 'Môi giới thu phí quá mức hoặc cắt xén lương của tôi. Làm thế nào để khiếu nại?',
      th: 'นายหน้าคิดค่าธรรมเนียมเกินหรือหักเงินเดือนฉัน จะร้องเรียนอย่างไร?'
    },
    isLegal: 'no',
    evidence: ['收費紀錄 / Fee records', '薪資條 / Pay slip', '合約 / Contract'],
    a: {
      zh: '仲介收費有上限規定，違規可向勞動部或地方勞工局申訴。保留所有費用憑據作為證據。撥打1955可獲得協助。',
      en: 'Broker fees are capped by law. Violations can be reported to the Ministry of Labor or local Labor Bureau. Keep all fee receipts as evidence.',
      id: 'Biaya agen diatur oleh hukum. Pelanggaran dapat dilaporkan ke Kementerian Tenaga Kerja. Simpan semua tanda terima.',
      vi: 'Phí môi giới có giới hạn theo luật. Vi phạm có thể báo cáo với Bộ Lao động. Giữ tất cả biên lai.',
      th: 'ค่าธรรมเนียมนายหน้ามีการจำกัดตามกฎหมาย การละเมิดสามารถรายงานต่อกระทรวงแรงงาน เก็บใบเสร็จทั้งหมดไว้'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' },
      { label: { zh: '聯絡法扶基金會', en: 'Contact LAF', id: 'Hubungi LAF', vi: 'Liên hệ LAF', th: 'ติดต่อ LAF' }, type: 'url', value: 'https://www.laf.org.tw' }
    ]
  },

  {
    id: 'other_02',
    category: 'other',
    q: {
      zh: '被強迫從事與契約不同的工作，怎麼辦？',
      en: 'What if I am forced to do work different from my contract?',
      id: 'Apa yang harus dilakukan jika dipaksa melakukan pekerjaan di luar kontrak?',
      vi: 'Làm gì nếu bị ép làm việc khác với hợp đồng?',
      th: 'ทำอย่างไรถ้าถูกบังคับให้ทำงานที่ต่างจากสัญญา?'
    },
    isLegal: 'no',
    evidence: ['雇傭契約 / Employment contract', '工作紀錄 / Work log', '對話截圖 / Chat screenshot'],
    a: {
      zh: '違法。雇主必須依勞動契約提供約定工作。被迫從事其他工作可向勞工局申訴，要求回復原職或賠償。',
      en: 'Illegal. Employers must provide the work specified in the contract. You can file a complaint for reinstatement or compensation.',
      id: 'Melanggar hukum. Laporkan ke Biro Tenaga Kerja untuk pemulihan posisi atau kompensasi.',
      vi: 'Vi phạm pháp luật. Báo cáo với Cục Lao động để được phục hồi chức vụ hoặc bồi thường.',
      th: 'ผิดกฎหมาย รายงานต่อสำนักงานแรงงานเพื่อคืนตำแหน่งหรือขอค่าชดเชย'
    },
    actions: [
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' },
      { label: { zh: '聯絡法扶基金會', en: 'Contact LAF', id: 'Hubungi LAF', vi: 'Liên hệ LAF', th: 'ติดต่อ LAF' }, type: 'url', value: 'https://www.laf.org.tw' }
    ]
  },

  {
    id: 'other_03',
    category: 'other',
    q: {
      zh: '如何了解自己的勞保投保情況？',
      en: 'How can I check my labor insurance enrollment status?',
      id: 'Bagaimana cara memeriksa status asuransi tenaga kerja saya?',
      vi: 'Làm thế nào để kiểm tra tình trạng tham gia bảo hiểm lao động của mình?',
      th: 'จะตรวจสอบสถานะประกันแรงงานของตัวเองได้อย่างไร?'
    },
    isLegal: 'check',
    evidence: ['身份證 / ID', '勞保卡 / Labor insurance card'],
    a: {
      zh: '可至勞動部勞工保險局官網查詢，或撥打02-23961266。雇主必須為移工投保勞工保險，若未投保屬違法。',
      en: 'Check via the Bureau of Labor Insurance website or call 02-23961266. Employers must enroll workers in labor insurance; failure to do so is illegal.',
      id: 'Periksa di situs BLI atau hubungi 02-23961266. Majikan wajib mendaftarkan pekerja ke asuransi tenaga kerja.',
      vi: 'Kiểm tra tại website BLI hoặc gọi 02-23961266. Chủ lao động phải đăng ký bảo hiểm cho người lao động.',
      th: 'ตรวจสอบผ่านเว็บไซต์ BLI หรือโทร 02-23961266 นายจ้างต้องสมัครประกันแรงงานให้คนงาน'
    },
    actions: [
      { label: { zh: '勞保局', en: 'BLI Website', id: 'Website BLI', vi: 'Website BLI', th: 'เว็บ BLI' }, type: 'url', value: 'https://www.bli.gov.tw' },
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' }
    ]
  },

  {
    id: 'other_04',
    category: 'other',
    q: {
      zh: '合約到期後，雇主不讓我回國，怎麼辦？',
      en: 'What if the employer won\'t let me return home after the contract ends?',
      id: 'Apa yang harus dilakukan jika majikan tidak mengizinkan saya pulang setelah kontrak berakhir?',
      vi: 'Làm gì nếu chủ lao động không cho tôi về nước sau khi hết hợp đồng?',
      th: 'ทำอย่างไรถ้านายจ้างไม่ให้กลับบ้านหลังหมดสัญญา?'
    },
    isLegal: 'no',
    evidence: ['合約到期文件 / Contract expiry document', '機票紀錄 / Flight records'],
    a: {
      zh: '違法。合約期滿，雇主依法有義務安排（或支付）返國費用。若遭阻止，請立即聯繫駐台灣本國辦事處或撥打1990。',
      en: 'Illegal. Upon contract expiry, employers are obligated to arrange/pay for return travel. If blocked, contact your country\'s representative office in Taiwan or call 1990.',
      id: 'Melanggar hukum. Majikan wajib menanggung biaya kepulangan. Hubungi kantor perwakilan negara Anda atau 1990.',
      vi: 'Vi phạm pháp luật. Chủ có nghĩa vụ lo chi phí về nước. Liên hệ văn phòng đại diện nước bạn tại Đài Loan hoặc gọi 1990.',
      th: 'ผิดกฎหมาย นายจ้างมีหน้าที่จัดการค่าใช้จ่ายในการเดินทางกลับ ติดต่อสถานทูตประเทศของคุณหรือโทร 1990'
    },
    actions: [
      { label: { zh: '移民署 1990', en: 'NIA 1990', id: 'NIA 1990', vi: 'NIA 1990', th: 'NIA 1990' }, type: 'tel', value: '1990' },
      { label: { zh: '撥打 1955', en: 'Call 1955', id: 'Hubungi 1955', vi: 'Gọi 1955', th: 'โทร 1955' }, type: 'tel', value: '1955' }
    ]
  }

];
