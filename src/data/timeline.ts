import type { L10n } from '../i18n/ui';

export interface TimelineTrack {
  period: L10n;
  title: L10n;
  points: L10n[];
}

export interface TimelineItem {
  period: L10n;
  title: L10n;
  org: L10n;
  body?: L10n;
  tracks?: TimelineTrack[];
}

export const timeline: TimelineItem[] = [
  {
    period: { en: '2024.04 — present', zh: '2024.04 — 至今' },
    title: { en: 'Senior Security Researcher', zh: '高级安全研究员' },
    org: { en: 'Tencent Security Yunding Lab', zh: '腾讯安全云鼎实验室' },
    tracks: [
      {
        period: { en: '2025.12 — present', zh: '2025.12 — 至今' },
        title: { en: 'AI code auditing: CodeBuddy Security', zh: 'AI 代码审计：CodeBuddy Security' },
        points: [
          {
            en: 'Designed and built VulnAgent, a vulnerability-discovery agent: intelligence scopes the search, the agent audits module by module, an independent pass reviews, and a PoC in a sandbox confirms. The first version ran end to end within two weeks.',
            zh: '从零设计并实现漏洞挖掘智能体 VulnAgent：情报划定范围，智能体逐模块审计，独立复核，沙箱内用 PoC 确认。首版两周内跑通全流程。',
          },
          {
            en: 'Turned VulnAgent into the AI deep-audit engine of the CodeBuddy Security platform: batch orchestration and concurrency, multi-round audits that converge without repeating, external intelligence input, incremental diff review, and automated PoC verification.',
            zh: '把 VulnAgent 做成 CodeBuddy Security 平台的 AI 深度审计引擎：批量编排与并发、多轮审计去重收敛、外部情报注入、增量 diff 审计、PoC 自动验证，并完成与平台侧的对接。',
          },
          {
            en: '16 public CVEs found with it, in React, NVIDIA Megatron-LM, Apache IoTDB, Suricata, FreeRDP, LiteLLM, and others. On a benchmark that scores recall of historical CVEs in well-known open-source projects, it reached 73.2% end to end.',
            zh: '用它发现并公开 16 个 CVE，涉及 React、NVIDIA Megatron-LM、Apache IoTDB、Suricata、FreeRDP、LiteLLM 等。另以知名开源项目的历史 CVE 召回为评测目标，在该 benchmark 上取得 73.2% 的端到端检出。',
          },
        ],
      },
      {
        period: { en: '2024.08 — 2025.12', zh: '2024.08 — 2025.12' },
        title: { en: 'Vulnerability research and red-team support', zh: '漏洞研究与攻防支撑' },
        points: [
          {
            en: 'Built a generation-based WebAssembly fuzzer and ran it against JavaScriptCore, V8, and SpiderMonkey: CVE-2024-54508 (WebKit), CVE-2025-1933 (Firefox), and further JSC and V8 bugs reported to the vendors.',
            zh: '自研面向 WebAssembly 的生成式 fuzzer，持续测试 JavaScriptCore、V8 和 SpiderMonkey，获 CVE-2024-54508（WebKit）、CVE-2025-1933（Firefox），并向厂商提交多个 JSC、V8 缺陷。',
          },
          {
            en: 'Worked with the offense and defense team: turned public browser n-days into reliable exploits across dozens of versions, and found and weaponized vulnerabilities in widely used desktop clients for red-team exercises.',
            zh: '配合攻防组：把公开的浏览器 n-day 做成覆盖数十个版本的稳定利用；对常用桌面客户端做漏洞挖掘与利用开发，成果用于红队演练。',
          },
          {
            en: 'Attack-surface assessments of internal products such as Tencent Meeting and QQ Browser, and of LLM applications, AI code sandboxes, and MCP tool chains during offense and defense exercises, with hardening guidance delivered to the product teams.',
            zh: '给内部产品做攻击面评估，如腾讯会议、QQ 浏览器等；攻防演练与重保期间也对大模型应用、AI 代码沙箱、MCP 工具链做评估，向业务输出加固方案。',
          },
          {
            en: 'Adapted and shipped C/C++ rules for the in-house static analysis platform and worked down false positives during rollout. Patch analysis and fuzzing of network protocol parsers in this period became the starting point for VulnAgent.',
            zh: '为内部静态分析平台适配并上线 C/C++ 规则，处理灰度期误报。这一阶段对网络协议解析器做的补丁分析与 fuzz，后来成为 VulnAgent 的起点。',
          },
        ],
      },
      {
        period: { en: '2024.04 — 2025.04', zh: '2024.04 — 2025.04' },
        title: { en: 'Host intrusion detection and cloud security', zh: '主机入侵检测与云安全' },
        points: [
          {
            en: 'Worked on development of the eBPF host-monitoring plugin for Onion, Tencent’s host intrusion detection system. I took over testing and tuning of the DNS query monitor and added container attribution, built the TCP scan-behavior monitor that ties scans to the originating process, and wrote YARA rules for common proxy tools and their variants.',
            zh: '参与腾讯洋葱反入侵系统的 eBPF 主机监测插件开发：接手 DNS 查询监控的测试与优化，补上容器归属；开发 TCP 扫描行为监测，把扫描与发起进程关联；并用 YARA 规则识别常见代理工具及其变形。',
          },
          {
            en: 'Ran the plugin’s staged rollout and release monitoring; it now runs on the order of a million hosts.',
            zh: '负责插件的分批灰度与发布观测，插件现已覆盖百万级主机。',
          },
          {
            en: 'Security testing of cloud host and network agents: found command injection, SQL injection, and arbitrary file upload issues, and helped the owning teams fix them.',
            zh: '对云上宿主机与网络组件的 agent 做安全测试，发现命令注入、SQL 注入、任意文件上传等问题，并协助业务修复。',
          },
        ],
      },
    ],
  },
  {
    period: { en: '2017 — 2024', zh: '2017 — 2024' },
    title: { en: 'B.S. and M.S.', zh: '本科与硕士' },
    org: { en: 'Tianjin University', zh: '天津大学' },
    body: {
      en: 'Software security, advised by Prof. Junjie Wang. Fuzzing for JavaScript engines and WebAssembly compilers: PatchFuzz and WasmCFuzz, and a contribution to FuzzJIT.',
      zh: '软件安全方向，导师王俊杰。研究 JavaScript 引擎和 WebAssembly 编译器的模糊测试，代表工作有 PatchFuzz 和 WasmCFuzz，并参与了 FuzzJIT。',
    },
  },
];
