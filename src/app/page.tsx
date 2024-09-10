"use client";

import dynamic from "next/dynamic";
import {useEffect, useState} from "react";

const Panorama = dynamic(() => import("@/components/panorama").then((mod) => mod.Panorama), {
	ssr: false,
});

export default function Page() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted || typeof window === 'undefined') {
		return null;
	}
	return <Panorama />
}