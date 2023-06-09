
export default function Home() {
	return (
		<div>
			<main className="wrapper">
				<h1>Data fetching in Next13</h1>
				<p>Next.js 13 introduced a new way to fetch and manage data in your application. The API has been simplified to align with React and the Web Platform. This means previous Next.js APIs such as getServerSideProps, getStaticProps, and getInitialProps are not supported in the new app directory. Instead, there is one flexible way to fetch, cache, and revalidate data at the component level.</p>
			</main>
		</div>
	)
}
