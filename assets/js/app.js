const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const languageText = {
        zh: {
          title: "徐梓文 | UI/UX Designer Portfolio",
          description: "徐梓文 UI/UX 作品集，包含作品展示、个人信息、AI 能力、工作经验与交互动效。",
          langButton: "EN",
          langButtonLabel: "Switch to English",
          copied: "已复制",
          copiedPrefix: "已复制：",
          copyFailPrefix: "复制失败，请手动复制：",
          countSuffix: "+",
          caseDetailAltSuffix: "完整作品详情",
          caseLoading: "正在载入完整作品...",
          nav: ["作品", "关于", "AI 能力", "经验", "联系"],
          navCta: "联系方式",
          aria: {
            mainNav: "主导航",
            home: "返回首页",
            pageNav: "页面导航",
            heroTitle: "徐梓文 UI UX Designer and Illustrator",
            stats: "核心数据",
            heroPanel: "个人摘要卡片",
            avatarTags: "个人标签",
            aiConsole: "AI 工作流摘要",
            workflow: "首屏工作方式摘要",
            filter: "作品筛选",
            promptLab: "AI 能力交互演示",
            prototypeWindow: "纯 AI 项目预览窗口",
            experienceMeta: "公司、部门、岗位与工作时间",
            yearPlus: "5年+",
            qrButton: "放大查看微信二维码",
            qrClose: "关闭微信二维码大图",
            caseSummary: "项目摘要"
          },
          hero: {
            lead: "设计专业出身，5年+ UI/UX 经验，擅长把复杂业务转译成清晰、可落地、可持续迭代的数字产品体验。",
            speech: "我关注用户路径、业务指标和视觉表达之间的平衡，也会用 AI 提升调研、概念探索、视觉资产与交互原型的产出效率。",
            stats: [
              "年以上 UI/UX 与跨行业产品设计经验",
              "个以上 Web、App、HMI 与运营设计项目",
              "类核心能力：策略、交互、视觉、AI 工作流"
            ],
            name: "徐梓文",
            avatarTags: ["UI/UX 设计师", "视觉表达者", "AI 协作实践者"],
            miniCards: [
              ["Design focus", "从需求梳理、信息架构、交互流程到高保真视觉与规范沉淀。"],
              ["Business sense", "做过业务、理解一线沟通，也能把体验优化落回真实使用场景。"]
            ],
            console: [
              "Research synthesis -> 用户画像 / 痛点地图 / 机会点",
              "Prompt system -> 视觉方向 / 页面文案 / 交互状态",
              "Prototype loop -> Figma / HTML / 可验证微动效"
            ],
            workflow: [
              ["需求澄清", "先拆目标、角色、路径和限制，避免只做漂亮界面。"],
              ["信息架构", "把复杂内容整理成可扫读、可操作、可扩展的结构。"],
              ["视觉系统", "用版式、色彩、组件和动效形成统一而清晰的体验。"],
              ["原型验证", "结合 Figma、HTML 和 AI 工作流，让方案更接近真实使用。"]
            ]
          },
          filters: ["全部", "Web", "App", "HMI", "平面 / AI"],
          sections: {
            workTitle: "作品展示",
            aboutTitle: "个人信息展示",
            aiTitle: "AI 能力展示",
            aiLead: "AI 能力不只是会出图，而是能把调研、策略、文案、视觉和原型串成可复用流程。"
          },
          projectOpen: "查看完整作品",
          projects: {
            "order-miniapp": {
              title: "点餐小程序设计",
              role: "移动端 UI / 小程序体验 / 组件库",
              goal: "为百茶百道集团线下门店搭建更高效、清晰的点餐与运营体验。",
              result: "完成小程序核心页面、点餐路径、视觉风格与组件化沉淀。",
              desc: "围绕奶茶点餐场景，梳理用户浏览、下单、支付与组件复用体验。",
              tags: ["APP", "小程序", "UI", "组件库"],
              aria: "查看点餐小程序设计完整作品"
            },
            "backend-ui": {
              title: "B端中后台UI设计",
              role: "UI/UX / Web 后台 / 3D 视觉 / 组件库",
              goal: "为 B 端后台建立清晰的信息层级、视觉识别和可复用组件语言。",
              result: "输出后台页面视觉体系、3D 风格资产和组件化表达。",
              desc: "用更清爽的布局、图形化表达和组件沉淀，提升后台产品专业度。",
              tags: ["UI/UX", "WEB", "3D", "组件库"],
              aria: "查看B端中后台UI设计完整作品"
            },
            "hmi-design": {
              title: "HMI设计",
              role: "HMI / UX / 概念设计",
              goal: "探索车载座舱中视觉 DNA、材质纹理与驾驶信息的表达关系。",
              result: "沉淀 HMI 概念视觉、纹理语言与座舱界面方向。",
              desc: "以黑白材质和空间秩序为线索，建立更具质感的车机视觉方向。",
              tags: ["HMI", "UX", "概念设计"],
              aria: "查看HMI设计完整作品"
            },
            "graphic-design": {
              title: "平面作品",
              role: "Illustration / Graphic Design / 运营视觉",
              goal: "用插画、海报和运营物料建立更直接的传播记忆点。",
              result: "输出多组活动视觉、课程海报、产品推介和插画式平面资产。",
              desc: "从活动海报到图形插画，展示视觉构成、配色和信息传达能力。",
              tags: ["Illustration", "Graphic Design"],
              aria: "查看平面作品完整作品"
            },
            "digital-twin": {
              title: "数字孪生项目",
              role: "数字大屏 / UI 设计规范 / PS 视觉",
              goal: "为数字孪生大屏建立清晰的内容结构、视觉规范和展示层级。",
              result: "完成大屏目录、模块拆解和黑金科技风视觉规范设计。",
              desc: "围绕数字大屏的模块化展示，强化科技感、结构感和视觉规范。",
              tags: ["PS", "规范设计"],
              aria: "查看数字孪生项目完整作品"
            },
            "concept-proposal": {
              title: "概念提案",
              role: "HMI / 概念设计 / 3D",
              goal: "把车载体验方向包装成完整、可展示、可讨论的概念方案。",
              result: "输出多屏 HMI 概念界面、状态演示和视觉氛围提案。",
              desc: "将氛围、界面、状态和故事线组织成更完整的 HMI 概念表达。",
              tags: ["HMI", "概念提案", "3D"],
              aria: "查看概念提案完整作品"
            }
          },
          about: {
            profile: "Designed by Xuziwen",
            info: [
              ["姓名", "徐梓文"],
              ["定位", "UI/UX 设计师"],
              ["方向", "Web / App / HMI / AI"],
              ["邮箱", "ziwen0120@yeah.net"],
              ["电话", "13777835072"]
            ],
            principles: [
              ["业务先行", "先搞清楚角色、目标、路径和约束，再决定视觉表达，避免漂亮但无法落地。"],
              ["表达有记忆点", "用排版、节奏、局部色彩和动效建立个性，但不牺牲阅读效率与专业感。"],
              ["系统化沉淀", "把页面经验沉淀成组件、规范、状态和交付文档，让后续迭代更稳。"],
              ["AI 协同", "把 AI 当成增强器，而不是替代者：提升探索速度，最终仍由设计判断把关。"]
            ]
          },
          ai: {
            note: "本样本只制作了推荐页到打招呼这一个路径，更多内容敬请期待。",
            abilities: [
              ["用产品判断约束 AI 方向", "通过分析产品需求，我先把约会资料页拆成认识、判断、信任、行动四个体验任务。头像大图负责第一印象，认证和资料卡降低顾虑，Say Hi 与聊天承接下一步互动。", ["产品理解", "体验策略"]],
              ["用 Skill 链路快速落地", "将 UI/UX、动效、Icon 和代码实现类 Skill 串成工作流：先定层级、状态和视觉基调，再用 AI 生成 HTML/CSS/JS，并持续修正视觉效果如字体、图标、动效和响应式细节。", ["Skill 工作流", "HTML/CSS/JS"]],
              ["把静态想法做成可体验流程", "右侧不是静态效果图，而是可操作原型：推荐刷新、More details 展开、Like 状态、Say Hi、评论/聊天入口和底部导航都能响应，用来快速验证路径是否顺手。", ["可交互", "微动效"]],
              ["沉淀成可复用交付资产", "最终把页面、图片、嵌入模式和交互脚本收进独立文件夹，形成可直接打开、嵌入作品集、继续迭代的原型包，让 AI 产出变成可交付资产。", ["原型包", "可复用"]]
            ]
          },
          experience: {
            unit: "年+",
            lead: "从视觉执行到复杂产品体验，从单页面到系统化后台，我更擅长在真实业务约束里把设计推进下去。",
            items: [
              {
                company: "四川易家讯科",
                meta: ["产品部", "UI设计师", "2024.5 - 至今"],
                body: "负责公司 ToG & ToB 管理端项目全流程设计工作，深度参与政府及大型企业数字化转型相关项目，全面承接平台界面、管理后台、数据可视化、业务系统等核心设计需求。",
                highlight: "主导管理端设计规范体系搭建与组件库 0-1 建设，推动设计资产标准化、模块化复用，保障多项目视觉统一与交付效率。严格把控设计量产审核，确保界面符合政务及企业平台的严谨性、易用性与安全性要求。",
                detail: "精准理解政企客户业务逻辑与使用场景，输出高适配、高体验的管理端解决方案；熟练使用 PS、Figma、Sketch、Blender 等设计软件，并结合 Figma Make、Clouding Coding、即梦、豆包等 AI 工具辅助探索、效率提升与创意落地。"
              },
              {
                company: "四川见山科技",
                meta: ["UI设计部", "UI设计师", "2023.8 - 2024.5"],
                body: "统筹管理 5 人数字大屏 UI 设计团队，进行团队工作赋能，拆解团队工作目标，生成工作路径与落地方案，建立奖惩机制，制定并实施员工技能培训、心理建设，提升员工综合素质。",
                highlight: "任职期间主要负责地产以及政府数字大屏 UI 设计工作，参与评审会共同讨论交互逻辑，提供界面设计创意方案。",
                detail: "主导规范整理，梳理业务逻辑，针对公司核心需要、团队核心问题，0-1 建立 UI 设计规范生产方案，推动优化方案落实，提高工作能效，持续跟进以及内容把控，审核内容质量，对风险敞口进行规避防范。"
              },
              {
                company: "中科创达",
                meta: ["智能汽车HMI设计部", "设计组长", "2021.5 - 2023.5"],
                body: "统筹管理 10-15 人视觉量产设计团队，进行团队工作赋能，拆解团队工作目标，生成工作路径与落地方案，建立奖惩机制，保证团队目标达成；制定并实施员工技能培训、心理建设，提升员工综合素质。",
                highlight: "主导视觉规范整理，梳理业务逻辑，建立问题反馈机制，编写 SOP，提高工作能效；完成视觉 UI 设计组件库搭建，统一视觉结果输出效果，提升设计师工作效率。",
                detail: "开展视觉概念量产审核，根据各项目需求计划，把控内容与风格，确保视觉内容质量；组织新人量产项目培训，编写培训计划、培训课件与培训效果考核指标，累计完成多场培训。"
              }
            ]
          },
          contact: {
            lead: "如果你需要一位能理解业务、能做视觉、能落地交互、也能拥抱 AI 工作流的 UI/UX 设计师，我们可以聊聊。",
            emailButton: "复制邮箱",
            phoneButton: "复制电话",
            location: "中国 / 可远程协作",
            wechatTitle: "微信联系",
            wechatText: "如果你觉得我的作品和岗位方向匹配，欢迎加我微信。我会更完整地介绍项目思路，也方便继续沟通面试安排。",
            qrText: "扫码添加微信，进一步沟通项目、面试或合作。"
          },
          caseView: {
            detail: "作品详情",
            back: "返回作品",
            eyebrow: "Portfolio Detail",
            goal: "完整作品长图来自本地作品集原图。"
          }
        },
        en: {
          title: "Ziwen Xu | UI/UX Designer Portfolio",
          description: "Ziwen Xu's UI/UX portfolio, featuring selected work, profile, AI capability, experience, and interaction design.",
          langButton: "中",
          langButtonLabel: "切换到中文",
          copied: "Copied",
          copiedPrefix: "Copied: ",
          copyFailPrefix: "Copy failed. Please copy manually: ",
          countSuffix: "+",
          caseDetailAltSuffix: "full case study",
          caseLoading: "Loading full case study...",
          nav: ["Work", "About", "AI", "Experience", "Contact"],
          navCta: "Contact",
          aria: {
            mainNav: "Main navigation",
            home: "Back to top",
            pageNav: "Page navigation",
            heroTitle: "Ziwen Xu UI UX Designer and Illustrator",
            stats: "Key stats",
            heroPanel: "Profile summary card",
            avatarTags: "Profile tags",
            aiConsole: "AI workflow summary",
            workflow: "Hero workflow summary",
            filter: "Project filters",
            promptLab: "AI capability interactive demo",
            prototypeWindow: "Pure AI project preview window",
            experienceMeta: "Company, department, role, and dates",
            yearPlus: "5+ years",
            qrButton: "Open WeChat QR code",
            qrClose: "Close WeChat QR code preview",
            caseSummary: "Project summary"
          },
          hero: {
            lead: "Trained in design, with 5+ years of UI/UX experience. I translate complex business needs into clear, feasible, and scalable digital product experiences.",
            speech: "I balance user journeys, business goals, and visual expression, while using AI to speed up research, visuals, and interactive prototypes.",
            stats: [
              "years of UI/UX and cross-industry product design experience",
              "Web, App, HMI, and operation design projects",
              "core strengths: strategy, interaction, visual design, and AI workflow"
            ],
            name: "Ziwen Xu",
            avatarTags: ["UI/UX", "Visual", "AI Collab"],
            miniCards: [
              ["Design focus", "From requirement framing, information architecture, and interaction flows to high-fidelity visuals, design systems, and reusable delivery standards."],
              ["Business sense", "With hands-on business-side experience, I can connect design decisions with real communication, usage scenarios, and implementation constraints."]
            ],
            console: [
              "Research synthesis -> Personas / pain points / opportunities",
              "Prompt system -> Visual direction / copy / interaction states",
              "Prototype loop -> Figma / HTML / testable micro-interactions"
            ],
            workflow: [
              ["Requirement clarity", "Break down goals, roles, paths, and constraints before making the interface beautiful."],
              ["Information architecture", "Organize complex content into structures that are scannable, actionable, and scalable."],
              ["Visual system", "Use layout, color, components, and motion to create a consistent and clear experience."],
              ["Prototype validation", "Use Figma, HTML, and AI workflows to make concepts closer to real use."]
            ]
          },
          filters: ["All", "Web", "App", "HMI", "Graphic / AI"],
          sections: {
            workTitle: "Selected Projects",
            aboutTitle: "Profile",
            aiTitle: "AI Workflow",
            aiLead: "My AI capability is not only image generation. It connects research, strategy, copy, visual direction, and prototypes into reusable workflows."
          },
          projectOpen: "View full case",
          projects: {
            "order-miniapp": {
              title: "Ordering Mini Program Design",
              role: "Mobile UI / Mini Program UX / Component Library",
              goal: "Build a clearer and more efficient ordering and operation experience for Baicha Baidao's offline stores.",
              result: "Delivered key mini program screens, the ordering flow, visual direction, and reusable components.",
              desc: "Designed around tea ordering scenarios, from browsing and ordering to payment and reusable components.",
              tags: ["APP", "Mini Program", "UI", "Components"],
              aria: "View full case study for ordering mini program design"
            },
            "backend-ui": {
              title: "B2B Admin UI Design",
              role: "UI/UX / Web Admin / 3D Visuals / Component Library",
              goal: "Build clear information hierarchy, visual identity, and reusable component language for admin products.",
              result: "Delivered admin interface visuals, 3D-style assets, and component-based expressions.",
              desc: "Improved product professionalism with cleaner layouts, visualized information, and component thinking.",
              tags: ["UI/UX", "WEB", "3D", "Components"],
              aria: "View full case study for B2B admin UI design"
            },
            "hmi-design": {
              title: "HMI Design",
              role: "HMI / UX / Concept Design",
              goal: "Explore the relationship between visual DNA, material texture, and driving information in smart cockpit interfaces.",
              result: "Built HMI concept visuals, texture language, and cockpit interface directions.",
              desc: "Used monochrome material cues and spatial order to shape a more refined in-car interface direction.",
              tags: ["HMI", "UX", "Concept"],
              aria: "View full case study for HMI design"
            },
            "graphic-design": {
              title: "Graphic Work",
              role: "Illustration / Graphic Design / Campaign Visuals",
              goal: "Create stronger communication memory through illustration, posters, and campaign assets.",
              result: "Delivered event visuals, course posters, product promotions, and illustration-based graphic assets.",
              desc: "From campaign posters to graphic illustration, this work shows composition, color, and communication skills.",
              tags: ["Illustration", "Graphic Design"],
              aria: "View full case study for graphic work"
            },
            "digital-twin": {
              title: "Digital Twin Dashboard",
              role: "Data Dashboard / UI Guidelines / PS Visuals",
              goal: "Build clear content structure, visual guidelines, and display hierarchy for digital twin dashboards.",
              result: "Completed dashboard navigation, module breakdown, and a black-gold technology visual system.",
              desc: "Strengthened technology mood, structure, and visual rules through modular dashboard presentation.",
              tags: ["PS", "Guidelines"],
              aria: "View full case study for digital twin dashboard"
            },
            "concept-proposal": {
              title: "Concept Proposal",
              role: "HMI / Concept Design / 3D",
              goal: "Package an in-car experience direction into a complete, presentable, and discussable concept proposal.",
              result: "Delivered multi-screen HMI concepts, state demos, and visual mood proposals.",
              desc: "Organized mood, interface states, and storylines into a complete HMI concept expression.",
              tags: ["HMI", "Concept", "3D"],
              aria: "View full case study for concept proposal"
            }
          },
          about: {
            profile: "Designed by Ziwen Xu",
            info: [
              ["Name", "Ziwen Xu"],
              ["Role", "UI/UX Designer"],
              ["Focus", "Web / App / HMI / AI"],
              ["Email", "ziwen0120@yeah.net"],
              ["Phone", "13777835072"]
            ],
            principles: [
              ["Business first", "Clarify roles, goals, paths, and constraints before deciding the visual expression, so the design is not just beautiful but usable."],
              ["Memorable expression", "Use layout, rhythm, accent color, and motion to build personality without sacrificing readability or professionalism."],
              ["System thinking", "Turn page-level experience into components, guidelines, states, and handoff documents for steadier iteration."],
              ["AI collaboration", "I use AI as an accelerator, not a replacement: it speeds up exploration while design judgment still owns the final decision."]
            ]
          },
          ai: {
            note: "This sample currently covers one path: recommendation page to Say Hi. More content is coming soon.",
            abilities: [
              ["Use product judgment to guide AI", "I first break the dating profile page into four experience tasks: recognition, evaluation, trust, and action. The hero portrait creates the first impression, verification and profile cards reduce hesitation, and Say Hi plus chat continues the interaction.", ["Product thinking", "Experience strategy"]],
              ["Use Skills to ship faster", "I connect UI/UX, motion, icon, and code implementation Skills into one workflow: define hierarchy, states, and visual tone first, then use AI to generate HTML/CSS/JS and keep refining typography, icons, motion, and responsive details.", ["Skill workflow", "HTML/CSS/JS"]],
              ["Turn static ideas into flows", "The right-side demo is not a static mockup. Refresh, More details, Like state, Say Hi, comments/chat entry, and bottom navigation all respond, making the core path easier to validate.", ["Interactive", "Micro motion"]],
              ["Package reusable deliverables", "Finally, I package pages, images, embed mode, and interaction scripts into an independent folder, so the AI output becomes a prototype that can be opened, embedded, and iterated.", ["Prototype package", "Reusable"]]
            ]
          },
          experience: {
            unit: "yrs+",
            lead: "From visual execution to complex product experience, from single pages to systematic admin products, I am good at moving design forward under real business constraints.",
            items: [
              {
                company: "Sichuan Yijia Xunke",
                meta: ["Product Dept.", "UI Designer", "2024.5 - Now"],
                body: "Responsible for the full-process design of ToG and ToB management products, deeply involved in digital transformation projects for government and large enterprise clients, covering platform interfaces, admin systems, data visualization, and business systems.",
                highlight: "Led the 0-1 setup of management-side design guidelines and component libraries, improving asset standardization, modular reuse, visual consistency, and delivery efficiency across multiple projects.",
                detail: "Translated government and enterprise business logic into high-fit management solutions. Skilled in PS, Figma, Sketch, and Blender, while using Figma Make, Clouding Coding, Jimeng, Doubao, and other AI tools for exploration and efficiency."
              },
              {
                company: "Sichuan Jianshan Technology",
                meta: ["UI Design Dept.", "UI Designer", "2023.8 - 2024.5"],
                body: "Managed a five-person digital dashboard UI team, clarified team objectives, built execution paths, designed incentive mechanisms, and organized skill and mindset training to improve team capability.",
                highlight: "Mainly responsible for real estate and government digital dashboard UI design, joining review meetings to discuss interaction logic and provide interface design concepts.",
                detail: "Led guideline organization, business logic mapping, and a 0-1 UI guideline production plan. Improved efficiency, followed implementation, controlled content quality, and reduced delivery risks."
              },
              {
                company: "ThunderSoft",
                meta: ["Smart Vehicle HMI Design Dept.", "Design Lead", "2021.5 - 2023.5"],
                body: "Managed a 10-15 person visual production design team, clarified team goals, built execution paths, set up incentive mechanisms, and ensured team targets were met through training and capability building.",
                highlight: "Led visual guideline organization, business logic mapping, feedback mechanisms, SOP writing, and UI component library construction to unify output quality and improve designer efficiency.",
                detail: "Reviewed visual concept production according to project plans, controlled content and style quality, organized onboarding and production training, and built courseware and assessment metrics."
              }
            ]
          },
          contact: {
            lead: "If you need a UI/UX designer who understands business, crafts visuals, lands interactions, and embraces AI workflows, let's talk.",
            emailButton: "Copy Email",
            phoneButton: "Copy Phone",
            location: "China / Remote-friendly",
            wechatTitle: "WeChat",
            wechatText: "If the role feels aligned, feel free to add me on WeChat. It is the easiest way to continue the interview conversation.",
            qrText: "Scan to add me on WeChat for interview or collaboration."
          },
          caseView: {
            detail: "Case Detail",
            back: "Back to Work",
            eyebrow: "Portfolio Detail",
            goal: "Full case images are loaded from local portfolio assets."
          }
        }
      };

      const progressBar = document.getElementById("progressBar");
      const updateProgress = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      };
      window.addEventListener("scroll", updateProgress, { passive: true });
      updateProgress();

      const safeStorage = {
        get(key) {
          try {
            return window.localStorage.getItem(key);
          } catch (error) {
            return null;
          }
        },
        set(key, value) {
          try {
            window.localStorage.setItem(key, value);
          } catch (error) {
            // Ignore storage errors in restricted browser contexts.
          }
        }
      };
      let currentLanguage = safeStorage.get("portfolioLanguage") === "en" ? "en" : "zh";
      const setText = (selector, value) => {
        const element = document.querySelector(selector);
        if (element) element.textContent = value;
      };
      const setAllText = (selector, values) => {
        document.querySelectorAll(selector).forEach((element, index) => {
          if (values[index] !== undefined) element.textContent = values[index];
        });
      };
      const setAttr = (selector, attribute, value) => {
        const element = document.querySelector(selector);
        if (element) element.setAttribute(attribute, value);
      };
      const setChildrenText = (container, selector, values) => {
        container.querySelectorAll(selector).forEach((element, index) => {
          if (values[index] !== undefined) element.textContent = values[index];
        });
      };
      const setIconButtonLabel = (button, label) => {
        if (!button) return;
        const icon = button.querySelector(".icon");
        button.textContent = "";
        if (icon) button.appendChild(icon);
        button.append(document.createTextNode(label));
      };

      const applyLanguage = (language) => {
        try {
          const text = languageText[language];
          currentLanguage = language;
          safeStorage.set("portfolioLanguage", language);
          document.documentElement.lang = language === "en" ? "en" : "zh-CN";
          document.title = text.title;
          setAttr('meta[name="description"]', "content", text.description);

          setAttr(".nav", "aria-label", text.aria.mainNav);
          setAttr(".brand", "aria-label", text.aria.home);
          setAttr(".nav-links", "aria-label", text.aria.pageNav);
          setAllText(".nav-links a", text.nav);
          const navCta = document.querySelector(".nav-cta");
          setIconButtonLabel(navCta, text.navCta);
          const langToggle = document.getElementById("langToggle");
          if (langToggle) {
            langToggle.textContent = text.langButton;
            langToggle.setAttribute("aria-label", text.langButtonLabel);
          }

          setAttr("h1", "aria-label", text.aria.heroTitle);
          setText(".hero-intro .lead", text.hero.lead);
          setText(".hero-speech", text.hero.speech);
          setAttr(".quick-stats", "aria-label", text.aria.stats);
          setAllText(".quick-stats .stat span", text.hero.stats);
          setAttr(".hero-panel", "aria-label", text.aria.heroPanel);
          setText(".avatar-meta h2", text.hero.name);
          setAttr(".avatar-tags", "aria-label", text.aria.avatarTags);
          setAllText(".avatar-tags span", text.hero.avatarTags);
          document.querySelectorAll(".mini-card").forEach((card, index) => {
            const item = text.hero.miniCards[index];
            if (!item) return;
            card.querySelector("strong").textContent = item[0];
            card.querySelector("p").textContent = item[1];
          });
          setAttr(".ai-console", "aria-label", text.aria.aiConsole);
          setAllText(".console-line span:nth-child(2)", text.hero.console);
          setAttr(".hero-workflow", "aria-label", text.aria.workflow);
          document.querySelectorAll(".hero-workflow .workflow-item").forEach((item, index) => {
            const workflow = text.hero.workflow[index];
            if (!workflow) return;
            item.querySelector("strong").textContent = workflow[0];
            item.querySelector("p").textContent = workflow[1];
          });

          setText("#work .section-head h2", text.sections.workTitle);
          setAttr(".project-tools", "aria-label", text.aria.filter);
          setAllText(".filter-btn", text.filters);
          cards.forEach((card) => {
            const project = text.projects[card.dataset.caseId];
            if (!project) return;
            card.dataset.title = project.title;
            card.dataset.role = project.role;
            card.dataset.goal = project.goal;
            card.dataset.result = project.result;
            card.setAttribute("aria-label", project.aria);
            card.querySelector("h3").textContent = project.title;
            card.querySelector(".project-body > p").textContent = project.desc;
            card.querySelector(".project-open").childNodes[0].textContent = `${text.projectOpen} `;
            setChildrenText(card.querySelector(".project-meta"), ".tag", project.tags);
            card.querySelector(".project-cover-img").alt = project.aria;
          });

          setText("#about .section-head h2", text.sections.aboutTitle);
          setText(".profile-photo strong", text.about.profile);
          document.querySelectorAll(".info-row").forEach((row, index) => {
            const item = text.about.info[index];
            if (!item) return;
            row.children[0].textContent = item[0];
            row.children[1].textContent = item[1];
          });
          document.querySelectorAll(".principle-card").forEach((card, index) => {
            const item = text.about.principles[index];
            if (!item) return;
            card.querySelector("h3").textContent = item[0];
            card.querySelector("p").textContent = item[1];
          });

          setText("#ai .section-head h2", text.sections.aiTitle);
          setText("#ai .section-head .lead", text.sections.aiLead);
          setAttr(".prompt-lab", "aria-label", text.aria.promptLab);
          setAttr(".prototype-window", "aria-label", text.aria.prototypeWindow);
          setText(".prototype-note", text.ai.note);
          document.querySelectorAll(".ability-card").forEach((card, index) => {
            const item = text.ai.abilities[index];
            if (!item) return;
            card.querySelector("h3").textContent = item[0];
            card.querySelector("p").textContent = item[1];
            setChildrenText(card.querySelector(".ability-tags"), "span", item[2]);
          });

          setAttr(".experience-aside .big-number", "aria-label", text.aria.yearPlus);
          setText(".experience-aside .big-number small", text.experience.unit);
          setText("#experience .lead", text.experience.lead);
          document.querySelectorAll(".timeline-meta").forEach((meta) => meta.setAttribute("aria-label", text.aria.experienceMeta));
          document.querySelectorAll(".timeline-item").forEach((item, index) => {
            const exp = text.experience.items[index];
            if (!exp) return;
            item.querySelector("h3").textContent = exp.company;
            setChildrenText(item.querySelector(".timeline-meta"), "span", exp.meta);
            item.querySelector("p").textContent = exp.body;
            item.querySelector(".timeline-highlight").textContent = exp.highlight;
            item.querySelector(".timeline-detail").textContent = exp.detail;
          });

          setText("#contact .lead", text.contact.lead);
          const contactHeading = document.querySelector(".contact-heading");
          if (contactHeading) contactHeading.setAttribute("aria-label", "Let's build something useful.");
          document.querySelectorAll(".contact-actions .btn").forEach((button, index) => {
            setIconButtonLabel(button, [text.contact.emailButton, text.contact.phoneButton][index]);
          });
          setAllText(".contact-line span", [text.contact.location, "ziwen0120@yeah.net", "13777835072"]);
          setAttr("#openWechatQr", "aria-label", text.aria.qrButton);
          setText(".wechat-meta strong", text.contact.wechatTitle);
          setText(".wechat-meta span", text.contact.wechatText);

          setText(".case-title-small", text.caseView.detail);
          setText("#caseTitle", text.caseView.detail);
          setText("#caseGoal", text.caseView.goal);
          setIconButtonLabel(caseBack, text.caseView.back);
          setText(".case-hero .eyebrow", text.caseView.eyebrow);
          setAttr(".case-meta-list", "aria-label", text.aria.caseSummary);
          setText(".case-loading", text.caseLoading);
          setText("#qrLightboxTitle", text.contact.wechatTitle);
          setText(".qr-lightbox-meta span", text.contact.qrText);
          setAttr("#closeWechatQr", "aria-label", text.aria.qrClose);
          const qrImage = document.querySelector(".qr-lightbox-card img");
          if (qrImage) qrImage.alt = language === "en" ? "Ziwen Xu WeChat QR code preview" : "徐梓文微信二维码大图";
          toast.textContent = text.copied;

          if (caseView?.classList.contains("open")) {
            const caseId = location.hash.replace("#case-", "");
            setCaseFromCard(projectByCaseId.get(caseId));
          }
        } catch (error) {
          console.error("Language switch failed:", error);
          document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in-view"));
        }
      };

      const scrollCue = document.querySelector(".scroll-cue");
      const updateScrollCueTheme = () => {
        if (!scrollCue || getComputedStyle(scrollCue).display === "none") return;
        const rect = scrollCue.getBoundingClientRect();
        const x = Math.min(window.innerWidth - 1, Math.max(0, rect.left + rect.width / 2));
        const y = Math.min(window.innerHeight - 1, Math.max(0, rect.top + rect.height / 2));
        const element = document.elementFromPoint(x, y);
        scrollCue.classList.toggle("is-on-dark", Boolean(element?.closest(".dark")));
      };
      window.addEventListener("scroll", updateScrollCueTheme, { passive: true });
      window.addEventListener("resize", updateScrollCueTheme);
      window.addEventListener("hashchange", updateScrollCueTheme);
      window.addEventListener("load", updateScrollCueTheme);
      updateScrollCueTheme();
      requestAnimationFrame(updateScrollCueTheme);

      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14 }
      );
      document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

      const countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = Number(el.dataset.count);
            if (prefersReducedMotion) {
              el.textContent = `${target}${languageText[currentLanguage].countSuffix}`;
              countObserver.unobserve(el);
              return;
            }
            let start = 0;
            const duration = 900;
            const startedAt = performance.now();
            const tick = (now) => {
              const t = Math.min(1, (now - startedAt) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              el.textContent = `${Math.round(start + (target - start) * eased)}${languageText[currentLanguage].countSuffix}`;
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            countObserver.unobserve(el);
          });
        },
        { threshold: 0.6 }
      );
      document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

      const tiltPanel = document.getElementById("tiltPanel");
      if (tiltPanel && !prefersReducedMotion) {
        tiltPanel.addEventListener("pointermove", (event) => {
          const rect = tiltPanel.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          tiltPanel.style.transform = `rotateY(${x * 8}deg) rotateX(${y * -8}deg)`;
        });
        tiltPanel.addEventListener("pointerleave", () => {
          tiltPanel.style.transform = "rotateY(0deg) rotateX(0deg)";
        });
      }

      const filterButtons = document.querySelectorAll(".filter-btn");
      const cards = document.querySelectorAll(".project-card");
      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const filter = button.dataset.filter;
          filterButtons.forEach((item) => item.classList.toggle("active", item === button));
          cards.forEach((card) => {
            const categories = card.dataset.category.split(" ");
            card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
          });
        });
      });

      const caseView = document.getElementById("caseView");
      const caseBack = document.getElementById("caseBack");
      const caseTitle = document.getElementById("caseTitle");
      const caseTitleSmall = document.getElementById("caseTitleSmall");
      const caseGoal = document.getElementById("caseGoal");
      const caseRole = document.getElementById("caseRole");
      const caseResult = document.getElementById("caseResult");
      const caseImage = document.getElementById("caseImage");
      let lastFocusedProject = null;

      const projectByCaseId = new Map(
        Array.from(cards).map((card) => [card.dataset.caseId, card])
      );

      const setCaseFromCard = (card) => {
        if (!card) return;
        caseView.classList.add("is-loading");
        caseTitle.textContent = card.dataset.title;
        caseTitleSmall.textContent = card.dataset.title;
        caseGoal.textContent = card.dataset.goal;
        caseRole.textContent = card.dataset.role;
        caseResult.textContent = card.dataset.result;
        caseImage.removeAttribute("src");
        caseImage.alt = `${card.dataset.title} ${languageText[currentLanguage].caseDetailAltSuffix}`;
        caseImage.src = card.dataset.detail;
        caseView.scrollTop = 0;
      };

      const openCase = (card, shouldPush = true) => {
        if (!card) return;
        lastFocusedProject = card;
        setCaseFromCard(card);
        caseView.classList.add("open");
        caseView.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        caseBack.focus({ preventScroll: true });
        if (shouldPush) {
          history.pushState(null, "", `#case-${card.dataset.caseId}`);
        }
      };

      const closeCase = (shouldUpdateHash = true) => {
        caseView.classList.remove("open", "is-loading");
        caseView.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        caseImage.removeAttribute("src");
        if (shouldUpdateHash && location.hash.startsWith("#case-")) {
          history.replaceState(null, "", "#work");
        }
        if (lastFocusedProject) {
          lastFocusedProject.focus({ preventScroll: true });
        }
      };

      const syncCaseFromHash = () => {
        if (!location.hash.startsWith("#case-")) {
          if (caseView.classList.contains("open")) closeCase(false);
          return;
        }
        const caseId = location.hash.replace("#case-", "");
        const card = projectByCaseId.get(caseId);
        if (card) {
          openCase(card, false);
        }
      };

      cards.forEach((card) => {
        card.addEventListener("click", () => openCase(card));
        card.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openCase(card);
          }
        });
      });

      caseImage.addEventListener("load", () => {
        caseView.classList.remove("is-loading");
      });
      caseImage.addEventListener("error", () => {
        caseView.classList.remove("is-loading");
      });
      caseBack.addEventListener("click", () => closeCase());
      window.addEventListener("hashchange", syncCaseFromHash);
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && caseView.classList.contains("open")) closeCase();
      });
      syncCaseFromHash();

      const openWechatQr = document.getElementById("openWechatQr");
      const closeWechatQr = document.getElementById("closeWechatQr");
      const qrLightbox = document.getElementById("qrLightbox");
      const openQrLightbox = () => {
        qrLightbox.classList.add("open");
        qrLightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        closeWechatQr.focus({ preventScroll: true });
      };
      const closeQrLightbox = () => {
        qrLightbox.classList.remove("open");
        qrLightbox.setAttribute("aria-hidden", "true");
        if (!caseView.classList.contains("open")) {
          document.body.style.overflow = "";
        }
        openWechatQr.focus({ preventScroll: true });
      };
      openWechatQr.addEventListener("click", openQrLightbox);
      closeWechatQr.addEventListener("click", closeQrLightbox);
      qrLightbox.addEventListener("click", (event) => {
        if (event.target === qrLightbox) closeQrLightbox();
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && qrLightbox.classList.contains("open")) closeQrLightbox();
      });

      const toast = document.getElementById("toast");
      let toastTimer = null;
      const showToast = (message) => {
        toast.textContent = message;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
      };

      const copyText = async (text) => {
        if (navigator.clipboard && window.isSecureContext) {
          try {
            await navigator.clipboard.writeText(text);
            return true;
          } catch (error) {
            // Fall back for local file previews or embedded browsers with restricted clipboard permission.
          }
        }

        const textarea = document.createElement("textarea");
        const selection = document.getSelection();
        const selectedRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        textarea.style.top = "0";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus({ preventScroll: true });
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);

        let copied = false;
        try {
          copied = document.execCommand("copy");
        } catch (error) {
          copied = false;
        }

        document.body.removeChild(textarea);
        if (selection && selectedRange) {
          selection.removeAllRanges();
          selection.addRange(selectedRange);
        }
        return copied;
      };

      document.querySelectorAll("[data-copy]").forEach((button) => {
        button.addEventListener("click", async () => {
          const text = button.dataset.copy;
          const copied = await copyText(text);
          const message = copied
            ? `${languageText[currentLanguage].copiedPrefix}${text}`
            : `${languageText[currentLanguage].copyFailPrefix}${text}`;
          showToast(message);
        });
      });

      document.getElementById("langToggle")?.addEventListener("click", () => {
        applyLanguage(currentLanguage === "zh" ? "en" : "zh");
      });

      applyLanguage(currentLanguage);
