---
id: command-syntax
---

# Command Syntax

:::danger

Do not literally type the `<>` , `[]` etc characters. They are used to denote placeholders and optional arguments.

:::

:::note

If an option is marked dynamic, for example `<foo:dynamic>`. Then you can use dynamic values. (see [Dynamic Values](./dynamic-values))

:::

`<foo>` This is a required argument.

`<foo|bar>` This is a required agrgument that can be either `foo` or `bar`.

`<foos...>` This is a required agrgument that can be repeated multiple times.

`[foo]` This is an optional argument.

`[foo|bar]` This is an optional argument that can be either `foo` or `bar`.

`[foo=default]` This is an optional argument with a default value of `default`.
