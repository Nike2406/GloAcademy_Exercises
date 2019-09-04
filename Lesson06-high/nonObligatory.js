let week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday',
    'friday', 'saturday'],
    
    today = new Date();

week.forEach (function(item, i, arr) {
  if (i == 6 || i == 0) {
      console.log('%c%s', 'font-style: italic', item);
  } else  if (i == (today.getDay()) ) {
      console.log('%c%s', 'font-weight: bold', item);
  } else {
      console.log(item);
  }
});
