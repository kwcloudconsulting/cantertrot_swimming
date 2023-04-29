import React from "react";
import Layout from "../components/Layout";
import Alllessons from "../components/Alllessons";

const Book = () => {
  return (
    <Layout>
      <main className="page">
        <Alllessons />
      </main>
    </Layout>
  );
};

export default Book;
