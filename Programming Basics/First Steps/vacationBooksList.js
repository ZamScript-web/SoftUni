function vacationBookList(pages, pagesPerHour, days){
    let timeForBook = pages / pagesPerHour;
    let needHoursPerDay = timeForBook / days;

    console.log(needHoursPerDay);
}

vacationBookList(212, 20, 2);