export type Locale = 'en' | 'zh';

export type L10n = { en: string; zh: string };

export function tx(locale: Locale, text: L10n): string {
  return text[locale];
}

export function homePath(locale: Locale): string {
  return locale === 'zh' ? '/zh/' : '/';
}

export function cvePath(locale: Locale): string {
  return locale === 'zh' ? '/zh/cves/' : '/cves/';
}

export function codebuddyPath(locale: Locale): string {
  return locale === 'zh' ? '/zh/codebuddy/' : '/codebuddy/';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'zh' : 'en';
}

export type PageKind = 'home' | 'cves' | 'codebuddy';

export function pathFor(locale: Locale, kind: PageKind): string {
  if (kind === 'cves') return cvePath(locale);
  if (kind === 'codebuddy') return codebuddyPath(locale);
  return homePath(locale);
}

const domain = {
  'ai-infra': { en: 'AI infrastructure', zh: 'AI 基础设施' },
  network: { en: 'Network and protocol', zh: '网络与协议' },
  web: { en: 'Web', zh: 'Web' },
  client: { en: 'Client', zh: '客户端' },
  embedded: { en: 'Embedded', zh: '嵌入式' },
} as const;

const bugClass = {
  rce: { en: 'RCE', zh: '远程代码执行' },
  memory: { en: 'Memory safety', zh: '内存安全' },
  injection: { en: 'Injection', zh: '注入' },
  deserialization: { en: 'Deserialization', zh: '反序列化' },
  'auth-bypass': { en: 'Auth bypass', zh: '越权' },
  dos: { en: 'Denial of service', zh: '拒绝服务' },
  logic: { en: 'Logic', zh: '逻辑缺陷' },
} as const;

export type DomainId = keyof typeof domain;
export type ClassId = keyof typeof bugClass;

export const ui = {
  en: {
    skip: 'Skip to content',
    navAbout: 'About',
    navAgent: 'CodeBuddy',
    navCves: 'CVEs',
    navPapers: 'Papers',
    navTimeline: 'Experience',
    langLabel: '中文',
    themeDark: 'Dark',
    themeLight: 'Light',
    github: 'GitHub',
    email: 'Email',
    cveVendorLine: 'Major vendors involved, all confirmed and fixed: {vendors}.',
    agentKicker: 'Featured project',
    agentTitle: 'CodeBuddy Security',
    agentMore: 'Details',
    cveKicker: 'Vulnerabilities',
    cveTitle: 'Selected CVEs',
    cveAll: 'All CVEs',
    papersKicker: 'Research',
    papersTitle: 'Publications',
    earlierTitle: 'Earlier research',
    diagram: 'Workflow diagram',
    timelineKicker: 'Background',
    timelineTitle: 'Experience and education',
    filterDomain: 'Domain',
    filterClass: 'Class',
    filterAll: 'All',
    noMatch: 'Nothing matches those filters.',
    cvePageTitle: 'Vulnerabilities',
    cvePageLead:
      'Only issues with an assigned CVE are listed. Dates, CVSS, and CWE come from NVD where a record has been published.',
    groupAgent: 'VulnAgent / CodeBuddy Security, 2026',
    groupBrowser: 'Browser research, 2024–2025',
    groupAcademic: 'Fuzzing at university, 2020–2023',
    notFoundTitle: 'Page not found',
    notFoundBody: 'That URL is not on this site.',
    backHome: 'Back home',
    footerNote: 'Personal site of Xiangwei Zhang.',
    domain,
    bugClass,
  },
  zh: {
    skip: '跳到正文',
    navAbout: '关于',
    navAgent: 'CodeBuddy',
    navCves: '漏洞',
    navPapers: '论文',
    navTimeline: '经历',
    langLabel: 'EN',
    themeDark: '深色',
    themeLight: '浅色',
    github: 'GitHub',
    email: '邮箱',
    cveVendorLine: '涉及的主要厂商（均已确认并修复）：{vendors}',
    agentKicker: '代表项目',
    agentTitle: 'CodeBuddy Security',
    agentMore: '查看详情',
    cveKicker: '漏洞',
    cveTitle: '代表性 CVE',
    cveAll: '全部 CVE',
    papersKicker: '研究',
    papersTitle: '论文',
    earlierTitle: '更早的研究',
    diagram: '流程图',
    timelineKicker: '履历',
    timelineTitle: '工作与教育经历',
    filterDomain: '领域',
    filterClass: '类型',
    filterAll: '全部',
    noMatch: '没有符合这些筛选条件的条目。',
    cvePageTitle: '漏洞',
    cvePageLead: '只列出已经分配 CVE 编号的问题。发布日期、CVSS 和 CWE 取自已公开的 NVD 记录。',
    groupAgent: 'VulnAgent / CodeBuddy Security，2026',
    groupBrowser: '浏览器研究，2024–2025',
    groupAcademic: '在校期间的模糊测试，2020–2023',
    notFoundTitle: '没有这个页面',
    notFoundBody: '这个地址不在本站上。',
    backHome: '回到首页',
    footerNote: '张向伟的个人主页。',
    domain,
    bugClass,
  },
} as const;

export function classLabel(locale: Locale, id: ClassId): string {
  return ui[locale].bugClass[id][locale];
}

export function domainLabel(locale: Locale, id: DomainId): string {
  return ui[locale].domain[id][locale];
}
