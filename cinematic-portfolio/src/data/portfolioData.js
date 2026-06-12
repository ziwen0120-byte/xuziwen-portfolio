import { portfolioAsset } from "../utils/assets";

export const metrics = [
  ["5+", "年 UI/UX 与产品设计经验"],
  ["24+", "Web、App、HMI 与运营项目"],
  ["4", "策略、交互、视觉、AI 工作流"],
  ["0-1", "规范搭建与组件化沉淀"],
];

export const methodPanels = [
  {
    index: "01",
    title: "Requirement Clarity",
    body: "先拆目标、角色、路径和限制，让界面不只是漂亮，而是真正服务业务和使用场景。",
  },
  {
    index: "02",
    title: "Information Architecture",
    body: "把复杂内容整理成可扫读、可操作、可扩展的结构，并建立稳定的信息层级。",
  },
  {
    index: "03",
    title: "Visual System",
    body: "用布局、色彩、组件和动效形成统一的体验语言，让产品更专业、更容易交付。",
  },
  {
    index: "04",
    title: "Prototype Validation",
    body: "结合 Figma、HTML 和 AI 工作流，把概念推进到可演示、可讨论、可验证的状态。",
  },
];

export const aiCapabilities = [
  {
    index: "01",
    title: "用产品判断约束 AI 方向",
    body: "先拆用户、业务、场景和限制，再让 AI 参与需求归纳、竞品启发和机会点整理，避免只追求视觉效果。",
    tags: ["产品理解", "体验策略"],
  },
  {
    index: "02",
    title: "用 Skill 链路快速落地",
    body: "把 UI/UX、动效、Icon、前端和内容 Skill 串成工作流，快速生成可调试、可复用、可交付的页面原型。",
    tags: ["Skill 工作流", "HTML/CSS/JS"],
  },
  {
    index: "03",
    title: "把静态想法做成体验流程",
    body: "从草图和文案进入可浏览、可交互、可验证的体验稿，让团队更早看到路径、状态和反馈是否顺手。",
    tags: ["可交互", "微动效"],
  },
  {
    index: "04",
    title: "沉淀可复用交付资产",
    body: "最终沉淀页面、组件、图像、提示词和交付说明，形成项目资产库，让后续迭代不从零开始。",
    tags: ["资产包", "可复用"],
  },
];

export const projects = [
  {
    index: "01",
    type: "APP / Mini Program",
    title: "点餐小程序设计",
    body: "围绕奶茶点餐场景，梳理浏览、下单、支付与组件复用体验。",
    cover: portfolioAsset("project-order-miniapp.png"),
    detail: portfolioAsset("detail-order-miniapp.png"),
    alt: "点餐小程序设计作品封面",
  },
  {
    index: "02",
    type: "Web / Admin",
    title: "B端中后台 UI 设计",
    body: "用清爽布局、图形化表达和组件沉淀提升后台产品专业度。",
    cover: portfolioAsset("project-backend-ui.png"),
    detail: portfolioAsset("detail-backend-ui.png"),
    alt: "B端中后台UI设计作品封面",
  },
  {
    index: "03",
    type: "HMI / Concept",
    title: "HMI 设计",
    body: "以材质、空间秩序和驾驶信息为线索，探索车机视觉方向。",
    cover: portfolioAsset("project-hmi-design.png"),
    detail: portfolioAsset("detail-hmi-design.png"),
    alt: "HMI设计作品封面",
  },
  {
    index: "04",
    type: "Graphic / AI",
    title: "平面作品",
    body: "从活动海报到图形插画，展示视觉构成、配色和信息传达能力。",
    cover: portfolioAsset("project-graphic-design.png"),
    detail: portfolioAsset("detail-graphic-design.png"),
    alt: "平面作品封面",
  },
  {
    index: "05",
    type: "Dashboard",
    title: "数字孪生项目",
    body: "围绕数字大屏的模块化展示，强化科技感、结构感和视觉规范。",
    cover: portfolioAsset("project-digital-twin.png"),
    detail: portfolioAsset("detail-digital-twin.png"),
    alt: "数字孪生项目作品封面",
  },
  {
    index: "06",
    type: "Proposal / 3D",
    title: "概念提案",
    body: "将氛围、界面状态和故事线组织成完整的 HMI 概念表达。",
    cover: portfolioAsset("project-concept-proposal.png"),
    detail: portfolioAsset("detail-concept-proposal.png"),
    alt: "HMI概念提案作品封面",
  },
];
