// --- DATA ---
const initialItems = [
    // 文件與金錢
    {
        id: "doc_1",
        category: "文件與金錢",
        text: "徵集令正本",
        note: "入伍報到必需文件，務必隨身攜帶。",
        checked: false,
        canDelete: false,
    },
    {
        id: "doc_2",
        category: "文件與金錢",
        text: "身分證、健保卡",
        note: "個人身分證明與醫療需求必備。",
        checked: false,
        canDelete: false,
    },
    {
        id: "doc_3",
        category: "文件與金錢",
        text: "役期折抵證明",
        note: "高中、大學軍訓課成績單。建議入伍前就申請好，可提早退伍。",
        checked: false,
        canDelete: false,
    },
    {
        id: "doc_4",
        category: "文件與金錢",
        text: "個人存摺正面影本",
        note: "薪餉入帳用，郵局或任何金融機構皆可。",
        checked: false,
        canDelete: false,
    },
    {
        id: "doc_5",
        category: "文件與金錢",
        text: "個人印章",
        note: "辦理文件、領取包裹會用到，準備便宜的木頭章即可。",
        checked: false,
        canDelete: false,
    },
    {
        id: "doc_6",
        category: "文件與金錢",
        text: "現金 (含零錢)",
        note: "準備少量百元鈔與足夠的10元、50元硬幣，用於投飲料販賣機等消費。",
        checked: false,
        canDelete: false,
    },
    {
        id: "doc_7",
        category: "文件與金錢",
        text: "悠遊卡/一卡通",
        note: "用於搭車及營區販賣機。部分機器可能挑卡，建議可多帶一兩張備用。",
        checked: false,
        canDelete: false,
    },
    {
        id: "doc_8",
        category: "文件與金錢",
        text: "電話卡",
        note: "手機管制期間，可用來打公共電話聯繫家人。",
        checked: false,
        canDelete: false,
        isOptional: true,
    },
    {
        id: "doc_9",
        category: "文件與金錢",
        text: "零錢包",
        note: "方便收納硬幣，建議使用防水材質。注意妥善保管。",
        checked: false,
        canDelete: false,
        isOptional: true,
    },
    {
        id: "doc_10",
        category: "文件與金錢",
        text: "資料夾",
        note: "收納保管徵集令、役期折抵證明、存摺影本等A4文件，避免弄濕或折損。",
        checked: false,
        canDelete: false,
    },

    // 電子產品
    {
        id: "elec_1",
        category: "電子產品",
        text: "手機",
        note: "建議可帶備用機。新訓安裝MDM不影響資料，但下部隊的監管系統會重置手機。據聞遠傳電信收訊較佳。",
        checked: false,
        canDelete: false,
    },
    {
        id: "elec_2",
        category: "電子產品",
        text: "行動電源 (行充)",
        note: "第一階段用量少，但第二階段插座有限，建議帶1-2顆。推薦可自帶插頭的款式，減少線材麻煩。",
        checked: false,
        canDelete: false,
    },
    {
        id: "elec_3",
        category: "電子產品",
        text: "有線耳機",
        note: "搭車或休息時聽音樂、打電話使用。切記不可帶有藍牙功能的無線耳機。",
        checked: false,
        canDelete: false,
    },
    {
        id: "elec_4",
        category: "電子產品",
        text: "充電線",
        note: "為手機、行動電源充電。建議使用耐用或多合一的款式。",
        checked: false,
        canDelete: false,
    },
    {
        id: "elec_5",
        category: "電子產品",
        text: "手電筒",
        note: "熄燈後或天未亮時上廁所、找東西、整理棉被時使用。建議小巧、筆型帶夾的款式。",
        checked: false,
        canDelete: false,
    },

    // 個人衛生
    {
        id: "hygiene_1",
        category: "個人衛生",
        text: "牙刷、牙膏",
        note: "營站有賣但可自備習慣的品牌。可帶幾條旅行組小牙膏備用。",
        checked: false,
        canDelete: false,
    },
    {
        id: "hygiene_2",
        category: "個人衛生",
        text: "沐浴乳/洗髮乳",
        note: "可依個人習慣攜帶，三合一沐浴乳最為方便省時。",
        checked: false,
        canDelete: false,
    },
    {
        id: "hygiene_3",
        category: "個人衛生",
        text: "洗面乳",
        note: "可與沐浴乳分開，方便早上盥洗。",
        checked: false,
        canDelete: false,
    },
    {
        id: "hygiene_4",
        category: "個人衛生",
        text: "刮鬍刀 (手動/電動)",
        note: "每日都需刮鬍子。若為電動式，記得要充飽電。",
        checked: false,
        canDelete: false,
    },
    {
        id: "hygiene_5",
        category: "個人衛生",
        text: "刮鬍泡",
        note: "手動刮鬍者必備，能避免刮傷。",
        checked: false,
        canDelete: false,
        isOptional: true,
    },
    {
        id: "hygiene_6",
        category: "個人衛生",
        text: "指甲剪",
        note: "會定期檢查服儀，指甲不能過長。",
        checked: false,
        canDelete: false,
    },
    {
        id: "hygiene_7",
        category: "個人衛生",
        text: "衛生紙",
        note: "準備抽取式大包裝放內務櫃，並隨身攜帶袖珍包。使用量大，建議多帶。",
        checked: false,
        canDelete: false,
    },
    {
        id: "hygiene_8",
        category: "個人衛生",
        text: "濕紙巾",
        note: "天氣炎熱或不便盥洗時，可用於擦拭身體保持潔淨，也可如廁後使用。",
        checked: false,
        canDelete: false,
    },
    {
        id: "hygiene_9",
        category: "個人衛生",
        text: "洗碗精",
        note: "可分裝小瓶，用來清洗個人餐具。",
        checked: false,
        canDelete: false,
        isOptional: true,
    },

    // 衣物與配件
    {
        id: "cloth_1",
        category: "衣物與配件",
        text: "內褲",
        note: "公發的白色三角褲尺寸不一定合身，建議自備數件習慣的款式。",
        checked: false,
        canDelete: false,
    },
    {
        id: "cloth_2",
        category: "衣物與配件",
        text: "黑色長襪",
        note: "可自備數雙習慣穿的，需為全黑且長度高於腳踝。",
        checked: false,
        canDelete: false,
    },
    {
        id: "cloth_3",
        category: "衣物與配件",
        text: "電子錶",
        note: "必備。需耐用、防水，且最好有夜光、鬧鐘與日期功能以利掌握時間。",
        checked: false,
        canDelete: false,
    },
    {
        id: "cloth_4",
        category: "衣物與配件",
        text: "鞋墊",
        note: "公發戰鬥靴未必合腳，加鞋墊可大幅提升舒適度、避免磨腳。建議到軍用品店選購。",
        checked: false,
        canDelete: false,
    },
    {
        id: "cloth_5",
        category: "衣物與配件",
        text: "備用眼鏡",
        note: "以防訓練或活動時眼鏡意外損壞。",
        checked: false,
        canDelete: false,
    },
    {
        id: "cloth_6",
        category: "衣物與配件",
        text: "眼鏡掛勾/運動束帶",
        note: "戴眼鏡者強烈建議，可防止操課、運動時眼鏡滑落。",
        checked: false,
        canDelete: false,
    },
    {
        id: "cloth_7",
        category: "衣物與配件",
        text: "隱形眼鏡 (日拋為佳)",
        note: "若有配戴習慣可攜帶，建議以日拋型為主，較為衛生方便。",
        checked: false,
        canDelete: false,
        isOptional: true,
    },

    // 藥品與護理
    {
        id: "med_1",
        category: "藥品與護理",
        text: "常備藥品",
        note: "如感冒藥、腸胃藥、止痛藥。因應團體生活與訓練。口服藥品需向幹部報備。",
        checked: false,
        canDelete: false,
    },
    {
        id: "med_2",
        category: "藥品與護理",
        text: "痠痛貼布/藥膏",
        note: "訓練後舒緩肌肉痠痛。噴霧或擦拭型藥品通常不需報備。",
        checked: false,
        canDelete: false,
    },
    {
        id: "med_3",
        category: "藥品與護理",
        text: "護膝",
        note: "單兵戰鬥教練、驗槍需跪地，強烈建議攜帶可藏在褲管內的款式，至少右膝需要。",
        checked: false,
        canDelete: false,
    },
    {
        id: "med_4",
        category: "藥品與護理",
        text: "OK蹦/優碘棉片",
        note: "處理小擦傷、水泡等。雖然有醫護可處理，但隨身備用更即時。",
        checked: false,
        canDelete: false,
    },
    {
        id: "med_5",
        category: "藥品與護理",
        text: "蚊蟲叮咬藥膏",
        note: "被蚊蟲叮咬後用於止癢消腫。",
        checked: false,
        canDelete: false,
    },
    {
        id: "med_6",
        category: "藥品與護理",
        text: "護手霜",
        note: "手部容易乾燥者建議攜帶，尤其在冬天，可預防手部龜裂破皮。",
        checked: false,
        canDelete: false,
        isOptional: true,
    },
    {
        id: "med_7",
        category: "藥品與護理",
        text: "防蚊液",
        note: "視營區蚊蟲多寡決定，可選購涼感配方兼具降溫效果。",
        checked: false,
        canDelete: false,
    },
    {
        id: "med_8",
        category: "藥品與護理",
        text: "防曬乳",
        note: "戶外操課時間長，為避免曬傷建議攜帶。",
        checked: false,
        canDelete: false,
    },

    // 生活雜物
    {
        id: "misc_1",
        category: "生活雜物",
        text: "防水夾鏈袋",
        note: "多準備幾種尺寸，方便分類收納個人物品、藥品、證件與鈔票。部隊發的可能較破舊。",
        checked: false,
        canDelete: false,
    },
    {
        id: "misc_2",
        category: "生活雜物",
        text: "衣物/空間除菌消臭噴霧",
        note: "可噴灑於內務櫃、床墊、棉被等，消除細菌、異味並保持清香。",
        checked: false,
        canDelete: false,
        isOptional: true,
    },
    {
        id: "misc_3",
        category: "生活雜物",
        text: "涼感噴霧",
        note: "夏天消暑利器，可分裝成小瓶方便攜帶。",
        checked: false,
        canDelete: false,
        isOptional: true,
    },
    {
        id: "misc_4",
        category: "生活雜物",
        text: "運動飲料粉末包",
        note: "可加入水壺中，在大熱天操課或行軍時補充水分與電解質，讓水更好喝。",
        checked: false,
        canDelete: false,
    },
    {
        id: "misc_5",
        category: "生活雜物",
        text: "痱子粉",
        note: "夏天兵適用，可保持身體乾爽。理髮後無法立即洗澡時可拍在頸部止癢。",
        checked: false,
        canDelete: false,
    },
    {
        id: "misc_6",
        category: "生活雜物",
        text: "喉糖",
        note: "操課喊口號、感冒喉嚨不適時可舒緩。",
        checked: false,
        canDelete: false,
    },
    {
        id: "misc_7",
        category: "生活雜物",
        text: "耳塞",
        note: "團體生活，用來應對鄰床打呼聲，提升睡眠品質。",
        checked: false,
        canDelete: false,
    },
    {
        id: "misc_8",
        category: "生活雜物",
        text: "藍筆/奇異筆、小筆記本",
        note: "書寫資料、記筆記，或在個人物品上做記號。奇異筆在拿到公發品前可先自備。",
        checked: false,
        canDelete: false,
    },
    {
        id: "misc_9",
        category: "生活雜物",
        text: "針線包",
        note: "以備不時之需，可用於縫補衣物或裝備的微小破損。",
        checked: false,
        canDelete: false,
        isOptional: true,
    },
    {
        id: "misc_10",
        category: "生活雜物",
        text: "課外讀物",
        note: "第一階段可能沒時間看，第二階段後休息時間可閱讀。",
        checked: false,
        canDelete: false,
        isOptional: true,
    },
];

// --- NOTE COLOR DATA (UPDATED) ---
const noteColors = [
    {
        name: "slate",
        swatchBg: "bg-slate-500",
        cardBg: "bg-slate-100",
        text: "text-slate-800",
        border: "border-slate-300",
    },
    {
        name: "blue",
        swatchBg: "bg-blue-500",
        cardBg: "bg-blue-50",
        text: "text-blue-800",
        border: "border-blue-300",
    },
    {
        name: "green",
        swatchBg: "bg-green-500",
        cardBg: "bg-green-50",
        text: "text-green-800",
        border: "border-green-300",
    },
    {
        name: "amber",
        swatchBg: "bg-amber-400",
        cardBg: "bg-amber-50",
        text: "text-amber-800",
        border: "border-amber-300",
    },
    {
        name: "red",
        swatchBg: "bg-red-500",
        cardBg: "bg-red-50",
        text: "text-red-800",
        border: "border-red-300",
    },
];

// --- DOM ELEMENTS ---
const listContainer = document.getElementById("todo-list-container");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const newItemInput = document.getElementById("new-item-input");
const addItemButton = document.getElementById("add-item-button");
const resetButton = document.getElementById("reset-button");
const printButton = document.getElementById("print-button");
const notesContainer = document.getElementById("notes-container");
const addNoteBtn = document.getElementById("add-note-btn");
const noteModal = document.getElementById("note-modal");
const noteModalCard = document.getElementById("note-modal-card");
const noteTitleInput = document.getElementById("note-title-input");
const noteContentInput = document.getElementById("note-content-input");
const saveNoteBtn = document.getElementById("save-note-btn");
const cancelNoteBtn = document.getElementById("cancel-note-btn");
const deleteNoteBtn = document.getElementById("delete-note-btn");
const colorPalette = document.getElementById("color-palette");

// --- STORAGE KEYS ---
const ITEMS_STORAGE_KEY = "military-items-v18-colorfix";
const NOTES_STORAGE_KEY = "military-notes-v18-colorfix";

// --- STATE ---
let items = [];
let notes = [];
let currentEditingNoteId = null;

// --- STATE MANAGEMENT ---
function loadState() {
    const storedItems = localStorage.getItem(ITEMS_STORAGE_KEY);
    const baseItems = JSON.parse(JSON.stringify(initialItems));
    if (storedItems) {
        const stored = JSON.parse(storedItems);
        const storedMap = new Map(stored.map((i) => [i.id, i]));
        const merged = baseItems.map((baseItem) => ({
            ...baseItem,
            ...(storedMap.get(baseItem.id) || {}),
        }));
        const userAdded = stored.filter((item) => item.canDelete);
        items = [...merged, ...userAdded];
    } else {
        items = baseItems;
    }

    const storedNotes = localStorage.getItem(NOTES_STORAGE_KEY);
    notes = storedNotes ? JSON.parse(storedNotes) : [];

    saveItemsState();
    saveNotesState();
}

function saveItemsState() {
    localStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
}
function saveNotesState() {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
}

// --- UTILITY ---
function generateId() {
    return `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

const categoryIcons = {
    文件與金錢: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2V4a2 2 0 00-2-2H9z" /><path d="M4 12a2 2 0 012-2h10a2 2 0 012 2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5z" /></svg>`,
    電子產品: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>`,
    個人衛生: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 8.586V5z" clip-rule="evenodd" /></svg>`,
    衣物與配件: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a2 2 0 10-4 0v1h4z" clip-rule="evenodd" /></svg>`,
    藥品與護理: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414L9 7.586 7.707 6.293a1 1 0 00-1.414 1.414L7.586 9l-1.293 1.293a1 1 0 101.414 1.414L9 10.414l1.293 1.293a1 1 0 001.414-1.414L10.414 9l1.293-1.293z" clip-rule="evenodd" /></svg>`,
    生活雜物: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" /><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>`,
    我的自訂項目: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>`,
};

// --- RENDER FUNCTIONS ---
function renderAll() {
    renderChecklist();
    renderNotes();
    updateProgressBar();
}

function renderChecklist() {
    const groupedItems = items.reduce((acc, item) => {
        const categoryKey = item.canDelete ? "我的自訂項目" : item.category;
        (acc[categoryKey] = acc[categoryKey] || []).push(item);
        return acc;
    }, {});

    const categoryOrder = [
        "文件與金錢",
        "電子產品",
        "個人衛生",
        "衣物與配件",
        "藥品與護理",
        "生活雜物",
        "我的自訂項目",
    ];
    listContainer.innerHTML = "";

    categoryOrder.forEach((category) => {
        if (!groupedItems[category] || groupedItems[category].length === 0)
            return;

        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `<h3 class="text-xl font-bold text-slate-700 mb-3 flex items-center gap-3">${categoryIcons[category]} ${category}</h3>`;
        listContainer.appendChild(categoryDiv);

        const categoryList = document.createElement("ul");
        categoryList.className = "space-y-3";
        categoryDiv.appendChild(categoryList);

        groupedItems[category].forEach((item) => {
            const li = document.createElement("li");
            const optionalClass = item.isOptional ? "border-dotted" : "";
            li.className = `bg-white rounded-lg border transition-all duration-300 ${
                item.checked
                    ? "border-slate-300 bg-slate-50"
                    : "border-slate-200 hover:border-slate-600"
            } ${optionalClass}`;
            li.dataset.itemId = item.id;

            li.innerHTML = `
        <div class="p-3 flex items-start">
          <input type="checkbox" id="item-${
              item.id
          }" class="form-checkbox h-6 w-6 text-slate-600 rounded-md border-gray-300 focus:ring-slate-500 mt-1 cursor-pointer flex-shrink-0" ${
                item.checked ? "checked" : ""
            }>
          <div class="ml-4 flex-grow">
            <label for="item-${
                item.id
            }" class="text-lg font-medium cursor-pointer select-none ${
                item.checked ? "line-through text-slate-400" : "text-slate-800"
            }">${item.text}</label>
            <p class="item-note w-full mt-1 text-sm text-slate-500">${
                item.note || ""
            }</p>
          </div>
          ${
              item.canDelete
                  ? `<button class="delete-item-btn ml-2 text-slate-400 hover:text-red-500 transition-colors flex-shrink-0 p-1 mt-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" /></svg></button>`
                  : `<div class="w-8 h-8 flex-shrink-0 ml-2"></div>`
          }
        </div>
      `;
            categoryList.appendChild(li);
        });
    });
    addChecklistEventListeners();
}

function renderNotes() {
    document.querySelectorAll(".note-item").forEach((el) => el.remove());

    notes.forEach((note) => {
        const cardEl = document.createElement("div");
        const color =
            noteColors.find((c) => c.name === note.color) || noteColors[0];

        cardEl.className = `note-item w-full h-32 p-3 flex flex-col cursor-pointer rounded-lg border-2 ${color.cardBg} ${color.border} hover:shadow-md hover:-translate-y-1 transition-all`;
        cardEl.dataset.noteId = note.id;

        cardEl.innerHTML = `
            <h4 class="font-bold ${color.text} truncate mb-1 text-base">${
            note.title || "無標題"
        }</h4>
            <p class="text-sm ${
                color.text
            } text-opacity-80 overflow-hidden text-ellipsis" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">${
            note.content || "..."
        }</p>
        `;
        notesContainer.insertBefore(cardEl, addNoteBtn);

        cardEl.addEventListener("click", () => openNoteModal(note.id));
    });
}

function updateProgressBar() {
    const essentialItems = items.filter((item) => !item.isOptional);
    const completedItems = essentialItems.filter((item) => item.checked).length;
    const totalItems = essentialItems.length;
    const percentage =
        totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100);

    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}%`;
}

// --- EVENT LISTENERS ---
function addChecklistEventListeners() {
    document.querySelectorAll("[data-item-id]").forEach((li) => {
        const itemId = li.dataset.itemId;

        const checkbox = li.querySelector('input[type="checkbox"]');
        if (!checkbox.dataset.listenerAttached) {
            checkbox.dataset.listenerAttached = true;
            checkbox.addEventListener("change", (e) => {
                const item = items.find((i) => i.id === itemId);
                item.checked = e.target.checked;
                li.classList.toggle("border-slate-300", item.checked);
                li.classList.toggle("bg-slate-50", item.checked);
                li.classList.toggle("border-slate-200", !item.checked);

                const label = li.querySelector("label");
                label.classList.toggle("line-through", item.checked);
                label.classList.toggle("text-slate-800", !item.checked);
                label.classList.toggle("text-slate-400", item.checked);

                saveItemsState();
                updateProgressBar();
            });
        }

        const deleteBtn = li.querySelector(".delete-item-btn");
        if (deleteBtn && !deleteBtn.dataset.listenerAttached) {
            deleteBtn.dataset.listenerAttached = true;
            deleteBtn.addEventListener("click", () => {
                if (
                    confirm(
                        `確定要刪除項目：「${
                            items.find((i) => i.id === itemId).text
                        }」嗎？`
                    )
                ) {
                    items = items.filter((i) => i.id !== itemId);
                    saveItemsState();
                    renderChecklist();
                    updateProgressBar();
                }
            });
        }
    });
}

function handleAddItem() {
    const text = newItemInput.value.trim();
    if (text) {
        const newItem = {
            id: generateId(),
            text: text,
            note: "（自訂項目）",
            checked: false,
            canDelete: true,
            category: "我的自訂項目",
        };
        items.push(newItem);
        newItemInput.value = "";
        saveItemsState();
        renderChecklist();
        const newItemElement = document.querySelector(
            `[data-item-id='${newItem.id}']`
        );
        if (newItemElement) {
            newItemElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
        updateProgressBar();
    }
}

function handleReset() {
    if (confirm("這將會重設所有清單項目和個人筆記，此操作無法復原。確定嗎？")) {
        localStorage.removeItem(ITEMS_STORAGE_KEY);
        localStorage.removeItem(NOTES_STORAGE_KEY);
        loadState();
        renderAll();
    }
}

// --- NOTE MODAL LOGIC ---
function openNoteModal(noteId = null) {
    currentEditingNoteId = noteId;
    if (noteId) {
        const note = notes.find((n) => n.id === noteId);
        noteTitleInput.value = note.title;
        noteContentInput.value = note.content;
        deleteNoteBtn.style.display = "block";
        updateColorPalette(note.color);
        updateModalCardColor(note.color);
    } else {
        noteTitleInput.value = "";
        noteContentInput.value = "";
        deleteNoteBtn.style.display = "block";
        const defaultColor = "slate";
        updateColorPalette(defaultColor);
        updateModalCardColor(defaultColor);
    }
    deleteNoteBtn.classList.toggle("hidden", !noteId);
    noteModal.classList.remove("hidden");
    noteModal.classList.add("modal-enter");
    setTimeout(() => noteModal.classList.remove("modal-enter"), 10);
}

function closeNoteModal() {
    noteModal.classList.add("modal-leave-to");
    setTimeout(() => {
        noteModal.classList.add("hidden");
        noteModal.classList.remove("modal-leave-to");
    }, 300);
}

function handleSaveNote() {
    const title = noteTitleInput.value.trim();
    const content = noteContentInput.value.trim();
    const selectedColorEl = document.querySelector(
        '.color-dot[data-selected="true"]'
    );

    if (!selectedColorEl) {
        alert("錯誤：未選擇顏色。");
        return;
    }
    const selectedColor = selectedColorEl.dataset.color;

    if (!title && !content) {
        alert("標題和內容不能都為空！");
        return;
    }

    if (currentEditingNoteId) {
        const note = notes.find((n) => n.id === currentEditingNoteId);
        note.title = title;
        note.content = content;
        note.color = selectedColor;
    } else {
        notes.push({ id: generateId(), title, content, color: selectedColor });
    }
    saveNotesState();
    renderNotes();
    closeNoteModal();
}

function handleDeleteNote() {
    if (confirm("確定要刪除這張筆記嗎？")) {
        notes = notes.filter((n) => n.id !== currentEditingNoteId);
        saveNotesState();
        renderNotes();
        closeNoteModal();
    }
}

function updateColorPalette(selectedColorName) {
    colorPalette.innerHTML = "";
    noteColors.forEach((color) => {
        const dot = document.createElement("div");
        dot.className = `color-dot w-8 h-8 rounded-full cursor-pointer ${color.swatchBg} border-2 border-transparent transition-all flex items-center justify-center`;
        dot.dataset.color = color.name;
        if (color.name === selectedColorName) {
            dot.dataset.selected = "true";
            dot.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>`;
        } else {
            dot.dataset.selected = "false";
        }
        dot.addEventListener("click", () => {
            updateColorPalette(color.name);
            updateModalCardColor(color.name);
        });
        colorPalette.appendChild(dot);
    });
}

function updateModalCardColor(colorName) {
    const color = noteColors.find((c) => c.name === colorName) || noteColors[0];

    noteColors.forEach((c) => {
        noteModalCard.classList.remove(c.cardBg);
    });

    noteModalCard.classList.add(color.cardBg);
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    loadState();
    renderAll();

    addNoteBtn.addEventListener("click", () => openNoteModal());
    saveNoteBtn.addEventListener("click", handleSaveNote);
    cancelNoteBtn.addEventListener("click", closeNoteModal);
    deleteNoteBtn.addEventListener("click", handleDeleteNote);
    noteModal
        .querySelector(".modal-backdrop")
        .addEventListener("click", closeNoteModal);

    addItemButton.addEventListener("click", handleAddItem);
    newItemInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleAddItem();
    });
    resetButton.addEventListener("click", handleReset);
    printButton.addEventListener("click", () => {
        window.print();
    });
});

window.onload = () => {
    window.scrollTo(0, 0);
};
