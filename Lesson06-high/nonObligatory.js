let week = ['monday', 'tuesday', 'wednesday', 'thursday',
    'friday', 'saturday', 'sunday'],
    
    today = new Date(2019, 8, 3);

week.forEach (function(item, i, arr) {
  if (i >= 5) {
      console.log('%c%s', 'font-style: italic', item);
  } else  if (i == (today.getDay() - 1) ) {
      console.log('%c%s', 'font-weight: bold', item);
  } else {
      console.log(item);
  }
});
