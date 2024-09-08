
# Enbale Levels

:::note

This command will not work if levels are already enbaled on you server

:::

## Usage
`/levels enable`  Enableds levels on your server and sets up with the default config

## Default Config
### Level Up Message
Congratulations `{user:mention}` you have leveled up to level `{user:level}`!\
You can change this with  [`/levels set-message`](./set-message)\
You can also disable level up messages with [`/levels disabled-message`](./disable-message)

### Level Up Channel
By default the level up messages will be sent in the channel that the user levels up in.\
You can change this with [`/levels set-message-channel`](./set-message-channle)

### Stack Rewards
By default it sets this to true, which means that as a user gets a new level reward they will keep the old ones they have earned.\
You can change this with [`/levels stack-rewards`](./stack-rewards)
