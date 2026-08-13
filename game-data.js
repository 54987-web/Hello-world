/**
 * MigrantCare Kaohsiung — Sub-Task 7 遊戲題庫
 * 三種遊戲類型：
 *   A — 閃卡配對 Flash Card Match（症狀辨識 + 勞工名詞，各4題）
 *   B — 緊急排序 Emergency Sort（醫療 + 勞工情境，各2題，共4題）
 *   C — 情境填空 Situation Fill-in（勞工權益，8題）
 *
 * landmark_id 對應 locations-data.js 的 id 欄位：
 *   m1~m5 醫療機構  l1~l3 法律扶助  n1~n5 服務中心
 */

const GAME_QUESTIONS = [

  /* ══════════════════════════════════════════
     類型 A — 閃卡配對（Flash Card Match）
     A01~A04 症狀辨識；A05~A08 勞工名詞
  ══════════════════════════════════════════ */
  {
    id: 'A01', type: 'A', landmark_id: 'm1',
    q: {
      zh: '🌡️ 這個符號代表哪種症狀？',
      en: 'What symptom does 🌡️ represent?',
      id: 'Gejala apa yang dilambangkan oleh 🌡️?',
      vi: '🌡️ biểu tượng này đại diện cho triệu chứng gì?',
      th: '🌡️ สัญลักษณ์นี้แทนอาการอะไร?'
    },
    image_emoji: '🌡️',
    options: [
      { zh: '發燒', en: 'Fever', id: 'Demam', vi: 'Sốt', th: 'ไข้' },
      { zh: '頭痛', en: 'Headache', id: 'Sakit kepala', vi: 'Đau đầu', th: 'ปวดหัว' },
      { zh: '咳嗽', en: 'Cough', id: 'Batuk', vi: 'Ho', th: 'ไอ' },
      { zh: '嘔吐', en: 'Vomiting', id: 'Muntah', vi: 'Nôn mửa', th: 'อาเจียน' }
    ],
    answer: 0,
    explain: {
      zh: '🌡️ 發燒是體溫超過 38°C，需多喝水休息，38.5°C 以上請就醫。',
      en: 'Fever means body temperature above 38°C. Rest and drink water. Seek medical care above 38.5°C.',
      id: 'Demam berarti suhu tubuh di atas 38°C. Istirahat dan minum air. Cari bantuan medis di atas 38,5°C.',
      vi: 'Sốt là nhiệt độ cơ thể trên 38°C. Nghỉ ngơi và uống nước. Đến bác sĩ nếu trên 38,5°C.',
      th: 'ไข้คืออุณหภูมิร่างกายสูงกว่า 38°C ควรพักผ่อนและดื่มน้ำ หากเกิน 38.5°C ควรพบแพทย์'
    }
  },
  {
    id: 'A02', type: 'A', landmark_id: 'm2',
    q: {
      zh: '😵 頭暈目眩最可能是哪種原因？',
      en: 'What is the most likely cause of 😵 dizziness?',
      id: 'Apa penyebab paling mungkin dari 😵 pusing?',
      vi: 'Nguyên nhân có thể nhất của 😵 chóng mặt là gì?',
      th: '😵 อาการวิงเวียนศีรษะมักมีสาเหตุจากอะไร?'
    },
    image_emoji: '😵',
    options: [
      { zh: '貧血或低血壓', en: 'Anemia or low BP', id: 'Anemia atau tekanan darah rendah', vi: 'Thiếu máu hoặc huyết áp thấp', th: 'โลหิตจางหรือความดันต่ำ' },
      { zh: '過敏反應', en: 'Allergic reaction', id: 'Reaksi alergi', vi: 'Phản ứng dị ứng', th: 'ปฏิกิริยาภูมิแพ้' },
      { zh: '牙痛', en: 'Toothache', id: 'Sakit gigi', vi: 'Đau răng', th: 'ปวดฟัน' },
      { zh: '腳痛', en: 'Foot pain', id: 'Sakit kaki', vi: 'Đau chân', th: 'ปวดเท้า' }
    ],
    answer: 0,
    explain: {
      zh: '😵 頭暈常見原因為貧血、低血壓或脫水，若持續超過 10 分鐘應就醫。',
      en: 'Dizziness is often caused by anemia, low blood pressure, or dehydration. See a doctor if it lasts over 10 min.',
      id: 'Pusing sering disebabkan oleh anemia, tekanan darah rendah, atau dehidrasi. Temui dokter jika berlangsung lebih dari 10 menit.',
      vi: 'Chóng mặt thường do thiếu máu, huyết áp thấp hoặc mất nước. Gặp bác sĩ nếu kéo dài hơn 10 phút.',
      th: 'วิงเวียนมักเกิดจากโลหิตจาง ความดันต่ำ หรือขาดน้ำ หากเกิน 10 นาทีควรพบแพทย์'
    }
  },
  {
    id: 'A03', type: 'A', landmark_id: 'm3',
    q: {
      zh: '😮‍💨 呼吸困難時，第一步應該怎麼做？',
      en: 'What is the first step when having 😮‍💨 breathing difficulty?',
      id: 'Apa langkah pertama saat mengalami 😮‍💨 kesulitan bernapas?',
      vi: 'Bước đầu tiên khi gặp 😮‍💨 khó thở là gì?',
      th: 'เมื่อมีอาการ 😮‍💨 หายใจลำบาก ควรทำอะไรเป็นอย่างแรก?'
    },
    image_emoji: '😮‍💨',
    options: [
      { zh: '立即撥打 119', en: 'Call 119 immediately', id: 'Segera hubungi 119', vi: 'Gọi 119 ngay', th: 'โทร 119 ทันที' },
      { zh: '喝熱水', en: 'Drink hot water', id: 'Minum air panas', vi: 'Uống nước nóng', th: 'ดื่มน้ำร้อน' },
      { zh: '做運動', en: 'Exercise', id: 'Berolahraga', vi: 'Tập thể dục', th: 'ออกกำลังกาย' },
      { zh: '吃止痛藥', en: 'Take painkillers', id: 'Minum obat pereda nyeri', vi: 'Uống thuốc giảm đau', th: 'กินยาแก้ปวด' }
    ],
    answer: 0,
    explain: {
      zh: '😮‍💨 呼吸困難是緊急症狀，應立即撥打 119，保持坐姿稍微前傾以幫助呼吸。',
      en: 'Breathing difficulty is urgent. Call 119 immediately and lean slightly forward while sitting to aid breathing.',
      id: 'Kesulitan bernapas adalah gejala darurat. Segera hubungi 119 dan duduk sedikit condong ke depan.',
      vi: 'Khó thở là triệu chứng khẩn cấp. Gọi 119 ngay và ngồi hơi cúi về phía trước để dễ thở.',
      th: 'หายใจลำบากเป็นอาการฉุกเฉิน โทร 119 ทันทีและนั่งเอนตัวไปข้างหน้าเล็กน้อยเพื่อช่วยหายใจ'
    }
  },
  {
    id: 'A04', type: 'A', landmark_id: 'm4',
    q: {
      zh: '🤢 噁心想吐時，不應該怎麼做？',
      en: 'What should you NOT do when feeling 🤢 nauseous?',
      id: 'Apa yang TIDAK boleh dilakukan saat merasa 🤢 mual?',
      vi: 'Điều KHÔNG nên làm khi cảm thấy 🤢 buồn nôn?',
      th: 'สิ่งที่ไม่ควรทำเมื่อรู้สึก 🤢 คลื่นไส้คืออะไร?'
    },
    image_emoji: '🤢',
    options: [
      { zh: '強迫自己進食', en: 'Force yourself to eat', id: 'Memaksa diri makan', vi: 'Ép bản thân ăn uống', th: 'บังคับตัวเองให้กินอาหาร' },
      { zh: '喝清淡飲料補水', en: 'Drink clear fluids', id: 'Minum cairan bening', vi: 'Uống chất lỏng nhẹ', th: 'ดื่มน้ำใสๆ เพื่อชดเชยน้ำ' },
      { zh: '休息避免劇烈活動', en: 'Rest and avoid activity', id: 'Istirahat hindari aktivitas', vi: 'Nghỉ ngơi tránh vận động', th: 'พักผ่อนและหลีกเลี่ยงการออกแรง' },
      { zh: '告知雇主身體不適', en: 'Inform employer of illness', id: 'Beri tahu majikan tentang sakit', vi: 'Báo cho chủ lao động', th: 'แจ้งนายจ้างเรื่องอาการป่วย' }
    ],
    answer: 0,
    explain: {
      zh: '🤢 噁心時不應強迫進食，應休息喝清淡飲料。若伴隨發燒或超過 24 小時，請就醫。',
      en: 'Do not force eating when nauseous. Rest and drink clear fluids. See a doctor if accompanied by fever or lasting >24 hours.',
      id: 'Jangan memaksa makan saat mual. Istirahat dan minum cairan bening. Temui dokter jika disertai demam atau lebih dari 24 jam.',
      vi: 'Không ép ăn khi buồn nôn. Nghỉ ngơi và uống chất lỏng. Gặp bác sĩ nếu kèm sốt hoặc kéo dài hơn 24 giờ.',
      th: 'อย่าบังคับกินอาหารเมื่อคลื่นไส้ พักและดื่มน้ำใส หากมีไข้หรือเกิน 24 ชั่วโมงควรพบแพทย์'
    }
  },
  {
    id: 'A05', type: 'A', landmark_id: 'l1',
    q: {
      zh: '💰 「加班費」正確計算方式是什麼？',
      en: 'What is the correct way to calculate 💰 overtime pay?',
      id: 'Apa cara yang benar menghitung 💰 upah lembur?',
      vi: 'Cách tính 💰 lương tăng ca đúng là gì?',
      th: 'วิธีคำนวณ 💰 ค่าล่วงเวลาที่ถูกต้องคืออะไร?'
    },
    image_emoji: '💰',
    options: [
      { zh: '平日前2小時：時薪×1.34', en: 'Weekday first 2h: hourly×1.34', id: 'Hari biasa 2 jam pertama: upah×1,34', vi: 'Ngày thường 2h đầu: lương×1,34', th: 'วันธรรมดา 2 ชั่วโมงแรก: ×1.34' },
      { zh: '固定月薪除以加班時數', en: 'Monthly salary ÷ OT hours', id: 'Gaji bulanan ÷ jam lembur', vi: 'Lương tháng ÷ giờ OT', th: 'เงินเดือน ÷ ชั่วโมงOT' },
      { zh: '加班費由雇主自定', en: 'OT pay set by employer', id: 'Upah lembur ditentukan majikan', vi: 'Do chủ lao động tự định', th: 'ค่า OT กำหนดโดยนายจ้าง' },
      { zh: '一律加發一個月薪資', en: 'Always +1 month salary', id: 'Selalu tambah 1 bulan gaji', vi: 'Luôn thêm 1 tháng lương', th: 'จ่ายเพิ่ม 1 เดือนเสมอ' }
    ],
    answer: 0,
    explain: {
      zh: '💰 依勞基法：平日加班前2小時為時薪×1.34，第3小時起為×1.67。若雇主拒絕，可撥打 1955 申訴。',
      en: 'Labor Standards Act: First 2 OT hours on weekdays = hourly × 1.34; from 3rd hour = × 1.67. Call 1955 if refused.',
      id: 'UU Ketenagakerjaan: 2 jam lembur pertama hari biasa = upah × 1,34; jam ke-3 = × 1,67. Hubungi 1955 jika ditolak.',
      vi: 'Luật Lao động: 2 giờ OT đầu ngày thường = lương × 1,34; từ giờ thứ 3 = × 1,67. Gọi 1955 nếu bị từ chối.',
      th: 'กฎหมายแรงงาน: OT 2 ชั่วโมงแรกวันธรรมดา = ×1.34, ชั่วโมงที่ 3 ขึ้นไป = ×1.67 โทร 1955 หากถูกปฏิเสธ'
    }
  },
  {
    id: 'A06', type: 'A', landmark_id: 'l2',
    q: {
      zh: '🏦 2024年台灣「基本工資」月薪是多少？',
      en: 'What is Taiwan\'s 2024 🏦 minimum monthly wage?',
      id: 'Berapa 🏦 upah minimum bulanan Taiwan 2024?',
      vi: '🏦 Mức lương tối thiểu tháng của Đài Loan 2024 là bao nhiêu?',
      th: '🏦 ค่าแรงขั้นต่ำรายเดือนของไต้หวัน 2024 คือเท่าไหร่?'
    },
    image_emoji: '🏦',
    options: [
      { zh: '27,470 元', en: 'NT$27,470', id: 'NT$27.470', vi: 'NT$27,470', th: 'NT$27,470' },
      { zh: '20,000 元', en: 'NT$20,000', id: 'NT$20.000', vi: 'NT$20,000', th: 'NT$20,000' },
      { zh: '30,000 元', en: 'NT$30,000', id: 'NT$30.000', vi: 'NT$30,000', th: 'NT$30,000' },
      { zh: '25,000 元', en: 'NT$25,000', id: 'NT$25.000', vi: 'NT$25,000', th: 'NT$25,000' }
    ],
    answer: 0,
    explain: {
      zh: '🏦 2024年台灣基本工資月薪為 27,470 元，時薪為 183 元。若低於此標準雇主違法，可申訴 1955。',
      en: 'Taiwan minimum monthly wage in 2024 is NT$27,470; hourly rate NT$183. Below this is illegal — call 1955.',
      id: 'Upah minimum bulanan Taiwan 2024 adalah NT$27.470; upah per jam NT$183. Di bawah ini melanggar hukum — hubungi 1955.',
      vi: 'Lương tối thiểu tháng 2024 là NT$27,470; theo giờ NT$183. Dưới mức này là vi phạm — gọi 1955.',
      th: 'ค่าแรงขั้นต่ำรายเดือนไต้หวัน 2024 คือ NT$27,470 รายชั่วโมง NT$183 หากต่ำกว่านี้นายจ้างผิดกฎหมาย โทร 1955'
    }
  },
  {
    id: 'A07', type: 'A', landmark_id: 'n1',
    q: {
      zh: '🏖 移工每年可享有多少天「特別休假」？（工作滿1年）',
      en: 'How many days of 🏖 annual leave for migrant workers after 1 year?',
      id: 'Berapa hari 🏖 cuti tahunan bagi pekerja migran setelah 1 tahun?',
      vi: 'Sau 1 năm, người lao động di trú được bao nhiêu ngày 🏖 nghỉ phép năm?',
      th: 'แรงงานข้ามชาติหลังทำงาน 1 ปี มีวันหยุดพักร้อน 🏖 กี่วัน?'
    },
    image_emoji: '🏖',
    options: [
      { zh: '7 天', en: '7 days', id: '7 hari', vi: '7 ngày', th: '7 วัน' },
      { zh: '3 天', en: '3 days', id: '3 hari', vi: '3 ngày', th: '3 วัน' },
      { zh: '14 天', en: '14 days', id: '14 hari', vi: '14 ngày', th: '14 วัน' },
      { zh: '無特休', en: 'No annual leave', id: 'Tidak ada cuti', vi: 'Không có nghỉ phép', th: 'ไม่มีวันหยุดพักร้อน' }
    ],
    answer: 0,
    explain: {
      zh: '🏖 工作滿1年可享7天特別休假，滿2年10天，滿3年14天（依勞基法第38條）。',
      en: 'After 1 year: 7 days; after 2 years: 10 days; after 3 years: 14 days (Labor Standards Act Article 38).',
      id: 'Setelah 1 tahun: 7 hari; setelah 2 tahun: 10 hari; setelah 3 tahun: 14 hari (Pasal 38 UU Ketenagakerjaan).',
      vi: 'Sau 1 năm: 7 ngày; 2 năm: 10 ngày; 3 năm: 14 ngày (Điều 38 Luật Tiêu chuẩn Lao động).',
      th: 'หลัง 1 ปี: 7 วัน; 2 ปี: 10 วัน; 3 ปี: 14 วัน (มาตรา 38 กฎหมายมาตรฐานแรงงาน)'
    }
  },
  {
    id: 'A08', type: 'A', landmark_id: 'n2',
    q: {
      zh: '🏥 「勞健保」包含哪兩種保險？',
      en: 'What two insurances are included in 🏥 Labor & Health Insurance?',
      id: 'Dua asuransi apa yang termasuk dalam 🏥 Asuransi Tenaga Kerja & Kesehatan?',
      vi: '🏥 Bảo hiểm lao động & sức khỏe bao gồm hai loại bảo hiểm nào?',
      th: '🏥 ประกันแรงงานและสุขภาพ รวมถึงประกันอะไรสองอย่าง?'
    },
    image_emoji: '🏥',
    options: [
      { zh: '勞工保險 + 全民健保', en: 'Labor Insurance + NHI', id: 'Asuransi Tenaga Kerja + BPJS Kesehatan', vi: 'Bảo hiểm lao động + BHYT', th: 'ประกันแรงงาน + ประกันสุขภาพแห่งชาติ' },
      { zh: '火災險 + 汽車險', en: 'Fire + Car Insurance', id: 'Asuransi Kebakaran + Kendaraan', vi: 'Bảo hiểm hỏa hoạn + xe hơi', th: 'ประกันไฟไหม้ + ประกันรถยนต์' },
      { zh: '退休金 + 失業保險', en: 'Pension + Unemployment', id: 'Dana Pensiun + Pengangguran', vi: 'Lương hưu + thất nghiệp', th: 'บำนาญ + ประกันการว่างงาน' },
      { zh: '旅遊險 + 責任險', en: 'Travel + Liability Insurance', id: 'Asuransi Perjalanan + Tanggung Jawab', vi: 'Bảo hiểm du lịch + trách nhiệm', th: 'ประกันการเดินทาง + ประกันความรับผิด' }
    ],
    answer: 0,
    explain: {
      zh: '🏥 「勞健保」=勞工保險（職災、失業）+ 全民健康保險（門診住院）。雇主依法必須替勞工投保。',
      en: 'Labor & NHI Insurance = Labor Insurance (work injuries, unemployment) + National Health Insurance (clinic/hospital). Employers must enroll workers by law.',
      id: 'Asuransi Tenaga Kerja (kecelakaan kerja, pengangguran) + Asuransi Kesehatan Nasional. Majikan wajib mendaftarkan pekerja.',
      vi: 'Bảo hiểm lao động (tai nạn, thất nghiệp) + BHYT (phòng khám/bệnh viện). Chủ lao động phải đăng ký cho người lao động.',
      th: 'ประกันแรงงาน (อุบัติเหตุ งาน, ว่างงาน) + ประกันสุขภาพแห่งชาติ (คลินิก/โรงพยาบาล) นายจ้างต้องลงทะเบียนให้ลูกจ้าง'
    }
  },

  /* ══════════════════════════════════════════
     類型 B — 緊急排序（Emergency Sort）
     B01~B02 醫療緊急；B03~B04 勞工情境
  ══════════════════════════════════════════ */
  {
    id: 'B01', type: 'B', landmark_id: 'l1',
    q: {
      zh: '請按緊急程度由高到低排列這些症狀',
      en: 'Sort these symptoms by urgency (most urgent first)',
      id: 'Urutkan gejala-gejala ini dari yang paling darurat',
      vi: 'Sắp xếp các triệu chứng theo mức độ khẩn cấp (từ cao đến thấp)',
      th: 'เรียงลำดับอาการตามความเร่งด่วน (มากไปน้อย)'
    },
    items: [
      { id: 'b1a', emoji: '😵', label: { zh: '頭暈', en: 'Dizziness', id: 'Pusing', vi: 'Chóng mặt', th: 'วิงเวียน' }, urgency: 2 },
      { id: 'b1b', emoji: '😮‍💨', label: { zh: '呼吸困難', en: 'Breathing difficulty', id: 'Sesak napas', vi: 'Khó thở', th: 'หายใจลำบาก' }, urgency: 1 },
      { id: 'b1c', emoji: '🤢', label: { zh: '噁心感', en: 'Nausea', id: 'Mual', vi: 'Buồn nôn', th: 'คลื่นไส้' }, urgency: 3 }
    ],
    answer: ['b1b', 'b1a', 'b1c'],
    explain: {
      zh: '呼吸困難最危急需立即就醫；頭暈其次需盡快就醫；噁心感較輕可先觀察。',
      en: 'Breathing difficulty is most urgent (call 119); dizziness is second; nausea is least urgent.',
      id: 'Sesak napas paling darurat (hubungi 119); pusing kedua; mual paling ringan.',
      vi: 'Khó thở khẩn cấp nhất (gọi 119); chóng mặt thứ hai; buồn nôn ít khẩn cấp nhất.',
      th: 'หายใจลำบากเร่งด่วนที่สุด (โทร 119); วิงเวียนรองลงมา; คลื่นไส้ไม่เร่งด่วน'
    }
  },
  {
    id: 'B02', type: 'B', landmark_id: 'm5',
    q: {
      zh: '請按緊急程度由高到低排列需要就醫的情況',
      en: 'Sort these medical situations by urgency (most urgent first)',
      id: 'Urutkan situasi medis ini dari yang paling mendesak',
      vi: 'Sắp xếp các tình huống y tế theo mức độ khẩn cấp',
      th: 'เรียงลำดับสถานการณ์ทางการแพทย์ตามความเร่งด่วน'
    },
    items: [
      { id: 'b2a', emoji: '🩸', label: { zh: '大量出血', en: 'Heavy bleeding', id: 'Pendarahan besar', vi: 'Chảy máu nhiều', th: 'เลือดออกมาก' }, urgency: 1 },
      { id: 'b2b', emoji: '🌡️', label: { zh: '輕微發燒(37.5°C)', en: 'Mild fever (37.5°C)', id: 'Demam ringan (37,5°C)', vi: 'Sốt nhẹ (37,5°C)', th: 'ไข้เล็กน้อย (37.5°C)' }, urgency: 3 },
      { id: 'b2c', emoji: '⚡', label: { zh: '觸電昏迷', en: 'Electric shock / unconscious', id: 'Tersengat listrik / pingsan', vi: 'Điện giật / bất tỉnh', th: 'ไฟช็อต / หมดสติ' }, urgency: 2 }
    ],
    answer: ['b2a', 'b2c', 'b2b'],
    explain: {
      zh: '大量出血需立即壓迫止血並撥 119；觸電昏迷需緊急送醫；輕微發燒可先觀察。',
      en: 'Heavy bleeding: press and call 119 immediately; electric shock/unconscious: emergency; mild fever: observe first.',
      id: 'Pendarahan besar: tekan dan hubungi 119; tersengat listrik: darurat; demam ringan: pantau dulu.',
      vi: 'Chảy máu nhiều: cầm máu và gọi 119; điện giật bất tỉnh: khẩn cấp; sốt nhẹ: theo dõi trước.',
      th: 'เลือดออกมาก: กดและโทร 119; ไฟช็อต/หมดสติ: ฉุกเฉิน; ไข้เล็กน้อย: สังเกตอาการก่อน'
    }
  },
  {
    id: 'B03', type: 'B', landmark_id: 'n3',
    q: {
      zh: '發現雇主違法，請依處理緊迫性由高到低排列步驟',
      en: 'Sort these steps by urgency when your employer violates labor law',
      id: 'Urutkan langkah-langkah ini dari yang paling mendesak saat majikan melanggar hukum',
      vi: 'Sắp xếp các bước xử lý vi phạm lao động theo mức độ khẩn cấp',
      th: 'เรียงลำดับขั้นตอนการจัดการนายจ้างละเมิดกฎหมายแรงงาน'
    },
    items: [
      { id: 'b3a', emoji: '📸', label: { zh: '蒐集薪資單、工作記錄等證據', en: 'Collect payslips & records', id: 'Kumpulkan slip gaji & catatan', vi: 'Thu thập phiếu lương & hồ sơ', th: 'รวบรวมสลิปเงินเดือนและหลักฐาน' }, urgency: 2 },
      { id: 'b3b', emoji: '📞', label: { zh: '撥打 1955 申訴專線', en: 'Call 1955 hotline', id: 'Hubungi 1955', vi: 'Gọi đường dây 1955', th: 'โทร 1955' }, urgency: 3 },
      { id: 'b3c', emoji: '🛑', label: { zh: '若遭受人身威脅，立即撥打 110', en: 'If physically threatened, call 110', id: 'Jika diancam fisik, hubungi 110', vi: 'Nếu bị đe dọa thân thể, gọi 110', th: 'หากถูกคุกคาม โทร 110 ทันที' }, urgency: 1 }
    ],
    answer: ['b3c', 'b3a', 'b3b'],
    explain: {
      zh: '人身安全最優先（110）；接著蒐集證據；再申訴 1955。安全永遠第一。',
      en: 'Safety first (110); then collect evidence; then report to 1955. Safety always comes first.',
      id: 'Keselamatan dulu (110); lalu kumpulkan bukti; lalu laporkan ke 1955.',
      vi: 'An toàn trước (110); rồi thu thập bằng chứng; rồi tố cáo lên 1955.',
      th: 'ความปลอดภัยก่อน (110); จากนั้นรวบรวมหลักฐาน; แล้วรายงาน 1955'
    }
  },
  {
    id: 'B04', type: 'B', landmark_id: 'n4',
    q: {
      zh: '換工作（轉換雇主）流程，請依正確順序排列',
      en: 'Sort the steps for changing employers in the correct order',
      id: 'Urutkan langkah-langkah pergantian majikan dengan urutan yang benar',
      vi: 'Sắp xếp các bước đổi chủ lao động theo đúng thứ tự',
      th: 'เรียงลำดับขั้นตอนการเปลี่ยนนายจ้างตามลำดับที่ถูกต้อง'
    },
    items: [
      { id: 'b4a', emoji: '📋', label: { zh: '向勞動部申請轉換雇主', en: 'Apply to MOL for employer change', id: 'Ajukan ke Kemenaker untuk ganti majikan', vi: 'Nộp đơn lên Bộ Lao động đổi chủ', th: 'ยื่นคำร้องต่อกระทรวงแรงงาน' }, urgency: 2 },
      { id: 'b4b', emoji: '🤝', label: { zh: '確認新雇主條件', en: 'Confirm new employer terms', id: 'Konfirmasi kondisi majikan baru', vi: 'Xác nhận điều kiện chủ mới', th: 'ยืนยันเงื่อนไขนายจ้างใหม่' }, urgency: 3 },
      { id: 'b4c', emoji: '📞', label: { zh: '聯繫仲介或申訴 1955', en: 'Contact broker or call 1955', id: 'Hubungi agen atau 1955', vi: 'Liên hệ môi giới hoặc gọi 1955', th: 'ติดต่อนายหน้าหรือโทร 1955' }, urgency: 1 }
    ],
    answer: ['b4c', 'b4a', 'b4b'],
    explain: {
      zh: '先聯繫仲介或 1955 了解資格；再向勞動部申請；最後確認新雇主條件。',
      en: 'First contact broker or 1955 to check eligibility; apply to MOL; then confirm new employer terms.',
      id: 'Pertama hubungi agen atau 1955; ajukan ke Kemenaker; lalu konfirmasi majikan baru.',
      vi: 'Đầu tiên liên hệ môi giới hoặc 1955; nộp đơn lên Bộ; rồi xác nhận điều kiện chủ mới.',
      th: 'ก่อนติดต่อนายหน้าหรือ 1955; ยื่นต่อกระทรวง; จากนั้นยืนยันเงื่อนไขนายจ้างใหม่'
    }
  },

  /* ══════════════════════════════════════════
     類型 C — 情境填空（Situation Fill-in）
     C01~C08 勞工權益
  ══════════════════════════════════════════ */
  {
    id: 'C01', type: 'C', landmark_id: 'n1',
    sentence: {
      zh: '老闆扣留我的 ___ 是違法的行為',
      en: 'The employer holding my ___ is illegal',
      id: 'Majikan menahan ___ saya adalah tindakan ilegal',
      vi: 'Chủ lao động giữ ___ của tôi là bất hợp pháp',
      th: 'นายจ้างยึด ___ ของฉันเป็นการกระทำที่ผิดกฎหมาย'
    },
    options: [
      { zh: '護照', en: 'Passport', id: 'Paspor', vi: 'Hộ chiếu', th: 'หนังสือเดินทาง' },
      { zh: '薪資單', en: 'Payslip', id: 'Slip gaji', vi: 'Phiếu lương', th: 'สลิปเงินเดือน' },
      { zh: '工作服', en: 'Work uniform', id: 'Seragam kerja', vi: 'Đồng phục làm việc', th: 'ชุดทำงาน' }
    ],
    answer: 0,
    explain: {
      zh: '依法雇主不得扣押勞工護照、居留證等身分證件，違者可向移民署或勞動局申訴。',
      en: 'By law, employers cannot hold workers\' passports or ID documents. Report to the NIA or Labor Bureau.',
      id: 'Menurut hukum, majikan tidak boleh menahan paspor atau dokumen identitas. Laporkan ke NIA atau Dinas Tenaga Kerja.',
      vi: 'Theo luật, chủ lao động không được giữ hộ chiếu hay giấy tờ tùy thân. Tố cáo lên NIA hoặc Sở Lao động.',
      th: 'ตามกฎหมาย นายจ้างไม่สามารถยึดหนังสือเดินทางหรือเอกสารประจำตัว รายงานต่อ NIA หรือสำนักงานแรงงาน'
    }
  },
  {
    id: 'C02', type: 'C', landmark_id: 'n2',
    sentence: {
      zh: '雇主不得以任何理由剋扣我正常工作的 ___',
      en: 'Employers cannot deduct my ___ for normal working hours without reason',
      id: 'Majikan tidak boleh memotong ___ jam kerja normal saya',
      vi: 'Chủ lao động không được khấu trừ ___ giờ làm việc bình thường của tôi',
      th: 'นายจ้างไม่สามารถหักล้าง ___ สำหรับชั่วโมงทำงานปกติ'
    },
    options: [
      { zh: '薪資', en: 'Wages', id: 'Upah', vi: 'Lương', th: 'ค่าแรง' },
      { zh: '年假', en: 'Annual leave', id: 'Cuti tahunan', vi: 'Phép năm', th: 'วันหยุดพักร้อน' },
      { zh: '保險', en: 'Insurance', id: 'Asuransi', vi: 'Bảo hiểm', th: 'ประกัน' }
    ],
    answer: 0,
    explain: {
      zh: '雇主不得無故剋扣薪資，違反勞基法第22條，最高可罰 45 萬元。',
      en: 'Employers cannot withhold wages without cause. Violation of LSA Article 22, max fine NT$450,000.',
      id: 'Majikan tidak boleh menahan upah tanpa sebab. Melanggar Pasal 22, denda maksimum NT$450.000.',
      vi: 'Chủ lao động không được giữ lương không lý do. Vi phạm Điều 22, phạt tối đa NT$450,000.',
      th: 'นายจ้างไม่สามารถหักค่าแรงโดยไม่มีเหตุ ละเมิดมาตรา 22 ปรับสูงสุด NT$450,000'
    }
  },
  {
    id: 'C03', type: 'C', landmark_id: 'l1',
    sentence: {
      zh: '工作每天不得超過 ___ 小時，否則須支付加班費',
      en: 'The daily work limit is ___ hours; overtime pay is required beyond that',
      id: 'Batas kerja harian adalah ___ jam; upah lembur diperlukan di atas itu',
      vi: 'Giới hạn làm việc mỗi ngày là ___ giờ; phải trả lương tăng ca vượt quá',
      th: 'ขีดจำกัดการทำงานรายวันคือ ___ ชั่วโมง ต้องจ่ายค่าล่วงเวลาเกินกว่านั้น'
    },
    options: [
      { zh: '8 小時', en: '8 hours', id: '8 jam', vi: '8 giờ', th: '8 ชั่วโมง' },
      { zh: '12 小時', en: '12 hours', id: '12 jam', vi: '12 giờ', th: '12 ชั่วโมง' },
      { zh: '10 小時', en: '10 hours', id: '10 jam', vi: '10 giờ', th: '10 ชั่วโมง' }
    ],
    answer: 0,
    explain: {
      zh: '依勞基法，正常工時每日上限 8 小時、每週 40 小時；超過需支付加班費。',
      en: 'Normal working hours are max 8/day and 40/week; overtime pay required for any excess.',
      id: 'Jam kerja normal maks 8/hari dan 40/minggu; upah lembur wajib untuk kelebihan.',
      vi: 'Giờ làm việc bình thường tối đa 8h/ngày và 40h/tuần; phải trả lương tăng ca khi vượt.',
      th: 'ชั่วโมงทำงานปกติสูงสุด 8 ชั่วโมง/วัน และ 40 ชั่วโมง/สัปดาห์ ต้องจ่ายค่าล่วงเวลาหากเกิน'
    }
  },
  {
    id: 'C04', type: 'C', landmark_id: 'l2',
    sentence: {
      zh: '我遭受職場暴力或性騷擾，應向 ___ 申訴',
      en: 'If I face workplace violence or sexual harassment, I should report to ___',
      id: 'Jika saya menghadapi kekerasan atau pelecehan seksual di tempat kerja, saya harus melapor ke ___',
      vi: 'Nếu tôi gặp bạo lực hoặc quấy rối tình dục tại nơi làm việc, tôi cần báo lên ___',
      th: 'หากฉันเผชิญกับความรุนแรงในที่ทำงานหรือการล่วงละเมิดทางเพศ ควรรายงานต่อ ___'
    },
    options: [
      { zh: '勞工局或 1955', en: 'Labor Bureau or 1955', id: 'Dinas Tenaga Kerja atau 1955', vi: 'Sở Lao động hoặc 1955', th: 'สำนักงานแรงงานหรือ 1955' },
      { zh: '雇主家屬', en: "Employer's family", id: 'Keluarga majikan', vi: 'Gia đình chủ lao động', th: 'ครอบครัวนายจ้าง' },
      { zh: '里長辦公室', en: 'Village chief office', id: 'Kantor kepala desa', vi: 'Văn phòng trưởng thôn', th: 'สำนักงานหัวหน้าหมู่บ้าน' }
    ],
    answer: 0,
    explain: {
      zh: '遭受職場暴力或性騷擾，可向勞工局申訴或撥打 1955，若有人身安全疑慮請撥 110。',
      en: 'Report workplace violence or harassment to the Labor Bureau or call 1955. If safety is at risk, call 110.',
      id: 'Laporkan kekerasan atau pelecehan ke Dinas Tenaga Kerja atau hubungi 1955. Jika keselamatan terancam, hubungi 110.',
      vi: 'Báo cáo bạo lực hoặc quấy rối lên Sở Lao động hoặc gọi 1955. Nếu nguy hiểm, gọi 110.',
      th: 'รายงานความรุนแรงหรือการล่วงละเมิดต่อสำนักงานแรงงานหรือโทร 1955 หากอยู่ในอันตรายโทร 110'
    }
  },
  {
    id: 'C05', type: 'C', landmark_id: 'n3',
    sentence: {
      zh: '雇主強制要求我住在工廠不能外出，這是侵犯我的 ___',
      en: 'The employer forcing me to live in the factory and not go out violates my ___',
      id: 'Majikan yang memaksa saya tinggal di pabrik dan tidak boleh keluar melanggar ___ saya',
      vi: 'Chủ lao động bắt tôi sống trong nhà máy không được ra ngoài là vi phạm ___ của tôi',
      th: 'นายจ้างบังคับให้ฉันอยู่ในโรงงานออกไปไม่ได้ ละเมิด ___ ของฉัน'
    },
    options: [
      { zh: '人身自由', en: 'Personal freedom', id: 'Kebebasan pribadi', vi: 'Tự do cá nhân', th: 'เสรีภาพส่วนตัว' },
      { zh: '加班費', en: 'Overtime pay', id: 'Upah lembur', vi: 'Lương tăng ca', th: 'ค่าล่วงเวลา' },
      { zh: '休假天數', en: 'Leave days', id: 'Hari cuti', vi: 'Ngày nghỉ phép', th: 'วันหยุด' }
    ],
    answer: 0,
    explain: {
      zh: '強制限制人身自由屬刑事犯罪，可撥打 110 報警或聯繫 1955 尋求緊急協助。',
      en: 'Restricting personal freedom is a criminal offense. Call 110 or contact 1955 for emergency help.',
      id: 'Membatasi kebebasan pribadi adalah tindak pidana. Hubungi 110 atau 1955 untuk bantuan darurat.',
      vi: 'Hạn chế tự do cá nhân là tội hình sự. Gọi 110 hoặc 1955 để được hỗ trợ khẩn cấp.',
      th: 'การจำกัดเสรีภาพส่วนตัวเป็นความผิดทางอาญา โทร 110 หรือ 1955 เพื่อขอความช่วยเหลือฉุกเฉิน'
    }
  },
  {
    id: 'C06', type: 'C', landmark_id: 'n4',
    sentence: {
      zh: '合約期滿後，我 ___ 可以回自己的國家',
      en: 'After my contract ends, I ___ return to my home country',
      id: 'Setelah kontrak selesai, saya ___ bisa pulang ke negara saya',
      vi: 'Sau khi hợp đồng hết hạn, tôi ___ có thể về nước',
      th: 'หลังสัญญาหมดอายุ ฉัน ___ สามารถกลับประเทศได้'
    },
    options: [
      { zh: '有權利', en: 'have the right to', id: 'berhak', vi: 'có quyền', th: 'มีสิทธิ์' },
      { zh: '必須自費才', en: 'only can if paying myself', id: 'hanya bisa jika membayar sendiri', vi: 'chỉ được nếu tự trả', th: 'ได้เฉพาะถ้าจ่ายเอง' },
      { zh: '不能', en: 'cannot', id: 'tidak bisa', vi: 'không thể', th: 'ไม่สามารถ' }
    ],
    answer: 0,
    explain: {
      zh: '合約期滿後，勞工有權返國，雇主應負擔機票費用。若雇主拒絕，可向 1955 申訴。',
      en: 'Workers have the right to return home after contract ends; employers must pay airfare. Call 1955 if refused.',
      id: 'Pekerja berhak pulang setelah kontrak selesai; majikan harus membayar tiket pesawat. Hubungi 1955 jika ditolak.',
      vi: 'Người lao động có quyền về nước khi hết hợp đồng; chủ lao động phải trả vé máy bay. Gọi 1955 nếu bị từ chối.',
      th: 'ลูกจ้างมีสิทธิ์กลับบ้านหลังสัญญาหมด นายจ้างต้องออกค่าตั๋วเครื่องบิน โทร 1955 หากถูกปฏิเสธ'
    }
  },
  {
    id: 'C07', type: 'C', landmark_id: 'n5',
    sentence: {
      zh: '雇主沒有依法幫我投 ___，我可以向勞動局申訴',
      en: 'If my employer did not enroll me in ___ as required by law, I can report to the Labor Bureau',
      id: 'Jika majikan tidak mendaftarkan ___ sesuai hukum, saya bisa melapor ke Dinas Tenaga Kerja',
      vi: 'Nếu chủ lao động không tham gia ___ theo luật định, tôi có thể tố cáo lên Sở Lao động',
      th: 'หากนายจ้างไม่ได้สมัคร ___ ตามกฎหมาย ฉันสามารถรายงานต่อสำนักงานแรงงาน'
    },
    options: [
      { zh: '勞健保', en: 'Labor & Health Insurance', id: 'Asuransi Tenaga Kerja & Kesehatan', vi: 'Bảo hiểm lao động & sức khỏe', th: 'ประกันแรงงานและสุขภาพ' },
      { zh: '人壽保險', en: 'Life insurance', id: 'Asuransi jiwa', vi: 'Bảo hiểm nhân thọ', th: 'ประกันชีวิต' },
      { zh: '車險', en: 'Car insurance', id: 'Asuransi kendaraan', vi: 'Bảo hiểm xe', th: 'ประกันรถยนต์' }
    ],
    answer: 0,
    explain: {
      zh: '依法雇主必須為勞工投保勞工保險與全民健保，未投保最高可罰 45 萬元。',
      en: 'By law employers must enroll workers in Labor and NHI insurance. Max fine NT$450,000 if not.',
      id: 'Menurut hukum, majikan wajib mendaftarkan asuransi tenaga kerja dan kesehatan. Denda maks NT$450.000.',
      vi: 'Theo luật, chủ lao động phải đăng ký bảo hiểm lao động và BHYT. Phạt tối đa NT$450,000.',
      th: 'ตามกฎหมาย นายจ้างต้องลงทะเบียนประกันแรงงานและสุขภาพให้ลูกจ้าง ปรับสูงสุด NT$450,000'
    }
  },
  {
    id: 'C08', type: 'C', landmark_id: 'l3',
    sentence: {
      zh: '如果需要免費法律諮詢，可以聯繫 ___',
      en: 'For free legal consultation, I can contact ___',
      id: 'Untuk konsultasi hukum gratis, saya bisa menghubungi ___',
      vi: 'Để được tư vấn pháp lý miễn phí, tôi có thể liên hệ ___',
      th: 'หากต้องการคำปรึกษาทางกฎหมายฟรี ฉันสามารถติดต่อ ___'
    },
    options: [
      { zh: '法律扶助基金會', en: 'Legal Aid Foundation', id: 'Yayasan Bantuan Hukum', vi: 'Quỹ Hỗ trợ Pháp lý', th: 'มูลนิธิช่วยเหลือทางกฎหมาย' },
      { zh: '警察局', en: 'Police station', id: 'Kantor polisi', vi: 'Đồn công an', th: 'สถานีตำรวจ' },
      { zh: '超商便利店', en: 'Convenience store', id: 'Minimarket', vi: 'Cửa hàng tiện lợi', th: 'ร้านสะดวกซื้อ' }
    ],
    answer: 0,
    explain: {
      zh: '法律扶助基金會提供免費法律諮詢，全台各地都有分會，可電話預約或直接前往。',
      en: 'Legal Aid Foundation provides free legal consultation. Branches nationwide — call for appointment or walk in.',
      id: 'Yayasan Bantuan Hukum menyediakan konsultasi hukum gratis. Cabang di seluruh Taiwan — telepon atau langsung datang.',
      vi: 'Quỹ Hỗ trợ Pháp lý cung cấp tư vấn pháp lý miễn phí. Chi nhánh trên toàn quốc — gọi điện hoặc đến trực tiếp.',
      th: 'มูลนิธิช่วยเหลือทางกฎหมายให้คำปรึกษาฟรี มีสาขาทั่วไต้หวัน โทรนัดหมายหรือเดินเข้าไปได้'
    }
  }
];
