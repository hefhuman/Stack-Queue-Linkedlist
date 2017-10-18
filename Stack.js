var stacks = [];
var reverse = 0;
function stkPush() {
  var c = 0;
  if (document.getElementById('stack-value').value != "") {
    $('#stack-alert').hide();
    c = 0;
    var values = "";
    stacks.push(document.getElementById('stack-value').value);
    reverse = stacks.length - 1;
    while (reverse != -1) {
      values = values + 'index[' + c + '] : ' + stacks[reverse] + '<br>';
      c++;
      reverse--;
    }
    document.getElementById('stacked').innerHTML = values;
  } else {
    document.getElementById("stack-alert").classList.add('alert-danger');
    document.getElementById("stack-alert").innerHTML = "Can't Push with empty boxes!";
    $('#stack-alert').show();
    // document.getElementById("stack-alert").classList.remove('alert-danger'); used to removed class
  }
  document.getElementById('stack-value').value = "";
}
function stkPop() {
  if (stacks.length != 0) {
    $('#stack-alert').hide();
    var c = 0;
    var values = "";
    stacks.pop();
    reverse = stacks.length - 1;
    c = 0;
    while (reverse != -1) {
      values = values + 'index[' + c + '] : ' + stacks[reverse] + '<br>';
      c++;
      reverse--;
    }
    document.getElementById('stacked').innerHTML = values;
	 document.getElementById("stack-alert").classList.add('alert-info');
	 document.getElementById("stack-alert").classList.remove('alert-danger');
    document.getElementById("stack-alert").innerHTML = "Successfully Pop!";
    $('#stack-alert').show();
  } else {
    document.getElementById("stack-alert").classList.add('alert-danger');
    document.getElementById("stack-alert").innerHTML = "Can't Pop with empty stack!";
    $('#stack-alert').show();
  }
}
function stkPeek() {
  if (stacks.length != 0) {
    document.getElementById("stack-alert").classList.remove('alert-danger');
    document.getElementById("stack-alert").classList.add('alert-info');
    document.getElementById("stack-alert").innerHTML = 'Front is : ' + stacks[stacks.length - 1];
    $('#stack-alert').show();
  } else {
    document.getElementById("stack-alert").classList.remove('alert-info');
    document.getElementById("stack-alert").classList.add('alert-danger');
    document.getElementById("stack-alert").innerHTML = "Error no items on stack";
    $('#stack-alert').show();
  }
}
// Function here is no longer used because we comment the html element intput back
function stkBack() {
  if (stacks.length != 0) {
    document.getElementById("stack-alert").classList.remove('alert-danger');
    document.getElementById("stack-alert").classList.add('alert-info');
    document.getElementById("stack-alert").innerHTML = 'Back is : ' + stacks[0];
    $('#stack-alert').show();
  } else {
    document.getElementById("stack-alert").classList.remove('alert-info');
    document.getElementById("stack-alert").classList.add('alert-danger');
    document.getElementById("stack-alert").innerHTML = "Error no items on stack";
    $('#stack-alert').show();
  }
}
function stkCount() {
  if (stacks.length != 0) {
    document.getElementById("stack-alert").classList.remove('alert-danger');
    document.getElementById("stack-alert").classList.add('alert-info');
    document.getElementById("stack-alert").innerHTML = stacks.length;
    $('#stack-alert').show();
  } else {
    document.getElementById("stack-alert").classList.remove('alert-info');
    document.getElementById("stack-alert").classList.add('alert-danger');
    document.getElementById("stack-alert").innerHTML = 'Nothing to count no stacks';
    $('#stack-alert').show();
  }
}
function stkIsEmpty() {
  if (stacks.length == 0) {
    document.getElementById("stack-alert").classList.add('alert-info');
    document.getElementById("stack-alert").innerHTML = 'Yes';
    $('#stack-alert').show();
  } else {
    document.getElementById("stack-alert").classList.add('alert-info');
    document.getElementById("stack-alert").innerHTML = 'No';
    $('#stack-alert').show();
  }
}
function stkFind() {
  var found = false;
  var indx = [];
  var count = -1;
  if (document.getElementById('stack-value').value != "") {
    if (stacks.length != 0) {
      var mask = stacks.length;
      for (var c = 0; c < stacks.length; c++) {
        mask--;
        if (stacks[c] == document.getElementById('stack-value').value) {
          count++;
          indx[count] = 'index[' + mask + '] = ' + stacks[c];
          found = true;
        }
      }
      if (found == false) {
        document.getElementById("stack-alert").classList.remove('alert-danger');
        document.getElementById("stack-alert").classList.add('alert-info');
        document.getElementById("stack-alert").innerHTML = 'sorry cannot find!';
        $('#stack-alert').show();
      } else {
        document.getElementById("stack-alert").classList.remove('alert-danger');
        document.getElementById("stack-alert").classList.add('alert-info');
        document.getElementById("stack-alert").innerHTML = indx;
        $('#stack-alert').show();
      }
    } else {
      document.getElementById("stack-alert").classList.remove('alert-info');
      document.getElementById("stack-alert").classList.add('alert-danger');
      document.getElementById("stack-alert").innerHTML = 'Error no items on stack';
      $('#stack-alert').show();
    }
  } else {
    document.getElementById("stack-alert").classList.remove('alert-info');
    document.getElementById("stack-alert").classList.add('alert-danger');
    document.getElementById("stack-alert").innerHTML = "Can't Find with empty boxes!";
    $('#stack-alert').show();
  }
  document.getElementById('stack-value').value = "";
}