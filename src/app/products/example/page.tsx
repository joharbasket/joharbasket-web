// src/app/products/example/page.tsx
"use client";

import CategoryDisplay from "@/components/CategoryDisplay"; // Adjust path if necessary

const ExampleProductPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Example Product Page</h1>
      <p>This page demonstrates the usage of the CategoryDisplay component.</p>
      <p>When this page loads, category data will be fetched and logged to the browser console.</p>
      <hr style={{ margin: '20px 0' }} />
      <CategoryDisplay />
    </div>
  );
};

export default ExampleProductPage;