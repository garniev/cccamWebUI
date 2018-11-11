$(document).ready(function () {

  $('#btnGetClinesForokeys').click(function () {
		$('#clinesTextArea').empty();
		$('#clinesTextArea').val("Loading...");

    $.ajax({
			url: 'https://docs.google.com/feeds/download/documents/export/Export?id=1CiYpWvLGyro-lXRHABpFC1jgD4XeACmNhas6UTSH3AQ&exportFormat=txt',
			success: function (data) {
				$('#clinesTextArea').val(data);
				var allClines = $('#clinesTextArea').val().split('\n');
				$('#clinesTextArea').empty();
				var textData = '';

				for (var i = 0; i < allClines.length; i++) {
					var fields = allClines[i].trim().split(' ');
          if (fields.length == 5 && fields[0] == 'C:') {
            textData = textData + 'C: ' + fields[1] + ' ' + fields[2] + ' ' + fields[3] + ' ' + fields[4] + '\n';
          } else if (fields.length == 6 && fields[0] == 'N:') {
            textData = textData + 'N: ' + fields[1] + ' ' + fields[2] + ' ' + fields[3] + ' ' + fields[4] + ' ' + fields[5] + '\n';
          } else {
            continue;
          }
				}

				$('#clinesTextArea').empty();
				$('#clinesTextArea').val(textData);
			}
		});
	});

  $('#btnGetClinesAalamsat').click(function () {
    jQuery.ajax = (function (_ajax) {
      var protocol = location.protocol,
        hostname = location.hostname,
        exRegex = RegExp(protocol + '//' + hostname),
        YQL = 'http' + (/^https/.test(protocol) ? 's' : '') + '://query.yahooapis.com/v1/public/yql?callback=?',
        query = 'select * from html where url="{URL}" and xpath="*"';

      function isExternal(url) {
        return !exRegex.test(url) && /:\/\//.test(url);
      }

      return function (o) {
        var url = o.url;
        if (/get/i.test(o.type) && !/json/i.test(o.dataType) && isExternal(url)) {
          o.url = YQL;
          o.dataType = 'json';
          o.data = {
            q: query.replace(
              '{URL}',
              url + (o.data ?
                (/\?/.test(url) ? '&' : '?') + jQuery.param(o.data) :
                '')
            ),
            format: 'xml'
          };
          if (!o.success && o.complete) {
            o.success = o.complete;
            delete o.complete;
          }
          o.success = (function (_success) {
            return function (data) {
              if (_success) {
                _success.call(this, {
                  responseText: data.results[0].replace(/<script[^>]+?\/>|<script(.|\s)*?\/script>/gi, '')
                }, 'success');
              }
            };
          })(o.success);
        }

        return _ajax.apply(this, arguments);
      };

    })(jQuery.ajax);

    $('#clinesTextArea').empty();
    $('#clinesTextArea').val("Loading...");
    $.ajax({
      url: 'http://www.aalamsat.net/category/digital/',
      type: 'GET',
      success: function (res) {
        var myHtml = $(res.responseText).find('.entry');
        var result = '';
        myHtml.each(function () {
          result = result + $(this).find("p").text();
        });

        var allClines = result.split('\n');
        var textData = '';

        for (var i = 0; i < allClines.length; i++) {
          var fields = allClines[i].trim().split(' ');
          if (fields.length == 5 && fields[0] == 'C:') {
            textData = textData + 'C: ' + fields[1] + ' ' + fields[2] + ' ' + fields[3] + ' ' + fields[4] + '\n';
          } else if (fields.length == 6 && fields[0] == 'N:') {
            textData = textData + 'N: ' + fields[1] + ' ' + fields[2] + ' ' + fields[3] + ' ' + fields[4] + ' ' + fields[5] + '\n';
          } else {
            continue;
          }
        }
        $('#clinesTextArea').empty();
        $('#clinesTextArea').val(textData);
      }
    });
  });

  $('#btnGetClinesTestious').click(function () {
		jQuery.ajax = (function (_ajax) {
			var protocol = location.protocol,
				hostname = location.hostname,
				exRegex = RegExp(protocol + '//' + hostname),
				YQL = 'http' + (/^https/.test(protocol) ? 's' : '') + '://query.yahooapis.com/v1/public/yql?callback=?',
				query = 'select * from html where url="{URL}" and xpath="*"';

			function isExternal(url) {
				return !exRegex.test(url) && /:\/\//.test(url);
			}

			return function (o) {
				var url = o.url;
				if (/get/i.test(o.type) && !/json/i.test(o.dataType) && isExternal(url)) {
					o.url = YQL;
					o.dataType = 'json';
					o.data = {
						q: query.replace(
							'{URL}',
							url + (o.data ?
								(/\?/.test(url) ? '&' : '?') + jQuery.param(o.data) :
								'')
						),
						format: 'xml'
					};
					if (!o.success && o.complete) {
						o.success = o.complete;
						delete o.complete;
					}
					o.success = (function (_success) {
						return function (data) {
							if (_success) {
								_success.call(this, {
									responseText: data.results[0].replace(/<script[^>]+?\/>|<script(.|\s)*?\/script>/gi, '')
								}, 'success');
							}

						};
					})(o.success);
				}

				return _ajax.apply(this, arguments);
			};

		})(jQuery.ajax);

		$('#clinesTextArea').empty();
		$('#clinesTextArea').val("Loading...");

		$.ajax({
			url: 'http://www.testious.com/free-cccam-servers/',
			type: 'GET',
			success: function (res) {

				var myHtml = $(res.responseText).find('.text');
				var result = '';
				myHtml.each(function () {
					result = result + $(this).text();
				});

				var allClines = result.split('#');
				var textData = '';

				for (var i = 0; i < allClines.length; i++) {
					var fields = allClines[i].trim().split(' ');
          if (fields.length == 5 && fields[0] == 'C:') {
            textData = textData + 'C: ' + fields[1] + ' ' + fields[2] + ' ' + fields[3] + ' ' + fields[4] + '\n';
          } else if (fields.length == 6 && fields[0] == 'N:') {
            textData = textData + 'N: ' + fields[1] + ' ' + fields[2] + ' ' + fields[3] + ' ' + fields[4] + ' ' + fields[5] + '\n';
          } else {
            continue;
          }
				}
				$('#clinesTextArea').empty();
				$('#clinesTextArea').val(textData);
			}
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


function sendClineForm(position) {
	var url = 'http://' + $('#decoderIp').val() + ':9999';
  var clineType = $('#form_' + position + ' [name="type"]').val();

	var data = {
		num: $('#form_' + position + ' [name="num"]').val(),
		url: $('#form_' + position + ' [name="url"]').val(),
		tcp: $('#form_' + position + ' [name="tcp"]').val(),
		name: $('#form_' + position + ' [name="name"]').val(),
		psw: $('#form_' + position + ' [name="psw"]').val(),
    des: clineType == 'N:' ? $('#form_' + position + ' [name="des"]').val() : '',
		SerType: clineType == 'C:' ? 'cccam' : 'NewCS',
		update: 'Update'
	};

	request = $.ajax({
		type: "POST",
		crossDomain: true,
		dataType: "xml",
		mimeType: "text/xml",
		accepts: "text/xml",
		url: url,
		data: data,
		beforeSend: function () {
			$("#result_" + position).html('<img style="height:20px" src="http://i.imgur.com/1MZrMhS.gif"/>');
		},
		complete: function (jqXHR, textStatus) {
			if (textStatus === 'timeout') {
				$("#result_" + position).html('<img style="height:20px" src="http://i.imgur.com/qStQE2t.gif"/>');
			} else {
				$("#result_" + position).html('<img style="height:20px" src="http://i.imgur.com/nUnBpQb.png"/>');
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
  $('#clinesTextArea').empty();
  $('#btnUpdateAllClines').hide();
  $('#btnCleanData').hide();
}

function btnProcessDataClick() {
	$('#allClinesForm').html('');
	$('#btnUpdateAllClines').hide();
  $('#btnCleanData').hide();

	var decoderIp = $('#decoderIp').val();
	var allClines = $('#clinesTextArea').val().trim().split('\n');

	var position = 0;
	for (var i = 0; i < allClines.length; i++) {
		var fields = allClines[i].trim().split(' ');

    if (position > 39) {
      continue;
    }

    var clineType = fields[0];
		if (clineType == 'C:' && fields.length != 5) {
      continue;
    } else if (clineType == 'N:' && fields.length != 6) {
      continue;
    }

		position++;

		$('#allClinesForm').append('<form class="form-inline serverset" role="form" id="form_' + i + '" formRowId="' + i + '" action="http://' + decoderIp + '" method="post" name="serverset" target="_blank"></form>');
		$('#form_' + i).append('<input type="text" class="form-control" name="num" style="width: 50px;" value="' + position + '"/>');
    $('#form_' + i).append('<input type="text" class="form-control" name="type" style="width: 50px;" value="' + fields[0] + '"/>');
		$('#form_' + i).append('<input type="text" class="form-control" name="url" value="' + fields[1] + '"/>');
		$('#form_' + i).append('<input type="text" class="form-control" name="tcp" value="' + fields[2] + '"/>');
		$('#form_' + i).append('<input type="text" class="form-control" name="name" value="' + fields[3] + '"/>');
		$('#form_' + i).append('<input type="text" class="form-control" name="psw" value="' + fields[4] + '"/>');
    if (fields[0] == 'C:'){
      $('#form_' + i).append('<input type="text" class="form-control" name="des" value="" disabled />');
    } else if (fields[0] == 'N:'){
      $('#form_' + i).append('<input type="text" class="form-control" name="des" value="' + fields[5] + '"/>');
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
