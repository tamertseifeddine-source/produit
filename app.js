// ================================
// معلومات المنتج
// ================================
const PRODUCT = {
    name: "Douchette",
    price: 800
};

// ================================
// الكمية
// ================================
let quantity = 1;

// ================================
// اللون
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
    "01 - أدرار": { home: 1400, office: 970 },
    "02 - شلف": { home: 850, office: 520 },
    "03 - الاغواط": { home: 950, office: 620 },
    "04 - أم البواقي": { home: 850, office: 520 },
    "05 - باتنة": { home: 900, office: 520 },
    "06 - بجاية": { home: 800, office: 520 },
    "07 - بسكرة": { home: 950, office: 620 },
    "08 - بشار": { home: 1100, office: 970 },
    "09 - بليدة": { home: 600, office: 470 },
    "10 - بويرة": { home: 700, office: 520 },
    "11 - تمنراست": { home: 1600, office: 1120 },
    "12 - تبسة": { home: 900, office: 520 },
    "13 - تلمسان": { home: 900, office: 570 },
    "14 - تيارت": { home: 850, office: 520 },
    "15 - تيزي وزو": { home: 750, office: 520 },
    "16 - الجزائر": { home: 500, office: 250 },
    "17 - جلفة": { home: 950, office: 570 },
    "18 - جيجل": { home: 900, office: 520 },
    "19 - سطيف": { home: 800, office: 520 },
    "20 - سعيدة": { home: 900, office: 570 },
    "21 - سكيكدة": { home: 900, office: 520 },
    "22 - سيدي بلعباس": { home: 900, office: 520 },
    "23 - عنابة": { home: 850, office: 520 },
    "24 - قالمة": { home: 900, office: 520 },
    "25 - قسنطينة": { home: 800, office: 520 },
    "26 - مدية": { home: 800, office: 520 },
    "27 - مستغانم": { home: 900, office: 520 },
    "28 - مسيلة": { home: 850, office: 570 },
    "29 - معسكر": { home: 900, office: 520 },
    "30 - ورقلة": { home: 950, office: 670 },
    "31 - وهران": { home: 800, office: 520 },
    "32 - البيض": { home: 1100, office: 670 },
    "34 - برج بوعريريج": { home: 800, office: 520 },
    "35 - بومرداس": { home: 700, office: 520 },
    "36 - الطارف": { home: 850, office: 520 },
    "38 - تيسمسيلت": { home: 900, office: 520 },
    "39 - الوادي": { home: 950, office: 670 },
    "40 - خنشلة": { home: 900, office: 520 },
    "41 - سوق اهراس": { home: 900, office: 520 },
    "42 - تيبازة": { home: 700, office: 520 },
    "43 - ميلة": { home: 900, office: 520 },
    "44 - عين الدفلة": { home: 900, office: 520 },
    "45 - النعامة": { home: 1100, office: 670 },
    "46 - عين تيموشنت": { home: 900, office: 520 },
    "47 - غرداية": { home: 950, office: 620 },
    "48 - غيليزان": { home: 900, office: 520 },
    "49 - تيميمون": { home: 1400, office: 970 },
    "51 - أولاد جلال": { home: 950, office: 620 },
    "52 - بني عباس": { home: 1200, office: 970 },
    "53 - عين صالح": { home: 1600, office: 1120 },
    "54 - عين قزام": { home: 1600 },
    "55 - توقورت": { home: 950, office: 670 },
    "57 - المغير": { home: 950 },
    "58 - المنيعة": { home: 1000, office: 670 }
};

// ================================
// إضافة الولايات للقائمة
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
// إضافة قسم الكمية
// ================================
const quantityContainer =
    document.createElement("div");

quantityContainer.style.marginTop = "25px";
quantityContainer.style.marginBottom = "20px";

quantityContainer.innerHTML = `
    <h3>الكمية :</h3>

    <div style="
        display:flex;
        align-items:center;
        justify-content:center;
        gap:20px;
        background:white;
        border:2px solid #ddd;
        border-radius:20px;
        padding:15px;
        width:100%;
        max-width:300px;
        margin:auto;
    ">

        <button
            type="button"
            id="minusQuantity"
            style="
                width:50px;
                height:50px;
                border:none;
                border-radius:15px;
                background:#111;
                color:white;
                font-size:28px;
                cursor:pointer;
            "
        >−</button>

        <span
            id="quantityNumber"
            style="
                font-size:25px;
                font-weight:bold;
                min-width:40px;
                text-align:center;
            "
        >1</span>

        <button
            type="button"
            id="plusQuantity"
            style="
                width:50px;
                height:50px;
                border:none;
                border-radius:15px;
                background:#111;
                color:white;
                font-size:28px;
                cursor:pointer;
            "
        >+</button>

    </div>

    <div
        id="discountText"
        style="
            text-align:center;
            margin-top:10px;
            font-size:17px;
            font-weight:bold;
            color:#d90000;
        "
    ></div>
`;

const formSection =
    document.querySelector(".form-section");

if (formSection) {

    formSection.insertBefore(
        quantityContainer,
        formSection.firstChild
    );
}

// ================================
// حساب سعر المنتجات والخصم
// ================================
function getProductTotal() {

    const normalPrice =
        PRODUCT.price * quantity;

    const discount =
        Math.min((quantity - 1) * 100, 200);

    const productTotal =
        normalPrice - discount;

    return {
        normalPrice,
        discount,
        productTotal
    };
}

// ================================
// تحديث الكمية
// ================================
function updateQuantityDisplay() {

    const quantityNumber =
        document.getElementById("quantityNumber");

    const discountText =
        document.getElementById("discountText");

    if (quantityNumber) {

        quantityNumber.textContent =
            quantity;
    }

    const priceInfo =
        getProductTotal();

    if (discountText) {

        if (priceInfo.discount > 0) {

            discountText.textContent =
                "🎁 خصم " +
                priceInfo.discount +
                " دج";

        } else {

            discountText.textContent = "";
        }
    }

    const summaryPrice =
        document.getElementById("summaryPrice");

    if (summaryPrice) {

        summaryPrice.textContent =
            priceInfo.productTotal + " دج";
    }

    updateTotal();
}

// ================================
// زر ناقص
// ================================
const minusQuantity =
    document.getElementById("minusQuantity");

if (minusQuantity) {

    minusQuantity.addEventListener(
        "click",
        function () {

            if (quantity > 1) {

                quantity--;

                updateQuantityDisplay();
            }
        }
    );
}

// ================================
// زر زائد
// ================================
const plusQuantity =
    document.getElementById("plusQuantity");

if (plusQuantity) {

    plusQuantity.addEventListener(
        "click",
        function () {

            quantity++;

            updateQuantityDisplay();
        }
    );
}

// ================================
// تغيير الولاية
// ================================
wilayaSelect.addEventListener(
    "change",
    function () {

        const wilaya =
            this.value;

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
            delivery.office !== undefined
                ? delivery.office + " دج"
                : "غير متوفر";

        if (selectedDelivery) {

            updateTotal();
        }
    }
);

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

    document.getElementById("mainImage")
        .src = image.src;
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

    const deliveryPrice =
        wilayas[wilaya][type];

    if (deliveryPrice === undefined) {

        alert(
            "هذه الطريقة غير متوفرة لهذه الولاية"
        );

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

    const priceInfo =
        getProductTotal();

    const summaryPrice =
        document.getElementById("summaryPrice");

    if (summaryPrice) {

        summaryPrice.textContent =
            priceInfo.productTotal + " دج";
    }

    if (!wilaya) {
        return;
    }

    if (!selectedDelivery) {

        document.getElementById("summaryDelivery")
            .textContent = "0 دج";

        document.getElementById("totalPrice")
            .textContent =
            priceInfo.productTotal + " دج";

        return;
    }

    const deliveryPrice =
        wilayas[wilaya][selectedDelivery];

    if (deliveryPrice === undefined) {
        return;
    }

    const total =
        priceInfo.productTotal +
        deliveryPrice;

    document.getElementById("summaryDelivery")
        .textContent =
        deliveryPrice + " دج";

    document.getElementById("totalPrice")
        .textContent =
        total + " دج";
}

// ================================
// رسالة الانتظار داخل الصفحة
// ================================
function showLoadingMessage() {

    let loadingMessage =
        document.getElementById("loadingMessage");

    if (!loadingMessage) {

        loadingMessage =
            document.createElement("div");

        loadingMessage.id =
            "loadingMessage";

        loadingMessage.style.position =
            "fixed";

        loadingMessage.style.top =
            "50%";

        loadingMessage.style.left =
            "50%";

        loadingMessage.style.transform =
            "translate(-50%, -50%)";

        loadingMessage.style.background =
            "#111";

        loadingMessage.style.color =
            "white";

        loadingMessage.style.padding =
            "25px 30px";

        loadingMessage.style.borderRadius =
            "20px";

        loadingMessage.style.fontSize =
            "19px";

        loadingMessage.style.fontWeight =
            "bold";

        loadingMessage.style.textAlign =
            "center";

        loadingMessage.style.zIndex =
            "9999";

        loadingMessage.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.3)";

        document.body.appendChild(
            loadingMessage
        );
    }

    loadingMessage.textContent =
        "⏳ يرجى الانتظار قليلًا، جاري إرسال طلبك...";
}

// ================================
// إخفاء رسالة الانتظار
// ================================
function hideLoadingMessage() {

    const loadingMessage =
        document.getElementById("loadingMessage");

    if (loadingMessage) {

        loadingMessage.remove();
    }
}

// ================================
// رسالة النجاح
// ================================
function showSuccessMessage(total) {

    hideLoadingMessage();

    alert(
        "تم إرسال الطلب بنجاح ✅\n" +
        "الكمية: " +
        quantity +
        "\n" +
        "سعر المنتجات: " +
        getProductTotal().productTotal +
        " دج\n" +
        "التوصيل: " +
        getDeliveryPrice() +
        " دج\n" +
        "المجموع: " +
        total +
        " دج"
    );
}

// ================================
// الحصول على سعر التوصيل
// ================================
function getDeliveryPrice() {

    const wilaya =
        wilayaSelect.value;

    if (!wilaya || !selectedDelivery) {
        return 0;
    }

    return wilayas[wilaya][selectedDelivery];
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
    // التحقق من المعلومات
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

    const deliveryPrice =
        wilayas[wilaya][selectedDelivery];

    if (deliveryPrice === undefined) {

        alert(
            "طريقة التوصيل غير متوفرة لهذه الولاية"
        );

        return;
    }

    // ================================
    // حساب السعر
    // ================================
    const priceInfo =
        getProductTotal();

    const total =
        priceInfo.productTotal +
        deliveryPrice;

    // ================================
    // بيانات الطلب
    // ================================
    const order = {

        product:
            PRODUCT.name,

        quantity:
            quantity,

        productPrice:
            PRODUCT.price,

        normalProductTotal:
            priceInfo.normalPrice,

        discount:
            priceInfo.discount,

        productTotal:
            priceInfo.productTotal,

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
    // إظهار الانتظار
    // ================================
    showLoadingMessage();

    // ================================
    // إرسال الطلب مباشرة
    // ================================
    try {

        const response =
            await fetch(
                "https://produit-backend-e5gs.onrender.com/order",
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

        // ================================
        // نجاح
        // ================================
        if (response.ok) {

            showSuccessMessage(total);

        } else {

            hideLoadingMessage();

            alert(
                "حدث خطأ في إرسال الطلب ❌"
            );
        }

    } catch (error) {

        console.error(error);

        hideLoadingMessage();

        alert(
            "لا يمكن الاتصال بالسيرفر ❌"
        );
    }
}

// ================================
// التشغيل الأولي
// ================================
updateQuantityDisplay();
