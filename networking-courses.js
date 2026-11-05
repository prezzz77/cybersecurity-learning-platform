window.networkingCourses = [
  {
    number: 1,
    title: "為什麼需要網路？",
    english: "Why Networks?",
    lead: "了解單機電腦如何透過網路和其他裝置交換資料，並認識 Client 與 Server 的基本分工。",
    goals: ["說明單機電腦和連網電腦的差異。", "解釋 Network 的基本目的。", "用 Client 與 Server 描述一次資料請求。"],
    sections: [
      {
        title: "單機電腦能做什麼？",
        body: "單機電腦可以在自己的 CPU、記憶體和儲存裝置上執行程式。若要和另一台電腦交換檔案、取得網站內容或共同使用服務，就需要一種讓裝置互相傳送資料的方法。",
      },
      {
        title: "Network 讓裝置交換資訊",
        body: "網路（Network）是由連線方式、裝置和通訊規則組成的系統，讓不同計算裝置能交換資料。資料可以先經過區域網路，再透過其他網路到達遠端裝置。網路不是單一設備，也不限於網際網路。",
      },
      {
        title: "Client 與 Server",
        body: "用戶端（Client）是提出請求或使用服務的一方；伺服器（Server）是提供資料或服務的一方。這描述的是一次通訊中的角色，不一定代表兩種不同的硬體。一台裝置可以在不同情境中扮演不同角色。",
      },
    ],
    security: "網路連線讓資料和服務可以跨裝置使用，也讓資料可能經過多個系統。理解通訊雙方與傳輸路徑，是之後判斷資料保護、服務暴露及存取控制問題的基礎。練習只使用本頁的模擬資料。",
    activity: "roles",
    quizzes: [
      {
        question: "一台電腦原本可以獨立執行計算程式，現在要從另一台電腦取得檔案。新增網路主要提供什麼能力？",
        answer: 1,
        explanation: "網路的基本目的，是讓不同裝置可以交換資料；它不會取代每台電腦自己的作業系統或處理器。",
        options: [
          { text: "讓兩台電腦變成同一台實體電腦", why: "網路連接裝置，但不會把它們合併成同一台電腦。" },
          { text: "讓不同裝置能交換資料", why: "" },
          { text: "讓所有資料自動公開給所有人", why: "是否可讀取資料取決於服務和存取規則，連上網路不代表資料公開。" },
          { text: "讓電腦不再需要作業系統", why: "網路不會取代管理本機硬體和程式的作業系統。" },
        ],
      },
      {
        question: "瀏覽器向網站索取頁面時，哪個描述最合理？",
        answer: 0,
        explanation: "在這次請求中，瀏覽器所在的裝置扮演 Client，提供頁面的服務端扮演 Server；角色是依通訊工作決定。",
        options: [
          { text: "瀏覽器所在裝置是 Client，提供頁面的服務端是 Server", why: "" },
          { text: "Client 永遠是手機，Server 永遠是大型主機", why: "Client 和 Server 是通訊角色，不是固定的裝置種類或大小。" },
          { text: "Server 是負責傳送請求的一方", why: "此例中請求由 Client 提出，Server 提供回應。" },
          { text: "只要有兩台電腦，就不需要任何通訊規則", why: "裝置需要共同遵守規則，才能理解彼此傳送的資料。" },
        ],
      },
      {
        question: "若兩台電腦都沒有連接到可交換資料的網路，哪個需求最直接無法透過網路完成？",
        answer: 2,
        explanation: "沒有連通路徑時，兩台電腦無法透過該網路互相傳送資料；本機程式仍然可以在各自電腦上執行。",
        options: [
          { text: "在本機開啟已儲存的文字檔", why: "本機檔案操作不一定需要網路。" },
          { text: "使用本機 CPU 計算數字", why: "本機運算不需要另一台電腦。" },
          { text: "從另一台電腦取得尚未傳到本機的檔案", why: "" },
          { text: "使用本機鍵盤輸入文字", why: "本機輸入不需要網路。" },
        ],
      },
      {
        question: "Computer A 原本向 Computer B 提出服務請求；現在改由 B 向 A 請求另一項服務。兩台裝置的 Client / Server 角色會如何？",
        answer: 1,
        explanation: "Client 和 Server 描述特定通訊中的請求方與服務提供方。同一裝置可以在不同通訊中交換角色。",
        options: [
          { text: "A 永遠是 Client，B 永遠是 Server", why: "角色不是永久綁定在某台裝置上。" },
          { text: "在新的通訊中，B 可以是 Client，A 可以是 Server", why: "" },
          { text: "兩台裝置會自動變成一台電腦", why: "角色交換不會合併裝置。" },
          { text: "只要交換角色，就不再需要 Network", why: "交換服務角色仍需要通訊路徑和規則。" },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "IP Address",
    english: "Internet Protocol Address",
    lead: "從「資料要送往哪裡」理解 IP Address，並分辨網路定位與個人或裝置的永久身份。",
    goals: ["說明 IP Address 在網路傳送中的用途。", "辨識 IPv4 與 IPv6 是兩種位址格式。", "說明 IP 位址不等同於人的永久身份。"],
    sections: [
      {
        title: "資料需要目的地資訊",
        body: "電腦要把資料送到另一台裝置，必須帶有能供網路判斷目的地的資訊。網際網路通訊協定位址（IP Address）是網路層用來識別封包來源與目的地的位址。它協助網路把資料送往可達的網路位置。",
      },
      {
        title: "IPv4 與 IPv6",
        body: "IPv4 常以四組 0 到 255 的十進位數字表示，例如 192.168.1.10。隨著連網裝置增加，IPv4 位址數量不足，因此也設計了位址空間更大的 IPv6，例如 2001:db8::10。兩者都是 IP 位址格式，不是兩種不同的網路用途。",
      },
      {
        title: "位址不是人的身份證",
        body: "IP 位址描述通訊使用的網路位置，不保證永久屬於同一個人或裝置。位址可能由網路動態分配，多台裝置也可能透過路由器共用對外位址。看到一個 IP，不能單憑它就確定某個人的真實身份或精確位置。",
      },
    ],
    security: "IP 是通訊定位資訊，不是可靠的個人身份證明。資安分析應搭配時間、網路架構與其他證據理解紀錄，不能只憑一個位址斷定行為者。請勿把互動輸入當成真實網路查詢。",
    activity: "ip-address",
    quizzes: [
      {
        question: "電腦準備把資料傳給另一台主機時，IP Address 最直接回答哪個問題？",
        answer: 1,
        explanation: "IP 位址用於網路層的來源與目的地定位，幫助資料朝可達的網路位置傳送；它不直接指出接收端的哪個程式。",
        options: [
          { text: "應由哪個使用者閱讀內容", why: "這屬於使用者與存取權限問題，不是 IP 位址的直接用途。" },
          { text: "資料要送往哪個網路位置", why: "" },
          { text: "內容是否一定安全", why: "IP 位址不會加密或驗證資料內容。" },
          { text: "哪個檔案系統資料夾要儲存資料", why: "IP 位址描述網路位置，不是本機資料夾路徑。" },
        ],
      },
      {
        question: "看到來源 IP Address 192.168.1.10，哪個結論最合理？",
        answer: 2,
        explanation: "這個位址可作為網路通訊中的定位資訊，但本身不足以確定使用者的真實身份，也不保證長期對應同一裝置。",
        options: [
          { text: "一定能知道使用者的真實姓名", why: "IP 位址本身不包含可直接驗證的真實姓名。" },
          { text: "它永遠只屬於同一台電腦", why: "位址可能動態分配或被網路中的其他裝置再次使用。" },
          { text: "它是網路通訊中的位址，不能單獨當作個人身份證明", why: "" },
          { text: "它代表資料已經加密", why: "IP 位址不表示內容已加密。" },
        ],
      },
      {
        question: "為什麼除 IPv4 外還需要 IPv6？",
        answer: 0,
        explanation: "IPv6 提供非常大的位址空間，以因應大量連網裝置與網路的位址需求；不是因為 IPv4 不能表示目的地。",
        options: [
          { text: "IPv4 位址空間有限，需要更多可用位址", why: "" },
          { text: "IPv4 只能用於檔案名稱", why: "IPv4 是 IP 位址格式，並非檔案名稱格式。" },
          { text: "IPv6 是用來取代所有網路協定的加密方式", why: "IPv6 是 IP 位址與網路層協定的一部分，不是加密方式。" },
          { text: "每台裝置都必須同時使用兩個不同的使用者帳號", why: "IP 位址與作業系統使用者帳號無此關係。" },
        ],
      },
      {
        question: "某裝置重新連接網路後取得了不同 IP Address。哪個推論最合理？",
        answer: 2,
        explanation: "IP 位址可能因網路設定而變更，所以它適合用於通訊定位，但不能直接當作裝置或使用者永不變更的身份。",
        options: [
          { text: "這證明裝置的硬體已經更換", why: "位址變更可能由網路分配方式造成，不能據此確定硬體更換。" },
          { text: "這證明裝置不再能使用任何網路服務", why: "新位址仍可用於網路通訊，是否可達還取決於其他條件。" },
          { text: "網路位置資訊變了，不能只靠舊 IP 判定永久身份", why: "" },
          { text: "IP Address 其實是檔案名稱", why: "IP 位址用於網路定位，不是檔案名稱。" },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "MAC Address",
    english: "Media Access Control Address",
    lead: "理解 IP 已指出網路目的地後，區域網路仍如何使用網路介面位址傳遞資料。",
    goals: ["說明 Network Interface 與 MAC Address 的關係。", "比較 IP 位址和區域網路鏈路位址。", "避免把 MAC Address 誤認成永久且唯一的個人身份。"],
    sections: [
      {
        title: "每個網路連線由介面承接",
        body: "網路介面（Network Interface）是裝置連接網路的介面，例如乙太網路卡或 Wi-Fi 介面。媒體存取控制位址（MAC Address）是區域網路鏈路上識別網路介面的位址資訊之一，常用於同一個區域網路中的資料傳送。",
      },
      {
        title: "IP 與 MAC 回答不同問題",
        body: "IP Address 用於網路層的來源和目的地定位；MAC Address 則協助資料在一段區域網路鏈路上交付給介面。當封包跨越路由器時，每一段鏈路上的傳送資訊可能改變，IP 封包的來源與目的地則通常仍指向原始通訊兩端，除非網路設備執行位址轉換等處理。",
      },
      {
        title: "MAC 不等同永久身份",
        body: "MAC 位址常由介面製造資訊設定，但系統也可能使用隨機化或本機管理的位址。它可能被更改、偽裝或在不同鏈路情境中改變，因此不能簡化成電腦或使用者永不變更的身份。",
      },
    ],
    security: "MAC 位址有助於理解區域網路上的交付，但它不是強身份驗證機制。安全控制不應只依賴 MAC 位址判定可信使用者或裝置，還需要適合情境的驗證與存取控制。",
    activity: "mac-address",
    quizzes: [
      {
        question: "電腦要在同一個區域網路把資料交給某個網路介面，哪種資訊較直接參與該鏈路上的交付？",
        answer: 3,
        explanation: "MAC Address 用於區域網路鏈路上的介面識別；IP Address 負責網路層的來源與目的地定位。",
        options: [
          { text: "HTTP 狀態碼", why: "狀態碼屬於應用層回應，不負責區域網路介面交付。" },
          { text: "檔案路徑", why: "檔案路徑定位檔案系統中的資料，不是網路介面位址。" },
          { text: "TCP 連線順序", why: "TCP 的順序處理不會取代鏈路上的介面位址。" },
          { text: "目的網路介面的 MAC Address", why: "" },
        ],
      },
      {
        question: "資料經過多個路由器時，哪個說法最符合 IP 與 MAC 的分工？",
        answer: 0,
        explanation: "路由器會逐段轉送資料；鏈路層交付資訊隨每段鏈路處理，而 IP 來源與目的地通常維持端到端定位（不考慮 NAT 等轉換）。",
        options: [
          { text: "MAC 用於一段鏈路上的交付，IP 用於網路層定位", why: "" },
          { text: "MAC 永遠表示全球唯一使用者，IP 只表示檔案", why: "兩者都不是使用者身份或檔案路徑。" },
          { text: "每一台路由器都必須把目的 IP 改成自己的 IP", why: "一般轉送不會把封包目的 IP 改成路由器自身位址。" },
          { text: "IP 和 MAC 完全相同，只是格式不同", why: "它們在不同層次使用，回答的問題不同。" },
        ],
      },
      {
        question: "哪個敘述避免了對 MAC Address 的錯誤理解？",
        answer: 1,
        explanation: "MAC 位址和網路介面及鏈路交付有關，但可能隨機化或改變，不應單獨當成永久身份證明。",
        options: [
          { text: "MAC 一定永久綁定使用者且無法改變", why: "MAC 位址可能被設定或隨機化，且不代表使用者身份。" },
          { text: "MAC 常用於區域網路鏈路交付，但不保證是永久身份", why: "" },
          { text: "MAC 是用來把網域名稱轉成 IP 的服務", why: "這是 DNS 的功能。" },
          { text: "MAC 會加密封包內容", why: "MAC 位址本身不負責加密封包內容。" },
        ],
      },
      {
        question: "封包從本地網路經過路由器送往遠端網路時，哪個變化最可能發生在每一段鏈路？",
        answer: 0,
        explanation: "每段鏈路的 MAC 交付資訊會配合下一個鏈路上的介面；目的 IP 通常仍指向遠端目的地，除非遇到 NAT 等轉換。",
        options: [
          { text: "鏈路交付用的 MAC 資訊更新，IP 目的地通常維持", why: "" },
          { text: "MAC 永遠不變且是使用者身份", why: "MAC 可能隨鏈路或設定改變，且不代表使用者身份。" },
          { text: "目的 IP 每經過一台路由器就改成該路由器位址", why: "一般路由轉送不會逐跳更改目的 IP。" },
          { text: "所有 IP 與 MAC 位址都會被移除", why: "轉送仍需相應的網路層和鏈路層資訊。" },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Port",
    english: "Transport-layer Port",
    lead: "從一台主機同時提供多種網路服務的情境，理解 Port 如何指出要交付的服務端點。",
    goals: ["分辨 IP Address 與 Port。", "讀懂 IP:Port 形式的端點。", "說明 Port 如何協助作業系統交付網路資料。"],
    sections: [
      {
        title: "找到主機後，還要找到服務",
        body: "一台主機可能同時執行瀏覽器、網站服務和其他網路程式。IP Address 幫助資料找到主機，但接收資料後，作業系統還需要知道應交給哪一個通訊端點。傳輸層的連接埠（Port）提供這項區分資訊。",
      },
      {
        title: "閱讀 IP 與 Port",
        body: "在 192.168.1.10:80 這個 IPv4 範例中，192.168.1.10 是主機的 IP Address，80 是 Port。IP 回答「哪個網路位置」，Port 回答「該主機上的哪個傳輸端點」。常見服務會使用慣用 Port，但 Port 號本身不保證實際執行的程式或內容。",
      },
      {
        title: "Port 是端點資訊，不是實體插孔",
        body: "網路 Port 是傳輸通訊使用的編號，不是電腦外殼上的插孔。TCP 和 UDP 分別使用傳輸層 Port。主機、傳輸協定與 Port 等資訊共同構成通訊端點的部分定位資訊。",
      },
    ],
    security: "Port 有助於辨識哪些網路服務可能接收資料，也因此與攻擊面和防火牆規則相關。服務只應開放必要的連線；看到 Port 號不能直接判定其背後服務或安全狀態。",
    activity: "port",
    quizzes: [
      {
        question: "在 192.168.1.10:80 中，192.168.1.10 和 80 分別代表什麼？",
        answer: 1,
        explanation: "在這個 IPv4 端點寫法中，IP Address 指出主機網路位置，Port 指出該主機上的傳輸端點。",
        options: [
          { text: "IP 是檔案名稱，Port 是資料夾", why: "這些是網路端點資訊，不是檔案系統路徑。" },
          { text: "IP 是主機網路位置，Port 是傳輸端點", why: "" },
          { text: "IP 是使用者身份，Port 是密碼", why: "IP 和 Port 都不是使用者身份驗證資料。" },
          { text: "IP 是 Port 的別名，80 是傳輸速度", why: "Port 是編號，不是速度；IP 與 Port 分工不同。" },
        ],
      },
      {
        question: "同一個 IP 主機同時提供網站和其他網路服務，Port 為什麼有用？",
        answer: 2,
        explanation: "IP 可定位主機；Port 讓傳輸資料可以交付到該主機上相應的通訊端點，兩者合用比單獨 IP 更精確。",
        options: [
          { text: "讓一台主機可以變成多個不同 IP", why: "Port 不會自動建立多個 IP 位址。" },
          { text: "取代網路協定並加密所有資料", why: "Port 不取代 TCP 或 UDP，也不負責加密。" },
          { text: "區分主機上不同的網路服務端點", why: "" },
          { text: "讓路由器知道使用者真實姓名", why: "Port 不包含使用者真實身份資訊。" },
        ],
      },
      {
        question: "只看到 Port 80，哪個推論較謹慎？",
        answer: 0,
        explanation: "Port 80 常與 HTTP 慣例相關，但號碼本身不能保證主機上實際執行何種程式或服務。",
        options: [
          { text: "這是一個端點編號，慣例上常用於 HTTP，但仍需其他資訊確認服務", why: "" },
          { text: "一定是安全的網站", why: "Port 號不代表加密或安全狀態。" },
          { text: "一定是檔案系統的資料夾", why: "網路 Port 不是本機資料夾。" },
          { text: "這代表主機只有一個網路程式", why: "一台主機可以同時提供多個網路端點。" },
        ],
      },
      {
        question: "同一個主機在兩個 Port 提供不同服務。收到目的 IP 相同、Port 不同的資料時，作業系統可以如何區分？",
        answer: 3,
        explanation: "IP 將資料定位到主機，傳輸協定與 Port 等資訊協助作業系統交付給不同通訊端點。",
        options: [
          { text: "因為目的 IP 不同", why: "題目已說明目的 IP 相同。" },
          { text: "Port 代表不同實體網路插孔", why: "傳輸層 Port 是編號，不是機殼上的實體插孔。" },
          { text: "HTTP 狀態碼會選擇本機程式", why: "狀態碼是應用層回應，不負責選擇接收端點。" },
          { text: "依傳輸協定和 Port 將資料交付到相應端點", why: "" },
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Packet",
    english: "Network Packet",
    lead: "理解資料如何附上來源、目的地與處理資訊，讓網路能將內容送往適當位置。",
    goals: ["分辨 Header 和 Payload。", "說明來源與目的地資訊的用途。", "理解網路傳送的資料需要內容以外的控制資訊。"],
    sections: [
      {
        title: "資料需要被整理成可傳送單位",
        body: "網路通訊會把資料依照協定的規則組成可處理的單位。網路封包（Packet）是描述網路層資料單位的常用名稱。不同層也會使用不同單位名稱，例如乙太網路或 Wi-Fi 鏈路上會處理 Frame（訊框）。",
      },
      {
        title: "Header 與 Payload",
        body: "標頭（Header）包含協定處理資料所需的控制資訊，例如來源、目的地或傳輸方式。Payload（有效負載）是這個封裝單位所承載的內容。封包在不同層逐層封裝時，會加上各層需要的標頭；這張圖只呈現簡化概念。",
      },
      {
        title: "內容與處理資訊各有用途",
        body: "只有 Payload，網路設備可能不知道資料從哪裡來、要往哪裡送或應如何交付。Header 讓設備與接收端依協定處理資料。實際網路中的標頭欄位與格式比此示意更豐富。",
      },
    ],
    security: "封包可能包含應用程式資料與傳輸資訊。未加密的應用層內容在傳送路徑上可能暴露，因此敏感通訊需要適當的加密協定；即使使用加密，來源、目的地和流量特徵等中繼資訊也未必全部隱藏。",
    activity: "packet",
    quizzes: [
      {
        question: "一份網路資料只有內容，沒有來源、目的地或傳輸所需資訊，最可能欠缺什麼？",
        answer: 3,
        explanation: "Header 提供協定處理與交付資料所需的資訊；Payload 則承載內容。兩者在簡化模型中各有角色。",
        options: [
          { text: "另一個檔案系統資料夾", why: "檔案資料夾不能代替網路封裝資訊。" },
          { text: "CPU 的使用者帳號", why: "作業系統帳號不是封包標頭欄位的替代品。" },
          { text: "只有更多 Payload 內容", why: "更多內容不會補足來源、目的地等處理資訊。" },
          { text: "Header 中的處理與傳送資訊", why: "" },
        ],
      },
      {
        question: "在簡化的封包模型中，Payload 最接近哪個部分？",
        answer: 0,
        explanation: "Payload 是封裝單位承載的內容；Header 則提供處理與傳送所需的資訊。",
        options: [
          { text: "被封裝並傳送的資料內容", why: "" },
          { text: "只負責替資料選路的路由器", why: "路由器是網路設備，不是封包內容欄位。" },
          { text: "收件人的使用者密碼", why: "Payload 不代表必然包含密碼，且不應把它當成固定欄位。" },
          { text: "電腦上的實體網路插孔", why: "實體介面不是封包的 Payload。" },
        ],
      },
      {
        question: "為什麼 Header 與 Payload 要分開理解？",
        answer: 1,
        explanation: "Header 提供協定處理資訊，Payload 承載內容。理解分工有助於判斷網路設備如何處理資料及內容如何被保護。",
        options: [
          { text: "因為 Header 一定會把 Payload 加密", why: "封包標頭本身不代表內容已加密。" },
          { text: "因為網路需要處理資訊來交付承載的內容", why: "" },
          { text: "因為 Payload 就是 IP Address", why: "IP 位址通常位於網路層標頭，不等於 Payload。" },
          { text: "因為所有網路封包的大小和格式完全相同", why: "封包格式和大小會依協定及資料而不同。" },
        ],
      },
      {
        question: "如果封包缺少轉送所需的目的地資訊，網路設備可能遇到什麼問題？",
        answer: 2,
        explanation: "Header 會提供協定處理所需的資訊。沒有相關目的地資料，設備就難以依規則將內容交付到正確位置。",
        options: [
          { text: "Payload 會自動變成加密資料", why: "缺少標頭不會自動加密內容。" },
          { text: "接收端會立刻知道正確來源和目的地", why: "缺少資訊不會讓接收端自動知道來源和目的地。" },
          { text: "網路可能無法判斷如何交付這份資料", why: "" },
          { text: "資料會被自動存入本機檔案系統", why: "封包標頭不足不會觸發自動檔案儲存。" },
        ],
      },
    ],
  },
  {
    number: 6,
    title: "TCP / UDP",
    english: "Transmission Control Protocol / User Datagram Protocol",
    lead: "從應用程式對完整性、順序與傳送方式的不同需求，理解 TCP 和 UDP 的取捨。",
    goals: ["描述 TCP 如何提供有序且可靠的傳輸。", "說明 UDP 不保證交付與順序。", "依應用需求比較傳輸方式，不把速度說成絕對。"],
    sections: [
      {
        title: "應用程式需要不同傳輸特性",
        body: "傳輸層協定（Transport Protocol）讓主機上的應用端點交換資料。不同應用對傳輸的需求不一樣：有的需要完整內容與順序，有的重視簡化傳輸流程，並能接受部分資料未到達。",
      },
      {
        title: "TCP 著重可靠、有序的資料流",
        body: "傳輸控制協定（TCP）會建立連線，使用確認與重傳等機制，讓資料在接收端以有序資料流的方式交付。它也會調整傳送速率以配合接收能力及網路狀況，涵蓋流量控制和壅塞控制的基本目的。這些功能帶來額外處理，但不代表 TCP 一定比較慢。",
      },
      {
        title: "UDP 提供較精簡的資料報傳送",
        body: "使用者資料包協定（UDP）不先建立相同意義的傳輸連線，也不保證資料一定送達或依序到達。它的傳輸層額外處理較少，應用程式可依需求自行處理遺失或順序。某些即時情境適合使用 UDP，但實際速度仍受網路、應用和實作影響。",
      },
    ],
    security: "防火牆規則和網路紀錄常會區分 TCP、UDP 與 Port。選擇協定會影響系統如何處理遺失、重傳和連線狀態；這是可靠性與服務設計的考量，不是把其中一種協定視為天然安全。",
    activity: "transport",
    quizzes: [
      {
        question: "檔案傳輸需要接收端取得完整且有序的資料。哪個傳輸方式較直接提供這類機制？",
        answer: 2,
        explanation: "TCP 透過確認、重傳與排序等機制提供可靠、有序的資料流。應用仍須正確使用協定並驗證資料。",
        options: [
          { text: "UDP，因為它永遠保證每個資料都到達", why: "UDP 的傳輸層不保證交付或順序。" },
          { text: "DNS，因為它會排序檔案內容", why: "DNS 用於名稱解析，不是檔案可靠傳輸機制。" },
          { text: "TCP，因為它提供可靠且有序的資料流", why: "" },
          { text: "IP Address，因為它會重傳資料", why: "IP 位址描述網路位置，不負責 TCP 式重傳。" },
        ],
      },
      {
        question: "應用程式使用 UDP 時，哪個假設最安全？",
        answer: 0,
        explanation: "UDP 不保證資料報交付或順序；若應用需要這些特性，必須另行設計或選擇合適協定。",
        options: [
          { text: "資料可能遺失或亂序，應用需考量自己的需求", why: "" },
          { text: "所有資料一定依序到達", why: "UDP 不提供傳輸層的順序保證。" },
          { text: "UDP 一定比 TCP 快", why: "實際效能取決於網路與應用，不能只從協定名稱下結論。" },
          { text: "使用 UDP 就不需要 IP", why: "UDP 通訊仍需網路層 IP 傳送。" },
        ],
      },
      {
        question: "為什麼不能簡單說「UDP 一定比較快，TCP 一定比較慢」？",
        answer: 3,
        explanation: "TCP 和 UDP 的機制不同，額外處理也不同；整體效能仍取決於網路狀況、應用需求與實作，不能用絕對速度概括。",
        options: [
          { text: "因為兩者是相同協定，只是名稱不同", why: "TCP 與 UDP 的傳輸特性不同。" },
          { text: "因為 TCP 不會傳送資料", why: "TCP 是常見的資料傳輸協定。" },
          { text: "因為 UDP 每次都會重傳所有資料", why: "UDP 本身不提供 TCP 式重傳保證。" },
          { text: "因為額外機制和實際效能還受網路與應用影響", why: "" },
        ],
      },
      {
        question: "使用 UDP 的即時應用有一個資料報遺失。僅依 UDP 的傳輸層保證，接收端最可能遇到什麼？",
        answer: 0,
        explanation: "UDP 不保證交付，也不會像 TCP 一樣由傳輸層自動提供可靠、有序的重傳；應用可自行決定如何處理。",
        options: [
          { text: "資料可能不會到達，UDP 本身不保證重傳", why: "" },
          { text: "UDP 一定會重新傳送，直到成功", why: "UDP 本身沒有這項可靠交付保證。" },
          { text: "整台主機的 IP Address 會消失", why: "資料報遺失不會讓 IP 位址自動消失。" },
          { text: "DNS 會自動補回遺失的 Payload", why: "DNS 名稱解析不負責補回 UDP 應用資料。" },
        ],
      },
    ],
  },
  {
    number: 7,
    title: "DNS",
    english: "Domain Name System",
    lead: "理解 DNS 如何把人容易記住的網域名稱解析成網路通訊所需的位址資訊。",
    goals: ["說明 Domain Name 與 IP Address 的差異。", "描述 DNS 查詢的大致用途。", "理解 DNS 回答不等同於網站身份或安全保證。"],
    sections: [
      {
        title: "名稱比數字容易使用",
        body: "網域名稱（Domain Name）是人類較容易閱讀和記憶的網路名稱，例如 example.com。網路通訊仍需要 IP 等位址資訊，因此需要一種方式取得名稱對應的資料。",
      },
      {
        title: "DNS 查詢名稱對應資料",
        body: "網域名稱系統（DNS，Domain Name System）是一套分散式命名系統。用戶端通常向設定好的 DNS 解析器詢問名稱對應的記錄；答案可能由快取或其他 DNS 伺服器取得。常見記錄可提供 IP 位址，但 DNS 的用途不只限於這一種資料。",
      },
      {
        title: "解析不是身份驗證",
        body: "DNS 回答提供名稱解析所需資訊，不等於已驗證網站內容可信，也不表示解析過程或答案一定沒有被錯誤設定。瀏覽器接著會依 URL、連線協定和憑證等資訊進行後續連線與檢查。",
      },
    ],
    security: "錯誤或遭竄改的解析資訊可能把使用者導向非預期位置。理解 DNS 和後續連線驗證的分工，有助於避免把「名稱查得到位址」誤認為「網站已確認安全」。此活動使用固定示範對照，不進行外部查詢。",
    activity: "dns",
    quizzes: [
      {
        question: "使用者輸入 example.com，瀏覽器要取得可供後續網路通訊使用的位址資訊，通常會使用什麼？",
        answer: 1,
        explanation: "DNS 用於解析網域名稱對應的網路資訊，例如 IP 位址；瀏覽器再使用解析結果進行後續連線。",
        options: [
          { text: "MAC 位址隨機產生器", why: "MAC 位址不負責將網域名稱解析成 IP。" },
          { text: "DNS 查詢", why: "" },
          { text: "檔案系統路徑搜尋", why: "網域名稱解析不是本機檔案路徑查找。" },
          { text: "HTTP 回應狀態碼", why: "HTTP 狀態碼是在建立應用層通訊後的回應資訊。" },
        ],
      },
      {
        question: "DNS 回傳某網域的 IP 位址後，哪個結論最合理？",
        answer: 3,
        explanation: "DNS 提供名稱解析資訊，但網站身份和連線安全仍需後續檢查，例如 HTTPS 憑證驗證。",
        options: [
          { text: "網站內容一定安全且沒有詐騙", why: "DNS 回答不審核網站內容或商業可信度。" },
          { text: "這個 IP 永遠只會服務該網域", why: "同一位址可能服務多個名稱，位址也可能變更。" },
          { text: "瀏覽器已經收到完整網頁", why: "DNS 回答不是 HTTP 網頁內容。" },
          { text: "瀏覽器取得後續連線所需的位址資訊，仍需繼續連線", why: "" },
        ],
      },
      {
        question: "DNS 查詢示範顯示 example.com 對應到文件範例位址 192.0.2.10。如何理解才正確？",
        answer: 0,
        explanation: "本互動使用文件範例位址呈現解析步驟，不會查詢或連線到真實網站，也不代表 example.com 的實際 DNS 結果。",
        options: [
          { text: "這是固定教學示意，不是即時或真實 DNS 答案", why: "" },
          { text: "這表示該網域永遠對應此位址", why: "示範值不代表真實名稱解析結果或永久對應。" },
          { text: "這表示 DNS 已加密網頁資料", why: "DNS 解析本身不等於網頁內容加密。" },
          { text: "這是該網站的 MAC Address", why: "192.0.2.10 是文件用 IPv4 範例位址，不是 MAC 位址。" },
        ],
      },
      {
        question: "DNS 解析器已在快取中有某個網域的有效記錄。接著查詢時，哪個情況可能發生？",
        answer: 1,
        explanation: "解析器可在記錄仍有效時從快取提供答案，因此每次名稱查詢不一定都需要重新向外部 DNS 系統詢問。",
        options: [
          { text: "瀏覽器會跳過所有後續連線步驟並直接顯示網頁", why: "DNS 答案不是網頁內容，後續仍需連線和 HTTP 通訊。" },
          { text: "解析器可能直接回傳快取答案", why: "" },
          { text: "網域名稱會自動變成 MAC Address", why: "DNS 快取不會把網域轉換成 MAC 位址。" },
          { text: "快取證明網站內容可信", why: "快取只是保存解析結果，不驗證網站內容是否可信。" },
        ],
      },
    ],
  },
  {
    number: 8,
    title: "HTTP / HTTPS",
    english: "Hypertext Transfer Protocol",
    lead: "從瀏覽器取得網站內容的流程，理解 URL、Request、Response、Method、Status Code 與 HTTPS。",
    goals: ["讀懂簡單 HTTP Request 的方法和路徑。", "說明 Request 與 Response 的分工。", "區分 HTTP 與提供加密傳輸及憑證驗證的 HTTPS。"],
    sections: [
      {
        title: "瀏覽器和網站以 Request / Response 交換資料",
        body: "超文字傳輸協定（HTTP，Hypertext Transfer Protocol）是瀏覽器和網站服務交換應用資料時常用的協定。瀏覽器送出 Request（請求），伺服器處理後回傳 Response（回應）。網頁中的資源可能需要多次請求。",
      },
      {
        title: "看懂 GET /index.html",
        body: "GET 是 HTTP Method（方法）之一，表示請求取得指定資源；/index.html 是請求路徑。URL 還可能包含協定、主機名稱、Port、路徑及其他部分。Method 描述請求意圖，並不保證伺服器一定成功。",
      },
      {
        title: "Status Code 與 HTTPS",
        body: "HTTP Response 會包含 Status Code（狀態碼），例如 200 表示請求成功處理、404 表示找不到指定資源。HTTPS 是透過 TLS 保護 HTTP 通訊的方式，可提供傳輸加密及憑證驗證；它不代表網站內容本身一定可信，也不會取代應用程式的安全設計。",
      },
    ],
    security: "HTTP 傳送敏感內容時可能缺少傳輸保護；HTTPS 可保護傳輸中的內容並協助確認伺服器憑證，但不能修正伺服器端漏洞、弱密碼或不當授權。安全性需要結合傳輸保護與應用程式控制。",
    activity: "http",
    quizzes: [
      {
        question: "在 GET /index.html 中，GET 和 /index.html 各代表什麼？",
        answer: 2,
        explanation: "GET 是 HTTP Method，表示請求取得資源；/index.html 是請求的路徑。",
        options: [
          { text: "GET 是 IP 位址，/index.html 是 Port", why: "兩者都是 HTTP Request 中的應用層資訊。" },
          { text: "GET 是伺服器回應，/index.html 是 DNS 名稱", why: "GET 是請求方法，路徑不是 DNS 名稱。" },
          { text: "GET 是請求方法，/index.html 是資源路徑", why: "" },
          { text: "GET 是狀態碼，/index.html 是封包來源", why: "狀態碼出現在 Response 中；此例是 Request 方法與路徑。" },
        ],
      },
      {
        question: "瀏覽器收到 HTTP 狀態碼 404，最直接代表什麼？",
        answer: 0,
        explanation: "404 表示伺服器找不到所請求的資源；它是 Response 的狀態資訊，不是 IP 位址或加密結果。",
        options: [
          { text: "伺服器找不到所請求的資源", why: "" },
          { text: "DNS 一定遭到攻擊", why: "404 本身不能證明 DNS 發生問題或攻擊。" },
          { text: "傳輸內容已經加密", why: "狀態碼不代表 HTTPS 或加密狀態。" },
          { text: "瀏覽器請求一定成功", why: "404 表示要求的資源未找到。" },
        ],
      },
      {
        question: "HTTPS 相對於 HTTP，主要增加哪種傳輸保護？",
        answer: 3,
        explanation: "HTTPS 透過 TLS 保護 HTTP 通訊，提供傳輸加密及伺服器憑證驗證；它不保證網站內容可信或沒有漏洞。",
        options: [
          { text: "自動修補所有伺服器程式漏洞", why: "HTTPS 不會修補應用程式漏洞。" },
          { text: "保證網站上所有資訊都正確", why: "加密不能保證網站內容正確或安全。" },
          { text: "讓網站不需要任何伺服器", why: "HTTPS 通訊仍需要服務端。" },
          { text: "保護傳輸內容，並以憑證協助驗證伺服器", why: "" },
        ],
      },
      {
        question: "瀏覽器送出 GET /missing.html，伺服器回覆 404。哪個推論較合理？",
        answer: 1,
        explanation: "瀏覽器已收到伺服器的 HTTP 回應；404 表示伺服器找不到該路徑的資源，並不表示整個網路或 DNS 一定失效。",
        options: [
          { text: "一定是 DNS 沒有回傳 IP", why: "瀏覽器收到伺服器的 HTTP 狀態回應，不能據此判定 DNS 失敗。" },
          { text: "伺服器回覆請求，但找不到指定資源", why: "" },
          { text: "HTTPS 一定已關閉", why: "404 與是否使用 HTTPS 沒有必然關係。" },
          { text: "Port 代表這個檔案的資料夾名稱", why: "Port 是傳輸端點資訊，不是檔案路徑。" },
        ],
      },
    ],
  },
  {
    number: 9,
    title: "Router",
    english: "Router and Gateway",
    lead: "從不同網路之間的通訊需求，理解路由器如何依網路資訊轉送封包。",
    goals: ["辨識 LAN、Router 與 Gateway 的基本角色。", "說明 Router 如何選擇下一個轉送位置。", "區分 IP 定位與逐段鏈路交付。"],
    sections: [
      {
        title: "LAN 只涵蓋一個區域網路",
        body: "區域網路（LAN，Local Area Network）連接一個有限範圍內的裝置，例如家庭或辦公室網路。要和其他網路交換資料，裝置需要把封包交給能連接不同網路的設備。",
      },
      {
        title: "Router 根據網路資訊轉送",
        body: "路由器（Router）連接不同網路，會檢查封包的網路層資訊，選擇下一個適當的轉送位置（Next Hop）。本機網路將流量送往外部網路時，常把路由器設為預設閘道（Default Gateway）。Gateway 是離開目前網路時使用的出口角色，不一定只指一種硬體。",
      },
      {
        title: "封包會逐段前進",
        body: "從 PC A 到遠端 Server 的資料可能經過多個路由器。每一個路由器通常只決定下一段路徑，不需要知道完整的物理路線。IP 目的地通常維持端到端定位；每段鏈路的 MAC 交付資訊則隨鏈路而變。網路轉送細節可能因 NAT 等設備而有所不同。",
      },
    ],
    security: "路由器和閘道是網路邊界的重要部分，設定錯誤可能讓不該互通的網路彼此可達。理解轉送位置與邊界，有助於設計分段、存取規則和紀錄；本課路徑為純概念模擬。",
    activity: "router",
    quizzes: [
      {
        question: "PC A 要連到不同網路上的 Server，Router 的核心工作之一是什麼？",
        answer: 1,
        explanation: "Router 依網路層資訊選擇下一個適當位置並轉送封包，不是把封包內容當成檔案直接儲存。",
        options: [
          { text: "把封包內容永遠存在路由器硬碟", why: "路由器主要負責轉送，不是永久保存每個封包內容。" },
          { text: "根據網路資訊選擇下一個轉送位置", why: "" },
          { text: "把所有來源 IP 都改成 Server 的 IP", why: "一般路由轉送不會把來源 IP 改成目的伺服器位址。" },
          { text: "取代 DNS 並記住所有網域名稱", why: "Router 的轉送工作不等同 DNS 名稱解析。" },
        ],
      },
      {
        question: "裝置要把流量送往目前 LAN 以外的網路，Default Gateway 通常扮演什麼角色？",
        answer: 3,
        explanation: "Default Gateway 是裝置將外部網路流量交出的出口，常由連接本地網路與其他網路的路由器提供。",
        options: [
          { text: "替使用者輸入網域名稱", why: "輸入網域名稱通常由應用程式或使用者完成。" },
          { text: "保證所有外部連線安全", why: "Gateway 本身不保證流量安全。" },
          { text: "把 HTTP 狀態碼轉成檔案路徑", why: "這與 Gateway 的網路轉送角色無關。" },
          { text: "作為送往其他網路時的出口轉送位置", why: "" },
        ],
      },
      {
        question: "封包經過 Router A 再到 Router B，哪個描述較符合逐段轉送？",
        answer: 0,
        explanation: "每個路由器依自身可用的路由資訊選擇下一個位置。MAC 交付資訊可隨鏈路更新，而 IP 目的地通常仍表示最終網路位置。",
        options: [
          { text: "每個 Router 選擇下一個位置，封包逐段前進", why: "" },
          { text: "每個 Router 都必須把最終 Server 換成自己的 IP", why: "一般轉送不會把目的 IP 改成每台路由器的位址。" },
          { text: "Router 只存在於單一電腦內的檔案系統", why: "Router 是網路轉送設備或功能，不是檔案系統物件。" },
          { text: "封包不需要目的地資訊也能跨網路傳送", why: "轉送需要網路層資訊判斷目的地及下一步。" },
        ],
      },
      {
        question: "Router A 的路由資訊指出下一站是 Router B。它目前最直接要做什麼？",
        answer: 2,
        explanation: "路由器依可用資訊把封包轉送給下一個位置。此決定只處理下一段，不要求 Router A 預先知道每一段實體路徑細節。",
        options: [
          { text: "把封包內容存成永久檔案", why: "封包轉送不等同永久儲存。" },
          { text: "把最終伺服器的應用程式改寫", why: "Router 不負責改寫遠端伺服器程式。" },
          { text: "將封包交給 Router B 作為下一個轉送位置", why: "" },
          { text: "把目的地改成 Router A 自己", why: "這不符合把封包往遠端目的地轉送的目的。" },
        ],
      },
    ],
  },
  {
    number: 10,
    title: "Firewall",
    english: "Network Firewall",
    lead: "理解防火牆如何依照規則控制網路流量，並用瀏覽網站的流程統整 Level 1 概念。",
    goals: ["說明 Firewall 如何依規則允許或阻擋流量。", "分辨 Incoming、Outgoing、Protocol 和 Port。", "用簡化模型追蹤從網域名稱到伺服器回應的過程。"],
    sections: [
      {
        title: "流量需要依規則判斷",
        body: "防火牆（Firewall）依設定規則檢查網路流量，並允許或阻擋符合條件的通訊。Incoming 是進入受保護網路或裝置的流量；Outgoing 是從其中離開的流量。規則可依方向、來源、目的地、協定或 Port 等條件判斷。",
      },
      {
        title: "Firewall 不等於防毒軟體",
        body: "防火牆主要控制網路流量，不是用來掃描和清除所有惡意檔案的防毒軟體。防火牆是否有效取決於規則、部署位置與保護範圍。允許流量通過也不代表其內容一定安全，因此仍需其他安全控制。",
      },
      {
        title: "用一個簡化流程連起網路概念",
        body: "輸入網址後，瀏覽器先使用 DNS 取得名稱解析資訊；接著依 URL 的主機、Port 和協定建立適當通訊，再送出 HTTP 或 HTTPS 請求。應用資料經過傳輸與網路層封裝成可轉送的資料單位，路由器逐段轉送到伺服器；伺服器處理後回傳 Response。DNS 本身也需要網路封包，而封裝、轉送與應用請求是交錯的層次，不是每一項都只發生一次。",
      },
    ],
    security: "防火牆能降低不必要的網路可達性，但不能取代更新、端點防護、身份驗證或安全程式設計。規則應限制到服務實際需要的範圍，並透過紀錄確認規則是否符合預期。",
    activity: "firewall",
    challenge: true,
    quizzes: [
      {
        question: "某服務只應接受管理網路送來的 TCP Port 443 連線。Firewall Rule 最適合用來做什麼？",
        answer: 2,
        explanation: "防火牆規則可以依方向、來源、協定和 Port 等條件允許或阻擋流量；仍須確認服務與其他安全控制。",
        options: [
          { text: "自動修補該服務的所有程式漏洞", why: "防火牆不負責修補應用程式漏洞。" },
          { text: "把所有網路內容加密", why: "防火牆規則本身不等於加密。" },
          { text: "只允許符合來源網路、TCP、Port 443 條件的流量", why: "" },
          { text: "把伺服器的檔案自動備份", why: "備份與防火牆流量控制是不同工作。" },
        ],
      },
      {
        question: "Firewall 顯示允許某個 HTTPS 連線，哪個結論最合理？",
        answer: 1,
        explanation: "Firewall 允許代表符合規則的流量可通過該控制點，不保證網站內容可信、服務沒有漏洞或資料已正確授權。",
        options: [
          { text: "該網站一定沒有漏洞", why: "流量通過防火牆不會證明應用程式沒有漏洞。" },
          { text: "流量符合該處的允許規則，但仍需其他安全檢查", why: "" },
          { text: "所有伺服器檔案都已掃描且安全", why: "防火牆不是檔案防毒掃描的替代品。" },
          { text: "使用者身份已經完成驗證", why: "允許網路連線不等於應用層身份驗證完成。" },
        ],
      },
      {
        question: "瀏覽器輸入 https://example.com 後，哪個網路概念順序最適合用來追蹤一次簡化的網站請求？",
        answer: 0,
        explanation: "這是理解依賴關係的簡化追蹤順序，不是嚴格時間線：DNS 查詢本身也會使用傳輸和封包，路由器會反覆逐段轉送，伺服器回應再沿網路返回。",
        options: [
          { text: "Domain → DNS → IP → Port → TCP/UDP → HTTP/HTTPS → Packet → Router → Server → Response", why: "" },
          { text: "Response → Server → Domain → Firewall → CPU", why: "這把回應放在請求之前，也未呈現名稱解析與應用請求關係。" },
          { text: "MAC → File System → CPU → DNS → Storage", why: "這混合本機檔案概念，未描述網站通訊的主要依賴。" },
          { text: "HTTP Response → DNS → Browser Request → Port", why: "Response 不會先於取得位址與送出請求。" },
        ],
      },
      {
        question: "防火牆規則阻擋進入伺服器的 TCP Port 443。外部瀏覽器嘗試連到該服務時，最可能的結果是什麼？",
        answer: 3,
        explanation: "符合阻擋條件的 Incoming 流量會在該防火牆控制點被阻擋；這不代表 Outgoing 流量也必然被阻擋，除非另有規則。",
        options: [
          { text: "Firewall 自動刪除伺服器上的網站檔案", why: "流量規則不會自動刪除本機檔案。" },
          { text: "DNS 記錄一定會被永久移除", why: "防火牆規則不會自動刪除 DNS 記錄。" },
          { text: "所有 Outgoing 通訊一定也會被封鎖", why: "題目只說規則阻擋 Incoming TCP Port 443。" },
          { text: "該連線流量無法通過此規則，其他方向需看各自規則", why: "" },
        ],
      },
    ],
  },
];
