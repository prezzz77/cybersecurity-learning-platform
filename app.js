const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const year = document.querySelector("#current-year");
const roadmapList = document.querySelector("#roadmap-list");
const roadmapFallback = document.querySelector("#roadmap-fallback");

const roadmap = [
  {
    level: 0,
    title: "Computer Fundamentals",
    nameZh: "電腦基礎",
    description: "認識 CPU、記憶體、儲存裝置與作業系統，了解程式和檔案如何由電腦管理。",
    direction: "學習硬體、檔案系統、程序、使用者權限與終端機等基本概念。",
    topics: [
      "Computer",
      "CPU",
      "Memory",
      "Storage",
      "Operating System",
      "File System",
      "Process",
      "User & Permission",
      "Terminal",
    ],
    status: "available",
    courseUrl: "computer-fundamentals.html",
  },
  {
    level: 1,
    title: "Networking Fundamentals",
    nameZh: "網路基礎",
    description: "從裝置交換資料的需求開始，理解網路位址、封包、傳輸協定與應用層通訊。",
    direction: "共十堂課，包含 DNS、HTTP / HTTPS、路由器、防火牆，以及一次網站請求的整體追蹤。",
    topics: [
      "IP Address",
      "MAC Address",
      "Port",
      "TCP / UDP",
      "DNS",
      "HTTP / HTTPS",
      "Client / Server",
      "Router",
      "Firewall",
      "Packet",
    ],
    status: "available",
    courseUrl: "networking-fundamentals.html",
  },
  {
    level: 2,
    title: "Linux Fundamentals",
    nameZh: "Linux 基礎",
    description: "使用終端機和 Shell 操作檔案與程序。",
    direction: "練習常用命令、檔案權限、管線與環境變數。",
    topics: [
      "Terminal",
      "Shell",
      "File System",
      "Permission",
      "Process",
      "Command Line",
      "Pipe",
      "Environment Variable",
    ],
    status: "coming-soon",
  },
  {
    level: 3,
    title: "Programming & Computer Systems",
    nameZh: "程式與電腦系統",
    description: "學習程式如何執行，以及程式如何使用電腦記憶體。",
    direction: "涵蓋變數、函式、Stack、Heap、編譯、機器碼與除錯。",
    topics: [
      "Variable",
      "Memory",
      "Stack",
      "Heap",
      "Function",
      "Pointer",
      "Compilation",
      "Machine Code",
      "Debugging",
    ],
    status: "coming-soon",
  },
  {
    level: 4,
    title: "Web Fundamentals",
    nameZh: "Web 網頁基礎",
    description: "認識瀏覽器、伺服器與資料庫在網站中的分工。",
    direction: "學習 HTTP Request / Response、Cookie、Session、登入授權與 API。",
    topics: [
      "Browser",
      "HTTP",
      "Request / Response",
      "Cookie",
      "Session",
      "Authentication",
      "Authorization",
      "Database",
      "API",
    ],
    status: "coming-soon",
  },
  {
    level: 5,
    title: "Web Security",
    nameZh: "Web 網頁安全",
    description: "了解網站常見漏洞的成因及其可能影響。",
    direction: "使用授權的教學環境練習，並學習輸入驗證、存取控制等防護方式。",
    topics: [
      "SQL Injection",
      "XSS",
      "CSRF",
      "IDOR",
      "Path Traversal",
      "File Upload",
      "Command Injection",
      "Authentication Vulnerabilities",
    ],
    status: "coming-soon",
  },
  {
    level: 6,
    title: "Cryptography",
    nameZh: "密碼學",
    description: "分辨加密、雜湊與編碼，了解它們在資料保護中的用途。",
    direction: "學習金鑰、對稱與非對稱加密、數位簽章、憑證與 TLS。",
    distinction: "Encryption ≠ Hash ≠ Encoding",
    topics: [
      "Encryption",
      "Hash",
      "Encoding",
      "Symmetric Encryption",
      "Asymmetric Encryption",
      "Digital Signature",
      "Certificate",
      "TLS",
    ],
    status: "coming-soon",
  },
  {
    level: 7,
    title: "System Security",
    nameZh: "系統安全",
    description: "了解作業系統如何管理權限，並限制程式可存取的資源。",
    direction: "學習存取控制、權限、程序隔離、沙箱、核心與記憶體保護。",
    topics: [
      "Authentication",
      "Authorization",
      "Access Control",
      "Privilege",
      "Process Isolation",
      "Sandbox",
      "Kernel",
      "System Call",
      "Memory Protection",
    ],
    status: "coming-soon",
  },
  {
    level: 8,
    title: "Attack & Defense",
    nameZh: "攻擊與防禦",
    description: "認識常見威脅、漏洞與攻擊方式，以及它們對系統造成的風險。",
    direction: "學習日誌、監控、事件應變、修補與系統強化等防禦工作。",
    topics: [
      "Threat",
      "Vulnerability",
      "Exploit",
      "Attack Surface",
      "Malware",
      "Phishing",
      "Privilege Escalation",
      "Persistence",
      "Logging",
      "Monitoring",
      "Incident Response",
      "Hardening",
    ],
    status: "coming-soon",
  },
  {
    level: 9,
    title: "CTF & Practical Security",
    nameZh: "CTF 與實作安全",
    description: "在授權的練習題中，應用網頁、密碼學、逆向工程與數位鑑識等知識。",
    direction: "課程將說明解題過程、漏洞或弱點的成因，以及相應的防禦方式。",
    topics: [
      "Web",
      "Crypto",
      "Reverse Engineering",
      "Pwn",
      "Forensics",
      "OSINT",
      "Networking",
    ],
    status: "coming-soon",
  },
];

const createElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (text !== undefined) {
    element.textContent = text;
  }
  return element;
};

if (roadmapList) {
  roadmap.forEach((stage) => {
    const isAvailable = stage.status === "available";
    const item = createElement("li", "roadmap-item");
    const card = createElement(
      "article",
      `roadmap-card${isAvailable ? " is-available" : ""}`,
    );
    const titleId = `roadmap-level-${stage.level}-title`;
    card.id = `level-${stage.level}`;
    card.setAttribute("aria-labelledby", titleId);

    const cardTop = createElement("div", "roadmap-card-top");
    cardTop.append(
      createElement("span", "roadmap-level", `LEVEL ${stage.level}`),
      createElement(
        "span",
        `roadmap-status${isAvailable ? " is-available" : ""}`,
        isAvailable ? "Available" : "Coming Soon",
      ),
    );

    const title = createElement("h3", "roadmap-title", stage.title);
    title.id = titleId;
    const nameZh = createElement("p", "roadmap-name-zh", stage.nameZh);
    const description = createElement("p", "roadmap-description", stage.description);
    const direction = createElement("p", "roadmap-direction", stage.direction);
    const topicsLabel = createElement("span", "roadmap-topics-label", "主要內容");
    const topics = createElement("div", "roadmap-topics");

    stage.topics.forEach((topic) => {
      topics.append(createElement("span", "roadmap-topic", topic));
    });

    card.append(cardTop, title, nameZh, description);
    if (stage.distinction) {
      card.append(createElement("p", "roadmap-direction crypto-distinction", stage.distinction));
    }
    card.append(direction, topicsLabel, topics);

    if (isAvailable) {
      const courseLink = createElement("a", "roadmap-start", "查看課程");
      courseLink.href = stage.courseUrl;
      courseLink.setAttribute(
        "aria-label",
        `查看 Level ${stage.level} ${stage.nameZh} 課程`,
      );
      courseLink.append(createElement("span", "", "→"));
      card.append(courseLink);
    }

    const node = createElement("span", "roadmap-node");
    node.setAttribute("aria-hidden", "true");
    const spacer = createElement("span", "roadmap-spacer");
    spacer.setAttribute("aria-hidden", "true");
    item.append(card, node, spacer);
    roadmapList.append(item);
  });

  const legend = createElement("div", "roadmap-legend");
  legend.setAttribute("aria-label", "課程狀態說明");
  const availableLegend = createElement("span", "roadmap-legend-item");
  availableLegend.append(
    createElement("span", "legend-dot is-available"),
    document.createTextNode("Available — 可進入已開放課程"),
  );
  const comingSoonLegend = createElement("span", "roadmap-legend-item");
  comingSoonLegend.append(
    createElement("span", "legend-dot"),
    document.createTextNode("Coming Soon — 尚未開放"),
  );
  legend.append(availableLegend, comingSoonLegend);
  legend.setAttribute("role", "group");
  roadmapList.after(legend);

  if (roadmapFallback) {
    roadmapFallback.hidden = true;
  }
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}

document.querySelectorAll("[data-flow-demo]").forEach((demo) => {
  const runButton = demo.querySelector("[data-flow-run]");
  const steps = Array.from(demo.querySelectorAll("[data-flow-step]"));
  const status = demo.querySelector("[data-flow-status]");

  if (!status || steps.length === 0) {
    return;
  }

  const resetSteps = () => {
    steps.forEach((step) => {
      step.classList.remove("is-active", "is-complete", "is-selected");
      if (step instanceof HTMLButtonElement) {
        step.setAttribute("aria-pressed", "false");
      }
    });
  };

  demo.querySelectorAll("[data-flow-select]").forEach((selectableStep) => {
    selectableStep.addEventListener("click", () => {
      resetSteps();
      selectableStep.classList.add("is-active", "is-selected");
      selectableStep.setAttribute("aria-pressed", "true");
      status.textContent = selectableStep.dataset.flowLabel ?? "";
    });
  });

  if (!runButton) {
    return;
  }

  runButton.addEventListener("click", async () => {
    runButton.disabled = true;
    resetSteps();
    const labels = steps.map((step) => step.dataset.flowLabel ?? "");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      steps.forEach((step) => step.classList.add("is-complete"));
      status.textContent = `流程完成。${labels.join("；")}`;
      runButton.disabled = false;
      return;
    }

    for (const [index, step] of steps.entries()) {
      if (index > 0) {
        steps[index - 1].classList.remove("is-active");
        steps[index - 1].classList.add("is-complete");
      }
      step.classList.add("is-active");
      status.textContent = labels[index];
      await new Promise((resolve) => window.setTimeout(resolve, 650));
    }

    steps[steps.length - 1].classList.remove("is-active");
    steps[steps.length - 1].classList.add("is-complete");
    status.textContent = `流程完成。${labels.join("；")}`;
    runButton.disabled = false;
  });
});

document.querySelectorAll("[data-program-demo]").forEach((demo) => {
  const form = demo.querySelector("form");
  const input = demo.querySelector("[data-program-input]");
  const operation = demo.querySelector("[data-program-operation]");
  const output = demo.querySelector("[data-program-output]");
  const details = demo.querySelector("[data-program-details]");
  const programDataButton = demo.querySelector("[data-program-data-toggle]");
  const programDataNote = demo.querySelector("[data-program-data-note]");

  if (form && input instanceof HTMLInputElement && operation instanceof HTMLSelectElement && output) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!input.value.trim() || !input.validity.valid) {
        input.focus();
        output.textContent = "請輸入有效的數字。";
        if (details) {
          details.textContent = "";
        }
        return;
      }

      const value = input.valueAsNumber;
      const result = operation.value === "double" ? value * 2 : value + 3;
      const operationLabel = operation.value === "double" ? `${value} × 2` : `${value} + 3`;
      output.textContent = String(result);
      if (details) {
        details.textContent = `Input 資料：${value}。Program 指定的操作：${operationLabel}。CPU 依照這個操作處理資料，得到 Output：${result}。`;
      }
    });
  }

  if (programDataButton && programDataNote) {
    programDataButton.addEventListener("click", () => {
      const isExpanded = programDataButton.getAttribute("aria-expanded") === "true";
      programDataButton.setAttribute("aria-expanded", String(!isExpanded));
      programDataNote.hidden = isExpanded;
    });
  }
});

document.querySelectorAll("[data-file-tree]").forEach((tree) => {
  const pathOutput = tree.querySelector("[data-file-path-output]");
  const buttons = tree.querySelectorAll("[data-file-path]");

  if (!pathOutput || buttons.length === 0) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      pathOutput.textContent = `${button.dataset.fileLabel}：相對路徑 ${button.dataset.filePath}；絕對路徑 /home/learner/project/${button.dataset.filePath}`;
    });
  });
});

document.querySelectorAll("[data-permission-demo]").forEach((demo) => {
  const permissions = Array.from(demo.querySelectorAll("[data-permission]"));
  const operation = demo.querySelector("[data-permission-operation]");
  const result = demo.querySelector("[data-permission-result]");

  if (permissions.length === 0 || !(operation instanceof HTMLSelectElement) || !result) {
    return;
  }

  const updateResult = () => {
    const allowed = permissions.some(
      (permission) =>
        permission instanceof HTMLInputElement &&
        permission.value === operation.value &&
        permission.checked,
    );
    const action = operation.selectedOptions[0]?.textContent ?? "操作";
    result.textContent = `${allowed ? "允許" : "拒絕"}：使用者 Mei 的 Process ${allowed ? "可以" : "不能"}${action} report.txt。這是依照目前勾選的檔案權限作出的判斷。`;
  };

  permissions.forEach((permission) => permission.addEventListener("change", updateResult));
  operation.addEventListener("change", updateResult);
});

document.querySelectorAll("[data-terminal-demo]").forEach((demo) => {
  const form = demo.querySelector("[data-terminal-form]");
  const input = demo.querySelector("[data-terminal-input]");
  const output = demo.querySelector("[data-terminal-output]");
  const locationLabel = demo.querySelector("[data-terminal-location]");
  const promptLabel = demo.querySelector("[data-terminal-prompt]");
  const status = demo.querySelector("[data-terminal-status]");

  if (
    !(form instanceof HTMLFormElement) ||
    !(input instanceof HTMLInputElement) ||
    !output ||
    !locationLabel ||
    !promptLabel ||
    !status
  ) {
    return;
  }

  const initialMessage = output.textContent.trim();
  let currentPath = "/home/learner";

  const setLocation = () => {
    locationLabel.textContent = currentPath;
    promptLabel.textContent = currentPath;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const commandLine = input.value.trim();
    input.value = "";

    if (!commandLine) {
      input.focus();
      return;
    }

    const commandPath = currentPath;
    const parts = commandLine.split(/\s+/);
    const command = parts[0];
    let result;
    let explanation;

    if (command === "clear" && parts.length === 1) {
      output.textContent = "";
      status.textContent = "模擬畫面已清除；目前資料夾位置沒有改變。";
      input.focus();
      return;
    }

    if (command === "help" && parts.length === 1) {
      result = "可用命令：pwd、ls、cd project、cd ..、help、clear";
      explanation = "Shell 在模擬器的允許清單中辨認 help，並顯示可用命令。";
    } else if (command === "pwd" && parts.length === 1) {
      result = currentPath;
      explanation = "pwd 要求顯示目前所在資料夾的路徑。";
    } else if (command === "ls" && parts.length === 1) {
      result =
        currentPath === "/home/learner"
          ? "project/  notes.txt"
          : "index.html  css/  images/";
      explanation = "ls 列出目前位置中的檔案和資料夾；相對於目前位置，內容會不同。";
    } else if (command === "cd" && parts.length === 2 && parts[1] === "project") {
      if (currentPath === "/home/learner") {
        currentPath = "/home/learner/project";
        result = `目前位置：${currentPath}`;
        explanation = "cd project 將目前位置切換到 project 資料夾。";
      } else {
        result = "找不到 project 資料夾。";
        explanation = "這個模擬器只在 /home/learner 中提供 project 資料夾。";
      }
    } else if (command === "cd" && parts.length === 2 && parts[1] === "..") {
      if (currentPath === "/home/learner/project") {
        currentPath = "/home/learner";
        result = `目前位置：${currentPath}`;
        explanation = "cd .. 將目前位置切換到上一層資料夾。";
      } else {
        result = "目前已在模擬環境的起始資料夾。";
        explanation = "cd .. 會往上一層；此模擬器不允許離開設定好的起始位置。";
      }
    } else {
      result = "此命令不在模擬器的允許清單中。";
      explanation = "模擬器只辨認 help、pwd、ls、cd project、cd .. 和 clear，不會執行其他命令。";
    }

    const transcript = `${commandPath} $ ${commandLine}\n${result}`;
    output.textContent = output.textContent
      ? `${output.textContent}\n${transcript}`
      : transcript;
    status.textContent = `Command → Shell → OS → 結果。${explanation}`;
    setLocation();
    input.focus();
  });

  setLocation();
  status.textContent = initialMessage;
});

document.querySelectorAll("[data-os-manager]").forEach((manager) => {
  const userSelect = manager.querySelector("[data-os-user]");
  const objectButtons = Array.from(manager.querySelectorAll("[data-os-object]"));
  const title = manager.querySelector("[data-os-detail-title]");
  const description = manager.querySelector("[data-os-detail-description]");
  const relation = manager.querySelector("[data-os-detail-relation]");

  if (
    !(userSelect instanceof HTMLSelectElement) ||
    objectButtons.length === 0 ||
    !title ||
    !description ||
    !relation
  ) {
    return;
  }

  const showObject = (button) => {
    objectButtons.forEach((item) => item.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    const objectName = button.dataset.osName ?? "此物件";
    const selectedUser = userSelect.value;
    title.textContent = objectName;

    if (button.dataset.osKind === "process") {
      description.textContent = `${objectName} 是正在執行的程式活動。作業系統需要管理它的執行，以及它使用 CPU 和記憶體的情況。`;
      relation.textContent = "相關概念：Program、Process、CPU、Memory、User。";
      return;
    }

    const access = button.dataset[`os${selectedUser}`] ?? "none";
    const accessDescription =
      access === "read-write"
        ? "可讀取，也可修改"
        : access === "read"
          ? "可讀取，但不能修改"
          : "目前沒有讀取或修改權限";
    description.textContent = `${selectedUser} 選取 ${objectName}：此簡化範例中${accessDescription}。作業系統會依照使用者身分和檔案權限判斷存取要求。`;
    relation.textContent = "相關概念：File System、Path、User、Permission。此範例權限只用於說明，不代表實際帳號設定。";
  };

  objectButtons.forEach((button) => {
    button.addEventListener("click", () => showObject(button));
  });
  userSelect.addEventListener("change", () => {
    const selected = objectButtons.find((button) => button.getAttribute("aria-pressed") === "true");
    if (selected) {
      showObject(selected);
    }
  });
});

const networkLessonPage = document.querySelector("[data-network-lesson]");
const networkLessons = window.networkingCourses;

if (networkLessonPage && Array.isArray(networkLessons)) {
  const lessonNumber = Number(networkLessonPage.dataset.networkLesson);
  const lessonIndex = networkLessons.findIndex((lesson) => lesson.number === lessonNumber);
  const lesson = networkLessons[lessonIndex];

  if (lesson) {
    const make = (tag, className, text) => {
      const element = document.createElement(tag);
      if (className) {
        element.className = className;
      }
      if (text !== undefined) {
        element.textContent = text;
      }
      return element;
    };
    const button = (text, className = "network-action") => {
      const control = make("button", className, text);
      control.type = "button";
      return control;
    };
    const labeledInput = (labelText, value, type = "text") => {
      const label = make("label", "network-field");
      label.append(make("span", "", labelText));
      const input = make("input");
      input.type = type;
      input.value = value;
      label.append(input);
      return { label, input };
    };
    const labeledSelect = (labelText, options) => {
      const label = make("label", "network-field");
      label.append(make("span", "", labelText));
      const select = make("select");
      options.forEach(([value, text]) => {
        const option = make("option", "", text);
        option.value = value;
        select.append(option);
      });
      label.append(select);
      return { label, select };
    };
    const output = (text = "操作互動後，這裡會顯示結果。") => {
      const status = make("p", "network-output", text);
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
      return status;
    };
    const activitySection = make("section", "lesson-section network-activity");
    const activityHeading = `network-activity-title-${lessonNumber}`;
    activitySection.setAttribute("aria-labelledby", activityHeading);
    activitySection.append(
      make("p", "lesson-section-number", "互動示意"),
      (() => {
        const heading = make("h2", "", "操作範例並觀察網路概念");
        heading.id = activityHeading;
        return heading;
      })(),
      make("p", "network-activity-intro", "互動只使用本頁預設資料，不會連接外部主機或執行系統命令。"),
    );
    const activity = make("div", "network-interaction");
    const activityStatus = output();

    switch (lesson.activity) {
      case "roles": {
        const flow = make("div", "network-route");
        flow.append(make("span", "network-node", "Computer A"), make("span", "network-arrow", "→ Network →"), make("span", "network-node", "Computer B"));
        const controls = make("div", "network-controls");
        const clientButton = button("以 Computer A 發出請求");
        const reverseButton = button("交換通訊角色");
        controls.append(clientButton, reverseButton);
        activity.append(flow, controls, activityStatus);
        clientButton.addEventListener("click", () => {
          activityStatus.textContent = "Computer A 在這次通訊中是 Client，提出資料請求；Computer B 是 Server，提供回應。";
        });
        reverseButton.addEventListener("click", () => {
          activityStatus.textContent = "角色取決於目前提供與使用的服務。交換請求方向後，Computer B 可以是 Client，Computer A 可以是 Server。";
        });
        break;
      }
      case "ip-address": {
        const address = labeledInput("輸入一個示範 IP Address", "192.168.1.10");
        const parse = button("檢視位址用途");
        const controls = make("div", "network-controls");
        controls.append(address.label, parse);
        activity.append(controls, activityStatus);
        parse.addEventListener("click", () => {
          const value = address.input.value.trim();
          const isIPv4 = /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/.test(value);
          const isIPv6Like = value.includes(":") && /^[0-9a-fA-F:]+$/.test(value);
          activityStatus.textContent = isIPv4 || isIPv6Like
            ? `${value} 可作為示範位址格式。IP 用於網路定位；此檢查不會判斷位址是否可達，也不能確認使用者身份。`
            : "請輸入格式類似 192.168.1.10 的 IPv4，或以冒號分隔的 IPv6 位址。這不是外部位址查詢。";
        });
        break;
      }
      case "mac-address": {
        const interfaces = [
          ["Wi-Fi 網路介面", "02:00:5E:10:00:01"],
          ["乙太網路介面", "02:00:5E:10:00:02"],
        ];
        const controls = make("div", "network-controls");
        const macStatus = output("選擇介面，查看本示意中該鏈路使用的位址。");
        interfaces.forEach(([name, mac]) => {
          const control = button(name);
          control.addEventListener("click", () => {
            macStatus.textContent = `${name} 使用示意 MAC Address ${mac}。這只表示本例的介面鏈路資訊，不是不可變更的使用者身份。`;
          });
          controls.append(control);
        });
        activity.append(controls, macStatus);
        break;
      }
      case "port": {
        const endpoint = labeledInput("輸入 IPv4:Port", "192.168.1.10:80");
        const inspect = button("拆解端點");
        const controls = make("div", "network-controls");
        controls.append(endpoint.label, inspect);
        activity.append(controls, activityStatus);
        inspect.addEventListener("click", () => {
          const match = endpoint.input.value.trim().match(/^(.+):(\d{1,5})$/);
          const portNumber = match ? Number(match[2]) : -1;
          activityStatus.textContent = match && portNumber <= 65535
            ? `Host IP：${match[1]}。Port：${match[2]}。IP 回答「哪個網路位置」，Port 回答「該位置的哪個傳輸端點」。`
            : "請輸入類似 192.168.1.10:80 的 IPv4:Port，Port 範圍為 0–65535。";
        });
        break;
      }
      case "packet": {
        const source = labeledInput("Source", "192.0.2.10");
        const destination = labeledInput("Destination", "198.51.100.20");
        const protocol = labeledSelect("Protocol", [["TCP", "TCP"], ["UDP", "UDP"], ["ICMP", "ICMP"]]);
        const payload = labeledInput("Payload（示範內容）", "Hello");
        const buildPacket = button("更新封包示意");
        const fields = make("div", "network-fields");
        fields.append(source.label, destination.label, protocol.label, payload.label);
        activity.append(fields, buildPacket, activityStatus);
        buildPacket.addEventListener("click", () => {
          activityStatus.textContent = `Header：Source ${source.input.value || "（空）"}；Destination ${destination.input.value || "（空）"}；Protocol ${protocol.select.value}。Payload：${payload.input.value || "（空）"}。這是概念示意，不是實際網路封包。`;
        });
        break;
      }
      case "transport": {
        const scenario = labeledSelect("選擇應用需求", [
          ["ordered", "接收完整且有序的檔案資料"],
          ["realtime", "即時媒體資料，可由應用處理遺失"],
        ]);
        const compare = button("比較傳輸取捨");
        const controls = make("div", "network-controls");
        controls.append(scenario.label, compare);
        activity.append(controls, activityStatus);
        compare.addEventListener("click", () => {
          activityStatus.textContent = scenario.select.value === "ordered"
            ? "此需求通常會優先考慮 TCP 的可靠、有序資料流。TCP 不代表一定比較慢；仍需依整體應用和網路狀況評估。"
            : "此需求可能採用 UDP，降低傳輸層額外處理並由應用依需求處理遺失。UDP 不保證一定較快，也不保證資料到達。";
        });
        break;
      }
      case "dns": {
        const domain = labeledInput("輸入示範網域", "example.com");
        const resolve = button("執行模擬 DNS 查詢");
        const controls = make("div", "network-controls");
        controls.append(domain.label, resolve);
        activity.append(controls, activityStatus);
        resolve.addEventListener("click", () => {
          const name = domain.input.value.trim().toLowerCase();
          const records = { "example.com": "192.0.2.10", "www.example.com": "192.0.2.11" };
          activityStatus.textContent = records[name]
            ? `Domain：${name} → 模擬 DNS Query → 示範 IP：${records[name]}。此結果是固定教學資料，不是真實或即時 DNS 答案。`
            : `模擬 DNS 表中沒有 ${name || "空白名稱"} 的記錄。本互動不會向外部 DNS 伺服器查詢。`;
        });
        break;
      }
      case "http": {
        const details = {
          "GET /index.html": "GET 是 HTTP Method，表示請求取得資源；/index.html 是資源路徑。",
          "200 OK": "Status Code 200 表示伺服器成功處理這次請求；狀態碼是 Response 的一部分。",
          "HTML Response": "Response Body 可包含 HTML。瀏覽器再解析內容並可能請求其他圖片、樣式或指令碼。",
          "HTTPS": "HTTPS 使用 TLS 保護 HTTP 傳輸並驗證伺服器憑證；不保證網站內容本身可信。",
        };
        const controls = make("div", "network-controls");
        Object.entries(details).forEach(([label, explanation]) => {
          const control = button(label);
          control.addEventListener("click", () => {
            activityStatus.textContent = explanation;
          });
          controls.append(control);
        });
        const flow = make("div", "network-route");
        flow.append(make("span", "network-node", "Browser"), make("span", "network-arrow", "→"), make("span", "network-node", "GET /index.html"), make("span", "network-arrow", "→"), make("span", "network-node", "Server"), make("span", "network-arrow", "→"), make("span", "network-node", "200 OK · HTML"));
        activity.append(flow, controls, activityStatus);
        break;
      }
      case "router": {
        const route = ["PC A", "Router A", "Router B", "Server"];
        let currentHop = 0;
        const routeDisplay = make("p", "network-route-text", `Source：PC A　Destination：Server　目前位置：${route[currentHop]}　Next Hop：${route[currentHop + 1]}`);
        const nextHop = button("轉送至下一個位置");
        activity.append(routeDisplay, nextHop, activityStatus);
        nextHop.addEventListener("click", () => {
          currentHop = Math.min(currentHop + 1, route.length - 1);
          routeDisplay.textContent = currentHop === route.length - 1
            ? `Source：PC A　Destination：Server　目前位置：${route[currentHop]}　Next Hop：已到達目的地`
            : `Source：PC A　Destination：Server　目前位置：${route[currentHop]}　Next Hop：${route[currentHop + 1]}`;
          activityStatus.textContent = currentHop === route.length - 1
            ? "封包到達示意目的地。實際路由器會依可用路由資訊逐段轉送，路徑也可能不同。"
            : "Router 只選擇下一個轉送位置；本示意不連接真實網路。";
        });
        break;
      }
      case "firewall": {
        const direction = labeledSelect("方向", [["incoming", "Incoming（進入）"], ["outgoing", "Outgoing（離開）"]]);
        const transport = labeledSelect("Protocol", [["TCP", "TCP"], ["UDP", "UDP"]]);
        const port = labeledSelect("目的 Port", [["443", "443"], ["80", "80"], ["22", "22"]]);
        const evaluateRule = button("檢查示範規則");
        const fields = make("div", "network-fields");
        fields.append(direction.label, transport.label, port.label);
        activity.append(fields, evaluateRule, activityStatus);
        evaluateRule.addEventListener("click", () => {
          const allowed = direction.select.value === "outgoing" && transport.select.value === "TCP" && port.select.value === "443";
          activityStatus.textContent = `${allowed ? "Allow" : "Block"}：本教學規則只允許 Outgoing TCP Port 443。這是簡化規則示意，不代表實際防火牆設定或網站安全判定。`;
        });
        break;
      }
      default:
        activity.append(activityStatus);
    }

    const buildQuiz = () => {
      const section = make("section", "lesson-section lesson-quiz");
      section.dataset.confirmQuiz = "";
      section.setAttribute("aria-labelledby", "network-quiz-title");
      section.append(make("p", "lesson-section-number", "測驗"));
      const heading = make("h2", "", "確認你是否理解");
      heading.id = "network-quiz-title";
      section.append(heading, make("p", "quiz-instructions", "每題獨立作答；選擇答案後按「確認答案」查看解釋，確認前不會顯示答案。"));
      const score = make("p", "quiz-score", `得分：0 / ${lesson.quizzes.length}`);
      score.dataset.quizScore = "";
      score.setAttribute("aria-live", "polite");
      section.append(score);

      lesson.quizzes.forEach((item, index) => {
        const question = make("div", "quiz-question");
        question.dataset.quizQuestion = "";
        question.dataset.correct = String.fromCharCode(97 + item.answer);
        question.dataset.correctExplanation = item.explanation;
        const fieldset = make("fieldset");
        const legend = make("legend", "", `${index + 1}. ${item.question}`);
        fieldset.append(legend);
        item.options.forEach((option, optionIndex) => {
          const label = make("label", "");
          const input = make("input");
          input.type = "radio";
          input.name = `network-${lessonNumber}-quiz-${index + 1}`;
          input.value = String.fromCharCode(97 + optionIndex);
          if (option.why) {
            input.dataset.optionExplanation = option.why;
          }
          label.append(input, document.createTextNode(` ${option.text}`));
          fieldset.append(label);
        });
        const confirm = button("確認答案", "quiz-confirm");
        confirm.dataset.quizConfirm = "";
        const feedbackId = `network-${lessonNumber}-feedback-${index + 1}`;
        confirm.setAttribute("aria-controls", feedbackId);
        const feedback = make("p", "quiz-feedback");
        feedback.id = feedbackId;
        feedback.setAttribute("role", "status");
        feedback.setAttribute("aria-live", "polite");
        question.append(fieldset, confirm, feedback);
        section.append(question);
      });
      return section;
    };

    const buildChallenge = () => {
      const section = make("section", "lesson-section network-challenge");
      section.setAttribute("aria-labelledby", "network-challenge-title");
      section.append(make("p", "lesson-section-number", "Level 1 統整挑戰"));
      const heading = make("h2", "", "你輸入 example.com，發生了什麼？");
      heading.id = "network-challenge-title";
      section.append(
        heading,
        make("p", "", "把每個階段放入一個位置，再確認順序。這是用來追蹤概念依賴的簡化模型，不是封包的嚴格時間線：DNS 查詢本身也會使用傳輸與封包，路由器會逐段轉送多次，Request 和 Response 都會透過網路傳送。"),
      );
      const stages = [
        "Domain",
        "DNS",
        "IP",
        "Port",
        "TCP / UDP",
        "HTTP / HTTPS",
        "Packet",
        "Router",
        "Server",
        "Response",
      ];
      const shuffled = ["HTTP / HTTPS", "Server", "DNS", "Domain", "Response", "Router", "Packet", "IP", "Port", "TCP / UDP"];
      const list = make("ol", "network-challenge-list");
      stages.forEach((stage, index) => {
        const item = make("li", "network-challenge-item");
        item.append(make("span", "", `${index + 1}.`));
        const field = labeledSelect(`第 ${index + 1} 步`, [["", "選擇概念"], ...shuffled.map((value) => [value, value])]);
        field.select.dataset.challengeAnswer = "";
        item.append(field.label);
        list.append(item);
      });
      const submit = button("確認流程順序", "quiz-confirm");
      const feedback = output("完成選擇後，確認各概念的依賴順序。");
      section.append(list, submit, feedback);
      submit.addEventListener("click", () => {
        const selected = Array.from(list.querySelectorAll("[data-challenge-answer]"), (select) => select.value);
        const emptyIndex = selected.findIndex((value) => !value);
        if (emptyIndex !== -1) {
          feedback.textContent = `請先選擇第 ${emptyIndex + 1} 步。`;
          list.querySelectorAll("[data-challenge-answer]")[emptyIndex].focus();
          return;
        }
        const correctCount = selected.filter((value, index) => value === stages[index]).length;
        feedback.textContent = `順序符合 ${correctCount} / ${stages.length} 個位置。參考順序：${stages.join(" → ")}。這是概念追蹤方式，不代表每個階段只發生一次或完全不重疊；DNS、傳輸層與封包也會在連線流程中交錯。`;
      });
      return section;
    };

    const buildStackDiagram = () => {
      const section = make("section", "lesson-section network-stack");
      section.setAttribute("aria-labelledby", "network-stack-title");
      const heading = make("h2", "", "Network Stack 簡化模型");
      heading.id = "network-stack-title";
      const layers = [
        "Application",
        "HTTP / HTTPS / DNS",
        "TCP / UDP",
        "IP",
        "Ethernet / Wi-Fi",
        "Network Interface",
        "Physical Network",
      ];
      const list = make("ol", "network-stack-list");
      layers.forEach((layer) => list.append(make("li", "", layer)));
      section.append(
        make("p", "lesson-section-number", "整體概念"),
        heading,
        make("p", "", "應用資料會經過不同層次的協定處理，再由網路介面送入實體或無線網路。實際封裝與傳送是雙向且逐層處理的概念模型。"),
        list,
        make("h3", "network-flow-title", "一次瀏覽網站的概念追蹤"),
        make("p", "network-flow-summary", "輸入網址 → DNS 取得位址資訊 → 選擇傳輸端點與 TCP / UDP → HTTP / HTTPS Request → 封裝為網路資料單位 → Router 逐段轉送 → Server 處理 → Response 回到 Browser。"),
      );
      return section;
    };

    const buildPagination = () => {
      const previous = networkLessons[lessonIndex - 1];
      const next = networkLessons[lessonIndex + 1];
      const nav = make("nav", "lesson-pagination");
      nav.setAttribute("aria-label", "課程導覽");
      const previousArea = make("div", "lesson-previous");
      previousArea.append(make("span", "lesson-pagination-label", "上一課"));
      const previousLink = make("a", "back-link", previous ? `← 1-${previous.number} ${previous.title}` : "← Networking Fundamentals 課程總覽");
      previousLink.href = previous ? `network-1-${previous.number}.html` : "networking-fundamentals.html";
      previousArea.append(previousLink);
      const catalogLink = make("a", "back-link", "回到課程總覽");
      catalogLink.href = "networking-fundamentals.html";
      const nextArea = make("div", "lesson-next");
      nextArea.append(make("span", "lesson-pagination-label", next ? "下一課" : "完成 Level 1"));
      const nextLink = make("a", "lesson-next-button", next ? `1-${next.number} ${next.title} →` : "回到課程總覽 →");
      nextLink.href = next ? `network-1-${next.number}.html` : "networking-fundamentals.html";
      nextArea.append(nextLink);
      nav.append(previousArea, catalogLink, nextArea);
      return nav;
    };

    networkLessonPage.replaceChildren();
    const breadcrumb = make("nav", "breadcrumbs");
    breadcrumb.setAttribute("aria-label", "麵包屑導覽");
    breadcrumb.append(
      Object.assign(make("a", "", "首頁"), { href: "index.html" }),
      make("span", "", "/"),
      Object.assign(make("a", "", "學習路線"), { href: "roadmap.html" }),
      make("span", "", "/"),
      Object.assign(make("a", "", "Networking Fundamentals"), { href: "networking-fundamentals.html" }),
      make("span", "", "/"),
      make("span", "", `1-${lesson.number} ${lesson.title}`),
    );
    breadcrumb.lastElementChild.setAttribute("aria-current", "page");
    const header = make("header", "lesson-header");
    header.append(
      make("p", "section-kicker", `LEVEL 1 — LESSON 1-${lesson.number}`),
      make("h1", "lesson-title", lesson.title),
      make("p", "lesson-subtitle", lesson.english),
      make("p", "lesson-lead", lesson.lead),
    );
    const goals = make("section", "lesson-section learning-objectives");
    goals.setAttribute("aria-labelledby", "network-objectives-title");
    const goalsHeading = make("h2", "", "學完這一課，你可以");
    goalsHeading.id = "network-objectives-title";
    const goalList = make("ul", "objective-list");
    lesson.goals.forEach((goal) => goalList.append(make("li", "", goal)));
    goals.append(goalsHeading, goalList);

    const content = make("article", "lesson-content");
    lesson.sections.forEach((item, index) => {
      const section = make("section", "lesson-section");
      const sectionHeading = `network-${lesson.number}-section-${index + 1}`;
      section.setAttribute("aria-labelledby", sectionHeading);
      section.append(
        make("p", "lesson-section-number", `${String(index + 1).padStart(2, "0")} / ${item.title}`),
      );
      const heading = make("h2", "", item.title);
      heading.id = sectionHeading;
      section.append(heading, make("p", "", item.body));
      content.append(section);
    });

    const security = make("section", "lesson-section lesson-security");
    security.setAttribute("aria-labelledby", "network-security-title");
    const securityHeading = make("h2", "", "與資訊安全的關係");
    securityHeading.id = "network-security-title";
    security.append(securityHeading, make("p", "", lesson.security));

    activitySection.append(activity);
    networkLessonPage.append(breadcrumb, header, goals, content);
    if (lesson.number === 10) {
      networkLessonPage.append(buildStackDiagram());
    }
    networkLessonPage.append(activitySection, buildQuiz(), security);
    if (lesson.challenge) {
      networkLessonPage.append(buildChallenge());
    }
    networkLessonPage.append(buildPagination());
  }
}

const quizQuestions = document.querySelectorAll("[data-quiz-question]");

quizQuestions.forEach((question) => {
  const fieldset = question.querySelector("fieldset");
  const feedback = question.querySelector(".quiz-feedback");
  if (!fieldset || !feedback) {
    return;
  }

  const confirmQuiz = question.closest("[data-confirm-quiz]");
  if (confirmQuiz) {
    const confirmButton = question.querySelector("[data-quiz-confirm]");
    const score = confirmQuiz.querySelector("[data-quiz-score]");
    const questions = Array.from(confirmQuiz.querySelectorAll("[data-quiz-question]"));

    if (!(confirmButton instanceof HTMLButtonElement) || !score) {
      return;
    }

    fieldset.addEventListener("change", () => {
      if (question.dataset.awaitingAnswer) {
        feedback.textContent = "";
        delete question.dataset.awaitingAnswer;
      }
    });

    confirmButton.addEventListener("click", () => {
      if (question.dataset.answered === "true") {
        return;
      }

      const selected = fieldset.querySelector('input[type="radio"]:checked');
      if (!(selected instanceof HTMLInputElement)) {
        question.dataset.awaitingAnswer = "true";
        feedback.textContent = "請先選擇一個答案。";
        return;
      }

      const isCorrect = selected.value === question.dataset.correct;
      question.classList.toggle("is-correct", isCorrect);
      question.classList.toggle("is-incorrect", !isCorrect);
      question.dataset.answered = "true";

      const correctOption = Array.from(fieldset.querySelectorAll('input[type="radio"]')).find(
        (option) => option.value === question.dataset.correct,
      );
      const correctText = correctOption?.closest("label")?.textContent.trim() ?? "正確選項";
      if (isCorrect) {
        feedback.textContent = `✓ 正確。${question.dataset.correctExplanation ?? ""}`;
      } else {
        const selectedExplanation =
          selected.dataset.optionExplanation ??
          question.dataset.incorrectExplanation ??
          "此選項不符合題目中的情境。";
        feedback.textContent = `✗ 不正確。${selectedExplanation} 正確答案：${correctText}。${question.dataset.correctExplanation ?? ""}`;
      }

      fieldset.querySelectorAll('input[type="radio"]').forEach((option) => {
        option.disabled = true;
      });
      confirmButton.disabled = true;
      confirmButton.textContent = "已確認";

      const correctCount = questions.filter(
        (item) => item.dataset.answered === "true" && item.classList.contains("is-correct"),
      ).length;
      const scoreLabel = score.textContent.split("：")[0];
      score.textContent = `${scoreLabel}：${correctCount} / ${questions.length}`;
    });
    return;
  }

  fieldset.addEventListener("change", (event) => {
    if (!(event.target instanceof HTMLInputElement) || event.target.type !== "radio") {
      return;
    }

    const isCorrect = event.target.value === question.dataset.correct;
    question.classList.toggle("is-correct", isCorrect);
    question.classList.toggle("is-incorrect", !isCorrect);
    feedback.textContent = isCorrect
      ? `答案正確。${question.dataset.correctExplanation}`
      : `答案不正確。${question.dataset.incorrectExplanation}`;
  });
});

const nextLessonButton = document.querySelector("#next-lesson");
const nextLessonStatus = document.querySelector("#next-lesson-status");

if (nextLessonButton && nextLessonStatus) {
  nextLessonButton.addEventListener("click", () => {
    nextLessonStatus.hidden = false;
  });
}

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "開啟導覽選單");
    navigation.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menuButton.setAttribute(
      "aria-label",
      isExpanded ? "開啟導覽選單" : "關閉導覽選單",
    );
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
      closeMenu();
    }
  });
}
