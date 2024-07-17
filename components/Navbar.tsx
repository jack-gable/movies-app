import React from "react";

const Navbar = () => {
	return (
		<header className="sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0 relative">
			<div className="bg-hero bg-center bg-cover bg-no-repeat w-full h-full absolute top-0 left-0 opacity-65"></div>
			<nav className="flex-1 flex flex-col gap-10 z-[2]">
				<a href="/">
					<h1 className="text-white sm:text-6xl text-4xl font-bold">
						Movies4All
					</h1>
				</a>

				<h2 className="sm:text-6xl text-2xl text-white lg:max-w-lg font-bold leading-[120%] self-end">
					Explore The{" "}
					<span className="blue-gradient">Diverse World</span> of
					Movie Magic
				</h2>
			</nav>
		</header>
	);
};

export default Navbar;
