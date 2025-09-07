import api from "../lib/api";

export async function getServerSideProps() {
  const response = await api.get("/properties");
  return { props: { properties: response.data } };
}
