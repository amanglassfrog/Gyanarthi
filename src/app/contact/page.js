import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/Components/Contact/Contact"), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Page() {
  return <Contact />;
}





