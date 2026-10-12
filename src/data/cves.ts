import type { ClassId, DomainId, L10n } from '../i18n/ui';

/**
 * Public CVE list. An entry requires an assigned CVE id.
 * Dates, scores, vectors, and CWE identifiers are copied from NVD.
 * Leave those fields off when NVD has not published a record.
 * Adding a finding means appending one object to `cves`.
 */

export type Via = 'vulnagent' | 'fuzzing' | 'manual';
export type CveGroup = 'agent' | 'browser' | 'academic';

export interface CveRef {
  label: L10n;
  url: string;
}

export interface Cve {
  id: string;
  project: string;
  vendor?: string;
  title: L10n;
  class: ClassId;
  domain: DomainId;
  via: Via;
  group: CveGroup;
  year: number;
  published?: string;
  cvss?: number;
  vector?: string;
  cwe?: string;
  refs: CveRef[];
  highlight?: boolean;
}

const advisory: L10n = { en: 'Advisory', zh: '公告' };
const nvdLabel: L10n = { en: 'NVD', zh: 'NVD' };
const report: L10n = { en: 'Report', zh: '报告' };

function nvd(id: string): string {
  return `https://nvd.nist.gov/vuln/detail/${id}`;
}

function ref(label: L10n, url: string): CveRef {
  return { label, url };
}

export const DOMAIN_ORDER: DomainId[] = ['ai-infra', 'network', 'web', 'client', 'embedded'];

export const CLASS_ORDER: ClassId[] = [
  'rce',
  'memory',
  'injection',
  'deserialization',
  'dos',
  'logic',
  'auth-bypass',
];

const NOTABLE_VENDORS = ['Apple', 'Meta', 'NVIDIA', 'Mozilla', 'Apache', 'OISF'] as const;

export const HIGHLIGHT_ORDER = [
  'CVE-2026-23864',
  'CVE-2024-54508',
  'CVE-2025-1933',
  'CVE-2026-94083',
  'CVE-2026-67305',
  'CVE-2025-33248',
  'CVE-2026-24713',
  'CVE-2026-42208',
  'CVE-2026-73539',
  'CVE-2026-42048',
] as const;

export const cves: Cve[] = [
  {
    id: 'CVE-2026-22258',
    project: 'Suricata',
    vendor: 'OISF',
    title: {
      en: 'Unbounded buffer expansion in the DCERPC UDP parser.',
      zh: 'DCERPC UDP 解析器的缓冲区无界扩张。',
    },
    class: 'dos',
    domain: 'network',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    published: '2026-01-27',
    cvss: 7.5,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
    cwe: 'CWE-400',
    refs: [
      ref(advisory, 'https://suricata.io/2026/01/13/suricata-8-0-3-and-7-0-14-released/'),
      ref(nvdLabel, nvd('CVE-2026-22258')),
    ],
  },
  {
    id: 'CVE-2026-22259',
    project: 'Suricata',
    vendor: 'OISF',
    title: {
      en: 'Uncontrolled resource consumption in the DNP3 parser.',
      zh: 'DNP3 解析器的资源消耗不受控制。',
    },
    class: 'dos',
    domain: 'network',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    published: '2026-01-27',
    cvss: 7.5,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
    cwe: 'CWE-400',
    refs: [
      ref(advisory, 'https://suricata.io/2026/01/13/suricata-8-0-3-and-7-0-14-released/'),
      ref(nvdLabel, nvd('CVE-2026-22259')),
    ],
  },
  {
    id: 'CVE-2026-94083',
    project: 'Suricata',
    vendor: 'OISF',
    title: {
      en: 'Type confusion in DNS-over-HTTP/2, an invalid free that can lead to remote code execution.',
      zh: 'DNS-over-HTTP/2 类型混淆，非法释放，可导致远程代码执行。',
    },
    class: 'rce',
    domain: 'network',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    published: '2026-09-20',
    cvss: 9.4,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:L',
    cwe: 'CWE-843',
    refs: [ref(nvdLabel, nvd('CVE-2026-94083'))],
    highlight: true,
  },
  {
    id: 'CVE-2026-67305',
    project: 'FreeRDP',
    vendor: 'FreeRDP',
    title: {
      en: 'Heap buffer overflow in the clipboard virtual channel. A malicious RDP server can gain code execution.',
      zh: '剪贴板虚拟通道的堆缓冲区溢出。恶意 RDP 服务器可导致代码执行。',
    },
    class: 'rce',
    domain: 'network',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    published: '2026-08-01',
    cvss: 8.8,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H',
    cwe: 'CWE-122',
    refs: [ref(nvdLabel, nvd('CVE-2026-67305'))],
    highlight: true,
  },
  {
    id: 'CVE-2026-23864',
    project: 'React',
    vendor: 'Meta',
    title: {
      en: 'Denial of service in React Server Components.',
      zh: 'React Server Components 拒绝服务。',
    },
    class: 'dos',
    domain: 'web',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    published: '2026-01-26',
    cvss: 7.5,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
    cwe: 'CWE-400',
    refs: [
      ref(advisory, 'https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components'),
      ref(nvdLabel, nvd('CVE-2026-23864')),
    ],
    highlight: true,
  },
  {
    id: 'CVE-2026-25982',
    project: 'ImageMagick',
    vendor: 'ImageMagick',
    title: {
      en: 'Heap out-of-bounds read in the DCM decoder.',
      zh: 'DCM 解码器的堆越界读。',
    },
    class: 'memory',
    domain: 'web',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    published: '2026-02-24',
    cvss: 6.5,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:L',
    cwe: 'CWE-125',
    refs: [
      ref(advisory, 'https://github.com/ImageMagick/ImageMagick/security/advisories/GHSA-pmq6-8289-hx3v'),
      ref(nvdLabel, nvd('CVE-2026-25982')),
    ],
  },
  {
    id: 'CVE-2026-26215',
    project: 'manga-image-translator',
    title: {
      en: 'Remote code execution through unsafe deserialization.',
      zh: '不安全的反序列化导致远程代码执行。',
    },
    class: 'rce',
    domain: 'ai-infra',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    published: '2026-02-11',
    cvss: 9.3,
    vector:
      'CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X',
    cwe: 'CWE-502',
    refs: [ref(nvdLabel, nvd('CVE-2026-26215'))],
  },
  {
    id: 'CVE-2026-24713',
    project: 'Apache IoTDB',
    vendor: 'Apache',
    title: {
      en: 'Expression injection through the JEXL evaluator.',
      zh: 'JEXL 表达式求值导致的注入。',
    },
    class: 'injection',
    domain: 'web',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    published: '2026-03-09',
    cvss: 9.8,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    cwe: 'CWE-20',
    refs: [
      ref(advisory, 'https://lists.apache.org/thread/vopgv6y2ccw403b0zv7rvojjrh7x1j5p'),
      ref(nvdLabel, nvd('CVE-2026-24713')),
    ],
    highlight: true,
  },
  {
    id: 'CVE-2025-33247',
    project: 'NVIDIA Megatron-LM',
    vendor: 'NVIDIA',
    title: {
      en: 'Deserialization of untrusted data.',
      zh: '对不可信数据的反序列化。',
    },
    class: 'deserialization',
    domain: 'ai-infra',
    via: 'vulnagent',
    group: 'agent',
    year: 2025,
    published: '2026-03-24',
    cvss: 7.8,
    vector: 'CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H',
    cwe: 'CWE-502',
    refs: [
      ref(advisory, 'https://nvidia.custhelp.com/app/answers/detail/a_id/5769'),
      ref(nvdLabel, nvd('CVE-2025-33247')),
    ],
  },
  {
    id: 'CVE-2025-33248',
    project: 'NVIDIA Megatron-LM',
    vendor: 'NVIDIA',
    title: {
      en: 'Remote code execution by loading a malicious file.',
      zh: '加载恶意文件导致远程代码执行。',
    },
    class: 'rce',
    domain: 'ai-infra',
    via: 'vulnagent',
    group: 'agent',
    year: 2025,
    published: '2026-03-24',
    cvss: 7.8,
    vector: 'CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H',
    cwe: 'CWE-502',
    refs: [
      ref(advisory, 'https://nvidia.custhelp.com/app/answers/detail/a_id/5769'),
      ref(nvdLabel, nvd('CVE-2025-33248')),
    ],
    highlight: true,
  },
  {
    id: 'CVE-2026-24141',
    project: 'NVIDIA Model Optimizer',
    vendor: 'NVIDIA',
    title: {
      en: 'Unsafe deserialization of an ONNX model.',
      zh: 'ONNX 模型的不安全反序列化。',
    },
    class: 'deserialization',
    domain: 'ai-infra',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    published: '2026-03-24',
    cvss: 7.8,
    vector: 'CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H',
    cwe: 'CWE-502',
    refs: [
      ref(advisory, 'https://nvidia.custhelp.com/app/answers/detail/a_id/5798'),
      ref(nvdLabel, nvd('CVE-2026-24141')),
    ],
  },
  {
    id: 'CVE-2026-42208',
    project: 'LiteLLM',
    vendor: 'BerriAI',
    title: { en: 'SQL injection.', zh: 'SQL 注入。' },
    class: 'injection',
    domain: 'ai-infra',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    published: '2026-05-08',
    cvss: 9.8,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    cwe: 'CWE-89',
    refs: [
      ref(advisory, 'https://github.com/BerriAI/litellm/security/advisories/GHSA-r75f-5x8p-qvmc'),
      ref(nvdLabel, nvd('CVE-2026-42208')),
    ],
    highlight: true,
  },
  {
    id: 'CVE-2026-42048',
    project: 'Langflow',
    title: {
      en: 'Path traversal in bulk delete.',
      zh: '批量删除接口的路径穿越。',
    },
    class: 'logic',
    domain: 'ai-infra',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    published: '2026-05-12',
    cvss: 9.6,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:N/I:H/A:H',
    cwe: 'CWE-22',
    refs: [
      ref(advisory, 'https://github.com/langflow-ai/langflow/security/advisories/GHSA-9whx-c884-c68q'),
      ref(nvdLabel, nvd('CVE-2026-42048')),
    ],
    highlight: true,
  },
  {
    id: 'CVE-2026-62925',
    project: 'Gitea',
    vendor: 'Gitea',
    title: {
      en: 'Memory-amplification denial of service while parsing Alpine .PKGINFO files.',
      zh: '解析 Alpine .PKGINFO 时内存放大，造成拒绝服务。',
    },
    class: 'dos',
    domain: 'web',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    refs: [ref(nvdLabel, nvd('CVE-2026-62925'))],
  },
  {
    id: 'CVE-2026-73539',
    project: 'Gitea',
    vendor: 'Gitea',
    title: {
      en: 'Argument injection in an external renderer, leading to remote code execution.',
      zh: '外部渲染器参数注入，可导致远程代码执行。',
    },
    class: 'rce',
    domain: 'web',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    refs: [ref(nvdLabel, nvd('CVE-2026-73539'))],
    highlight: true,
  },
  {
    id: 'CVE-2026-87012',
    project: 'Open WebUI',
    title: {
      en: 'Unvalidated calendar alert offsets disable reminders for every user.',
      zh: '日历提醒的偏移未校验，导致全体用户的提醒失效。',
    },
    class: 'logic',
    domain: 'ai-infra',
    via: 'vulnagent',
    group: 'agent',
    year: 2026,
    published: '2026-09-09',
    cvss: 4.3,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L',
    cwe: 'CWE-754',
    refs: [ref(nvdLabel, nvd('CVE-2026-87012'))],
  },
  {
    id: 'CVE-2025-1933',
    project: 'Firefox',
    vendor: 'Mozilla',
    title: {
      en: 'JIT corruption of WebAssembly i32 return values on 64-bit CPUs, found by fuzzing. Leftover bits can make a value be treated as a different type.',
      zh: '模糊测试发现的问题：在 64 位 CPU 上，JIT 编译 WebAssembly 的 i32 返回值时会带上残留比特，值可能被当成另一种类型。',
    },
    class: 'memory',
    domain: 'client',
    via: 'fuzzing',
    group: 'browser',
    year: 2025,
    published: '2025-03-04',
    cvss: 7.6,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:H',
    refs: [
      ref(advisory, 'https://www.mozilla.org/en-US/security/advisories/mfsa2025-14/'),
      ref(nvdLabel, nvd('CVE-2025-1933')),
    ],
    highlight: true,
  },
  {
    id: 'CVE-2024-54508',
    project: 'WebKit',
    vendor: 'Apple',
    title: {
      en: 'Out-of-bounds read. Crafted web content can crash the process. Fixed in Safari 18.2 and the corresponding Apple system updates.',
      zh: '越界读。构造的网页内容可导致进程崩溃。已在 Safari 18.2 及对应的苹果系统更新中修复。',
    },
    class: 'memory',
    domain: 'client',
    via: 'fuzzing',
    group: 'browser',
    year: 2024,
    published: '2024-12-12',
    cvss: 7.5,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
    cwe: 'CWE-125',
    refs: [
      ref(advisory, 'https://support.apple.com/en-us/121837'),
      ref(nvdLabel, nvd('CVE-2024-54508')),
    ],
    highlight: true,
  },
  {
    id: 'CVE-2020-9983',
    project: 'WebKit',
    vendor: 'Apple',
    title: {
      en: 'Incorrect integer-range analysis for negative masks in the B3 compiler.',
      zh: 'B3 编译器对负掩码的整数范围分析错误。',
    },
    class: 'memory',
    domain: 'client',
    via: 'fuzzing',
    group: 'academic',
    year: 2020,
    published: '2020-10-16',
    cvss: 8.8,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H',
    cwe: 'CWE-787',
    refs: [
      ref(report, 'https://bugs.webkit.org/show_bug.cgi?id=215536'),
      ref(nvdLabel, nvd('CVE-2020-9983')),
    ],
  },
  {
    id: 'CVE-2021-41751',
    project: 'JerryScript',
    title: {
      en: 'Array.prototype.slice did not refresh its end index when a fast array was resized.',
      zh: '快速数组在 slice 过程中长度变化时，结束下标没有更新。',
    },
    class: 'memory',
    domain: 'embedded',
    via: 'fuzzing',
    group: 'academic',
    year: 2021,
    published: '2022-04-05',
    cvss: 9.8,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    cwe: 'CWE-120',
    refs: [
      ref(report, 'https://github.com/jerryscript-project/jerryscript/pull/4797'),
      ref(nvdLabel, nvd('CVE-2021-41751')),
    ],
  },
  {
    id: 'CVE-2023-30406',
    project: 'JerryScript',
    title: {
      en: 'Assertion failure while handling a lexical environment.',
      zh: '处理词法环境时断言失败。',
    },
    class: 'dos',
    domain: 'embedded',
    via: 'fuzzing',
    group: 'academic',
    year: 2023,
    published: '2023-04-24',
    cvss: 5.5,
    vector: 'CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H',
    cwe: 'CWE-400',
    refs: [
      ref(report, 'https://github.com/jerryscript-project/jerryscript/issues/5058'),
      ref(nvdLabel, nvd('CVE-2023-30406')),
    ],
  },
  {
    id: 'CVE-2020-28759',
    project: 'Tengine',
    vendor: 'OAID',
    title: {
      en: 'Buffer overflow from insufficient format checks on crafted input.',
      zh: '输入格式检查不足，构造的输入造成缓冲区溢出。',
    },
    class: 'memory',
    domain: 'ai-infra',
    via: 'manual',
    group: 'academic',
    year: 2020,
    published: '2020-12-26',
    cvss: 5.5,
    vector: 'CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H',
    cwe: 'CWE-120',
    refs: [
      ref(report, 'https://github.com/OAID/Tengine/issues/476'),
      ref(nvdLabel, nvd('CVE-2020-28759')),
    ],
  },
  {
    id: 'CVE-2020-29203',
    project: 'struct2json',
    title: { en: 'Unbounded strcpy.', zh: 'strcpy 未限制长度。' },
    class: 'memory',
    domain: 'embedded',
    via: 'manual',
    group: 'academic',
    year: 2020,
    published: '2020-12-26',
    cvss: 9.8,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    cwe: 'CWE-120',
    refs: [
      ref(report, 'https://github.com/armink/struct2json/issues/13'),
      ref(nvdLabel, nvd('CVE-2020-29203')),
    ],
  },
  {
    id: 'CVE-2020-35242',
    project: 'Flamingo',
    title: {
      en: 'SQL injection in UserManager::updateUserTeamInfoInDbAndMemory.',
      zh: 'UserManager::updateUserTeamInfoInDbAndMemory 中的 SQL 注入。',
    },
    class: 'injection',
    domain: 'web',
    via: 'manual',
    group: 'academic',
    year: 2020,
    published: '2020-12-26',
    cvss: 9.8,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    cwe: 'CWE-89',
    refs: [
      ref(report, 'https://github.com/balloonwj/flamingo/issues/47'),
      ref(nvdLabel, nvd('CVE-2020-35242')),
    ],
  },
  {
    id: 'CVE-2020-35243',
    project: 'Flamingo',
    title: {
      en: 'SQL injection in UserManager::updateUserInfoInDb.',
      zh: 'UserManager::updateUserInfoInDb 中的 SQL 注入。',
    },
    class: 'injection',
    domain: 'web',
    via: 'manual',
    group: 'academic',
    year: 2020,
    published: '2020-12-26',
    cvss: 9.8,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    cwe: 'CWE-89',
    refs: [
      ref(report, 'https://github.com/balloonwj/flamingo/issues/47'),
      ref(nvdLabel, nvd('CVE-2020-35243')),
    ],
  },
  {
    id: 'CVE-2020-35244',
    project: 'Flamingo',
    title: {
      en: 'SQL injection in UserManager::addGroup.',
      zh: 'UserManager::addGroup 中的 SQL 注入。',
    },
    class: 'injection',
    domain: 'web',
    via: 'manual',
    group: 'academic',
    year: 2020,
    published: '2020-12-26',
    cvss: 9.8,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    cwe: 'CWE-89',
    refs: [
      ref(report, 'https://github.com/balloonwj/flamingo/issues/47'),
      ref(nvdLabel, nvd('CVE-2020-35244')),
    ],
  },
  {
    id: 'CVE-2020-35245',
    project: 'Flamingo',
    title: {
      en: 'SQL injection in UserManager::addUser.',
      zh: 'UserManager::addUser 中的 SQL 注入。',
    },
    class: 'injection',
    domain: 'web',
    via: 'manual',
    group: 'academic',
    year: 2020,
    published: '2020-12-26',
    cvss: 9.8,
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    cwe: 'CWE-89',
    refs: [
      ref(report, 'https://github.com/balloonwj/flamingo/issues/47'),
      ref(nvdLabel, nvd('CVE-2020-35245')),
    ],
  },
  {
    id: 'CVE-2021-28013',
    project: 'TinyWebServer',
    title: { en: 'SQL injection.', zh: 'SQL 注入。' },
    class: 'injection',
    domain: 'web',
    via: 'manual',
    group: 'academic',
    year: 2021,
    refs: [ref(report, 'https://github.com/qinguoyi/TinyWebServer/issues/45')],
  },
  {
    id: 'CVE-2021-28014',
    project: 'TinyWebServer',
    title: {
      en: 'Stack overflow from unbounded input.',
      zh: '输入长度未限制，造成栈溢出。',
    },
    class: 'memory',
    domain: 'web',
    via: 'manual',
    group: 'academic',
    year: 2021,
    refs: [ref(report, 'https://github.com/qinguoyi/TinyWebServer/issues/45')],
  },
  {
    id: 'CVE-2021-28015',
    project: 'TinyWebServer',
    title: {
      en: 'Heap overflow from an unbounded SQL statement.',
      zh: 'SQL 语句长度未限制，造成堆溢出。',
    },
    class: 'memory',
    domain: 'web',
    via: 'manual',
    group: 'academic',
    year: 2021,
    refs: [ref(report, 'https://github.com/qinguoyi/TinyWebServer/issues/45')],
  },
];

export interface CveStats {
  total: number;
  vulnagent: number;
  projects: number;
  agentProjects: number;
  vendors: string[];
}

export function cveStats(list: Cve[] = cves): CveStats {
  const agent = list.filter((item) => item.via === 'vulnagent');
  return {
    total: list.length,
    vulnagent: agent.length,
    projects: new Set(list.map((item) => item.project)).size,
    agentProjects: new Set(agent.map((item) => item.project)).size,
    vendors: NOTABLE_VENDORS.filter((vendor) => list.some((item) => item.vendor === vendor)),
  };
}

export function highlightCves(list: Cve[] = cves): Cve[] {
  const byId = new Map(list.map((item) => [item.id, item]));
  return HIGHLIGHT_ORDER.flatMap((id) => {
    const item = byId.get(id);
    return item?.highlight ? [item] : [];
  });
}

export const CVE_GROUPS = ['agent', 'browser', 'academic'] as const;

export function cvesByGroup(list: Cve[] = cves): { group: CveGroup; items: Cve[] }[] {
  return CVE_GROUPS.map((group) => ({
    group,
    items: [...list.filter((item) => item.group === group)].sort((a, b) => {
      const date = (b.published ?? '').localeCompare(a.published ?? '');
      if (date !== 0) return date;
      return b.id.localeCompare(a.id);
    }),
  }));
}

export function severity(score: number): 'critical' | 'high' | 'medium' | 'low' {
  if (score >= 9) return 'critical';
  if (score >= 7) return 'high';
  if (score >= 4) return 'medium';
  return 'low';
}

export function presentDomains(list: Cve[]): DomainId[] {
  return DOMAIN_ORDER.filter((domain) => list.some((item) => item.domain === domain));
}

export function presentClasses(list: Cve[]): ClassId[] {
  return CLASS_ORDER.filter((name) => list.some((item) => item.class === name));
}
