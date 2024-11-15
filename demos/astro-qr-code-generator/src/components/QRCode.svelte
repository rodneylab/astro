<script lang="ts">
	import QRCode from 'qrcode';

	let { url }: { url: string } = $props();

	function generateQRCode(canvasElement: HTMLCanvasElement, url: string) {
		QRCode.toCanvas(canvasElement, url, function (error: unknown) {
			if (error) {
				console.error(`Error creating QRCode: ${error as string}`);
			}
		});
	}

	function useQRCodeCanvas(node: HTMLCanvasElement, { url }: { url: string }) {
		generateQRCode(node, url);

		return {
			update({ url: newUrl }) {
				generateQRCode(node, newUrl);
			},
		};
	}
</script>

<canvas use:useQRCodeCanvas={{ url }}></canvas>

<style>
	canvas {
		margin: 0 auto;
		padding: auto;
	}
</style>
