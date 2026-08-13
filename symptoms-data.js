/**
 * MigrantCare Kaohsiung — 問診卡資料
 * 包含：BODY_PARTS（7個身體部位）、SYMPTOMS（10個症狀）
 * 支援語言：zh、en、id、vi、th
 */

const BODY_PARTS = [
  {
    id: 'head',
    emoji: '🤕',
    names: { zh: '頭部', en: 'Head', id: 'Kepala', vi: 'Đầu', th: 'ศีรษะ' }
  },
  {
    id: 'chest',
    emoji: '🫀',
    names: { zh: '胸部', en: 'Chest', id: 'Dada', vi: 'Ngực', th: 'หน้าอก' }
  },
  {
    id: 'abdomen',
    emoji: '🫃',
    names: { zh: '腹部', en: 'Abdomen', id: 'Perut', vi: 'Bụng', th: 'ท้อง' }
  },
  {
    id: 'back',
    emoji: '🔙',
    names: { zh: '背部', en: 'Back', id: 'Punggung', vi: 'Lưng', th: 'หลัง' }
  },
  {
    id: 'arm',
    emoji: '💪',
    names: { zh: '手臂', en: 'Arm', id: 'Lengan', vi: 'Cánh tay', th: 'แขน' }
  },
  {
    id: 'leg',
    emoji: '🦵',
    names: { zh: '腿部', en: 'Leg', id: 'Kaki', vi: 'Chân', th: 'ขา' }
  },
  {
    id: 'whole',
    emoji: '🧍',
    names: { zh: '全身', en: 'Whole Body', id: 'Seluruh Tubuh', vi: 'Toàn thân', th: 'ทั่วร่างกาย' }
  }
];

const SYMPTOMS = [
  // ── 通用症狀 ──
  {
    id: 'fever',
    emoji: '🌡️',
    urgency: 'high',
    group: 'general',
    names: { zh: '發燒', en: 'Fever', id: 'Demam', vi: 'Sốt', th: 'มีไข้' },
    desc: {
      zh: '體溫升高，身體發熱',
      en: 'High body temperature, feeling hot',
      id: 'Suhu tubuh tinggi, badan terasa panas',
      vi: 'Nhiệt độ cơ thể cao, người nóng',
      th: 'อุณหภูมิร่างกายสูง รู้สึกร้อน'
    },
    keywords_zh: ['發燒', '體溫升高', '發熱']
  },
  {
    id: 'nausea',
    emoji: '🤢',
    urgency: 'normal',
    group: 'general',
    names: { zh: '噁心', en: 'Nausea', id: 'Mual', vi: 'Buồn nôn', th: 'คลื่นไส้' },
    desc: {
      zh: '想嘔吐、胃部不適',
      en: 'Feeling like vomiting, stomach upset',
      id: 'Ingin muntah, perut tidak nyaman',
      vi: 'Muốn nôn, khó chịu bụng',
      th: 'รู้สึกอยากอาเจียน ท้องไม่สบาย'
    },
    keywords_zh: ['噁心', '想吐', '胃不舒服']
  },
  {
    id: 'dizzy',
    emoji: '😵',
    urgency: 'normal',
    group: 'general',
    names: { zh: '頭暈', en: 'Dizziness', id: 'Pusing', vi: 'Chóng mặt', th: 'เวียนหัว' },
    desc: {
      zh: '頭昏眼花，身體不穩',
      en: 'Feeling dizzy, unstable',
      id: 'Kepala berputar, tidak stabil',
      vi: 'Đầu quay, mất thăng bằng',
      th: 'รู้สึกหมุน ทรงตัวไม่ดี'
    },
    keywords_zh: ['頭暈', '頭昏', '暈眩']
  },
  {
    id: 'sweat',
    emoji: '💧',
    urgency: 'normal',
    group: 'general',
    names: { zh: '流汗', en: 'Sweating', id: 'Berkeringat', vi: 'Đổ mồ hôi', th: 'เหงื่อออก' },
    desc: {
      zh: '異常大量出汗',
      en: 'Abnormal excessive sweating',
      id: 'Keringat berlebihan tidak normal',
      vi: 'Đổ mồ hôi nhiều bất thường',
      th: 'เหงื่อออกมากผิดปกติ'
    },
    keywords_zh: ['流汗', '盜汗', '冒冷汗']
  },
  {
    id: 'breath',
    emoji: '😰',
    urgency: 'high',
    group: 'general',
    names: { zh: '呼吸困難', en: 'Difficulty Breathing', id: 'Sesak Napas', vi: 'Khó thở', th: 'หายใจลำบาก' },
    desc: {
      zh: '呼吸不順暢，感覺喘不過氣',
      en: 'Difficulty breathing, shortness of breath',
      id: 'Sulit bernapas, sesak napas',
      vi: 'Khó thở, hụt hơi',
      th: 'หายใจไม่สะดวก หอบเหนื่อย'
    },
    keywords_zh: ['呼吸困難', '喘不過氣', '胸悶']
  },
  // ── 痛感類型 ──
  {
    id: 'sharp',
    emoji: '⚡',
    urgency: 'high',
    group: 'pain',
    names: { zh: '刺痛', en: 'Sharp Pain', id: 'Nyeri Tajam', vi: 'Đau nhói', th: 'ปวดแสบ' },
    desc: {
      zh: '尖銳、刺刀般的疼痛',
      en: 'Sharp, stabbing pain',
      id: 'Nyeri tajam seperti ditusuk',
      vi: 'Đau nhói như dao đâm',
      th: 'ปวดเฉียบพลันเหมือนถูกแทง'
    },
    keywords_zh: ['刺痛', '尖銳疼痛', '如刀割']
  },
  {
    id: 'cramping',
    emoji: '🔄',
    urgency: 'normal',
    group: 'pain',
    names: { zh: '絞痛', en: 'Cramping', id: 'Kram', vi: 'Đau quặn', th: 'ปวดเกร็ง' },
    desc: {
      zh: '像被擰緊的陣發性疼痛',
      en: 'Intermittent twisting pain',
      id: 'Nyeri seperti diperas, datang berlangsung',
      vi: 'Đau thắt từng cơn',
      th: 'ปวดบีบเป็นระยะ'
    },
    keywords_zh: ['絞痛', '痙攣', '陣痛']
  },
  {
    id: 'throbbing',
    emoji: '💗',
    urgency: 'normal',
    group: 'pain',
    names: { zh: '抽痛', en: 'Throbbing Pain', id: 'Nyeri Berdenyut', vi: 'Đau nhức', th: 'ปวดตุบๆ' },
    desc: {
      zh: '隨心跳節奏一陣陣抽痛',
      en: 'Pain that pulses with heartbeat',
      id: 'Nyeri berdenyut mengikuti detak jantung',
      vi: 'Đau nhức theo nhịp tim',
      th: 'ปวดเต้นตามจังหวะหัวใจ'
    },
    keywords_zh: ['抽痛', '搏動性疼痛', '跳痛']
  },
  {
    id: 'dull',
    emoji: '😶',
    urgency: 'normal',
    group: 'pain',
    names: { zh: '悶痛', en: 'Dull Ache', id: 'Nyeri Tumpul', vi: 'Đau âm ỉ', th: 'ปวดตื้อ' },
    desc: {
      zh: '持續的鈍痛、壓迫感',
      en: 'Persistent dull, heavy pressure pain',
      id: 'Nyeri tumpul terus-menerus, terasa tertekan',
      vi: 'Đau âm ỉ liên tục, cảm giác bị ép',
      th: 'ปวดตื้อต่อเนื่อง รู้สึกถูกกด'
    },
    keywords_zh: ['悶痛', '鈍痛', '壓迫感']
  },
  {
    id: 'burning',
    emoji: '🔥',
    urgency: 'normal',
    group: 'pain',
    names: { zh: '灼熱', en: 'Burning Sensation', id: 'Rasa Panas Terbakar', vi: 'Cảm giác bỏng rát', th: 'รู้สึกแสบร้อน' },
    desc: {
      zh: '皮膚或內部有灼燒感',
      en: 'Burning sensation on skin or inside',
      id: 'Sensasi terbakar di kulit atau dalam tubuh',
      vi: 'Cảm giác bỏng rát ở da hoặc bên trong',
      th: 'รู้สึกแสบร้อนที่ผิวหนังหรือภายใน'
    },
    keywords_zh: ['灼熱', '灼燒感', '火燒感']
  }
];
