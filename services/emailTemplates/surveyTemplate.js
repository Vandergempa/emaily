const keys = require('../../config/keys')

// Every mongoose instance has its own id so we can just reference that id
module.exports = (survey) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" /><!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" /><!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
      body {width: 700px;margin: 0 auto;}
      table {border-collapse: collapse;}
      table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
      img {-ms-interpolation-mode: bicubic;}
    </style>
    <![endif]-->

    <style type="text/css">
      body, p, div {
        font-family: comic sans ms,cursive;
        font-size: 14px;
      }
      body {
        color: #000000;
      }
      body a {
        color: #1188e6;
        text-decoration: none;
      }
      p { margin: 0; padding: 0; }
      table.wrapper {
        width:100% !important;
        table-layout: fixed;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      img.max-width {
        max-width: 100% !important;
      }
      .column.of-2 {
        width: 50%;
      }
      .column.of-3 {
        width: 33.333%;
      }
      .column.of-4 {
        width: 25%;
      }
      @media screen and (max-width:480px) {
        .preheader .rightColumnContent,
        .footer .rightColumnContent {
            text-align: left !important;
        }
        .preheader .rightColumnContent div,
        .preheader .rightColumnContent span,
        .footer .rightColumnContent div,
        .footer .rightColumnContent span {
          text-align: left !important;
        }
        .preheader .rightColumnContent,
        .preheader .leftColumnContent {
          font-size: 80% !important;
          padding: 5px 0;
        }
        table.wrapper-mobile {
          width: 100% !important;
          table-layout: fixed;
        }
        img.max-width {
          height: auto !important;
          max-width: 480px !important;
        }
        a.bulletproof-button {
          display: block !important;
          width: auto !important;
          font-size: 80%;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .columns {
          width: 100% !important;
        }
        .column {
          display: block !important;
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      }
    </style>
    <!--user entered Head Start-->
    

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Eczar|Montserrat|Lato|Open+Sans|Raleway|Roboto&ampdisplay=swap">


     <!--End Head user entered-->
  </head>
  <body>
    <center class="wrapper" data-link-color="#1188e6" data-body-style="font-size: 14px; font-family: comic sans ms,cursive; color: #000000; background-color: #ececec;">
      <div class="webkit">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#ececec">
          <tr>
            <td valign="top" bgcolor="#ececec" width="100%">
              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <!--[if mso]>
                          <center>
                          <table><tr><td width="700">
                          <![endif]-->
                          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width:700px;" align="center">
                            <tr>
                              <td role="modules-container" style="padding: 0px 0px 0px 0px; color: #000000; text-align: left;" bgcolor="#FFFFFF" width="100%" align="left">
                                
    <table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%"
           style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
      <tr>
        <td role="module-content">
          <p>This text will be used as a preview snippet in most modern email clients.</p>
        </td>
      </tr>
    </table>
  <table class="module" role="module" data-type="code" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td height="100%" valign="top">
          <h1 style="text-align: center;"><span style="font-family:"Eczar",serif;"><span style="color:#1c1c1c;"><span style="font-size: 48px;">${survey.title}</span></span></span></h1>
        </td>
      </tr>
    </table>
    <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td style="font-size:6px;line-height:10px;background-color:#FFFFFF;padding:0px 50px 0px 50px;" valign="top" align="left">
          <img class="max-width" width="700" src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80" alt="" border="0" style="display:block;color:#000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;max-width:100% !important;width:100%;height:auto !important;">
        </td>
      </tr>
    </table>
  
    <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td style="padding:10px 20px 20px 20px;"
            height="100%"
            valign="top"
            bgcolor="">
            <div style="text-align: center;"><span style="font-size:16px;"><span style="font-family:georgia,serif;"><span style="color:#626262;">You have recently been using our services and we would greatly appreciate if you took the time to give us your feedback. In case you have any suggestions, please do not hesitate to send us an email and we will do our best to give you a better experience!</span></span></span></div>

        </td>
      </tr>
    </table>
  
    <table class="module"
           role="module"
           data-type="divider"
           border="0"
           cellpadding="0"
           cellspacing="0"
           width="100%"
           style="table-layout: fixed;">
      <tr>
        <td style="padding:0px 300px 0px 300px;"
            role="module-content"
            height="100%"
            valign="top"
            bgcolor="">
          <table border="0"
                 cellpadding="0"
                 cellspacing="0"
                 align="center"
                 width="100%"
                 height="3px"
                 style="line-height:3px; font-size:3px;">
            <tr>
              <td
                style="padding: 0px 0px 3px 0px;"
                bgcolor="#000000"></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  
    <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td style="padding:18px 0px 18px 0px;line-height:22px;text-align:inherit;"
            height="100%"
            valign="top"
            bgcolor="">
            <h2 style="text-align: center;"><span style="font-family:georgia,serif;"><strong>${survey.body}</strong></span></h2>

        </td>
      </tr>
    </table>
  
    <table  border="0"
            cellpadding="0"
            cellspacing="0"
            align="center"
            width="100%"
            role="module"
            data-type="columns"
            data-version="2"
            style="padding:0px 0px 0px 0px;"
            bgcolor="">
      <tr role='module-content'>
        <td height="100%" valign="top">
            <!--[if (gte mso 9)|(IE)]>
              <center>
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-spacing:0;border-collapse:collapse;table-layout: fixed;" >
                  <tr>
            <![endif]-->
          
    <!--[if (gte mso 9)|(IE)]>
      <td width="350.000px" valign="top" style="padding: 0px 0px 0px 0px;border-collapse: collapse;" >
    <![endif]-->

    <table  width="350.000"
            style="width:350.000px;border-spacing:0;border-collapse:collapse;margin:0px 0px 0px 0px;"
            cellpadding="0"
            cellspacing="0"
            align="left"
            border="0"
            bgcolor=""
            class="column column-0 of-2
                  empty"
      >
      <tr>
        <td style="padding:0px;margin:0px;border-spacing:0;">
            <table border="0" cellPadding="0" cellSpacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%"><tbody><tr><td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 0px 100px"><table border="0" cellPadding="0" cellSpacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center"><tbody><tr><td align="center" bgcolor="#333333" class="inner-td" style="border-radius:6px;font-size:16px;text-align:center;background-color:inherit"><a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes" style="background-color:#333333;border:1px solid #333333;border-color:#333333;border-radius:6px;border-width:1px;color:#ffffff;display:inline-block;font-family:arial,helvetica,sans-serif;font-size:16px;font-weight:normal;letter-spacing:0px;line-height:16px;padding:12px 18px 12px 18px;text-align:center;text-decoration:none;width:40%" target="_blank">Yes</a></td></tr></tbody></table></td></tr></tbody></table>
        </td>
      </tr>
    </table>

    <!--[if (gte mso 9)|(IE)]>
      </td>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
      <td width="350.000px" valign="top" style="padding: 0px 0px 0px 0px;border-collapse: collapse;" >
    <![endif]-->

    <table  width="350.000"
            style="width:350.000px;border-spacing:0;border-collapse:collapse;margin:0px 0px 0px 0px;"
            cellpadding="0"
            cellspacing="0"
            align="left"
            border="0"
            bgcolor=""
            class="column column-1 of-2
                  empty"
      >
      <tr>
        <td style="padding:0px;margin:0px;border-spacing:0;">
            <table border="0" cellPadding="0" cellSpacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%"><tbody><tr><td align="center" bgcolor="" class="outer-td" style="padding:0px 100px 0px 0px"><table border="0" cellPadding="0" cellSpacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center"><tbody><tr><td align="center" bgcolor="#333333" class="inner-td" style="border-radius:6px;font-size:16px;text-align:center;background-color:inherit"><a href="${keys.redirectDomain}/api/surveys/${survey.id}/no" style="background-color:#333333;border:1px solid #333333;border-color:#333333;border-radius:6px;border-width:1px;color:#ffffff;display:inline-block;font-family:arial,helvetica,sans-serif;font-size:16px;font-weight:normal;letter-spacing:0px;line-height:16px;padding:12px 18px 12px 18px;text-align:center;text-decoration:none;width:40%" target="_blank">No</a></td></tr></tbody></table></td></tr></tbody></table>
        </td>
      </tr>
    </table>

    <!--[if (gte mso 9)|(IE)]>
      </td>
    <![endif]-->
            <!--[if (gte mso 9)|(IE)]>
                  <tr>
                </table>
              </center>
            <![endif]-->
        </td>
      </tr>
    </table>
  
    <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td style="padding:10px 0px 0px 0px;line-height:22px;text-align:inherit;"
            height="100%"
            valign="top"
            bgcolor="">
            <div>
<blockquote style="position: relative; border-left-width: initial; border-left-style: none; margin: 40px 34.7969px 38px; font-style: italic; text-align: center; color: rgb(34, 34, 34); font-family: Verdana, Geneva, sans-serif; font-size: 16px; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400;">
<p style="font-family: Verdana, Geneva, sans-serif; font-size: 18px; line-height: 25px; margin-bottom: 26px; overflow-wrap: break-word; font-weight: 400; color: rgb(114, 114, 114); font-style: italic;"><span style="font-size:10px;"><span style="font-family:georgia,serif;">&copy; 2019 Emaily,&nbsp;All Rights Reserved</span></span></p>
</blockquote>
</div>

        </td>
      </tr>
    </table>
  
                              </td>
                            </tr>
                          </table>
                          <!--[if mso]>
                          </td></tr></table>
                          </center>
                          <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </center>
  </body>
</html>
  `
}