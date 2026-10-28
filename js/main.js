(() => {
  const page = document.body.dataset.page || 'home';
  const locales = ['zh', 'en', 'fr'];
  const navItems = [
    ['home', { zh: '首页', en: 'Home', fr: 'Accueil' }],
    ['about', { zh: '关于', en: 'About', fr: 'À propos' }],
    ['experience', { zh: '经历', en: 'Experience', fr: 'Expériences' }],
    ['projects', { zh: '研究项目', en: 'Projects', fr: 'Projets' }],
    ['skills', { zh: '技能', en: 'Skills', fr: 'Compétences' }],
    ['education', { zh: '教育', en: 'Education', fr: 'Formation' }],
    ['contact', { zh: '联系', en: 'Contact', fr: 'Contact' }],
  ];
  const labels = {
    zh: { skip: '跳到正文', language: '语言', menu: '打开菜单', close: '关闭菜单', footer: '以实证方法理解经济与社会问题。', download: '下载法语简历', explore: '查看研究项目', aboutLink: '了解我的背景', contactLink: '联系我', section: '部分', pageTitle: 'Jingyu SUN｜个人学术与职业作品集', notFound: '页面不存在', returnHome: '返回首页', sourceNote: '研究描述依据目前提供的摘要整理；详细论文 PDF 可用于后续核实与补充。' },
    en: { skip: 'Skip to content', language: 'Language', menu: 'Open menu', close: 'Close menu', footer: 'Empirical perspectives on economic and social questions.', download: 'Download French CV', explore: 'Explore research', aboutLink: 'About my background', contactLink: 'Get in touch', section: 'Section', pageTitle: 'Jingyu SUN | Academic & Professional Portfolio', notFound: 'Page not found', returnHome: 'Return home', sourceNote: 'Research descriptions are based on the summaries provided and can be refined against the full thesis PDFs.' },
    fr: { skip: 'Aller au contenu', language: 'Langue', menu: 'Ouvrir le menu', close: 'Fermer le menu', footer: 'Éclairer les questions économiques et sociales par l’analyse empirique.', download: 'Télécharger le CV français', explore: 'Voir les projets de recherche', aboutLink: 'Découvrir mon parcours', contactLink: 'Me contacter', section: 'Rubrique', pageTitle: 'Jingyu SUN | Portfolio académique et professionnel', notFound: 'Page introuvable', returnHome: 'Retour à l’accueil', sourceNote: 'Les descriptions de recherche s’appuient sur les résumés transmis et pourront être précisées à partir des mémoires complets.' },
  };
  const official = {
    projectTitles: [
      'La production des déchets ménagers en France — Replacer les comportements au centre des politiques publiques',
      'Évaluation des Préférences des Patients pour la Chirurgie Robotique Assistée par l’Intelligence Artificielle — Une Analyse par Expérience de Choix Discret Appliquée à la Cholécystectomie',
    ],
    email: 'jingyusun0825@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jingyu-sun',
  };

  const content = {
    zh: {
      home: {
        kicker: '经济学 · 数据 · 健康决策', title: '经济学连接数据与人工智能。',
        subtitle: '以定量经济学、计算方法与创新思维探索现实问题。',
        intro: '我是 Jingyu SUN，拥有经济学、计量经济学、健康经济学、数据科学、计算机与创新管理的跨学科背景。我关注如何将定量分析与计算思维用于理解经济行为、医疗决策和公共政策。',
        focus: '研究兴趣', interests: ['AI 与经济学', '健康经济学', '计量经济学', '数据科学', '创新管理'],
        skills: '核心工具', tools: ['计量分析', '数据分析', 'Python', 'R', 'SQL', '项目管理'],
        links: '进一步了解',
      },
      about: {
        title: '跨越经济、计算与创新。', intro: '我的学习与实践经历连接了经济学、计量方法、健康决策和计算技术。我尝试将定量分析与对个体行为、医疗选择、市场机会及公共政策的理解结合起来。',
        p2: '在研究和专业项目中，我参与过统计建模、数据整理与分析、市场研究及项目协调。我希望把实证证据转化为清晰、可用的分析，回应现实中的经济与社会问题。人工智能是我持续关注的研究方向，而不是我已具备的 AI 工程身份。',
        interestsTitle: '关注的问题', interests: ['人工智能与经济学', '健康经济学与卫生技术评估', '计量经济学与定量研究', '行为与决策', '数据科学与创新'],
      },
      experience: { title: '把方法带到不同场景。', intro: '研究、数据分析与创新项目的实践经历。每项经历均按简历资料整理。', items: [
        { role: '数据分析师（实习）', org: 'Aliive', date: '2025–2026', place: '法国，Neuilly-sur-Seine', details: ['收集并分析 Paid Ads、商业渠道、CRM 与 SEO 等获客渠道数据。', '跟踪营销活动，参与邮件营销和现有广告优化。', '在 Meta 与 Google 平台执行广告，撰写 SEO briefs 并开展竞争监测。'], skills: ['数据分析', '营销分析', '广告表现跟踪', 'CRM 与 SEO', '竞争分析'] },
        { role: '研究助理（实习）', org: 'Bureau d’Économie Théorique et Appliquée (BETA)', date: '2024', place: '法国，Nancy', details: ['研究法国生活垃圾的激励性收费机制。', '构建多尺度垃圾管理数据库，分析省、市镇及跨市镇层级数据。', '使用适合的计量方法进行定量分析，并撰写包含结果与实践建议的报告。'], skills: ['计量经济学', '定量研究', '数据管理', '公共政策分析', '研究报告'] },
        { role: '联合项目负责人', org: 'Espace Parent Numérique · CDAFAL 67', date: '2023–2024', place: '法国，Strasbourg', details: ['开展市场研究与竞争分析，组织问卷和焦点小组。', '制作用户画像、故事板与用户旅程，并组织测试和利益相关方交流。', '参与预算管理、融资和补助申请协调。'], skills: ['项目协调', '用户研究', '设计思维', '原型设计', '利益相关方沟通'] },
        { role: '市场战略项目专员', org: 'Institut du Médicament de Strasbourg', date: '2023–2024', place: '法国，Strasbourg', details: ['分析 3D 体外模型初创项目的竞争环境，制作竞争对比与 SWOT 分析。', '参加 3D 体外模型主题交流，并参与 Pitch Deck 制作。'], skills: ['市场研究', '竞争分析', 'SWOT', '创新管理', '演示材料'] },
        { role: '金融产品分析师（实习）', org: 'Hongta Securities', date: '2021', place: '中国，Kunming', details: ['学习基金与证券产品基础，参与金融机构日常业务。', '分析金融交易相关法律问题并协助处理业务争议。'], skills: ['金融产品', '业务分析', '法规意识', '问题解决'] },
      ] },
      projects: { title: '研究个体选择与公共决策。', intro: '两项硕士研究聚焦不同领域：地方环境政策与患者对新兴医疗技术的偏好。', approachTitle: '研究思路', approach: '我的研究尝试将现实中的经济与社会问题转化为可检验的实证问题，通过定量分析、计量建模与证据推理理解行为，并为公共政策、医疗决策和技术创新提供参考。', items: [
        { area: '环境经济学 · 公共政策', questionTitle: '研究问题', question: '法国居民生活垃圾的产生受哪些因素影响？经济激励和垃圾管理政策是否与垃圾减量相关？', methodTitle: '研究方法', methods: ['整合 INSEE、SINOE、BANATIC 与 ADEME 等数据来源。', '在 EPCI 与省级两个地理层级开展分析。', '使用双向固定效应模型（Two-Way Fixed Effects, 2FE）。'], findingsTitle: '主要发现', findings: ['REOM 与激励性收费与剩余生活垃圾（OMR）减少相关。', '失业率的关联随分析层级而变化。', '主要居所与独立住宅占比增加与垃圾产生量下降相关。', '混合型城乡地区呈现显著减量；纯农村地区未呈现预期的显著减量。', '资源化与焚烧的关联因分析层级不同而变化。'], conclusionTitle: '政策启示', conclusion: '研究强调，垃圾治理与居民行为、社会经济特征和地方治理环境相互关联。政策可考虑结合经济激励、行为干预（nudge）与能力提升（boost），并针对地方情境设计。结果表示统计关联，不据此宣称已证实因果关系。', skills: ['计量经济学', '面板数据', '定量研究', '环境经济学', '公共政策评估', '数据管理'] },
        { area: '健康经济学 · 患者偏好 · DCE', questionTitle: '研究问题', question: '患者如何看待 AI 辅助机器人胆囊切除术？自主程度、AI 透明度、安全性、费用和医疗数据隐私如何影响其选择？', methodTitle: '研究方法', methods: ['围绕胆囊切除术设计离散选择实验（Discrete Choice Experiment, DCE）。', '问卷研究纳入 60 名参与者。', '使用多项 Logit 与混合 Logit 模型估计偏好，并分析支付意愿（WTP）。'], findingsTitle: '主要发现', findings: ['参与者更偏好辅助型或半自主型机器人，而非完全自主手术。', '减少技术错误是受重视的属性；决策透明度与患者信任相关。', '手术费用对接受意愿呈负向影响；本研究选择权衡中，数据隐私的相对影响较小。', '估计的支付意愿反映假设选择中的权衡，不代表实际支付行为。'], conclusionTitle: '研究意义与边界', conclusion: '结果提示，接受度可能同时涉及自动化程度、安全、透明度、成本和医生参与，支持探索以人机协作为基础的应用。该研究基于 60 名参与者，不应推广为所有患者的普遍偏好。', skills: ['健康经济学', '患者偏好分析', '离散选择实验', '多项 Logit', '混合 Logit', '支付意愿分析'] },
      ] },
      skills: { title: '方法、工具与应用领域。', intro: '按能力领域整理，并区分软件工具、学科方法与研究主题。与患者偏好研究相关的方法仅在该项目语境下展示。', groups: [
        { title: '计算机与编程', kind: '编程语言与技术', items: ['Python', 'R', 'SQL', 'C', 'Java', 'HTML / CSS / JavaScript', 'Linux', 'Git / GitHub', '数据库', 'Web 开发'] },
        { title: '数据科学与分析', kind: '分析与可视化工具', items: ['数据分析与可视化', '统计分析与数据管理', 'Power BI', 'Excel / VBA', 'Stata', 'Pajek'] },
        { title: '计量经济学与定量经济学', kind: '研究方法与学科', items: ['计量建模', '定量研究', '统计建模', '经济分析', '行为经济学', '激励机制', '公共政策评估'] },
        { title: '健康经济学与医疗研究', kind: '与患者偏好研究相关', items: ['健康经济学', '卫生技术评估', '患者偏好分析', '离散选择实验（DCE）', '多项 Logit 与混合 Logit', '支付意愿（WTP）分析'] },
        { title: '商业分析与创新', kind: '分析与设计实践', items: ['市场研究', '竞争分析', 'SWOT 分析', '商业模式与计划', '设计思维', '创新管理', '营销分析', '用户研究'] },
        { title: '项目管理与沟通', kind: '协作与交付', items: ['项目协调与敏捷方法', '利益相关方沟通', '预算管理', '研究报告', '数据驱动决策', 'Microsoft Office', 'Notion / Figma / Canva / GanttProject'] },
      ], note: '工具与方法来自简历及所提供的研究项目摘要。AI 是研究兴趣方向，未将未提供的 AI 工程框架或实践经历加入技能。', languagesTitle: '语言', languages: [['中文', '母语'], ['法语', 'DALF C1'], ['英语', '流利'], ['德语', '初级']] },
      education: { title: '跨学科的学术训练。', intro: '按开始时间倒序列出，保留各项正式法语学位名称。', items: [
        { title: 'Master — Mathématiques et informatique appliquées aux sciences humaines et sociales', date: '2025 年 9 月起', org: 'Université Grenoble Alpes', place: 'Grenoble, France', detail: '算法、编程、数据库、操作系统、网络、软件工程、Web 开发、项目管理与数学。' },
        { title: 'Master — Économie de la santé', date: '2024 年 9 月—2025 年 9 月', org: 'Université Paris Cité', place: 'Malakoff, France', detail: '高级计量经济学、数据科学与卫生技术评估。' },
        { title: 'Master — Management de l’innovation, parcours Management et ingénierie de la créativité', date: '2023 年 10 月—2024 年 9 月', org: 'Université de Strasbourg (FSEG)', place: 'Strasbourg, France', detail: '创业、敏捷项目管理、数字原型、商业模式与计划、设计思维、系统方法和创新管理。' },
        { title: 'Master — Analyse et politique économique, parcours Économie et Management de l’Innovation', date: '2022 年 9 月—2024 年 9 月', org: 'Université de Strasbourg (FSEG)', place: 'Strasbourg, France', detail: '计量经济学、博弈论、公共干预、风险与保险、行为与激励、创新测量与建模。' },
        { title: 'Licence — Économie et gestion, parcours Économie quantitative', date: '2019 年 9 月—2022 年 6 月', org: 'Université de Strasbourg (FSEG)', place: 'Strasbourg, France', detail: '计量经济学、数据分析、优化、金融、微观经济学、概率统计与宏观经济学。' },
      ] },
      contact: { title: '欢迎就研究与合作联系。', intro: '如有研究机会、合作想法或专业交流，欢迎通过电子邮件或 LinkedIn 联系。', email: '发送邮件', linkedin: '打开 LinkedIn', note: '此页面不包含在线表单，不会收集访客信息。' },
    },
    en: {
      home: {
        kicker: 'Economics · Data · Health decisions', title: 'Economics meets Data & AI.',
        subtitle: 'Bridging quantitative economics, computational methods, and innovation to solve real-world problems.',
        intro: 'I am Jingyu SUN, with an interdisciplinary background in economics, econometrics, health economics, data science, computer science, and innovation management. I am interested in using quantitative analysis and computational thinking to understand economic behaviour, healthcare decisions, and public policy.',
        focus: 'Research interests', interests: ['AI & Economics', 'Health Economics', 'Econometrics', 'Data Science', 'Innovation'],
        skills: 'Core methods & tools', tools: ['Econometric analysis', 'Data analytics', 'Python', 'R', 'SQL', 'Project management'],
        links: 'Explore further',
      },
      about: {
        title: 'Across economics, computation, and innovation.', intro: 'My academic and professional path connects economics, econometric methods, healthcare decisions, and computational tools. I bring quantitative analysis together with an interest in individual behaviour, medical choices, market opportunities, and public policy.',
        p2: 'Research and project work has involved statistical modelling, data preparation and analysis, market research, and project coordination. I am interested in turning empirical evidence into clear, useful analysis of real economic and social questions. Artificial intelligence is a research interest I want to develop, not a claim of existing AI engineering expertise.',
        interestsTitle: 'Questions I follow', interests: ['Artificial Intelligence & Economics', 'Health Economics & Health Technology Assessment', 'Econometrics & Quantitative Research', 'Behaviour & Decision-Making', 'Data Science & Innovation'],
      },
      experience: { title: 'Methods applied across settings.', intro: 'Research, data analysis, and innovation project experience, based on the information in my CV.', items: [
        { role: 'Data Analyst · Internship', org: 'Aliive', date: '2025–2026', place: 'Neuilly-sur-Seine, France', details: ['Collected and analysed acquisition-channel data across paid ads, commercial activity, CRM, and SEO.', 'Tracked campaign performance and contributed to email marketing and existing-ad optimisation.', 'Set up advertising on Meta and Google, drafted SEO briefs, and conducted competitor monitoring.'], skills: ['Data analytics', 'Marketing analytics', 'Performance tracking', 'CRM & SEO', 'Competitive analysis'] },
        { role: 'Research Assistant · Internship', org: 'Bureau d’Économie Théorique et Appliquée (BETA)', date: '2024', place: 'Nancy, France', details: ['Studied incentive-based pricing for household waste in France.', 'Built multi-scale waste-management datasets and analysed departmental, municipal, and inter-municipal data.', 'Conducted quantitative analysis using suitable econometric methods and prepared a report with findings and practical recommendations.'], skills: ['Econometrics', 'Quantitative research', 'Data management', 'Public policy analysis', 'Research reporting'] },
        { role: 'Co-Project Lead', org: 'Espace Parent Numérique · CDAFAL 67', date: '2023–2024', place: 'Strasbourg, France', details: ['Conducted market and competitor research; organised surveys and focus groups.', 'Developed personas, storyboards, and user journeys; organised user testing and stakeholder sessions.', 'Contributed to budget management, funding, and grant coordination.'], skills: ['Project coordination', 'User research', 'Design thinking', 'Prototyping', 'Stakeholder engagement'] },
        { role: 'Market Strategy Project Officer', org: 'Institut du Médicament de Strasbourg', date: '2023–2024', place: 'Strasbourg, France', details: ['Reviewed the competitive landscape for a 3D in-vitro-model start-up; prepared a competitor table and SWOT analysis.', 'Participated in technical workshops on 3D in-vitro models and contributed to a pitch deck.'], skills: ['Market research', 'Competitive analysis', 'SWOT', 'Innovation management', 'Pitch materials'] },
        { role: 'Financial Products Analyst · Internship', org: 'Hongta Securities', date: '2021', place: 'Kunming, China', details: ['Learned the fundamentals of funds and securities products and contributed to day-to-day branch activity.', 'Reviewed legal questions related to financial trading and helped address business disputes.'], skills: ['Financial products', 'Business analysis', 'Regulatory awareness', 'Problem-solving'] },
      ] },
      projects: { title: 'Individual choices and public decisions.', intro: 'Two master’s research projects examine local environmental policy and patient preferences for emerging healthcare technology.', approachTitle: 'Research approach', approach: 'My research aims to translate real-world economic and societal questions into empirical analyses. By combining quantitative methods, econometric modelling, and evidence-based reasoning, I seek to understand behaviour and inform public policy, healthcare decisions, and technological innovation.', items: [
        { area: 'Environmental economics · Public policy', questionTitle: 'Research question', question: 'Which factors are associated with household waste generation in France? Are economic incentives and waste-management policies associated with waste reduction?', methodTitle: 'Methods', methods: ['Combined data sources including INSEE, SINOE, BANATIC, and ADEME.', 'Analysed data at EPCI and departmental levels.', 'Applied a two-way fixed-effects (2FE) model.'], findingsTitle: 'Main findings', findings: ['REOM and incentive-based pricing were associated with lower residual household waste (OMR).', 'The unemployment-rate association varied across analytical levels.', 'Higher shares of primary residences and detached houses were associated with lower waste generation.', 'Mixed urban–rural areas showed a significant reduction; purely rural areas did not show the expected significant reduction.', 'Associations with recovery and incineration varied by analytical level.'], conclusionTitle: 'Implications', conclusion: 'The study highlights links between waste management, household behaviour, socioeconomic characteristics, and local governance. Policy could combine economic incentives with behavioural interventions (nudges) and capacity-building (boosts), tailored to local settings. The results describe statistical associations and are not presented as established causal effects.', skills: ['Econometrics', 'Panel-data analysis', 'Quantitative research', 'Environmental economics', 'Public-policy evaluation', 'Data management'] },
        { area: 'Health economics · Patient preferences · DCE', questionTitle: 'Research question', question: 'How do patients view AI-assisted robotic cholecystectomy? How do autonomy, AI transparency, safety, cost, and health-data privacy shape their choices?', methodTitle: 'Methods', methods: ['Designed a discrete choice experiment (DCE) for cholecystectomy.', 'Surveyed 60 participants.', 'Estimated preferences with multinomial and mixed logit models and analysed willingness to pay (WTP).'], findingsTitle: 'Main findings', findings: ['Participants preferred assisted or semi-autonomous robots over fully autonomous surgery.', 'Reducing technical errors was valued; decision transparency was associated with patient trust.', 'Surgical cost had a negative effect on acceptance; data privacy had a smaller relative influence in the choice trade-offs studied.', 'Estimated willingness to pay describes hypothetical choice trade-offs, not actual purchasing behaviour.'], conclusionTitle: 'Implications and limits', conclusion: 'The findings suggest that acceptance may depend on automation, safety, transparency, cost, and clinician involvement, supporting further exploration of human–machine collaboration. The study includes 60 participants; its results should not be generalised to all patients.', skills: ['Health economics', 'Patient-preference analysis', 'Discrete choice experiments', 'Multinomial logit', 'Mixed logit', 'Willingness-to-pay analysis'] },
      ] },
      skills: { title: 'Methods, tools, and areas of application.', intro: 'Grouped by capability, with software, methods, and subject areas kept distinct. Methods related to patient-preference analysis are presented in that study context.', groups: [
        { title: 'Computer Science & Programming', kind: 'Languages & technologies', items: ['Python', 'R', 'SQL', 'C', 'Java', 'HTML / CSS / JavaScript', 'Linux', 'Git / GitHub', 'Database management', 'Web development'] },
        { title: 'Data Science & Analytics', kind: 'Analysis & visualisation', items: ['Data analysis & visualisation', 'Statistical analysis & data management', 'Power BI', 'Excel / VBA', 'Stata', 'Pajek'] },
        { title: 'Econometrics & Quantitative Economics', kind: 'Methods & subject areas', items: ['Econometric modelling', 'Quantitative research', 'Statistical modelling', 'Economic analysis', 'Behavioural economics', 'Incentive mechanisms', 'Public-policy evaluation'] },
        { title: 'Health Economics & Healthcare Research', kind: 'Related to the patient-preference study', items: ['Health economics', 'Health technology assessment', 'Patient-preference analysis', 'Discrete choice experiments (DCE)', 'Multinomial & mixed logit', 'Willingness-to-pay (WTP) analysis'] },
        { title: 'Business Analytics & Innovation', kind: 'Analysis & design practice', items: ['Market research', 'Competitive analysis', 'SWOT analysis', 'Business models & plans', 'Design thinking', 'Innovation management', 'Marketing analytics', 'User research'] },
        { title: 'Project Management & Communication', kind: 'Collaboration & delivery', items: ['Project coordination & agile methods', 'Stakeholder engagement', 'Budget management', 'Research reporting', 'Data-driven decision-making', 'Microsoft Office', 'Notion / Figma / Canva / GanttProject'] },
      ], note: 'Tools and methods are drawn from my CV and the supplied project summaries. AI is presented as a research interest; no unsubstantiated AI engineering tools or experience are claimed.', languagesTitle: 'Languages', languages: [['Chinese', 'Native'], ['French', 'DALF C1'], ['English', 'Fluent'], ['German', 'Beginner']] },
      education: { title: 'Training across disciplines.', intro: 'Listed in reverse chronological order by start date; official French degree titles are retained.', items: [
        { title: 'Master — Mathématiques et informatique appliquées aux sciences humaines et sociales', date: 'Since September 2025', org: 'Université Grenoble Alpes', place: 'Grenoble, France', detail: 'Algorithms, programming, databases, operating systems, networks, software engineering, web development, project management, and mathematics.' },
        { title: 'Master — Économie de la santé', date: 'September 2024–September 2025', org: 'Université Paris Cité', place: 'Malakoff, France', detail: 'Advanced econometrics, data science, and health technology assessment.' },
        { title: 'Master — Management de l’innovation, parcours Management et ingénierie de la créativité', date: 'October 2023–September 2024', org: 'Université de Strasbourg (FSEG)', place: 'Strasbourg, France', detail: 'Entrepreneurship, agile project management, digital prototyping, business models and plans, design thinking, systems approaches, and innovation management.' },
        { title: 'Master — Analyse et politique économique, parcours Économie et Management de l’Innovation', date: 'September 2022–September 2024', org: 'Université de Strasbourg (FSEG)', place: 'Strasbourg, France', detail: 'Econometrics, game theory, public intervention, risk and insurance, behaviour and incentives, and innovation measurement and modelling.' },
        { title: 'Licence — Économie et gestion, parcours Économie quantitative', date: 'September 2019–June 2022', org: 'Université de Strasbourg (FSEG)', place: 'Strasbourg, France', detail: 'Econometrics, data analysis, optimisation, finance, microeconomics, probability and statistics, and macroeconomics.' },
      ] },
      contact: { title: 'Open to research and professional conversations.', intro: 'For research opportunities, collaboration, or professional enquiries, please reach out by email or connect on LinkedIn.', email: 'Send an email', linkedin: 'Visit LinkedIn', note: 'This site has no contact form and does not collect visitor information.' },
    },
    fr: {
      home: {
        kicker: 'Économie · Données · Décision en santé', title: 'À la croisée de l’économie, des données et de l’IA.',
        subtitle: 'Relier économie quantitative, méthodes computationnelles et innovation pour étudier des enjeux concrets.',
        intro: 'Je suis Jingyu SUN, avec un parcours pluridisciplinaire en économie, économétrie, économie de la santé, science des données, informatique et management de l’innovation. Je m’intéresse à l’usage de l’analyse quantitative et de la pensée computationnelle pour étudier les comportements économiques, les décisions de santé et les politiques publiques.',
        focus: 'Centres d’intérêt', interests: ['IA & économie', 'Économie de la santé', 'Économétrie', 'Science des données', 'Innovation'],
        skills: 'Méthodes & outils', tools: ['Analyse économétrique', 'Analyse de données', 'Python', 'R', 'SQL', 'Gestion de projet'],
        links: 'Pour aller plus loin',
      },
      about: {
        title: 'Entre économie, informatique et innovation.', intro: 'Mon parcours académique et professionnel relie l’économie, les méthodes économétriques, les décisions de santé et les outils computationnels. J’associe l’analyse quantitative à un intérêt pour les comportements individuels, les choix médicaux, les opportunités de marché et l’action publique.',
        p2: 'Mes expériences de recherche et de projet m’ont amenée à contribuer à la modélisation statistique, à la préparation et à l’analyse de données, aux études de marché et à la coordination de projets. Je souhaite transformer des résultats empiriques en analyses claires et utiles. L’intelligence artificielle constitue un axe de recherche qui m’intéresse, sans que je revendique une expertise d’ingénierie en IA.',
        interestsTitle: 'Thématiques suivies', interests: ['Intelligence artificielle & économie', 'Économie de la santé & évaluation des technologies de santé', 'Économétrie & recherche quantitative', 'Comportements & décisions', 'Science des données & innovation'],
      },
      experience: { title: 'Des méthodes appliquées à différents contextes.', intro: 'Expériences en recherche, analyse de données et gestion de projets d’innovation, d’après les éléments du CV.', items: [
        { role: 'Analyste de données · stage', org: 'Aliive', date: '2025–2026', place: 'Neuilly-sur-Seine, France', details: ['Collecte et analyse de données sur les leviers d’acquisition : paid ads, commercial, CRM et SEO.', 'Suivi des performances des campagnes et contribution à l’optimisation des emails et annonces existantes.', 'Mise en place de publicités Meta et Google, rédaction de briefs SEO et veille concurrentielle.'], skills: ['Analyse de données', 'Marketing analytique', 'Suivi de performance', 'CRM & SEO', 'Analyse concurrentielle'] },
        { role: 'Assistante de recherche · stage', org: 'Bureau d’Économie Théorique et Appliquée (BETA)', date: '2024', place: 'Nancy, France', details: ['Étude des modalités de tarification incitative des déchets ménagers en France.', 'Création de bases de données multi-échelles et analyse des données départementales, communales et intercommunales.', 'Analyses quantitatives avec des méthodes économétriques adaptées et rédaction d’un rapport assorti de résultats et recommandations pratiques.'], skills: ['Économétrie', 'Recherche quantitative', 'Gestion de données', 'Analyse des politiques publiques', 'Rédaction de recherche'] },
        { role: 'Co-porteuse de projet', org: 'Espace Parent Numérique · CDAFAL 67', date: '2023–2024', place: 'Strasbourg, France', details: ['Études de marché et analyses concurrentielles ; organisation de sondages et de focus groups.', 'Conception de personas, storyboards et parcours utilisateurs ; organisation de tests et d’échanges avec les parties prenantes.', 'Contribution au suivi du budget, à la recherche de financements et à la coordination des subventions.'], skills: ['Coordination de projet', 'Recherche utilisateur', 'Design thinking', 'Prototypage', 'Parties prenantes'] },
        { role: 'Chargée de mission · stratégie de marché', org: 'Institut du Médicament de Strasbourg', date: '2023–2024', place: 'Strasbourg, France', details: ['Analyse de l’environnement concurrentiel d’un projet de modèles 3D in vitro ; réalisation d’un tableau comparatif et d’une analyse SWOT.', 'Participation à des ateliers de découverte des modèles 3D in vitro et à l’élaboration d’un pitch deck.'], skills: ['Étude de marché', 'Analyse concurrentielle', 'SWOT', 'Management de l’innovation', 'Supports de présentation'] },
        { role: 'Analyste en produits financiers · stage', org: 'Hongta Securities', date: '2021', place: 'Kunming, Chine', details: ['Découverte des fonds et produits de valeurs mobilières et contribution aux activités quotidiennes d’une agence.', 'Analyse de questions juridiques liées au commerce financier et appui au traitement de différends commerciaux.'], skills: ['Produits financiers', 'Analyse d’activité', 'Cadre réglementaire', 'Résolution de problèmes'] },
      ] },
      projects: { title: 'Choix individuels et décisions publiques.', intro: 'Deux travaux de master portent sur les politiques environnementales locales et les préférences des patients face aux technologies de santé émergentes.', approachTitle: 'Démarche de recherche', approach: 'Mes recherches visent à transformer des problématiques économiques et sociétales concrètes en analyses empiriques. En combinant méthodes quantitatives, modélisation économétrique et raisonnement fondé sur les données, je cherche à mieux comprendre les comportements et à éclairer les décisions publiques, sanitaires et technologiques.', items: [
        { area: 'Économie de l’environnement · Politiques publiques', questionTitle: 'Question de recherche', question: 'Quels facteurs sont associés à la production de déchets ménagers en France ? Les incitations économiques et les politiques de gestion des déchets sont-elles associées à une réduction des déchets ?', methodTitle: 'Méthodes', methods: ['Croisement de sources comprenant INSEE, SINOE, BANATIC et ADEME.', 'Analyses aux niveaux des EPCI et des départements.', 'Modèle à effets fixes bidirectionnels (Two-Way Fixed Effects, 2FE).'], findingsTitle: 'Principaux résultats', findings: ['La REOM et la tarification incitative sont associées à une baisse des ordures ménagères résiduelles (OMR).', 'L’association avec le taux de chômage varie selon le niveau d’analyse.', 'Une part plus élevée de résidences principales et de maisons individuelles est associée à une production de déchets plus faible.', 'Les espaces mixtes urbains-ruraux présentent une baisse significative ; aucune baisse significative attendue n’apparaît pour les espaces exclusivement ruraux.', 'Les liens avec la valorisation et l’incinération varient selon le niveau d’analyse.'], conclusionTitle: 'Enseignements pour l’action publique', conclusion: 'L’étude souligne les liens entre gestion des déchets, comportements des ménages, caractéristiques socio-économiques et gouvernance locale. Les politiques peuvent associer incitations économiques, interventions comportementales (nudge) et renforcement des capacités (boost), en tenant compte des contextes locaux. Les résultats décrivent des associations statistiques et ne sont pas présentés comme des effets causaux établis.', skills: ['Économétrie', 'Données de panel', 'Recherche quantitative', 'Économie de l’environnement', 'Évaluation des politiques publiques', 'Gestion de données'] },
        { area: 'Économie de la santé · Préférences · DCE', questionTitle: 'Question de recherche', question: 'Comment les patients perçoivent-ils la cholécystectomie robotique assistée par l’IA ? Quel rôle jouent l’autonomie, la transparence, la sécurité, le coût et la confidentialité des données ?', methodTitle: 'Méthodes', methods: ['Conception d’une expérience de choix discret (DCE) appliquée à la cholécystectomie.', 'Enquête auprès de 60 participants.', 'Estimation des préférences par modèles Logit multinomial et Logit mixte, avec analyse de la disposition à payer (WTP).'], findingsTitle: 'Principaux résultats', findings: ['Les participants préfèrent les robots d’assistance ou semi-autonomes à une chirurgie totalement autonome.', 'La réduction des erreurs techniques est valorisée ; la transparence des décisions est associée à la confiance des patients.', 'Le coût de l’intervention réduit l’acceptabilité ; la confidentialité des données a un poids relatif plus faible dans les arbitrages étudiés.', 'La disposition à payer estimée décrit des arbitrages hypothétiques et non un comportement de paiement réel.'], conclusionTitle: 'Portée et limites', conclusion: 'Les résultats suggèrent que l’acceptabilité peut dépendre de l’automatisation, de la sécurité, de la transparence, du coût et de la place du médecin, et invitent à étudier les usages fondés sur la coopération humain-machine. L’étude porte sur 60 participants ; ses résultats ne peuvent être généralisés à l’ensemble des patients.', skills: ['Économie de la santé', 'Analyse des préférences', 'Expériences de choix discret', 'Logit multinomial', 'Logit mixte', 'Disposition à payer'] },
      ] },
      skills: { title: 'Méthodes, outils et champs d’application.', intro: 'Les compétences sont organisées par domaine, en distinguant outils logiciels, méthodes et champs disciplinaires. Les méthodes d’analyse des préférences sont rattachées à l’étude concernée.', groups: [
        { title: 'Informatique & programmation', kind: 'Langages & technologies', items: ['Python', 'R', 'SQL', 'C', 'Java', 'HTML / CSS / JavaScript', 'Linux', 'Git / GitHub', 'Bases de données', 'Développement web'] },
        { title: 'Science des données & analyse', kind: 'Analyse & visualisation', items: ['Analyse & visualisation de données', 'Analyse statistique & gestion des données', 'Power BI', 'Excel / VBA', 'Stata', 'Pajek'] },
        { title: 'Économétrie & économie quantitative', kind: 'Méthodes & domaines', items: ['Modélisation économétrique', 'Recherche quantitative', 'Modélisation statistique', 'Analyse économique', 'Économie comportementale', 'Mécanismes incitatifs', 'Évaluation des politiques publiques'] },
        { title: 'Économie de la santé & recherche en santé', kind: 'En lien avec l’étude des préférences', items: ['Économie de la santé', 'Évaluation des technologies de santé', 'Analyse des préférences des patients', 'Expériences de choix discret (DCE)', 'Logit multinomial & mixte', 'Analyse de la disposition à payer (WTP)'] },
        { title: 'Analyse des activités & innovation', kind: 'Analyse & conception', items: ['Études de marché', 'Analyse concurrentielle', 'SWOT', 'Modèles et plans d’affaires', 'Design thinking', 'Management de l’innovation', 'Marketing analytique', 'Recherche utilisateur'] },
        { title: 'Gestion de projet & communication', kind: 'Coordination & livrables', items: ['Coordination de projet & méthodes agiles', 'Parties prenantes', 'Gestion budgétaire', 'Rapports de recherche', 'Décision fondée sur les données', 'Microsoft Office', 'Notion / Figma / Canva / GanttProject'] },
      ], note: 'Les outils et méthodes sont issus du CV et des résumés de projets transmis. L’IA est présentée comme un centre d’intérêt de recherche ; aucune compétence d’ingénierie IA non documentée n’est revendiquée.', languagesTitle: 'Langues', languages: [['Chinois', 'Langue maternelle'], ['Français', 'DALF C1'], ['Anglais', 'Courant'], ['Allemand', 'Débutant']] },
      education: { title: 'Une formation pluridisciplinaire.', intro: 'Les formations sont classées par date de début décroissante et leurs intitulés officiels en français sont conservés.', items: [
        { title: 'Master — Mathématiques et informatique appliquées aux sciences humaines et sociales', date: 'Depuis septembre 2025', org: 'Université Grenoble Alpes', place: 'Grenoble, France', detail: 'Algorithmique, programmation, bases de données, systèmes d’exploitation, réseaux, génie logiciel, développement web, gestion de projet et mathématiques.' },
        { title: 'Master — Économie de la santé', date: 'Septembre 2024–septembre 2025', org: 'Université Paris Cité', place: 'Malakoff, France', detail: 'Économétrie avancée, data science et évaluation des technologies de santé.' },
        { title: 'Master — Management de l’innovation, parcours Management et ingénierie de la créativité', date: 'Octobre 2023–septembre 2024', org: 'Université de Strasbourg (FSEG)', place: 'Strasbourg, France', detail: 'Entrepreneuriat, gestion de projet agile, prototypage digital, business model et plan, design thinking, approche systémique et management de l’innovation.' },
        { title: 'Master — Analyse et politique économique, parcours Économie et Management de l’Innovation', date: 'Septembre 2022–septembre 2024', org: 'Université de Strasbourg (FSEG)', place: 'Strasbourg, France', detail: 'Économétrie, théorie des jeux, intervention publique, risques et assurances, comportements et incitations, mesure et modélisation de l’innovation.' },
        { title: 'Licence — Économie et gestion, parcours Économie quantitative', date: 'Septembre 2019–juin 2022', org: 'Université de Strasbourg (FSEG)', place: 'Strasbourg, France', detail: 'Économétrie, analyse de données, optimisation, finance, microéconomie, probabilités et statistiques, macroéconomie.' },
      ] },
      contact: { title: 'Échangeons autour de la recherche et de l’innovation.', intro: 'Pour une opportunité de recherche, une collaboration ou un échange professionnel, vous pouvez m’écrire ou me retrouver sur LinkedIn.', email: 'M’écrire', linkedin: 'Voir LinkedIn', note: 'Ce site ne comporte pas de formulaire et ne collecte pas de données de visiteur.' },
    },
  };

  const labelsByPage = {
    about: { zh: ['关于我', '个人简介'], en: ['About', 'Profile'], fr: ['À propos', 'Profil'] },
    experience: { zh: ['经历', '工作与项目经历'], en: ['Experience', 'Work & project experience'], fr: ['Expériences', 'Expériences professionnelles et projets'] },
    projects: { zh: ['研究项目', '硕士论文'], en: ['Research', 'Master’s research'], fr: ['Recherche', 'Travaux de master'] },
    skills: { zh: ['技能', '能力与工具'], en: ['Skills', 'Methods & tools'], fr: ['Compétences', 'Méthodes & outils'] },
    education: { zh: ['教育', '教育经历'], en: ['Education', 'Academic background'], fr: ['Formation', 'Parcours académique'] },
    contact: { zh: ['联系', '联系方式'], en: ['Contact', 'Contact details'], fr: ['Contact', 'Coordonnées'] },
  };

  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const asList = (items, className = 'plain-list') => `<ul class="${className}">${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
  const chips = (items, className = 'chips') => `<div class="${className}">${items.map((item) => `<span>${esc(item)}</span>`).join('')}</div>`;

  const pageMarkup = (locale) => {
    const t = content[locale];
    if (page === 'home') return `
      <section class="home-hero">
        <div class="home-copy"><p class="eyebrow"><span class="eyebrow-dot"></span>${esc(t.home.kicker)}</p>
          <h1>${esc(t.home.title)}</h1><p class="home-subtitle">${esc(t.home.subtitle)}</p><p class="home-intro">${esc(t.home.intro)}</p>
          <div class="home-actions"><a class="button button-dark" href="projects.html">${esc(labels[locale].explore)} <span aria-hidden="true">↗</span></a><a class="button button-outline" href="assets/documents/CV_Jingyu_SUN_Public.pdf" download>${esc(labels[locale].download)} <span aria-hidden="true">↓</span></a></div>
          <h2 class="minor-heading">${esc(t.home.focus)}</h2>${chips(t.home.interests, 'chips interest-chips')}
          <h2 class="minor-heading tools-heading">${esc(t.home.skills)}</h2>${chips(t.home.tools, 'chips core-tools')}
          <div class="home-links"><a href="about.html">${esc(labels[locale].aboutLink)} <span>↗</span></a><a href="contact.html">${esc(labels[locale].contactLink)} <span>↗</span></a></div>
        </div>
        <figure class="home-portrait"><div class="portrait-frame"><img src="assets/images/jingyu-sun.webp" alt="${locale === 'zh' ? 'Jingyu SUN 的肖像' : locale === 'en' ? 'Portrait of Jingyu SUN' : 'Portrait de Jingyu SUN'}" width="1000" height="1500" fetchpriority="high"></div><figcaption><strong>Jingyu SUN</strong><span>${locale === 'zh' ? '经济学 × 数据' : locale === 'en' ? 'Economics × Data' : 'Économie × données'}</span></figcaption><span class="portrait-index">45° 11′ N<br>5° 43′ E</span></figure>
      </section><div class="home-note"><span>01 — 07</span><span>${esc(t.home.links)}</span><a href="about.html" aria-label="${esc(labels[locale].aboutLink)}">↓</a></div>`;

    if (page === 'about') return `<section class="page-intro"><p class="eyebrow">01 / ${esc(labelsByPage.about[locale][0])}</p><h1>${esc(t.about.title)}</h1><p class="lead">${esc(t.about.intro)}</p><p>${esc(t.about.p2)}</p></section><section class="content-section"><h2>${esc(t.about.interestsTitle)}</h2>${chips(t.about.interests, 'topic-list')}</section>`;

    if (page === 'experience') return `<section class="page-intro"><p class="eyebrow">02 / ${esc(labelsByPage.experience[locale][0])}</p><h1>${esc(t.experience.title)}</h1><p class="lead">${esc(t.experience.intro)}</p></section><section class="experience-list">${t.experience.items.map((item, i) => `<article class="experience-item"><div class="item-number">0${i + 1}</div><div class="item-content"><p class="item-meta">${esc(item.date)} · ${esc(item.place)}</p><h2>${esc(item.role)}</h2><p class="item-org">${esc(item.org)}</p>${asList(item.details)}<h3 class="skill-label">${locale === 'zh' ? '相关技能' : locale === 'en' ? 'Related skills' : 'Compétences associées'}</h3>${chips(item.skills)}</div></article>`).join('')}</section>`;

    if (page === 'projects') return `<section class="page-intro"><p class="eyebrow">03 / ${esc(labelsByPage.projects[locale][0])}</p><h1>${esc(t.projects.title)}</h1><p class="lead">${esc(t.projects.intro)}</p></section><section class="approach"><p class="eyebrow">${esc(t.projects.approachTitle)}</p><p>${esc(t.projects.approach)}</p></section><section class="project-list">${t.projects.items.map((item, i) => `<article class="research-project"><header class="project-header"><span class="item-number">0${i + 1}</span><p class="project-area">${esc(item.area)}</p></header><h2 lang="fr">${esc(official.projectTitles[i])}</h2><div class="project-detail-grid"><section><h3>${esc(item.questionTitle)}</h3><p>${esc(item.question)}</p></section><section><h3>${esc(item.methodTitle)}</h3>${asList(item.methods)}</section><section><h3>${esc(item.findingsTitle)}</h3>${asList(item.findings)}</section><section><h3>${esc(item.conclusionTitle)}</h3><p>${esc(item.conclusion)}</p></section></div><h3 class="skill-label">${locale === 'zh' ? '研究技能' : locale === 'en' ? 'Research skills' : 'Compétences mobilisées'}</h3>${chips(item.skills)}</article>`).join('')}</section><p class="source-note">${esc(labels[locale].sourceNote)}</p>`;

    if (page === 'skills') return `<section class="page-intro"><p class="eyebrow">04 / ${esc(labelsByPage.skills[locale][0])}</p><h1>${esc(t.skills.title)}</h1><p class="lead">${esc(t.skills.intro)}</p></section><section class="skill-grid">${t.skills.groups.map((group, i) => `<article class="skill-card"><p class="item-number">0${i + 1}</p><p class="skill-kind">${esc(group.kind)}</p><h2>${esc(group.title)}</h2>${chips(group.items, 'skill-items')}</article>`).join('')}</section><p class="source-note">${esc(t.skills.note)}</p><section class="language-panel"><h2>${esc(t.skills.languagesTitle)}</h2><div>${t.skills.languages.map(([name, level]) => `<p><strong>${esc(name)}</strong><span>${esc(level)}</span></p>`).join('')}</div></section>`;

    if (page === 'education') return `<section class="page-intro"><p class="eyebrow">05 / ${esc(labelsByPage.education[locale][0])}</p><h1>${esc(t.education.title)}</h1><p class="lead">${esc(t.education.intro)}</p></section><section class="education-list">${t.education.items.map((item, i) => `<article class="education-item"><span class="education-dot" aria-hidden="true"></span><p class="item-meta">${esc(item.date)}</p><h2 lang="fr">${esc(item.title)}</h2><p class="item-org">${esc(item.org)} <span>· ${esc(item.place)}</span></p><p class="education-detail">${esc(item.detail)}</p></article>`).join('')}</section>`;

    if (page === 'contact') return `<section class="contact-page"><p class="eyebrow">06 / ${esc(labelsByPage.contact[locale][0])}</p><h1>${esc(t.contact.title)}</h1><p class="lead">${esc(t.contact.intro)}</p><div class="contact-card"><a href="mailto:${esc(official.email)}"><span>EMAIL</span><strong>${esc(official.email)}</strong><em>${esc(t.contact.email)} ↗</em></a><a href="${esc(official.linkedin)}" target="_blank" rel="noopener noreferrer"><span>LINKEDIN</span><strong>linkedin.com/in/jingyu-sun</strong><em>${esc(t.contact.linkedin)} ↗</em></a></div><p class="source-note">${esc(t.contact.note)}</p></section>`;

    return `<section class="page-intro"><p class="eyebrow">404</p><h1>${esc(labels[locale].notFound)}</h1><a class="button button-dark" href="index.html">${esc(labels[locale].returnHome)} ↗</a></section>`;
  };

  const getLanguage = () => {
    try {
      const saved = localStorage.getItem('portfolio-language');
      if (locales.includes(saved)) return saved;
    } catch { /* Storage can be unavailable. */ }
    return 'fr';
  };

  const render = (locale) => {
    const safeLocale = locales.includes(locale) ? locale : 'fr';
    document.documentElement.lang = safeLocale;
    const main = document.getElementById('page-content');
    main.innerHTML = pageMarkup(safeLocale);
    const t = content[safeLocale];
    const currentTitle = page === 'home' ? t.home.title : (labelsByPage[page]?.[safeLocale]?.[1] || labels[safeLocale].notFound);
    document.title = page === 'home' ? `${labels[safeLocale].pageTitle} — ${currentTitle}` : `${currentTitle} | Jingyu SUN`;
    const description = page === 'home' ? t.home.intro : (t[page]?.intro || t[page]?.title || labels[safeLocale].pageTitle);
    document.querySelector('meta[name="description"]')?.setAttribute('content', description.slice(0, 300));
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description.slice(0, 300));
    document.querySelectorAll('[data-copy]').forEach((node) => {
      const key = node.dataset.copy;
      if (labels[safeLocale][key]) node.textContent = labels[safeLocale][key];
    });
    document.querySelectorAll('.nav-links a').forEach((link) => {
      const item = navItems.find(([key]) => `${key}.html` === link.getAttribute('href') || (key === 'home' && link.getAttribute('href') === 'index.html'));
      if (!item) return;
      link.textContent = item[1][safeLocale];
      if (item[0] === page) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    });
    const skipLink = document.querySelector('.skip-link');
    skipLink.textContent = labels[safeLocale].skip;
    const siteNav = document.getElementById('site-navigation');
    siteNav.setAttribute('aria-label', labels[safeLocale].section);
    document.querySelector('.site-header .brand')?.setAttribute('aria-label', `Jingyu SUN — ${navItems[0][1][safeLocale]}`);
    document.querySelector('#site-footer p').textContent = labels[safeLocale].footer;
    document.querySelector('#site-footer .back-top').setAttribute('aria-label', labels[safeLocale].returnHome);
    const languageButton = document.getElementById('language-toggle');
    languageButton.textContent = safeLocale === 'zh' ? 'EN' : safeLocale === 'en' ? 'FR' : '中';
    languageButton.setAttribute('aria-label', `${labels[safeLocale].language}: ${safeLocale === 'zh' ? 'English' : safeLocale === 'en' ? 'Français' : '中文'}`);
    const menuButton = document.getElementById('menu-toggle');
    menuButton.setAttribute('aria-label', menuButton.getAttribute('aria-expanded') === 'true' ? labels[safeLocale].close : labels[safeLocale].menu);
  };

  const shell = document.getElementById('site-header');
  shell.innerHTML = `<a class="brand" href="index.html" aria-label="Jingyu SUN — ${navItems[0][1].fr}"><span class="brand-mark">JS</span><span>Jingyu SUN</span></a><button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation"><span class="menu-icon" aria-hidden="true"></span><span class="sr-only" data-copy="menu">${labels.fr.menu}</span></button><nav class="site-nav" id="site-navigation" aria-label="${labels.fr.section}"><div class="nav-links">${navItems.map(([key]) => `<a href="${key === 'home' ? 'index.html' : `${key}.html`}">${navItems.find(([name]) => name === key)[1].fr}</a>`).join('')}</div><button id="language-toggle" class="language-toggle" type="button" aria-label="${labels.fr.language}">中</button></nav>`;
  document.getElementById('site-footer').innerHTML = `<a class="brand footer-brand" href="index.html"><span class="brand-mark">JS</span><span>Jingyu SUN</span></a><p>${labels.fr.footer}</p><span>© ${new Date().getFullYear()} Jingyu SUN</span><a class="back-top" href="#top" aria-label="${labels.fr.returnHome}">↑</a>`;

  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-navigation');
  const setMenu = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
    menuButton.setAttribute('aria-label', open ? labels[getLanguage()].close : labels[getLanguage()].menu);
  };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
  document.getElementById('language-toggle').addEventListener('click', () => {
    const current = getLanguage();
    const next = current === 'zh' ? 'en' : current === 'en' ? 'fr' : 'zh';
    try { localStorage.setItem('portfolio-language', next); } catch { /* Language still changes for this page view. */ }
    render(next);
  });
  render(getLanguage());
})();
