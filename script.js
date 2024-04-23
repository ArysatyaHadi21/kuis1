function hitung() {
    const jenisHitung = document.querySelector('input[name="jenisHitung"]:checked').value;
    const checkboxes = document.querySelectorAll('input[name="bangunRuang"]:checked');
    let result = "";
  
    checkboxes.forEach((checkbox) => {
      const bangunRuang = checkbox.value;
      let hasil;
  
      if (jenisHitung === "volume") {
        hasil = hitungVolume(bangunRuang);
      } else if (jenisHitung === "luasPermukaan") {
        hasil = hitungLuasPermukaan(bangunRuang);
      }
  
      result += `Bangun Ruang: ${bangunRuang}<br>`;
      result += `${jenisHitung === "volume" ? "Volume" : "Luas Permukaan"}: ${hasil.toFixed(2)}<br><br>`;
    });
  
    document.getElementById("result").innerHTML = result;
  }
  
  function hitungVolume(bangunRuang) {
    if (bangunRuang === "balok") {
      const panjang = parseFloat(prompt("Masukkan panjang balok:"));
      const lebar = parseFloat(prompt("Masukkan lebar balok:"));
      const tinggi = parseFloat(prompt("Masukkan tinggi balok:"));
      return panjang * lebar * tinggi;
    } else if (bangunRuang === "kubus") {
      const sisi = parseFloat(prompt("Masukkan panjang sisi kubus:"));
      return Math.pow(sisi, 3);
    } else if (bangunRuang === "tabung") {
      const jariJari = parseFloat(prompt("Masukkan jari-jari tabung:"));
      const tinggi = parseFloat(prompt("Masukkan tinggi tabung:"));
      return Math.PI * Math.pow(jariJari, 2) * tinggi;
    }
  }
  
  function toggleCheckbox(currentCheckbox) {
    const checkboxes = document.querySelectorAll('input[name="bangunRuang"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox !== currentCheckbox && checkbox.checked) {
        checkbox.checked = false;
      }
    });
  }
  