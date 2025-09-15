// انتظر حتى يتم تحميل جميع عناصر الصفحة
document.addEventListener('DOMContentLoaded', function() {

    // الحصول على عناصر DOM
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.main-content');

    // محاكاة وقت تحميل الصفحة (يمكن تعديله حسب الحاجة)
    // في التطبيق الحقيقي، يمكنك استخدام حدث load للكائن window
    // بدلاً من setTimeout
    setTimeout(function() {
        // إخفاء شاشة التحميل بتأثير ناعم
        preloader.classList.add('hidden');

        // إظهار المحتوى الرئيسي بتأثير ناعم
        mainContent.classList.add('visible');

        // إزالة شاشة التحميل من DOM بعد انتهاء التأثير
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500); // نفس مدة الانتقال في CSS

    }, 3000); // 3 ثوانٍ لشاشة التحميل (تتطابق مع مدة الأنيميشن)

    // يمكنك استخدام هذا الكود بدلاً من setTimeout إذا كنت تنتظر تحميل جميع الموارد
    /*
    window.addEventListener('load', function() {
        preloader.classList.add('hidden');
        mainContent.classList.add('visible');

        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    });
    */

    // كود إضافي لتفاعلات الصفحة (اختياري)

    // تفاعل زر البدء
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('شكراً لتفاعلك معنا!');
        });
    }

    // إضافة تأثير سلس للتمرير
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

});