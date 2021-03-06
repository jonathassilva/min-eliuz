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
      <img src='data:image/png;base64,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' style={{display: 'block', marginLeft: 0, marginRight: 'auto'}} />
    </p>
  )
}
