declare global {
	namespace App {
        interface Platform {
            env: Env
            cf: CfProperties
            ctx: ExecutionContext
        }
    }
	interface Window {
		_paq?: unknown[][];
	}
}

export {};