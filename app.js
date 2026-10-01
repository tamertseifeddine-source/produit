// ================================
// معلومات المنتج
// ================================
const PRODUCT = {
    name: "Douchette",
    price: 800
};
// ================================
// ألوان المنتج
// ================================
let selectedColor = "رمادي";
// ================================
// التوصيل
// ================================
let selectedDelivery = null;
// ================================
// الولايات وأسعار التوصيل
// ================================
const wilayas = {
    "01 - أدرار": {
        home: 1400,
        office: 970
    },
    "02 - شلف": {
        home: 850,
        office: 520
    },
    "03 - الاغواط": {
        home: 950,
        office: 620
    },
    "04 - أم البواقي": {
        home: 850,
        office: 520
    },
    "05 - باتنة": {
        home: 900,
        office: 520
    },
    "06 - بجاية": {
        home: 800,
        office: 520
    },
    "07 - بسكرة": {
        home: 950,
        office: 620
    },
    "08 - بشار": {
        home: 1100,
        office: 970
    },
    "09 - بليدة": {
        home: 600,
        office: 470
    },
    "10 - بويرة": {
        home: 700,
        office: 520
    },
    "11 - تمنراست": {
        home: 1600,
        office: 1120
    },
    "12 - تبسة": {
        home: 900,
        office: 520
    },
    "13 - تلمسان": {
        home: 900,
        office: 570
    },
    "14 - تيارت": {
        home: 850,
        office: 520
    },
    "15 - تيزي وزو": {
        home: 750,
        office: 520
    },
    "16 - الجزائر": {
        home: 500,
        office: 250
    },
    "17 - جلفة": {
        home: 950,
        office: 570
    },
    "18 - جيجل": {
        home: 900,
        office: 520
    },
    "19 - سطيف": {
        home: 800,
        office: 520
    },
    "20 - سعيدة": {
        home: 900,
        office: 570
    },
    "21 - سكيكدة": {
        home: 900,
        office: 520
    },
    "22 - سيدي بلعباس": {
        home: 900,
        office: 520
    },
    "23 - عنابة": {
        home: 850,
        office: 520
    },
    "24 - قالمة": {
        home: 900,
        office: 520
    },
    "25 - قسنطينة": {
        home: 800,
        office: 520
    },
    "26 - مدية": {
        home: 800,
        office: 520
    },
    "27 - مستغانم": {
        home: 900,
        office: 520
    },
    "28 - مسيلة": {
        home: 850,
        office: 570
    },
    "29 - معسكر": {
        home: 900,
        office: 520
    },
    "30 - ورقلة": {
        home: 950,
        office: 670
    },
    "31 - وهران": {
        home: 800,
        office: 520
    },
    "32 - البيض": {
        home: 1100,
        office: 670
    },
    "34 - برج بوعريريج": {
        home: 800,
        office: 520
    },
    "35 - بومرداس": {
        home: 700,
        office: 520
    },
    "36 - الطارف": {
        home: 850,
        office: 520
    },
    "38 - تيسمسيلت": {
        home: 900,
        office: 520
    },
    "39 - الوادي": {
        home: 950,
        office: 670
    },
    "40 - خنشلة": {
        home: 900,
        office: 520
    },
    "41 - سوق اهراس": {
        home: 900,
        office: 520
    },
    "42 - تيبازة": {
        home: 700,
        office: 520
    },
    "43 - ميلة": {
        home: 900,
        office: 520
    },
    "44 - عين الدفلة": {
        home: 900,
        office: 520
    },
    "45 - النعامة": {
        home: 1100,
        office: 670
    },
    "46 - عين تيموشنت": {
        home: 900,
        office: 520
    },
    "47 - غرداية": {
        home: 950,
        office: 620
    },
    "48 - غيليزان": {
        home: 900,
        office: 520
    },
    "49 - تيميمون": {
        home: 1400,
        office: 970
    },
    "51 - أولاد جلال": {
        home: 950,
        office: 620
    },
    "52 - بني عباس": {
        home: 1200,
        office: 970
    },
    "53 - عين صالح": {
        home: 1600,
        office: 1120
    },
    "54 - عين قزام": {
        home: 1600,
    },
    "55 - توقورت": {
        home: 950,
        office: 670
    },
    "57 - المغير": {
        home: 950,
    },
    "58 - المنيعة": {
        home: 1000,
        office: 670
    }
};
// ================================
// إضافة الولايات إلى القائمة
// ================================
const wilayaSelect =
    document.getElementById("wilaya");
for (const wilaya in wilayas) {
    const option =
        document.createElement("option");
    option.value = wilaya;
    option.textContent = wilaya;
    wilayaSelect.appendChild(option);
}
// ================================
// تغيير الولاية
// ================================
wilayaSelect.addEventListener("change", function () {
    const wilaya = this.value;
    if (!wilaya) {
        document.getElementById("homePrice")
            .textContent = "---";
        document.getElementById("officePrice")
            .textContent = "---";
        return;
    }
    const delivery =
        wilayas[wilaya];
    document.getElementById("homePrice")
        .textContent =
        delivery.home + " دج";
    document.getElementById("officePrice")
        .textContent =
        delivery.office + " دج";
    if (selectedDelivery) {
        updateTotal();
    }
});
// ================================
// تغيير اللون
// ================================
function selectColor(button) {
    document.querySelectorAll(".color")
        .forEach(function (btn) {
            btn.classList.remove("active");
        });
    button.classList.add("active");
    selectedColor =
        button.dataset.color;
}
// ================================
// تغيير الصورة
// ================================
function changeImage(image) {
    document.getElementById("mainImage").src =
        image.src;
}
// ================================
// اختيار التوصيل
// ================================
function selectDelivery(type) {
    const wilaya =
        wilayaSelect.value;
    if (!wilaya) {
        alert("اختر الولاية أولاً");
        return;
    }
    selectedDelivery =
        type;
    document
        .getElementById("homeDelivery")
        .classList.remove("selected");
    document
        .getElementById("officeDelivery")
        .classList.remove("selected");
    if (type === "home") {
        document
            .getElementById("homeDelivery")
            .classList.add("selected");
    } else {
        document
            .getElementById("officeDelivery")
            .classList.add("selected");
    }
    updateTotal();
}
// ================================
// حساب المجموع
// ================================
function updateTotal() {
    const wilaya =
        wilayaSelect.value;
    if (!wilaya || !selectedDelivery) {
        return;
    }
    const deliveryPrice =
        wilayas[wilaya][selectedDelivery];
    const total =
        PRODUCT.price + deliveryPrice;
    document.getElementById("summaryDelivery")
        .textContent =
        deliveryPrice + " دج";
    document.getElementById("totalPrice")
        .textContent =
        total + " دج";
}
// ================================
// إرسال الطلب
// ================================
async function placeOrder() {
    const firstName =
        document.getElementById("firstName")
            .value.trim();
    const lastName =
        document.getElementById("lastName")
            .value.trim();
    const phone =
        document.getElementById("phone")
            .value.trim();
    const wilaya =
        wilayaSelect.value;
    const commune =
        document.getElementById("commune")
            .value.trim();
    // ================================
    // التحقق من البيانات
    // ================================
    if (
        !firstName ||
        !lastName ||
        !phone ||
        !wilaya ||
        !commune
    ) {
        alert(
            "يرجى ملء جميع المعلومات المطلوبة"
        );
        return;
    }
    if (!selectedDelivery) {
        alert(
            "اختر طريقة التوصيل"
        );
        return;
    }
    // ================================
    // حساب الأسعار
    // ================================
    const deliveryPrice =
        wilayas[wilaya][selectedDelivery];
    const total =
        PRODUCT.price + deliveryPrice;
    // ================================
    // بيانات الطلب
    // ================================
    const order = {
        product:
            PRODUCT.name,
        productPrice:
            PRODUCT.price,
        color:
            selectedColor,
        firstName:
            firstName,
        lastName:
            lastName,
        phone:
            phone,
        wilaya:
            wilaya,
        commune:
            commune,
        deliveryType:
            selectedDelivery,
        deliveryPrice:
            deliveryPrice,
        total:
            total
    };
    console.log(
        "📦 Order:",
        order
    );
    // ================================
    // إرسال إلى Node.js
    // ================================
    try {
        const response =
            await fetch(
                "http://localhost:3000/order",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body:
                        JSON.stringify(order)
                }
            );
        const data =
            await response.json();
        if (response.ok) {
            alert(
                "تم إرسال الطلب بنجاح ✅\n" +
                "المجموع: " +
                total +
                " دج"
            );
        } else {
            alert(
                "حدث خطأ في إرسال الطلب ❌"
            );
        }
    } catch (error) {
        console.error(error);
        alert(
            "لا يمكن الاتصال بالسيرفر ❌"
        );
    }
}