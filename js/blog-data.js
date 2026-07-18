/* ==========================================================================
   Şaşkın Soft | Blog Veri Yönetim Merkezi (blog-data.js)
   Admin Paneli ve Blog Sayfaları için Ortak Veri Deposu ve İşleyicisi
   ========================================================================== */

const DEFAULT_BLOG_POSTS = [
    {
        id: "qr-nfc-revolution",
        title: "Restoran ve Kafelerde Kağıt Menü Devri Bitti: QR ve NFC Temassız Menü ile Satışları %35 Artırmanın Sırları",
        category: "🍽️ Restoran Teknolojileri",
        badge: "Öne Çıkan • Trend",
        date: "11 Temmuz 2026",
        readTime: "6 dk okuma",
        summary: "Garson bekleme süresini sıfırlayan, fiyat güncellemelerini saniyeler içinde matbaa masrafsız yapan ve iştah açıcı görsellerle sepet ortalamasını katlayan akıllı masa stantları nasıl çalışıyor?",
        image: "https://placehold.co/800x600/18181b/22c55e?text=QR+%26+NFC+Menu+Revolution",
        url: "blog-detay-qr-nfc.html",
        isFeatured: true,
        content: `
            <p class="text-lg leading-relaxed text-slate-700 mb-6 font-medium">Dijital dönüşüm artık sadece e-ticaret siteleri için değil, fiziksel restoran, kafe ve oteller için de bir hayatta kalma meselesi haline geldi. Geleneksel kağıt ve deri ciltli menüler yüksek baskı maliyetleri, yıpranma problemleri ve fiyat değişimlerinde yarattığı karmaşa nedeniyle hızla tarihe karışıyor.</p>
            
            <h2 class="text-2xl font-bold font-heading text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span class="w-2 h-6 bg-brand-500 rounded-full inline-block"></span> Neden QR ve NFC Temassız Akıllı Menü?
            </h2>
            <p class="text-slate-600 leading-relaxed mb-4">Müşteriler masaya oturdukları anda garson beklemek yerine masadaki şık stantta bulunan NFC çipine telefonlarını dokundurarak veya QR kodu okutarak saniyeler içinde yüksek çözünürlüklü dijital menüye ulaşıyorlar.</p>
            
            <div class="bg-slate-900 text-white p-6 rounded-2xl my-6 border border-slate-800 shadow-lg">
                <h3 class="text-brand-400 font-bold text-lg mb-2 flex items-center gap-2">
                    <i class="fa-solid fa-bolt"></i> Satışları %35 Artıran Psikolojik Tetikleyiciler
                </h3>
                <ul class="space-y-2 text-slate-300 text-sm list-disc list-inside">
                    <li><strong>İştah Açıcı Görseller:</strong> Sadece kuru bir yazı yerine dumanı üstünde taze çekilmiş yemek videoları ve fotoğrafları sunulur.</li>
                    <li><strong>Akıllı Çapraz Satış (Cross-selling):</strong> Hamburger seçildiğinde sistem otomatik olarak "Yanına çıtır patates veya buz gibi bir içecek ister misiniz?" önerisi çıkarır.</li>
                    <li><strong>Alerjen ve Kalori Filtreleri:</strong> Glütensiz, vegan veya düşük kalorili seçenekler tek tıkla filtrelenebilir.</li>
                </ul>
            </div>

            <h2 class="text-2xl font-bold font-heading text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span class="w-2 h-6 bg-brand-500 rounded-full inline-block"></span> Matbaa ve Güncelleme Masraflarına Son
            </h2>
            <p class="text-slate-600 leading-relaxed mb-6">Enflasyon veya maliyet değişiklikleri durumunda kağıt menüleri yeniden bastırmak binlerce liraya ve zaman kaybına yol açar. ŞaşkınSoft QR & NFC Akıllı Menü altyapısı sayesinde tek bir yönetim panelinden fiyatları güncellemek sadece 3 saniye sürer!</p>
        `
    },
    {
        id: "reels-tiktok-2026",
        title: "2026 Sosyal Medya Algoritması: TikTok ve Reels'ta Viral Olmanın 7 Altın Kuralı",
        category: "📱 Sosyal Medya",
        badge: "Viral Medya • Algoritma",
        date: "8 Temmuz 2026",
        readTime: "5 dk okuma",
        summary: "Dikkat süresinin 3 saniyeye düştüğü çağda ilk 2 saniye (Hook) kurgusu, ASMR ses tasarımı ve Z kuşağını yakalayan organik içerik stratejileri.",
        image: "https://placehold.co/600x400/18181b/a78bfa?text=Viral+Reels+%26+TikTok+2026",
        url: "blog-detay-reels-tiktok.html",
        isFeatured: false,
        content: `
            <p class="text-lg leading-relaxed text-slate-700 mb-6 font-medium">Sosyal medya algoritmaları 2026 yılında tamamen kullanıcı niyetine ve izleme tutma oranına (Watch Time Retention) göre optimize edildi. Takipçi sayınız kaç olursa olsun, doğru kurgulanmış bir video milyonlarca organik izlenmeye ulaşabilir.</p>
            
            <h2 class="text-2xl font-bold font-heading text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span class="w-2 h-6 bg-brand-500 rounded-full inline-block"></span> 1. İlk 2 Saniye Kuralı (The Hook)
            </h2>
            <p class="text-slate-600 leading-relaxed mb-4">İzleyici ekrandaki videoyu kaydırmaya (scroll) devam edip etmeyeceğine ilk 1.8 saniyede karar veriyor. Bu yüzden videnun başında mutlaka merak uyandıran görsel bir şok veya soru cümlesi yer almalıdır.</p>
            
            <h2 class="text-2xl font-bold font-heading text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span class="w-2 h-6 bg-brand-500 rounded-full inline-block"></span> 2. Dinamik Altyazı ve ASMR Ses Kurgusu
            </h2>
            <p class="text-slate-600 leading-relaxed mb-6">İzleyicilerin %70'i videoları sessiz veya düşük sesle izliyor. Ekranda kelime kelime beliren dinamik, renkli altyazılar ve mikrofonla yakalanan doğal ortam sesleri (ASMR) izleme süresini %45 artırıyor.</p>
        `
    },
    {
        id: "ai-ads-roas",
        title: "Yapay Zeka Destekli Reklam Yönetimi: Meta ve Google Ads ile ROAS'ı 5 Katına Çıkarma",
        category: "🤖 Yapay Zeka",
        badge: "Performans • Yapay Zeka",
        date: "3 Temmuz 2026",
        readTime: "7 dk okuma",
        summary: "Advantage+ alışveriş kampanyaları, yapay zeka ile dinamik video reklam üretimi ve bütçe israfını önleyen optimizasyon sırları.",
        image: "https://placehold.co/600x400/18181b/8b5cf6?text=AI+Ads+%26+ROAS+Scale",
        url: "blog-detay-yapay-zeka-reklam.html",
        isFeatured: false,
        content: `
            <p class="text-lg leading-relaxed text-slate-700 mb-6 font-medium">Dijital reklamlarda manuel hedef kitle daraltma dönemi sona erdi. Meta Advantage+ ve Google Performance Max (PMax) algoritmaları, yapay zekayı kullanarak doğru müşteriyi doğru zamanda bulma konusunda insan üstü bir başarı gösteriyor.</p>
            
            <h2 class="text-2xl font-bold font-heading text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span class="w-2 h-6 bg-brand-500 rounded-full inline-block"></span> Yapay Zeka Bütçeyi Nasıl Optimize Eder?
            </h2>
            <p class="text-slate-600 leading-relaxed mb-4">Sistem, yüzlerce farklı kreatif kombinasyonunu (başlık, görsel, video, çağrı butonu) aynı anda test eder. Saniyelik dönüşüm verileriyle bütçeyi en yüksek ROAS (Reklam Harcamalarının Geri Dönüşü) getiren reklamlara tự động aktarır.</p>
        `
    },
    {
        id: "neuromarketing-ui-ux",
        title: "Nöropazarlama ve Görsel Dil: Marka Kimliğiniz Satın Alma Kararını Nasıl Etkiliyor?",
        category: "💡 Marka & Tasarım",
        badge: "Marka Stratejisi • UI/UX",
        date: "26 Haziran 2026",
        readTime: "4 dk okuma",
        summary: "Renk psikolojisi, modern tipografi ve dijital arayüz tasarımının tüketicinin bilinçaltındaki güven algısına ve satışlara doğrudan etkisi.",
        image: "https://placehold.co/600x400/18181b/38bdf8?text=Neuromarketing+%26+UI+UX",
        url: "blog-detay-marka-kimligi.html",
        isFeatured: false,
        content: `
            <p class="text-lg leading-relaxed text-slate-700 mb-6 font-medium">Bir kullanıcının web sitenize veya sosyal medya profilinize girdiğinde markanıza güvenip güvenmeyeceğine karar vermesi sadece 50 milisaniye sürer. Nöropazarlama, bu bilinçaltı karar mekanizmasını estetik tasarım kurallarıyla yönetir.</p>
            
            <h2 class="text-2xl font-bold font-heading text-slate-900 mt-8 mb-4 flex items-center gap-2">
                <span class="w-2 h-6 bg-brand-500 rounded-full inline-block"></span> Renklerin Hızlı Güven Etkisi
            </h2>
            <p class="text-slate-600 leading-relaxed mb-4">Koyu tonlar (Slate 900) ciddiyet ve premium kalite algısı yaratırken, canlı vurgu renkleri (Brand Green/Neon) eyleme geçme arzusunu (CTA) tetikler. Doğru tipografi ise markanın ses tonunu konuşmadan hissettirir.</p>
        `
    }
];

const STORAGE_KEY = 'saskinsoft_blog_posts';

window.BlogManager = {
    // Tüm blog yazılarını getir (localStorage + varsa varsayılanlar)
    getAllPosts: function () {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error("Local storage okuma hatası, varsayılanlar yükleniyor.", e);
            }
        }
        // Eğer localStorage boşsa varsayılanları kaydet ve döndür
        this.saveAllPosts(DEFAULT_BLOG_POSTS);
        return DEFAULT_BLOG_POSTS;
    },

    // Tüm yazıları kaydet
    saveAllPosts: function (posts) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    },

    // ID'ye göre tek bir yazı getir
    getPostById: function (id) {
        const posts = this.getAllPosts();
        return posts.find(p => p.id === id || p.id === String(id));
    },

    // Yeni yazı ekle
    addPost: function (newPostData) {
        const posts = this.getAllPosts();
        
        // Eğer yeni yazı "Öne Çıkan" yapıldıysa, diğerlerinden bu özelliği kaldır
        if (newPostData.isFeatured) {
            posts.forEach(p => p.isFeatured = false);
        }

        const newId = 'post-' + Date.now();
        const post = {
            id: newId,
            title: newPostData.title,
            category: newPostData.category || "📌 Genel Bilgi",
            badge: newPostData.badge || newPostData.category || "Yeni • İçgörü",
            date: newPostData.date || new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }),
            readTime: newPostData.readTime || this.calculateReadTime(newPostData.content || newPostData.summary),
            summary: newPostData.summary || "",
            image: newPostData.image || "https://placehold.co/800x600/18181b/4ade80?text=Saskin+Soft+Blog",
            url: `blog-detay.html?id=${newId}`,
            isFeatured: !!newPostData.isFeatured,
            content: newPostData.content || `<p>${newPostData.summary}</p>`
        };

        // Yeni yazıyı en başa ekle
        posts.unshift(post);
        this.saveAllPosts(posts);
        return post;
    },

    // Yazı güncelle
    updatePost: function (id, updatedData) {
        const posts = this.getAllPosts();
        const index = posts.findIndex(p => p.id === id || p.id === String(id));
        if (index !== -1) {
            if (updatedData.isFeatured) {
                posts.forEach(p => p.isFeatured = false);
            }
            posts[index] = {
                ...posts[index],
                ...updatedData,
                readTime: updatedData.readTime || (updatedData.content ? this.calculateReadTime(updatedData.content) : posts[index].readTime)
            };
            this.saveAllPosts(posts);
            return posts[index];
        }
        return null;
    },

    // Yazı sil
    deletePost: function (id) {
        let posts = this.getAllPosts();
        posts = posts.filter(p => p.id !== id && p.id !== String(id));
        
        // Eğer öne çıkan yazı silindiyse ilk yazıyı öne çıkan yap
        if (!posts.some(p => p.isFeatured) && posts.length > 0) {
            posts[0].isFeatured = true;
        }
        
        this.saveAllPosts(posts);
        return posts;
    },

    // Öne çıkarılan yazıyı değiştir
    setFeaturedPost: function (id) {
        const posts = this.getAllPosts();
        posts.forEach(p => {
            p.isFeatured = (p.id === id || p.id === String(id));
        });
        this.saveAllPosts(posts);
        return posts;
    },

    // Varsayılanlara sıfırla
    resetToDefault: function () {
        this.saveAllPosts(DEFAULT_BLOG_POSTS);
        return DEFAULT_BLOG_POSTS;
    },

    // İçeriğe göre okuma süresi hesapla
    calculateReadTime: function (text) {
        if (!text) return "3 dk okuma";
        const cleanText = text.replace(/<[^>]*>?/gm, '');
        const wordCount = cleanText.trim().split(/\s+/).length;
        const minutes = Math.max(1, Math.ceil(wordCount / 180));
        return `${minutes} dk okuma`;
    }
};
