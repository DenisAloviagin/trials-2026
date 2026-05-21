import { useState } from "react";

// Только исследования с АКТИВНЫМ рекрутингом (май–август 2026)
// Удалены: завершённые, pending, наблюдательные, дубликаты

const trials = [

  // ── LSD (MM-120) ──────────────────────────────────────────────────────────
  {
    substance: "LSD (MM-120)", substanceColor: "#e74c3c", phase: "Phase 3",
    eligibility: "diag",
    name: "Voyage — Генерализованное тревожное расстройство",
    nct: "NCT06741228",
    org: "Definium Therapeutics (MindMed)", country: "США + Европа",
    goal: "ГТР. Первый в истории Phase 3 LSD. Одна доза MM-120 (фармоптимизированный LSD) vs плацебо.",
    recruitStart: "Декабрь 2024 — сейчас", recruitStatus: "active", trialEnd: "Ноябрь 2026",
    email: "mindmedvoyage@seattlentc.com", phone: "206-467-6300",
    site: "clinicaltrials.gov/study/NCT06741228",
    notes: "200 участников, 18–74 лет, диагноз ГТР по DSM-5. Участие бесплатно.",
  },
  {
    substance: "LSD (MM-120)", substanceColor: "#e74c3c", phase: "Phase 3",
    name: "Panorama — ГТР (второй пивотный)",
    nct: "уточнить mindmed.co",
    org: "Definium Therapeutics (MindMed)", country: "США + Европа",
    goal: "ГТР. Второй пивотный трайл — подтвердить результаты Voyage. Участники в США и Европе.",
    recruitStart: "Январь 2025 — сейчас", recruitStatus: "active", trialEnd: "2-е полугодие 2026",
    email: "clinicaltrials@definiumtx.com", phone: "1-332-282-0479",
    site: "mindmed.co/clinical-trials",
    notes: "250 участников. Дозы: 100 мкг, 50 мкг или плацебо. Европейские сайты — уточнять отдельно.",
  },
  {
    substance: "LSD (MM-120)", substanceColor: "#e74c3c", phase: "Phase 3",
    eligibility: "diag",
    name: "Emerge — Большая депрессия",
    nct: "уточнить mindmed.co",
    org: "Definium Therapeutics (MindMed)", country: "США",
    goal: "MDD (большая депрессия). Первый Phase 3 LSD при депрессии в истории.",
    recruitStart: "Начало 2026 — сейчас", recruitStatus: "active", trialEnd: "Середина 2026",
    email: "clinicaltrials@definiumtx.com", phone: "1-332-282-0479",
    site: "mindmed.co/clinical-trials",
    notes: "140 участников, только США. MM-120 ODT 100 мкг. Результаты ожидаются mid-2026.",
  },
  {
    substance: "LSD (MM-120)", substanceColor: "#e74c3c", phase: "Phase 3",
    eligibility: "diag",
    name: "Ascend — MDD (второй трайл, старт mid-2026)",
    nct: "анонсирован, NCT уточнять",
    org: "Definium Therapeutics (MindMed)", country: "США",
    goal: "Большая депрессия. Второй подтверждающий Phase 3 при MDD — открывается в середине 2026.",
    recruitStart: "Середина 2026 (анонсирован компанией)", recruitStatus: "opening", trialEnd: "2027",
    email: "clinicaltrials@definiumtx.com", phone: "1-332-282-0479",
    site: "mindmed.co/clinical-trials",
    notes: "Следить на mindmed.co — NCT ещё не присвоен.",
  },
  {
    substance: "LSD (MM-120)", substanceColor: "#e74c3c", phase: "Phase 3",
    eligibility: "diag",
    name: "Voyage/Panorama — европейские площадки",
    nct: "NCT06741228 + Panorama EU",
    org: "Definium Therapeutics (MindMed)", country: "Европа",
    goal: "ГТР. Европейские участники Voyage и Panorama — доступ без поездки в США.",
    recruitStart: "2025 — сейчас", recruitStatus: "active", trialEnd: "2026–2027",
    email: "clinicaltrials@definiumtx.com", phone: "1-332-282-0479",
    site: "mindmed.co/clinical-trials",
    notes: "Конкретные европейские сайты уточнять на clinicaltrials.gov или mindmed.co.",
  },

  // ── Псилоцибин ────────────────────────────────────────────────────────────
  {
    substance: "Псилоцибин", substanceColor: "#8e44ad", phase: "Phase 2 RCT",
    eligibility: "diag",
        name: "Psilocybin for OCD — повторные дозы",
    nct: "NCT05370911",
    org: "Yale University", country: "США (Нью-Хейвен, Коннектикут)",
    goal: "ОКР. Первый рандомизированный трайл повторных доз псилоцибина при обсессивно-компульсивном расстройстве.",
    recruitStart: "Июль 2023 — сейчас", recruitStatus: "active", trialEnd: "Июль 2026",
    email: "terence.ching@yale.edu", phone: "877-978-8343",
    site: "medicine.yale.edu/trial/repeated-psilocybin-dosing-in-ocd",
    notes: "Также: sarah.shnayder@yale.edu. Диагноз ОКР по DSM-5, провал минимум одной предыдущей терапии.",
  },
  {
    substance: "Псилоцибин", substanceColor: "#8e44ad", phase: "Phase 1 (мультисайт)",
    eligibility: "diag",
    name: "Psilocybin + Smoking Cessation",
    nct: "NCT05452772",
    org: "Johns Hopkins + NYU + Univ. Alabama Birmingham", country: "США (Балтимор, Нью-Йорк, Бирмингем)",
    goal: "Отказ от курения. Первый двойной слепой РКИ псилоцибина vs никотиновый пластырь. NIDA-финансирование.",
    recruitStart: "2023 — сейчас", recruitStatus: "active", trialEnd: "2026",
    email: "", phone: "",
    site: "quitsmokingbaltimore.org",
    notes: "3 города, 3 сайта. Контакты каждого центра на сайте quitsmokingbaltimore.org.",
  },
  {
    substance: "Псилоцибин", substanceColor: "#8e44ad", phase: "Phase 1/2",
    eligibility: "diag",
    name: "Psilocybin for Anorexia Nervosa (SPANYA)",
    nct: "NCT06399263",
    org: "UCSF", country: "США (Сан-Франциско)",
    goal: "Анорексия у молодых взрослых 18–25 лет. Нет одобренных препаратов — псилоцибин как первый кандидат.",
    recruitStart: "Ноябрь 2024 — сейчас", recruitStatus: "active", trialEnd: "2029",
    email: "", phone: "888-689-8273",
    site: "clinicaltrials.ucsf.edu/trial/NCT06399263",
    notes: "Назовите NCT06399263. Нужно привлечь 1–2 члена семьи к совместному участию в части сессий.",
  },
  {
    substance: "Псилоцибин", substanceColor: "#8e44ad", phase: "Phase 2",
    eligibility: "diag",
    name: "Psilocybin for Opioid Use Disorder",
    nct: "NCT06796062",
    org: "NYU Langone Health", country: "США (Нью-Йорк)",
    goal: "Опиоидная зависимость у пациентов на метадоне. Псилоцибин как дополнение к существующей терапии.",
    recruitStart: "Декабрь 2025 — сейчас", recruitStatus: "active", trialEnd: "Февраль 2029",
    email: "", phone: "",
    site: "med.nyu.edu/departments-institutes/psychiatry/research/psychedelic-medicine/research/participate-a-clinical-trial",
    notes: "Финансирование NIH/NIDA. Уникальный дизайн: псилоцибин параллельно с метадоном.",
  },
  {
    substance: "Псилоцибин", substanceColor: "#8e44ad", phase: "Phase 1/2",
    eligibility: "condition",
    name: "Psilocybin for Physician Burnout",
    nct: "NCT06814522",
    org: "UC San Diego (UCSD)", country: "США (Сан-Диего)",
    goal: "Выгорание у врачей. Только действующие врачи UCSD с симптомами >6 месяцев.",
    recruitStart: "2025 — сейчас", recruitStatus: "active", trialEnd: "2027",
    email: "", phone: "",
    site: "clinicaltrials.ucsd.edu/trial/NCT06814522",
    notes: "Только для практикующих врачей UCSD, 21–70 лет. Одна доза псилоцибина + терапия.",
  },

  // ── МДМА ─────────────────────────────────────────────────────────────────
  {
    substance: "МДМА", substanceColor: "#e67e22", phase: "Phase 1",
    eligibility: "condition",
    name: "MDMA-Assisted Therapy for Mental Healthcare Providers",
    nct: "NCT07102576",
    org: "Icahn School of Medicine at Mount Sinai", country: "США (Нью-Йорк)",
    goal: "МДМА-терапия для психотерапевтов, проходящих обучение. Психологические и биологические эффекты.",
    recruitStart: "Январь 2026 — сейчас", recruitStatus: "active", trialEnd: "Сентябрь 2029",
    email: "", phone: "",
    site: "clinicaltrials.gov/study/NCT07102576",
    notes: "Для практикующих специалистов психического здоровья в процессе обучения как терапевты.",
  },
  {
    substance: "МДМА", substanceColor: "#e67e22", phase: "Phase 2 RCT",
    eligibility: "diag",
    name: "MDMA + CBCT for PTSD (семейная терапия)",
    nct: "NCT06044675",
    org: "Remedy (Торонто)", country: "Канада",
    goal: "ПТСР. МДМА + когнитивно-поведенческая семейная терапия (CBCT) против CBCT без МДМА.",
    recruitStart: "Ноябрь 2024 — сейчас", recruitStatus: "active", trialEnd: "Декабрь 2026",
    email: "", phone: "",
    site: "clinicaltrials.gov/study/NCT06044675",
    notes: "30 пар (dyads): один партнёр с ПТСР. Уникальный дизайн — терапия для пары целиком.",
  },
  {
    substance: "МДМА", substanceColor: "#e67e22", phase: "Phase 2",
    eligibility: "diag",
    name: "MDMA-PE: Пролонгированная экспозиция для ветеранов",
    nct: "NCT06117306",
    org: "San Diego Veterans Healthcare System (VA)", country: "США (Сан-Диего)",
    goal: "ПТСР у ветеранов. МДМА как усилитель интенсивной экспозиционной терапии.",
    recruitStart: "Октябрь 2024 — сейчас", recruitStatus: "active", trialEnd: "Уточнять на ClinicalTrials",
    email: "", phone: "",
    site: "clinicaltrials.gov/study/NCT06117306",
    notes: "Ветераны и военнослужащие с ПТСР. Проверяйте актуальный статус.",
  },
  {
    substance: "МДМА", substanceColor: "#e67e22", phase: "Phase 2",
    eligibility: "diag",
    name: "MDMA + Psilocybin: Neurobehavioral Mechanisms for AUD",
    nct: "NCT06349083",
    org: "NYU Langone Health", country: "США (Нью-Йорк)",
    goal: "Алкогольное расстройство. Изучить нейробиологические механизмы псилоцибин-ассистированной терапии при AUD.",
    recruitStart: "Август 2025 — сейчас", recruitStatus: "active", trialEnd: "Май 2029",
    email: "", phone: "",
    site: "clinicaltrials.gov/study/NCT06349083",
    notes: "Финансирование NIH. Нейровизуализация + психоделическая терапия при алкогольной зависимости.",
  },
  {
    substance: "МДМА", substanceColor: "#e67e22", phase: "Phase 3 (открывается)",
    eligibility: "diag",
    name: "EMP-01 (R-MDMA) for Social Anxiety — Phase 3",
    nct: "Phase 3 анонсирован после Phase 2a (февраль 2026)",
    org: "AtaiBeckley Inc.", country: "США / Великобритания",
    goal: "Социальное тревожное расстройство. Phase 2a: 49% ответчиков vs 15% плацебо. Первый R-MDMA в истории.",
    recruitStart: "Phase 3: планируется 2H 2026", recruitStatus: "opening", trialEnd: "2028",
    email: "", phone: "",
    site: "ataibeckley.com",
    notes: "Phase 3 официально не объявлен. Следить на ataibeckley.com.",
  },

  // ── Кетамин ───────────────────────────────────────────────────────────────
  {
    substance: "Кетамин / Эскетамин", substanceColor: "#27ae60", phase: "Phase 3",
    eligibility: "diag",
    name: "MORE-KARE: Кетамин при алкогольном расстройстве",
    nct: "уточнять exeter.ac.uk",
    org: "University of Exeter + Awakn Life Sciences (NIHR/MRC)", country: "Великобритания (8 NHS-сайтов)",
    goal: "Тяжёлое алкогольное расстройство. Крупнейший Phase 3 кетамин-ассистированной терапии в мире. Phase 2: 86% абстиненции.",
    recruitStart: "Август 2024 — сейчас", recruitStatus: "active", trialEnd: "2027",
    email: "", phone: "",
    site: "exeter.ac.uk/research/more-kare",
    notes: "8 NHS-сайтов: Exeter, Oxford и другие. Кетамин IV + психотерапия. Великобритания.",
  },
  {
    substance: "Кетамин / Эскетамин", substanceColor: "#27ae60", phase: "Phase 1/2",
    eligibility: "diag",
    name: "KARE: Кетамин при метамфетаминовой зависимости + ВИЧ",
    nct: "NCT06538285",
    org: "UCSF", country: "США (Сан-Франциско)",
    goal: "Метамфетаминовая зависимость + ВИЧ. Пересечение двух кризисов — кетамин для публично застрахованных пациентов.",
    recruitStart: "Март 2025 — сейчас", recruitStatus: "active", trialEnd: "Июнь 2026",
    email: "", phone: "",
    site: "clinicaltrials.ucsf.edu/trial/NCT06538285",
    notes: "18–69 лет. 3 дозы IM кетамина + 7 сессий психотерапии. Только публично застрахованные.",
  },
  {
    substance: "Кетамин / Эскетамин", substanceColor: "#27ae60", phase: "Phase 2",
    eligibility: "diag",
    name: "Кетамин при опиоидной зависимости (Univ. Maryland)",
    nct: "NCT06943859",
    org: "University of Maryland, Baltimore", country: "США (Мэриленд)",
    goal: "Опиоидная зависимость. Может ли кетамин снизить тягу и предотвратить рецидив при OUD?",
    recruitStart: "Февраль 2026 — сейчас", recruitStatus: "active", trialEnd: "Август 2028",
    email: "", phone: "",
    site: "clinicaltrials.gov/study/NCT06943859",
    notes: "Свежий старт (февраль 2026). Проверьте актуальный статус на ClinicalTrials.",
  },
  {
    substance: "Кетамин / Эскетамин", substanceColor: "#27ae60", phase: "Phase 2",
    eligibility: "diag",
    name: "IV Кетамин при депрессии + болезнь Паркинсона (ветераны)",
    nct: "см. UCSF Ketamine",
    org: "UCSF / VA San Francisco", country: "США (Калифорния)",
    goal: "Болезнь Паркинсона + депрессия у ветеранов. Влияет ли кетамин на нейровоспаление при БП?",
    recruitStart: "2025 — сейчас", recruitStatus: "active", trialEnd: "2027",
    email: "", phone: "",
    site: "clinicaltrials.ucsf.edu/ketamine",
    notes: "Только ветераны с БП. Рандомизированное плацебо-контролируемое.",
  },
  {
    substance: "Кетамин / Эскетамин", substanceColor: "#27ae60", phase: "Phase 3 (NIDA CTN-0132)",
    eligibility: "diag",
    name: "Кетамин при метамфетаминовом расстройстве (федеральный)",
    nct: "NCT06496750",
    org: "UT Southwestern + сеть NIDA CTN", country: "США (несколько сайтов)",
    goal: "Метамфетаминовое расстройство. Первый федеральный Phase 3 кетамина при зависимости от мета.",
    recruitStart: "Сентябрь 2024 — сейчас", recruitStatus: "active", trialEnd: "Октябрь 2026",
    email: "", phone: "",
    site: "clinicaltrials.gov/study/NCT06496750",
    notes: "NIDA-финансирование. Двойной слепой. Множество сайтов по всем США.",
  },

  // ── Каннабис ─────────────────────────────────────────────────────────────
  {
    substance: "Каннабис", substanceColor: "#16a085", phase: "Phase 2",
    eligibility: "diag",
    name: "THC/CBD у ВИЧ-позитивных пациентов",
    nct: "см. UCSD Cannabis",
    org: "UC San Diego (UCSD)", country: "США (Сан-Диего)",
    goal: "Когниция и иммунитет при ВИЧ. THC или CBD: польза или вред для мозга людей с ВИЧ?",
    recruitStart: "2025 — сейчас", recruitStatus: "active", trialEnd: "2027",
    email: "", phone: "",
    site: "clinicaltrials.ucsd.edu/cannabis",
    notes: "5-дневный курс THC, CBD или плацебо. Для нечастых пользователей каннабиса.",
  },
  {
    substance: "Каннабис", substanceColor: "#16a085", phase: "Phase 2",
    eligibility: "diag",
    name: "Оральный каннабис при боли в позвоночнике",
    nct: "см. UCHealth",
    org: "UCHealth / University of Colorado", country: "США (Колорадо)",
    goal: "Хроническая боль в позвоночнике. Снижает ли пероральный каннабис боль лучше плацебо?",
    recruitStart: "2025 — сейчас", recruitStatus: "active", trialEnd: "2027",
    email: "", phone: "",
    site: "uchealth.org/research",
    notes: "До 63 участников. 3 условия по 6 недель: два экстракта THC/CBD + плацебо.",
  },
  {
    substance: "Каннабис", substanceColor: "#16a085", phase: "Phase 2",
    eligibility: "diag",
    name: "THC + CBD при опиоидной зависимости + боль",
    nct: "уточнять Yale",
    org: "Yale University", country: "США (Нью-Хейвен)",
    goal: "Опиоидная зависимость + хроническая боль. Каннабис для лечения двух состояний одновременно.",
    recruitStart: "2025 — сейчас", recruitStatus: "active", trialEnd: "2027",
    email: "helpusdiscover@yale.edu", phone: "877-978-8343",
    site: "clinicaltrials.gov",
    notes: "Поиск: Yale THC CBD opioid chronic pain.",
  },
  {
    substance: "Каннабис", substanceColor: "#16a085", phase: "Phase 1/2",
    eligibility: "healthy",
    name: "Высокий THC и когниция у молодёжи 21–25 лет",
    nct: "см. UCSF Cannabis",
    org: "UCSF", country: "США (Сан-Франциско)",
    goal: "Когниция у молодёжи. Улучшится ли мышление при переходе с высокопотентного на слабый THC?",
    recruitStart: "2025 — сейчас", recruitStatus: "active", trialEnd: "2027",
    email: "", phone: "",
    site: "clinicaltrials.ucsf.edu/cannabis",
    notes: "Частые пользователи каннабиса. Участники получают стимул для перехода на слабые продукты.",
  },
  {
    substance: "Каннабис", substanceColor: "#16a085", phase: "Phase 2",
    eligibility: "healthy",
    name: "Каннабис + табак: совместный приём (UCSF)",
    nct: "см. UCSF Cannabis",
    org: "UCSF", country: "США (Сан-Франциско)",
    goal: "Одновременное употребление каннабиса и табака. Фармакокинетика и последствия для здоровья.",
    recruitStart: "2025 — сейчас", recruitStatus: "active", trialEnd: "2027",
    email: "", phone: "",
    site: "clinicaltrials.ucsf.edu/cannabis",
    notes: "Двойной слепой кроссовер. Для людей, употребляющих оба вещества.",
  },

  // ── ДМТ / 5-MeO-DMT ─────────────────────────────────────────────────────
  {
    substance: "ДМТ / 5-MeO-DMT", substanceColor: "#2980b9", phase: "Phase 3 (открывается)",
    eligibility: "diag",
    name: "GH001 — Ингаляционный 5-MeO-DMT при TRD",
    nct: "Phase 3 открывается 2H 2026",
    org: "GH Research PLC (Дублин)", country: "США + международные сайты",
    goal: "Резистентная депрессия (TRD). Phase 2b: −15.5 баллов MADRS за 8 дней, 57.5% ремиссия — без психотерапии.",
    recruitStart: "2-е полугодие 2026 (FDA сняла hold январь 2026)", recruitStatus: "opening", trialEnd: "2028",
    email: "", phone: "",
    site: "ghres.com/clinical-trials",
    notes: "Ингаляция 1–3 дозы за день. Уникально: не требует психотерапии. Следить на ghres.com.",
  },
  {
    substance: "ДМТ / 5-MeO-DMT", substanceColor: "#2980b9", phase: "Phase 2b OLE + Phase 3",
    eligibility: "diag",
    name: "BPL-003 — Интраназальный 5-MeO-DMT (OLE активен)",
    nct: "NCT05870540",
    org: "AtaiBeckley Inc.", country: "США + 6 стран (38 сайтов)",
    goal: "Резистентная депрессия (TRD). OLE (открытое продление) набирает участников сейчас. Phase 3 — Q2 2026.",
    recruitStart: "OLE: сейчас; Phase 3: Q2 2026", recruitStatus: "active", trialEnd: "2028",
    email: "", phone: "",
    site: "ataibeckley.com/clinical-trials",
    notes: "FDA Breakthrough Therapy Designation. Назальный спрей, короткое окно действия ~30 мин.",
  },
  {
    substance: "ДМТ / 5-MeO-DMT", substanceColor: "#2980b9", phase: "Phase 2",
    eligibility: "diag",
    name: "VLS-01 — Буккальная плёнка DMT при TRD",
    nct: "уточнять atai.life",
    org: "atai Life Sciences", country: "США",
    goal: "Резистентная депрессия. DMT в форме буккальной плёнки (под щеку) — новый путь введения.",
    recruitStart: "2025–2026, рекрутинг идёт", recruitStatus: "active", trialEnd: "2027",
    email: "", phone: "",
    site: "atai.life/pipeline",
    notes: "Не ингаляция, не IV. Подщёчная плёнка — потенциально удобнее для клиники.",
  },
  {
    substance: "ДМТ / 5-MeO-DMT", substanceColor: "#2980b9", phase: "Phase 2",
    eligibility: "healthy",
    name: "Extended-State DMT + нейровизуализация (UCSD)",
    nct: "уточнять UCSD",
    org: "UC San Diego", country: "США (Сан-Диего)",
    goal: "Нейровизуализация при длительной IV-инфузии DMT. Что происходит в мозге при протяжённом психоделическом состоянии?",
    recruitStart: "2025–2026, рекрутинг активен", recruitStatus: "active", trialEnd: "2027",
    email: "phri-recruitment@ucsd.edu", phone: "619-432-5278",
    site: "clinicaltrials.ucsd.edu",
    notes: "Редкий дизайн: непрерывная IV-инфузия для поддержания состояния + МРТ.",
  },
  {
    substance: "ДМТ / 5-MeO-DMT", substanceColor: "#2980b9", phase: "Phase 2a",
    eligibility: "healthy",
    name: "BPL-003 EEG — нейрофизиология 5-MeO-DMT (Imperial)",
    nct: "Imperial College London / Beckley Psytech",
    org: "Imperial College London", country: "Великобритания",
    goal: "Нейрофизиология 5-MeO-DMT. Первое исследование HD-EEG электроактивности мозга при BPL-003.",
    recruitStart: "2025–2026", recruitStatus: "active", trialEnd: "2026",
    email: "", phone: "",
    site: "beckleypsytech.com",
    notes: "Здоровые добровольцы. Плацебо и 12 мг BPL-003, два визита. Рук.: Dr. Timmermann.",
  },

  // ── Ибогаин ───────────────────────────────────────────────────────────────
  {
    substance: "Ибогаин", substanceColor: "#c0392b", phase: "Phase 2 RCT",
    eligibility: "diag",
    name: "Stanford MISTIC — Ибогаин при опиоидной зависимости",
    nct: "NCT05660447",
    org: "Stanford University", country: "США (лечение в Мексике, нейровизуализация в Stanford)",
    goal: "Опиоидная зависимость. Прерывает ли ибогаин тягу к опиоидам? Лечение в Мексике + нейровизуализация в Stanford.",
    recruitStart: "2024 — сейчас", recruitStatus: "active", trialEnd: "2027",
    email: "", phone: "",
    site: "clinicaltrials.gov/study/NCT05660447",
    notes: "Участники едут в Мексику. Скрининг и оценка до/после — в Stanford. Нужна резистентная опиоидная зависимость.",
  },
  {
    substance: "Ибогаин", substanceColor: "#c0392b", phase: "Phase 2/3",
    eligibility: "diag",
    name: "DemeRx Норибогаин при опиоидной зависимости",
    nct: "уточнять DemeRx",
    org: "DemeRx Inc.", country: "США + международные сайты",
    goal: "Опиоидная зависимость. Норибогаин — метаболит ибогаина без кардиотоксичности. Первый IND-разрешённый аналог в США.",
    recruitStart: "2025–2026", recruitStatus: "active", trialEnd: "2027–2028",
    email: "", phone: "",
    site: "demeRx.com",
    notes: "Разработан специально для снижения QTc-риска. Многосайтовый дизайн.",
  },
  {
    substance: "Ибогаин", substanceColor: "#c0392b", phase: "Phase 2",
    eligibility: "diag",
    name: "Magnesium-Ibogaine для ветеранов с ПТСР/ЧМТ",
    nct: "уточнять clinicaltrials.gov",
    org: "Stanford (Nolan Williams) + партнёры", country: "США / Мексика",
    goal: "ПТСР + ЧМТ у ветеранов. Расширение исследования 2024 (Nature Medicine): 30 ветеранов показали резкое улучшение.",
    recruitStart: "2025–2026", recruitStatus: "active", trialEnd: "2027",
    email: "", phone: "",
    site: "clinicaltrials.gov → поиск: ibogaine veterans TBI",
    notes: "Протокол с магнием для снижения кардиориска. Лечение в Мексике, оценка в США.",
  },
  {
    substance: "Ибогаин", substanceColor: "#c0392b", phase: "Phase 2",
    eligibility: "diag",
    name: "Texas IMPACT — Ибогаин: аддикция, ПТСР, ЧМТ",
    nct: "в процессе регистрации",
    org: "UTHealth Houston + UTMB + 9 университетов Техаса", country: "США (Техас)",
    goal: "Аддикция, ЧМТ, ПТСР. $50 млн от штата. Крупнейшая госинвестиция в ибогаин в мире.",
    recruitStart: "Открывается в 2026 (юридический вопрос решается)", recruitStatus: "opening", trialEnd: "2028",
    email: "", phone: "",
    site: "hhs.texas.gov/services/mental-health-substance-use/ibogaine-clinical-trials",
    notes: "Рекрутинг ещё не открыт — стопор по финансированию (апрель 2026). Следить на Texas HHS.",
  },
  {
    substance: "Ибогаин", substanceColor: "#c0392b", phase: "Phase 2",
    eligibility: "diag",
    name: "Ibogaine for Alcohol Use Disorder — DemeRx/партнёры",
    nct: "уточнять",
    org: "DemeRx Inc. + партнёры", country: "США",
    goal: "Алкогольное расстройство. Норибогаин / ибогаин как первый психоделик-кандидат при алкоголизме.",
    recruitStart: "2025–2026", recruitStatus: "active", trialEnd: "2027",
    email: "", phone: "",
    site: "demeRx.com",
    notes: "Отдельный протокол от DemeRx для алкогольного расстройства.",
  },

  // ── Аяуаска ───────────────────────────────────────────────────────────────
  {
    substance: "Аяуаска", substanceColor: "#795548", phase: "Phase 2 RCT",
    eligibility: "diag",
    name: "Аяуаска vs Эскетамин при ПТСР",
    nct: "NCT07317206",
    org: "University of São Paulo", country: "Бразилия",
    goal: "ПТСР. Первое прямое сравнение аяуаски и эскетамина. Двойной слепой — редкость для аяуаски.",
    recruitStart: "Декабрь 2025 — сейчас", recruitStatus: "active", trialEnd: "Июль 2026",
    email: "", phone: "",
    site: "clinicaltrials.gov/study/NCT07317206",
    notes: "Аяуаска легальна в Бразилии. Прямое сравнение двух психоделиков — уникальный дизайн.",
  },
  {
    substance: "Аяуаска", substanceColor: "#795548", phase: "Phase 2 RCT",
    eligibility: "condition",
    name: "Аяуаска vs Эскетамин: образ тела у женщин",
    nct: "NCT07317219",
    org: "University of São Paulo", country: "Бразилия",
    goal: "Восприятие образа тела. Первый трайл аяуаски при расстройствах образа тела.",
    recruitStart: "Декабрь 2025 — сейчас", recruitStatus: "active", trialEnd: "Июль 2026",
    email: "", phone: "",
    site: "clinicaltrials.gov/study/NCT07317219",
    notes: "Тот же спонсор и дизайн, что NCT07317206. Только для женщин.",
  },
  {
    substance: "Аяуаска", substanceColor: "#795548", phase: "Phase 2 RCT",
    eligibility: "condition",
    name: "Аяуаска vs Эскетамин: предменструальные симптомы",
    nct: "NCT07317232",
    org: "University of São Paulo", country: "Бразилия",
    goal: "Предменструальные симптомы. Первый трайл аяуаски при этом показании.",
    recruitStart: "Декабрь 2025 — сейчас", recruitStatus: "active", trialEnd: "Июль 2026",
    email: "", phone: "",
    site: "clinicaltrials.gov/study/NCT07317232",
    notes: "Три трайла USP стартовали одновременно в декабре 2025. Только для женщин.",
  },

  // ── Израиль ───────────────────────────────────────────────────────────────
  {
    substance: "МДМА", substanceColor: "#e67e22", phase: "Open-label, многоцентровый",
    eligibility: "diag",
    name: "MAPS Israel — МДМА при ПТСР после 7 октября",
    nct: "уточнять mapsisrael.org / Sheba Medical Center",
    org: "MAPS Israel + Sheba Medical Center", country: "Израиль (Тель-Хашомер, Беэр-Шева)",
    goal: "ПТСР после коллективной травмы. Сравнение индивидуальной и групповой МДМА-терапии. Крупнейшее исследование психоделиков в истории Израиля.",
    recruitStart: "2025–2026, первые 20 участников одобрены Минздравом", recruitStatus: "active", trialEnd: "2027",
    email: "", phone: "",
    site: "mapsisrael.org",
    notes: "168 участников: выжившие 7 октября, ветераны ЦАХАЛ, жители пограничных районов. Два сайта: Lev Hasharon Mental Health Centre и Be'er Sheva Mental Health Centre. Спонсор: Sheba Medical Center.",
  },

  // ── Эскетамин ─────────────────────────────────────────────────────────────
  {
    substance: "Кетамин / Эскетамин", substanceColor: "#27ae60", phase: "Phase 3",
    eligibility: "diag",
    name: "AVENUE — Эскетамин при суицидальных мыслях у подростков",
    nct: "NCT07227454",
    org: "Janssen Research & Development (J&J)", country: "США + международные сайты",
    goal: "Суицидальные мысли у подростков с депрессией. Эскетамин 84 мг интраназально + стандартная помощь vs плацебо.",
    recruitStart: "2026 — сейчас", recruitStatus: "active", trialEnd: "2028",
    email: "", phone: "",
    site: "clinicaltrials.gov/study/NCT07227454",
    notes: "Подростки с острой суицидальностью. Двойной слепой, рандомизированный. Спонсор — Janssen (J&J).",
  },
  {
    substance: "Кетамин / Эскетамин", substanceColor: "#27ae60", phase: "Phase 2 RCT",
    eligibility: "diag",
    name: "KIND-PR — Эскетамин ± интеграционная терапия при TRD",
    nct: "NCT07369102",
    org: "University of Puerto Rico", country: "Пуэрто-Рико (США)",
    goal: "Резистентная депрессия. Улучшает ли психоделическая интеграционная терапия эффект эскетамина — или эскетамин работает и без неё?",
    recruitStart: "Февраль 2026 — сейчас", recruitStatus: "active", trialEnd: "Декабрь 2026",
    email: "", phone: "",
    site: "clinicaltrials.gov/study/NCT07369102",
    notes: "Уникальный дизайн: прямое сравнение эскетамина с подготовкой/интеграцией и без. Редкий вопрос для поля.",
  },
  {
    substance: "Кетамин / Эскетамин", substanceColor: "#27ae60", phase: "Phase 2",
    eligibility: "diag",
    name: "Кетамин/Эскетамин для снижения суицидального риска (MGH)",
    nct: "NCT05450432",
    org: "Massachusetts General Hospital", country: "США (Бостон)",
    goal: "Долгосрочное снижение суицидального риска при депрессии. Поддерживающий курс кетамина/эскетамина для пациентов высокого риска.",
    recruitStart: "Октябрь 2022 — сейчас", recruitStatus: "active", trialEnd: "Июнь 2026",
    email: "", phone: "",
    site: "clinicaltrials.gov/study/NCT05450432",
    notes: "MGH — один из ведущих мировых центров по суицидологии. Завершение июнь 2026 — успей подать заявку.",
  },
];

const substanceList = [...new Set(trials.map(t => t.substance))];

const STATUS = {
  active:  { label: "Рекрутинг идёт",   color: "#27ae60" },
  opening: { label: "Открывается 2026", color: "#e67e22" },
};

export default function App() {
  const [filter, setFilter] = useState("Все");
  const [expanded, setExpanded] = useState(null);
  const list = filter === "Все" ? trials : trials.filter(t => t.substance === filter);

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#0d0d0d", minHeight: "100vh", padding: "20px 12px", color: "#f0ece4", boxSizing: "border-box" }}>
      <div style={{ maxWidth: 700, margin: "0 auto 24px" }}>
        <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: "#666", marginBottom: 6 }}>@dostoevski_fm</div>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 4px", lineHeight: 1.3 }}>Клинические исследования</h1>
        <div style={{ fontSize: 12, color: "#777" }}>Активный рекрутинг · май–август 2026 · {trials.length} исследований</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
          {["Все", ...substanceList].map(s => (
            <button key={s} onClick={() => { setFilter(s); setExpanded(null); }} style={{
              padding: "5px 12px", borderRadius: 20,
              border: `1px solid ${filter === s ? "#c0392b" : "#333"}`,
              background: filter === s ? "#c0392b" : "transparent",
              color: filter === s ? "#fff" : "#999",
              cursor: "pointer", fontSize: 11, fontFamily: "Georgia, serif",
            }}>{s}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {list.map((t, i) => {
          const st = STATUS[t.recruitStatus];
          const open = expanded === i;
          return (
            <div key={i} style={{ marginBottom: 10, borderRadius: 6, overflow: "hidden", border: "1px solid #1e1e1e", background: open ? "#131313" : "#0f0f0f" }}>
              <div onClick={() => setExpanded(open ? null : i)} style={{ display: "flex", cursor: "pointer", alignItems: "stretch" }}>
                <div style={{ width: 4, flexShrink: 0, background: t.substanceColor }} />
                <div style={{ flex: 1, padding: "12px 12px 12px 14px", minWidth: 0 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 5, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: t.substanceColor }}>{t.substance}</span>
                    <span style={{ fontSize: 9, color: "#555" }}>{t.phase}</span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#f0ece4", lineHeight: 1.4, marginBottom: 4 }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: "#666", lineHeight: 1.4, marginBottom: 8 }}>{t.country} · {t.org}</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ display: "inline-block", fontSize: 10, padding: "2px 10px", borderRadius: 10, background: st.color + "20", color: st.color, border: `1px solid ${st.color}55` }}>{st.label}</span>
                    {t.eligibility === "diag" && <span style={{ display: "inline-block", fontSize: 10, padding: "2px 10px", borderRadius: 10, background: "#c0392b22", color: "#c0392b", border: "1px solid #c0392b44" }}>Нужен диагноз</span>}
                    {t.eligibility === "healthy" && <span style={{ display: "inline-block", fontSize: 10, padding: "2px 10px", borderRadius: 10, background: "#2980b922", color: "#2980b9", border: "1px solid #2980b944" }}>Здоровые добровольцы</span>}
                    {t.eligibility === "condition" && <span style={{ display: "inline-block", fontSize: 10, padding: "2px 10px", borderRadius: 10, background: "#f39c1222", color: "#f39c12", border: "1px solid #f39c1244" }}>Нужно состояние</span>}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", padding: "0 14px", flexShrink: 0 }}>
                  <span style={{ color: "#555", fontSize: 14, display: "inline-block", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                </div>
              </div>

              {open && (
                <div style={{ borderTop: "1px solid #1e1e1e", padding: "16px 16px 16px 18px" }}>
                  <Row label="Организация" value={t.org} />
                  <Row label="Страна" value={t.country} />
                  <Row label="Цель исследования" value={t.goal} />
                  <Row label="Рекрутинг открыт" value={t.recruitStart} />
                  <Row label="Завершение" value={t.trialEnd} />
                  <Row label="NCT / ID" value={t.nct} mono />
                  <div style={{ marginTop: 14 }}>
                    <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#555", marginBottom: 8 }}>Как зарегистрироваться</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {t.email && <Chip icon="✉" label={t.email} href={`mailto:${t.email}`} />}
                      {t.phone && <Chip icon="☎" label={t.phone} href={`tel:${t.phone.replace(/\D/g,"")}`} />}
                      <Chip icon="↗" label={t.site} href={t.site.startsWith("http") ? t.site : `https://${t.site}`} />
                    </div>
                  </div>
                  {t.notes && (
                    <div style={{ marginTop: 12, padding: "10px 12px", background: "#181818", borderLeft: "2px solid #2a2a2a", borderRadius: "0 4px 4px 0" }}>
                      <div style={{ fontSize: 11, color: "#888", lineHeight: 1.6 }}>💡 {t.notes}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ maxWidth: 700, margin: "24px auto 0", borderTop: "1px solid #1a1a1a", paddingTop: 16 }}>
        <div style={{ fontSize: 11, color: "#555", lineHeight: 1.7 }}>
          Только исследования с активным рекрутингом или стартом до августа 2026. Данные проверены по ClinicalTrials.gov и официальным сайтам. Статус меняется — всегда проверяйте актуальность перед обращением. Нашли ошибку или знаете об исследовании, которого здесь нет? Напишите: @dostoevski_fm
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, mono }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#555", marginBottom: 3 }}>{label}</div>
      <div style={{ fontSize: 12, color: "#ccc", lineHeight: 1.5, fontFamily: mono ? "monospace" : "Georgia, serif", wordBreak: "break-word" }}>{value}</div>
    </div>
  );
}

function Chip({ icon, label, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      display: "flex", alignItems: "center", gap: 8,
      padding: "7px 12px", background: "#181818",
      border: "1px solid #2a2a2a", borderRadius: 4,
      color: "#c0392b", textDecoration: "none", fontSize: 11,
      wordBreak: "break-all",
    }}>
      <span style={{ flexShrink: 0 }}>{icon}</span>
      <span>{label}</span>
    </a>
  );
}
