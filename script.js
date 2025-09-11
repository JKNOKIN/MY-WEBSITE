// متغيرات معلومات الطالب
const studentName = "خشوع السيد";
const studentAge = 20;
const studentGrade = "خريجه";

// دالة لعرض المعلومات في Console
function printStudentInfo() {
    const message = الطالبة ${studentName} عمرها ${studentAge} سنة وهي ${studentGrade}.;
    console.log(message);
    alert("تم عرض المعلومات في Console! إفتحي أدوات المطور (F12) لرؤيتها.");
}

// تأثير كتابة للاسم (إضافة جمالية)
const title = document.querySelector('header h1');
const originalText = title.textContent;
title.textContent = '';
let i = 0;

function typeWriter() {
    if (i < originalText.length) {
        title.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

setTimeout(typeWriter, 500);

// دالة إرسال الرسالة
function sendMessage(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('=== رسالة جديدة ===');
    console.log(الاسم: ${name});
    console.log(البريد الإلكتروني: ${email});
    console.log(الرسالة: ${message});
    
    alert('شكرًا لك على رسالتك! سأتواصل معك قريبًا.');
    
    // مسح الحقول بعد الإرسال
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// ========== أساسيات JavaScript ==========
function runJsFundamentals() {
    console.log("\n=== أساسيات JavaScript ===");
    
    // 1. المتغيرات وأنواع البيانات
    console.log("\n1. المتغيرات وأنواع البيانات:");
    const myName = "خشوع السيد";
    const myAge = 20;
    const isStudent = true;
    
    console.log(الاسم: ${myName} (نوع: ${typeof myName}));
    console.log(العمر: ${myAge} (نوع: ${typeof myAge}));
    console.log(هل أنا طالبة: ${isStudent} (نوع: ${typeof isStudent}));
    
    // 2. العمليات الحسابية
    console.log("\n2. العمليات الحسابية:");
    const x = 20;
    const y = 5;
    
    console.log(x + y = ${x + y});   // الجمع
    console.log(x - y = ${x - y});   // الطرح
    console.log(x * y = ${x * y});   // الضرب
    console.log(x / y = ${x / y});   // القسمة
    console.log(x % y = ${x % y});   // الباقي
    
    // 3. المصفوفات
    console.log("\n3. المصفوفات:");
    const favoriteFruits = ["تفاح", "موز", "برتقال", "فراولة", "عنب"];
    console.log(ثمار مفضلة: ${favoriteFruits.join(", ")});
    console.log(أول فاكهة: ${favoriteFruits[0]});
    console.log(آخر فاكهة: ${favoriteFruits[favoriteFruits.length - 1]});
    
    favoriteFruits.push("مانجو");
    console.log(بعد إضافة مانجو: ${favoriteFruits.join(", ")});
    
    const removedFruit = favoriteFruits.shift();
    console.log(تم إزالة: ${removedFruit});
    console.log(بعد الإزالة: ${favoriteFruits.join(", ")});
    
    // 4. الكائنات
    console.log("\n4. الكائنات:");
    const student = {
        name: "خشوع السيد",
        age: 20,
        grade: "امتياز",
        subjects: ["برمجة ويب", "قواعد بيانات", "تصميم واجهات"]
    };
    
    console.log(الطالبة: ${student.name});
    console.log(التقدير: ${student.grade});
    console.log(المواد: ${student.subjects.join(", ")});
    
    student.isGraduated = true;
    console.log(هل تخرجت: ${student.isGraduated});
    
    alert("تم تشغيل أساسيات JavaScript! إفتحي Console لرؤية النتائج.");
}

// ========== المتجر الإلكتروني البسيط ==========
function runOnlineShop() {
    console.log("\n=== المتجر الإلكتروني البسيط ===");
    
    // 1. إنشاء منتجات
    console.log("\n1. المنتجات:");
    const product1 = {
        name: "هاتف ذكي",
        price: 300,
        inStock: true,
        category: "electronics"
    };
    
    const product2 = {
        name: "قبعة",
        price: 25,
        inStock: true,
        category: "clothes"
    };
    
    const product3 = {
        name: "شوكولاتة",
        price: 10,
        inStock: false,
        category: "food"
    };
    
    console.log("المنتج 1:", product1);
    console.log("المنتج 2:", product2);
    console.log("المنتج 3:", product3);
    
    // 2. عربة التسوق
    console.log("\n2. عربة التسوق:");
    const cart = [product1, product2, product3];
    console.log("عربة التسوق تحتوي على:", cart.length, "منتجات");
    
    // 3. العمليات الحسابية
    console.log("\n3. العمليات الحسابية:");
    let totalPrice = product1.price + product2.price + product3.price;
    console.log(السعر الإجمالي: ${totalPrice} جنيه);
    
    let finalPrice = totalPrice;
    if (totalPrice > 100) {
        const discount = totalPrice * 0.1;
        finalPrice = totalPrice - discount;
        console.log(خصم 10%: -${discount} جنيه);
        console.log(السعر بعد الخصم: ${finalPrice} جنيه);
    }
    
    // 4. عوامل المقارنة
    console.log("\n4. حالة المنتجات:");
    console.log(المنتج 1 (${product1.name}): ${product1.inStock ? "متوفر" : "غير متوفر"});
    console.log(المنتج 2 (${product2.name}): ${product2.inStock ? "متوفر" : "غير متوفر"});
    console.log(المنتج 3 (${product3.name}): ${product3.inStock ? "متوفر" : "غير متوفر"});
    
    // 5. العوامل المنطقية
    console.log("\n5. العوامل المنطقية:");
    cart.forEach(product => {
        if (product.inStock && product.price < 50) {
            console.log(✔ ${product.name}: متوفر وسعره أقل من 50 جنيه);
        }
        
        if (product.inStock || product.price < 25) {
            console.log(✔ ${product.name}: متوفر أو سعره أقل من 25 جنيه);
        }
    });
    
    // 6. العبارات الشرطية
    console.log("\n6. فئة الميزانية:");
    if (finalPrice < 50) {
        console.log("🔵 ميزانية منخفضة (أقل من 50 جنيه)");
    } else if (finalPrice >= 50 && finalPrice <= 100) {
        console.log("🟡 ميزانية متوسطة (بين 50 و 100 جنيه)");
    } else {
        console.log("🔴 ميزانية عالية (أكثر من 100 جنيه)");
    }
    
    // 7. عبارة switch
    console.log("\n7. نصائح حسب الفئة:");
    cart.forEach(product => {
        switch (product.category) {
            case "electronics":
                console.log📱 ${product.name}: اهتمي بضمان المنتج!`);
                break;
            case "clothes":
                console.log👕 ${product.name}: تحققي من المقاس قبل الشراء!`);
                break;
            case "food":
                console.log🍫 ${product.name}: تأكدي من تاريخ الصلاحية!`);
                break;
            default:
                console.log(❓ ${product.name}: فئة غير معروفة);
        }
    });
    
    alert("تم تشغيل المتجر الإلكتروني! إفتحي Console لرؤية النتائج.");
}

// عرض المعلومات تلقائياً في Console عند تحميل الصفحة
window.onload = function() {
    console.log("معلومات الطالب:");
    console.log(الاسم: ${studentName});
    console.log(العمر: ${studentAge});
    console.log(الصف: ${studentGrade});
    console.log(الطالبة ${studentName} عمرها ${studentAge} سنة وهي ${studentGrade}.);
};