import type { L10n } from '../i18n/ui';

export const profile = {
  name: 'Xiangwei Zhang',
  nameZh: '张向伟',
  role: {
    en: 'Senior Security Researcher',
    zh: '高级安全研究员',
  } satisfies L10n,
  org: {
    en: 'Tencent Security Yunding Lab',
    zh: '腾讯安全云鼎实验室',
  } satisfies L10n,
  bio: {
    en: 'I joined Tencent Security Yunding Lab in 2024 as a senior security researcher. Most of my work is finding vulnerabilities: I have found and reported bugs in browser engines, network protocol parsers, and AI infrastructure, and have been acknowledged by Apple, Google, Microsoft, Amazon, Meta, NVIDIA, Mozilla, and others. I work with the offense and defense team on exploit development, and on attack-surface assessments of internal products such as Tencent Meeting and QQ Browser. I also worked on the eBPF host-monitoring plugin for Onion, Tencent’s host intrusion detection system, covering on the order of a million hosts. I now work on capability development for CodeBuddy Security, Tencent’s AI code security audit platform. I studied at Tianjin University from 2017 to 2024 (B.S. and M.S.), advised by Prof. Junjie Wang, fuzzing JavaScript engines and WebAssembly compilers.',
    zh: '2024 年加入腾讯安全云鼎实验室，任高级安全研究员，主要做漏洞挖掘。我在浏览器引擎、网络协议解析器和 AI 基础设施中发现并报告过多个漏洞，获得 Apple、Google、Microsoft、Amazon、Meta、NVIDIA、Mozilla 等厂商致谢；也配合攻防组做利用开发，并给内部产品做攻击面评估（如腾讯会议、QQ 浏览器等）。此外参与过腾讯洋葱反入侵系统的 eBPF 主机监测插件开发，覆盖百万级主机。目前负责腾讯 AI 代码安全审计平台 CodeBuddy Security 的能力侧研发。2017—2024 年在天津大学读本科和硕士，导师王俊杰，研究 JavaScript 引擎与 WebAssembly 编译器的模糊测试。',
  } satisfies L10n,
  email: 'xiangwei1895@gmail.com',
  github: 'marckwei',
  githubUrl: 'https://github.com/marckwei',
};
