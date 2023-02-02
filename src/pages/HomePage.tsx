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
									class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white hover:text-white"
									aria-current="page"
								>
									Hjem
								</a>
							</li>
							<li>
								<a
									href="resultat"
									class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									resultat
								</a>
							</li>
							<li>
								<a
									href="medlemmer"
									class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
			<p class="text-3xl mt-6">Det beste League of Legends laget!</p>
			<p class="text-3xl mt-6">1-0</p>
			<div class="border(r-4 l-4 red-500) w-1/2 ml-auto mr-auto mt-14 text-2xl">
				<p>Kort tekst</p>
			</div>
		</div>
	);
}
