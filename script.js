/* =========================================
   WEDDING COUNTDOWN
   Cairo Time - Egypt
========================================= */

const weddingDate = new Date(
    "2026-10-13T20:00:00+03:00"
).getTime();


function updateCountdown() {

    const now = Date.now();

    const difference = weddingDate - now;


    /* لو موعد الفرح وصل */

    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    /* حساب الأيام */

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    /* حساب الساعات */

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    /* حساب الدقائق */

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    /* حساب الثواني */

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );


    /* عرض العد التنازلي */

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


/* تشغيل أول مرة */

updateCountdown();


/* تحديث كل ثانية */

setInterval(
    updateCountdown,
    1000
);