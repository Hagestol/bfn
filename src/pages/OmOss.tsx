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
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-default"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
					<div class="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<a
									href="/"
									class="block py-2 pl-3 pr-4 text-gray-700  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-gray-400 hover:text-white"
									aria-current="page"
								>
									Hjem
								</a>
							</li>
							<li>
								<a
									href="OmOss"
									class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Om oss
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
			<div class="mt-10 min-h-[100px] grid grid-cols-1 gap-2 content-center place-items-center">
				<a
					href="#"
					class="flex-col items-center justify-between block min-w-[800px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
				>
					<div class="">
						<div class="w-full text-lg font-semibold">Telialigaen Rekrutt: League of Legends - våren 2023</div> <br />
						<div class="flex items-center">
							<div class="w-1/3 text-red-500">Taper</div>
							<img
								class="rounded-full "
								src="https://i.bo3.no/image/325696/Carolina-Panthers-logo-cover-958x575.png?c=1&h=42&w=42"
								alt=""
							/>
							<div class="w-1/3">31.jan.2023</div>
							<img class="rounded-full" src="https://i.bo3.no/image/345432/BFN_squad_logo_2.png?c=1&h=42&w=42" alt="" />
							<div class="w-1/3 text-green-500">Vinner</div>
						</div>
					</div>
					<div class="">
						<div class="flex items-center">
							<div class="w-1/3">MOSS PANTHERS</div>
							<div class="w-1/3">0 - 2</div>
							<div class="w-1/3">BFN LoL</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
}