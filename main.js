function calculateTotalAndAverage() {
    // Get input values
    const mathNote = parseFloat(document.getElementById('mathNote').value) || 0;
    const mathCoefficient = parseFloat(document.getElementById('mathCoefficient').value) || 0;
    const physiqueNote = parseFloat(document.getElementById('physiqueNote').value) || 0;
    const physiqueCoefficient = parseFloat(document.getElementById('physiqueCoefficient').value) || 0;
    const infoNote = parseFloat(document.getElementById('infoNote').value) || 0;
    const infoCoefficient = parseFloat(document.getElementById('infoCoefficient').value) || 0;

    // Calculate Note*Coefficient and update the table cell
    const mathTotal = mathNote * mathCoefficient;
    document.getElementById('mathTotal').textContent = mathTotal;

    const physiqueTotal = physiqueNote * physiqueCoefficient;
    document.getElementById('physiqueTotal').textContent = physiqueTotal;

    const infoTotal = infoNote * infoCoefficient;
    document.getElementById('infoTotal').textContent = infoTotal;

    // Calculate Total Coefficient and Total
    const totalCoefficient = mathCoefficient + physiqueCoefficient + infoCoefficient;
    const total = mathTotal + physiqueTotal + infoTotal;

    document.getElementById('totalCoefficient').textContent = totalCoefficient;
    document.getElementById('total').textContent = total;

    // Calculate Average
    const average = total / totalCoefficient || 0;
    document.getElementById('average').textContent = average.toFixed(2);
  }