import { setTimeout as asyncSetTimeout } from "node:timers/promises";

const {
	"dist-tags": { latest },
	versions,
} = await (await fetch("https://registry.npmjs.org/cmath-js")).json();

const {
	[latest]: {
		dist: { tarball },
	},
} = versions;

const limit = 8 + Math.floor(3 * Math.random());
for (let tries = 0; tries < limit; ++tries) {
	await asyncSetTimeout(400);
	await (await fetch(tarball, { cache: "no-store" })).blob();
	console.log(`Attempt ${tries}`);
}
