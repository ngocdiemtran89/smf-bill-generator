// Function to save form data as draft
function saveAsDraft() {
    const formData = {
        studentName: document.getElementById('studentName').value,
        parentName: document.getElementById('parentName').value,
        phone: document.getElementById('phone').value,
        tuition: document.getElementById('tuition').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value
    };

    // Save to localStorage
    localStorage.setItem('billDraft', JSON.stringify(formData));
    alert('Đã lưu nháp thành công!');
}

// Function to load draft if exists
function loadDraft() {
    const draft = localStorage.getItem('billDraft');
    if (draft) {
        const formData = JSON.parse(draft);
        document.getElementById('studentName').value = formData.studentName || '';
        document.getElementById('parentName').value = formData.parentName || '';
        document.getElementById('phone').value = formData.phone || '';
        document.getElementById('tuition').value = formData.tuition || '';
        document.getElementById('startDate').value = formData.startDate || '';
        document.getElementById('endDate').value = formData.endDate || '';
    }
}

// Load draft when page loads
document.addEventListener('DOMContentLoaded', loadDraft);

// Handle form submission
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
            // Clear draft after successful submission
            localStorage.removeItem('billDraft');
            document.getElementById('billForm').reset();
        } else {
            throw new Error('Có lỗi xảy ra khi tạo hóa đơn');
        }
    } catch (error) {
        alert('Có lỗi xảy ra: ' + error.message);
    }
}); 