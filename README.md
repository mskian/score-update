# Live Score 🏏

![live-score-update](https://github.com/mskian/score-update/workflows/live-score-update/badge.svg?branch=master)  

Get Live IPL cricket Score on Telegram 🔔

## Requirements 📝

- Github Actions Workflow
- Live Score API - <https://github.com/mskian/iplscore/blob/master/api.php> (Download and Host it on your Server with PHP Support)
- Telegram Bot API and Channel ID (Add bot to your Channel)

## How it Works? ☕

- it works via Github actions <https://github.com/mskian/score-update/tree/master/.github/workflows>
- Trigger the Actions Every 5 Minutes
- Add your Telegram Bot Key, Chat ID and Match API URL in Github Secrets - <https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository>
- Github Action Workflow Automatically calls the ENV variable from Github Secrets
- Schedule the Cron job and Start the Action - <https://github.com/mskian/score-update/blob/c3de5254d1617e56b8490368f18949a908f6e717/.github/workflows/update.yml#L4>
- Now it will Update the Live Cricket Score Every 5 Minutes in the telegram channel

```sh
# Env example
APIURL = https://api.telegram.org/bot<BOT API KEY>/sendMessage
TELEGRAM_CHATID = <CHAT ID>
MATCHURL = https://score.example.com/api.php?url=https://www.espncricinfo.com/series/8048/game/1216492/mumbai-indians-vs-chennai-super-kings-1st-match-indian-premier-league-2020-21
```

## Development 🔔

```sh
git clone https://github.com/mskian/score-update.git
cd score-update
yarn install
yarn push
```

## LICENSE ☑

MIT
