"use client";

import { useEffect, useRef } from "react";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

type Props = {
	handleDismiss: () => void;
	children: React.ReactNode;
};

function Modal({ handleDismiss, children }: Props) {
	const closeBtnRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const currentlyFocusedElem = document.activeElement;

		closeBtnRef.current?.focus();

		return () => {
			(currentlyFocusedElem as HTMLElement)?.focus();
		};
	}, []);

	useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.code === "Escape") {
				handleDismiss();
			}
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleDismiss]);

	return (
		<FocusLock>
			<RemoveScroll>
				<div className="fixed inset-0 grid place-content-center p-4 md:p-16 z-10">
					<div
						className="absolute inset-0 bg-black/75"
						onClick={handleDismiss}
					/>
					<div
						className="relative bg-white rounded-lg p-8"
						role="dialog"
						aria-modal="true"
					>
						<button
							ref={closeBtnRef}
							className="absolute top-0 right-0 p-4 text-white -translate-y-full cursor-pointer bg-transparent border-none"
							onClick={handleDismiss}
						>
							<Close />
						</button>
						{children}
					</div>
				</div>
			</RemoveScroll>
		</FocusLock>
	);
}

export default Modal;
