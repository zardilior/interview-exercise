SENDER = "Jose Fort <jeestremadoyro@gmail.com>"
AWS_REGION = "us-west-2"
SUBJECT_PREFIX = "New Contact Message from "
CHARSET = "UTF-8"
    
# The HTML body of the email.
BODY_HTML = """
    <html>
    <head></head>
    <body>
      <h1>Amazon SES Test (SDK for Python)</h1>
      <p>This email was sent with
        <a href='https://aws.amazon.com/ses/'>Amazon SES</a> using the
        <a href='https://aws.amazon.com/sdk-for-python/'>
          AWS SDK for Python (Boto)</a>.</p>
    </body>
    </html>
"""    
SENDER = "Jose Fort <jeestremadoyro@gmail.com>"
AWS_REGION = "us-west-2"
SUBJECT_PREFIX = "New Contact Message from "
CHARSET = "UTF-8"

# The HTML body of the email.
WE_RECEIVED_YOUR_MESSAGE_HTML = """
<body>
  <style>
    body {{
      max-height:50vh;
      width:100%;
      display:flex;
      flex-direction: column;
      text-align:center;
      font-family: arial;
      text-decoration: italic;
    }}

    .message {{
      width: 50%;
      min-height: 150px;
      margin: 40px auto;
      padding: 30px;
      box-shadow: 5px 5px 10px 1px #ccc;
    }}
  </style>
  <div>
    <h3> Thanks for contacting us! </h3>
    <p class='message'><img src="https://mkdecision.com/mk-logo.png"></p>
    We will contact you in the next 24 hrs<br><br>
  </div>
</body>
"""
BODY_HTML = """
    <body>
  <style>
    body {{
      max-height:50vh;
      width:100%;
      display:flex;
      flex-direction: column;
      text-align:center;
      font-family: arial;
      text-decoration: italic;
    }}

    .message {{
      width: 50%;
      min-height: 150px;
      margin: 40px auto;
      padding: 30px;
      box-shadow: 5px 5px 10px 1px #999;
    }}
  </style>
  <div>
    <h3> {firstName} {lastName} from {companyName} sends: </h3>
    <p class='message'>{message}</p>
    Phone: <a href="tel:{phoneNumber}">{phoneNumber}</a></p>
  </div>
</body>
"""
