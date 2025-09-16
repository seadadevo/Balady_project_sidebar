
// وظيفة التبديل بين الوضع الفاتح والداكن
function toggleTheme(isLightMode) {
    const sideBar = document.querySelector('.side-bar');
    
    if (isLightMode) {
        sideBar.classList.add('light-mode');
        sideBar.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        sideBar.classList.add('dark-mode');
        sideBar.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
    
    // تحديث الأيقونات النشطة
    updateActiveIcons(isLightMode);
}

// وظيفة تحديث الأيقونات النشطة
function updateActiveIcons(isLightMode) {
    const moonIcon = document.querySelector('.fa-moon').closest('div');
    const sunIcon = document.querySelector('.fa-sun').closest('div');
    const computerIcon = document.querySelector('.fa-computer').closest('div');
    
    // إزالة النشاط من جميع الأيقونات
    [moonIcon, sunIcon, computerIcon].forEach(icon => {
        icon.classList.remove('active');
    });
    
    // إضافة النشاط للأيقونة المناسبة
    if (isLightMode) {
        sunIcon.classList.add('active');
    } else {
        moonIcon.classList.add('active');
    }
}

// تحميل التفضيل المحفوظ عند بدء التشغيل
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const sideBar = document.querySelector('.side-bar');
    
    // تطبيق الوضع المحفوظ أو الوضع الافتراضي
    if (savedTheme === 'light') {
        toggleTheme(true);
    } else {
        toggleTheme(false);
    }
    
    // إضافة event listeners للأيقونات
    const moonIcon = document.querySelector('.fa-moon');
    const sunIcon = document.querySelector('.fa-sun');
    const computerIcon = document.querySelector('.fa-computer');
    
    // عند النقر على القمر (الوضع الداكن)
    if (moonIcon) {
        moonIcon.addEventListener('click', function() {
            toggleTheme(false);
        });
    }
    
    // عند النقر على الشمس (الوضع الفاتح)
    if (sunIcon) {
        sunIcon.addEventListener('click', function() {
            toggleTheme(true);
        });
    }
    
    // عند النقر على الكمبيوتر (وضع النظام)
    if (computerIcon) {
        computerIcon.addEventListener('click', function() {
            // الكشف عن تفضيلات النظام
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            toggleTheme(!prefersDark);
            
            // حفظ أننا نستخدم وضع النظام
            localStorage.removeItem('theme');
        });
    }
    
    // الاستماع لتغييرات نظام التشغيل (إذا كان المستخدم يستخدم وضع النظام)
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                toggleTheme(!e.matches);
            }
        });
    }
});
// light Mood 

// Main Codes 
let langSelected = document.getElementById("selectedLanguage");
let langOption = document.getElementById("languageOptions");
let sideBar = document.querySelector(".side-bar");
let firstImage = document.querySelector(".first img");
let langTextId = document.getElementById("main-language");
let langTextClass = document.querySelectorAll(".language-text-last");
let langOptionClass = document.querySelectorAll(".language-option");
let flagLast = document.querySelectorAll(".last")
let smartHelp = document.querySelector(".smart-assistant");
let closeSideBar = document.querySelector(".setting .close");

langSelected.addEventListener("click",function(){
    langOption.classList.toggle("appear");
});


// Coding For Smart Assistant 
smartHelp.addEventListener("click",function(){
    sideBar.classList.toggle("active");
    smartHelp.classList.add('active')
});

closeSideBar.addEventListener("click",function(){
    smartHelp.classList.remove('active')
    sideBar.classList.remove("active");
})
// Coding For Smart Assistant 


    langOptionClass.forEach(function(option) {
            option.addEventListener("click", function() {
                // الحصول على البيانات من الخيار المحدد
                let selectedImg = this.querySelector('img').src;
                let selectedText = this.querySelector('.language-text-last').textContent;
                
                // تحديث الخيار الرئيسي
                firstImage.src = selectedImg;
                langTextId.innerHTML = selectedText;
                
                // إغلاق القائمة المنسدلة
                langOption.classList.remove("appear");
            });
    });


const toggleSwitch = document.getElementById('toggleSwitch');
toggleSwitch.addEventListener('change', () => {
    // You can add more functionality here, like sending a request to a server
    if (toggleSwitch.checked) {
        console.log('Switch is ON');
    } else {
        console.log('Switch is OFF');
    }
});



// هذه الاكواد خاصة باظهار ال help pattern items 
const arrowIcon = document.querySelector('.help-pattern .heading .arrow');
const helpPatternList = document.querySelector('.help-pattern-items');
arrowIcon.addEventListener('click', () => {
    helpPatternList.classList.toggle('show');

    // Optional: Rotate the arrow icon for better visual feedback
    arrowIcon.querySelector('i').classList.toggle('rotate');
});




// Coding For Reading Comfortable
let cards = document.querySelectorAll(".card");
// تحديد الحاوية الرئيسية
let container = document.querySelector(".container");

let activeCard = null;

cards.forEach(function(card){
    card.addEventListener("click",function(ele){
        ele.target.classList.toggle("change-back");
        ele.target.classList.toggle("selected");
    });
});
// Coding For Reading Comfortable



// Coding For Setting Colors 

// تحديد جميع عناصر التبديل (الدائرة الصغيرة)
const toggleButtons = document.querySelectorAll(".setting-item");

// تكرار على كل عنصر تبديل
toggleButtons.forEach(toggleButton => {
    // لكل زر تبديل، نجد لوحة الألوان المرتبطة به
    const colorPalette = toggleButton.nextElementSibling;
    
    // إضافة مستمع حدث للنقر على زر التبديل
    toggleButton.addEventListener("click", () => {
        // تبديل وجود كلاس "hidden" على لوحة الألوان المرتبطة
        colorPalette.classList.toggle("hidden");
    });

    // تحديد جميع دوائر الألوان داخل لوحة الألوان المرتبطة
    const colorCircles = colorPalette.querySelectorAll(".color-circle");

    // إضافة مستمع حدث لكل دائرة لون
    colorCircles.forEach(circle => {
        circle.addEventListener("click", () => {
            // إزالة كلاس "selected" من جميع الدوائر الأخرى في نفس اللوحة
            colorCircles.forEach(otherCircle => {
                otherCircle.classList.remove("selected");
            });
            // إضافة كلاس "selected" للدائرة التي تم النقر عليها
            circle.classList.add("selected");
        });
    });
});


const footer = document.querySelector('.myFooter')
const allBox =footer.querySelectorAll('.box')

allBox.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active')
    })
});










































