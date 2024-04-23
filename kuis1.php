<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kalkulator Bangun Ruang</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Kalkulator Bangun Ruang</h1>
    <form id="calculatorForm">
      <input type="radio" name="jenisHitung" value="volume" onclick="toggleCheckbox(this)">
      <label for="volume">Volume</label><br>
      <input type="radio" name="jenisHitung" value="luasPermukaan" onclick="toggleCheckbox(this)">
      <label for="luasPermukaan">Luas Permukaan</label><br>
      
      <input type="checkbox" name="bangunRuang" value="balok" onclick="toggleCheckbox(this)">
      <label for="balok">Balok</label><br>
      <input type="checkbox" name="bangunRuang" value="kubus" onclick="toggleCheckbox(this)">
      <label for="kubus">Kubus</label><br>
      <input type="checkbox" name="bangunRuang" value="tabung" onclick="toggleCheckbox(this)">
      <label for="tabung">Tabung</label><br>

      <label>
        <input type="checkbox" name="bangunRuang" value="luasBalok"> Luas Permukaan Balok
      </label>
      <br>
      <label>
        <input type="checkbox" name="bangunRuang" value="luasKubus"> Luas Permukaan Kubus
      </label>
      <br>
      <label>
        <input type="checkbox" name="bangunRuang" value="luasTabung"> Luas Permukaan Tabung
      </label>
      <br><br>
      <div>
        <label for="inputValue">Masukkan Nilai:</label>
        <input type="number" id="inputValue">
      </div>
      <br>
      <button type="button" onclick="hitung()">Hitung</button>
    </form>
    <div id="result"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>
