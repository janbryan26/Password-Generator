function Generate() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("password").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "api.generate.php", true);
    xhttp.send();
  }



