var mytable = "<table cellpadding=\"0\" cellspacing=\"0\"><tbody><tr>";

for (var i = 1; i < 31; i++) {
  if (i % 3 == 1 && i != 1) {
    mytable += "</tr><tr>";
  }
  mytable += "<td>[" + i + "]</td>";
}

mytable += "</tr></tbody></table>";

document.write(mytable);
