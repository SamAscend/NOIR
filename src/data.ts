export type Language = "id" | "en" | "ja";

export type Page = {
  slug: string;
  number: string;
  label: string;
  title: string;
  intro: string;
  sections: {
    index: string;
    title: string;
    body?: string;
    quote?: string;
    items?: { title: string; text: string }[];
  }[];
};

export type Copy = {
  navLabel: string;
  nav: Record<string, string>;
  heroKicker: string;
  heroTitle: string[];
  heroLead: string;
  explore: string;
  scroll: string;
  aboutKicker: string;
  aboutTitle: string[];
  aboutBody: string;
  indexKicker: string;
  indexTitle: string[];
  indexAside: string;
  cards: { title: string; text: string }[];
  closingKicker: string;
  closingTitle: string[];
  closingBody: string;
  closingButton: string;
  footer: string;
  previous: string;
  next: string;
  pages: Record<string, Page>;
};

const pagesId: Record<string, Page> = {
  identity: { slug: "identity", number: "01", label: "Identitas", title: "Apa itu NOIR?", intro: "NOIR adalah ruang untuk pengembangan diri, kolaborasi strategis, dan persaudaraan yang berintegritas.", sections: [
    { index: "01", title: "Definisi inti", body: "Kami bukan sekadar perkumpulan tanpa arah dan bukan kelompok yang memandang rendah pihak lain. NOIR adalah lingkaran tempat kami menjaga standar, saling mengingatkan dalam kebaikan, dan tumbuh bersama secara dewasa." },
    { index: "02", title: "Cara kami tumbuh", items: [
      { title: "Keselarasan", text: "Bergerak bersama berdasarkan nilai, etika, dan kedisiplinan—tanpa kehilangan keterbukaan terhadap masyarakat." },
      { title: "Ambisi yang membumi", text: "Menjaga kualitas dan ketangguhan, sekaligus menyadari bahwa setiap orang selalu memiliki ruang untuk belajar." },
      { title: "Substansi", text: "Memilih konsistensi dan hasil nyata daripada pengakuan yang berlebihan." }
    ] }
  ] },
  philosophy: { slug: "philosophy", number: "02", label: "Filosofi", title: "Makna NOIR", intro: "Nama ini mengingatkan kami untuk tetap tenang, teguh pada prinsip, dan rendah hati dalam pencapaian.", sections: [
    { index: "01", title: "Arti hitam", body: "NOIR berarti hitam dalam bahasa Prancis. Hitam menyerap cahaya tanpa perlu memantulkannya untuk menarik perhatian. Bagi kami, ketenangan, ketegasan, dan kedewasaan dapat berdiri tanpa keramaian." },
    { index: "02", title: "Mengapa NOIR?", items: [
      { title: "Autentik", text: "Nama ini lahir dari identitas Direktur dan serba-hitam sebagai pengingat kesiapan, kerapian, dan kendali diri." },
      { title: "Seimbang", text: "Singkat dan tegas, tetap elegan—bukan agresif, juga tidak kaku." },
      { title: "Manusiawi", text: "Kesempurnaan mutlak bukan milik manusia. Kami berikhtiar hingga batas terbaik kami: 99%." }
    ] }
  ] },
  vision: { slug: "vision", number: "03", label: "Visi", title: "Tujuan yang jelas", intro: "Kami memilih arah panjang dan cara yang membumi: matang dalam karakter, tajam dalam karya, elegan dalam sikap.", sections: [
    { index: "01", title: "Visi", quote: "Menjadi kolektif yang matang dalam karakter, tajam dalam karya, dan elegan dalam bersikap—memberi dampak positif tanpa meninggikan diri." },
    { index: "02", title: "Misi", items: [
      { title: "Dedikasi 99%", text: "Memberikan usaha terbaik dalam setiap tanggung jawab, lalu menerima hasil dengan lapang." },
      { title: "Kesetaraan", text: "Menghormati setiap individu tanpa memandang status, latar belakang, atau jalan hidup." },
      { title: "Persaudaraan disiplin", text: "Saling menguatkan, menjaga etika, dan berani mengoreksi secara objektif." }
    ] }
  ] },
  edge: { slug: "edge", number: "04", label: "Pembeda", title: "Cara kami bekerja", intro: "Perbedaan NOIR bukan soal merasa lebih unggul, melainkan bagaimana kami mendisiplinkan diri sendiri.", sections: [
    { index: "01", title: "Tiga prinsip", items: [
      { title: "Penguasaan diri", text: "Fokus mengalahkan rasa malas, ego, dan versi terlemah dari diri sendiri—bukan mengalahkan orang lain." },
      { title: "Ketenangan", text: "Bekerja tanpa tergesa-gesa merayakan proses, dan berhasil dengan kerendahan hati." },
      { title: "Kesetaraan", text: "Kode serba hitam melambangkan pijakan yang sama: disiplin, tanggung jawab, dan komitmen." }
    ] }
  ] },
  execution: { slug: "execution", number: "05", label: "Eksekusi", title: "Dari niat ke aksi", intro: "Visi membutuhkan metode yang terukur. NOIR bekerja melalui tiga fase yang konsisten.", sections: [
    { index: "01", title: "Kerangka tiga fase", items: [
      { title: "Fortifikasi", text: "Memperkuat disiplin waktu, kesehatan, pola pikir, dan kematangan emosional." },
      { title: "Sinergi", text: "Menggabungkan keahlian, merencanakan dengan matang, mengeksekusi dengan presisi, dan mengevaluasi tanpa ego." },
      { title: "Kontribusi", text: "Menghadirkan hasil yang memberi nilai bagi masyarakat dan mitra dengan etika profesional." }
    ] },
    { index: "02", title: "Prinsip operasional", quote: "Rencanakan dalam ketenangan. Eksekusi tanpa setengah hati. Terima hasil dengan lapang dada." }
  ] },
  director: { slug: "director", number: "06", label: "Direktur", title: "Sam", intro: "Kepemimpinan adalah amanah untuk menjaga arah, etika, dan marwah kolektif.", sections: [
    { index: "01", title: "Sudut pandang", body: "Peran sebagai Direktur bukan simbol kekuasaan untuk berada di atas orang lain. Ia adalah tanggung jawab untuk menjaga arah dan integritas kolektif—serta menjadi teladan dalam ketegasan, kerapian, dan kesiapan." },
    { index: "02", title: "Yang dibangun", items: [
      { title: "Lingkungan sehat", text: "Ruang bagi individu berintegritas untuk berkembang tanpa tekanan, iri hati, atau kesombongan." },
      { title: "Standar", text: "Membuat NOIR dikenal melalui ketenangan, profesionalisme, dan kontribusi—bukan sensasi." },
      { title: "Keseimbangan", text: "Menjaga ketegasan berjalan bersama kerendahan hati dan kesadaran akan batas kemanusiaan." }
    ] }
  ] }
};

function translatePages(source: Record<string, Page>, lang: "en" | "ja"): Record<string, Page> {
  if (lang === "ja") {
    return Object.fromEntries(Object.entries(source).map(([key, page]) => [key, {
      ...page,
      label: ["アイデンティティ", "フィロソフィ", "ヴィジョン", "NOIRらしさ", "実行", "ディレクター"][Object.keys(source).indexOf(key)],
      title: page.slug === "identity" ? "NOIRとは？" : page.slug === "director" ? "Sam" : page.title,
    }]));
  }
  return source;
}

export const copyId: Copy = {
  navLabel: "Navigasi utama",
  nav: { identity: "Identitas", philosophy: "Filosofi", vision: "Visi", edge: "Pembeda", execution: "Eksekusi", director: "Direktur" },
  heroKicker: "KOLEKTIF PRIBADI · JAKARTA",
  heroTitle: ["Disiplin dalam", "diam."],
  heroLead: "Kami membangun karakter, ketajaman eksekusi, dan persaudaraan melalui standar yang dijaga serta pencapaian yang tetap membumi.",
  explore: "Pelajari NOIR",
  scroll: "Gulir untuk menjelajah",
  aboutKicker: "Tentang",
  aboutTitle: ["Ruang untuk", "bertumbuh."],
  aboutBody: "NOIR adalah ruang bagi individu yang menghargai proses. Kami bertumbuh dengan tenang, saling menjaga kehormatan, dan tetap berpijak pada prinsip tanpa merasa lebih tinggi dari siapa pun.",
  indexKicker: "Prinsip",
  indexTitle: ["Enam hal", "yang kami pegang."],
  indexAside: "IDENTITAS / METODE / TUJUAN",
  cards: [
    { title: "Identitas", text: "Esensi kolektif dan cara kami tumbuh bersama." },
    { title: "Filosofi", text: "Makna NOIR dan prinsip batas 99%." },
    { title: "Visi", text: "Tujuan yang kami jalani dengan arah yang jelas." },
    { title: "Pembeda", text: "Cara kami menjaga karakter dan disiplin." },
    { title: "Eksekusi", text: "Kerangka kerja yang mengubah niat menjadi aksi." },
    { title: "Direktur", text: "Pemikiran dan tanggung jawab di balik NOIR." },
  ],
  closingKicker: "Arah kami",
  closingTitle: ["Lebih tenang.", "Lebih bermakna.", "Lebih siap."],
  closingBody: "NOIR dibangun agar setiap hari kami menjadi pribadi yang lebih disiplin, lebih bermanfaat, dan lebih siap dibandingkan hari kemarin.",
  closingButton: "Kenali pemimpin",
  footer: "DIPIMPIN OLEH SAM",
  previous: "Sebelumnya",
  next: "Selanjutnya",
  pages: pagesId,
};

export const copyEn: Copy = {
  ...copyId,
  navLabel: "Main navigation",
  nav: { identity: "Identity", philosophy: "Philosophy", vision: "Vision", edge: "The Edge", execution: "Execution", director: "Director" },
  heroKicker: "PRIVATE COLLECTIVE · JAKARTA",
  heroTitle: ["Discipline in", "silence."],
  heroLead: "We build character, sharp execution, and brotherhood through upheld standards and achievements that remain grounded.",
  explore: "Discover NOIR",
  scroll: "Scroll to explore",
  aboutKicker: "About",
  aboutTitle: ["Room to", "grow."],
  aboutBody: "NOIR is a space for people who value the process. We grow quietly, protect one another’s dignity, and stay grounded in principle.",
  indexKicker: "Principles",
  indexTitle: ["Six ideas", "we stand by."],
  cards: copyId.cards.map((card, index) => [
    ["Identity", "The essence of our collective and how we grow together."],
    ["Philosophy", "The meaning of NOIR and the 99% principle."],
    ["Vision", "Our purpose, with a clear and shared direction."],
    ["The Edge", "How we protect our character and discipline."],
    ["Execution", "The framework that turns intent into action."],
    ["Director", "The thinking and responsibility behind NOIR."],
  ][index]).map(([title, text]) => ({ title, text })),
  closingKicker: "Our direction",
  closingTitle: ["Quieter.", "More meaningful.", "More ready."],
  closingBody: "NOIR exists so that, every day, we become more disciplined, useful, and prepared than yesterday.",
  closingButton: "Meet the Director",
  footer: "DIRECTED BY SAM",
  previous: "Previous",
  next: "Next",
  pages: {
    identity: { ...pagesId.identity, label: "Identity", title: "What is NOIR?", intro: "NOIR is an inner circle for personal growth, strategic collaboration, and brotherhood grounded in integrity.", sections: [
      { index: "01", title: "Core definition", body: "We are neither a group without direction nor a collective that looks down on others. NOIR is a place where we uphold standards, encourage one another toward good, and grow with maturity." },
      { index: "02", title: "How we grow", items: [
        { title: "Alignment", text: "We move together around shared values, ethics, and discipline—without closing ourselves to society." },
        { title: "Grounded ambition", text: "We protect quality and resilience while recognizing that every person has more to learn." },
        { title: "Substance", text: "We choose consistent action and tangible results over excessive recognition." }
      ] }
    ] },
    philosophy: { ...pagesId.philosophy, label: "Philosophy", title: "The meaning of NOIR", intro: "The name reminds us to stay composed, true to principle, and humble in achievement.", sections: pagesId.philosophy.sections },
    vision: { ...pagesId.vision, label: "Vision", title: "A clear purpose", intro: "We choose an enduring direction: mature in character, precise in work, and elegant in conduct.", sections: pagesId.vision.sections },
    edge: { ...pagesId.edge, label: "The Edge", title: "How we work", intro: "NOIR is different not by feeling superior, but by mastering the discipline of self.", sections: pagesId.edge.sections },
    execution: { ...pagesId.execution, label: "Execution", title: "From intent to action", intro: "Vision needs a measurable method. NOIR works through three consistent phases.", sections: pagesId.execution.sections },
    director: { ...pagesId.director, label: "Director", title: "Sam", intro: "Leadership is a responsibility to safeguard the direction, ethics, and integrity of the collective.", sections: pagesId.director.sections },
  },
};

export const copyJa: Copy = {
  ...copyEn,
  navLabel: "メインナビゲーション",
  nav: { identity: "アイデンティティ", philosophy: "フィロソフィ", vision: "ヴィジョン", edge: "NOIRらしさ", execution: "実行", director: "ディレクター" },
  heroKicker: "プライベート・コレクティブ · ジャカルタ",
  heroTitle: ["静寂の中に、", "規律を。"],
  heroLead: "守り続ける基準と揺るがない目標を通して、人格・実行力・連帯を築きます。",
  explore: "NOIRを知る",
  scroll: "スクロールして探索",
  aboutKicker: "私たちについて",
  aboutTitle: ["成長するための", "空間。"],
  aboutBody: "NOIRは、過程を大切にする人々のための空間です。静かに成長し、互いの尊厳を守り、原則に根ざしながらも誰よりも高い場所を求めません。",
  indexKicker: "原則",
  indexTitle: ["大切にする", "考え方。"],
  cards: [
    { title: "アイデンティティ", text: "コレクティブの本質と成長の方法。" },
    { title: "フィロソフィ", text: "NOIRの意味と99％の原則。" },
    { title: "ヴィジョン", text: "明確な方向性を持つ目的。" },
    { title: "NOIRらしさ", text: "人格と規律を守る方法。" },
    { title: "実行", text: "意図を行動へ変える枠組み。" },
    { title: "ディレクター", text: "NOIRを支える責任。" },
  ],
  closingKicker: "私たちの方向",
  closingTitle: ["静かに。", "意味深く。", "準備を整えて。"],
  closingBody: "NOIRは、昨日より規律を持ち、役立つ存在となり、より準備された人間へと毎日成長するためにあります。",
  closingButton: "ディレクターを知る",
  footer: "ディレクター：SAM",
  pages: translatePages(copyEn.pages, "ja"),
};

export const siteCopy: Record<Language, Copy> = { id: copyId, en: copyEn, ja: copyJa };
