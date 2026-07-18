/* ==========================================================================
   Şaşkın Soft | Ana JavaScript Motoru ve Animasyon Mantığı
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobil Menü Toggle İşlemleri
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Menü içindeki linke tıklanıldığında menüyü kapat
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Sayfada menü harici bir yere tıklanırsa kapat
        document.addEventListener('click', (e) => {
            if (!btn.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.add('hidden');
            }
        });
    }

    // 2. Navbar Scroll Gölge Efekti
    const nav = document.getElementById('navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('shadow-sm');
            } else {
                nav.classList.remove('shadow-sm');
            }
        });
    }

    // 3. Scroll Reveal Animasyonları (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealOnScroll.observe(el);
        });
    }

    // 4. İletişim Formu İşlemleri (Çift Gönderim Koruması & Sıfırlama Butonu)
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('successMsg');

    if (contactForm && submitBtn && successMsg) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const originalBtnText = 'Ücretsiz Görüşme Ayarla';
            submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Gönderiliyor...';
            submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
            submitBtn.disabled = true;

            const inputs = contactForm.querySelectorAll('input, textarea');
            inputs.forEach(input => input.disabled = true);

            setTimeout(() => {
                submitBtn.style.display = 'none';
                successMsg.classList.remove('hidden');

                if (!document.getElementById('resetFormBtn')) {
                    const resetBtn = document.createElement('button');
                    resetBtn.id = 'resetFormBtn';
                    resetBtn.type = 'button';
                    resetBtn.className = 'mt-3 w-full py-2.5 rounded-xl bg-slate-800 text-brand-400 text-sm font-semibold hover:bg-slate-700 transition-all border border-slate-700';
                    resetBtn.innerHTML = '<i class="fa-solid fa-rotate-right mr-2"></i> Yeni Mesaj Gönder';
                    resetBtn.onclick = () => {
                        successMsg.classList.add('hidden');
                        contactForm.reset();
                        inputs.forEach(input => input.disabled = false);
                        submitBtn.style.display = 'block';
                        submitBtn.innerHTML = originalBtnText;
                        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                        submitBtn.disabled = false;
                        resetBtn.remove();
                    };
                    successMsg.appendChild(resetBtn);
                }
            }, 1000);
        });
    }

    // 5. 3D Tilt Kart ve Mockup Efekti
    const tiltElements = document.querySelectorAll('.service-card, #heroMockup, .tilt-card');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            const translateY = el.classList.contains('service-card') ? 'translateY(-8px)' : 'translateY(0px)';
            el.style.transform = `perspective(1000px) ${translateY} rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = `perspective(1000px) translateY(0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            el.style.transition = 'transform 0.5s ease';
        });

        el.addEventListener('mouseenter', () => {
            el.style.transition = 'transform 0.1s ease';
        });
    });

    // 6. ŞAŞKIN GÖZLER (GOOGLY EYES) FARE TAKİP METODU
    document.addEventListener('mousemove', (e) => {
        const eyes = document.querySelectorAll('.googly-eye');
        eyes.forEach(eye => {
            const rect = eye.getBoundingClientRect();
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;
            const deltaX = e.clientX - eyeCenterX;
            const deltaY = e.clientY - eyeCenterY;
            const angle = Math.atan2(deltaY, deltaX);

            const maxDist = Math.max(2, (rect.width / 2) - 3);
            const distance = Math.min(maxDist, Math.hypot(deltaX, deltaY) / 18);
            const pupilX = Math.cos(angle) * distance;
            const pupilY = Math.sin(angle) * distance;

            const pupil = eye.querySelector('.googly-pupil');
            if (pupil) {
                pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
            }
        });
    });

    // 7. Buton veya Kartların Üzerine Gelince Şaşırma Tepkisi
    const hoverTargets = document.querySelectorAll('a, button, .hover-target, .service-card');
    const saskinMaskot = document.getElementById('saskinMaskot');

    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            document.body.classList.add('is-surprised');
            if (saskinMaskot) saskinMaskot.classList.add('scale-110', 'border-brand-400');
        });
        target.addEventListener('mouseleave', () => {
            document.body.classList.remove('is-surprised');
            if (saskinMaskot) saskinMaskot.classList.remove('scale-110', 'border-brand-400');
        });
    });

    // 8. Global Yüzen WhatsApp Butonu (Floating WhatsApp Widget)
    if (!document.getElementById('floating-whatsapp')) {
        const wpContainer = document.createElement('div');
        wpContainer.id = 'floating-whatsapp';
        wpContainer.className = 'fixed bottom-6 right-6 z-40 flex items-center gap-3 group';
        wpContainer.innerHTML = `
            <div class="hidden sm:flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-700 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                <span class="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
                <span class="text-xs font-bold whitespace-nowrap">WhatsApp Canlı Destek</span>
            </div>
            <a href="https://wa.me/905550886309?text=Merhaba%20Şaşkın%20Soft%20ekibi,%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum." 
               target="_blank" rel="noopener noreferrer" 
               aria-label="WhatsApp Canlı Destek"
               class="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-3xl shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-[#25D366]/40">
                <span class="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
                <i class="fa-brands fa-whatsapp"></i>
            </a>
        `;
        document.body.appendChild(wpContainer);
    }
});

// Şaşkın Rozete Tıklama Animasyonu & Mesajı
function triggerSaskinSurprise() {
    document.body.classList.add('is-surprised');
    showToast('👀 Şaşkın Soft: Biz de sizin markanızın sonuçlarına tam olarak böyle şaşıracağız!');
    setTimeout(() => {
        document.body.classList.remove('is-surprised');
    }, 1800);
}

// Global Toast Bildirim Fonksiyonu
function showToast(message) {
    const existingToast = document.getElementById('custom-toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.id = 'custom-toast';
    toast.className = 'fixed bottom-24 right-6 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 transform transition-all duration-500 translate-y-24 opacity-0 font-medium flex items-center gap-3 border border-slate-700 max-w-sm sm:max-w-md';
    toast.innerHTML = `<i class="fa-solid fa-bolt text-brand-400 text-xl flex-shrink-0"></i> <span>${message}</span>`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-24', 'opacity-0');
    });

    setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
        setTimeout(() => toast.remove(), 500);
    }, 3500);
}
