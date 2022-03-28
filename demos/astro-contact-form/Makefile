.PHONY: build deploy

help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {sub("\\\\n",sprintf("\n%22c"," "), $$2);printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build static binary and put itin the functions directory.
	@cargo build --release --target x86_64-unknown-linux-musl
	@cargo install --force cargo-strip
	@cargo strip --target x86_64-unknown-linux-musl
	@mkdir -p netlify/functions
	@cp target/x86_64-unknown-linux-musl/release/message_via_telegram_bot netlify/functions

deploy: build ## Deploy the site using Netlify's CLI
	@netlify deploy --prod