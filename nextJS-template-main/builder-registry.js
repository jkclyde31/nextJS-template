"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Footer from "./app/component/Footer";
import Header from "./app/component/Header";
import { MyFunComponent } from "./app/component/MyFunComponent";
import NotFound from "./app/component/NotFound";
import PrimaryButton from "./app/component/PrimaryButton";

// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

builder.init("2fa337738072419589aaa019bd9defbc");

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(PrimaryButton, {
  name: "PrimaryButton",
});

Builder.registerComponent(MyFunComponent, {
  name: "MyFunComponent",
  inputs: [{ name: "text", type: "string", defaultValue: "Hello, Builder!" }],
  defaults: {
    //defaultStyles
  },
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(NotFound, {
  name: "NotFound",
});
