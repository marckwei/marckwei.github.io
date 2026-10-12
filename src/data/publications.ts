import type { L10n } from '../i18n/ui';

export interface PaperLink {
  label: L10n;
  url: string;
}

export interface Paper {
  title: string;
  authors: string;
  venue: L10n;
  venueDetail?: L10n;
  links: PaperLink[];
  image?: { src: string; width: number; height: number; alt: L10n };
}

export interface EarlierProject {
  name: string;
  url?: string;
  body: L10n;
  image?: { src: string; width: number; height: number; alt: L10n };
}

const paper: L10n = { en: 'Paper', zh: '论文' };
const code: L10n = { en: 'Code', zh: '代码' };

export const papers: Paper[] = [
  {
    title: 'PatchFuzz: Patch Fuzzing for JavaScript Engines',
    authors: 'Junjie Wang, Yuhan Ma, Xiaofei Xie, Xiaoning Du, Xiangwei Zhang',
    venue: { en: 'arXiv, 2025', zh: 'arXiv，2025' },
    links: [
      paperLink(paper, 'https://arxiv.org/abs/2505.00289'),
      paperLink(code, 'https://github.com/PatchFuzz/patchfuzz'),
    ],
    image: {
      src: '/images/patchfuzz_workflow.png',
      width: 1207,
      height: 472,
      alt: { en: 'Workflow of PatchFuzz', zh: 'PatchFuzz 的流程' },
    },
  },
  {
    title: 'WasmCFuzz: Structure-aware Fuzzing for Wasm Compilers',
    authors: 'Xiangwei Zhang, Junjie Wang, Xiaoning Du, Shuang Liu',
    venue: { en: "EnCyCriS/SVM '24, pp. 1–5", zh: "EnCyCriS/SVM '24，第 1–5 页" },
    venueDetail: {
      en: 'Proceedings of the 2024 ACM/IEEE 4th International Workshop on Engineering and Cybersecurity of Critical Systems (EnCyCriS) and 2024 IEEE/ACM Second International Workshop on Software Vulnerability',
      zh: 'Proceedings of the 2024 ACM/IEEE 4th International Workshop on Engineering and Cybersecurity of Critical Systems (EnCyCriS) and 2024 IEEE/ACM Second International Workshop on Software Vulnerability',
    },
    links: [paperLink(paper, 'https://doi.org/10.1145/3643662.3643959')],
    image: {
      src: '/images/wasm_workflow.png',
      width: 1173,
      height: 286,
      alt: { en: 'Workflow of WasmCFuzz', zh: 'WasmCFuzz 的流程' },
    },
  },
  {
    title: 'An Empirical Study on AST-level Mutation-based Fuzzing Techniques for JavaScript Engines',
    authors: 'Song Tang, Shuang Liu, Junjie Wang, Xiangwei Zhang',
    venue: { en: 'Internetware 2023', zh: 'Internetware 2023' },
    links: [
      paperLink(
        paper,
        'https://conf.researchr.org/details/internetware-2023/internetware-2023-papers/3/An-Empirical-Study-on-AST-level-mutation-based-fuzzing-techniques-for-JavaScript-Engi',
      ),
    ],
  },
];

export const earlier: EarlierProject[] = [
  {
    name: 'FuzzJIT',
    url: 'https://github.com/SpaceNaN/fuzzjit',
    body: {
      en: 'Oracle-enhanced fuzzing for JavaScript JIT compilers, built on Fuzzilli. My advisor Junjie Wang and collaborators are the primary authors; I contributed coverage and the other evaluation metrics, and used it to find logic bugs.',
      zh: '基于 Fuzzilli、带测试预言（oracle）的 JavaScript JIT 模糊测试工具。主要作者是导师王俊杰及合作者；我负责覆盖率等评估指标，并用它发现了若干逻辑问题。',
    },
    image: {
      src: '/images/fuzzjit_workflow.png',
      width: 1235,
      height: 453,
      alt: { en: 'Workflow of FuzzJIT', zh: 'FuzzJIT 的流程' },
    },
  },
];

function paperLink(label: L10n, url: string): PaperLink {
  return { label, url };
}
