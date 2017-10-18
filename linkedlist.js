var list = [];
var values = "";
function listpush() {
  if (document.getElementById('linklist-value').value != "") {
    $('#link-alert').hide();
    list.push(document.getElementById('linklist-value').value);
    values = "";
    for (var c = 0; c < list.length; c++) {
      values = values + 'index[' + c + '] : ' + list[c] + "<br>";
    }
  } else {
    document.getElementById("link-alert").classList.remove('alert-info');
    document.getElementById("link-alert").classList.add('alert-danger');
    document.getElementById("link-alert").innerHTML = "Can't Push with empty boxes!";
    $('#link-alert').show();
  }
  document.getElementById('linkedList').innerHTML = values;
  document.getElementById('linklist-value').value = "";

}
function insertIndexAt() {
  try {
    if (document.getElementById('linklist-index-value').value != "" && document.getElementById('linklist-value-at').value != "") {
      if (list.length != 0) {
        values = "";
        $('#link-alert').hide();
        list.splice(document.getElementById('linklist-index-value').value, 0, document.getElementById('linklist-value-at').value);
        for (var c = 0; c < list.length; c++) {
          values = values + 'index[' + c + '] : ' + list[c] + '<br>';
        }
        document.getElementById('linkedList').innerHTML = values;
      } else {
        document.getElementById("link-alert").classList.remove('alert-info');
        document.getElementById("link-alert").classList.add('alert-danger');
        document.getElementById("link-alert").innerHTML = "Error no items on List";
        $('#link-alert').show();
      }
    } else {
      document.getElementById("link-alert").classList.remove('alert-info');
      document.getElementById("link-alert").classList.add('alert-danger');
      document.getElementById("link-alert").innerHTML = "Please fill in the index and value boxes!";
      $('#link-alert').show();
    }
    document.getElementById('linklist-index-value').value = "";
    document.getElementById('linklist-value-at').value = "";
  } catch (err) {
    document.getElementById("link-alert").classList.remove('alert-info');
    document.getElementById("link-alert").classList.add('alert-danger');
    document.getElementById("link-alert").innerHTML = err.message;
    $('#link-alert').show();
  }
}
function remove() {
  try {
    values = "";
    if (document.getElementById('linklist-remove').value != "") {
      if (list.length != 0) {
        var x=list.indexOf(document.getElementById('linklist-remove').value);
        list.splice(x, 1);
        $('#link-alert').hide();
        for (var c = 0; c < list.length; c++) {
          values = values + 'index[' + c + '] : ' + list[c] + '<br>';
        }
        document.getElementById('linkedList').innerHTML = values;
document.getElementById("link-alert").classList.remove('alert-danger');
        document.getElementById("link-alert").classList.add('alert-info');
        document.getElementById("link-alert").innerHTML = "Successfully Removed!";
        $('#link-alert').show();
      } else {
        document.getElementById("link-alert").classList.remove('alert-info');
        document.getElementById("link-alert").classList.add('alert-danger');
        document.getElementById("link-alert").innerHTML = "Error no items on List";
        $('#link-alert').show();
      }
    } else {
      document.getElementById("link-alert").classList.remove('alert-info');
      document.getElementById("link-alert").classList.add('alert-danger');
      document.getElementById("link-alert").innerHTML = "Can't remove with empty boxes!";
      $('#link-alert').show();
    }
  } catch (err) {
    document.getElementById("link-alert").classList.remove('alert-info');
    document.getElementById("link-alert").classList.add('alert-danger');
    document.getElementById("link-alert").innerHTML = err.message;
    $('#link-alert').show();
  }
 
  document.getElementById('linklist-remove').value = "";
}
function find() {
  var found = false;
  var indx = [];
  var count = -1;
  if (document.getElementById('linklist-find').value != "") {
    if (list.length != 0) {
      for (var c = 0; c < list.length; c++) {
        if (list[c] == document.getElementById('linklist-find').value) {
          count++;
          indx[count] = 'index[' + c + '] = ' + list[c];
          found = true;
        }
      }
      if (found == false) {
        document.getElementById("link-alert").classList.remove('alert-danger');
        document.getElementById("link-alert").classList.add('alert-info');
        document.getElementById("link-alert").innerHTML = 'sorry cannot find!';
        $('#queue-alert').show();
      } else {
        document.getElementById("link-alert").classList.remove('alert-danger');
        document.getElementById("link-alert").classList.add('alert-info');
        document.getElementById("link-alert").innerHTML = indx;
        $('#link-alert').show();
      }
    } else {
      document.getElementById("link-alert").classList.remove('alert-info');
      document.getElementById("link-alert").classList.add('alert-danger');
      document.getElementById("link-alert").innerHTML = 'Error no items on List';
      $('#link-alert').show();
    }
  } else {
    document.getElementById("link-alert").classList.remove('alert-info');
    document.getElementById("link-alert").classList.add('alert-danger');
    document.getElementById("link-alert").innerHTML = "Can't Find with empty boxes!";
    $('#link-alert').show();
  }
  document.getElementById('linklist-find').value = "";
}
