function totalMemoryCost(product) {
    const costOfMemory = document.getElementById('memory-cost');
    costOfMemory.innerText = product;
    const costOfMemoryAmount = parseInt(costOfMemory.innerText);
    return costOfMemoryAmount;
    // getTotalValueOfInput()
};
function totalStorageCost(product) {
    const costOfMemory = document.getElementById('storage-cost');
    costOfMemory.innerText = product;
    const costOfMemoryAmount = parseInt(costOfMemory.innerText);
    return costOfMemoryAmount;
    // getTotalValueOfInput()
};
function totalDeliveryCost(product) {
    const costOfMemory = document.getElementById('delivery-cost');
    costOfMemory.innerText = product;
    const costOfMemoryAmount = parseInt(costOfMemory.innerText);
    return costOfMemoryAmount;
    // getTotalValueOfInput()
};

function getTotalInput() {
    const bestPrice = document.getElementById('best-cost').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalCost = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    const totalCostOfSold = document.getElementById('total-cost').innerText = (totalCost);
    return totalCostOfSold;

}

document.getElementById('memory-first').addEventListener('click', function () {
    const firstMemoryCost = totalMemoryCost(0);
    getTotalInput()
});
document.getElementById('memory-second').addEventListener('click', function () {
    const secondMemoryCost = totalMemoryCost(180);
    getTotalInput()
});
document.getElementById('storage-first').addEventListener('click', function () {
    firstStorageCost = totalStorageCost(0);
    getTotalInput()
});
document.getElementById('storage-second').addEventListener('click', function () {
    firstStorageCost = totalStorageCost(100);
    getTotalInput()
});
document.getElementById('storage-thired').addEventListener('click', function () {
    secondStorageCost = totalStorageCost(180);
    getTotalInput()
});
document.getElementById('delivery-first').addEventListener('click', function () {
    firstDeliveryCost = totalDeliveryCost(0);
    getTotalInput()
});
document.getElementById('delivery-second').addEventListener('click', function () {
    secondDeliveryCost = totalDeliveryCost(20);
    getTotalInput()
});
