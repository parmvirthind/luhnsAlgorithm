function luhnAlgorithm(id) {
  var id = id.toString();
  id = id.split('');
  id = id.map(function(x) {
    return Number(x);
  });

  for(i = id.length - 2; i >= 0; i = i-2) {
    id[i] = id[i] * 2;
    if(id[i] >= 10) {
      id[i] = id[i] - 9;
    }
  }

  id = id.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  if(id %10 == 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = luhnAlgorithm;