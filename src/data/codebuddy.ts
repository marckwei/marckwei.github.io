import type { L10n } from '../i18n/ui';

export interface Stage {
  label: L10n;
  title: L10n;
  body: L10n;
  article: { title: string; url: string; source: L10n };
}

export interface Stat {
  value: L10n;
  label: L10n;
}

export interface Named {
  name: L10n;
  body: L10n;
}

const tencentSecurity: L10n = { en: 'Tencent Security on WeChat', zh: '腾讯安全公众号' };

const sourceArticle = {
  title: '以无厚入有间：CodeBuddy Security 的漏洞发现思路与实践',
  url: 'https://mp.weixin.qq.com/s/9RkpfwzQivCgEAKIiiiKDw',
  source: tencentSecurity,
};

export const codebuddy = {
  summary: {
    en: 'CodeBuddy Security is Tencent’s AI code security audit platform, jointly developed by Yunding Lab, Keen Lab, and the Tencent Cloud Code Analysis (TCA) team. I work on the platform’s capability side. The details page covers how the engine finds vulnerabilities and how it was evaluated.',
    zh: 'CodeBuddy Security 是腾讯的 AI 代码安全审计平台，由云鼎实验室、科恩实验室和腾讯云代码分析（TCA）团队联合研发，我负责平台的能力侧研发。引擎怎样发现漏洞、又是怎样评测的，详见详情页。',
  } satisfies L10n,

  intro: {
    en: 'CodeBuddy Security is Tencent’s AI code security audit platform, jointly developed by Yunding Lab, Keen Lab, and the Tencent Cloud Code Analysis (TCA) team. It runs several engines side by side, including the TCA-Xcheck static analyzer and an AI deep-audit engine, and covers threat modeling, discovery, adversarial review, static and dynamic verification, and fixes. I work on the platform’s capability side; the AI deep-audit engine grew out of VulnAgent, a vulnerability-discovery agent I built.',
    zh: 'CodeBuddy Security 是腾讯的 AI 代码安全审计平台，由云鼎实验室、科恩实验室和腾讯云代码分析（TCA）团队联合研发。平台由 TCA-Xcheck 静态分析与 AI 深度审计等多引擎驱动，覆盖威胁建模、漏洞发现、对抗性审查、动静态验证到修复的全流程。我负责平台的能力侧研发，其中 AI 深度审计引擎源自我开发的漏洞挖掘智能体 VulnAgent。',
  } satisfies L10n,

  source: {
    article: sourceArticle,
    before: { en: 'Method from ', zh: '方法整理自' } satisfies L10n,
    after: {
      en: ' (Tencent Security on WeChat, August 2026).',
      zh: '（腾讯安全公众号，2026 年 8 月）。',
    } satisfies L10n,
  },

  statsNote: {
    en: 'Internal preview · as of 12 Oct 2026',
    zh: '内部体验环境 · 截至 2026.10.12',
  } satisfies L10n,

  stats: [
    {
      value: { en: '8M', zh: '800 万' },
      label: { en: 'model calls', zh: '次模型调用' },
    },
    {
      value: { en: '25,000+', zh: '25,000+' },
      label: { en: 'vulnerability findings', zh: '条漏洞线索' },
    },
    {
      value: { en: '3,200+', zh: '3,200+' },
      label: {
        en: 'vulnerabilities reproduced in real environments with engine-written PoCs',
        zh: '条漏洞由引擎自动生成 PoC，并在真实环境复现成功',
      },
    },
  ] satisfies Stat[],

  method: {
    kicker: { en: 'Method', zh: '方法' } satisfies L10n,
    title: { en: 'The more detailed the intelligence, the steadier the detection', zh: '情报越细，检出越稳' } satisfies L10n,
    lead: {
      en: 'Give any coding agent a real vulnerability report together with the code, with the bug class, exact location, root cause, and trigger path, and it will always “find” the bug: checking a given answer is far easier than producing one from nothing. With complete intelligence every system scores full marks, so the real difference lies in the middle. Told only a bug class and a rough module, can the agent still find it? Many real audits point to one rule:',
      zh: '把一份真实漏洞报告连同代码交给任意一个 Coding Agent，报告里有漏洞类型、精确位置、成因和触发路径，它一定能「找到」：验证一个已经被告知的答案，远比从无到有发现答案容易。完备情报下人人满分，能力的分水岭在中间地带：只告诉它一类漏洞、一个大概的模块，它还能不能找到？大量真实审计观察下来，可以总结出一条经验规律：',
    } satisfies L10n,
    rule: {
      en: 'For an AI agent with basic tool use, as long as the intelligence is true, its chance of finding the vulnerability never decreases as the intelligence gets more detailed.',
      zh: '对具备基本工具调用能力的 AI Agent，只要情报是真的，它检出漏洞的概率随情报详尽程度单调不减。',
    } satisfies L10n,
    paras: [
      {
        en: 'Vulnerability discovery is a search, and the unit of search is a hypothesis: some input reaches some dangerous operation along some path, and goes wrong because a check is missing. For a repository of real size, there are far more hypotheses than an agent can test on a fixed budget. Each piece of valid intelligence adds a constraint, and the smaller the set, the more of it the budget can cover.',
        zh: '漏洞发现是一场搜索，搜索的单位是一个个待检验的猜想：某处的输入，经由某条路径到达某个危险操作，并因缺少某道校验而失控。对有一定规模的仓库，猜想的数量远超 AI 在有限预算内能逐项验证的范围。每一条有效情报都在给这个集合加约束，集合越小，预算越有可能覆盖它。',
      },
      {
        en: 'The engine is built in two halves around this, joined by the module: a functional unit of closely related code around one responsibility. If auditing one unit means repeatedly reading another, they belong together. A module is where the agent enters, and it is free to follow call chains across files and subsystems from there.',
        zh: '引擎据此分成前后两段，中间以「模块」衔接。模块是围绕同一职责、代码紧密关联的功能单元：如果审计其中一个单元时必然要反复阅读另一个单元的代码，两者就不该拆开。模块是审计的入口，不是边界，Agent 从这里进入，可以沿调用链跨文件、跨子系统继续追下去。',
      },
    ] satisfies L10n[],
    intelTitle: { en: 'First half: build intelligence, shrink the space', zh: '前半段：构造情报，缩小搜索空间' } satisfies L10n,
    channels: [
      {
        name: { en: 'Patch analysis', zh: '补丁定位' },
        body: {
          en: 'Usually the finest grain: the invariant a fix enforces, and the angles that might bypass it.',
          zh: '通常最细，给出修复要保证的不变量，以及可能的绕过角度。',
        },
      },
      {
        name: { en: 'Threat intelligence', zh: '威胁情报' },
        body: {
          en: 'Real fixes mined from Git history, giving the bug class and the area involved.',
          zh: '从 Git 历史中挖掘真实修复记录，给出漏洞类型和相关区域。',
        },
      },
      {
        name: { en: 'External intelligence', zh: '外部情报' },
        body: {
          en: 'CVE advisories and security write-ups distilled into candidate modules.',
          zh: '把 CVE 公告、安全文章提炼成候选模块。',
        },
      },
      {
        name: { en: 'Attack-surface analysis', zh: '攻击面分析' },
        body: {
          en: 'Reasoning from code structure. Coarse, but the widest coverage; its job is to make sure code in every other channel’s blind spot still gets looked at.',
          zh: '依据代码结构做推理，粒度较粗但覆盖最广。它的价值在于保底，避免情报盲区里的代码从头到尾无人问津。',
        },
      },
    ] satisfies Named[],
    auditTitle: { en: 'Second half: turn leads into confirmed findings', zh: '后半段：把线索转化为确认结果' } satisfies L10n,
    auditSteps: [
      {
        en: 'The agent enters at a module and explores from there. Real bugs often span files: the entry is in one, and the dangerous operation hides in a fallback branch of another. Rigid boundaries miss this kind of bug systematically.',
        zh: 'Agent 以模块为入口展开探索。真实漏洞经常跨文件分布：入口在一个文件，危险操作却藏在另一个文件的回退分支里，僵硬的边界会系统性漏掉这类问题。',
      },
      {
        en: 'Every candidate is recorded, then reviewed from the opposite side in a separate context: was the input already sanitized upstream, and is the path really reachable?',
        zh: '候选发现先全量落账，再交给独立上下文从反方视角复核：上游是否已经做过净化？这条路径真的可达吗？',
      },
      {
        en: 'Only candidates that survive the challenge are confirmed, and they can go on to a real environment where the system writes a PoC to check exploitability.',
        zh: '只有经得住反驳的候选才会被确认，并可进一步进入真实环境，由系统自动编写 PoC 验证可利用性。',
      },
    ] satisfies L10n[],
    example: {
      en: 'In one React audit, threat intelligence showed a module had just been patched for a deserialization issue. The system checked similar paths and found another one the official fix had missed. A module that was just patched is often worth another look, and that kind of project-level prior is hard for a static rule engine to pull out of code history.',
      zh: '一次对 React 的审计中，威胁情报发现某模块刚修复过一个反序列化问题，系统据此专项排查同类路径，最终找到了官方修复遗漏的另一条路径。刚发生过安全修复的模块往往更值得继续检查，这类项目级先验，传统静态规则引擎很难从代码历史中自动获得。',
    } satisfies L10n,
    platform: {
      en: 'This is what “from model to platform” means: the model is a replaceable stage in the pipeline, and the system is intelligence building, scheduling, adversarial review, real reproduction, and end-to-end metering together.',
      zh: '这就是「从模型到平台」：模型是流水线中可替换的一环，情报构造、任务调度、对抗复核、真实复现和全链路计量共同组成了系统。',
    } satisfies L10n,
  },

  evaluation: {
    kicker: { en: 'Evaluation', zh: '评测' } satisfies L10n,
    title: { en: 'Measured on real projects with known answers', zh: '在答案已知的真实项目上评测' } satisfies L10n,
    paras: [
      {
        en: 'On the internal developer preview, the engine has driven about 8 million model calls and accumulated more than 25,000 findings, more than 3,200 of them reproduced in real environments with engine-written PoCs. Real scans, though, only show what was found, not what was missed. Measuring detection needs a test set with known answers.',
        zh: '在内部开发体验环境中，引擎累计约 800 万次模型调用，积累 25,000 余条漏洞线索，其中 3,200 余条由引擎自动生成 PoC 并在真实环境复现成功。不过，真实扫描只能告诉我们找到了什么，无法告诉我们还有多少没找到；要衡量检出能力，需要答案已知的测试集作为参照。',
      },
      {
        en: 'How a test set is built decides what it measures. CyberGym, widely used, by default hands the system the vulnerable source and a description and asks for a triggering PoC, so it measures how to reproduce a known bug. Synthetic targets have designed bugs, while real projects have evolved ones: targets carry far more bugs per line, mostly planted from known patterns, and suit enumeration and pattern matching better than discovery in ordinary code.',
        zh: '测试集怎么设计，决定了测到的是哪一种能力。业界常用的 CyberGym 默认会同时提供易受攻击的源码和漏洞描述，要求系统生成能触发目标漏洞的 PoC，测的是「已知漏洞怎么复现」。人工靶场则是另一回事：靶场的漏洞是设计出来的，真实项目的漏洞是演化出来的。靶场的漏洞密度通常远高于真实项目，类型也多按已知模式植入，更适合衡量枚举和模式识别能力。',
      },
      {
        en: 'So the test team keeps an internal set: snapshots of well-known open-source projects that contain several confirmed historical CVEs, scanned with no hints at all. It measures how to find unknown bugs. Finding plus reproducing is the whole of vulnerability discovery.',
        zh: '因此，测试团队维护了一套内部测试集：从知名开源项目中选取包含多个已确认历史 CVE 的版本快照，让系统在没有任何提示的前提下自行发现问题，考的是「未知漏洞怎么发现」。发现加上复现，才是漏洞挖掘的全貌。',
      },
    ] satisfies L10n[],
    guardsTitle: { en: 'Three guards against contamination', zh: '三道防污染机制' } satisfies L10n,
    guards: [
      {
        en: 'Offline the whole time; the agent cannot search for answers.',
        zh: '评估全程断网，Agent 无法在线检索外部信息。',
      },
      {
        en: 'Memory checks: reporting a CVE id without reading the code, or an exact location without opening the root-cause file, goes to manual review, and the case is removed once confirmed as recall.',
        zh: '记忆检测：未读代码就直接报出 CVE 编号，或未访问根因文件就给出精确位置的，进入人工复核，确认属于背诵后从基准中剔除。',
      },
      {
        en: 'The engine’s results audit the benchmark in turn: missed bugs, wrong scopes, and duplicates found in review are corrected, and the samples keep being updated.',
        zh: '用引擎的运行结果反向审计基准本身，人工复核中发现的遗漏漏洞、范围错误和重复发现都会被修正，样本持续迭代。',
      },
    ] satisfies L10n[],
    results: [
      {
        name: { en: 'End-to-end detection: 73.2%', zh: '端到端检出率 73.2%' },
        body: {
          en: 'The only input is the repository; leads come from the system’s own threat intelligence and attack-surface analysis, with no web access. All four systems ran on GLM-5.2 to remove the model as a variable. The best of the others, Claude Security, detected 42.7%; CodeBuddy Security detected 73.2%, 1.7 times as many.',
          zh: '输入只有代码仓库，线索由系统通过威胁情报和攻击面分析自行生成，全程禁止联网。四个系统统一使用 GLM-5.2 以排除模型变量：对照组中表现最好的 Claude Security 检出率为 42.7%，CodeBuddy Security 为 73.2%，是前者的 1.7 倍。',
        },
      },
      {
        name: { en: 'With module-level intelligence: 90.2%', zh: '给出模块级情报后 90.2%' },
        body: {
          en: 'Each hint names only a functional module and a risk type, with no file, function, or call chain, for example “the HTTP/2 stream dependency tree in curl may have a use-after-free” or “the .netrc credential lookup in curl may leak passwords”. Locating the code, tracing the path, and confirming the bug are left to the agent, offline. This measures whether the agent can turn incomplete intelligence into real findings.',
          zh: '人工为目标漏洞写模块级情报，只指出功能模块和风险类型，不提供文件、函数或调用链，例如「curl 的 HTTP/2 流依赖树模块存在释放后使用风险」「curl 的 .netrc 凭据查找模块存在密码泄露风险」。定位代码、分析路径和确认漏洞都由 Agent 自行完成，全程禁止联网。这组实验测的是 Agent 能否把不完整的情报转化为真实发现。',
        },
      },
    ] satisfies Named[],
  },

  stagesTitle: { en: 'How it got here', zh: '项目经过' } satisfies L10n,

  stagesNote: {
    en: 'Each stage came with a write-up of mine on WeChat.',
    zh: '每个阶段我都写了一篇公众号文章。',
  } satisfies L10n,

  stages: [
    {
      label: { en: '01 · 2026.01', zh: '01 · 2026.01' },
      title: { en: 'An experiment that worked', zh: '一次成功的尝试' },
      body: {
        en: 'While exploring AI-assisted auditing on Suricata, the model found two high-severity vulnerabilities and built working PoCs. I turned that run into an automated workflow. Two weeks later VulnAgent could go from intelligence gathering to sandbox verification on its own.',
        zh: '用 AI 辅助审计 Suricata 时，模型找到了两个高危漏洞，并构造出可复现的 PoC。我把这次经验做成自动化流程，两周后 VulnAgent 已能从情报挖掘到沙箱验证全程自主完成。',
      },
      article: {
        title: '未来已来：漏洞挖掘智能体 VulnAgent 发现两个 Suricata 高危漏洞，并获官方致谢',
        url: 'https://mp.weixin.qq.com/s/4F2tY7AP-Qyi5Tak7lPVeg',
        source: { en: 'Yunding Lab on WeChat', zh: '云鼎实验室公众号' },
      },
    },
    {
      label: { en: '02 · 2026.06', zh: '02 · 2026.06' },
      title: { en: 'From a demo to a product', zh: '从跑通到上线' },
      body: {
        en: 'A working prototype is not yet a product. Stability, business requirements, and a long stretch of engineering still had to be dealt with before VulnAgent joined the CodeBuddy Security platform as its AI deep-audit engine, alongside rule-based scanning, and launched with Tencent Cloud.',
        zh: '跑通不等于产品。稳定性、业务需求，以及中间还要补上的一大段工程，都是后来才一一解决的。VulnAgent 作为 AI 深度审计引擎接入 CodeBuddy Security 平台，与规则扫描并行，随腾讯云正式发布。',
      },
      article: {
        title: '腾讯云发布企业级 Agent 安全框架与代码安全产品 CodeBuddy Security',
        url: 'https://mp.weixin.qq.com/s/jfadnIZCqI_qTK-VTYcONw',
        source: tencentSecurity,
      },
    },
    {
      label: { en: '03 · 2026.08', zh: '03 · 2026.08' },
      title: { en: 'Vulnerability discovery is a search', zh: '漏洞发现是一场搜索' },
      body: {
        en: 'Two months after launch, I wrote up the methodology and the evaluation as a public technical note. The sections below draw mainly on it.',
        zh: '上线两个月后，我把方法论和评测整理成对外的技术分享，下面的内容主要取自这篇文章。',
      },
      article: sourceArticle,
    },
  ] satisfies Stage[],

  work: {
    kicker: { en: 'My part', zh: '我的工作' } satisfies L10n,
    title: { en: 'What I built', zh: '负责的部分' } satisfies L10n,
    items: [
      {
        en: 'Designed and built VulnAgent; the first version ran end to end, from intelligence to audit, review, and PoC, within two weeks.',
        zh: '设计并实现 VulnAgent，首版两周内跑通从情报、审计、复核到 PoC 的全流程。',
      },
      {
        en: 'Batch orchestration: agents run in parallel containers across many repositories; findings trigger verification automatically, and verified projects go on to the next round.',
        zh: '批量审计编排：容器化并行运行多个 Agent，多仓库排队审计；审计出的漏洞自动触发验证，验证完成后进入下一轮继续深挖。',
      },
      {
        en: 'Multi-round convergence: deduplication by code location, and past task history fed into attack-surface analysis so each round looks somewhere new.',
        zh: '多轮审计收敛：按代码位置去重，把历史任务注入攻击面分析，引导模型每轮换角度探索，减少重复扫描。',
      },
      {
        en: 'External intelligence input and incremental diff review for CI/CD.',
        zh: '外部情报注入，以及面向 CI/CD 的增量 diff 审计。',
      },
      {
        en: 'The first version of the PoC verification agent: it builds the environment, writes the PoC, replays it, and records the whole run for the platform.',
        zh: 'PoC 验证 Agent 第一版：自动构建环境、编写并回放 PoC，复现过程落盘供平台使用。',
      },
    ] satisfies L10n[],
  },

  cves: {
    kicker: { en: 'Results', zh: '成果' } satisfies L10n,
    title: { en: 'CVEs found by VulnAgent', zh: 'VulnAgent 发现的 CVE' } satisfies L10n,
  },
};
