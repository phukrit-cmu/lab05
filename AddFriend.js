// รอให้ HTML โหลดเสร็จก่อนเริ่มทำงาน
document.addEventListener('DOMContentLoaded', () => {

    // ดึง Element ที่ต้องใช้จาก HTML
    const addBtn = document.getElementById('addBtn');
    const friendInput = document.getElementById('friendInput');
    const friendsList = document.getElementById('friendsList');

    // ฟังก์ชันสำหรับเพิ่มเพื่อน
    const addFriend = () => {
        const friendName = friendInput.value.trim(); // เอาค่าจากช่อง input และตัดช่องว่างหน้า-หลัง

        // ตรวจสอบว่ามีข้อความหรือไม่
        if (friendName) {
            // สร้าง Element ของเพื่อนใหม่
            const friendTag = document.createElement('div');
            friendTag.className = 'friend-tag';
            friendTag.innerHTML = `
                <span>${friendName}</span>
                <span class="remove-btn">×</span>
            `;

            // เพิ่มเพื่อนใหม่เข้าไปในรายการ
            friendsList.appendChild(friendTag);

            // ล้างค่าในช่อง input
            friendInput.value = '';
        }
    };

    // ฟังก์ชันสำหรับลบเพื่อน
    const removeFriend = (event) => {
        // ตรวจสอบว่า element ที่คลิกมี class 'remove-btn' หรือไม่
        if (event.target.classList.contains('remove-btn')) {
            // ลบ parent element (div.friend-tag) ของปุ่มที่ถูกคลิก
            event.target.parentElement.remove();
        }
    };

    // --- การทำงานเมื่อเกิด Event ---

    // 1. เมื่อกดปุ่ม "ADD"
    addBtn.addEventListener('click', addFriend);

    // 2. เมื่อกด Enter ในช่อง input
    friendInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addFriend();
        }
    });

    // 3. เมื่อคลิกที่พื้นที่แสดงรายชื่อเพื่อน (เพื่อลบ)
    friendsList.addEventListener('click', removeFriend);

});