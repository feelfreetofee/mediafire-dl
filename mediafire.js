export const parseName = url => decodeURIComponent(url.match(/[^\/]*$/)[0].replaceAll('+', ' '))
export const resolveURL = url => (url = url.match(/[a-z|0-9]{15}/)) && fetch(`https://www.mediafire.com/file/${url}`).then(r => r.ok && r.text()).then(r => r?.match?.(/(?<=f=").*(?="\s+i)/)[0])