import {parseArgs} from 'util'

const {values, positionals} = parseArgs({
	options: {
		output: {
			short: 'o',
			type: 'string',
			default: '.'
		},
		batch: {
			short: 'b',
			type: 'string'
		}
	},
	allowPositionals: true,
	args: Bun.argv.slice(2)
})

import {resolveURL, parseName} from './mediafire'

const download = url => resolveURL(url)?.then(url => url && fetch(url).then(res => res.blob().then(blob => Bun.write(`${values.output}/${parseName(res.url)}`, blob))))

if (values.batch) Bun.file(values.batch).text().then(t => t.split('\r\n').forEach(download))
else if (positionals[0]) download(positionals[0])