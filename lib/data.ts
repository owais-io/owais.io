// Single source of truth for site content.
// Compiled from bio.md, Profile.pdf (LinkedIn export) and the public Credly profile.

export const site = {
  url: "https://owais.io",
  name: "Owais Abbasi",
  title: "Owais Abbasi — Kubestronaut & DevOps / Platform Engineer",
  description:
    "Owais Abbasi is a Kubestronaut (CKA, CKAD, CKS, KCNA, KCSA) and entry-level DevOps / Platform Engineer based in Karachi, Pakistan, working with Kubernetes, Linux and AWS.",
};

export const profile = {
  name: "Owais Abbasi",
  headline: "Kubestronaut · DevOps / Platform Engineer",
  focus: ["Kubernetes", "Linux", "AWS"],
  location: "Karachi, Pakistan",
  availability: "Open to remote, onsite and relocation",
  photo: "/owais-abbasi.jpeg",
  cv: "/owais-abbasi-cv.pdf",
  summary:
    "Career-changer moving from finance and government administration into cloud-native infrastructure. Self-taught since 2020, starting with Python and progressing through AWS, Linux and Kubernetes. I hold all five CNCF Kubernetes certifications (Kubestronaut) and a UK Level 6 Diploma in AIOps. I build and run a kubeadm-based homelab cluster, and I'm looking for an Associate / entry-level DevOps, Cloud or Platform Engineering role, with a long-term focus on platform engineering and Kubernetes security.",
  story: [
    "My path into tech wasn't a straight line. I started out as a Financial Accountant, and in 2020 an article about artificial intelligence in Dawn caught my attention and wouldn't let go. I bought my first Python course on Udemy, and one thing led to another until I found myself completely changing careers.",
    "Since then I've earned a UK Eduqual Level 6 Diploma in AIOps, and I recently passed all five Kubernetes certifications from the CNCF, which makes me a Kubestronaut. That one meant a lot to me.",
    "Right now I'm looking for an Associate or entry-level DevOps role where I can learn from experienced people, contribute to a real team, and keep growing. If you're hiring, or just want to chat about DevOps, cloud, or career changes, feel free to reach out.",
  ],
};

export const contact = {
  email: "owais.abbasi9@gmail.com",
  phone: "+92 301 2316329",
  whatsapp: "https://wa.me/923012316329",
  linkedin: "https://www.linkedin.com/in/owais-io/",
  github: "https://github.com/owais-io",
  credly: "https://www.credly.com/users/owais.io",
};

export const targetRoles = [
  "Associate / Junior DevOps Engineer",
  "Junior Cloud / Kubernetes Engineer",
  "Platform Engineer (entry-level)",
];

export type Certification = {
  code: string;
  name: string;
  issued: string;
  expires?: string;
  badge?: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    code: "CKA",
    name: "Certified Kubernetes Administrator",
    issued: "Aug 2026",
    expires: "Oct 2028",
    badge: "/badges/cka.png",
    verifyUrl: "https://www.credly.com/badges/f3a026a3-ff44-40e1-8ff2-5df000336d7c",
  },
  {
    code: "CKAD",
    name: "Certified Kubernetes Application Developer",
    issued: "Sep 2026",
    expires: "Sep 2028",
    badge: "/badges/ckad.png",
    verifyUrl: "https://www.credly.com/badges/005076af-99ed-4492-9727-0d29f6f9cb97",
  },
  {
    code: "CKS",
    name: "Certified Kubernetes Security Specialist",
    issued: "Oct 2026",
    expires: "Oct 2028",
    badge: "/badges/cks.png",
    verifyUrl: "https://www.credly.com/badges/4e1b2bc4-f8b6-4a07-932c-d070a4178190",
  },
  {
    code: "KCNA",
    name: "Kubernetes and Cloud Native Associate",
    issued: "Sep 2026",
    expires: "Oct 2028",
    badge: "/badges/kcna.png",
    verifyUrl: "https://www.credly.com/badges/f82a737f-d174-41a0-a680-5173d21b047b",
  },
  {
    code: "KCSA",
    name: "Kubernetes and Cloud Native Security Associate",
    issued: "Oct 2026",
    expires: "Oct 2028",
    badge: "/badges/kcsa.png",
    verifyUrl: "https://www.credly.com/badges/d17eac37-e790-437f-9044-0a4f8fac91d0",
  },
];

export type Project = {
  name: string;
  status: "Ongoing" | "In progress";
  started?: string;
  description: string;
  points: string[];
  stack: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "Fintech DevOps Portfolio Project",
    status: "In progress",
    started: "Oct 2026",
    description:
      "An end-to-end, zero-cost DevOps project in the fintech domain, built around a real business application workload.",
    points: [
      "A single Terraform entry point deploys the entire project, locally or on AWS, so anyone can reproduce it.",
      "GitOps delivery with ArgoCD, CI/CD with Jenkins and GitHub Actions, monitoring with Prometheus and Grafana.",
      "Daily commits to GitHub; planned to become a step-by-step tutorial for entry-level candidates.",
    ],
    stack: [
      "Docker",
      "Kubernetes",
      "Helm",
      "ArgoCD",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
      "Prometheus",
      "Grafana",
      "Bash / Python",
      "AWS Free Tier",
    ],
  },
  {
    name: "Kubernetes Homelab Cluster",
    status: "Ongoing",
    description:
      "A self-built, kubeadm-based multi-node Kubernetes cluster for hands-on practice across the whole platform.",
    points: [
      "Covers networking, storage, security, Helm / Kustomize and troubleshooting scenarios end to end.",
      "Runs on an HP Victus laptop (Intel i5-12450H, ~16 GB RAM) with Ubuntu.",
    ],
    stack: ["kubeadm", "containerd", "CNI", "CSI", "Helm", "Kustomize", "Ubuntu"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Containers & Orchestration",
    items: [
      "Kubernetes (kubeadm)",
      "Cluster bootstrapping",
      "Control-plane HA",
      "etcd / Raft",
      "Docker",
      "containerd",
      "CRI-O",
      "crictl",
      "etcdctl",
    ],
  },
  {
    group: "Kubernetes Networking",
    items: [
      "CNI",
      "Pod / Service networking",
      "kube-proxy (iptables / IPVS)",
      "CoreDNS",
      "Ingress",
      "Gateway API",
      "Network Policies",
      "IPAM",
    ],
  },
  {
    group: "Kubernetes Security",
    items: [
      "RBAC",
      "TLS / PKI & Certificates API",
      "ServiceAccounts",
      "Security Contexts",
      "Admission controllers",
      "Encryption at rest",
      "Image security",
    ],
  },
  {
    group: "Storage, Scheduling & Extensibility",
    items: [
      "CSI",
      "PV / PVC",
      "StorageClasses",
      "Taints & tolerations",
      "Node affinity",
      "DaemonSets",
      "Static pods",
      "Priority classes",
      "CRDs",
    ],
  },
  {
    group: "Packaging & Config",
    items: ["Helm (chart anatomy, lifecycle)", "Kustomize (overlays, components, patches)"],
  },
  {
    group: "Linux & Cloud",
    items: [
      "Linux system administration",
      "Ubuntu",
      "Linux networking & namespaces",
      "sysctl",
      "Bash",
      "AWS (Solutions Architect course)",
      "Python",
    ],
  },
  {
    group: "AI Tooling",
    items: ["Claude Code (AI-assisted development)"],
  },
];

export const learningSkills = [
  "Terraform",
  "Jenkins",
  "GitHub Actions",
  "ArgoCD (GitOps)",
  "Prometheus",
  "Grafana",
];

export type Job = {
  role: string;
  org: string;
  period: string;
  location: string;
  description?: string;
};

export const experience: Job[] = [
  {
    role: "Data Entry Operator (BPS-14)",
    org: "Federal Board of Revenue (FBR) — Inland Revenue, Regional Taxpayers Office-I",
    period: "Sep 2016 – Jul 2026",
    location: "Karachi",
    description:
      "Entered, verified and maintained taxpayer records and return data in FBR systems, keeping office records accurate and up to date.",
  },
  {
    role: "CMIS Officer",
    org: "Rahnuma FPAP",
    period: "Sep 2015 – Dec 2015",
    location: "Karachi",
  },
  {
    role: "Account Executive",
    org: "Imam Clinic",
    period: "Mar 2013 – Aug 2015",
    location: "Karachi",
    description:
      "Led a team of 3 Account Officers; responsible for book-keeping, bank reconciliations, receivables and payables, annual financial closing, periodic financial reporting and analysis.",
  },
  {
    role: "Account Officer",
    org: "Imam Clinic",
    period: "Apr 2010 – Nov 2011",
    location: "Karachi",
    description: "Book-keeping, accounts reconciliation, financial reporting and analysis.",
  },
  {
    role: "Store Officer",
    org: "Keystone Enterprises",
    period: "Mar 2010 – Apr 2010",
    location: "Karachi",
  },
];

export const education = [
  {
    title: "Eduqual Level 6 Diploma in AIOps",
    org: "Al Nafi International College (UK Eduqual)",
    period: "2024 – 2025",
    note: "360 credits · bachelor's-degree equivalent",
  },
  {
    title: "M.A. Economics & Finance",
    org: "University of Karachi",
    period: "2011 – 2013",
  },
  {
    title: "Bachelor of Commerce",
    org: "University of Karachi",
    period: "2008 – 2009",
  },
];

export const courses = [
  {
    title: "AWS Solutions Architect",
    note: "Full course with hands-on practicals (exam not taken)",
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Urdu", level: "Native" },
  { name: "Arabic", level: "Elementary" },
];
