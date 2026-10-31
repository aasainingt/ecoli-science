export interface EcoliCard {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  colorClass: string;
  bgGradient: string;
  summary: string;
  content: string[];
  tags: string[];
  category: string;
}

export interface SiteContent {
  version: number;
  heroImage: string;
  heroIntro: string;
  cards: Record<string, string[]>;
}

export const HERO_INTRO =
  '大肠埃希菌是我的名字——你们人类也会俗称我叫大肠杆菌。这个名字你可能在新闻里见过，在体检报告上瞥到过，或者在某个夏天腹泻之后从医生嘴里听到过。我是一种与人类健康生活密切相关的微生物，既是人类肠道中的忠实伙伴，同时我也有可能成为致病的病原体。下面是我的相关介绍，人类，你可以点击“档案资料”了解有关我的事情，请认真阅读并学会和我的相处之道吧～';

export const DEFAULT_HERO_IMAGE = '/ecoli-hero.svg';

export const ecoliCards: EcoliCard[] = [
  {
    slug: 'overview',
    title: '概述与定义',
    subtitle: 'Overview & Definition',
    icon: 'microscope',
    color: '#0D9488',
    colorClass: 'teal',
    bgGradient: 'from-teal-500 to-teal-600',
    summary: '我的身份、来历，以及为什么我同时是人类的伙伴、实验室的明星与公共卫生的哨兵',
    content: [
      '我属于<strong class="r-strong">肠杆菌科埃希菌属</strong>，是一种<strong class="r-strong">革兰阴性短杆菌</strong>。我有<mark class="r-mark">鞭毛</mark>，能在液体里游动；有<mark class="r-mark">菌毛</mark>，能帮我抓住宿主细胞的表面；我没有芽孢，<strong class="r-strong">兼性厌氧</strong>，<em class="r-em">37℃ 左右最舒服</em>。<strong class="r-strong">1885 年</strong>，德国医生<mark class="r-mark">埃舍里希（Theodor Escherich）</mark>在健康人的粪便里第一次发现了我，我的属名就来自他。',
      '我是<strong class="r-strong">分子生物学和遗传学研究中最重要的模式生物之一</strong>。我是第一个被成功进行基因工程改造的生物体，也是实验室中最常用的<mark class="r-mark">原核表达系统</mark>。我的基因组已被完全测序：标准菌株 <em class="r-em">K-12</em> 的基因组包含约<strong class="r-strong"> 460 万个碱基对</strong>和约<strong class="r-strong"> 4,300 个基因</strong>。',
      '在公共卫生领域，我被广泛用作<strong class="r-strong">水质卫生的指示菌</strong>——水中大肠埃希菌的数量，直接反映了水体受到粪便污染的程度，是评价<mark class="r-mark">饮用水和食品卫生安全</mark>的重要指标。',
    ],
    tags: ['革兰阴性杆菌', '埃舍里希', '模式生物', 'K-12 菌株', '水质指示菌'],
    category: 'basics',
  },
  {
    slug: 'morphology',
    title: '形态与结构',
    subtitle: 'Morphology & Structure',
    icon: 'atom',
    color: '#4F46E5',
    colorClass: 'indigo',
    bgGradient: 'from-indigo-500 to-indigo-600',
    summary: '从外膜、荚膜到质粒与转座子——我的“外壳”决定如何被认出，我的“移动基因”决定我能变成什么',
    content: [
      '结构上，我的最外层是<strong class="r-strong">外膜</strong>，外面常常还覆盖着一层薄薄的<mark class="r-mark">荚膜</mark>。这些结构不只是“外壳”——它们决定了我在环境中能活多久，也决定了宿主免疫系统用什么样的方式“认出”我。',
      '我<strong class="r-strong">营养要求不高</strong>，普通培养基就能长得不错：能发酵葡萄糖、乳糖等多种糖类<em class="r-em">产酸产气</em>，<mark class="r-mark">IMViC 试验呈“++--”</mark>；在<mark class="r-mark">伊红美蓝琼脂（EMB）</mark>上形成带<em class="r-em">金属光泽的紫黑色菌落</em>，在<mark class="r-mark">麦康凯琼脂</mark>上呈粉红色。这些特征让我在混合菌群中相对容易被初步识别；但要精确定位到某一株、某一型，还需要<mark class="r-mark">生化反应、血清分型或分子鉴定</mark>。',
      '但真正定义我的，不是我“长什么样”，而是<strong class="r-strong">我能变成什么</strong>。我的基因组里除了相对稳定的核心部分，还散布着大量<em class="r-em">可移动的遗传元件</em>——<mark class="r-mark">质粒、噬菌体、转座子</mark>。<strong class="r-strong">毒力基因和耐药基因</strong>常常搭载在这些元件上，在菌株之间横向传递。这意味着，我可以在不改变“物种身份”的前提下，获得一套全新的“武器库”。',
      '下面是我具体结构的介绍。',
      '我是典型的<strong class="r-strong">革兰氏阴性短杆菌</strong>：长约 1.0–3.0 微米，直径约 0.4–0.7 微米，单个或成对存在，不形成芽孢。细胞壁由<mark class="r-mark">薄而致密的肽聚糖层</mark>（仅占细胞壁的 5%–10%）和<mark class="r-mark">外膜</mark>构成；外膜上的<strong class="r-strong">脂多糖（LPS）</strong>就是<em class="r-em">内毒素</em>的物质基础，由脂质 A、核心多糖与 O-抗原组成。',
      '部分致病型的我还带有<strong class="r-strong">荚膜（K 抗原）</strong>，由多糖构成，能抵抗吞噬细胞的吞噬。我长着<mark class="r-mark">周身鞭毛（H 抗原）</mark>，可以活跃地游动；表面还有多种<mark class="r-mark">菌毛</mark>——I 型菌毛、P 菌毛等——它们是我黏附宿主细胞、启动感染的关键结构。',
      '我还常携带各种<strong class="r-strong">质粒</strong>：<em class="r-em">F 质粒</em>赋予我接合生殖的能力，<em class="r-em">R 质粒</em>携带抗生素抗性基因。这些小型环状 DNA 在细菌之间<strong class="r-strong">水平转移</strong>，是耐药性快速扩散的重要通道。',
    ],
    tags: ['外膜与 LPS', '荚膜', 'IMViC', 'EMB 菌落', '鞭毛与菌毛', '可移动遗传元件'],
    category: 'basics',
  },
  {
    slug: 'pathogenicity',
    title: '致病性',
    subtitle: 'Pathogenicity',
    icon: 'shield-alert',
    color: '#E11D48',
    colorClass: 'rose',
    bgGradient: 'from-rose-500 to-rose-600',
    summary: '共生还是致病，取决于我是否“越界”、是否“多带了几件武器”——从 UPEC 到 EHEC，还有不断出现的杂交株',
    content: [
      '在正常肠道环境里，我是菌群的一部分，参与<strong class="r-strong">抑制其他致病微生物</strong>，也帮宿主合成<mark class="r-mark">维生素 K 和 B 族维生素</mark>。这是我“<em class="r-em">共生</em>”的一面。',
      '但当我<strong class="r-strong">“越界”</strong>，或者<strong class="r-strong">“多带了几件武器”</strong>的时候，情况就完全不同了。',
      '肠道外感染里，我最常被提起的是<strong class="r-strong">泌尿系统感染</strong>。尿路致病性大肠埃希菌（<mark class="r-mark">UPEC</mark>）是<em class="r-em">上行性尿路感染的主要病原之一</em>：它用菌毛沿尿道上行，黏附并侵入尿路上皮。严重时可引起<strong class="r-strong">肾盂肾炎</strong>，甚至<span class="r-warn">菌血症</span>。在医院获得性感染中，我也并不少见，<mark class="r-mark">导尿管相关感染</mark>尤其与我有关。新生儿脑膜炎大肠埃希菌（NMEC）则是新生儿细菌性脑膜炎的重要病原。',
      '肠道感染按致病机制被分成几个经典类型：<strong class="r-strong">肠产毒型（ETEC）</strong>产生耐热/不耐热肠毒素，引起水样泻，是<mark class="r-mark">旅行者腹泻</mark>和发展中国家婴幼儿腹泻的常见原因；<strong class="r-strong">肠致病型（EPEC）</strong>靠 BFP 菌毛与 intimin 蛋白在肠上皮形成“附着-抹平”病变，主要导致婴儿腹泻；<strong class="r-strong">肠侵袭型（EIEC）</strong>直接侵入上皮细胞内繁殖，引起痢疾样症状（发热、腹痛、黏液脓血便）；<strong class="r-strong">肠集聚型（EAEC）</strong>以“堆砖样”黏附并形成生物膜，引起急性和持续性腹泻。',
      '而<strong class="r-strong">肠出血型（EHEC）</strong>，尤其是 <span class="r-warn">O157:H7 血清型</span>，是需要特别警惕的一类。EHEC 的核心武器是<strong class="r-strong">志贺毒素（Stx1/Stx2）</strong>和 <mark class="r-mark">LEE 致病岛编码的 III 型分泌系统</mark>——后者向宿主细胞注入 Tir、EspB 等效应蛋白，在肠上皮上形成“黏附与抹平”（A/E）损伤。志贺毒素可以引发出血性结肠炎，严重时进展为<span class="r-warn">溶血性尿毒综合征（HUS）</span>，表现为<span class="r-warn">急性肾衰竭、溶血性贫血和血小板减少</span>，病死率约 3%–5%。而且 EHEC 的感染剂量极低，仅需约 <em class="r-em">10–100 个细菌</em>即可致病。',
      '近年来，致病型之间的边界也在变得模糊。出现了同时携带两种致病型特征的<strong class="r-strong">混合致病型</strong>，例如<mark class="r-mark">STEC/ETEC 杂交株</mark>——它们既产志贺毒素，又具备 ETEC 的黏附素。这种“不守规矩”的进化方式，是理解我致病性的一个关键前提。',
    ],
    tags: ['UPEC', '尿路感染', 'ETEC', 'EHEC / O157:H7', '志贺毒素', 'HUS', '杂交致病型'],
    category: 'medical',
  },
  {
    slug: 'transmission',
    title: '传播途径',
    subtitle: 'Transmission Routes',
    icon: 'route',
    color: '#D97706',
    colorClass: 'amber',
    bgGradient: 'from-amber-500 to-amber-600',
    summary: '我的传播以“粪—口”为主线：食物、水、接触、医院环境各有通道，极低剂量即可致病',
    content: [
      '我的传播遵循<strong class="r-strong">“粪—口”途径</strong>为主的基本原则，但不同型别的传播方式各有特点。',
      '<strong class="r-strong">食源性传播</strong>是最重要的途径：被污染的食物包括<mark class="r-mark">未煮熟的碎牛肉</mark>（O157:H7 的经典载体）、未经巴氏消毒的牛奶和果汁、受污染的生蔬菜和芽苗菜等。EHEC 在胃酸中有一定存活能力，<em class="r-em">极低的感染剂量（约 10–100 个细菌）</em>即可致病。',
      '<strong class="r-strong">水源性传播</strong>：被人和动物粪便污染的饮用水源、娱乐用水（游泳池、湖泊）、灌溉用水，都可能成为媒介，灌溉水还会进一步污染农产品。',
      '<strong class="r-strong">接触传播</strong>：人与人之间的直接接触（尤其是家庭内和托幼机构）、被污染的物体表面都可传播；接触<mark class="r-mark">牛、羊等反刍动物</mark>同样危险——它们是 EHEC 的天然储存宿主。',
      '<strong class="r-strong">医源性传播</strong>：在医院环境中，我可通过医疗器械、医护人员手部引起院内感染，<em class="r-em">导尿管相关尿路感染</em>尤为典型。',
      '高危人群与因素包括：<mark class="r-mark">婴幼儿和老年人</mark>、免疫抑制状态（HIV 感染、器官移植后）、使用<mark class="r-mark">抑酸药物</mark>（削弱了胃酸这道屏障）、前往卫生条件较差地区旅行、以及食用未经充分加热的食物。',
    ],
    tags: ['粪—口传播', '食源性', '水源性', '反刍动物', '院内感染', '高危人群'],
    category: 'public-health',
  },
  {
    slug: 'prevention',
    title: '预防措施',
    subtitle: 'Prevention Measures',
    icon: 'shield-check',
    color: '#059669',
    colorClass: 'emerald',
    bgGradient: 'from-emerald-500 to-emerald-600',
    summary: '洗手、煮熟、喝安全的水——从个人习惯到 HACCP 体系，层层设防',
    content: [
      '我的预防需要从<strong class="r-strong">个人卫生、食品安全、水源保护到公共卫生政策</strong>多个层面综合施策。',
      '<strong class="r-strong">勤洗手</strong>是最有效的措施之一：如厕后、更换尿布后、处理生肉后、进食前和准备食物前，用肥皂和流动水彻底洗手<em class="r-em">至少 20 秒</em>。儿童照护与老年照护人员尤其要重视手卫生。',
      '<strong class="r-strong">食品安全</strong>：肉类（特别是碎牛肉）应彻底煮熟，中心温度达到 <mark class="r-mark">71°C 以上</mark>；生熟分开，使用不同砧板；选择经过巴氏消毒的牛奶和果汁；生食蔬果充分清洗；剩菜及时冷藏、食用前彻底加热。',
      '<strong class="r-strong">饮水安全</strong>：不饮用未经处理的天然水源水；在卫生条件不确定的地区，喝<mark class="r-mark">开水或经可靠消毒的水</mark>；游泳池等娱乐用水定期检测维护。',
      '<strong class="r-strong">农牧业与加工环节</strong>：反刍动物养殖场做好卫生管理，减少带菌排菌；使用安全的灌溉水与充分发酵的肥料；食品加工实施 <mark class="r-mark">HACCP 危害分析与关键控制点</mark>体系。',
      '<strong class="r-strong">医院感染控制</strong>：严格手卫生与标准预防；合理使用抗菌药物、减缓耐药菌产生；规范清洁消毒医疗器械；对多重耐药菌实施接触隔离。',
      '<strong class="r-strong">疫苗</strong>：目前已有减少牛群 EHEC 排菌的<em class="r-em">动物疫苗</em>在部分国家使用；人用 ETEC 候选疫苗仍在临床试验阶段，尚无广泛上市的人用大肠埃希菌疫苗。',
    ],
    tags: ['手卫生', '食品安全', '71°C', '饮水安全', 'HACCP', '疫苗'],
    category: 'public-health',
  },
  {
    slug: 'treatment',
    title: '治疗方法',
    subtitle: 'Treatment Methods',
    icon: 'pill',
    color: '#7C3AED',
    colorClass: 'violet',
    bgGradient: 'from-violet-500 to-violet-600',
    summary: '补液是基础，抗生素要看型别——EHEC 感染尤其不能乱用药；耐药时代还需要新策略',
    content: [
      '治疗需要根据<strong class="r-strong">感染类型、严重程度和细菌耐药情况</strong>制定个体化方案。',
      '<strong class="r-strong">支持治疗</strong>是大多数肠道感染的基础：轻中度脱水口服<mark class="r-mark">补液盐（ORS）</mark>，重度脱水静脉补液；维持营养摄入。<span class="r-warn">EHEC 感染时避免使用止泻药</span>，因其可能增加毒素吸收与 HUS 风险。',
      '<strong class="r-strong">抗菌药物</strong>：单纯性尿路感染常用呋喃妥因、磷霉素、头孢菌素类或氟喹诺酮类；败血症、脑膜炎等严重肠外感染需依据<mark class="r-mark">药敏试验</mark>选药，常需碳青霉烯类、三代头孢菌素等广谱抗生素。',
      '<strong class="r-strong">重要警示——EHEC 感染</strong>：<span class="r-warn">不推荐常规使用抗生素</span>。氟喹诺酮类、TMP-SMX 等药物可能诱导 SOS 反应，<span class="r-warn">促进志贺毒素产生与释放，增加 HUS 风险</span>。EHEC 感染以支持治疗为主。',
      '<strong class="r-strong">耐药性</strong>已成为全球性挑战：产<mark class="r-mark">超广谱 β-内酰胺酶（ESBL）</mark>的菌株对青霉素和头孢菌素耐药；产碳青霉烯酶（NDM、KPC）的菌株几乎对所有 β-内酰胺类耐药，<em class="r-em">多粘菌素和替加环素</em>常成为最后选择。',
      '<strong class="r-strong">新型策略</strong>：利用特异性噬菌体裂解致病菌的<mark class="r-mark">噬菌体疗法</mark>；通过重建肠道微生态清除耐药菌定植的<mark class="r-mark">粪菌移植（FMT）</mark>；以及针对志贺毒素的中和抗体等。',
      '<strong class="r-strong">预后</strong>：大多数单纯性尿路感染和轻度肠道感染经适当治疗可完全恢复；但 HUS 病死率约 3%–5%，部分幸存者遗留慢性肾功能损害；新生儿脑膜炎和大肠杆菌败血症病情凶险，需要早期识别与积极治疗。',
    ],
    tags: ['补液', '药敏试验', 'EHEC 用药禁忌', 'ESBL', '噬菌体疗法'],
    category: 'medical',
  },
  {
    slug: 'research',
    title: '研究进展',
    subtitle: 'Research Advances',
    icon: 'flask-conical',
    color: '#0284C7',
    colorClass: 'sky',
    bgGradient: 'from-sky-500 to-sky-600',
    summary: '合成生物学、CRISPR、微生物组与 AI 辅助新药发现——还有“饿死并沉默毒力”的全新抗感染思路',
    content: [
      '作为最重要的模式生物之一，对我的研究持续推动着生命科学的前沿：<strong class="r-strong">合成生物学</strong>把我当作首选宿主，用于青蒿素前体、生物燃料的微生物合成与基因线路设计；<strong class="r-strong">CRISPR 基因编辑</strong>技术在我身上实现精确的基因敲除、插入与表达调控；<strong class="r-strong">微生物组学</strong>则揭示了我在肠道生态位中与其他成员的竞争与协作。',
      '面对耐药挑战，研究者还在用 AI 构建<em class="r-em">全细胞模型</em>、预测基因敲除表型、优化代谢工程；并利用我进行纳米颗粒生物合成、表面展示疫苗与生物传感器开发。而<strong class="r-strong">耐药和毒力在同一菌株里“合流”</strong>，是当前最棘手的问题之一。新的研究方向并不全是“发明新抗生素”，有几个思路值得特别关注：',
      '<strong class="r-strong">不杀菌，用“饿死”加“沉默”毒力。</strong>2026 年 <em class="r-em">Nature Communications</em> 报道了一种双重机制策略：用工程化的大肠埃希菌 Nissle 1917（<mark class="r-mark">EcN3</mark>）联合 2′-岩藻糖基乳糖（<mark class="r-mark">2′-FL</mark>），通过多腔室微球递送到结肠。EcN3 表达 α-L-岩藻糖苷酶，把 2′-FL 水解成乳糖和岩藻糖——乳糖限制 EHEC 偏好利用的营养物，岩藻糖则激活 <em class="r-em">FusKR</em> 信号抑制毒力基因表达。在小鼠和幼兔模型中，这套系统降低了肠道定植和上皮损伤，<strong class="r-strong">而且不诱导志贺毒素产生</strong>。<a class="r-link" href="https://www.nature.com/articles/s41467-026-69126-4" target="_blank" rel="noopener noreferrer">阅读原文 ↗</a>',
      '<strong class="r-strong">老药新用：恢复效力。</strong>2025 年 <em class="r-em">iScience</em> 的一项研究显示，FDA 已批准药物<mark class="r-mark">硝唑啉（nitroxoline）</mark>可以靶向 MCR-1 蛋白，<strong class="r-strong">恢复黏菌素对 mcr-1 阳性多重耐药大肠埃希菌的杀菌活性</strong>，并在小鼠腹膜炎模型中改善了治疗效果。<a class="r-link" href="https://www.sciencedirect.com/science/article/pii/S2589004225022643" target="_blank" rel="noopener noreferrer">阅读原文 ↗</a>',
      '<strong class="r-strong">窄谱抗生素：保护微生物组的前提下“精准打击”。</strong>2025 年 <em class="r-em">Nature Microbiology</em> 报道了一项 AI 辅助发现：研究者筛选了 10,747 种生物活性小分子，发现化合物<mark class="r-mark">enterolocin</mark>，靶向 LolCDE 复合体、干扰脂蛋白转运，对肠杆菌科具有特异性活性；联合外膜通透剂时能克服临床分离株的耐药性，并在小鼠模型中抑制了黏附侵袭性大肠埃希菌（AIEC）感染，<strong class="r-strong">同时较大程度保留了整体微生物组</strong>。<a class="r-link" href="https://pubmed.ncbi.nlm.nih.gov/41044363/" target="_blank" rel="noopener noreferrer">阅读原文 ↗</a>',
    ],
    tags: ['合成生物学', 'CRISPR', '微生物组', 'AI 药物发现', '2′-FL / EcN3', '硝唑啉', 'enterolocin'],
    category: 'frontier',
  },
];

export function getCardBySlug(slug: string): EcoliCard | undefined {
  return ecoliCards.find((card) => card.slug === slug);
}

export function searchCards(query: string): EcoliCard[] {
  const lowerQuery = query.toLowerCase();
  return ecoliCards.filter(
    (card) =>
      card.title.toLowerCase().includes(lowerQuery) ||
      card.subtitle.toLowerCase().includes(lowerQuery) ||
      card.summary.toLowerCase().includes(lowerQuery) ||
      card.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      card.content.some((paragraph) =>
        paragraph.toLowerCase().includes(lowerQuery)
      )
  );
}

export function getCardsByCategory(category: string): EcoliCard[] {
  return ecoliCards.filter((card) => card.category === category);
}

export interface Category {
  id: string;
  label: string;
}

export const categories: Category[] = [
  { id: 'all', label: '全部' },
  { id: 'basics', label: '基础知识' },
  { id: 'medical', label: '医学' },
  { id: 'public-health', label: '公共卫生' },
  { id: 'frontier', label: '科学前沿' },
];

export function getDefaultContent(): SiteContent {
  return {
    version: 1,
    heroImage: DEFAULT_HERO_IMAGE,
    heroIntro: HERO_INTRO,
    cards: Object.fromEntries(
      ecoliCards.map((card) => [card.slug, card.content])
    ),
  };
}
