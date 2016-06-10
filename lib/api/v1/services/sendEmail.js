var Promise = require('bluebird');

// var mandrillClient = require('./mandrillClient');

module.exports = sendEmailRoute;

function sendEmailRoute(req, res) {
  var fromEmail = req.body.fromEmail;
  var fromName = req.body.fromName;
  var globalMergeVars = req.body.globalMergeVars;
  var templateName = req.body.templateName;
  var toEmailArray = req.body.toEmailArray;
  var subject = req.body.subject;
  var inlineCSS = req.body.inlineCSS;

  if (!subject || !templateName || !toEmailArray || !fromEmail || !fromName || !globalMergeVars) {
    return res.json({error: 'You didn\'t specify enough parameters'});
  }

  sendEmail().then(sendMandrillSuccess(res), sendMandrillError(res));

  function sendEmail() {
    return new Promise(function(resolve, reject) {
      resolve();
      // mandrillClient.messages.sendTemplate(
      //   {
      //     // jscs:disable disallowQuotedKeysInObjects
      //     'template_name': templateName,
      //     'template_content': [],
      //     'message': {
      //       'to': toEmailArray,
      //       'subject': subject,
      //       'from_email': fromEmail,
      //       'from_name': fromName,
      //       'global_merge_vars': globalMergeVars,
      //       'htmlmessage': '',
      //       'inline_css': inlineCSS || false
      //     }
      //   },
      //   resolve,
      //   reject
      // );
    });
  }

  function sendMandrillSuccess(resObject) {
    return function(mandrillResponse) {
      resObject.json(mandrillResponse);
    };
  }

  function sendMandrillError(resObject) {
    return function(mandrillResponse) {
      resObject.json(mandrillResponse);
    };
  }

}
