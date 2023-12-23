module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php?controller=contact',
    elements: {
      subjectHeading:'#uniform-id_contact',
      choose:'#id_contact > option:nth-child(1)',
      customerService:'#id_contact > option:nth-child(2)',
      webmaster:'#id_contact > option:nth-child(3)',
      emailAddress:'#email',
      orderReference:'#id_order',
      fileUpload:'#fileUpload',
      noFileSelected:'#uniform-fileUpload > span.filename',
      messageBox:'#message',
      submitButton:'#submitMessage',
      alert:'.alert',
      },
  };