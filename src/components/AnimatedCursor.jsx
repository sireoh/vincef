import { useEffect, useState } from 'react';
import { convertAniBinaryToCSS } from 'ani-cursor';

const AnimatedCursor = () => {
	const [injectedCSS, setInjectedCSS] = useState('');

	useEffect(() => {
		const loadCursors = async () => {
			try {
				// 1. Fetch the binary data for both .ani files
				const [normalRes, linkRes] = await Promise.all([
					fetch('/cursors/01-Normal.ani'),
					fetch('/cursors/02-Link.ani')
				]);

				const normalBin = new Uint8Array(await normalRes.arrayBuffer());
				const linkBin = new Uint8Array(await linkRes.arrayBuffer());

				// 2. Convert binaries to CSS strings using your library logic
				// Normal cursor applies to the body
				const normalCSS = convertAniBinaryToCSS('body', normalBin);

				// Link cursor applies to interactive elements
				const linkCSS = convertAniBinaryToCSS('a, button, [role="button"]', linkBin);

				// 3. Store the combined CSS to be rendered in the style tag
				setInjectedCSS(normalCSS + linkCSS);
			} catch (err) {
				console.error("Failed to process .ani cursors:", err);
			}
		};

		loadCursors();
	}, []);

	// Return a style tag containing the generated @keyframes and selectors
	return <style dangerouslySetInnerHTML={{ __html: injectedCSS }} />;
};

export default AnimatedCursor;