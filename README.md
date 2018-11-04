# Google Sheets to Slack Company Directory

This Slack app integrates with Google Sheets to help maintain an accessible and easily updatable company directory

## Getting Started

### Prerequisites

- Access to Slack, and necessary permissions
- Google Sheets App Scripts

### Installing

#### Format Your Sheet

Open a new Google Sheet and format it like the following

| User | First  | Last    | Email                 | Birthday | Department | Hire Date | Person | Role      |
| -----|:------:|:-------:|:---------------------:|:--------:|:----------:|:---------:|:------:|:---------:|
| Jim  |  Jim   | Halpert | jim@dundermifflin.com | 6/30     | Sales      | 3/24/2005 | Pam    | Sell Paper|


#### Paste Code Into App Scripts

Next paste
`Input.gs`
`nameRanges.gs`
`postResponse.gs`

Into your Google Sheets App Script console

#### Create Outgoing Webhook

`https://[YOUR WORKSPACE].slack.com/apps/A0F7VRG6Q-outgoing-webhooks?next_id=0`

Paste this into `postResponse.gs`
