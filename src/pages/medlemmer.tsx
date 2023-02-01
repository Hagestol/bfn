export default function HomePage() {
	return (
		<div class="bg-gray-800 text-center  m-auto min-h-screen text-white">
			<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
				<div class="container flex flex-wrap items-center justify-between mx-auto">
					<a href="/" class="flex items-center">
						<img
							src="https://i.bo3.no/image/316534/bfn-squad-logo-2.png?c=1&h=120&w=120"
							class="h-6 mr-3 sm:h-9 rounded-full"
							alt="Flowbite Logo"
						/>
						<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BFN</span>
					</a>
					<div class=" w-full md:block md:w-auto" id="navbar-default">
						<ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<a
									href="/"
									class="block py-2 pl-3 pr-4 text-gray-700  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-gray-400 hover:text-white"
									aria-current="page"
								>
									Hjem
								</a>
							</li>
							<li>
								<a
									href="OmOss"
									class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Om oss
								</a>
							</li>
							<li>
								<a
									href="medlemmer"
									class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Medlemmer
								</a>
							</li>
							<li></li>
						</ul>
					</div>
				</div>
			</nav>

			<h1 class="text-3xl mt-12 sm:(mt-28 text-6xl)">BFN</h1>
			<p class="text-3xl mt-6 mb-6">Medlemmer av BFN!</p>
			<div class="grid gap-4 max-w-[350px] mx-auto md:(grid-rows-1 grid-cols-5 max-w-full m-6)">
				<a
					href="#"
					class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
				>
					<img
						class="w-10 h-10 rounded-full"
						src="https://i.bo3.no/image/298497/titan.jpg?c=1&h=120&w=120"
						alt="Rounded avatar"
					></img>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Joikaken</h5>
					<p class="font-normal text-gray-700 dark:text-gray-400">
						Registrerte seg 1. september 2020 Nasjonalitet Norge Hjemfylke Vestland
					</p>
				</a>
				<a
					href="#"
					class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
				>
					<img
						class="w-10 h-10 rounded-full"
						src="https://i.bo3.no/image/343051/user.png?c=1&h=120&w=120"
						alt="Rounded avatar"
					></img>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HellStriker</h5>
					<p class="font-normal text-gray-700 dark:text-gray-400">Registrerte seg 14. mars 2019 Nasjonalitet Norge</p>
				</a>
				<a
					href="#"
					class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
				>
					<img
						class="w-10 h-10 rounded-full"
						src="https://i.bo3.no/image/343051/user.png?c=1&h=120&w=120"
						alt="Rounded avatar"
					></img>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vacant</h5>
					<p class="font-normal text-gray-700 dark:text-gray-400">
						Registrerte seg 26. oktober 2020 Nasjonalitet Norge Hjemfylke Vestland
					</p>
				</a>
				<a
					href="#"
					class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
				>
					<img
						class="w-10 h-10 rounded-full"
						src="https://i.bo3.no/image/299512/titan-profilbilde.png?c=1&h=120&w=120"
						alt="Rounded avatar"
					></img>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dragomar</h5>
					<p class="font-normal text-gray-700 dark:text-gray-400">
						Registrerte seg 11. januar 2021 Nasjonalitet Norge Hjemfylke Vestland
					</p>
				</a>
				<a
					href="#"
					class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
				>
					<img
						class="w-10 h-10 rounded-full"
						src="https://i.bo3.no/image/298406/v.jpg?c=1&h=120&w=120"
						alt="Rounded avatar"
					></img>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kitty</h5>
					<p class="font-normal text-gray-700 dark:text-gray-400">Registrerte seg 27. august 2020 Nasjonalitet Norge</p>
				</a>
			</div>
			<embed
				id="profile"
				class=""
				src="https://leaguestats.gg/summoner/euw/Joikakaken125"
				style="width:1860px; height: 800px;"
			></embed>
		</div>
	);
}
