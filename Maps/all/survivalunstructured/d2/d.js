function downloadFile() {
    const link = document.createElement('a');
    link.href = 'f/Survival_Unstructured.zip'; // ใส่ URL ของไฟล์ที่ต้องการดาวน์โหลด
    link.download = 'your_file.zip'; // ชื่อไฟล์ที่จะถูกดาวน์โหลด
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
