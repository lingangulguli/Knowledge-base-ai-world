/* ========== DATA ========== */
// Cover gradients for articles
const COVERS = [
  'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',
  'linear-gradient(135deg,#0f0c29 0%,#302b63 50%,#24243e 100%)',
  'linear-gradient(135deg,#2c3e50 0%,#3498db 100%)',
  'linear-gradient(135deg,#232526 0%,#414345 100%)',
  'linear-gradient(135deg,#1e3c72 0%,#2a5298 100%)',
  'linear-gradient(135deg,#0f2027 0%,#203a43 50%,#2c5364 100%)',
  'linear-gradient(135deg,#141e30 0%,#243b55 100%)',
  'linear-gradient(135deg,#1f1c2c 0%,#928dab 100%)',
  'linear-gradient(135deg,#0B486B 0%,#F56217 100%)',
  'linear-gradient(135deg,#3a1c71 0%,#d76d77 50%,#ffaf7b 100%)',
];
const ICONS_ART = ['🎨','🖼️','✨','🎭','🖌️','💎','🌈','🎪'];
const ICONS_DEV = ['⚙️','💻','🔧','🛠️','📐','🧩','🔬','🚀'];
const ICONS_OPS = ['📊','📈','🎯','💡','🔮','🌐','📋','🎲'];

function getCover(i){return COVERS[i%COVERS.length]}
function getIcon(cat,i){if(cat==='技术美术')return ICONS_ART[i%ICONS_ART.length];if(cat==='开发'||cat==='QA')return ICONS_DEV[i%ICONS_DEV.length];return ICONS_OPS[i%ICONS_OPS.length];}

const ARTICLES = [
  { id:'a1', featured:true, hot:true, type:'团队经验', title:'Sora 游戏化应用指南：从文字到 3A 级过场动画', desc:'详解 Sora 视频生成集成到过场动画流水线，实测效率提升约 60%。', tags:[['深度专题','blue'],['团队经验','green']], category:'技术美术', author:'王明', dept:'引擎技术组', time:'3 天前', views:'15.8w', content:'系统拆解了 Sora 在游戏过场动画制作中的完整落地流程。制作周期从 2 周缩短至 3 天。' },
  { id:'a2', featured:true, type:'团队经验', title:'司内自研「幻境」模型 2.0 开启内测：场景生成提效 400%', desc:'「幻境」2.0 场景生成质量和速度大幅提升，深入解读技术升级与内测接入。', tags:[['内部动态','amber'],['技术前沿','blue']], category:'开发', author:'AI 平台组', dept:'', time:'42 分钟前', views:'8.4w', content:'场景生成速度提升 4 倍，FID 分数提升 35%。' },
  { id:'a3', type:'个人沉淀', title:'AI 辅助 3D 模型贴图自动化流水线搭建实录', desc:'从 Stable Diffusion 到 ControlNet，低成本贴图自动化方案。', tags:[['个人沉淀','green'],['美术','gray']], category:'技术美术', author:'张小强', dept:'美术中心-技术组', time:'1 周前', views:'3.2w', content:'单个角色贴图制作时间从 4 小时降至 40 分钟。' },
  { id:'a4', type:'团队经验', title:'英伟达 ACE 平台更新：赋予 NPC 动态情感与记忆系统', desc:'NVIDIA ACE 最新更新对游戏 NPC 交互能力的提升及集成评估。', tags:[['技术前沿','blue'],['NPC','gray']], category:'策划', author:'陈航', dept:'技术中台', time:'2 小时前', views:'12w', content:'引入长期记忆模块和情感状态机。' },
  { id:'a5', type:'团队经验', title:'基于 LLM 的大型 C++ 项目代码审查实践', desc:'LLM 与静态分析工具结合，引擎级 C++ 代码库高效代码审查。', tags:[['新征文','rose'],['工具','gray']], category:'开发', author:'李工', dept:'技术中台-引擎组', time:'3 天前', views:'4.7w', content:'有效问题占总审查 23%，误报率 15% 以下。' },
  { id:'a6', type:'个人沉淀', title:'Midjourney v6.1 发布：文字渲染修复，游戏 UI 设计利器', desc:'v6.1 文字渲染精度优异，适合游戏 UI 快速原型。', tags:[['工具更新','amber']], category:'技术美术', author:'周莉', dept:'产品设计', time:'1 小时前', views:'6.2w', content:'准确率从约 60% 提升至 90%。' },
  { id:'a7', type:'团队经验', title:'用 AI Agent 自动生成支线任务：策划工作流的变革', desc:'AI Agent 自动生成符合世界观的支线任务，效率提升 3 倍。', tags:[['团队经验','green'],['策划','gray']], category:'策划', author:'赵一鸣', dept:'游戏策划', time:'5 天前', views:'5.1w', content:'构建世界观知识库配合 ReAct 框架。' },
  { id:'a8', type:'团队经验', title:'游戏语音合成技术选型：TTS 方案横向对比', desc:'ElevenLabs、Azure TTS、XTTS 中文效果、延迟和成本对比。', tags:[['深度专题','blue'],['音频','gray']], category:'开发', author:'孙磊', dept:'音频技术', time:'1 周前', views:'2.8w', content:'四个维度横向对比。' },
  { id:'a9', type:'团队经验', title:'AI 驱动的游戏测试自动化', desc:'强化学习和 LLM 构建智能测试 Agent。', tags:[['新征文','rose'],['QA','gray']], category:'QA', author:'刘洋', dept:'QA 技术组', time:'4 天前', views:'3.4w', content:'已发现 17 个人工遗漏的 Bug。' },
  { id:'a10', type:'团队经验', title:'游戏运营中的 AI 个性化推荐系统实践', desc:'基于玩家行为和 LLM 构建精准推荐系统。', tags:[['团队经验','green'],['运营','gray']], category:'游戏运营', author:'吴婷', dept:'运营策略组', time:'6 天前', views:'4.0w', content:'点击率和转化率显著提升。' },
  { id:'a11', type:'团队经验', title:'AI 辅助游戏商业化设计：动态定价与个性化活动', desc:'AI 在游戏付费设计中的应用实践。', tags:[['深度专题','blue'],['商业化','gray']], category:'商业化', author:'钱锋', dept:'商业化产品组', time:'1 周前', views:'3.6w', content:'动态定价、礼包生成、付费路径优化。' },
  { id:'a12', type:'个人沉淀', title:'NeRF 在游戏场景重建中的应用探索', desc:'神经辐射场技术实现真实场景到游戏场景转化。', tags:[['个人沉淀','green'],['技术前沿','blue']], category:'技术美术', author:'林峰', dept:'技术美术组', time:'2 天前', views:'2.1w', content:'数据采集、训练优化和引擎导入。' },
  { id:'a13', type:'团队经验', title:'大模型驱动的游戏剧情分支生成系统', desc:'LLM 动态剧情生成框架，支持多分支叙事。', tags:[['团队经验','green'],['策划','gray']], category:'策划', author:'郑思远', dept:'叙事设计组', time:'4 天前', views:'3.8w', content:'在沙盒 RPG 中验证可行性。' },
  { id:'a14', type:'个人沉淀', title:'AI 生成音效在游戏中的落地', desc:'多种 AI 音效生成方案的实际应用效果评估。', tags:[['个人沉淀','green'],['音频','gray']], category:'开发', author:'何明', dept:'音频技术组', time:'6 天前', views:'1.5w', content:'对比 AudioGen、Bark 等方案。' },
  { id:'a15', type:'团队经验', title:'强化学习在游戏 AI 对战系统中的实践', desc:'PvE/PvP 场景训练有趣且有挑战性的 AI 对手。', tags:[['深度专题','blue'],['开发','gray']], category:'开发', author:'马超', dept:'AI 算法组', time:'1 周前', views:'4.3w', content:'PPO + Self-Play 训练。' },
  { id:'a16', type:'团队经验', title:'AI 辅助本地化：多语言游戏文案翻译与校对', desc:'LLM 加速多语言本地化流程。', tags:[['团队经验','green'],['运营','gray']], category:'游戏运营', author:'苏小晴', dept:'国际化运营', time:'3 天前', views:'2.3w', content:'审校工作量减少约 40%。' },
  { id:'a17', type:'团队经验', title:'游戏反外挂系统中的机器学习应用', desc:'ML 反外挂检测系统设计与部署。', tags:[['团队经验','green'],['安全','gray']], category:'开发', author:'徐刚', dept:'安全技术组', time:'5 天前', views:'3.9w', content:'误报率 < 0.1%，检出率 95%。' },
  { id:'a18', type:'个人沉淀', title:'ComfyUI 工作流在游戏概念设计中的高效应用', desc:'适配游戏美术的 ComfyUI 自定义工作流。', tags:[['个人沉淀','green'],['美术','gray']], category:'技术美术', author:'黄婷', dept:'概念设计组', time:'2 天前', views:'5.6w', content:'角色、场景、道具设计工作流。' },
  { id:'a19', type:'团队经验', title:'AIGC 内容审核在游戏 UGC 平台中的部署', desc:'AI 审核系统保障 UGC 内容安全。', tags:[['团队经验','green'],['安全','gray']], category:'游戏运营', author:'曹磊', dept:'内容安全组', time:'1 周前', views:'2.0w', content:'多模态审核。' },
  { id:'a20', type:'个人沉淀', title:'使用 AI 优化游戏包体大小', desc:'AI 纹理超分辨率在包体优化中的应用。', tags:[['新征文','rose'],['优化','gray']], category:'开发', author:'韩涛', dept:'客户端优化组', time:'3 天前', views:'1.8w', content:'包体减少 25%。' },
  { id:'a21', type:'团队经验', title:'GameGPT：游戏专用大模型微调与评估', desc:'游戏领域微调的方法论和效果评估。', tags:[['深度专题','blue'],['技术前沿','blue']], category:'开发', author:'杨森', dept:'AI 平台组', time:'5 天前', views:'6.7w', content:'超越通用模型。' },
  { id:'a22', type:'团队经验', title:'AI 赋能游戏社区管理', desc:'NLP 提升社区管理效率和满意度。', tags:[['团队经验','green'],['运营','gray']], category:'游戏运营', author:'范明', dept:'社区运营组', time:'4 天前', views:'2.5w', content:'响应时间缩短 80%。' },
  { id:'a23', type:'个人沉淀', title:'AI 驱动的游戏关卡自动生成', desc:'PCG + 深度学习实现高质量关卡生成。', tags:[['个人沉淀','green'],['策划','gray']], category:'策划', author:'吕阳', dept:'关卡设计组', time:'6 天前', views:'3.1w', content:'WFC + GAN 混合方案。' },
  { id:'a24', type:'个人沉淀', title:'实时 AI 换装系统：虚拟试衣在游戏中的实现', desc:'Virtual Try-On 在游戏角色定制中的应用。', tags:[['新征文','rose'],['美术','gray']], category:'技术美术', author:'陈雨', dept:'角色美术组', time:'2 天前', views:'1.9w', content:'实时换装预览。' },
  { id:'a25', type:'团队经验', title:'AI 数据分析平台在游戏 A/B 测试中的应用', desc:'智能 A/B 测试分析平台。', tags:[['团队经验','green'],['数据','gray']], category:'商业化', author:'谢林', dept:'数据分析组', time:'1 周前', views:'2.7w', content:'自动分析结果。' },
  { id:'a26', type:'团队经验', title:'端侧 AI 推理优化：移动设备上运行游戏 AI', desc:'模型量化和蒸馏在手游 AI 中的应用。', tags:[['深度专题','blue'],['优化','gray']], category:'开发', author:'秦伟', dept:'移动端技术组', time:'4 天前', views:'3.3w', content:'50MB 以内，100ms 响应。' },
  { id:'a27', type:'个人沉淀', title:'用 Cursor + Claude 加速游戏工具链开发', desc:'AI 编程助手快速开发编辑器插件。', tags:[['个人沉淀','green'],['工具','gray']], category:'开发', author:'吴建', dept:'工具链组', time:'1 天前', views:'7.2w', content:'一周完成一个月开发量。' },
  { id:'a28', type:'个人沉淀', title:'AI 音乐生成：自适应游戏配乐系统', desc:'根据游戏状态动态变化的配乐系统。', tags:[['新征文','rose'],['音频','gray']], category:'开发', author:'方磊', dept:'音频技术组', time:'5 天前', views:'1.6w', content:'无缝自适应。' },
  { id:'a29', type:'团队经验', title:'游戏广告素材的 AI 自动化生产流水线', desc:'AIGC 大幅提升广告素材产出效率。', tags:[['团队经验','green'],['商业化','gray']], category:'商业化', author:'程浩', dept:'市场投放组', time:'3 天前', views:'4.1w', content:'产出量 5x，CPA -18%。' },
  { id:'a30', type:'团队经验', title:'多模态 AI 在游戏客服中的应用', desc:'图文混合理解的智能客服系统。', tags:[['团队经验','green'],['运营','gray']], category:'游戏运营', author:'蒋芸', dept:'客服技术组', time:'6 天前', views:'1.8w', content:'自动分类并解决。' },
];

const SKILLS = [
  { id:'s1', letter:'G', color:'linear-gradient(135deg,#2563EB,#3B82F6)', name:'Game Asset Generator', source:'Knot', sourceClass:'source-knot', desc:'基于 Stable Diffusion 的游戏资产批量生成，支持多风格输出。', category:'技术美术', downloads:'2.3 万', stars:186, version:'v2.1.0', fullDesc:'游戏美术资产批量生成工具链。', sourceDetail:'来源于 Knot MCP 市场 (knot.woa.com)' },
  { id:'s2', letter:'N', color:'linear-gradient(135deg,#7C3AED,#A855F7)', name:'NPC Dialogue Engine', source:'SkillHub', sourceClass:'source-skillhub', desc:'NPC 上下文感知对话生成，支持记忆管理和情感状态。', category:'策划', downloads:'1.8 万', stars:312, version:'v1.4.2', fullDesc:'基于 LLM 的 NPC 对话引擎。', sourceDetail:'来源于 SkillHub，数据由 ClawHub 收录' },
  { id:'s3', letter:'S', color:'linear-gradient(135deg,#059669,#10B981)', name:'Sora 过场动画流水线', source:'文章转', sourceClass:'source-article', desc:'文章转 Skill，一键调用视频生成流程。', category:'技术美术', linkedArticle:'a1', downloads:'892', stars:67, version:'v0.9.1', fullDesc:'集成 Sora API 与 UE5 导入。', sourceDetail:'由知识库文章转化' },
  { id:'s4', letter:'Q', color:'linear-gradient(135deg,#DC2626,#F43F5E)', name:'QA Test Generator', source:'Knot', sourceClass:'source-knot', desc:'基于 GDD 自动生成测试用例。', category:'QA', downloads:'1.1 万', stars:203, version:'v1.2.0', fullDesc:'结构化测试用例。', sourceDetail:'来源于 Knot MCP 市场' },
  { id:'s5', letter:'L', color:'linear-gradient(135deg,#D97706,#F59E0B)', name:'LLM Code Reviewer', source:'文章转', sourceClass:'source-article', desc:'CI/CD 自动代码审查工具。', category:'开发', linkedArticle:'a5', downloads:'654', stars:89, version:'v0.8.0', fullDesc:'C++/C# LLM 审查。', sourceDetail:'由知识库文章转化' },
  { id:'s6', letter:'U', color:'linear-gradient(135deg,#0891B2,#06B6D4)', name:'UE5 AI Copilot', source:'SkillHub', sourceClass:'source-skillhub', desc:'UE5 AI 编程助手，蓝图与 C++。', category:'开发', downloads:'3.6 万', stars:541, version:'v2.0.3', fullDesc:'专为 UE5 开发者。', sourceDetail:'来源于 SkillHub，由 ClawHub 收录' },
  { id:'s7', letter:'P', color:'linear-gradient(135deg,#E11D48,#FB7185)', name:'玩家行为分析 Agent', source:'Knot', sourceClass:'source-knot', desc:'自然语言查询玩家行为数据。', category:'游戏运营', downloads:'1.5 万', stars:234, version:'v1.1.0', fullDesc:'自动运营报告。', sourceDetail:'来源于 Knot MCP 市场' },
  { id:'s8', letter:'M', color:'linear-gradient(135deg,#6366F1,#818CF8)', name:'游戏文案 AI 助手', source:'SkillHub', sourceClass:'source-skillhub', desc:'世界观校验与多语言本地化。', category:'策划', downloads:'2.1 万', stars:387, version:'v1.6.0', fullDesc:'多种文案生成优化。', sourceDetail:'来源于 SkillHub，由 ClawHub 收录' },
  { id:'s9', letter:'C', color:'linear-gradient(135deg,#F97316,#FB923C)', name:'ComfyUI 游戏美术流水线', source:'文章转', sourceClass:'source-article', desc:'ComfyUI 美术资产批量生成工作流。', category:'技术美术', linkedArticle:'a18', downloads:'1.2 万', stars:156, version:'v1.0.0', fullDesc:'封装为可复用 Skill。', sourceDetail:'由知识库文章转化' },
  { id:'s10', letter:'A', color:'linear-gradient(135deg,#14B8A6,#2DD4BF)', name:'AI 反外挂检测器', source:'Knot', sourceClass:'source-knot', desc:'ML 反外挂检测。', category:'QA', downloads:'8,900', stars:178, version:'v1.3.0', fullDesc:'误报 < 0.1%，检出 95%。', sourceDetail:'来源于 Knot MCP 市场' },
  { id:'s11', letter:'D', color:'linear-gradient(135deg,#8B5CF6,#A78BFA)', name:'动态定价优化器', source:'SkillHub', sourceClass:'source-skillhub', desc:'RL 游戏内商品动态定价。', category:'商业化', downloads:'6,300', stars:95, version:'v0.7.0', fullDesc:'强化学习定价。', sourceDetail:'来源于 SkillHub，由 ClawHub 收录' },
  { id:'s12', letter:'R', color:'linear-gradient(135deg,#EC4899,#F472B6)', name:'RL 游戏 AI 训练框架', source:'Knot', sourceClass:'source-knot', desc:'游戏 AI 对战 RL 训练框架。', category:'开发', downloads:'2.0 万', stars:410, version:'v2.2.1', fullDesc:'分布式训练。', sourceDetail:'来源于 Knot MCP 市场' },
  { id:'s13', letter:'T', color:'linear-gradient(135deg,#0369A1,#0EA5E9)', name:'TTS 游戏语音合成', source:'文章转', sourceClass:'source-article', desc:'一键 TTS 部署。', category:'开发', linkedArticle:'a8', downloads:'4,200', stars:73, version:'v0.6.0', fullDesc:'XTTS + MeloTTS。', sourceDetail:'由知识库文章转化' },
  { id:'s14', letter:'B', color:'linear-gradient(135deg,#065F46,#047857)', name:'游戏广告素材生成器', source:'SkillHub', sourceClass:'source-skillhub', desc:'多尺寸游戏广告素材。', category:'商业化', downloads:'9,700', stars:132, version:'v1.1.0', fullDesc:'SDXL + LLM。', sourceDetail:'来源于 SkillHub，由 ClawHub 收录' },
  { id:'s15', letter:'K', color:'linear-gradient(135deg,#7C2D12,#C2410C)', name:'关卡智能生成器', source:'Knot', sourceClass:'source-knot', desc:'AI 关卡自动生成。', category:'策划', downloads:'5,600', stars:88, version:'v0.9.0', fullDesc:'WFC + GAN。', sourceDetail:'来源于 Knot MCP 市场' },
  { id:'s16', letter:'W', color:'linear-gradient(135deg,#4338CA,#6366F1)', name:'多模态客服 Agent', source:'文章转', sourceClass:'source-article', desc:'图文混合智能客服。', category:'游戏运营', linkedArticle:'a30', downloads:'3,100', stars:62, version:'v0.5.0', fullDesc:'理解截图中的 Bug。', sourceDetail:'由知识库文章转化' },
];

const TOOLS = [
  { id:'t1', letter:'S', name:'Scenario.gg', internal:false, color:'linear-gradient(135deg,#6366F1,#818CF8)', cover:'linear-gradient(135deg,#4338CA 0%,#6366F1 50%,#818CF8 100%)', desc:'游戏资产专用 AI 绘画引擎，支持风格训练', tags:['绘图','材质生成'], category:'美术生成', fullDesc:'少量参考图训练自定义模型。', likes:896 },
  { id:'t2', letter:'I', name:'Inworld AI', internal:false, color:'linear-gradient(135deg,#0EA5E9,#38BDF8)', cover:'linear-gradient(135deg,#0369A1 0%,#0EA5E9 50%,#7DD3FC 100%)', desc:'NPC 实时情感、记忆和对话系统', tags:['剧情生成','NPC 对话'], category:'问答方案', fullDesc:'云服务平台。', likes:1248 },
  { id:'t3', letter:'G', name:'GitHub Copilot', internal:false, color:'linear-gradient(135deg,#111,#333)', cover:'linear-gradient(135deg,#0D1117 0%,#161B22 50%,#30363D 100%)', desc:'AI 辅助编程，代码生成与查错', tags:['代码生成','查错'], category:'技术生产', fullDesc:'GitHub AI 编程助手。', likes:3200 },
  { id:'t4', letter:'P', name:'Perplexity', internal:false, color:'linear-gradient(135deg,#1E3A5F,#2563EB)', cover:'linear-gradient(135deg,#1E3A5F 0%,#2563EB 100%)', desc:'基于 AI 的实时搜索引擎', tags:['搜索','总结'], category:'效率工具', fullDesc:'带引用的结构化回答。', likes:2200 },
  { id:'t5', letter:'鹅', name:'鹅博士AI+', internal:true, color:'linear-gradient(135deg,#2563EB,#7C3AED)', cover:'linear-gradient(135deg,#1E40AF 0%,#6D28D9 100%)', desc:'读文章、快总结；有问题、划线问。游戏知识库 AI 智能助手', tags:['游戏知识库','学习'], category:'效率工具', fullDesc:'司内知识库浏览器 AI 插件。', likes:3 },
  { id:'t6', letter:'Q', name:'知识库 QA Bot', internal:true, color:'linear-gradient(135deg,#7C3AED,#A855F7)', cover:'linear-gradient(135deg,#5B21B6 0%,#8B5CF6 100%)', desc:'司内知识库智能问答', tags:['问答','知识检索'], category:'问答方案', fullDesc:'全量文档智能问答。', likes:0 },
  { id:'t7', letter:'E', name:'GameEngine AI Bot', internal:true, color:'linear-gradient(135deg,#059669,#10B981)', cover:'linear-gradient(135deg,#064E3B 0%,#10B981 100%)', desc:'游戏引擎 AI 辅助调试', tags:['引擎','调试'], category:'技术生产', fullDesc:'性能瓶颈定位。', likes:0 },
  { id:'t8', letter:'S', name:'SuperTool AI', internal:true, color:'linear-gradient(135deg,#DC2626,#F43F5E)', cover:'linear-gradient(135deg,#991B1B 0%,#F43F5E 100%)', desc:'多模态 AI 助手', tags:['全能','多模态'], category:'效率工具', fullDesc:'文档/图片/代码。', likes:0 }
];

const CATEGORIES = ['全部','策划','开发','技术美术','游戏运营','商业化','QA'];
const ARTICLE_TYPES = ['全部','团队经验','个人沉淀'];

/* ========== PANEL ========== */
function openPanel(type, id) {
  let d; if(type==='article')d=ARTICLES.find(a=>a.id===id); else if(type==='skill')d=SKILLS.find(s=>s.id===id); else if(type==='tool')d=TOOLS.find(t=>t.id===id); if(!d)return;
  const panel=document.getElementById('detailPanel'),overlay=document.getElementById('panelOverlay'),body=document.getElementById('panelBody');
  let h='';
  if(type==='article'){
    h=`<div class="panel-icon" style="background:var(--accent);">📄</div><h2>${d.title}</h2><p class="panel-sub">${d.author}${d.dept?' · '+d.dept:''} · ${d.time}</p><div class="panel-badges">${d.tags.map(t=>`<span class="panel-badge-item tag-${t[1]}">${t[0]}</span>`).join('')}<span class="panel-badge-item tag-gray">${d.category}</span></div><div class="panel-stats"><div class="panel-stat"><span class="val">${d.views||'—'}</span><span class="lbl">阅读量</span></div><div class="panel-stat"><span class="val">—</span><span class="lbl">点赞</span></div><div class="panel-stat"><span class="val">—</span><span class="lbl">评论</span></div></div><p class="panel-desc">${d.content||d.desc}</p><a href="#" class="panel-action-btn">阅读全文 →</a>`;
  } else if(type==='skill'){
    const lnk=d.linkedArticle?`<div class="panel-linked" onclick="openPanel('article','${d.linkedArticle}')">📎 查看关联文章 →</div>`:'';
    h=`<div class="panel-icon" style="background:${d.color};">${d.letter}</div><h2>${d.name} <span class="source-tag ${d.sourceClass}">${d.source}</span></h2><p class="panel-sub">${d.id}</p><div class="panel-badges"><span class="panel-badge-item tag-green">${d.version}</span><span class="panel-badge-item tag-gray">${d.category}</span></div><p class="panel-desc">${d.fullDesc||d.desc}</p><div class="panel-source">📦 ${d.sourceDetail}</div><div class="panel-stats"><div class="panel-stat"><span class="val">${d.downloads}</span><span class="lbl">下载量</span></div><div class="panel-stat"><span class="val">${d.stars}</span><span class="lbl">收藏</span></div><div class="panel-stat"><span class="val">—</span><span class="lbl">安装量</span></div></div><div class="panel-install-section"><h4>安装方式</h4><div class="install-tabs" style="margin-bottom:12px;"><button class="install-tab active" onclick="switchInstallTab(this)">🤖 Agent</button><button class="install-tab" onclick="switchInstallTab(this)">👤 Human</button></div><div class="copy-block"><code>skillhub install ${d.id} --source=ai-world</code><button class="copy-btn" onclick="copyText(this,'skillhub install ${d.id} --source=ai-world')">📋 复制</button></div></div>${lnk}`;
  } else {
    h=`<div class="panel-icon" style="background:${d.color};">${d.letter}</div><h2>${d.name} <span class="badge-pos ${d.internal?'badge-internal':'badge-external'}" style="position:static;">${d.internal?'司内':'外部'}</span></h2><div class="panel-badges">${d.tags.map(t=>`<span class="panel-badge-item tag-gray">${t}</span>`).join('')}<span class="panel-badge-item tag-gray">${d.category}</span></div><p class="panel-desc">${d.fullDesc||d.desc}</p>${d.likes?'<p style="font-size:13px;color:var(--text-tertiary);margin-bottom:16px;">👍 '+d.likes+'</p>':''}<a href="#" class="panel-action-btn">前往使用 →</a>`;
  }
  body.innerHTML=h; panel.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow='hidden';
}
function closePanel(){document.getElementById('detailPanel').classList.remove('open');document.getElementById('panelOverlay').classList.remove('open');document.body.style.overflow='';}
function copyText(btn,text){navigator.clipboard.writeText(text).then(()=>{btn.textContent='✓ 已复制';btn.classList.add('copied');setTimeout(()=>{btn.textContent='📋 复制';btn.classList.remove('copied');},2000);});}
function switchInstallTab(btn){btn.parentElement.querySelectorAll('.install-tab').forEach(t=>t.classList.remove('active'));btn.classList.add('active');}

/* ========== UI INIT ========== */
function initTabs(){document.querySelectorAll('.tabs').forEach(g=>{g.querySelectorAll('.tab-btn').forEach(b=>{b.addEventListener('click',()=>{g.querySelectorAll('.tab-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');});});});}
function initPills(){document.querySelectorAll('.category-pills').forEach(g=>{g.querySelectorAll('.pill').forEach(b=>{b.addEventListener('click',()=>{g.querySelectorAll('.pill').forEach(x=>x.classList.remove('active'));b.classList.add('active');const cat=b.dataset.cat;const sec=b.closest('.section')||b.closest('.page-content');if(!sec)return;sec.querySelectorAll('[data-category]').forEach(c=>{c.style.display=(cat==='全部'||c.dataset.category===cat)?'':'none';});});});});}
function initReveal(){const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:0.06});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));}
function initNavScroll(){const ss=document.querySelectorAll('section[id]'),ls=document.querySelectorAll('nav a[href^="#"]');if(!ss.length||!ls.length)return;window.addEventListener('scroll',()=>{let c='';ss.forEach(s=>{if(window.scrollY>=s.offsetTop-120)c=s.id;});ls.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+c));});}
function initInstallWidget(){document.querySelectorAll('.hero-install-tab').forEach(tab=>{tab.addEventListener('click',()=>{document.querySelectorAll('.hero-install-tab').forEach(t=>t.classList.remove('active'));tab.classList.add('active');const tgt=tab.dataset.target;document.querySelectorAll('.install-panel').forEach(p=>{p.style.display=p.dataset.panel===tgt?'':'none';});});});}

/* ========== RENDER ========== */
function renderArticleCard(a,feat){
  const idx = ARTICLES.indexOf(a);
  const cover = getCover(idx);
  const icon = getIcon(a.category, idx);
  const cls = feat ? 'featured-card' : 'article-card';
  const hot = a.hot ? '<span class="hot-label">🔥 热门</span>' : '';
  const typeBadge = a.type === '团队经验' ? '<span class="type-badge type-team">团队经验</span>' : '<span class="type-badge type-personal">个人沉淀</span>';
  const coverHTML = `<div class="card-cover" style="background:${cover}"><span class="card-cover-icon">${icon}</span>${typeBadge}</div>`;
  const meta = `<div class="card-meta"><span class="author"><span class="avatar">${a.author[0]}</span> ${a.author}${a.dept?' · '+a.dept:''}</span><span class="dot">·</span><span>${a.time}</span>${a.views?'<span class="dot">·</span><span class="views">👁 '+a.views+'</span>':''}</div>`;
  return `<div class="${cls}" data-category="${a.category}" data-type="${a.type}" onclick="openPanel('article','${a.id}')">${hot}${coverHTML}<div class="card-content"><div class="card-tags">${a.tags.map(t=>`<span class="tag tag-${t[1]}">${t[0]}</span>`).join('')}</div><h3>${a.title}</h3><p>${a.desc}</p>${meta}</div></div>`;
}

function renderSkillCard(s){const lnk=s.linkedArticle?`<span class="link-article">📎 关联文章</span>`:'';return `<div class="skill-card" data-category="${s.category}" onclick="openPanel('skill','${s.id}')"><div class="skill-icon" style="background:${s.color};">${s.letter}</div><div class="skill-body"><h3>${s.name} <span class="source-tag ${s.sourceClass}">${s.source}</span></h3><p>${s.desc}</p><div class="skill-footer"><span>↓ ${s.downloads}</span><span>★ ${s.stars}</span>${lnk}</div></div></div>`;}

function renderToolCard(t){
  return `<div class="tool-card-v2" data-category="${t.category}" onclick="openPanel('tool','${t.id}')">
    <div class="tool-cover" style="background:${t.cover}"><span class="tool-cover-letter">${t.letter}</span></div>
    <div class="tool-card-body">
      <div class="tool-card-head"><span class="badge-inline ${t.internal?'badge-internal':'badge-external'}">${t.internal?'内部':'外部'}</span></div>
      <h4>${t.name}</h4>
      <p>${t.desc}</p>
      <div class="tool-card-foot"><div class="tool-card-tags">${t.tags.map(x=>`<span class="tool-tag">${x}</span>`).join('')}</div><span class="tool-likes">👍 ${t.likes||0}</span></div>
    </div>
  </div>`;
}

function renderCategoryPills(cats,id){const el=document.getElementById(id);if(!el)return;el.innerHTML=cats.map(c=>`<button class="pill${c==='全部'?' active':''}" data-cat="${c}">${c}</button>`).join('');}

/* ========== PAGINATION ========== */
function renderPagination(cid, total, pp, cur, cb) {
  const el=document.getElementById(cid); if(!el)return;
  const pages=Math.ceil(total/pp); if(pages<=1){el.innerHTML='';return;}
  let nums=[];
  if(pages<=7){for(let i=1;i<=pages;i++)nums.push(i);}
  else{nums.push(1);if(cur>3)nums.push('…');for(let i=Math.max(2,cur-1);i<=Math.min(pages-1,cur+1);i++)nums.push(i);if(cur<pages-2)nums.push('…');nums.push(pages);}
  el.innerHTML=`<button class="pg-btn pg-arrow" ${cur===1?'disabled':''} onclick="${cb}(${cur-1})">‹</button>${nums.map(p=>p==='…'?'<span class="pg-dots">…</span>':`<button class="pg-btn${p===cur?' pg-active':''}" onclick="${cb}(${p})">${p}</button>`).join('')}<button class="pg-btn pg-arrow" ${cur===pages?'disabled':''} onclick="${cb}(${cur+1})">›</button><span class="pg-jump">跳至 <input type="number" class="pg-input" value="${cur}" min="1" max="${pages}" onchange="${cb}(Math.max(1,Math.min(${pages},parseInt(this.value)||1)))"> 页</span>`;
}

/* ========== SEARCH ========== */
function globalSearch(q){q=q.toLowerCase().trim();if(!q)return{articles:[],skills:[],tools:[]};return{articles:ARTICLES.filter(a=>a.title.toLowerCase().includes(q)||a.desc.toLowerCase().includes(q)||a.tags.some(t=>t[0].toLowerCase().includes(q))||a.category.toLowerCase().includes(q)),skills:SKILLS.filter(s=>s.name.toLowerCase().includes(q)||s.desc.toLowerCase().includes(q)||s.category.toLowerCase().includes(q)),tools:TOOLS.filter(t=>t.name.toLowerCase().includes(q)||t.desc.toLowerCase().includes(q)||t.tags.some(x=>x.toLowerCase().includes(q)))};}
function doSearch(q){if(!q){const i=document.getElementById('searchModalInput');if(i)q=i.value;}if(!q)return;const isS=window.location.pathname.includes('/pages/');window.location.href=(isS?'':'pages/')+'search.html?q='+encodeURIComponent(q);}

/* ========== AGENT CHAT ========== */
function initAgentChat(){if(document.getElementById('agentContainer'))return;const c=document.createElement('div');c.id='agentContainer';c.innerHTML=`<div class="agent-fab" id="agentFab" onclick="toggleAgentChat()"><svg width="22" height="22" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M19 11a7.5 7.5 0 0 1-7.5 7.5H4l3-3A7.5 7.5 0 1 1 19 11z"/></svg></div><div class="agent-chat" id="agentChat"><div class="agent-chat-header"><div class="agent-chat-title"><span style="font-size:24px">🤖</span><div><strong>AI 助手</strong><span class="agent-status">在线</span></div></div><button class="agent-chat-close" onclick="toggleAgentChat()">✕</button></div><div class="agent-chat-body" id="agentChatBody"><div class="agent-msg bot"><span class="agent-avatar-sm">🤖</span><div class="agent-bubble">你好！告诉我你的需求，我来推荐 Skills、文章或工具。</div></div></div><div class="agent-chat-input"><input type="text" id="agentInput" placeholder="描述你需要的 Skill 或文章…" onkeydown="if(event.key==='Enter')sendAgentMsg()"><button onclick="sendAgentMsg()"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2L7 9M14 2l-4 12-3-6-6-3z"/></svg></button></div></div>`;document.body.appendChild(c);}
function toggleAgentChat(){document.getElementById('agentChat').classList.toggle('open');document.getElementById('agentFab').classList.toggle('hidden');}
function sendAgentMsg(){const inp=document.getElementById('agentInput'),body=document.getElementById('agentChatBody'),t=inp.value.trim();if(!t)return;body.innerHTML+=`<div class="agent-msg user"><div class="agent-bubble user-bubble">${t.replace(/</g,'&lt;')}</div></div>`;inp.value='';body.scrollTop=body.scrollHeight;setTimeout(()=>{body.innerHTML+=`<div class="agent-msg bot"><span class="agent-avatar-sm">🤖</span><div class="agent-bubble">开发中，预计接入 GameBoss / 鹅博士插件 🚧<br><span style="font-size:11px;color:var(--text-tertiary);margin-top:4px;display:block;">该功能将支持智能推荐，敬请期待。</span></div></div>`;body.scrollTop=body.scrollHeight;},500);}

/* ========== SEARCH MODAL ========== */
function initSearchModal(){document.querySelectorAll('.search-trigger').forEach(b=>{b.addEventListener('click',e=>{e.preventDefault();openSM();});});document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openSM();}});}
function openSM(){let m=document.getElementById('searchModal');if(!m){m=document.createElement('div');m.id='searchModal';m.className='search-modal-overlay';m.innerHTML=`<div class="search-modal"><input type="text" class="search-modal-input" id="searchModalInput" placeholder="搜索文章、技能、工具…" autofocus><div class="search-modal-results" id="searchModalResults"><p class="search-modal-hint">输入关键词开始搜索</p></div></div>`;m.addEventListener('click',e=>{if(e.target===m)closeSM();});document.body.appendChild(m);const si=document.getElementById('searchModalInput');si.addEventListener('input',function(){const q=this.value.trim(),res=document.getElementById('searchModalResults');if(!q){res.innerHTML='<p class="search-modal-hint">输入关键词开始搜索</p>';return;}const r=globalSearch(q),tot=r.articles.length+r.skills.length+r.tools.length;if(!tot){res.innerHTML='<p class="search-modal-hint">未找到相关结果</p>';return;}let h='';if(r.articles.length)h+=`<div class="search-group-label">文章 (${r.articles.length})</div>`+r.articles.slice(0,5).map(a=>`<div class="search-result-item" onclick="closeSM();openPanel('article','${a.id}')"><span class="sr-type">📄</span><div><strong>${a.title}</strong><span class="sr-cat">${a.category}</span></div></div>`).join('');if(r.skills.length)h+=`<div class="search-group-label">Skills (${r.skills.length})</div>`+r.skills.slice(0,5).map(s=>`<div class="search-result-item" onclick="closeSM();openPanel('skill','${s.id}')"><span class="sr-type">⚡</span><div><strong>${s.name}</strong><span class="sr-cat">${s.category}</span></div></div>`).join('');if(r.tools.length)h+=`<div class="search-group-label">工具 (${r.tools.length})</div>`+r.tools.slice(0,5).map(t=>`<div class="search-result-item" onclick="closeSM();openPanel('tool','${t.id}')"><span class="sr-type">🔧</span><div><strong>${t.name}</strong><span class="sr-cat">${t.category}</span></div></div>`).join('');res.innerHTML=h;});si.addEventListener('keydown',function(e){if(e.key==='Enter'){const q=this.value.trim();if(q)doSearch(q);}if(e.key==='Escape')closeSM();});}m.classList.add('open');setTimeout(()=>document.getElementById('searchModalInput').focus(),100);document.body.style.overflow='hidden';}
function closeSM(){const m=document.getElementById('searchModal');if(m){m.classList.remove('open');document.body.style.overflow='';}}

/* ========== INIT ========== */
function initAll(){initTabs();initPills();initReveal();initNavScroll();initInstallWidget();initAgentChat();initSearchModal();}
document.addEventListener('DOMContentLoaded',initAll);
