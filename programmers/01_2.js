function getDayName(a,b){
    var date = new Date(2016, (a - 1), b);
      return date.toString().slice(0, 3).toUpperCase();
  }


//  ixymori , 억만장자 , wonho , - , Jang Kuk Yeong 외 3 명

function getDayName(a,b){
    var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var date = new Date(`2016-${a}-${b}`);
  var day = date.getDay()
    return arr[day];
}

// 류한경