export default {
	// The scheduled handler is invoked at the interval set in wrangler.jsonc's [[triggers]] configuration.
	async scheduled(event, env, ctx) {
		try {
			const resp = await fetch('https://attendance.spike.center/api/cron', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-cron-key': 'a0f5e8c4-1b3e-4f3d-9f2e-1c2d3e4f5g6h'
				}
			});

			if (!resp.ok) {
				console.error(`Request failed with status ${resp.status}`);
			} else {
				console.log(`trigger fired at ${event.cron}: success`);
			}
		} catch (error) {
			console.error(`Error during scheduled trigger:`, error);
		}
	},
} satisfies ExportedHandler<Env>;
