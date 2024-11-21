function downloadFile() {
    const link = document.createElement('a');
    link.href = 'f/Survival_Unstructured_100_Day.mcworld'; // ใส่ URL ของไฟล์ที่ต้องการดาวน์โหลด
    link.download = 'Survival_Unstructured_100_Day.mcworld'; // ชื่อไฟล์ที่จะถูกดาวน์โหลด
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
