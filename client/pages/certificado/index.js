// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://bff-service:3000/author-name')
  const data = await res.text()

  // Pass data to the page via props
  return { props: { data } }
}

export default function Certificado({ data }) {
  return (
    <p>
      <p>Certificamos que</p>
      <p>{data}</p>
      <p>concluiu com sucesso a primeira semana do ProgramAção.</p>
    </p>
  )
}
