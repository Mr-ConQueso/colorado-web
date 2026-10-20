export function trackMatomoEvent(category: string, action: string, name?: string): void {
	if (typeof window === 'undefined') return;

	const queue = window._paq;
	if (!queue) return;

	const event = name ? ['trackEvent', category, action, name] : ['trackEvent', category, action];

	queue.push(event);
}
