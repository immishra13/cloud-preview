export const papers = [
  {
    id: 1,
    title: "A Method for Web-Based IDE Architecture Re-engineering",
    authors: "Donca, I. C., Sandu, R., & Enache, M.",
    year: 2022,
    methodology: "Architectural decoupling of the browser front-end UI from remote compilation workers using message queues.",
    advantages: "Reduced response latency, cross-platform compilation of local scripts via browser.",
    limitations: "Heavy runtime resource consumption on virtual machines per active workspace.",
    gap: "Lacks automation for package discovery and environment initialization."
  },
  {
    id: 2,
    title: "A Secure and Scalable System for Online Code Execution",
    authors: "Jadhav, A.",
    year: 2023,
    methodology: "Isolated sandboxed processes utilizing containerization with cgroups and Linux namespaces.",
    advantages: "Excellent system-level security isolation, prevents malicious code from affecting host.",
    limitations: "Limited internet connection inside sandboxes, slow container startup times.",
    gap: "No support for real-time live preview URLs for active web ports."
  },
  {
    id: 3,
    title: "Leveraging Docker Containers for Web Microservice Architectures",
    authors: "Raikar, M. M., et al.",
    year: 2025,
    methodology: "Dynamic reverse proxying and routing of HTTP requests to dynamically allocated container slots.",
    advantages: "Elastic scaling, container-level isolation, and rapid service recycling.",
    limitations: "Network port binding conflicts under high parallel workloads.",
    gap: "Does not integrate automated repository static framework analysis."
  },
  {
    id: 4,
    title: "Design and Implementation of Collaborative Code Editors with Remote Container Execution",
    authors: "Chen, Y. et al.",
    year: 2026,
    methodology: "Real-time editor state synchronization via WebSockets coupled with microservices execution containers.",
    advantages: "Low-latency multi-user typing, instant stdout/stderr feedback.",
    limitations: "Massive memory overhead for running continuous backend synchronization loops.",
    gap: "Confined to console applications; cannot generate full-stack live previews."
  },
  {
    id: 5,
    title: "Method for Continuous Integration and Deployment Using Jenkins and Docker",
    authors: "Sandu, R. & Enache, M.",
    year: 2022,
    methodology: "Automated Webhook listeners trigger container build pipelines on remote nodes.",
    advantages: "Guarantees reproducible build environments across local and remote platforms.",
    limitations: "Average build-to-deploy pipeline duration is high (3-5 minutes).",
    gap: "Unsuitable for developers needing instantaneous live previews for short-term reviews."
  },
  {
    id: 6,
    title: "Docker for Multi-Container Applications",
    authors: "Sharma, V., Saxena, H. K., & Singh, A. K.",
    year: 2020,
    methodology: "Orchestrating multi-tier applications using Docker Compose and virtual bridge networking.",
    advantages: "Standardized service interaction, simplifies environment setup.",
    limitations: "Challenging to dynamically map ports and environment keys at runtime.",
    gap: "No mechanism to parse code repos and auto-configure networking."
  },
  {
    id: 7,
    title: "Container and Microservice Driven Design for Cloud Infrastructure DevOps",
    authors: "Kratzke, N.",
    year: 2016,
    methodology: "Bare-metal container clustering combined with reverse-proxy edge routing routers.",
    advantages: "High resource-use efficiency and instantaneous service scale-out.",
    limitations: "High networking setup complexity and manual route maintenance.",
    gap: "Focused on staging and production deployment rather than ephemeral developer previews."
  },
  {
    id: 8,
    title: "Multipurpose Cloud-Based Compiler Based on Microservice Architecture",
    authors: "Al-Sayyad, A.",
    year: 2022,
    methodology: "Decoupled serverless code compiler instances coordinated via high-speed gRPC APIs.",
    advantages: "Extremely scalable, supports multiple programming languages seamlessly.",
    limitations: "Lack of filesystem persistence makes complex projects impossible to run.",
    gap: "Does not support previewing interactive, multi-file web servers."
  },
  {
    id: 9,
    title: "Efficiency and Performance of Container-based Virtualization",
    authors: "Felter, W. et al.",
    year: 2019,
    methodology: "Comparative bench-marking of KVM and Docker container execution across CPU, memory, and IO workloads.",
    advantages: "Demonstrates that Docker has near-zero performance overhead compared to bare metal.",
    limitations: "Vulnerable to kernel-level escapes if containers run with privileged flags.",
    gap: "Does not analyze ephemeral container lifecycles in developer platforms."
  },
  {
    id: 10,
    title: "Security Isolation in Online Coding Environments",
    authors: "Lopez, S. et al.",
    year: 2024,
    methodology: "Applying sandboxing layers like gVisor and custom seccomp profiles to restrict system calls.",
    advantages: "Prevents container breakout exploits, secures shared hosting.",
    limitations: "Introduces significant performance overhead for file system operations.",
    gap: "No integration with automatic package discovery or git checkout routines."
  },
  {
    id: 11,
    title: "Automated Cloud Deployment of Server-side Javascript Applications",
    authors: "Peterson, L.",
    year: 2023,
    methodology: "Detects package.json dependencies and dynamically mounts node_modules inside containers.",
    advantages: "Zero configuration launch for NodeJS applications.",
    limitations: "Does not support non-JS systems or hybrid frameworks.",
    gap: "Does not provide isolated custom temporary subdomains for live routing."
  },
  {
    id: 12,
    title: "Web-based Interactive Programming Environments for STEM Education",
    authors: "Adams, J.",
    year: 2021,
    methodology: "Lightweight sandboxed JS interpreters running directly in the browser's main thread.",
    advantages: "Instant code execution without any backend requirements.",
    limitations: "Cannot execute server-side languages (Node, Python, DB queries) natively.",
    gap: "Lacks full-stack capability and server-side deployment options."
  },
  {
    id: 13,
    title: "A Systematic Mapping Study of Microservices Deployment Patterns",
    authors: "Vora, R. & Joshi, S.",
    year: 2023,
    methodology: "Comprehensive review of container deployment strategies, ingress controllers, and SSL configurations.",
    advantages: "Identifies robust patterns for microservice-to-microservice communication.",
    limitations: "High setup overhead, targeted only for long-term production systems.",
    gap: "No strategies for managing thousands of short-lived, transient user environments."
  },
  {
    id: 14,
    title: "Real-Time Port Routing and Load Balancing in Micro-Hosting Services",
    authors: "Kumar, P.",
    year: 2025,
    methodology: "Dynamic Nginx route injection and Redis-backed active container port tracking.",
    advantages: "Fast proxy configuration updates, low-overhead dynamic routing.",
    limitations: "Susceptible to configuration reload locks under intense concurrent traffic.",
    gap: "Lacks automatic integration with Git repository version control hooks."
  },
  {
    id: 15,
    title: "Zero-Configuration Build and Preview Pipelines for Modern Frameworks",
    authors: "Smith, T.",
    year: 2026,
    methodology: "Static scan of target Git directory trees to auto-generate Docker build configs.",
    advantages: "Simplifies dev-to-test cycle, abstracts Dockerfile creation from user.",
    limitations: "Build fails if non-standard project folders are detected.",
    gap: "High initialization latency during first container image compilation."
  }
];
