// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://bff-service:3000')
  const data = await res.text()

  // Pass data to the page via props
  return { props: { data } }
}

export default function Home({ data }) {
  return <p>{data}</p>
}
