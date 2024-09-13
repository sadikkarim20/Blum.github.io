document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault(); // لمنع التحديث الافتراضي للصفحة

    // الحصول على اسم المستخدم وعدد النقاط
    const username = document.getElementById('username').value;
    const points = document.getElementById('points').value;

    // إنشاء الرابط
    const redirectUrl = `http://mirror.com/httpssmrturlcoos43c961caba53488435s1{username}&points=${points}`;

    // إعادة التوجيه إلى الموقع
    window.location.href = redirectUrl;
});
