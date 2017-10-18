var Queues = [];
function QuePush() {
  if (document.getElementById('queue-value').value != "") {
    var values = "";
    Queues.push(document.getElementById('queue-value').value);
    for (var c = 0; c < Queues.length; c++) {
      values = values + 'index[' + c + '] : ' + Queues[c] + '<br>';
    }
    document.getElementById('queued').innerHTML = values;
  } else {
    document.getElementById("queue-alert").classList.add('alert-danger');
    document.getElementById("queue-alert").innerHTML = "Can't Push with empty boxes!";
    $('#queue-alert').show();
  }
  document.getElementById('queue-value').value = "";
}
function QuePop() {
  if (Queues.length != 0) {
    var values = "";
    Queues.shift();
    for (var c = 0; c < Queues.length; c++) {
      values = values + 'index[' + c + '] : ' + Queues[c] + '<br>';
    }
    document.getElementById('queued').innerHTML = values;
	 document.getElementById("queue-alert").classList.add('alert-info');
	 document.getElementById("queue-alert").classList.remove('alert-danger');
    document.getElementById("queue-alert").innerHTML = "Successfully Dequeue!";
    $('#queue-alert').show();
  } else {
    document.getElementById("queue-alert").classList.add('alert-danger');
    document.getElementById("queue-alert").innerHTML = "Can't Dequeue with empty Queue!";
    $('#queue-alert').show();
  }
  document.getElementById('queue-value').value = "";
}
function queFront() {
  if (Queues != 0) {
    document.getElementById("queue-alert").classList.remove('alert-danger');
    document.getElementById("queue-alert").classList.add('alert-info');
    document.getElementById("queue-alert").innerHTML = 'Front is : ' + Queues[0];
    $('#queue-alert').show();
  } else {
    document.getElementById("queue-alert").classList.remove('alert-info');
    document.getElementById("queue-alert").classList.add('alert-danger');
    document.getElementById("queue-alert").innerHTML = "Error no items on Queue";
    $('#queue-alert').show();
  }
}
function queBack() {
  if (Queues != 0) {
    document.getElementById("queue-alert").classList.remove('alert-danger');
    document.getElementById("queue-alert").classList.add('alert-info');
    document.getElementById("queue-alert").innerHTML = 'Back is : ' + Queues[Queues.length - 1];
    $('#queue-alert').show();
  } else {
    document.getElementById("queue-alert").classList.remove('alert-info');
    document.getElementById("queue-alert").classList.add('alert-danger');
    document.getElementById("queue-alert").innerHTML = "Error no items on Queue";
    $('#queue-alert').show();
  }
}
function queCount() {
  if (Queues != 0) {
    document.getElementById("queue-alert").classList.remove('alert-danger');
    document.getElementById("queue-alert").classList.add('alert-info');
    document.getElementById("queue-alert").innerHTML = Queues.length;
    $('#queue-alert').show();
  } else {
    document.getElementById("queue-alert").classList.remove('alert-info');
    document.getElementById("queue-alert").classList.add('alert-danger');
    document.getElementById("queue-alert").innerHTML = 'Nothing to count no queues';
    $('#queue-alert').show();
  }
}
function queIsEmpty() {
  if (Queues == 0) {
    document.getElementById("queue-alert").classList.add('alert-info');
    document.getElementById("queue-alert").innerHTML = 'Yes';
    $('#queue-alert').show();
  } else {
    document.getElementById("queue-alert").classList.add('alert-info');
    document.getElementById("queue-alert").innerHTML = 'No';
    $('#queue-alert').show();
  }
}
function queFind() {
  var found = false;
  var indx = [];
  var count = -1;
  if (document.getElementById('queue-value').value != "") {
    if (Queues.length != 0) {
      for (var c = 0; c < Queues.length; c++) {
        if (Queues[c] == document.getElementById('queue-value').value) {
          count++;
          indx[count] = 'index[' + c + '] = ' + Queues[c];
          found = true;
        }
      }
      if (found == false) {
        document.getElementById("queue-alert").classList.remove('alert-danger');
        document.getElementById("queue-alert").classList.add('alert-info');
        document.getElementById("queue-alert").innerHTML = 'sorry cannot find!';
        $('#queue-alert').show();
      } else {
        document.getElementById("queue-alert").classList.remove('alert-danger');
        document.getElementById("queue-alert").classList.add('alert-info');
        document.getElementById("queue-alert").innerHTML = indx;
        $('#queue-alert').show();
      }
    } else {
      document.getElementById("queue-alert").classList.remove('alert-info');
      document.getElementById("queue-alert").classList.add('alert-danger');
      document.getElementById("queue-alert").innerHTML = 'Error no items on queue';
      $('#queue-alert').show();
    }
  } else {
    document.getElementById("queue-alert").classList.remove('alert-info');
    document.getElementById("queue-alert").classList.add('alert-danger');
    document.getElementById("queue-alert").innerHTML = "Can't Find with empty boxes!";
    $('#queue-alert').show();
  }
  document.getElementById('queue-value').value = "";
}
