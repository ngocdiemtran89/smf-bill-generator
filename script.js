document.getElementById('billForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
        studentName: document.getElementById('studentName').value,
        parentName: document.getElementById('parentName').value,
        phone: document.getElementById('phone').value,
        tuition: document.getElementById('tuition').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value
    };

    try {
        // Replace this URL with your Google Apps Script Web App URL after deployment
        const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Hóa đơn đã được tạo thành công!');
            document.getElementById('billForm').reset();
        } else {
            throw new Error('Có lỗi xảy ra khi tạo hóa đơn');
        }
    } catch (error) {
        alert('Có lỗi xảy ra: ' + error.message);
    }
}); 