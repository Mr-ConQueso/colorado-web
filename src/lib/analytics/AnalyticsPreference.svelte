<!-- src/lib/analytics/AnalyticsPreference.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	const COOKIE_NAME = 'site_analytics_optout';

	let optedOut = false;
	let ready = false;

	function readPreference(): boolean {
		return document.cookie
			.split(';')
			.some((cookie) =>
				cookie.trim() === `${COOKIE_NAME}=1`
			);
	}

	function savePreference(optOut: boolean): void {
		const secure =
			window.location.protocol === 'https:' ? '; Secure' : '';

		if (optOut) {
			document.cookie =
				`${COOKIE_NAME}=1; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
		} else {
			document.cookie =
				`${COOKIE_NAME}=; Max-Age=0; Path=/; SameSite=Lax${secure}`;
		}

		optedOut = readPreference();

		// Reload so Matomo initializes (or stays disabled)
		// according to the newly saved preference.
		window.location.reload();
	}

	function optOut(): void {
		savePreference(true);
	}

	function optIn(): void {
		savePreference(false);
	}

	onMount(() => {
		optedOut = readPreference();
		ready = true;
	});
</script>

<section class="analytics-preference" aria-labelledby="analytics-preference-title">
	<div class="preference-header">
		<h2 id="analytics-preference-title">Analytics Preferences</h2>
		{#if ready}
			<span class="status-badge {optedOut ? 'opted-out' : 'active'}">
				{optedOut ? 'Opted Out' : 'Active'}
			</span>
		{/if}
	</div>

	<p>
		You can opt out of website analytics at any time. This preference is stored securely in a first-party cookie. Your browser's Do Not Track preference is also respected automatically.
	</p>

	{#if ready}
		<div class="actions">
			{#if optedOut}
				<button class="btn-primary" type="button" onclick={optIn}>
					Allow Analytics
				</button>
			{:else}
				<button class="btn-secondary" type="button" onclick={optOut}>
					Opt Out of Analytics
				</button>
			{/if}
		</div>
	{/if}
</section>

<style>
    .analytics-preference {
        background: #fafafc;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 16px;
        padding: 2.5rem;
        margin-top: 4rem;
    }

    .preference-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .analytics-preference h2 {
        font-family: var(--font-rounded);
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--text-primary);
        margin: 0;
    }

    .analytics-preference p {
        font-size: 1.05rem;
        line-height: 1.7;
        color: #4a4d55;
        margin: 0 0 2rem 0;
    }

    .status-badge {
        padding: 8px 14px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 800;
        text-transform: uppercase;
        white-space: nowrap;
    }

    .status-badge.active {
        background: #e8f7f0;
        color: #0a8260;
        border: 1px solid #a2f3dc;
    }

    .status-badge.opted-out {
        background: #f5f3ee;
        color: var(--text-secondary);
        border: 1px solid rgba(0, 0, 0, 0.1);
    }

    .actions {
        display: flex;
        gap: 1rem;
    }

    button {
        font-family: var(--font-rounded);
        font-size: 0.95rem;
        font-weight: 800;
        padding: 14px 28px;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .btn-primary {
        background: var(--text-primary, #1a1a1a);
        color: #ffffff;
        border: none;
    }

    .btn-primary:hover {
        opacity: 0.9;
        transform: translateY(-2px);
    }

    .btn-secondary {
        background: transparent;
        color: var(--text-primary, #1a1a1a);
        border: 2px solid var(--text-primary, #1a1a1a);
    }

    .btn-secondary:hover {
        background: rgba(0, 0, 0, 0.03);
        transform: translateY(-2px);
    }

    @media (max-width: 600px) {
        .analytics-preference {
            padding: 2rem;
        }

        .preference-header {
            flex-direction: column;
            align-items: flex-start;
        }

        button {
            width: 100%;
        }
    }
</style>