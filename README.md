# mediafire-dl
Download from mediafire using CLI.
# Usage
mediafire-dl requires [Bun](bun.sh)

- Downloads almost **any URL**

```bun main.js https://www.mediafire.com/file/8f46sunxboqqvak/LICENSE.txt/file```

```bun main.js https://www.mediafire.com/file/8f46sunxboqqvak```

```bun main.js 8f46sunxboqqvak```

- Select the target directory with **--output** (-o)

```bun main.js https://www.mediafire.com/file/8f46sunxboqqvak/LICENSE.txt/file --output downloads/licenses```

```bun main.js 8f46sunxboqqvak -o downloads```

- Download multiple links from a file **--batch** (-b)

```bun main.js --batch links.txt```

```bun main.js -b links.txt```
