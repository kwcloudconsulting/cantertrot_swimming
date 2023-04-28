import React from "react";
import Layout from "../components/Layout";

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>Oops! This is embarrassing!</h1>
          <h3>This page cannot be found</h3>
        </section>
      </main>
    </Layout>
  );
};

export default Error;
