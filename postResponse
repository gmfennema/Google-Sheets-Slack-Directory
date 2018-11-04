function postResponse(first, last, birthday, hire, team, role, email, srcChannel) {

  // FORMAT DATES AND CALCULATE TIME
  var current = new Date();
  var dateDiff = Math.floor((current - hire) / (1000*60*60*24*7*52));
  
  var birthdayMonth = birthday.getMonth() + 1;
  
  // RESPONSE PAYLOAD
  var payload = {
    "channel": "#"+srcChannel,
    "username": "New Update",
    "icon_emoji": ":white_check_mark:",
    "link_names": 1,
    "attachments":[
       {
          "fallback": "This is an update from a Slackbot integrated into your organization. Your client chose not to show the attachment.",
          "pretext": "Here\'s what we found",
          "author_name": "Basic Info",
          "mrkdwn_in": ["pretext"],
          "color": "#3671d1",
          "fields":[
             {
                "title":"Name",
                "value": first+" "+last,
                "short":true
             },
            {
                "title":"Team",
                "value": team,
                "short":true
             },
            {
                "title":"Email",
                "value": email,
                "short":false
             }
          ]
       },
      {
        
       "color": "#3671d1",
        "author_name": "Important Dates",
        "fields":[
             {
                "title":"Anniversary",
                "value":"Member of the *"+dateDiff+" Year Club*. \nHired on _"+hire.toLocaleDateString()+"_",
                "short":true
             },
            {
              "title":"Birthday :birthday:",
                "value": first+"\'s birthday is _"+birthdayMonth+"/"+birthday.getDate()+"_",
                "short":true
             }
        
        ] 
      },
      {
       "color": "#3671d1",
        "author_name": "How They Help",
        "fields":[
             {
                "title":"What "+first+ " Does",
                "value": role,
                "short":false
             }
        
        ] 
      }
    ]
  };

  var url = 'https://hooks.slack.com/services/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';
  var options = {
    'method': 'post',
    'payload': JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(url,options);
}
