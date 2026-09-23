/* ==========================================================================
   MOLA ÇARKI - JAVASCRIPT OYUN MOTORU & VERİLERİ
   KPSS Ders Molası & Sohbet Oyunu (Tabu, İlişki, Doğruluk, Kampüs, Meydan Okuma)
   Orijinal Zengin Kategori Havuzu + Her 3-4 Soruda Bir 2 Seçenekli İkilem Dili!
   ========================================================================== */

/* ==========================================================================
   1. ZENGİN SORU HAVUZU: TABU & SIR, İLİŞKİ, DOĞRULUK, KAMPÜS, CESARET
   Üstü Kapalı, Genel İtiraf & İlişki Bazlı, İlk Günün Nezaketine Uygun!
   ========================================================================== */

// 🎭 TABU & SIR (Açık Uçlu, İmalı, 32 Soru - Her 3-4 Soruda Bir 2 Seçenekli)
const TABOO_QUESTIONS = [
  "İki insan arasında henüz hiçbir şey açıkça konuşulmamışken beliren o görünmez çekimi ilk hangi küçük hareket ele verir?",
  "Gecenin geç bir saatinde gelen 'uyumadın mı?' mesajı sence sadece uykusuzluktan mıdır, yoksa altında tatlı bir merak mı ararsın?",
  "İki durum arasında kalsan hangisini seçerdin: Hayatının en unutulmaz anlarının ince ince planlanmış olması mı, yoksa kontrolün aniden akışa bırakıldığı o spontane kararlarla yaşanması mı?",
  "Dışarıdan herkese karşı çok mesafeli ve ciddi duran birinin, sadece sana karşı yumuşayıp samimileşmesi sende nasıl bir etki bırakır?",
  "Karşı tarafta gardını bir anda düşüren ve seni savunmasız bırakan o en can alıcı detay genelde ne olur?",
  "İki seçenek arasında kalsan: Biriyle flört ederken ilk adımı karşı tarafın atması için ortamı bilerek hazırlamak mı, yoksa hiç beklemeyip doğrudan hamle yapmak mı?",
  "Sence bir çekimin en heyecan verici evresi hangisi: Henüz aranızda adının konmadığı o gizli bakışmalar mı, yoksa mesafelerin kalktığı an mı?",
  "Biriyle konuşurken 'aslında bu kadar çabuk etkilenmemem gerekirdi ama kendime engel olamıyorum' dediğin o hissi en son ne zaman yaşadın?",
  "Bir ortamda herkesin ilgisini çeken birinin bütün dikkatini sadece sana vermesi sende nasıl bir duygu yaratır?",
  "İki durum arasında kalsan hangisini seçerdin: Karşı tarafın sana 'beni kolay etkileyemezsin' diyerek meydan okuması mı, yoksa ilk andan itibaren sana çekildiğini dürüstçe belli etmesi mi?",
  "Biriyle tüm şehri ve kuralları geride bırakıp plansız bir gece yolculuğuna çıksan, o geceden geriye en çok hangi anın kalmasını isterdin?",
  "Kendi kendine koyduğun 'asla taviz vermem' dediğin hangi prensibini, çok etkilendiğin biri söz konusu olduğunda esnettin?",
  "İki seçenek arasında kalsan: Sosyal medyada gece geç saatte birinin hikayesine cesur bir yanıt verip nabzını hızlandırmak mı, yoksa sabahı bekleyip sakin kalmak mı?",
  "Telefonunda birisi görse açıklamakta zorlanacağın, sadece sana özel gizli bir yazışma veya fotoğraf var mı?",
  "Biriyle konuşurken ilk birkaç dakikada 'ben bu insanla çok özel bir frekans yakalayabilirim' hissini veren o ilk ipucu nedir?",
  "İki durum arasında kalsan: Karşı tarafın bilerek meraklandırıp 'biraz daha bekle' diyerek gerilimi tırmandırması mı, yoksa anında doğrudan akışına bırakması mı seni daha çok çeker?",
  "İki insan arasında aniden başlayan bir enerji yüzünden o günkü tüm planlarını ve sorumluluklarını ertelemeyi göze alır mıydın?",
  "Karşı tarafın 'Şu an sadece seninle bu anı paylaşmak istiyorum' tavrını hissettirmesi sende nasıl bir etki yaratır?",
  "İki durum arasında kalsan hangisi daha doğru: İki insan arasındaki derin çekimin uzun uzun konuşularak çözülmesi mi, yoksa o konuşulmayan anlamlı sessizlikte hissedilmesi mi?",
  "Daha önce birinin sadece yaydığı o sıcak enerjiye ve aurasına kapılıp mantığını tamamen bir kenara bıraktığın oldu mu?",
  "Ailenden ve arkadaşlarından saklayacağın, sadece gerçekten ruhunu açtığın o özel kişiye anlatacağın en çılgın sırrın neyle ilgili?",
  "İki seçenek arasında kalsan: Kalabalık bir ortamda birinin sadece tek bir bakışıyla seninle ilgilendiğini belli etmesi mi, yoksa herkesin içinde yanına gelip sana iltifat etmesi mi seni daha çok heyecanlandırır?",
  "Gece yarısı telefonuna düşen ve seni hem şaşırtan hem de içini kıpır kıpır eden en beklenmedik bildirim neydi?",
  "Hiç birine karşı koyamadığın için mantığının 'dur' dediği ama duygularının peşinden gittiğin unutulmaz bir an yaşadın mı?",
  "İki durum arasında kalsan: Bir insanın özgüveni ve duruşu mu seni daha çabuk etkiler, yoksa içinde sakladığı o gizli masumiyet ve merak duygusu mu?",
  "Normalde çok temkinli biriyken, birinin enerjisine kapılıp tüm kontrolü akışına bırakmak fikri sana ne hissettirir?",
  "Şu an bu ekranın karşısında, karşı tarafla ilgili aklından geçen ama 'şimdi söylersem iddialı kaçar' dediğin o tatlı düşünce nedir?",
  "İki seçenek arasında kalsan: Biriyle Zoom'da veya telefonda konuşurken ses tonunun aniden kısılarak samimileşmesi mi, yoksa gözlerinin içine hiç kaçırmadan bakması mı sende daha çok elektriklenme yaratır?",
  "Daha önce hiç 'sadece arkadaşız / sadece ders çalışıyoruz' diyerek başlayıp, sonrasında kendini o kişiyi gün boyu düşünürken bulduğun oldu mu?",
  "Sence bir insanla sabahın ilk ışıklarına kadar hiç sıkılmadan konuşabilmek aradaki hangi derin uyumun işaretidir?",
  "İki durum arasında kalsan: Biriyle arandaki enerji çok yüksekse bunu bakışlarınla hemen belli etmek mi, yoksa bilerek biraz umursamaz görünüp onu meraklandırmak mı?",
  "Dışarıdan herkesin seni çok sakin bildiği ama doğru insanla baş başa kaldığında içinden çıkan o cesur tarafın nedir?"
];

// ✨ İLİŞKİ & UYUM (24 Soru - Her 3-4 Soruda Bir 2 Seçenekli)
const ILISKI_QUESTIONS = [
  "İlk randevuda kahve içerken karşı tarafın gözlerini bir an bile ayırmadan sana odaklanması seni utandırır mı yoksa cesaretlendirir mi?",
  "Sence bir ilişkide kafa uyumu mu daha önce gelir, yoksa aradaki o açıklanamayan kimya mı? Biri olmadan diğeri ne kadar sürer?",
  "İki durum arasında kalsan hangisini seçerdin: Geceleri baş başa oturup saatlerce derin konular konuşmak mı, yoksa aralıksız şakalaşıp gülmek mi?",
  "Flört ederken 'cool' davranıp mesajlara bilerek geç mi cevap verirsin, yoksa heyecanını hiç saklayamaz mısın?",
  "Sence bir insanın ses tonu ve konuşma ritmi, dış görünüşünden bile daha büyük bir çekim unsuru olabilir mi?",
  "İki seçenek arasında kalsan: Bir ilişkide gidişatı tamamen karşı tarafın enerjisine bırakmak mı, yoksa kontrolün ve planların sende olmasını mı tercih edersin?",
  "Sosyal medyadan tanıştığın birinde 'evet bu kişiyle kesinlikle yüz yüze gelmeliyim' dedirten o belirleyici kıvılcım nedir?",
  "Tatlı bir zıtlaşmanın veya şakalaşmanın ardından gelen o samimi yakınlaşma sence de normal bir sohbetten çok daha heyecanlı değil mi?",
  "İki durum arasında kalsan: Karşı tarafın hafifçe sahiplenici tatlı bir kıskançlık tavrı takınması mı hoşuna gider, yoksa tamamen sınırsız bir rahatlık mı ararsın?",
  "Biriyle mesajlaşırken konuşmanın akışının aniden flörtöz ve sıcak bir havaya bürünmesi gün içindeki modunu nasıl etkiler?",
  "Karşı tarafın seninle konuşurken bilerek ses tonunu yumuşatması ve fısıldar gibi konuşması dikkatini ne kadar dağıtır?",
  "İki seçenek arasında kalsan hangisi senin için daha ideal bir ilk buluşma: Şık ve sakin bir mekanda baş başa oturmak mı, yoksa sokaklarda kahve içip yürüyerek sohbet etmek mi?",
  "Biriyle sohbet ederken saatin nasıl geçtiğini unutturan ve 'bu konuşma hiç bitmesin' dedirten o büyüleyici detay genelde ne olur?",
  "Sence iki insan arasındaki çekim ilk birkaç dakikada anlaşılır mı, yoksa zamanla mı ortaya çıkar?",
  "İki durum arasında kalsan hangisi daha çekici: Bir insanda hafif gizemli kalmak mı, yoksa tamamen açık sözlü ve net olmak mı?",
  "Yeni tanıştığın birinde ilk 5 dakikada en çok dikkat ettiğin detay nedir: Konuşma tarzı mı, bakışları mı, espri yeteneği mi?",
  "Bir ilişkide seni anında etkileyen en büyük 'green flag' ve anında soğutan 'red flag' hareket nedir?",
  "İki seçenek arasında kalsan: Ekran karşısında veya yüz yüze konuşurken gözlerin içine uzun süre cesurca bakabilmek mi, yoksa utanıp tatlı tatlı göz kaçırmak mı?",
  "Biriyle buluştuğunda aradaki elektrik yüksekse heyecanını gizleyebilir misin yoksa mimiklerinden anlaşılır mı?",
  "Daha önce birinin sırf ses tonuna veya konuşma tarzına kapıldığın oldu mu?",
  "İki durum arasında kalsan: Karşı tarafın sana tatlı tatlı takılarak esprili konuşması mı, yoksa ağırbaşlı ve ciddi bir duruş sergilemesi mi seni daha çok sarar?",
  "Sosyal medyadan başlayan bir tanışmanın gerçek hayatta çok iyi bir aşka dönüşeceğine inanır mısın?",
  "Biriyle mesajlaşırken konuşmanın akıcılığından onunla gerçek hayattaki uyumunu tahmin edebilir misin?",
  "İki seçenek arasında kalsan: Karşı tarafın senin zevklerine birebir uyum sağlaması mı, yoksa seni daha önce hiç bilmediğin yeni zevklerle tanıştırması mı?"
];

// 💬 DOĞRULUK & SIR (20 Soru - Her 3-4 Soruda Bir 2 Seçenekli)
const TRUTH_QUESTIONS = [
  "Üniversite veya gençlik hayatında yaşadığın, 'iyi ki yakalanmadım' dediğin en cesur veya çılgın kaçamağın neydi?",
  "Bir ortamda veya gecede anın etkisiyle yaptığın ve sabah uyandığında 'ben bunu nasıl yaptım' dediğin o hareket neydi?",
  "İki durum arasında kalsan hangisini seçerdin: Merak ettiğin birini fake hesaptan gizlice stalklamak mı, yoksa kendi orijinal hesabından açıkça hikayesine bakıp renk vermek mi?",
  "Birinden kaçmak veya bir randevuyu iptal etmek için uydurduğun en yaratıcı ve inandırıcı bahane neydi?",
  "Gece yarısı telefonuna gelen ve seni anında uyandıran o en beklenmedik mesaj neydi?",
  "İki seçenek arasında kalsan: Eski flörtlerinden birinin 'seni merak ediyorum' mesajına hiç cevap vermeyip merak içinde bırakmak mı, yoksa soğuk bir 'teşekkürler' yazıp konuyu kapatmak mı?",
  "Kendinde normalde dışarıya pek yansıtmadığın ama gerçekten güvendiğin biriyle konuşurken ortaya çıkan en samimi yönün nedir?",
  "Arkadaş ortamında herkesin 'asla yapmaz' dediği ama senin gizlice yaptığın o çılgınlık nedir?",
  "İki durum arasında kalsan: Gecenin bir saati uyku tutmadığında dertleşmek için güvendiğin o kişiyi hemen aramak mı, yoksa kimseyi rahatsız etmeyip düşüncelere dalmak mı?",
  "Hayatında sadece bir günlüğüne tüm sorumluluklardan uzaklaşıp en çok merak ettiğin biriyle vakit geçirebilecek olsan, nasıl bir gün hayal ederdin?",
  "Çevrendekilerin senin hakkında doğru sandığı ama aslında tamamen yanlış olan en büyük yanılgı nedir?",
  "İki seçenek arasında kalsan: Bir insanda asla affedemeyeceğin davranış: Yalan söylemesi mi, yoksa ilgisiz ve kaba davranması mı?",
  "Dışarıdan herkesin çok olgun bildiği ama içinde hala çocuk gibi davrandığın o saçma takıntın nedir?",
  "Hayatında 'keşke o an yer yarılsa da içine girseydim' dediğin en büyük aşk gafı neydi?",
  "İki durum arasında kalsan: Hayatında şu an en çok ihtiyaç duyduğun şey: Kariyer başarısı mı, yoksa gerçek bir aşk ve huzur motivasyonu mu?",
  "Kendinde en çok değiştirmek istediğin ve bazen seni yoran kişilik özelliğin nedir?",
  "Telefonunda 'biri bunu görürse yanlış anlar' dediğin kilitli bir not veya ekran görüntüsü var mı?",
  "Kendi kendine kaldığında yaptığın en tuhaf veya komik alışkanlığın nedir?",
  "İki seçenek arasında kalsan: Büyük bir sırrını sonsuza kadar mezara götürmek mi, yoksa gerçekten ruhunu açtığın o tek özel kişiye anlatıp rahatlamak mı?",
  "İçten içe çok yetenekli olduğunu düşündüğün ama kimseye göstermediğin gizli bir yönün var mı?"
];

// 🎓 KAMPÜS & KPSS (15 Soru - Her 3-4 Soruda Bir 2 Seçenekli)
const KPSS_QUESTIONS = [
  "Kütüphanede ders çalışırken masada biriyle bakışıp da 'şu an dersi bırakıp kahveye kaçsak ne güzel olur' dediğin oldu mu?",
  "KPSS'yi kazanıp atandığın o gün hayatında neyi kökten değiştireceksin ve bu büyük zaferi ilk kiminle kutlamak istersin?",
  "İki durum arasında kalsan hangisi dikkatini daha çok dağıtır: Ders çalışırken karşı tarafın saçını toplaması mı, yoksa aniden gözlerinin içine bakıp gülümsemesi mi?",
  "Kütüphanenin tenha bir köşesinde ders bahanesiyle başlayıp saatlerce tatlı bir sohbete daldığın oldu mu?",
  "Bugünkü KPSS çalışma seansımızdan sonra 'bunu kesinlikle hak ettik' diyeceğin o en tatlı mola ödülü nedir?",
  "İki seçenek arasında kalsan: KPSS'ye sabahın erken saatlerinde kütüphanede çalışmak mı, yoksa gece geç saatte Zoom'da karşılıklı soru çözmek mi daha verimli?",
  "Ders çalışırken yanındakinin parfümünün kokusu dikkatini konulardan daha çok dağıtsa ne yaparsın?",
  "Atandığında alacağın ilk maaşla kendine ve hayatındaki en özel kişiye yapacağın o ilk tatil planı ne olurdu?",
  "İki durum arasında kalsan: Atandıktan sonra kendi memleketinde kalıp konforlu yaşamak mı, yoksa yeni bir sahil kasabasında bağımsız bir hayata başlamak mı?",
  "Gece geç saatte ders çalışırken aniden gelen o tatlı sohbet isteği ve flört enerjisine kaç kez teslim oldun?",
  "KPSS çalışırken odaklanmanı en çok bozan, aniden aklına düşen o tatlı merak duygusu genelde neyle ilgili olur?",
  "İki seçenek arasında kalsan: Bugünkü çalışma seansımızdan sonra birbirimize ısmarlayacağımız kahve; sakin bir üçüncü nesil kahvecide mi içilmeli, yoksa deniz kenarında mı?",
  "Atama haberini aldığın ilk an kimi arayacaksın ve ağzından çıkacak ilk cümle ne olacak?",
  "Kütüphanede veya kafede yan masadaki birinin çalışma tarzına ve aurasına bakıp etkilendiğin oldu mu?",
  "İki durum arasında kalsan: Ders çalışırken arkaya hafif kısık sesli akustik müzik açmak mı, yoksa tamamen sessiz ve loş bir ortam mı?"
];

// ⚡ CESUR VARSAYIM & CESARET (Görünmezlik, Utanç İtirafları, Hızlı Varsayımlar)
const DARE_TASKS = [
  { text: "Düşünmeden 5 saniyede cevapla: Tam 24 saatliğine tamamen görünmez olsan, kimseye yakalanmadan yapacağın ilk 3 çılgınca şey ne olurdu?", desc: "Görünmezlik Varsayımı" },
  { text: "Hayatında en çok utandığın ama şu an hatırladıkça kahkaha attığın o anı hiç sansürlemeden ve cesurca anlat!", desc: "Sansürsüz Utanç İtirafı" },
  { text: "Bugüne kadar yaşadığın en garip, en absürt veya beklenmedik tanışma hikayesini dürüstçe paylaş!", desc: "En Garip Tanışma Hikayesi" },
  { text: "Varsayalım ki yarın sabah uyandığımızda dünyadaki herkes yok olmuş ve sadece ikimiz kalmışız; ilk gün ne yapardık?", desc: "Dünyada İkimiz Varsayımı" },
  { text: "Düşünmeden hızlıca cevapla: Hayatında bir kişiye karşı 'keşke o an cesaret edip hislerimi açıkça söyleseydim' dediğin o kişi kimdi?", desc: "Kaçırılan Cesaret İtirafı" },
  { text: "Eğer şu an karşındaki kişinin aklından geçen tek bir düşünceyi duyma hakkın olsaydı, hangi konu hakkındaki düşüncesini duymak isterdin?", desc: "Zihin Okuma Varsayımı" },
  { text: "Düşünmeden söyle: Bir günlüğüne karşı cins olarak uyansaydın, yapacağın ilk şey ne olurdu?", desc: "Cinsiyet Değişimi Varsayımı" },
  { text: "Varsayalım ki bir adada mahsur kaldık ve yanımıza sadece 3 ortak eşya alma hakkımız var; hangi 3 şeyi seçerdin?", desc: "Ada Senaryosu Varsayımı" },
  { text: "Düşünmeden 5 saniyede cesurca söyle: Karşı tarafın şu an sende bıraktığı en belirgin ilk 3 izlenim nedir?", desc: "3 Hızlı İzlenim" },
  { text: "Hayatında 'asla kimseye anlatamam' deyip sonradan birine anlattığın o en cesur sırrın ne hakkındaydı?", desc: "Kırılan Tabu Sırrı" },
  { text: "Varsayalım ki hayatının geri kalanında sadece tek bir insanla konuşabileceksin; o insanın ruh hali ve mizacı nasıl olmalı?", desc: "Tek İnsan Varsayımı" },
  { text: "Düşünmeden cevapla: Karşı tarafa şu an gözlerinin içine bakarak cesur ve samimi bir iltifatta bulun!", desc: "Göz Teması ve İltifat" },
  { text: "Eğer bir yalan makinesine bağlansaydın ve karşı taraf sana tek bir soru sorma hakkına sahip olsaydı, hangi konudan sorulmasından en çok çekinirdin?", desc: "Yalan Makinesi Korkusu" },
  { text: "Bugüne kadar bir randevuda veya buluşmada yaptığın en büyük gaf veya sakarlık neydi? Dürüstçe anlat!", desc: "Buluşma Gafı İtirafı" },
  { text: "Varsayalım ki bu akşam KPSS çalışmayı tamamen bırakıp spontane bir gece yolculuğuna çıkma hakkımız var; rotayı nereye çevirirdik?", desc: "Gece Kaçamağı Rotası" },
  { text: "Düşünmeden 5 saniyede söyle: Dışarıdan çok cool durup da aslında içten içe çocuk gibi davrandığın en saçma huyun nedir?", desc: "Gizli Çocukluk Huyu" },
  { text: "Eğer hayatın bir film olsaydı ve şu anki tanışmamız o filmin bir sahnesi olsaydı, arka planda hangi şarkı çalıyor olurdu?", desc: "Film Sahnesi Müziği" },
  { text: "Karşı tarafa bakarak 10 saniye boyunca hiç gülmeden ve gözlerini kaçırmadan bekle; cesaretini göster!", desc: "10 Sn Bakışma Düellosu" },
  { text: "Düşünmeden söyle: Bir insan seni sadece 3 kelimeyle anlatacak olsa, hangi 3 kelimeyi seçmesini isterdin?", desc: "3 Kelimede Kendin" },
  { text: "Varsayalım ki karşı tarafla birlikte 1 saatliğine bir alışveriş merkezinde kilitli kaldınız ve tüm dükkanlar emrinizde; ilk nereye koşardınız?", desc: "Gece Kilitli Kalma Varsayımı" }
];

// 🎁 3 GİZEMLİ KUTU SÜRPRİZLERİ
const MYSTERY_POOL = [
  { type: "score", text: "⭐ ÇİFTE BONUS! Çark sana kıyak geçti: Anında +20 Bonus Puan kazandın!", title: "Şanslı Altın Kutu" },
  { type: "dare", text: "🔮 CESUR VARSAYIM: Eğer şu an 1 saatliğine görünmez olsaydın yapacağın ilk şeyi düşünmeden fısılda!", title: "Görünmezlik Kutusu" },
  { type: "question", text: "💬 İKİLEM KUTUSU: Karşı tarafta ilk gördüğünde seni en çok ne etkiledi: Gözleri ve bakışları mı, yoksa enerjisi ve ses tonu mu?", title: "Merak Kutusu" },
  { type: "score", text: "⭐ SÜPER BONUS! Mola hediyesi olarak hanene +15 Bonus Puan eklendi!", title: "Altın Kutu" },
  { type: "dare", text: "🎙️ FISILTI GÖREVİ: Mikrofona doğru en kısık ve tatlı ses tonunla 'İyi ki bu molayı birlikte veriyoruz' de!", title: "Fısıltı Sürprizi" }
];

/* ==========================================================================
   2. SES SİNTESİ (WEB AUDIO API)
   ========================================================================== */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playTick(freq = 420) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {}
  }
  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [392, 523.25, 659.25, 783.99];
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.12, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.35);
      });
    } catch (e) {}
  }
  playHeartbeat() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(75, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (e) {}
  }
}
const audio = new SoundEngine();

/* ==========================================================================
   3. ÇARK DİLİMLERİ & ÇİZİMİ (TABU & SIR Kategorisi ile)
   ========================================================================== */
const WHEEL_SEGMENTS = [
  { type: 'taboo', label: 'TABU & SIR', icon: '🎭', color: '#6d28d9', textColor: '#ffffff' },
  { type: 'flirt', label: 'İLİŞKİ', icon: '✨', color: '#be123c', textColor: '#ffffff' },
  { type: 'truth', label: 'DOĞRULUK & SIR', icon: '💬', color: '#1d4ed8', textColor: '#ffffff' },
  { type: 'dare', label: 'MEYDAN OKUMA', icon: '⚡', color: '#b45309', textColor: '#ffffff' },
  { type: 'kpss', label: 'KAMPÜS & KPSS', icon: '🎓', color: '#047857', textColor: '#ffffff' },
  { type: 'taboo', label: 'TABU & SIR', icon: '🎭', color: '#7c3aed', textColor: '#ffffff' },
  { type: 'mystery', label: '3 GİZEMLİ KUTU', icon: '🎁', color: '#be185d', textColor: '#ffffff' },
  { type: 'dare', label: 'CESUR VARSAYIM', icon: '⚡', color: '#d97706', textColor: '#ffffff' }
];

const canvas = document.getElementById('wheel-canvas');
const ctx = canvas.getContext('2d');
let currentAngle = 0;
let isSpinning = false;
let lastTickSegment = -1;

function setupCanvasDPI() {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const size = Math.min(rect.width, rect.height) || 400;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  ctx.scale(dpr, dpr);
}

function drawWheel() {
  const dpr = window.devicePixelRatio || 1;
  const size = canvas.width / dpr;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2 - 12;
  const numSegments = WHEEL_SEGMENTS.length;
  const arcSize = (2 * Math.PI) / numSegments;

  ctx.clearRect(0, 0, size, size);

  // Dış Altın Çember
  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius + 5, 0, 2 * Math.PI);
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 5;
  ctx.shadowColor = 'rgba(245, 158, 11, 0.5)';
  ctx.shadowBlur = 12;
  ctx.stroke();
  ctx.restore();

  // Dilimler
  for (let i = 0; i < numSegments; i++) {
    const seg = WHEEL_SEGMENTS[i];
    const angleStart = currentAngle + i * arcSize;
    const angleEnd = angleStart + arcSize;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, angleStart, angleEnd);
    ctx.closePath();
    ctx.fillStyle = seg.color;
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Metin ve İkon
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angleStart + arcSize / 2);

    ctx.font = '20px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(seg.icon, radius - 20, 6);

    ctx.font = 'bold 12px Outfit, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillStyle = seg.textColor;
    ctx.fillText(seg.label, radius - 48, 5);

    ctx.restore();
    ctx.restore();
  }

  // Kenar Işıkları
  const dotCount = numSegments * 2;
  for (let i = 0; i < dotCount; i++) {
    const dotAngle = currentAngle + (i * (2 * Math.PI / dotCount));
    const dotX = centerX + (radius + 1) * Math.cos(dotAngle);
    const dotY = centerY + (radius + 1) * Math.sin(dotAngle);

    ctx.save();
    ctx.beginPath();
    ctx.arc(dotX, dotY, 2.5, 0, 2 * Math.PI);
    ctx.fillStyle = i % 2 === 0 ? '#ffffff' : '#f59e0b';
    ctx.fill();
    ctx.restore();
  }
}

function checkPointerTick() {
  const numSegments = WHEEL_SEGMENTS.length;
  const arcSize = (2 * Math.PI) / numSegments;
  const pointerAngle = (3 * Math.PI / 2 - currentAngle) % (2 * Math.PI);
  const normalized = (pointerAngle + 2 * Math.PI) % (2 * Math.PI);
  const currentSegment = Math.floor(normalized / arcSize);

  if (currentSegment !== lastTickSegment) {
    lastTickSegment = currentSegment;
    audio.playTick(400 + Math.random() * 60);
    const pointer = document.getElementById('wheel-pointer');
    if (pointer) {
      pointer.style.transform = `scale(1.15) rotate(${Math.random() > 0.5 ? 6 : -6}deg)`;
      setTimeout(() => { pointer.style.transform = 'scale(1) rotate(0deg)'; }, 70);
    }
  }
}

function spinWheel() {
  if (isSpinning) return;
  audio.init();
  isSpinning = true;
  document.getElementById('main-spin-btn').disabled = true;

  const targetIndex = Math.floor(Math.random() * WHEEL_SEGMENTS.length);
  const numSegments = WHEEL_SEGMENTS.length;
  const arcSize = (2 * Math.PI) / numSegments;

  const targetCenter = (targetIndex + 0.5) * arcSize;
  const desiredFinalMod = ((3 * Math.PI / 2 - targetCenter) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
  const currentMod = ((currentAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

  let angleDiff = desiredFinalMod - currentMod;
  if (angleDiff < 0) angleDiff += 2 * Math.PI;

  const extraRotations = (5 + Math.floor(Math.random() * 2)) * (2 * Math.PI);
  const totalAngle = currentAngle + extraRotations + angleDiff;

  const startAngle = currentAngle;
  const delta = totalAngle - startAngle;
  const duration = 3400;
  const startTime = performance.now();

  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(1, elapsed / duration);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    currentAngle = startAngle + delta * easeOut;

    checkPointerTick();
    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      currentAngle = totalAngle;
      checkPointerTick();
      drawWheel();
      isSpinning = false;
      document.getElementById('main-spin-btn').disabled = false;
      onSpinFinished(targetIndex);
    }
  }
  requestAnimationFrame(animate);
}

/* ==========================================================================
   4. OYUN DURUMU & OYUNCULAR (1. Sude Hanım, 2. Sabri Bey)
   ========================================================================== */
const PLAYERS = [
  { name: "Sude Hanım", score: 0, pass: 0 },
  { name: "Sabri Bey", score: 0, pass: 0 }
];
let activePlayerIndex = 0; // 0: Sude Hanım (Başlangıçta Sude Hanım sırada!), 1: Sabri Bey
let gameHistory = [];

function updateArenaUI() {
  document.getElementById('p1-score').textContent = PLAYERS[0].score;
  const p1PassEl = document.getElementById('p1-pass') || document.getElementById('p1-coffee');
  if (p1PassEl) p1PassEl.textContent = PLAYERS[0].pass || 0;

  document.getElementById('p2-score').textContent = PLAYERS[1].score;
  const p2PassEl = document.getElementById('p2-pass') || document.getElementById('p2-coffee');
  if (p2PassEl) p2PassEl.textContent = PLAYERS[1].pass || 0;

  const p1Card = document.getElementById('p1-card');
  const p2Card = document.getElementById('p2-card');
  const p1Turn = document.getElementById('p1-turn');
  const p2Turn = document.getElementById('p2-turn');

  if (activePlayerIndex === 0) {
    p1Card.classList.add('active-turn');
    p2Card.classList.remove('active-turn');
    p1Turn.classList.remove('hidden');
    p2Turn.classList.add('hidden');
  } else {
    p2Card.classList.add('active-turn');
    p1Card.classList.remove('active-turn');
    p2Turn.classList.remove('hidden');
    p1Turn.classList.add('hidden');
  }
  saveLocalState();
}

function switchTurn() {
  activePlayerIndex = 1 - activePlayerIndex;
  updateArenaUI();
}

function showToast(msg) {
  let toast = document.getElementById('game-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'game-toast';
    toast.className = 'game-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ==========================================================================
   5. ÇARK SONUCU İŞLEME & MODALLAR
   ========================================================================== */
let cardTimerSeconds = 30;
let cardInterval = null;
let currentActiveCard = null;

function onSpinFinished(index) {
  const seg = WHEEL_SEGMENTS[index];
  const activeP = PLAYERS[activePlayerIndex];

  audio.playSuccess();
  triggerConfetti();

  if (seg.type === 'taboo') {
    openCardModal('🎭 TABU & SIR', 'badge-taboo', getRandomItem(TABOO_QUESTIONS), "Mikrofona sesli şekilde karşı tarafa en dürüst cevabını ver!");
  } else if (seg.type === 'flirt') {
    openCardModal('✨ İLİŞKİ & UYUM', 'badge-flirt', getRandomItem(ILISKI_QUESTIONS), "Gözlerinin içine bakarak samimiyetle cevapla!");
  } else if (seg.type === 'truth') {
    openCardModal('💬 DOĞRULUK & SIR', 'badge-truth', getRandomItem(TRUTH_QUESTIONS), "Hiç çekinmeden en dürüst cevabını ver!");
  } else if (seg.type === 'kpss') {
    openCardModal('🎓 KAMPÜS & KPSS', 'badge-kpss', getRandomItem(KPSS_QUESTIONS), "Ders yorgunluğunu unut ve samimiyetle açıkla!");
  } else if (seg.type === 'dare') {
    const dare = getRandomItem(DARE_TASKS);
    openCardModal('⚡ CESUR VARSAYIM', 'badge-dare', dare.text, dare.desc);
  } else if (seg.type === 'mystery') {
    openMysteryModal();
  }
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* KART (SORU / İTİRAF / TABU) MODALI - SCREENSHOT 4 BİREBİR TASARIM */
let isCardTimerRunning = false;

function openCardModal(badgeText, badgeClass, questionText, missionText) {
  currentActiveCard = { type: 'card', badgeText, questionText };

  const badgeEl = document.getElementById('card-category-badge');
  badgeEl.className = 'category-badge-pill ' + badgeClass;
  badgeEl.textContent = badgeText;

  const activeP = PLAYERS[activePlayerIndex];
  const icon = activePlayerIndex === 0 ? '👱‍♀️' : '🧑';

  let roleTitle = `${activeP.name} İçin Soru:`;
  if (badgeClass.includes('kpss')) roleTitle = `${activeP.name} İçin Kampüs & KPSS Sorusu:`;
  else if (badgeClass.includes('flirt')) roleTitle = `${activeP.name} İçin İlişki & Uyum Sorusu:`;
  else if (badgeClass.includes('truth')) roleTitle = `${activeP.name} İçin Doğruluk & Sır Sorusu:`;
  else if (badgeClass.includes('taboo')) roleTitle = `${activeP.name} İçin Tabu & Sır Sorusu:`;
  else if (badgeClass.includes('dare')) roleTitle = `${activeP.name} İçin Cesaret Görevi:`;

  const playerIconEl = document.getElementById('card-player-icon');
  const playerTitleEl = document.getElementById('card-player-title');
  if (playerIconEl) playerIconEl.textContent = icon;
  if (playerTitleEl) playerTitleEl.textContent = roleTitle;

  document.getElementById('card-question-text').textContent = `“${questionText}”`;
  const missionTextEl = document.getElementById('card-mission-text');
  if (missionTextEl) missionTextEl.textContent = missionText || "Mikrofona sesli şekilde karşı tarafa en dürüst cevabını ver!";

  resetCardTimer();
  startCardTimer();
  document.getElementById('card-modal').classList.remove('hidden');
}

function startCardTimer() {
  clearInterval(cardInterval);
  isCardTimerRunning = true;
  const startBtn = document.getElementById('card-timer-start-btn');
  if (startBtn) startBtn.textContent = 'Durdur';

  cardInterval = setInterval(() => {
    if (cardTimerSeconds > 0) {
      cardTimerSeconds--;
      document.getElementById('card-timer').textContent = cardTimerSeconds;
      if (cardTimerSeconds <= 5) audio.playHeartbeat();
    } else {
      clearInterval(cardInterval);
      isCardTimerRunning = false;
      if (startBtn) startBtn.textContent = 'Başlat';
      showToast("⏳ Süre Doldu!");
    }
  }, 1000);
}

function pauseCardTimer() {
  clearInterval(cardInterval);
  isCardTimerRunning = false;
  const startBtn = document.getElementById('card-timer-start-btn');
  if (startBtn) startBtn.textContent = 'Başlat';
}

function resetCardTimer() {
  clearInterval(cardInterval);
  isCardTimerRunning = false;
  cardTimerSeconds = 30;
  document.getElementById('card-timer').textContent = '30';
  const startBtn = document.getElementById('card-timer-start-btn');
  if (startBtn) startBtn.textContent = 'Başlat';
}

/* 3 GİZEMLİ KUTU */
function openMysteryModal() {
  document.getElementById('mystery-speaker').textContent = PLAYERS[activePlayerIndex].name;
  for (let i = 0; i < 3; i++) {
    const box = document.getElementById(`mbox-${i}`);
    box.classList.remove('shake');
  }
  document.getElementById('mystery-modal').classList.remove('hidden');
}

function selectMysteryBox(boxIndex) {
  const boxEl = document.getElementById(`mbox-${boxIndex}`);
  boxEl.classList.add('shake');
  audio.playHeartbeat();

  setTimeout(() => {
    document.getElementById('mystery-modal').classList.add('hidden');
    const surprise = getRandomItem(MYSTERY_POOL);
    openCoffeeModal(`🎁 ${surprise.title}`, surprise.text);
  }, 700);
}

/* KAHVE VE BİLDİRİM MODALI */
function openCoffeeModal(title, desc) {
  document.getElementById('penalty-title').textContent = title;
  document.getElementById('penalty-desc').textContent = desc;
  document.getElementById('penalty-modal').classList.remove('hidden');
}

/* EYLEM HANDLERLARI */
// Soru / Tabu: Cevapladı (+10)
document.getElementById('card-success-btn').addEventListener('click', () => {
  audio.playSuccess();
  triggerConfetti();
  PLAYERS[activePlayerIndex].score += 10;
  logHistory(PLAYERS[activePlayerIndex].name, currentActiveCard?.badgeText, currentActiveCard?.questionText, "✅ Cevapladı (+10 Puan)");
  clearInterval(cardInterval);
  document.getElementById('card-modal').classList.add('hidden');
  switchTurn();
});

// Soru / Tabu: Pas Geçti (Sıra Geçer)
document.getElementById('card-pass-btn').addEventListener('click', () => {
  PLAYERS[activePlayerIndex].pass = (PLAYERS[activePlayerIndex].pass || 0) + 1;
  logHistory(PLAYERS[activePlayerIndex].name, currentActiveCard?.badgeText, currentActiveCard?.questionText, "⏭️ Pas Geçti");
  clearInterval(cardInterval);
  document.getElementById('card-modal').classList.add('hidden');
  showToast(`⏭️ ${PLAYERS[activePlayerIndex].name} soruyu pas geçti. Sıra devredildi!`);
  switchTurn();
});

// Kahve Tamam Butonu
document.getElementById('penalty-ok-btn').addEventListener('click', () => {
  document.getElementById('penalty-modal').classList.add('hidden');
  switchTurn();
});

// Kutu Tıklamaları
for (let i = 0; i < 3; i++) {
  document.getElementById(`mbox-${i}`).addEventListener('click', () => selectMysteryBox(i));
}

// Sayaç Butonları (Başlat/Durdur ve Sıfırla)
const cardTimerStartBtn = document.getElementById('card-timer-start-btn');
if (cardTimerStartBtn) {
  cardTimerStartBtn.addEventListener('click', () => {
    if (isCardTimerRunning) pauseCardTimer();
    else startCardTimer();
  });
}

const cardTimerResetBtn = document.getElementById('card-timer-reset-btn');
if (cardTimerResetBtn) {
  cardTimerResetBtn.addEventListener('click', resetCardTimer);
}

// Modal Kapat Butonları
document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-close');
    document.getElementById(id).classList.add('hidden');
    clearInterval(cardInterval);
  });
});

/* ==========================================================================
   6. 1 SAAT KPSS DERS & 15 DAKİKA MOLA SAYAÇ MOTORU (POMODORO)
   ========================================================================== */
let pomoMode = 'study'; // 'study' (60 dk) veya 'break' (15 dk)
let pomoSecondsRemaining = 60 * 60; // 60 dakika = 3600 sn
let pomoInterval = null;
let isPomoRunning = false;

const pomoMinutesEl = document.getElementById('pomo-minutes');
const pomoSecondsEl = document.getElementById('pomo-seconds');
const pomoStartBtn = document.getElementById('pomo-start-btn');
const pomoSwitchBtn = document.getElementById('pomo-switch-btn');
const pomoDisplayEl = document.getElementById('pomo-timer-display');
const pomoStatusTitle = document.getElementById('pomo-status-title');
const pomoBadge = document.getElementById('pomo-badge');
const pomoSubText = document.getElementById('pomo-sub-text');
const pomoIcon = document.getElementById('pomo-icon');

function updatePomoDisplay() {
  const mins = Math.floor(pomoSecondsRemaining / 60);
  const secs = pomoSecondsRemaining % 60;
  pomoMinutesEl.textContent = mins < 10 ? '0' + mins : mins;
  pomoSecondsEl.textContent = secs < 10 ? '0' + secs : secs;
}

function togglePomo() {
  audio.init();
  if (isPomoRunning) {
    clearInterval(pomoInterval);
    isPomoRunning = false;
    pomoStartBtn.textContent = 'Devam Et';
  } else {
    isPomoRunning = true;
    pomoStartBtn.textContent = 'Durdur';
    pomoInterval = setInterval(() => {
      if (pomoSecondsRemaining > 0) {
        pomoSecondsRemaining--;
        updatePomoDisplay();
      } else {
        clearInterval(pomoInterval);
        isPomoRunning = false;
        onPomoCompleted();
      }
    }, 1000);
  }
}

function onPomoCompleted() {
  audio.playSuccess();
  triggerConfetti();
  if (pomoMode === 'study') {
    showToast("🎉 1 SAAT KPSS ÇALIŞMASI BİTTİ! 15 DK ÇARK MOLASI BAŞLADI! ☕");
    setBreakMode();
  } else {
    showToast("⏰ Mola Bitti! Şimdi 1 Saatlik KPSS Odak Vakti!");
    setStudyMode();
  }
}

function setStudyMode() {
  pomoMode = 'study';
  pomoSecondsRemaining = 60 * 60;
  updatePomoDisplay();
  pomoDisplayEl.classList.remove('break-active');
  pomoStatusTitle.textContent = "KPSS ODAK MODU";
  pomoBadge.className = "pomo-badge badge-study";
  pomoBadge.textContent = "1 SAAT";
  pomoSubText.textContent = "Süre bitince otomatik 15 dk çark molası başlar!";
  pomoIcon.textContent = "📚";
  pomoSwitchBtn.textContent = "Molaya Geç (15 Dk)";
  if (isPomoRunning) {
    clearInterval(pomoInterval);
    isPomoRunning = false;
    pomoStartBtn.textContent = 'Başlat';
  }
}

function setBreakMode() {
  pomoMode = 'break';
  pomoSecondsRemaining = 15 * 60; // 15 dakika = 900 sn!
  updatePomoDisplay();
  pomoDisplayEl.classList.add('break-active');
  pomoStatusTitle.textContent = "ÇARK & KAHVE MOLASI";
  pomoBadge.className = "pomo-badge badge-break";
  pomoBadge.textContent = "15 DAKİKA";
  pomoSubText.textContent = "Çarkı çevirin, soruları cevaplayın ve sohbet edin!";
  pomoIcon.textContent = "☕";
  pomoSwitchBtn.textContent = "Derse Dön (1 Saat)";
  if (!isPomoRunning) {
    togglePomo();
  }
}

pomoStartBtn.addEventListener('click', togglePomo);
pomoSwitchBtn.addEventListener('click', () => {
  if (pomoMode === 'study') setBreakMode();
  else setStudyMode();
});

/* ==========================================================================
   7. GEÇMİŞ & LOCALSTORAGE YÖNETİMİ
   ========================================================================== */
function logHistory(player, category, text, result) {
  gameHistory.unshift({
    player,
    category: category || "Mola",
    text: text || "",
    result,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });
  renderHistory();
  saveLocalState();
}

function renderHistory() {
  const listEl = document.getElementById('history-list');
  if (gameHistory.length === 0) {
    listEl.innerHTML = '<div style="text-align:center; color:var(--text-muted); padding:20px;">Henüz kart oynanmadı. Çarkı çevirerek başlayın!</div>';
    return;
  }
  listEl.innerHTML = gameHistory.slice(0, 30).map(h => `
    <div class="history-item">
      <div class="history-top">
        <span>${h.player} • ${h.category}</span>
        <span>${h.result} • ${h.time}</span>
      </div>
      <div class="history-text">“${h.text}”</div>
    </div>
  `).join('');
}

/* ==========================================================================
   7.5 MİSAFİR OYUNCU İSİM YÖNETİMİ ("... Hanım" Otomasyonu)
   ========================================================================== */
function formatLadyName(input) {
  if (!input) return "Misafir Hanım";
  let trimmed = input.trim();
  if (!trimmed) return "Misafir Hanım";
  
  // Eğer sonuna zaten Hanım veya hanım yazılmışsa temizle
  trimmed = trimmed.replace(/\s+han[ıi]m$/i, '').trim();
  if (!trimmed) return "Misafir Hanım";
  
  // İlk harfleri büyük yap
  trimmed = trimmed.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
  return `${trimmed} Hanım`;
}

function openGuestNameModal() {
  const modal = document.getElementById('guest-name-modal');
  const input = document.getElementById('guest-name-input');
  if (modal && input) {
    const current = (PLAYERS[0].name || "").replace(/\s+han[ıi]m$/i, '').trim();
    input.value = (current && current !== "Misafir" && current !== "Sude") ? current : "";
    modal.classList.remove('hidden');
    setTimeout(() => input.focus(), 150);
  }
}

function closeGuestNameModal() {
  const modal = document.getElementById('guest-name-modal');
  if (modal) modal.classList.add('hidden');
}

function saveGuestName(inputVal) {
  const formatted = formatLadyName(inputVal);
  PLAYERS[0].name = formatted;
  document.getElementById('p1-name').textContent = formatted;
  try {
    localStorage.setItem('mola_custom_guest_name', formatted);
  } catch (e) {}
  saveLocalState();
  closeGuestNameModal();
  showToast(`🌸 1. Oyuncu: ${formatted} olarak ayarlandı!`);
}

function saveLocalState() {
  try {
    const state = {
      players: PLAYERS,
      activePlayerIndex,
      history: gameHistory.slice(0, 30)
    };
    localStorage.setItem('kpss_cark_v6_sude_sabri', JSON.stringify(state));
  } catch (e) {}
}

function loadLocalState() {
  try {
    const raw = localStorage.getItem('kpss_cark_v6_sude_sabri');
    if (raw) {
      const data = JSON.parse(raw);
      if (data.players && data.players.length === 2) {
        PLAYERS[0].name = data.players[0].name || "Sude Hanım";
        PLAYERS[0].score = data.players[0].score || 0;
        PLAYERS[0].pass = data.players[0].pass || 0;
        PLAYERS[1].name = data.players[1].name || "Sabri Bey";
        PLAYERS[1].score = data.players[1].score || 0;
        PLAYERS[1].pass = data.players[1].pass || 0;
        document.getElementById('p1-name').textContent = PLAYERS[0].name;
        document.getElementById('p2-name').textContent = PLAYERS[1].name;
      }
      if (typeof data.activePlayerIndex === 'number') activePlayerIndex = data.activePlayerIndex;
      if (Array.isArray(data.history)) {
        gameHistory = data.history;
        renderHistory();
      }
    }

    // Ortak misafir ismi kontrolü
    const savedGuest = localStorage.getItem('mola_custom_guest_name');
    if (savedGuest) {
      PLAYERS[0].name = savedGuest;
      document.getElementById('p1-name').textContent = savedGuest;
    } else {
      // Başta misafirin ismini sor!
      setTimeout(openGuestNameModal, 450);
    }
  } catch (e) {}
}

/* ==========================================================================
   8. KONFETİ VE ARKA PLAN CANVASI
   ========================================================================== */
const confettiCanvas = document.getElementById('confetti-canvas');
const confCtx = confettiCanvas.getContext('2d');
let confettiList = [];

function triggerConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  confettiList = [];
  const colors = ['#f43f5e', '#fb7185', '#f59e0b', '#a855f7', '#10b981', '#ffffff'];
  for (let i = 0; i < 80; i++) {
    confettiList.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 15,
      vy: (Math.random() - 0.5) * 15 - 3,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.02 + 0.015,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    });
  }
}

function updateConfetti() {
  if (confettiList.length === 0) return;
  confCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  for (let i = confettiList.length - 1; i >= 0; i--) {
    const p = confettiList[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.28;
    p.alpha -= p.decay;
    p.rotation += p.rotSpeed;
    if (p.alpha <= 0) {
      confettiList.splice(i, 1);
      continue;
    }
    confCtx.save();
    confCtx.globalAlpha = p.alpha;
    confCtx.translate(p.x, p.y);
    confCtx.rotate((p.rotation * Math.PI) / 180);
    confCtx.fillStyle = p.color;
    confCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    confCtx.restore();
  }
}

const bgCanvas = document.getElementById('bg-canvas');
const bgCtx = bgCanvas.getContext('2d');
let bgParticles = [];

function initBgParticles() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
  bgParticles = [];
  for (let i = 0; i < 40; i++) {
    bgParticles.push({
      x: Math.random() * bgCanvas.width,
      y: Math.random() * bgCanvas.height,
      r: Math.random() * 1.5 + 0.6,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.008
    });
  }
}

function drawBgParticles() {
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  bgParticles.forEach(p => {
    p.alpha += p.speed;
    if (p.alpha > 1 || p.alpha < 0.2) p.speed = -p.speed;
    bgCtx.save();
    bgCtx.beginPath();
    bgCtx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
    bgCtx.fillStyle = `rgba(251, 113, 133, ${Math.abs(p.alpha)})`;
    bgCtx.shadowColor = '#f43f5e';
    bgCtx.shadowBlur = 8;
    bgCtx.fill();
    bgCtx.restore();
  });
}

function mainAnimationLoop() {
  updateConfetti();
  drawBgParticles();
  requestAnimationFrame(mainAnimationLoop);
}

/* ==========================================================================
   9. BAŞLATMA VE OLAY DİNLEYİCİLERİ
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  setupCanvasDPI();
  initBgParticles();
  loadLocalState();
  updateArenaUI();
  drawWheel();
  requestAnimationFrame(mainAnimationLoop);

  window.addEventListener('resize', () => {
    setupCanvasDPI();
    initBgParticles();
    drawWheel();
  });

  // Çark Çevirme
  document.getElementById('main-spin-btn').addEventListener('click', spinWheel);
  document.getElementById('center-spin-btn').addEventListener('click', spinWheel);

  // Sıra Değiştir
  document.getElementById('switch-turn-btn').addEventListener('click', switchTurn);

  // Misafir İsim Güncelleme Modalı Olayları
  const p1El = document.getElementById('p1-name');
  if (p1El) p1El.addEventListener('click', openGuestNameModal);

  const editP1Btn = document.getElementById('edit-p1-btn');
  if (editP1Btn) editP1Btn.addEventListener('click', openGuestNameModal);

  const guestSubmitBtn = document.getElementById('guest-name-submit-btn');
  if (guestSubmitBtn) {
    guestSubmitBtn.addEventListener('click', () => {
      const input = document.getElementById('guest-name-input');
      saveGuestName(input ? input.value : "");
    });
  }

  const guestInput = document.getElementById('guest-name-input');
  if (guestInput) {
    guestInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        saveGuestName(guestInput.value);
      }
    });
  }

  const p2El = document.getElementById('p2-name');
  if (p2El) {
    p2El.addEventListener('blur', () => {
      PLAYERS[1].name = p2El.textContent.trim() || "Sabri Bey";
      saveLocalState();
    });
  }

  // Üst Araçlar
  const soundBtn = document.getElementById('sound-btn');
  soundBtn.addEventListener('click', () => {
    audio.enabled = !audio.enabled;
    soundBtn.innerHTML = audio.enabled ? '<span>🔊</span>' : '<span>🔇</span>';
  });

  document.getElementById('fullscreen-btn').addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  document.getElementById('history-btn').addEventListener('click', () => {
    renderHistory();
    document.getElementById('history-modal').classList.remove('hidden');
  });

  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm("Puanlar, kahve borçları ve oyun geçmişi sıfırlansın mı?")) {
      PLAYERS[0].score = 0;
      PLAYERS[0].coffee = 0;
      PLAYERS[1].score = 0;
      PLAYERS[1].coffee = 0;
      activePlayerIndex = 0;
      gameHistory = [];
      localStorage.removeItem('kpss_cark_v6_sude_sabri');
      updateArenaUI();
      renderHistory();
      showToast("Oyun sıfırlandı!");
    }
  });
});
