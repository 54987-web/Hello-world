# MigrantCare Kaohsiung — 開發計畫

## 專案名稱
**MigrantCare Kaohsiung** — 多語系圖像化求助、醫療問診地圖 × 地標遊戲化學習（PWA 手機 App）

---

## 頂層概覽

### 目標
為高雄市外籍移工與新住民建立一套多語系「圖像化求助 + 遊戲化學習 PWA 手機 App」，解決四大痛點：
1. 醫療現場語言障礙 → 圖像化問診卡 + 雙語出示卡
2. 勞資糾紛不知如何求助 → 情境式權益速查 + 答題熟悉度追蹤
3. 不知道去哪裡找資源 → 友善機構地圖 + 個人位置記錄
4. 學習動機不足 → GPS 地標觸發隨機小遊戲 + 成就排名機制

### PWA 手機 App 特性
- **安裝方式**：瀏覽器「加入主畫面」→ 像原生 App 一樣顯示在手機桌面
- **離線使用**：Service Worker 快取所有資源，無網路也可開啟
- **全螢幕**：`display: standalone`，隱藏瀏覽器 UI，沉浸式體驗
- **App 圖示**：自訂 App 名稱與圖示（出現在手機桌面）
- **不需上架**：無需 App Store / Google Play，分享連結即可安裝

### 支援語言（5 語）
| 代碼 | 語言 | 母語名稱 |
|------|------|---------|
| `zh` | 中文 | 中文（繁體） |
| `en` | 英文 | English |
| `id` | 印尼語 | Bahasa Indonesia |
| `vi` | 越南語 | Tiếng Việt |
| `th` | 泰語 | ภาษาไทย |

### 技術棧
- **前端**：純 HTML5 + CSS3 + Vanilla JavaScript（單檔案 SPA）
- **PWA**：Web App Manifest + Service Worker（離線快取）
- **地圖**：Leaflet.js + OpenStreetMap（免費，無需 API Key）
- **多語系**：JS 語系資料物件（5 語：zh / en / id / vi / th）
- **使用者資料**：localStorage（暱稱 + PIN + 答題紀錄 + 位置紀錄 + 遊戲成就）
- **GPS 背景偵測**：`setInterval` + Geolocation API（每 30 秒掃一次）
- **部署**：GitHub Pages（HTTPS，PWA 必須）

### 非目標
- 不做後端伺服器（純前端靜態）
- 不做即時翻譯 API
- 不做 OAuth / 社群登入
- 不上架 App Store / Google Play

---

## 檔案結構規劃

```
Hello-world/
├── index.html            ← 主應用（整合所有模組）
├── manifest.json         ← PWA 設定（App 名稱、圖示、顯示模式）
├── sw.js                 ← Service Worker（離線快取）
├── icons/
│   ├── icon-192.png      ← App 圖示 192×192（桌面顯示用）
│   └── icon-512.png      ← App 圖示 512×512（啟動畫面用）
├── lang-data.js          ← 5 語 UI 字串
├── symptoms-data.js      ← 身體部位 & 痛感資料
├── labor-data.js         ← 勞工情境問答資料
├── locations-data.js     ← 高雄友善機構 + 地標資料
├── game-data.js          ← 三種小遊戲題目資料
└── migrant-helper-plan.md
```

---

## Sub-Task 1 — 語系設定頁（Language Onboarding）

**Status:** [ ] pending

### Intent
使用者第一次開啟時，強制顯示語系選擇畫面（5 語含英文）。選擇後儲存至 `localStorage`，之後開啟自動套用，主頁可隨時切換。

### Expected Outcomes
- 頁面載入時若無語系設定，顯示全螢幕語系選擇 Splash 頁
- 5 個語言卡片：🇹🇼 中文、🇬🇧 English、🇮🇩 Bahasa Indonesia、🇻🇳 Tiếng Việt、🇹🇭 ภาษาไทย
- 每張卡片含：國旗 emoji、母語名稱、中文名稱
- 選擇後儲存 localStorage，進入登入/註冊頁
- 主頁右上角「🌐」按鈕可隨時切換語系

### Todo List
1. 建立 `index.html` 基本骨架（CSS 變數、RWD、字型）
2. 建立語系 Splash 頁 HTML 區塊（`#lang-screen`）
3. 實作 5 個語言卡片按鈕（國旗 + 母語名稱 + 中文名稱）
4. 建立 `lang-data.js`：5 語 UI 字串（頁面標題、Tab 名稱、按鈕文字、提示訊息）
5. 實作 `setLanguage(code)` + `applyLang()` 函式
6. 頁面載入時檢查 localStorage，有值則跳過 Splash
7. Header 加「🌐 切換語言」按鈕

### Relevant Context
- 語系代碼：`zh`、`en`、`id`、`vi`、`th`
- localStorage key：`migrant_lang`

---

## Sub-Task 2 — 使用者登入 / 註冊系統

**Status:** [ ] pending

### Intent
輕量本地帳號系統：使用者設定暱稱 + 4 位 PIN 碼，資料存於 localStorage。支援多人使用同一裝置（帳號切換）。登入後記錄個人位置、答題熟悉度、遊戲成就等個人化資料。

### Expected Outcomes
**註冊流程：**
- 輸入暱稱（2~20 字）
- 設定 4 位數字 PIN 碼
- 選擇身份（外籍移工 / 新住民 / 其他）
- 選擇頭像 emoji
- 完成後建立使用者檔案存入 localStorage

**登入流程：**
- 顯示已存在的使用者列表（暱稱 + 頭像 emoji）
- 點選使用者 → 輸入 PIN → 進入主頁
- 「新增使用者」按鈕進入註冊流程

**使用者資料結構（localStorage）：**
```javascript
{
  users: [
    {
      id: "uid_timestamp",
      nickname: "Siti",
      pin: "1234",
      avatar: "🧕",
      identity: "worker",       // worker / newcomer / other
      lang: "id",
      createdAt: "2025-01-01",
      lastLocation: { lat, lng, timestamp },
      laborProgress: {},        // { questionId: { read: true, readAt } }
      symptomHistory: [],       // [{ timestamp, bodyPart, symptoms }]
      gameEnabled: true,        // 遊戲功能開關（可隨時關閉）
      gameStats: {
        totalPlayed: 0,
        totalCorrect: 0,
        landmarksVisited: [],   // 已觸發過的地標 id
        achievements: []        // 已解鎖成就 id
      },
      familiarityScore: 0       // 綜合熟悉度分數（0~100）
    }
  ],
  currentUserId: "uid_timestamp"
}
```

### Todo List
1. 建立登入/註冊頁 HTML 區塊（`#auth-screen`）
2. 實作「使用者卡片列表」顯示（有帳號時）
3. 實作「新增使用者」註冊表單（暱稱 + PIN + 身份 + 頭像選擇）
4. 實作 `createUser()` 函式：建立並儲存使用者資料（含 `gameEnabled: true`）
5. 實作 `loginUser(id, pin)` 函式：驗證 PIN，設定 `currentUserId`
6. 實作 `getCurrentUser()` / `saveUserData()` 函式
7. 登入後跳至主頁，Header 顯示暱稱 + 頭像

### Relevant Context
- localStorage key：`migrant_users`、`migrant_current_user`
- 頭像 emoji 選項：🧕 👨 👩 🧑 👦 👧 🧓（7 個）
- `gameEnabled` 預設 `true`，可在主頁設定關閉

---

## Sub-Task 3 — 主頁面架構、底部導覽與熟悉量表

**Status:** [ ] pending

### Intent
建立主頁面整體版面，底部 Tab 導覽在三大功能間切換。主頁顯示個人「熟悉量表」（視覺化進度）、排名段位、遊戲開關。

### Expected Outcomes
**Header：**
- 左側：APP 名稱
- 右側：使用者頭像 + 暱稱 + 🌐 語言切換

**主頁（Home Tab）— 熟悉量表區塊：**
- **綜合熟悉度進度環**：大型圓形進度條，顯示 `familiarityScore`（0~100 分）
- **段位徽章**：依分數分 5 段
  - 0~19 分：🌱 新芽（Beginner）
  - 20~39 分：🌿 成長（Growing）
  - 40~59 分：🌳 穩健（Steady）
  - 60~79 分：⭐ 熟練（Skilled）
  - 80~100 分：🏆 達人（Expert）
- **分項統計**：
  - 勞工權益：已讀 N/24 題
  - 問診卡：使用 N 次
  - 地標遊戲：訪問 N 個地標，答對 N 題
- **最近位置記錄**：上次記錄時間 + 地區
- **遊戲功能開關**：🎮 Toggle 按鈕（開/關），關閉後 GPS 停止觸發遊戲

**底部 Tab Bar（4 Tab）：**
- 🏠 首頁、💊 問診卡、🏛 權益速查、🗺 資源地圖

**右下角緊急浮動按鈕：**
- 📞 119（救護）
- 📞 1955（勞工，24hr 多語）

### Todo List
1. 建立主頁面 HTML 區塊（`#main-screen`）含首頁子頁面（`#home-view`）
2. 實作 Header HTML + CSS（含使用者資訊）
3. 實作底部 4 Tab Bar HTML + CSS
4. 建立 `switchTab(tab)` 控制分頁顯示
5. 實作圓形進度環（純 CSS `conic-gradient`）顯示 `familiarityScore`
6. 實作 5 段段位徽章邏輯與顯示（`getRank(score)`）
7. 實作分項統計數字渲染（`renderFamiliarityChart()`）
8. 實作遊戲功能 Toggle 開關（更新 `user.gameEnabled` + 顯示狀態）
9. 右下角緊急浮動按鈕（固定定位，`tel:119`、`tel:1955`）
10. `lang-data.js` 補充首頁所有 5 語文字（含段位名稱）

### Relevant Context
- Tab IDs：`tab-home`、`tab-symptom`、`tab-labor`、`tab-map`
- `familiarityScore` 計算公式：`勞工進度(50%) + 問診使用(20%) + 地標遊戲(30%)`
- 段位函式：`getRank(score)` 回傳 `{ emoji, name:{zh,en,id,vi,th} }`

---

## Sub-Task 4 — 圖像化問診卡模組（含使用歷程記錄）

**Status:** [ ] pending

### Intent
讓語言不通的移工在就醫現場，透過「點選身體部位 → 選擇痛感類型」生成雙語對照卡，直接出示給醫師看。每次使用記錄至個人歷程並更新熟悉度分數。

### Expected Outcomes
**Step 1 — 選擇身體部位：**
- 7 個部位卡片（emoji + 多語名稱）：頭部、胸部、腹部、背部、手臂、腿部、全身

**Step 2 — 選擇症狀描述：**
- 通用症狀：🌡️ 發燒、🤢 噁心、😵 頭暈、💧 流汗、😰 呼吸困難
- 痛感類型：⚡ 刺痛、🔄 絞痛、💗 抽痛、😶 悶痛、🔥 灼熱感
- 可複選最多 3 項，緊急程度系統自動判斷

**Step 3 — 雙語出示卡：**
- 母語描述（大字）+ 中文對照（大字）
- 「重新選擇」+ 「複製文字」按鈕
- 生成後自動記錄 `symptomHistory` + 更新 `familiarityScore`

### Todo List
1. 建立 `symptoms-data.js`：身體部位、痛感、症狀資料（5 語）
2. 建立問診流程 HTML 區塊（`#symptom-view`）三步驟容器
3. 實作 Step 1：身體部位 7 張選擇卡片
4. 實作 Step 2：症狀/痛感多選卡片（可複選，最多 3 項）
5. 實作 Step 3：`generateCard()` 生成雙語出示卡 Modal
6. 生成後呼叫 `saveUserData()` 寫入 `symptomHistory` 並重算 `familiarityScore`
7. 加入「重新選擇」與「複製文字」按鈕

### Relevant Context
- 身體部位（7）：`head`、`chest`、`abdomen`、`back`、`arm`、`leg`、`whole`
- 痛感（5）：`sharp`、`cramping`、`throbbing`、`dull`、`burning`
- 資料結構：`{ id, emoji, names:{zh,en,id,vi,th}, desc:{zh,en,id,vi,th} }`

---

## Sub-Task 5 — 情境式勞工權益速查（含熟悉度追蹤）

**Status:** [ ] pending

### Intent
以「情境引導選擇題」方式讓移工快速找到問題、獲得權益說明。每題查閱後記錄熟悉度，主頁量表即時反映學習進度並更新段位分數。

### Expected Outcomes
**分類頁（Step 1）：**
- 6 類情境卡片：薪資💰、工時⏰、休假🏖、人身安全⛑、證件居留📄、其他❓

**問題列表（Step 2）：**
- 每類 4 題情境問題（5 語標題）
- 已讀題目顯示 ✅ 標記

**題目詳情（Step 3）：**
- 這樣合法嗎？✅ 合法 / ❌ 違法 / ⚠️ 需確認
- 法規簡單說明（5 語）
- 證據收集提醒（對話截圖 / 薪資單 / 出勤紀錄）
- 下一步行動按鈕（1955 / 法扶 / 勞工局）

**熟悉度追蹤：**
- 展開詳情 → 自動標記已讀 → 重算 `familiarityScore` → 主頁量表即時更新

### Todo List
1. 建立 `labor-data.js`：6 類 × 4 題（5 語），含合法判斷、證據提醒、行動建議
2. 建立權益速查 HTML 區塊（`#labor-view`）
3. 實作分類選擇格狀卡片（Step 1）
4. 實作情境問題列表（Step 2），已讀題目加 ✅ 標記
5. 展開詳情後呼叫 `markQuestionRead(questionId)` + 重算 `familiarityScore`
6. 加入「撥打 1955」（`tel:1955`）與「聯絡法扶」連結
7. 加入「上一頁」返回分類導覽

### Relevant Context
- 6 分類：`wage`、`hours`、`leave`、`safety`、`document`、`other`
- 1955：24hr，印尼/越南/泰語服務
- 法律扶助基金會：https://www.laf.org.tw
- 資料結構：`{ id, category, q:{zh,en,id,vi,th}, isLegal:'yes|no|check', evidence:[string], a:{zh,en,id,vi,th}, actions:[{label, type:'tel|url', value}] }`

---

## Sub-Task 6 — 友善資源地圖（含個人位置記錄）

**Status:** [ ] pending

### Intent
整合三類友善資源地圖標記，提供 GPS 定位導引，儲存使用者位置，並在地圖上標示「遊戲地標」位置（方便使用者主動前往觸發）。

### Expected Outcomes
**地圖：**
- 高雄市地圖（Leaflet + OpenStreetMap）
- 三種機構標記：🔵 醫療（通譯）、🟢 法扶、🟠 新住民服務中心
- 🎯 遊戲地標標記（同一地點，另外疊加）
- 點擊標記 Popup：名稱（5語）、地址、電話、服務語言、開放時間

**位置記錄：**
- 「📍 定位我的位置」按鈕 → GPS 座標 → 儲存至 `user.lastLocation`
- 顯示最近 3 個機構（依距離排序）
- 下次開啟地圖自動以上次位置為中心

**機構列表：**
- 底部可滑動列表，類型篩選（全部 / 醫療 / 法扶 / 服務中心）

### Todo List
1. 在 `index.html` 引入 Leaflet.js CDN
2. 建立 `locations-data.js`：
   - 醫療機構（有通譯）：5 間（高雄市立聯合醫院等）
   - 法律扶助基金會：高雄分會 3 處
   - 新住民家庭服務中心：5 處（苓雅、三民、鳳山等）
   - 每個機構同時標註 `isLandmark: true`（皆為遊戲地標）
3. 建立地圖 HTML 區塊（`#map-view`）含地圖容器 + 篩選列 + 機構列表
4. 實作 `initMap()`，中心優先用 `user.lastLocation`，否則高雄市中心
5. 實作三類機構標記與 Popup（5 語）
6. 地圖上以半透明圓圈標示遊戲觸發半徑（200m）
7. 實作「定位我的位置」：Geolocation → 儲存 `lastLocation` → 顯示最近 3 機構
8. 實作底部機構列表 + 篩選 + 點擊 `map.flyTo()`

### Relevant Context
- Leaflet CDN：`https://unpkg.com/leaflet@1.9.4/dist/leaflet.js`
- 高雄市中心座標：`[22.6273, 120.3014]`
- 機構類型：`medical`、`legal`、`newcomer`
- 遊戲觸發半徑：200 公尺（`calcDistance()` 用 Haversine 公式）

---

## Sub-Task 7 — GPS 地標觸發遊戲系統

**Status:** [ ] pending

### Intent
當使用者 GPS 定位靠近「不熟悉地標」（機構）200 公尺內，自動彈出隨機小遊戲通知。答對提升熟悉度分數，答錯給予提示。可隨時從主頁關閉遊戲功能。

### 觸發邏輯
```
每 30 秒掃描一次 GPS 位置
→ 計算與各地標距離
→ 若距離 < 200m 且該地標熟悉度 < 60 分 且 gameEnabled = true
→ 隨機選 1 種遊戲（3 種）彈出通知
→ 同一地標同一天只觸發 1 次
```

### 三種隨機小遊戲

**遊戲 A — 閃卡配對（Flash Card Match）🃏**
- 呈現 1 張勞工/醫療情境卡（母語）
- 從 4 個選項選出正確中文對應詞
- 答對：+10 分、顯示「✅ 答對了！」動畫
- 答錯：顯示正解 + 說明

**遊戲 B — 緊急排序（Emergency Sort）🚨**
- 呈現 3 個緊急情境（發燒 / 胸痛 / 頭暈）
- 用拖拉或點擊排列「緊急程度由高到低」
- 答對：+10 分 + 說明為何這個更緊急

**遊戲 C — 情境填空（Situation Fill-in）💬**
- 呈現一個勞資情境句子，中間有空格
- 從 3 個詞選 1 個填入（如：「老闆扣留我的___是違法的。」）
- 答對：+10 分 + 顯示完整法規說明

### Expected Outcomes
- 進入觸發範圍時，螢幕底部彈出「🎮 附近有任務！地標名稱 XXX」通知條
- 點擊通知條 → 全螢幕遊戲 Modal 彈出
- Modal 頂部：地標名稱 + 距離（如「距您 150m」）
- Modal 右上角：❌ 關閉按鈕（可跳過，不扣分）
- 遊戲畫面：題目 + 選項（大按鈕，適合手機操作）
- 答完後：顯示結果動畫（✅ 答對 / ❌ 答錯）+ 分數變化
- 主頁熟悉量表即時更新
- 遊戲已關閉時（`gameEnabled = false`）：完全不掃描 GPS、不彈出通知

### Todo List
1. 建立 `game-data.js`：三種遊戲各 20 題（5 語，對應勞工/醫療主題）
2. 建立 GPS 背景掃描服務 `startGpsWatch()`：
   - `setInterval` 每 30 秒呼叫 `navigator.geolocation.getCurrentPosition()`
   - 計算與各地標距離（`calcDistance()` Haversine）
   - 判斷觸發條件（距離 < 200m、熟悉度 < 60、當天未觸發、`gameEnabled`）
3. 實作地標熟悉度計算：`getLandmarkFamiliarity(landmarkId)` 讀取該地標相關題目的答對率
4. 建立底部通知條 HTML（`#game-toast`）+ CSS 動畫（滑入）
5. 建立遊戲 Modal HTML（`#game-modal`）含：
   - 地標資訊列
   - 遊戲內容區（動態切換三種遊戲）
   - 結果動畫區
   - ❌ 關閉按鈕（頂部右上角，隨時可關閉）
6. 實作 `launchGame(landmarkId)` → 隨機選遊戲類型（A/B/C）→ 渲染對應遊戲
7. 實作遊戲 A：閃卡配對（4 選 1）
8. 實作遊戲 B：緊急排序（點擊排序，非拖拉，手機友善）
9. 實作遊戲 C：情境填空（3 選 1）
10. 實作 `submitGameAnswer(isCorrect)` → 更新 `gameStats` → 重算 `familiarityScore` → 關閉 Modal
11. 主頁遊戲功能 Toggle 開關：關閉時呼叫 `stopGpsWatch()` 清除 interval

### Relevant Context
- 遊戲題目資料結構（`game-data.js`）：
  ```javascript
  { id, type: 'A|B|C', landmark_id, q:{zh,en,id,vi,th}, options:[...], answer, explain:{zh,en,id,vi,th} }
  ```
- `familiarityScore` 重算：`calcFamiliarityScore(user)` 統一函式，Sub-Task 3 定義
- 通知條 toast 同一地標同一天只顯示 1 次：檢查 `gameStats.landmarksVisited` 內時間戳
- 遊戲 B 排序用點擊上移/下移（非 drag-and-drop，手機操作更穩定）

---

## Sub-Task 8 — 成就機制與排名系統

**Status:** [ ] pending

### Intent
建立成就徽章（解鎖條件）與熟悉度分段排名，提升使用者長期回訪動機。

### 成就清單（10 個）
| 成就 ID | 圖示 | 名稱 | 解鎖條件 |
|---------|------|------|---------|
| `first_game` | 🎮 | 初次挑戰 | 完成第 1 次地標遊戲 |
| `first_card` | 💊 | 問診初體驗 | 使用問診卡 1 次 |
| `labor_explorer` | 📖 | 權益探索者 | 閱讀 10 題勞工問答 |
| `labor_master` | 🏛 | 權益達人 | 閱讀全部 24 題 |
| `landmark_3` | 📍 | 探索者 | 訪問 3 個不同地標 |
| `landmark_all` | 🗺 | 地圖達人 | 訪問全部地標 |
| `score_40` | 🌳 | 穩健成長 | 熟悉度達 40 分 |
| `score_80` | 🏆 | 頂尖達人 | 熟悉度達 80 分 |
| `streak_3` | 🔥 | 連續挑戰 | 連續 3 天觸發地標遊戲 |
| `perfect_game` | ⭐ | 完美作答 | 單次遊戲 3 題全對 |

### 排名段位（5 段）
| 分數 | 段位 | 徽章 |
|------|------|------|
| 0~19 | 新芽 Beginner | 🌱 |
| 20~39 | 成長 Growing | 🌿 |
| 40~59 | 穩健 Steady | 🌳 |
| 60~79 | 熟練 Skilled | ⭐ |
| 80~100 | 達人 Expert | 🏆 |

### Expected Outcomes
- 主頁成就區：已解鎖成就顯示彩色，未解鎖顯示灰階
- 解鎖新成就時：全螢幕慶祝動畫（煙火 emoji 動畫 + 成就名稱）
- 段位升級時：彈出「恭喜升段！」提示
- 成就詳情頁：點擊成就可看說明與解鎖時間

### Todo List
1. 建立成就定義資料（嵌入 `index.html`）：10 個成就的解鎖條件函式
2. 實作 `checkAchievements(user)` 函式：每次資料更新後自動檢查
3. 實作成就解鎖動畫（CSS keyframe，煙火 emoji 落下）
4. 在主頁成就區渲染 10 個成就格（`renderAchievements()`）
5. 實作段位升級偵測（比對前後 `getRank()` 結果）→ 顯示升段提示
6. 在 `submitGameAnswer()`、`markQuestionRead()`、`generateCard()` 後都呼叫 `checkAchievements()`

### Relevant Context
- `checkAchievements(user)` 回傳新解鎖的成就陣列（用於觸發動畫）
- 成就儲存於 `user.gameStats.achievements: [{ id, unlockedAt }]`
- 連續天數追蹤：`gameStats.landmarksVisited` 內日期去重後計算連續性

---

## Sub-Task 9 — PWA 手機 App 設定

**Status:** [ ] pending

### Intent
將 Web App 升級為 PWA（漸進式網頁應用），讓使用者可透過瀏覽器「加入主畫面」安裝到手機桌面，支援離線使用、全螢幕模式、App 圖示。

### PWA 運作原理
```
使用者用手機瀏覽器開啟網址
→ 瀏覽器偵測到 manifest.json + Service Worker
→ 底部彈出「加入主畫面」提示
→ 使用者點擊安裝
→ 手機桌面出現 App 圖示
→ 點擊圖示 → 全螢幕開啟（無瀏覽器 UI）
→ 離線時 Service Worker 從快取提供資源
```

### Expected Outcomes
- 手機瀏覽器開啟後，Android 自動彈出「加入主畫面」安裝提示
- iOS 提示使用者「分享 → 加入主畫面」
- 安裝後桌面顯示 App 圖示（🏥 MigrantCare）+ App 名稱
- 點擊桌面圖示全螢幕開啟（`standalone` 模式，無網址列）
- 啟動畫面（Splash Screen）顯示 App 名稱 + 圖示
- 無網路時仍可開啟並使用已快取功能（問診卡、勞工問答）
- 地圖在離線時顯示已快取的圖磚，並提示「目前離線，地圖可能不完整」

### Todo List
1. 建立 `manifest.json`：
   - `name`：MigrantCare Kaohsiung
   - `short_name`：MigrantCare
   - `start_url`：`./index.html`
   - `display`：`standalone`（全螢幕，無瀏覽器 UI）
   - `background_color`：`#FF6B35`（啟動畫面背景色）
   - `theme_color`：`#FF6B35`（手機頂部狀態列顏色）
   - `icons`：192px + 512px 兩種尺寸
2. 建立 `icons/` 資料夾，製作 App 圖示（SVG → PNG，以 🏥 + 橘色背景設計）
3. 在 `index.html` `<head>` 加入：
   - `<link rel="manifest" href="manifest.json">`
   - `<meta name="theme-color" content="#FF6B35">`
   - `<meta name="apple-mobile-web-app-capable" content="yes">` （iOS 支援）
   - `<meta name="apple-mobile-web-app-title" content="MigrantCare">`
   - `<link rel="apple-touch-icon" href="icons/icon-192.png">` （iOS 圖示）
4. 建立 `sw.js`（Service Worker）：
   - `install` 事件：快取所有靜態資源（`index.html`、所有 `.js`、Leaflet CDN）
   - `fetch` 事件：Cache-first 策略，快取優先，無快取才連網
   - 快取名稱含版本號（`migrant-cache-v1`），方便未來更新
5. 在 `index.html` 底部 JS 中註冊 Service Worker：
   ```javascript
   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('./sw.js');
   }
   ```
6. 離線偵測：監聽 `window.offline` / `window.online` 事件，離線時顯示提示橫幅

### Relevant Context
- PWA 必須在 **HTTPS** 環境運作（GitHub Pages 預設提供 HTTPS）
- iOS Safari 不自動彈出安裝提示，需在首頁加「iOS 安裝引導」Modal（第一次開啟時顯示）
- Service Worker 快取清單需包含：`index.html`、`manifest.json`、`lang-data.js`、`symptoms-data.js`、`labor-data.js`、`locations-data.js`、`game-data.js`、`icons/icon-192.png`、`icons/icon-512.png`、Leaflet CSS/JS CDN
- Leaflet 地圖圖磚來自 OpenStreetMap 外部 CDN，離線時無法顯示，僅能顯示已瀏覽過的圖磚（瀏覽器自動快取）

---

## Sub-Task 10 — 整合測試與 UI 精修

**Status:** [ ] pending

### Intent
整合所有模組，確保使用者登入狀態、語系切換、熟悉量表、遊戲系統、PWA 功能在全 APP 一致生效，優化行動裝置 RWD 體驗。

### Expected Outcomes
- PWA 安裝流程在 Android / iOS 均可正常執行
- 語系切換後所有頁面文字即時更新（含遊戲題目、成就名稱）
- 登入/切換使用者後熟悉量表、成就、段位重置為該使用者資料
- GPS 遊戲在 `gameEnabled = false` 時完全靜默
- 行動裝置（375px ~ 430px）所有畫面顯示正常
- 遊戲 Modal、通知條不遮擋緊急按鈕
- 離線時 App 可正常開啟（Service Worker 生效）

### Todo List
1. 整合所有 JS 資料檔（`lang-data.js`、`symptoms-data.js`、`labor-data.js`、`locations-data.js`、`game-data.js`）
2. 確認語系切換後 `applyLang()` 重新渲染所有模組（含遊戲）
3. 確認使用者切換後 `renderFamiliarityChart()` + `renderAchievements()` 讀取正確資料
4. 測試 PWA 安裝（Android Chrome「加入主畫面」）
5. 測試 iOS Safari 安裝引導 Modal 顯示
6. 測試離線模式（關閉網路後重開 App）
7. RWD 測試：遊戲 Modal 手機全螢幕、Toast 通知條位置、Tab Bar 不被遮擋
8. 遊戲 B 排序按鈕（上移/下移）手機點擊區域夠大（最小 44px）
9. 成就解鎖動畫測試（不同機型）
10. 整體色彩系統統一，確認 standalone 模式下狀態列顏色正確

### Relevant Context
- 主色：`--color-primary: #FF6B35`（溫暖橘）
- 輔色：`--color-secondary: #1B4F72`（深藍）
- 遊戲強調色：`--color-game: #F39C12`（金黃）
- 成就色：`--color-achievement: #8E44AD`（紫）
- 緊急色：`--color-emergency: #E74C3C`
- 安全色：`--color-safe: #27AE60`
- 目標裝置：Android Chrome / iOS Safari（375px ~ 430px 寬）
- PWA Lighthouse 分數目標：PWA 項目全綠（installable + offline）
