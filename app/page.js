// Example file structure, app/[...page]/page.js
// You could alternatively use src/app/[...page]/page.js
import { builder } from "@builder.io/sdk";
// import { RenderBuilderContent } from "../../components/builder";
import { RenderBuilderContent } from "@/components/builder";

// Replace with your Public API Key
const YOUR_API_KEY = '2fa337738072419589aaa019bd9defbc'; // Make sure to set your API key here
builder.init(YOUR_API_KEY);

export default async function Page(props) {
  const model = "home-page";
  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      prerender: false,
    })
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={model} />
    </>
  );
}
