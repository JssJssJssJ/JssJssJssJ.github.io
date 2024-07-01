document.addEventListener("DOMContentLoaded", () => {
    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');

    const currentDate = new Date();

    const futureDate1 = new Date('2024-11-14');
    const timeDifference1 = futureDate1 - currentDate;
    const daysDifference1 = Math.ceil(timeDifference1 / (1000 * 60 * 60 * 24));
    result1.textContent = `Enää ${daysDifference1} päivää!`;

    const futureDate2 = new Date('2024-12-04');
    const timeDifference2 = futureDate2 - currentDate;
    const daysDifference2 = Math.ceil(timeDifference2 / (1000 * 60 * 60 * 24));
    result2.textContent = `Enää ${daysDifference2} päivää!`;
});
