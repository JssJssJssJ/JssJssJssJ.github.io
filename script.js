document.addEventListener("DOMContentLoaded", () => {
    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');
    const result3 = document.getElementById('result3');

    const currentDate = new Date();

    let futureDate1 = new Date('2024-11-14');
    let timeDifference1 = futureDate1 - currentDate;
    let daysDifference1 = Math.ceil(timeDifference1 / (1000 * 60 * 60 * 24));
	while (daysDifference1 < 0) {
		futureDate1.setFullYear(futureDate1.getFullYear() + 1);
		timeDifference1 = futureDate1 - currentDate;
    	daysDifference1 = Math.ceil(timeDifference1 / (1000 * 60 * 60 * 24));		
	}
    if (daysDifference1 == 0) {
		result1.textContent = `Hyvää syntymäpäivää!`;
	}
	else {
		result1.textContent = `Syntymäpäivään enää ${daysDifference1} päivää!`;
	}
	
    let futureDate2 = new Date('2024-12-04');
    let timeDifference2 = futureDate2 - currentDate;
    let daysDifference2 = Math.ceil(timeDifference2 / (1000 * 60 * 60 * 24));
	while (daysDifference2 < 0) {
		futureDate2.setFullYear(futureDate2.getFullYear() + 1);
		timeDifference2 = futureDate2 - currentDate;
    	daysDifference2 = Math.ceil(timeDifference2 / (1000 * 60 * 60 * 24));		
	}
    if (daysDifference2 == 0) {
		result2.textContent = `Hyvää syntymäpäivää!`;
	}
	else {
		result2.textContent = `Syntymäpäivään enää ${daysDifference2} päivää!`;
	}

    let futureDate3 = new Date('2024-12-24');
    let timeDifference3 = futureDate3 - currentDate;
    let daysDifference3 = Math.ceil(timeDifference3 / (1000 * 60 * 60 * 24));
	while (daysDifference3 < 0) {
		futureDate3.setFullYear(futureDate3.getFullYear() + 1);
		timeDifference3 = futureDate3 - currentDate;
    	daysDifference3 = Math.ceil(timeDifference3 / (1000 * 60 * 60 * 24));		
	}
    if (daysDifference3 == 0) {
		result3.textContent = `Hyvää joulua!`;
	}
	else {
		result3.textContent = `Jouluun enää ${daysDifference3} päivää!`;
	}

});
