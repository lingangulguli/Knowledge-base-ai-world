/* ========== DATA ========== */
const ARTICLES = [
  {
    id: 'a1', featured: true, hot: true,
    title: 'Sora 游戏化应用指南：从文字到 3A 级过场动画',
    desc: '通过实际项目案例，详解如何将 Sora 视频生成能力集成到游戏过场动画制作流水线中，覆盖提示词设计、风格控制、与引擎对接的完整链路，实测效率提升约 60%。',
    tags: [['深度专题','blue'],['团队经验','green']],
    category: '技术美术',
    author: '王明', dept: '引擎技术组', time: '3 天前', views: '15.8w',
    content: '本文从一线项目实践出发，系统拆解了 Sora 在游戏过场动画制作中的完整落地流程。涵盖提示词工程的最佳实践、风格锚定策略（Style Reference）、分镜到视频的映射方法，以及与 Unreal Engine 5 渲染管线的对接方案。在某 3A 项目的实际测试中，过场动画的制作周期从平均 2 周缩短至 3 天，质量达到可交付标准。文章还讨论了当前技术局限性和未来演进方向。'
  },
  {
    id: 'a2', featured: true,
    title: '司内自研「幻境」模型 2.0 开启内测：场景生成提效 400%',
    desc: '「幻境」2.0 版本在游戏场景生成质量和速度上均实现大幅提升。本文深入解读其技术升级、适用场景及内测接入方式。',
    tags: [['内部动态','amber'],['技术前沿','blue']],
    category: '开发',
    author: 'AI 平台组', dept: '', time: '42 分钟前', views: '8.4w',
    content: '幻境 2.0 基于全新的扩散模型架构，针对游戏场景的三维一致性和可编辑性进行了深度优化。在标准评测中，场景生成速度提升 4 倍，FID 分数提升 35%。支持从文本描述直接生成可导入引擎的 3D 场景，并保持风格一致性。内测通道已开放，本文提供完整的接入指南和 API 文档链接。'
  },
  {
    id: 'a3',
    title: 'AI 辅助 3D 模型贴图自动化流水线搭建实录',
    desc: '从 Stable Diffusion 到 ControlNet，一套低成本落地的贴图自动化方案，附完整配置与踩坑记录。',
    tags: [['个人沉淀','green'],['美术','gray']],
    category: '技术美术',
    author: '张小强', dept: '美术中心-技术组', time: '1 周前', views: '3.2w',
    content: '本文记录了作者在《代号：无尽》项目中搭建 AI 贴图自动化流水线的完整过程。方案以 Stable Diffusion + ControlNet 为核心，配合自训练 LoRA 模型保证风格统一。覆盖了环境配置、模型微调、批量处理脚本、质量检查流程等环节。最终实现单个角色贴图制作时间从 4 小时降至 40 分钟。'
  },
  {
    id: 'a4',
    title: '英伟达 ACE 平台更新：赋予 NPC 动态情感与记忆系统',
    desc: '解读 NVIDIA ACE 最新更新对游戏 NPC 交互能力的提升，以及可能的内部集成路径评估。',
    tags: [['技术前沿','blue'],['NPC','gray']],
    category: '策划',
    author: '陈航', dept: '技术中台', time: '2 小时前', views: '12w',
    content: 'NVIDIA ACE（Avatar Cloud Engine）最新版本引入了长期记忆模块和情感状态机，使 NPC 能够在多轮对话中保持上下文一致性，并根据玩家行为动态调整情感反应。本文评估了该技术在腾讯游戏项目中的适用性，分析了与现有对话系统的集成路径、延迟和成本考量。'
  },
  {
    id: 'a5',
    title: '基于 LLM 的大型 C++ 项目代码审查实践',
    desc: '结合大语言模型与静态分析工具，在引擎级 C++ 代码库中实现高效代码审查的方案与成果分享。',
    tags: [['新征文','rose'],['工具','gray']],
    category: '开发',
    author: '李工', dept: '技术中台-引擎组', time: '3 天前', views: '4.7w',
    content: '在《星际战线》引擎代码库（200万行 C++）中，我们尝试将 LLM 集成到代码审查流程。方案结合 Claude/GPT-4 与 clang-tidy 静态分析，在 CI/CD 管线中自动标注潜在问题。实测 3 个月，LLM 发现的有效问题占总审查反馈的 23%，误报率控制在 15% 以下。本文详细记录了技术方案、Prompt 工程和评估方法。'
  },
  {
    id: 'a6',
    title: 'Midjourney v6.1 发布：文字渲染修复，游戏 UI 设计利器',
    desc: 'v6.1 在文字渲染精度和风格一致性上表现优异，特别适合游戏 UI 和概念设计的快速原型场景。',
    tags: [['工具更新','amber']],
    category: '技术美术',
    author: '周莉', dept: '产品设计', time: '1 小时前', views: '6.2w',
    content: 'Midjourney v6.1 在文字渲染方面的改进显著——文字准确率从 v6.0 的约 60% 提升至 90% 以上。对于游戏 UI 概念设计场景，这意味着可以直接在生成图中嵌入按钮文字、HUD 元素等。本文通过对比测试展示了 v6.1 的具体改进，并分享了在游戏 UI 设计工作流中的最佳实践。'
  },
  {
    id: 'a7',
    title: '用 AI Agent 自动生成支线任务：策划工作流的变革',
    desc: '在开放世界项目中，通过 AI Agent 自动生成符合世界观的支线任务内容，策划效率提升 3 倍。',
    tags: [['团队经验','green'],['策划','gray']],
    category: '策划',
    author: '赵一鸣', dept: '游戏策划', time: '5 天前', views: '5.1w',
    content: '本文分享了在开放世界 RPG 项目中使用 AI Agent 辅助支线任务设计的完整经验。通过构建包含世界观、角色关系、地理信息的知识库，结合 ReAct 框架的 Agent，实现从任务概念到可执行设计文档的自动生成。策划只需审核和微调，效率提升 3 倍以上。'
  },
  {
    id: 'a8',
    title: '游戏语音合成技术选型：TTS 方案横向对比与落地建议',
    desc: '针对游戏场景，对比 ElevenLabs、Azure TTS、XTTS 等方案在中文效果、延迟和成本方面的表现。',
    tags: [['深度专题','blue'],['音频','gray']],
    category: '开发',
    author: '孙磊', dept: '音频技术', time: '1 周前', views: '2.8w',
    content: '游戏 NPC 语音合成是 AI 落地的重要方向。本文从中文语音质量、推理延迟、部署成本、情感表达四个维度，横向对比了 ElevenLabs、Azure Neural TTS、Coqui XTTS、MeloTTS 等方案。结合不同游戏类型（MMO、单机 RPG、手游）的需求差异，给出选型建议和部署架构参考。'
  },
  {
    id: 'a9',
    title: 'AI 驱动的游戏测试自动化：从功能测试到玩家行为模拟',
    desc: '利用强化学习和 LLM 构建智能测试 Agent，自动发现游戏中的 Bug 和平衡性问题。',
    tags: [['新征文','rose'],['QA','gray']],
    category: '开发',
    author: '刘洋', dept: 'QA 技术组', time: '4 天前', views: '3.4w',
    content: '传统游戏测试依赖大量人工，覆盖率和效率都有瓶颈。本文介绍了一种结合 RL Agent 和 LLM 的混合测试方案：RL Agent 负责自动探索游戏空间发现异常状态，LLM 负责理解游戏逻辑并生成有意义的测试用例。在实际项目中已发现 17 个人工测试遗漏的 Bug。'
  },
  {
    id: 'a10',
    title: '游戏运营中的 AI 个性化推荐系统实践',
    desc: '基于玩家行为数据和 LLM 理解能力，构建精准的游戏内容个性化推荐系统。',
    tags: [['团队经验','green'],['运营','gray']],
    category: '游戏运营',
    author: '吴婷', dept: '运营策略组', time: '6 天前', views: '4.0w',
    content: '个性化推荐是提升玩家留存的关键。本文分享了将 LLM 引入推荐系统的实践经验——通过让 LLM 理解玩家的游戏行为模式和偏好，生成更具解释性的推荐理由，并在 A/B 测试中验证了点击率和付费转化率的显著提升。'
  },
  {
    id: 'a11',
    title: 'AI 辅助游戏商业化设计：动态定价与个性化活动',
    desc: '探讨 AI 在游戏付费设计中的应用，包括动态定价模型和个性化运营活动的自动生成。',
    tags: [['深度专题','blue'],['商业化','gray']],
    category: '商业化',
    author: '钱锋', dept: '商业化产品组', time: '1 周前', views: '3.6w',
    content: '游戏商业化领域的 AI 应用正在快速发展。本文从动态定价、个性化礼包生成、付费路径优化三个方向，分享了 AI 技术的落地经验。重点介绍了如何利用强化学习优化定价策略，以及用 LLM 自动生成针对不同玩家群体的运营活动方案。'
  }
];

const SKILLS = [
  {
    id: 's1', letter: 'G', color: 'linear-gradient(135deg,#2563EB,#3B82F6)',
    name: 'Game Asset Generator', source: 'Knot', sourceClass: 'source-knot',
    desc: '基于 Stable Diffusion 的游戏资产批量生成工具，支持角色、道具、场景贴图的多风格输出与参数调优。',
    category: '技术美术',
    downloads: '2.3 万', stars: 186, version: 'v2.1.0',
    fullDesc: '为游戏美术团队打造的 AI 资产生成工具链。支持通过文本描述或参考图片批量生成游戏角色、道具、场景贴图。内置多种游戏美术风格预设（卡通渲染、写实、像素风等），支持 LoRA 模型加载实现自定义风格。输出格式兼容 Unity/UE5 的标准贴图规格。',
    sourceDetail: '来源于 Knot MCP 市场 (knot.woa.com)'
  },
  {
    id: 's2', letter: 'N', color: 'linear-gradient(135deg,#7C3AED,#A855F7)',
    name: 'NPC Dialogue Engine', source: 'SkillHub', sourceClass: 'source-skillhub',
    desc: '为游戏 NPC 提供上下文感知的对话生成能力，支持记忆管理、情感状态和世界观一致性检查。',
    category: '策划',
    downloads: '1.8 万', stars: 312, version: 'v1.4.2',
    fullDesc: '一个面向游戏 NPC 的对话生成引擎。基于 LLM 实现上下文感知的多轮对话，支持角色性格设定、长期记忆、情感状态机和世界观知识库注入。可通过 API 或 SDK 集成到 Unity/UE5 项目中，提供低延迟的实时对话生成。',
    sourceDetail: '来源于 SkillHub (skillhub.tencent.com)，数据由 ClawHub 生态收录'
  },
  {
    id: 's3', letter: 'S', color: 'linear-gradient(135deg,#059669,#10B981)',
    name: 'Sora 过场动画流水线', source: '文章转', sourceClass: 'source-article',
    desc: '将热门文章《Sora 游戏化应用指南》转化为可复用 Skill，一键调用视频生成与引擎对接流程。',
    category: '技术美术', linkedArticle: 'a1',
    downloads: '892', stars: 67, version: 'v0.9.1',
    fullDesc: '基于王明《Sora 游戏化应用指南》一文提炼的可复用工作流 Skill。集成了 Sora API 调用、分镜脚本解析、风格参考注入和 UE5 导入的完整流程。支持批量生成和质量评估，适用于过场动画、宣传片等视频内容的快速制作。',
    sourceDetail: '由知识库文章转化而来，关联原始文章《Sora 游戏化应用指南》'
  },
  {
    id: 's4', letter: 'Q', color: 'linear-gradient(135deg,#DC2626,#F43F5E)',
    name: 'QA Test Generator', source: 'Knot', sourceClass: 'source-knot',
    desc: '基于游戏设计文档自动生成测试用例，支持功能测试、边界条件和回归测试的智能生成。',
    category: '开发',
    downloads: '1.1 万', stars: 203, version: 'v1.2.0',
    fullDesc: '读取游戏设计文档（GDD）和技术文档，自动生成结构化的测试用例。支持功能测试、边界条件测试、回归测试和压力测试用例的生成。输出格式兼容 TAPD 和 Jira，可直接导入项目管理工具。',
    sourceDetail: '来源于 Knot MCP 市场 (knot.woa.com)'
  },
  {
    id: 's5', letter: 'L', color: 'linear-gradient(135deg,#D97706,#F59E0B)',
    name: 'LLM Code Reviewer', source: '文章转', sourceClass: 'source-article',
    desc: '从文章《基于 LLM 的大型 C++ 项目代码审查实践》提炼而来，可在 CI/CD 中自动运行代码审查。',
    category: '开发', linkedArticle: 'a5',
    downloads: '654', stars: 89, version: 'v0.8.0',
    fullDesc: '基于李工的代码审查实践文章提炼的自动化工具。集成到 Git CI/CD 流程中，对提交的 C++/C# 代码进行 LLM 审查，识别潜在 Bug、性能问题和代码规范违规。支持自定义审查规则和团队编码规范注入。',
    sourceDetail: '由知识库文章转化而来，关联原始文章《基于 LLM 的大型 C++ 项目代码审查实践》'
  },
  {
    id: 's6', letter: 'U', color: 'linear-gradient(135deg,#0891B2,#06B6D4)',
    name: 'UE5 AI Copilot', source: 'SkillHub', sourceClass: 'source-skillhub',
    desc: '针对 Unreal Engine 5 的 AI 编程助手，支持蓝图解读、C++ 模板生成和性能优化建议。',
    category: '开发',
    downloads: '3.6 万', stars: 541, version: 'v2.0.3',
    fullDesc: '专为 UE5 开发者设计的 AI 编程辅助工具。能够理解蓝图逻辑并转化为 C++ 代码、根据需求生成 Actor/Component 模板、分析性能瓶颈并给出优化建议。支持 UE5 特有的 API 和框架（Gameplay Ability System、Mass Entity 等）。',
    sourceDetail: '来源于 SkillHub (skillhub.tencent.com)，数据由 ClawHub 生态收录'
  },
  {
    id: 's7', letter: 'P', color: 'linear-gradient(135deg,#E11D48,#FB7185)',
    name: '玩家行为分析 Agent', source: 'Knot', sourceClass: 'source-knot',
    desc: '基于玩家行为日志的智能分析 Agent，支持自然语言查询和自动生成运营报告。',
    category: '游戏运营',
    downloads: '1.5 万', stars: 234, version: 'v1.1.0',
    fullDesc: '连接游戏数据仓库，通过自然语言查询玩家行为数据。支持留存分析、付费漏斗、玩家分群等常见运营分析场景。可自动生成周报/月报格式的分析报告。',
    sourceDetail: '来源于 Knot MCP 市场 (knot.woa.com)'
  },
  {
    id: 's8', letter: 'M', color: 'linear-gradient(135deg,#6366F1,#818CF8)',
    name: '游戏文案 AI 助手', source: 'SkillHub', sourceClass: 'source-skillhub',
    desc: '为游戏策划和运营提供文案撰写辅助，支持世界观一致性校验、多语言本地化和风格迁移。',
    category: '策划',
    downloads: '2.1 万', stars: 387, version: 'v1.6.0',
    fullDesc: '游戏文案全流程 AI 辅助工具。支持任务描述、道具说明、NPC 台词、公告文案等多种游戏文案类型的生成和优化。内置世界观知识库，确保文案风格和设定一致。支持中英日韩多语言生成和本地化。',
    sourceDetail: '来源于 SkillHub (skillhub.tencent.com)，数据由 ClawHub 生态收录'
  }
];

const TOOLS = [
  { id: 't1', letter: 'S', name: 'Scenario.gg', internal: false, color: 'linear-gradient(135deg,#6366F1,#818CF8)', desc: '游戏资产专用的 AI 绘画引擎，支持风格训练', tags: ['绘图','材质生成'], category: '美术生成', fullDesc: '针对游戏资产训练的 AI 绘画引擎。可以用少量参考图训练自定义模型，批量生成风格一致的游戏资产。' },
  { id: 't2', letter: 'I', name: 'Inworld AI', internal: false, color: 'linear-gradient(135deg,#0EA5E9,#38BDF8)', desc: 'NPC 实时情感、记忆和对话系统方案', tags: ['剧情生成','NPC 对话'], category: '问答方案', fullDesc: '为游戏 NPC 提供实时情感感知、长期记忆和自然语言对话能力的云服务平台。' },
  { id: 't3', letter: 'G', name: 'GitHub Copilot', internal: false, color: 'linear-gradient(135deg,#111,#333)', desc: 'AI 辅助编程，代码生成与查错', tags: ['代码生成','查错'], category: '技术生产', fullDesc: 'GitHub 出品的 AI 编程助手，支持代码补全、生成、重构和 Bug 检测。' },
  { id: 't4', letter: 'P', name: 'Perplexity', internal: false, color: 'linear-gradient(135deg,#1E3A5F,#2563EB)', desc: '基于 AI 的实时搜索引擎', tags: ['搜索','总结'], category: '效率工具', fullDesc: '基于 AI 的搜索引擎，提供带引用的结构化回答。适合技术调研和资料查找。' },
  { id: 't5', letter: 'T', name: 'Internal Art AI', internal: true, color: 'linear-gradient(135deg,#2563EB,#7C3AED)', desc: '司内美术 AI 资产生成平台', tags: ['绘图','概念设计'], category: '美术生成', fullDesc: '腾讯内部的美术 AI 资产生成平台，针对司内美术风格和流水线深度优化。' },
  { id: 't6', letter: 'Q', name: '知识库 QA Bot', internal: true, color: 'linear-gradient(135deg,#7C3AED,#A855F7)', desc: '司内知识库智能问答，快速检索文档', tags: ['问答','知识检索'], category: '问答方案', fullDesc: '基于游戏知识库全量文档的智能问答系统，支持自然语言检索和精准回答。' },
  { id: 't7', letter: 'E', name: 'GameEngine AI Bot', internal: true, color: 'linear-gradient(135deg,#059669,#10B981)', desc: '游戏引擎 AI 辅助调试与性能分析', tags: ['引擎','调试'], category: '技术生产', fullDesc: '针对游戏引擎的 AI 辅助工具，支持性能瓶颈定位、崩溃日志分析和优化建议。' },
  { id: 't8', letter: 'S', name: 'SuperTool AI', internal: true, color: 'linear-gradient(135deg,#DC2626,#F43F5E)', desc: '多模态 AI 助手，支持文档/图片/代码', tags: ['全能','多模态'], category: '效率工具', fullDesc: '司内多模态 AI 助手，支持文档理解、图片分析、代码生成等综合能力。' }
];

const CATEGORIES = ['全部','策划','开发','技术美术','游戏运营','商业化','QA'];

/* ========== PANEL SYSTEM ========== */
function openPanel(type, id) {
  let data;
  if (type === 'article') data = ARTICLES.find(a => a.id === id);
  else if (type === 'skill') data = SKILLS.find(s => s.id === id);
  else if (type === 'tool') data = TOOLS.find(t => t.id === id);
  if (!data) return;

  const panel = document.getElementById('detailPanel');
  const overlay = document.getElementById('panelOverlay');
  const body = document.getElementById('panelBody');

  let html = '';

  if (type === 'article') {
    html = `
      <div class="panel-icon" style="background:var(--accent);font-size:16px;">📄</div>
      <h2>${data.title}</h2>
      <p class="panel-sub">${data.author}${data.dept ? ' · '+data.dept : ''} · ${data.time}</p>
      <div class="panel-badges">${data.tags.map(t => `<span class="panel-badge-item tag-${t[1]}">${t[0]}</span>`).join('')}
        <span class="panel-badge-item tag-gray">${data.category}</span>
      </div>
      <div class="panel-stats">
        <div class="panel-stat"><span class="val">${data.views}</span><span class="lbl">阅读量</span></div>
        <div class="panel-stat"><span class="val">—</span><span class="lbl">点赞</span></div>
        <div class="panel-stat"><span class="val">—</span><span class="lbl">评论</span></div>
      </div>
      <p class="panel-desc">${data.content || data.desc}</p>
      <a href="#" style="display:inline-flex;align-items:center;gap:6px;padding:10px 20px;background:var(--accent);color:#fff;border-radius:var(--radius-sm);font-size:14px;font-weight:600;">阅读全文 →</a>
    `;
  } else if (type === 'skill') {
    const linkedHtml = data.linkedArticle
      ? `<div style="margin-top:16px;padding:12px;background:var(--green-soft);border-radius:var(--radius-sm);font-size:13px;color:var(--green);cursor:pointer;" onclick="openPanel('article','${data.linkedArticle}')">📎 查看关联文章 →</div>`
      : '';
    html = `
      <div class="panel-icon" style="background:${data.color};">${data.letter}</div>
      <h2>${data.name} <span class="source-tag ${data.sourceClass}">${data.source}</span></h2>
      <p class="panel-sub">${data.id}</p>
      <div class="panel-badges">
        <span class="panel-badge-item tag-green">${data.version}</span>
        <span class="panel-badge-item tag-gray">${data.category}</span>
      </div>
      <p class="panel-desc">${data.fullDesc || data.desc}</p>
      <div class="panel-source">📦 ${data.sourceDetail}</div>
      <div class="panel-stats">
        <div class="panel-stat"><span class="val">${data.downloads}</span><span class="lbl">下载量</span></div>
        <div class="panel-stat"><span class="val">${data.stars}</span><span class="lbl">收藏</span></div>
        <div class="panel-stat"><span class="val">—</span><span class="lbl">安装量</span></div>
      </div>
      <div class="panel-install-section">
        <h4>安装方式</h4>
        <div class="install-tabs" style="margin-bottom:12px;">
          <button class="install-tab active" onclick="switchInstallTab(this,'agent')">🤖 我是 Agent</button>
          <button class="install-tab" onclick="switchInstallTab(this,'human')">👤 我是 Human</button>
        </div>
        <div class="copy-block">
          <code>skillhub install ${data.id} --source=ai-world</code>
          <button class="copy-btn" onclick="copyText(this,'skillhub install ${data.id} --source=ai-world')">📋 复制</button>
        </div>
      </div>
      ${linkedHtml}
    `;
  } else if (type === 'tool') {
    html = `
      <div class="panel-icon" style="background:${data.color};">${data.letter}</div>
      <h2>${data.name} <span class="badge-pos ${data.internal?'badge-internal':'badge-external'}" style="position:static;">${data.internal?'司内':'外部'}</span></h2>
      <div class="panel-badges">
        ${data.tags.map(t => `<span class="panel-badge-item tag-gray">${t}</span>`).join('')}
        <span class="panel-badge-item tag-gray">${data.category}</span>
      </div>
      <p class="panel-desc">${data.fullDesc || data.desc}</p>
      <a href="#" style="display:inline-flex;align-items:center;gap:6px;padding:10px 20px;background:var(--accent);color:#fff;border-radius:var(--radius-sm);font-size:14px;font-weight:600;">前往使用 →</a>
    `;
  }

  body.innerHTML = html;
  panel.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePanel() {
  document.getElementById('detailPanel').classList.remove('open');
  document.getElementById('panelOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ========== COPY ========== */
function copyText(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    btn.innerHTML = '✓ 已复制';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '📋 复制';
      btn.classList.remove('copied');
    }, 2000);
  });
}

/* ========== INSTALL TABS (in panel) ========== */
function switchInstallTab(btn, type) {
  const parent = btn.parentElement;
  parent.querySelectorAll('.install-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

/* ========== TABS ========== */
function initTabs() {
  document.querySelectorAll('.tabs').forEach(group => {
    group.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });
}

/* ========== CATEGORY PILLS ========== */
function initPills() {
  document.querySelectorAll('.category-pills').forEach(group => {
    group.querySelectorAll('.pill').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        const section = group.closest('.section') || group.closest('.page-content');
        if (!section) return;

        // Filter cards
        section.querySelectorAll('[data-category]').forEach(card => {
          if (cat === '全部' || card.dataset.category === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
}

/* ========== SCROLL REVEAL ========== */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
}

/* ========== NAV HIGHLIGHT ========== */
function initNavScroll() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('nav a[href^="#"]');
  if (!sections.length || !links.length) return;
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  });
}

/* ========== HERO INSTALL WIDGET TABS ========== */
function initInstallWidget() {
  const tabs = document.querySelectorAll('.hero-install-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.target;
      document.querySelectorAll('.install-panel').forEach(p => {
        p.style.display = p.dataset.panel === target ? '' : 'none';
      });
    });
  });
}

/* ========== RENDER HELPERS ========== */
function renderArticleCard(a, isFeatured) {
  const cls = isFeatured ? 'featured-card' : 'article-card';
  const hotLabel = a.hot ? '<span class="hot-label">🔥 热门</span>' : '';
  const meta = `
    <div class="card-meta">
      <span class="author"><span class="avatar">${a.author[0]}</span> ${a.author}${a.dept ? ' · '+a.dept : ''}</span>
      <span class="dot">·</span><span>${a.time}</span>
      ${a.views ? '<span class="dot">·</span><span class="views">👁 '+a.views+'</span>' : ''}
    </div>`;
  return `<div class="${cls}" data-category="${a.category}" onclick="openPanel('article','${a.id}')">
    ${hotLabel}
    <div class="card-tags">${a.tags.map(t => `<span class="tag tag-${t[1]}">${t[0]}</span>`).join('')}</div>
    <h3>${a.title}</h3>
    <p>${a.desc}</p>
    ${meta}
  </div>`;
}

function renderSkillCard(s) {
  const linked = s.linkedArticle ? `<span class="link-article">📎 关联文章</span>` : '';
  return `<div class="skill-card" data-category="${s.category}" onclick="openPanel('skill','${s.id}')">
    <div class="skill-icon" style="background:${s.color};">${s.letter}</div>
    <div class="skill-body">
      <h3>${s.name} <span class="source-tag ${s.sourceClass}">${s.source}</span></h3>
      <p>${s.desc}</p>
      <div class="skill-footer">
        <span>↓ ${s.downloads}</span>
        <span>★ ${s.stars}</span>
        ${linked}
      </div>
    </div>
  </div>`;
}

function renderToolCard(t) {
  return `<div class="tool-card" data-category="${t.category}" onclick="openPanel('tool','${t.id}')">
    <span class="badge-pos ${t.internal?'badge-internal':'badge-external'}">${t.internal?'司内':'外部'}</span>
    <div class="tool-icon-wrap" style="background:${t.color};">${t.letter}</div>
    <h4>${t.name}</h4>
    <p>${t.desc}</p>
    <div class="tool-card-tags">${t.tags.map(t => `<span class="tool-tag">${t}</span>`).join('')}</div>
  </div>`;
}

function renderCategoryPills(categories, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = categories.map(c =>
    `<button class="pill${c === '全部' ? ' active' : ''}" data-cat="${c}">${c}</button>`
  ).join('');
}

/* ========== INIT ========== */
function initAll() {
  initTabs();
  initPills();
  initReveal();
  initNavScroll();
  initInstallWidget();
}
document.addEventListener('DOMContentLoaded', initAll);
