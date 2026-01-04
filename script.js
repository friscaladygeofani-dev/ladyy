function updateTime() {
    const now = new Date();
    
    // Format Tanggal untuk Top Bar
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('current-date').innerText = now.toLocaleDateString('id-ID', options);

    // Format Jam untuk Footer
    const timeString = now.toLocaleTimeString('id-ID');
    document.getElementById('live-clock').innerText = "Waktu Akses: " + timeString;
}

setInterval(updateTime, 1000);
updateTime();