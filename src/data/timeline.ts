import type { L10n } from '../i18n/ui';

export interface TimelineItem {
  period: L10n;
  title: L10n;
  org: L10n;
  body: L10n;
}

export const timeline: TimelineItem[] = [
  {
    period: { en: '2024 — present', zh: '2024 — 至今' },
    title: { en: 'Senior Security Engineer', zh: '高级安全工程师' },
    org: { en: 'Tencent Security Yunding Lab', zh: '腾讯安全云鼎实验室' },
    body: {
      en: 'Lead development of the AI deep-audit engine in CodeBuddy Security, and took VulnAgent from an internal tool to the product’s core capability. Earlier: eBPF host telemetry, and vulnerability research on browsers, network protocol parsers, and AI infrastructure.',
      zh: '负责 CodeBuddy Security AI 深度审计引擎的研发，推动 VulnAgent 从内部工具成为产品的核心能力。此前做过基于 eBPF 的主机遥测，以及浏览器、网络协议解析器和 AI 基础设施的漏洞挖掘。',
    },
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
