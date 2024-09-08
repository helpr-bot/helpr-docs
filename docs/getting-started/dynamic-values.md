# Dynamic Values
Throughout these docs you will see some values in a format that will look something like this `{user:username}`. These are dynamic values.

:::danger

Not all command support these values, so make sure it says you can use a dynamic value.

:::

## Where To Use
You can use these values in any option that has a `:dynamic` in it. For example `<foo:dynamic>`.

## How To Use
These values are based off of discord values, for example if you wanted to mention a user when they leveled up you could use `{user:mention}`

## Values

### User Values

+ `{user:username}` The user's username
+ `{user:mention}` Mentions the user
+ `{user:nickname}` The user's nickname

### Levels Values

+ `{user:level}` The user's level
+ `{user:xp}` The user's xp
