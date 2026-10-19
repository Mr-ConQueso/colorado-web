<script lang="ts"></script>

<div class="marquee-container">
	<div class="marquee-content retro-font">
		<span>PRO-HISTORIC GAMES / GAMES IN A BARREL / PRO-HISTORIC GAMES / GAMES IN A BARREL /</span>
		<span>PRO-HISTORIC GAMES / GAMES IN A BARREL / PRO-HISTORIC GAMES / GAMES IN A BARREL /</span>
	</div>
</div>

<style>
    .marquee-container {
        width: 100%;
        background: var(--black);
        color: var(--pink);
        border-top: var(--border-thick) solid var(--black);
        border-bottom: var(--border-thick) solid var(--black);
        padding: 1rem 0;
        overflow: hidden;
        position: relative;
        white-space: nowrap;
        display: flex;
    }

    .marquee-content {
        display: inline-block;
        font-size: 1.5rem;
        letter-spacing: 2px;
        animation: marquee 20s linear infinite;
    }

    .marquee-content span {
        padding-right: 1rem;
    }

    @keyframes marquee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>