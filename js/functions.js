$(document).ready(function () {

  $('#btnGetClinesBossCccam').click(function() {
    $('#clinesTextArea').empty();
    $('#clinesTextArea').val("Loading...");

    var url = 'http://www.boss-cccam.com/Test.php';
    $.getJSON('https://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data) {
        $('#clinesTextArea').empty();

        parser = new DOMParser();
        htmlDoc = parser.parseFromString(data.contents, "text/html");
        howItWorks = htmlDoc.getElementsByClassName('hk_how_it_works')[0];
        alertInfo = howItWorks.getElementsByClassName('alert-info')[0];
        strongData = alertInfo.getElementsByTagName('strong')[0];
        ccclineData = strongData.innerText.trim();
        $('#clinesTextArea').val(ccclineData);
    });
  });

  $('#btnGetClinesCccamGenerador').click(function(){
    $('#clinesTextArea').empty();
    $('#clinesTextArea').val("Loading...");

    var url = 'http://cccamgenerador.com/gratis/get2.php';
    $.getJSON('https://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data) {
        $('#clinesTextArea').empty();

        parser = new DOMParser();
        htmlDoc = parser.parseFromString(data.contents, "text/html");
        cccam = htmlDoc.getElementsByTagName('h1')[0];
        ccclineData = cccam.innerText.trim();
        $('#clinesTextArea').val(ccclineData);
    });
  });

  $('#btnGetClinesCccamGenerators').click(function(){
    $('#clinesTextArea').empty();
    $('#clinesTextArea').val("Loading...");

    var url = 'https://cccamgenerators.com/generator/get.php';
    $.getJSON('https://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data) {
        $('#clinesTextArea').empty();

        parser = new DOMParser();
        htmlDoc = parser.parseFromString(data.contents, "text/html");
        cccam = htmlDoc.getElementsByTagName('h1')[0];
        ccclineData = cccam.innerText.trim();
        $('#clinesTextArea').val(ccclineData);
    });
  });

  $('#btnGetClinesCccamGood').click(function(){
    $('#clinesTextArea').empty();
    $('#clinesTextArea').val("Loading...");

    var url = 'http://cccamgood.com/free/get2.php';
    $.getJSON('https://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data) {
        $('#clinesTextArea').empty();

        parser = new DOMParser();
        htmlDoc = parser.parseFromString(data.contents, "text/html");
        cccam = htmlDoc.getElementsByTagName('h1')[0];
        ccclineData = cccam.innerText.trim();
        $('#clinesTextArea').val(ccclineData);
    });
  });

  $('#btnGetClinesCccamSpot').click(function(){
    $('#clinesTextArea').empty();
    $('#clinesTextArea').val("Loading...");

    var url = 'http://cccamspot.com/spot/get.php';
    $.getJSON('https://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data) {
        $('#clinesTextArea').empty();

        parser = new DOMParser();
        htmlDoc = parser.parseFromString(data.contents, "text/html");
        cccam = htmlDoc.getElementsByTagName('h1')[0];
        ccclineData = cccam.innerText.trim();
        $('#clinesTextArea').val(ccclineData);
    });
  });

  $('#btnGetClinesCccamMania').click(function(){
    $('#clinesTextArea').empty();
    $('#clinesTextArea').val("Loading...");

    var url = 'http://cccammania.com/free4/get2.php';
    $.getJSON('https://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data) {
        $('#clinesTextArea').empty();

        parser = new DOMParser();
        htmlDoc = parser.parseFromString(data.contents, "text/html");
        cccam = htmlDoc.getElementsByTagName('h1')[0];
        ccclineData = cccam.innerText.trim();
        $('#clinesTextArea').val(ccclineData);
    });
  });

  $('#btnGetClinesFreeCccam').click(function(){
    $('#clinesTextArea').empty();
    $('#clinesTextArea').val("Loading...");

    var url = 'http://free-cccam.com/freecccam/get.php';
    $.getJSON('https://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data) {
        $('#clinesTextArea').empty();

        parser = new DOMParser();
        htmlDoc = parser.parseFromString(data.contents, "text/html");
        cccam = htmlDoc.getElementsByTagName('h1')[0];
        ccclineData = cccam.innerText.trim();
        $('#clinesTextArea').val(ccclineData);
    });
  });

  $('#btnGetClinesFreeCline').click(function() {
    $('#clinesTextArea').empty();
    $('#clinesTextArea').val("Loading...");

    var url = 'http://www.freecline.com/index';
    $.getJSON('https://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data) {
        $('#clinesTextArea').empty();

        parser = new DOMParser();
        htmlDoc = parser.parseFromString(data.contents, "text/html");

        tableCccams = htmlDoc.getElementById('history_table_cccam');
        tableNewcamd = htmlDoc.getElementById('history_table_newcamd');

        rowsCccams = tableCccams.getElementsByTagName('tr');
        rowsNewcamd = tableNewcamd.getElementsByTagName('tr');

        allClines = '';
        for (var i =1; i< rowsCccams.length; i++) {
          rowCccam = rowsCccams[i].getElementsByTagName('td');
          clineAvailable = rowCccam[1].getElementsByClassName('glyphicon-ok-sign').length == 1;
          if (clineAvailable) {
            allClines = allClines + rowCccam[0].innerText.trim() + '\n';
          }
        }

        for (var i =1; i< rowsNewcamd.length; i++) {
          rowCccam = rowsNewcamd[i].getElementsByTagName('td');
          clineAvailable = rowCccam[1].getElementsByClassName('glyphicon-ok-sign').length == 1;
          if (clineAvailable) {
            allClines = allClines + rowCccam[0].innerText.trim() + '\n';
          }
        }
        $('#clinesTextArea').val(allClines);
    });
  });

  $('#btnGetClinesPowerfullCccam').click(function(){
    $('#clinesTextArea').empty();
    $('#clinesTextArea').val("Loading...");

    var url = 'http://powerfullcccam.com/powerfull/get.php';
    $.getJSON('https://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data) {
        $('#clinesTextArea').empty();

        parser = new DOMParser();
        htmlDoc = parser.parseFromString(data.contents, "text/html");
        cccam = htmlDoc.getElementsByTagName('h1')[0];
        ccclineData = cccam.innerText.trim();
        $('#clinesTextArea').val(ccclineData);
    });
  });

  $('#fileSelector').change(function (event) {
    var files = event.target.files;
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#clinesTextArea').val(e.target.result);
    };
    reader.readAsText(files[0]);
  });

  var ip = getUrlParameters("ip", "", true);
  if (ip != null) {
    $('#decoderIp').val(ip);
  }
});


function sendClineForm(i) {
  var url = 'http://' + $('#decoderIp').val() + ':9999';
  var clineType = $('#form_' + i + ' [name="type"]').val();

  var data = {
    num: $('#form_' + i + ' [name="num"]').val(),
    url: $('#form_' + i + ' [name="url"]').val(),
    tcp: $('#form_' + i + ' [name="tcp"]').val(),
    name: $('#form_' + i + ' [name="name"]').val(),
    psw: $('#form_' + i + ' [name="psw"]').val(),
    SerType: clineType == 'C:' ? 'cccam' : 'NewCS',
    update: 'Update'
  };

  if (clineType == 'N:') {
    data.des = $('#form_' + i + ' [name="des"]').val();
  }

  request = $.ajax({
    type: "POST",
    crossDomain: true,
    dataType: "xml",
    mimeType: "text/xml",
    accepts: "text/xml",
    url: url,
    data: data,
    beforeSend: function () {
      $("#result_" + i).html('<img style="height:20px" src="http://i.imgur.com/1MZrMhS.gif"/>');
    },
    complete: function (jqXHR, textStatus) {
      if (textStatus === 'timeout') {
        $("#result_" + i).html('<img style="height:20px" src="http://i.imgur.com/qStQE2t.gif"/>');
      } else {
        $("#result_" + i).html('<img style="height:20px" src="http://i.imgur.com/nUnBpQb.png"/>');
      }
    },
    timeout: 4000
  });
}

function btnUpdateAllClinesClick() {
  $('form').each(function () {
    var formRowId = $(this).attr('formRowId');
    sendClineForm(formRowId);
  });
}

function btnCleanDataClick() {
  $('#allClinesForm').html('');
  $('#clinesTextArea').val('');
  $('#btnUpdateAllClines').hide();
  $('#btnCleanData').hide();
  $('#fileSelector').val('');
}

function btnProcessDataClick() {
  $('#allClinesForm').html('');
  $('#btnUpdateAllClines').hide();
  $('#btnCleanData').hide();

  var decoderIp = $('#decoderIp').val();
  var allClines = $('#clinesTextArea').val().trim().split('\n');

  if ($('#clinesTextArea').val().trim().length == 0) {
    return ;
  }

  var position = 0;
  for (var i = 0; i < allClines.length; i++) {
    var fields = allClines[i].trim().split(' ');

    if (position > 39) {
      continue;
    }

    var clineType = fields[0].toUpperCase();
    if (clineType == 'C:' && fields.length != 5) {
      continue;
    } else if (clineType == 'N:' && fields.length != 19) {
      continue;
    }

    position++;

    $('#allClinesForm').append('<form class="form-inline serverset" role="form" id="form_' + i + '" formRowId="' + i +
      '" action="http://' + decoderIp + '" method="post" name="serverset" target="_blank"></form>');
    $('#form_' + i).append('<input type="text" class="form-control" name="num" style="width: 45px;" value="' + position + '"/>');
    $('#form_' + i).append('<input type="text" class="form-control" name="type" style="width: 40px;" value="' + clineType + '"/>');
    $('#form_' + i).append('<input type="text" class="form-control" name="url" value="' + fields[1] + '"/>');
    $('#form_' + i).append('<input type="text" class="form-control" name="tcp" value="' + fields[2] + '"/>');
    $('#form_' + i).append('<input type="text" class="form-control" name="name" value="' + fields[3] + '"/>');
    $('#form_' + i).append('<input type="text" class="form-control" name="psw" value="' + fields[4] + '"/>');
    if (clineType == 'C:'){
      $('#form_' + i).append('<input type="text" class="form-control" name="des" value="" disabled />');
    } else if (clineType == 'N:'){
      $('#form_' + i).append('<input type="text" class="form-control" name="des" value="' + fields.slice(5,20).join(' ') + '"/>');
    }

    $('#form_' + i).append('<div class="input-group col-xs-1"><span class="input-group-btn"><button onclick="sendClineForm(' + i +
      ')"value="Update" class="btn btn-success" type="button">Update</button></span><span id="result_' + i + '" class="input-group-addon"></span></div>');

    $('#form_' + i).append('<br>');
    $('#allClinesForm').append('<hr class="">');

    $('#btnUpdateAllClines').show();
    $('#btnCleanData').show();
  };

}

function getUrlParameters(parameter, staticURL, decode) {
  var currLocation = (staticURL.length) ? staticURL : window.location.search;
  var parArr = currLocation.split("?");
  if (parArr.length > 1) {
    parArr = parArr[1].split("&");
  } else {
    return;
  }

  var returnBool = true;

  for (var i = 0; i < parArr.length; i++) {
    parr = parArr[i].split("=");
    if (parr[0] == parameter) {
      return (decode) ? decodeURIComponent(parr[1]) : parr[1];
      returnBool = true;
    } else {
      returnBool = false;
    }
  }

  return returnBool;
}
