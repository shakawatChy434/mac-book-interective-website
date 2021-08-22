/* Memory-part  */
function totalMemoryCost(product) {
    const costOfMemory = document.getElementById('memory-cost');
    costOfMemory.innerText = product;
    const costOfMemoryAmount = parseInt(costOfMemory.innerText);
    return costOfMemoryAmount;
};
/* storage-part  */
function totalStorageCost(product) {
    const costOfStorage = document.getElementById('storage-cost');
    costOfStorage.innerText = product;
    const costOfStorageAmount = parseInt(costOfStorage.innerText);
    return costOfStorageAmount;
};
/* delivery-part  */
function totalDeliveryCost(product) {
    const costOfDelivery = document.getElementById('delivery-cost');
    costOfDelivery.innerText = product;
    const costOfDeliveryAmount = parseInt(costOfDelivery.innerText);
    return costOfDeliveryAmount;
};
function getTotalInput() {
    /*  calculation-total-cost-of-sold-start  */
    const bestPrice = document.getElementById('best-cost').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalCost = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    const totalCostOfSold = document.getElementById('total-cost').innerText = totalCost;
    /* footer-total-part-start  */
    document.getElementById('footer-total').innerText = totalCostOfSold;
    /* footer-total-part-end. */
    return totalCostOfSold;
    /*  calculation-total-cost-of-sold-end.  */
}
/* Promo-code-part-start */
const promoApply = document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInputFiled = document.getElementById('input-value');
    const promoCodeValue = promoInputFiled.value;
    const discountTotalFiled = document.getElementById('footer-total');
    const grandTotal = discountTotalFiled.innerText;
    if (promoCodeValue.toLowerCase() == 'stevekaku') {
        discountTotalFiled.innerText = (grandTotal - (grandTotal * 0.2));
        promoInputFiled.value = '';
    }
});
/* Promo-code-part-end */

/* mamorey-part-start  */
document.getElementById('memory-first').addEventListener('click', function () {
    const firstMemoryCost = totalMemoryCost(0);
    getTotalInput()
});
document.getElementById('memory-second').addEventListener('click', function () {
    const secondMemoryCost = totalMemoryCost(180);
    getTotalInput()
});
/*mamorey-part-end  */
/*storage-part-start  */
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
/*storage-part-end  */
/*delivery-part-start  */
document.getElementById('delivery-first').addEventListener('click', function () {
    firstDeliveryCost = totalDeliveryCost(0);
    getTotalInput()
});
document.getElementById('delivery-second').addEventListener('click', function () {
    secondDeliveryCost = totalDeliveryCost(20);
    getTotalInput()
});
/*delivery-part-end  */

