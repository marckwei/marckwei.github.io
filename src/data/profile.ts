import type { L10n } from '../i18n/ui';

export const profile = {
  name: 'Xiangwei Zhang',
  nameZh: '张向伟',
  role: {
    en: 'Senior Security Engineer',
    zh: '高级安全工程师',
  } satisfies L10n,
  org: {
    en: 'Tencent Security Yunding Lab',
    zh: '腾讯安全云鼎实验室',
  } satisfies L10n,
  bio: {
    en: 'I lead development of the AI deep-audit engine in CodeBuddy Security, Tencent Cloud’s code security product. The engine grew out of VulnAgent, a vulnerability-discovery agent I built. I worked out its intelligence-driven method and carried it from an internal tool to the core capability of a commercial product. My work covers AI-driven vulnerability discovery, fuzzing, and the security of AI infrastructure and network protocols. I studied at Tianjin University from 2017 to 2024 (B.S. and M.S.), fuzzing JavaScript engines and WebAssembly compilers.',
    zh: '负责腾讯云代码安全产品 CodeBuddy Security 中 AI 深度审计引擎的研发。这套引擎源自我开发的漏洞挖掘智能体 VulnAgent：我提出了它情报驱动的漏洞发现方法，并推动它从内部工具成长为商业化产品的核心能力。关注 AI 驱动的漏洞发现、模糊测试，以及 AI 基础设施与网络协议的安全。2017—2024 年在天津大学读本科和硕士，研究 JavaScript 引擎与 WebAssembly 编译器的模糊测试。',
  } satisfies L10n,
  email: 'xiangwei1895@gmail.com',
  github: 'marckwei',
  githubUrl: 'https://github.com/marckwei',
};
