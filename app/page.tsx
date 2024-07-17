import LoadMore from "@/components/LoadMore";
import { fetchMovies } from "./actions";
import { lists } from "@/constants";

async function Home() {
	const data = await fetchMovies(1);

	return (
		<main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
			<div>
				<h2 className="text-3xl text-white font-bold">
					Explore Movies
				</h2>
				<ul className="text-white list-none flex items-center justify-end gap-12">
					{lists.map((list) => (
						<li
							key={list.id}
							className="px-3 py-2 hover:bg-slate-600 rounded-lg cursor-pointer font-medium border bg-opacity-25"
						>
							{list.name}
						</li>
					))}
				</ul>
			</div>

			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data}
			</section>
			<LoadMore />
		</main>
	);
}

export default Home;
