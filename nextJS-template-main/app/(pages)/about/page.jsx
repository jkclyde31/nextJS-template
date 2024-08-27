'use client';
import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import NotFound from "@/app/component/NotFound";

// Initialize Builder.io with your API key
builder.init('2fa337738072419589aaa019bd9defbc');

export default function CatchAllRoute() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window !== 'undefined') {
      async function fetchContent() {
        const content = await builder
          .get("about-page", {
            url: window.location.pathname
          })
          .promise();

        setContent(content);
        setNotFound(!content);

        // Set the document title if content is found
        if (content?.data.title) {
          document.title = content.data.title;
        }
      }
      fetchContent();
    }
  }, []);

  // If no page is found and not in preview mode, return 404 page
  if (notFound && !isPreviewingInBuilder) {
    return <NotFound />;
  }

  // Return the page when found
  return (
    <>
      {/* Render the Builder page */}
      <BuilderComponent model="about-page" content={content} />
    </>
  );
}
