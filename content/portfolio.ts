/**
 * 个人作品集内容数据
 * 来源：docs/04-内容文案.md
 * 原则：不虚构年限、数据、模型/算法能力；占位字段待本人替换
 */

export type NavItem = {
  label: string
  href: string
}

export type Cta = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
}

export type Profile = {
  /** 替换为真实姓名 */
  name: string
  role: string
  roleSecondary: string
  headline: string
  valueProposition: string[]
  primaryCta: Cta
  secondaryCta: Cta
  email: string
  resumeUrl: string
  socials: SocialLink[]
}

export type AboutContent = {
  paragraphs: string[]
  principles: {
    title: string
    description: string
  }[]
}

export type WorkflowStep = {
  id: string
  step: number
  title: string
  description: string
  output: string
  tags: string[]
}

export type WorkflowContent = {
  title: string
  subtitle: string
  steps: WorkflowStep[]
  closing: string
}

export type Project = {
  id: string
  title: string
  /** 列表卡片一句话描述 */
  oneLiner: string
  tags: string[]
  background: string
  problem: string
  solution: string
  /** 我在项目中的实际职责（AI Product Builder 视角） */
  role: string
  /** 功能结构 */
  features: string[]
  /** AI 辅助开发流程 */
  aiWorkflow: { title: string; detail: string }[]
  /** 页面展示占位（无真实截图时用文案占位） */
  gallery: { label: string; caption: string }[]
  summary: string
}

export type SkillItem = {
  name: string
  description: string
}

export type SkillGroup = {
  category: "AI Tools" | "Product" | "Development"
  items: SkillItem[]
}

export type BuildLogStage = {
  id: string
  step: number
  title: string
  /** 该阶段具体工作内容 */
  items: string[]
  tools: string[]
}

export type BuildLogContent = {
  title: string
  subtitle: string
  stages: BuildLogStage[]
  closing: string
}

export type ContactContent = {
  title: string
  subtitle: string
  body: string[]
  closing: string
  primaryCtaLabel: string
  secondaryCtaLabel: string
  note: string
}

export type Portfolio = {
  nav: NavItem[]
  profile: Profile
  about: AboutContent
  principles: AboutContent["principles"]
  workflow: WorkflowContent
  projects: Project[]
  buildLog: BuildLogContent
  skills: SkillGroup[]
  contact: ContactContent
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const nav: NavItem[] = [
  { label: "关于我", href: "/#about" },
  { label: "产品方法", href: "/#workflow" },
  { label: "项目作品", href: "/#projects" },
  { label: "AI构建记录", href: "/#build-log" },
  { label: "技能", href: "/#skills" },
  { label: "联系我", href: "/#contact" },
]

export const profile: Profile = {
  name: "李泽荣",
  role: "AI Product Builder",
  roleSecondary: "Aspiring AI Product Manager",
  headline: "用 AI 工具快速验证产品想法，并将概念转化为可体验的产品原型。",
  valueProposition: ["软件工程背景 × Vibe Coding × 产品思维"],
  primaryCta: {
    label: "查看作品",
    href: "/#projects",
  },
  secondaryCta: {
    label: "了解我的方法",
    href: "/#workflow",
  },
  /** 替换为真实邮箱 */
  email: "2313114212@qq.com",
  /** 有简历时改为 /resume.pdf */
  resumeUrl: "/resume.pdf",
  /** 按实际填写 */
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/",
    },
  ],
}

export const about: AboutContent = {
  paragraphs: [
    "我是一名面向 AI 产品方向的求职者，软件工程出身，习惯从用户问题出发定义功能，而不是先堆技术。",
    "日常用 Cursor、ChatGPT 等工具做 Vibe Coding：把需求拆成可实现的模块，快速做出可演示的 Web / 小程序 Demo，再根据使用反馈迭代。",
    "我不声称拥有多年传统产品经验，也不做模型训练。我更擅长的是：把模糊想法收敛成清晰场景，用 AI 辅助设计与开发，完成从需求到验证的闭环。",
    "我正在寻找 AI 产品经理相关机会——希望加入真正用 AI 改变产品体验的团队，从 0 到 1 参与产品定义、Demo 验证与迭代优化。",
  ],
  principles: [
    {
      title: "先场景，后功能",
      description: "说不清用户在什么情境下使用，就不进入开发。",
    },
    {
      title: "先验证，后完善",
      description: "用最小 Demo 证明路径走得通，再补齐体验细节。",
    },
    {
      title: "AI 是杠杆，不是噱头",
      description: "工具用在提速与验证，不在方案里空喊接入大模型。",
    },
  ],
}

/** 顶层导出，便于 About / 原则区块直接引用 */
export const principles = about.principles

export const workflow: WorkflowContent = {
  title: "产品方法",
  subtitle: "从用户问题出发，结合AI工具快速完成产品探索、设计与验证。",
  steps: [
    {
      id: "discover",
      step: 1,
      title: "需求发现",
      description:
        "识别用户场景与真实问题，明确产品需要解决的核心需求。",
      output: "核心问题定义与验证方向",
      tags: ["场景观察", "问题定义", "需求分析"],
    },
    {
      id: "scenario",
      step: 2,
      title: "用户场景分析",
      description: "拆解用户流程，分析用户痛点，确定功能优先级。",
      output: "关键路径与功能优先级",
      tags: ["用户流程", "痛点拆解", "优先级"],
    },
    {
      id: "ai-design",
      step: 3,
      title: "AI辅助设计",
      description:
        "使用ChatGPT、Cursor辅助完成需求拆解、交互设计和方案验证。",
      output: "可开发的方案与交互边界",
      tags: ["ChatGPT", "Cursor", "Figma"],
    },
    {
      id: "rapid-build",
      step: 4,
      title: "快速开发验证",
      description:
        "通过Vibe Coding方式快速构建Demo，验证产品方案可行性。",
      output: "可体验的产品 Demo",
      tags: ["Cursor", "Vibe Coding", "Demo"],
    },
    {
      id: "iterate",
      step: 5,
      title: "测试优化",
      description:
        "根据体验反馈持续调整功能和交互，优化产品方案。",
      output: "迭代清单与优化方向",
      tags: ["用户测试", "反馈分析", "版本迭代"],
    },
  ],
  closing:
    "这不是传统流水线式的项目流程，而是 AI 时代的产品验证方式：用工具加速探索，用 Demo 尽早验证对不对。",
}

export const projects: Project[] = [
  {
    id: "festival-wholesale-miniapp",
    title: "节日用品批发管理小程序",
    oneLiner:
      "面向节日用品批发场景，解决商品管理、库存维护、订单处理效率低的问题。",
    tags: ["AI辅助开发", "微信小程序", "B端业务", "后台管理"],
    background:
      "节日用品批发具有季节性强、SKU 多、订单变动频繁的特点。日常经营管理依赖分散的表格与口头沟通，信息同步成本高。本项目以微信小程序为载体，探索如何把商品、库存与订单管理收敛到一条可演示的业务主路径中。",
    problem:
      "使用者需要在移动端快速完成商品维护、库存查看与订单处理；当信息分散、操作路径过长时，容易出现漏单、账实不一致和重复沟通，影响日常经营效率。",
    solution:
      "以商品 — 库存 — 订单为核心闭环设计产品方案：支持商品信息管理与分类浏览、库存查看与基础变动记录、订单创建与状态跟进。首版刻意收敛范围，优先打通可演示的主业务路径，再考虑报表、复杂权限等扩展能力。",
    role: "负责批发业务场景分析与需求边界取舍，完成功能规划与模块设计，并使用 Cursor、ChatGPT 等工具进行 AI 辅助开发，将方案做成可演示的小程序 Demo。",
    features: [
      "商品管理：商品信息录入、分类浏览与基础维护",
      "库存管理：库存查看与基础出入库记录",
      "订单管理：订单创建、状态跟进与业务流转",
      "经营总览：关键信息集中查看，降低跨工具切换成本",
    ],
    aiWorkflow: [
      {
        title: "需求收敛",
        detail:
          "梳理批发侧日常操作，将首版范围压到商品、库存与订单，明确暂不做复杂报表与多级权限。",
      },
      {
        title: "方案辅助整理",
        detail:
          "使用 ChatGPT 辅助整理页面清单、字段与状态流转草稿，再人工删减冗余项，形成可开发说明。",
      },
      {
        title: "Vibe Coding 实现",
        detail:
          "使用 Cursor 按模块辅助实现小程序页面与交互，优先打通下单到库存变化的演示路径。",
      },
      {
        title: "走查与修正",
        detail:
          "按业务顺序自测主流程，记录信息不清与跳转问题，调整文案层级与操作反馈。",
      },
    ],
    gallery: [
      {
        label: "商品管理页",
        caption: "页面示意占位 · 待补充真实截图",
      },
      {
        label: "库存与订单页",
        caption: "页面示意占位 · 待补充真实截图",
      },
      {
        label: "业务主路径",
        caption: "页面示意占位 · 待补充真实截图",
      },
    ],
    summary:
      "该项目验证了：在 B 端经营场景中，先收敛主路径、再用 AI 辅助快速做出可演示 Demo，能够更早暴露流程与信息架构问题。重点不在堆功能，而在把商品、库存、订单跑通，为后续迭代留下清晰边界。",
  },
  {
    id: "quotepro-web",
    title: "QuotePro 企业报价管理系统",
    oneLiner:
      "面向中小企业报价场景，把客户、产品、报价单和 PDF 导出收拢到同一条可演示主路径。",
    tags: ["B端业务", "Web应用", "AI辅助开发", "权限设计"],
    background:
      "中小企业日常报价常分散在表格、聊天记录和口头沟通中，客户信息、产品价格与报价状态难以对齐。本项目以 Web Demo 验证：如何用一套客户 — 产品 — 报价闭环，支撑销售日常出单与管理员维护。",
    problem:
      "销售需要快速建单、自动算价并导出 PDF；管理员需要维护产品与权限。信息分散时容易漏项、口径不一，也难以区分草稿、已发送和审批结果。",
    solution:
      "围绕客户管理、产品库、报价单与 Dashboard 设计功能结构：报价行项目自动算价，支持折扣、税率与状态流转；管理员可见成本价，销售权限受限。首版优先打通登录、建单、导出主路径，再补统计与权限细节。",
    role: "负责报价业务场景拆解、功能规划与模块边界设计，明确 admin / sales 权限差异，并使用 Cursor 等工具进行 AI 辅助开发，完成可演示的 Web Demo。",
    features: [
      "Dashboard：报价、客户、产品概览与近期趋势",
      "客户管理：增删改查、等级划分与启用停用",
      "产品库：管理员维护，销售只读，成本价按角色可见",
      "报价单：行项目自动计价、折扣税率、状态流转与 PDF 导出",
    ],
    aiWorkflow: [
      {
        title: "业务范围收敛",
        detail:
          "将首版压到客户、产品、报价与导出，明确暂不做复杂审批流与外部 ERP 对接。",
      },
      {
        title: "方案与权限整理",
        detail:
          "使用 ChatGPT 辅助整理页面、字段与角色权限草稿，再人工确认成本价可见范围。",
      },
      {
        title: "多 Agent 辅助实现",
        detail:
          "按架构、后端 API、前端界面分工，用 Cursor 辅助落地 Flask + Vue3 Demo。",
      },
      {
        title: "主路径走查",
        detail:
          "按登录、建单、算价、导出顺序自测，记录权限与信息展示问题后调整。",
      },
    ],
    gallery: [
      {
        label: "Dashboard 概览",
        caption: "页面示意占位 · 待补充真实截图",
      },
      {
        label: "报价单编辑页",
        caption: "页面示意占位 · 待补充真实截图",
      },
      {
        label: "PDF 导出结果",
        caption: "页面示意占位 · 待补充真实截图",
      },
    ],
    summary:
      "该项目验证了：B 端报价工具要先把建单主路径跑通，再用角色权限控制成本与操作范围。AI 用于加速方案整理与 Demo 实现，产品判断仍围绕报价闭环是否可演示、可理解。",
  },
  {
    id: "ai-hotspot-content-workflow",
    title: "AI热点图文生产与质量审核工作流",
    oneLiner:
      "从热点发现、事实核对、图文生成到发布前审核，把一次对话式创作沉淀成可检查、可复盘的工作流。",
    tags: ["AI工作流", "内容生产", "质量审核", "产品验证"],
    background:
      "AI 热点图文常在对话里一次性生成，事实口径、提示词和成品事后很难复查。本项目在 Cursor 中把热点发现、来源核对、信息结构设计、出图和发布文案整理成可重复执行的流程，并补上发布前质量审核。它不是全自动发布系统，也不代表第三方 Skill 或生图能力由本人开发。",
    problem:
      "内容生产容易跳过事实核对就出图；图片语气往往比正文更绝对；缺少统一审核标准时，错字、来源不清和误导性标题要到事后才被发现。",
    solution:
      "固定主路径：发现热点 → 核对事实并留存来源 → 策划信息结构 → 保存提示词后出图 → 整理发布文案 → 按标准人工终审。审核覆盖事实准确性、来源可追溯、图文一致性和风险表述。V1 作为审计证据保留，发现问题后用独立 V2 文件修复，而不是覆盖原稿。",
    role: "负责选题与传播角度取舍，交叉核对来源并写清事实边界，设计单图信息层级，配置工作流参数，并制定发布前审核标准与问题分级，完成人工终审与 V2 修复闭环。",
    features: [
      "热点发现与选题：查询当前 AI 热点，选定可做成单图的角度",
      "事实与来源留存：区分官方表述、媒体报道和待验证口径",
      "图文成套归档：分析、提纲、提示词、成品图与发布文案一一对应",
      "发布前审核：按维度打分、P0/P1/P2 分级，未过审不发布",
    ],
    aiWorkflow: [
      {
        title: "热点与事实边界",
        detail:
          "选定 4 个主题，交叉阅读热点条目与第一方来源，把实际采用的事实和限定语写入来源文件。",
      },
      {
        title: "信息结构与出图",
        detail:
          "先固定标题、数字、结论和禁止虚构约束，再保存完整提示词后生成图片，不事后用代码改图中文字。",
      },
      {
        title: "发布前审核",
        detail:
          "按事实、来源、图文一致性、风险表述等维度逐项检查。首轮 V1 未直接通过，问题按严重程度分级留档。",
      },
      {
        title: "V2 修复闭环",
        detail:
          "保留 V1 作为证据，按审核问题重做事实表与新图。内容终审通过后，仍如实记录画布比例未按规划输出，不伪装修复。",
      },
    ],
    gallery: [
      {
        label: "热点选题与来源留存",
        caption: "页面示意占位 · 待补充真实截图",
      },
      {
        label: "图文成品与发布文案",
        caption: "页面示意占位 · 待补充真实截图",
      },
      {
        label: "审核标准与 V2 复盘",
        caption: "页面示意占位 · 待补充真实截图",
      },
    ],
    summary:
      "该项目验证了：AI 内容工作流的价值不只是出图，更在于事实边界、提示词留档和发布前审核。首轮审核暴露口径放大与来源不足后，用独立 V2 修复而不是覆盖证据。不统计阅读量或商业效果，重点证明流程可检查、可复盘。",
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

/**
 * AI构建记录
 * AI Product Builder 工作过程：探索 → 设计 → Demo 验证（非技术博客日志）
 */
export const buildLog: BuildLogContent = {
  title: "AI构建记录",
  subtitle: "记录从想法到Demo的AI辅助产品开发过程。",
  stages: [
    {
      id: "explore",
      step: 1,
      title: "产品探索",
      items: ["需求分析", "用户场景拆解", "功能规划", "PRD设计"],
      tools: ["ChatGPT"],
    },
    {
      id: "design",
      step: 2,
      title: "产品设计",
      items: ["页面结构设计", "交互方案", "UI优化", "组件规划"],
      tools: ["Figma", "ChatGPT"],
    },
    {
      id: "demo",
      step: 3,
      title: "Demo开发",
      items: ["前端实现", "功能调试", "体验优化", "版本迭代"],
      tools: ["Cursor", "Next.js", "Vibe Coding"],
    },
  ],
  closing:
    "这是 AI Product Builder 的工作过程展示：用工具加速探索与设计，用可体验 Demo 尽早验证方案是否成立。",
}

export const skills: SkillGroup[] = [
  {
    category: "AI Tools",
    items: [
      {
        name: "Cursor",
        description: "Vibe Coding，辅助实现 Web / 小程序 Demo",
      },
      {
        name: "ChatGPT",
        description: "需求整理、方案草稿、文案与结构辅助",
      },
      {
        name: "Prompt 设计",
        description: "把模糊想法拆成可执行的提示与约束",
      },
      {
        name: "AI 辅助原型",
        description: "用 AI 加速从构想到可演示界面",
      },
    ],
  },
  {
    category: "Product",
    items: [
      {
        name: "需求拆解",
        description: "从业务/用户观察收敛到可做的问题定义",
      },
      {
        name: "用户场景分析",
        description: "路径、约束与不做清单",
      },
      {
        name: "功能结构设计",
        description: "信息架构、主路径与模块边界",
      },
      {
        name: "PRD / 需求说明",
        description: "面向实现的清晰说明",
      },
      {
        name: "Demo 验证",
        description: "走查主流程、记录问题、排优先级",
      },
    ],
  },
  {
    category: "Development",
    items: [
      {
        name: "Web 前端实践",
        description: "页面与交互实现，完成可访问 Demo",
      },
      {
        name: "小程序实践",
        description: "业务向页面与基础功能落地",
      },
      {
        name: "HTML / CSS / JavaScript",
        description: "基础前端实现能力",
      },
      {
        name: "与 AI 结对开发",
        description: "提出约束、审阅生成结果、自己负责取舍",
      },
    ],
  },
]

export const contact: ContactContent = {
  title: "联系我",
  subtitle: "期待探索AI产品方向的机会，与团队一起构建有价值的产品。",
  body: [],
  closing: "",
  primaryCtaLabel: "发送邮件",
  secondaryCtaLabel: "GitHub",
  note: "",
}

export const portfolio: Portfolio = {
  nav,
  profile,
  about,
  principles,
  workflow,
  projects,
  buildLog,
  skills,
  contact,
}

export default portfolio
