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
  email: "hello@example.com",
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
    id: "fitness-tracker-app",
    title: "健身记录App",
    oneLiner:
      "通过训练记录、数据分析和计划管理帮助用户建立长期健身习惯。",
    tags: ["移动端产品", "数据可视化", "ECharts"],
    background:
      "健身用户常面临训练难坚持、记录不连续、进度不直观的问题。本项目聚焦记录 — 查看 — 计划这一轻量路径，探索如何用移动端产品帮助用户建立可持续的训练习惯，并用图表呈现训练变化。",
    problem:
      "用户需要方便地记录训练内容，并看见阶段性变化；当记录成本高、数据不可读、计划不可执行时，很容易中断，难以形成长期习惯。",
    solution:
      "设计以训练记录为核心、数据分析为反馈、计划管理为引导的产品方案。通过结构化记录降低输入负担，用可视化图表帮助用户理解训练趋势，再以可调整的计划模块支持持续行动。不承诺医疗级或专业私教效果，强调可执行与可坚持。",
    role: "负责用户需求分析与核心功能设计，探索训练记录、数据反馈与计划安排等 AI 可辅助场景，并推动可体验 Demo 的方案验证。",
    features: [
      "训练记录：记录训练项目、组次与基础状态",
      "数据可视化：用图表展示训练频次与变化趋势",
      "计划管理：制定与调整可执行的训练安排",
      "习惯反馈：通过进度回顾降低中断后的重启成本",
    ],
    aiWorkflow: [
      {
        title: "场景与主路径定义",
        detail:
          "将体验收敛为记录 → 查看 → 计划，明确首版不做社交与复杂硬件联动。",
      },
      {
        title: "信息架构辅助",
        detail:
          "使用 ChatGPT 辅助补充空态、字段与结果展示结构，再人工确认可读性与优先级。",
      },
      {
        title: "Demo 开发",
        detail:
          "使用 Cursor 辅助实现核心页面，并用 ECharts 完成训练数据可视化展示。",
      },
      {
        title: "体验验证",
        detail:
          "检查记录是否够轻、图表是否可读、计划是否可执行，据此调整信息层级。",
      },
    ],
    gallery: [
      {
        label: "训练记录页",
        caption: "页面示意占位 · 待补充真实截图",
      },
      {
        label: "数据可视化页",
        caption: "页面示意占位 · 待补充真实截图",
      },
      {
        label: "计划管理页",
        caption: "页面示意占位 · 待补充真实截图",
      },
    ],
    summary:
      "该项目验证了：健身类产品要先降低记录成本，再谈计划与激励。通过数据可视化让用户看见变化，比单纯增加功能更有助于习惯建立。AI 工具主要用于加速方案整理与 Demo 实现，产品判断仍围绕可执行与可持续。",
  },
  {
    id: "travel-planner-web",
    title: "旅游规划网站",
    oneLiner: "针对自驾旅行场景，将路线规划、景点信息和行程管理整合。",
    tags: ["Web应用", "信息整理", "AI辅助设计"],
    background:
      "自驾出行前，用户通常已有目的地、天数与偏好，但仍需在多个平台拼凑路线、景点与日程。本项目聚焦旅行前规划环节，探索用一个网页工具把分散信息整理成可读、可调整的行程框架。",
    problem:
      "用户表达旅行需求后，仍要自行跨平台检索与拼接信息，过程耗时且容易遗漏；缺少一个轻量入口，先得到可讨论、可修改的路线与行程草案。",
    solution:
      "以需求输入为起点，整合路线规划、景点信息与行程管理：收集目的地、天数与偏好，输出结构化日程与节点，并支持基础调整。先保证输入需求 → 得到可理解行程草案成立，再考虑分享、收藏等扩展能力。",
    role: "负责自驾旅行场景拆解与信息架构设计，规划需求输入到行程草案的页面结构，并完成主路径的方案整理与体验走查。",
    features: [
      "需求输入：目的地、行程天数与偏好收集",
      "路线规划：生成可读的行程框架与节点",
      "景点信息：将关键点位信息纳入日程结构",
      "行程管理：支持查看与基础调整，便于继续细化",
    ],
    aiWorkflow: [
      {
        title: "最小输入集定义",
        detail:
          "只保留目的地、天数、偏好等关键信息，避免首版表单过重导致无法完成一次规划。",
      },
      {
        title: "AI 辅助结构设计",
        detail:
          "使用 ChatGPT 辅助生成日程 / 节点信息结构与页面流建议，再人工调整浏览顺序。",
      },
      {
        title: "页面实现",
        detail:
          "使用 Cursor 辅助完成网页布局与交互，重点保证行程草案可读、可做基础调整。",
      },
      {
        title: "主路径走查",
        detail:
          "从填写需求到查看行程完整走一遍，修正歧义文案与结果展示问题。",
      },
    ],
    gallery: [
      {
        label: "需求输入页",
        caption: "页面示意占位 · 待补充真实截图",
      },
      {
        label: "行程草案页",
        caption: "页面示意占位 · 待补充真实截图",
      },
      {
        label: "景点与日程页",
        caption: "页面示意占位 · 待补充真实截图",
      },
    ],
    summary:
      "该项目验证了：旅行规划工具的价值在于信息整合与结构输出，而不是一次生成完美行程。通过 AI 辅助加速设计与实现，可以更快验证需求到行程框架是否清晰可用，并为后续细化留出空间。",
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
