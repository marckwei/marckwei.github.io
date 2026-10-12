import type { L10n } from '../i18n/ui';

export interface ResearchArea {
  title: L10n;
  body: L10n;
}

export interface Pillar {
  label: L10n;
  title: L10n;
  body: L10n;
  article: { title: string; url: string; source: L10n };
}

export const research: ResearchArea[] = [
  {
    title: {
      en: 'AI-driven vulnerability discovery',
      zh: 'AI 驱动的漏洞发现',
    },
    body: {
      en: 'Intelligence narrows the search, an agent audits, an independent pass reviews, and a proof of concept in a sandbox confirms. This is the method behind the CodeBuddy Security engine, described below.',
      zh: '用情报缩小搜索范围，由智能体审计，再经独立复核，最后在沙箱里用 PoC 确认。这是 CodeBuddy Security 审计引擎的方法，详见下文。',
    },
  },
  {
    title: {
      en: 'AI infrastructure and LLM applications',
      zh: 'AI 基础设施与大模型应用',
    },
    body: {
      en: 'Training stacks and the applications built around models: deserialization, expression evaluation, plugin and tool interfaces. Most recent CVEs land here, in NVIDIA Megatron-LM, LiteLLM, Langflow, Open WebUI, and others.',
      zh: '模型训练栈，以及围绕模型构建的应用：反序列化、表达式求值、插件与工具接口。近期的 CVE 大多出在这里，涉及 NVIDIA Megatron-LM、LiteLLM、Langflow、Open WebUI 等。',
    },
  },
  {
    title: {
      en: 'Network protocols and parsers',
      zh: '网络协议与解析器',
    },
    body: {
      en: 'Parsers that take traffic straight off the wire. Public results include remote code execution and denial of service in Suricata, and a FreeRDP heap overflow that a malicious RDP server can turn into code execution.',
      zh: '直接处理网络流量的解析器。公开结果包括 Suricata 的远程代码执行与拒绝服务漏洞，以及 FreeRDP 中可被恶意 RDP 服务器用来执行代码的堆溢出。',
    },
  },
  {
    title: {
      en: 'Browsers and clients',
      zh: '浏览器与客户端',
    },
    body: {
      en: 'Generation-based fuzzing for JavaScript engines and WebAssembly compilers, across JavaScriptCore, V8, and SpiderMonkey. Public results include Firefox CVE-2025-1933 and WebKit CVE-2024-54508.',
      zh: '面向 JavaScript 引擎和 WebAssembly 编译器的生成式模糊测试，覆盖 JavaScriptCore、V8 和 SpiderMonkey。公开结果有 Firefox CVE-2025-1933 和 WebKit CVE-2024-54508。',
    },
  },
  {
    title: {
      en: 'Hosts and cloud',
      zh: '主机与云安全',
    },
    body: {
      en: 'eBPF telemetry for DNS queries and scanning behavior, deployed on about 100,000 hosts, plus security assessments of cloud infrastructure components and AI application sandboxes.',
      zh: '用 eBPF 采集 DNS 查询与扫描行为，部署规模约十万台主机；并对云基础设施组件和 AI 应用沙箱做安全评估。',
    },
  },
];

const tencentSecurity: L10n = { en: 'Tencent Security on WeChat, 2026', zh: '腾讯安全公众号，2026' };

export const engineCopy = {
  intro: {
    en: 'CodeBuddy Security is Tencent Cloud’s enterprise code security product, jointly developed by Yunding Lab, Keen Lab, and the Tencent Cloud Code Analysis (TCA) team. I lead development of its AI deep-audit engine. Three public notes mark the path: a working experiment, a product that still had a long way to go, and a method written down after it had been used.',
    zh: 'CodeBuddy Security 是腾讯云的企业级代码安全产品，由云鼎实验室、科恩实验室和腾讯云代码分析（TCA）团队联合研发。我负责其中 AI 深度审计引擎的研发。下面三篇公开文章对应这条路的三个节点：一次跑通、一次上线，以及后来写下来的方法。',
  } satisfies L10n,
  pillars: [
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
        en: 'A working prototype is not a product. Stability, business requirements, and a long list of other gaps still had to be closed before VulnAgent could sit in CodeBuddy Security as the AI deep-audit engine, next to rule-based scanning, and launch with Tencent Cloud.',
        zh: '跑通不等于产品。稳定性、业务需求，以及中间还要补上的一大段工程，都是后来才一一解决的。VulnAgent 作为 AI 深度审计引擎进入 CodeBuddy Security，与规则扫描组成双引擎，随腾讯云正式发布。',
      },
      article: {
        title: '腾讯云发布企业级 Agent 安全框架与代码安全产品 CodeBuddy Security',
        url: 'https://mp.weixin.qq.com/s/jfadnIZCqI_qTK-VTYcONw',
        source: { en: 'Tencent Security on WeChat', zh: '腾讯安全公众号' },
      },
    },
    {
      label: { en: '03 · 2026.08', zh: '03 · 2026.08' },
      title: { en: 'Intelligence first, then the model', zh: '先切空间，再交给模型' },
      body: {
        en: 'Once a model is good enough, detection depends less on which model you pick than on how tightly you constrain the problem. Intelligence from patches, Git history, advisories, and attack surface cuts the space; the agent then audits from each module, a separate pass reviews, and a PoC in a sandbox decides. Offline, on real projects with known CVEs, the engine detects 73.2% end to end.',
        zh: '模型跨过可用门槛之后，检出差在哪里，往往不在换哪个模型，而在问题被切得有多小。补丁、Git 历史、公开公告和攻击面用来切搜索空间；智能体再以模块为入口审计，独立复核，沙箱里的 PoC 说了算。在含历史 CVE 的真实项目上断网测，端到端检出率 73.2%。',
      },
      article: {
        title: '以无厚入有间：CodeBuddy Security 的漏洞发现思路与实践',
        url: 'https://mp.weixin.qq.com/s/9RkpfwzQivCgEAKIiiiKDw',
        source: { en: 'Tencent Security on WeChat', zh: '腾讯安全公众号' },
      },
    },
  ] satisfies Pillar[],
};
