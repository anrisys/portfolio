import { Header, NotFoundOrg, Footer } from "../organism";

function PageNotFound() {
  return (
    <>
      <Header />
      <main>
        <NotFoundOrg />
      </main>
      <Footer />
    </>
  );
}

export default PageNotFound;
